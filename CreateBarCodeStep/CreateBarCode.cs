using Aspose.BarCode;
using Aspose.BarCode.Generation;
using DecisionsFramework;
using DecisionsFramework.Data.DataTypes;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.CoreSteps;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.Design.Properties;
using DecisionsFramework.ServiceLayer.Services.ContextData;
using System.IO;

/// <summary>
/// This is a new step added in 6.5 to Decisions, but provided as SDK example.
/// </summary>
namespace Temporary.BarcodeSteps
{
    [Writable]
    [AutoRegisterStep("Generate Bar Code", "Integration", "QR Codes")]
    public class CreateBarCodeStep : BaseFlowAwareStep, ISyncStep, IDataConsumer
    {
        private const string RESULT_DATA_FILE = "Barcode File";
        private const string INPUT_BAR_CODE_TEXT = "Barcode Text";
        private const string PATH_DONE = "Done";

        [PropertyHidden]
        public static string[] BarCodeFormats { get { return EncodeTypes.GetNames(); } }

        [WritableValue]
        [SelectStringEditor("BarCodeFormats")]
        public string BarcodeEncodingType { get; set; }

        public override OutcomeScenarioData[] OutcomeScenarios => new OutcomeScenarioData[] { new OutcomeScenarioData(PATH_DONE, new[] { new DataDescription(typeof(FileData), RESULT_DATA_FILE) }) };

        public DataDescription[] InputData => new DataDescription[] { new DataDescription(typeof(string), INPUT_BAR_CODE_TEXT) };

        public ResultData Run(StepStartData data)
        {
            // You will have to run another step before this one or provide a license for the Aspose library.
            // Step to run before this one: RecognizeBarcodesFromWordDoc.  

            string barCodeText = data[INPUT_BAR_CODE_TEXT] as string;

            if (string.IsNullOrEmpty(barCodeText))
            {
                throw new BusinessRuleException("You cannot generate a bar code without any barcode text.");
            }

            BarcodeGenerator generator = new BarcodeGenerator(GetEncodeTypeFromName(BarcodeEncodingType), barCodeText);
            generator.Parameters.Barcode.XDimension.Millimeters = 1f;
            FileData fdResult = null;

            using (MemoryStream ms = new MemoryStream())
            {
                // Save the image to your system and set its image format to Jpeg
                generator.Save(ms, BarCodeImageFormat.Jpeg);
                fdResult = new FileData("BarCode.jpg", ms.ToArray());
            }

            return new ResultData(PATH_DONE, new DataPair[] { new DataPair(RESULT_DATA_FILE, fdResult) });
        }

        private static BaseEncodeType GetEncodeTypeFromName(string barCodeFormat)
        {
            try
            {
                EncodeTypes.Parse(barCodeFormat, out BaseEncodeType parsedEncoding);
                return parsedEncoding;
            }
            catch
            {
                return EncodeTypes.UPCA;
            }
        }
    }
}