using DecisionsFramework.Data.DataTypes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Properties;
using System;
using System.IO;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography.Xml;
using System.Text;
using System.Xml;

namespace Aria.CitiConnect
{
    [AutoRegisterMethodsOnClass(true, "Aria", "Citi Connects")]
    public static class AriaCitiConnectSteps
    {
        public static FileData SignXml([PropertyClassification(0, "XML File", "Data")] FileData XMLFile, [LongTextPropertyEditor(250)][PropertyClassification(1, "X.509 Private Certificate (PEM Format)", "Data")] string PrivateCertificate, [LongTextPropertyEditor(250)][PropertyClassification(2, "X.509 Public Certificate (PEM Format)", "Data")] string PublicCertificate)
        {
            XmlDocument doc = new XmlDocument() { PreserveWhitespace = true };
            TextReader reader = new StringReader(Encoding.UTF8.GetString(XMLFile.Contents));
            doc.Load(reader);

            Reference reference = new Reference("");

            XmlDsigEnvelopedSignatureTransform envSignature = new XmlDsigEnvelopedSignatureTransform();
            reference.AddTransform(envSignature);

            XmlDsigC14NTransform xmlTransform = new XmlDsigC14NTransform(true);
            xmlTransform.Algorithm = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
            reference.AddTransform(xmlTransform);

            var publicCert = GetX509Certificate(PublicCertificate);
            KeyInfo keyInfo = new KeyInfo();
            var kdata = new KeyInfoX509Data(publicCert, X509IncludeOption.WholeChain);
            kdata.AddIssuerSerial(
                    publicCert.IssuerName.Name,
                    publicCert.SerialNumber);
            keyInfo.AddClause(kdata);

            var privateCertificate = GetX509Certificate(PrivateCertificate);
            SignedXml sig = new SignedXml(doc);
            sig.SignedInfo.CanonicalizationMethod = "http://www.w3.org/TR/2001/REC-xml-c14n-20010315";
            sig.SigningKey = privateCertificate.GetRSAPrivateKey();
            sig.AddReference(reference);
            sig.KeyInfo = keyInfo;
            sig.ComputeSignature();

            doc.DocumentElement.AppendChild(doc.ImportNode(sig.GetXml(), true));

            FileData outFileData = new FileData("SignedXML.xml", Encoding.Default.GetBytes(doc.OuterXml));

            return outFileData;
        }



        public static bool VerifyXml([PropertyClassification(0, "Signed XML File", "Data")] FileData XMLFile, [LongTextPropertyEditor(250)][PropertyClassification(2, "X.509 Public Certificate (PEM Format)", "Data")] string PublicCertificate)
        {
            var publicCert = GetX509Certificate(PublicCertificate);
            XmlDocument doc = new XmlDocument() { PreserveWhitespace = true };
            TextReader reader = new StringReader(Encoding.UTF8.GetString(XMLFile.Contents));
            doc.Load(reader);

            XmlElement signature = (XmlElement)doc.GetElementsByTagName("Signature")[0];

            SignedXml sig = new SignedXml(doc);
            sig.LoadXml(signature);

            bool bVerified = sig.CheckSignature(publicCert, false);

            return bVerified;
        }


		public static FileData EncryptXml([PropertyClassification(0, "XML File", "Data")] FileData XMLFile, [LongTextPropertyEditor(250)][PropertyClassification(2, "X.509 Public Certificate (PEM Format)", "Data")] string PublicCertificate)
		{

            var publicCert = GetX509Certificate(PublicCertificate);
            XmlDocument doc = new XmlDocument() { PreserveWhitespace = true };
            TextReader reader = new StringReader(Encoding.UTF8.GetString(XMLFile.Contents));
            doc.Load(reader);

            RSACryptoServiceProvider RSAkey = (RSACryptoServiceProvider)publicCert.PublicKey.Key;

			TripleDESCryptoServiceProvider tDESkey = new TripleDESCryptoServiceProvider();
			XmlElement elementToEncrypt = doc.DocumentElement;


			EncryptedXml eXml = new EncryptedXml();
			byte[] encryptedElement = eXml.EncryptData(elementToEncrypt, tDESkey, false);



			EncryptedData edElement = new EncryptedData();
			edElement.Type = EncryptedXml.XmlEncElementUrl;

			edElement.EncryptionMethod = new EncryptionMethod(EncryptedXml.XmlEncTripleDESUrl);

			// Encrypt the session key and add it to an EncryptedKey element.
			byte[] encryptedKey = EncryptedXml.EncryptKey(tDESkey.Key, RSAkey, false);

			EncryptedKey ek = new EncryptedKey();
			ek.CipherData = new CipherData(encryptedKey);
			ek.EncryptionMethod = new EncryptionMethod(EncryptedXml.XmlEncRSA15Url);

			edElement.KeyInfo = new KeyInfo();
			edElement.KeyInfo.AddClause(new KeyInfoEncryptedKey(ek));

			edElement.CipherData.CipherValue = encryptedElement;

			EncryptedXml.ReplaceElement(elementToEncrypt, edElement, false);

            return null;
		}

		public static FileData DecryptXml([PropertyClassification(0, "Encrypted XML File", "Data")] FileData XMLFile, [LongTextPropertyEditor(250)][PropertyClassification(1, "X.509 Private Certificate (PEM Format)", "Data")] string PrivateCertificate)
		{
            var privateCert  = GetX509Certificate(PrivateCertificate);
            XmlDocument doc = new XmlDocument() { PreserveWhitespace = true };
            TextReader reader = new StringReader(Encoding.UTF8.GetString(XMLFile.Contents));
            doc.Load(reader);


            RSACryptoServiceProvider RSAkey = (RSACryptoServiceProvider)privateCert.PrivateKey;
			TripleDESCryptoServiceProvider tDes = new TripleDESCryptoServiceProvider();

			XmlElement encryptedKey = doc.GetElementsByTagName("xenc:EncryptedKey")[0] as XmlElement;
			XmlElement cipherValue = encryptedKey.GetElementsByTagName("xenc:CipherValue")[0] as XmlElement;

			byte[] dec3DesKey = EncryptedXml.DecryptKey(
				System.Convert.FromBase64String(cipherValue.InnerText),
				RSAkey,
				false);

			tDes.Key = dec3DesKey;

			EncryptedXml encxml = new EncryptedXml(doc);
			EncryptedData encData = new EncryptedData();
			encData.LoadXml(doc.DocumentElement);
			byte[] content = encxml.DecryptData(encData, tDes);

			var output = ASCIIEncoding.ASCII.GetString(content);

			doc.LoadXml(output);

			var ret = new XmlDocument() { PreserveWhitespace = true };
			ret.LoadXml(output);


            FileData outFileData = new FileData("DecryptedXML.xml", Encoding.Default.GetBytes(ret.OuterXml));

            return outFileData;

		}


		private static X509Certificate2 GetX509Certificate(string certificateString)
        {
            var cert = new X509Certificate2(StringToByteArray(certificateString));
            return cert;
        }

        private static byte[] StringToByteArray(string st)
        {
            byte[] bytes = new byte[st.Length];
            for (int i = 0; i < st.Length; i++)
            {
                bytes[i] = (byte)st[i];
            }
            return bytes;
        }
    }
}
