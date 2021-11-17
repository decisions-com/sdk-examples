using Braintree;
using System.Collections.Generic;

namespace BraintreeComponents
{
    public interface IBraintreeConfiguration
    {
        IBraintreeGateway CreateGateway(string enviornment, string merchantId, string publickKey, string privateKey);
        IBraintreeGateway GetGateway(string enviornment, string merchantId, string publickKey, string privateKey);
    }

    public class BraintreeHostedFieldsOutput
    {
        public string TransactionId { get; set; }
        public string Status { get; set; }
        public List<BraintreeValidationError> ValidationError { get; set; }
    }

    public class BraintreeValidationError
    {
        public string Attribute { get; set; }
        public string Code { get; set; }
        public string Message { get; set; }
    }

    public class BraintreeConfiguration : IBraintreeConfiguration
    {
        private IBraintreeGateway BraintreeGateway { get; set; }

        /// <summary>
        /// Create new braintree gateway 
        /// </summary>
        /// <param name="environment">Braintree enviornment Sandbox/Production</param>
        /// <param name="merchantId">merchant ID is the unique identifier for your entire gateway account</param>
        /// <param name="publicKey">user-specific public identifier</param>
        /// <param name="privateKey">user-specific private identifier</param>
        /// <returns></returns>
        public IBraintreeGateway CreateGateway(string environment, string merchantId, string publicKey, string privateKey)
        {
            BraintreeGateway = new BraintreeGateway(environment, merchantId, publicKey, privateKey);
            return BraintreeGateway;
        }

        /// <summary>
        /// Get Braintree Gateway
        /// </summary>
        /// <param name="environment">Braintree enviornment Sandbox/Production</param>
        /// <param name="merchantId">merchant ID is the unique identifier for your entire gateway account</param>
        /// <param name="publicKey">user-specific public identifier</param>
        /// <param name="privateKey">user-specific private identifier</param>
        /// <returns></returns>
        public IBraintreeGateway GetGateway(string environment, string merchantId, string publicKey, string privateKey)
        {
            if (BraintreeGateway == null)
            {
                BraintreeGateway = CreateGateway(environment, merchantId, publicKey, privateKey);
            }

            return BraintreeGateway;
        }
    }
}
