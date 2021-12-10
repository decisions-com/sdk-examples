using Braintree;
using Decisions.Silverlight.UI.Core.FormDesignerModel;
using DecisionsFramework;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.Design.Properties;
using DecisionsFramework.ServiceLayer.Services.ContextData;
using DecisionsFramework.Utilities.Data;
using Silverdark.Components;
using System;
using System.Collections.Generic;

namespace BraintreeComponents
{
    public class BraintreeHostedFieldsFormControl : DataContentBase<Object, BraintreeHostedFieldsOutput>, IRuntimeValidationProvider
    {
        private string enviornment;
        private string merchantId;
        private string publicKey;
        private string privateKey;
        private string clientToken;
        private string merchantAccount;
        private string firstName;
        private string lastName;
        private decimal amount;
        private string orderId;
        private DescriptorRequest descriptorRequest;
        private string transactionId;
        private bool isValidationError = false;
        private string transactionStatus;
        private DateTime? transactionDateTime;
        private bool isTransactionSuccessful = false;
        private List<BraintreeValidationError> error = new List<BraintreeValidationError>();

        // Constant variables for exceution
        const string ENVIRONMENT_INPUT = "Environment";
        const string MERCHANT_ID_INPUT = "MerchantId";
        const string PUBLIC_KEY_INPUT = "PublicKey";
        const string PRIVATE_KEY_INPUT = "PrivateKey";
        const string AMOUNT_INPUT = "Amount";
        const string MERCHANT_ACCOUNT_INPUT = "MerchantAccount";
        const string FIRST_NAME_INPUT = "FirstName";
        const string LAST_NAME_INPUT = "LastName";
        const string ORDER_ID_INPUT = "OrderId";
        const string DESCRIPTOR_REQUEST_INPUT = "DescriptorRequest";
        const string ERROR_MESSAGE_TEXT = "Invalid card detail provided.";
        const string CLIENT_TOKEN_TEXT = "ClientToken";
        const string CLIENT_TOKEN_ERROR_TEXT = "ClientTokenError";
        const string TOKEN_ERROR_TEXT = "TokenError";
        const string NONCE_TEXT = "Nonce";

        //Initialize Log object to log any error
        static Log log = new Log(nameof(BraintreeHostedFieldsFormControl));

        /// <summary>
        /// Instance of the BraintreeConfiguration for gateway creation
        /// PropertyHidden make the poperty hidden, so that it is not visible in property grid
        /// </summary>
        [PropertyHidden]
        public IBraintreeConfiguration config = new BraintreeConfiguration();

        /// <summary>
        /// override to fullfill the implementation and called the base methods
        /// PropertyHidden make the poperty hidden, so that it is not visible in property grid
        /// </summary>
        [PropertyHidden]
        public override bool StaticInput
        {
            get { return base.StaticInput; }
            set { base.StaticInput = value; }
        }

        /// <summary>
        /// override to fullfill the implementation and called the base methods
        /// PropertyHidden make the poperty hidden, so that it is not visible in property grid
        /// </summary>
        [PropertyHidden]
        public override bool OutputOnly
        {
            get { return base.StaticInput; }
            set { base.OutputOnly = value; }
        }

        /// <summary>
        /// override to fullfill the implementation and called the base methods
        /// PropertyHidden make the poperty hidden, so that it is not visible in property grid
        /// </summary>
        [PropertyHidden]
        public override BraintreeHostedFieldsOutput DefaultValue
        {
            get { return base.DefaultValue; }
            set { base.DefaultValue = value; }
        }

        /// <summary>
        /// This method is called after the execution is done and it will return the output value
        /// </summary>
        /// <returns></returns>
        protected override BraintreeHostedFieldsOutput GetValue()
        {
            BraintreeHostedFieldsOutput braintreeHostedFieldsOutput = new BraintreeHostedFieldsOutput
            {
                TransactionId = transactionId,
                TransactionDateTime = transactionDateTime.ToString(),
                IsTransactionSuccessful = isTransactionSuccessful,
                Status = transactionStatus,
                ValidationError = error
            };
            return braintreeHostedFieldsOutput;
        }

        /// <summary>
        /// override to fullfill the implementation and called the base methods, as we are using ConsumeData
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        protected override bool SetValue(BraintreeHostedFieldsOutput value)
        {
            return false;
        }

        /// <summary>
        /// This method will have all the inputs provided by the user in form inputs and here we assign those values to a private variable for further execution
        /// </summary>
        /// <param name="data">list of all the form inputs provide by user </param>
        public override void ConsumeData(IDictionary<string, object> data)
        {
            if (data != null)
            {
                if (data.ContainsKey(ENVIRONMENT_INPUT))
                {
                    object value = data[ENVIRONMENT_INPUT];
                    if (value != null)
                    {
                        this.enviornment = (string)value;
                    }
                }
                if (data.ContainsKey(MERCHANT_ID_INPUT))
                {
                    object value = data[MERCHANT_ID_INPUT];
                    if (value != null)
                    {
                        this.merchantId = (string)value;
                    }
                }
                if (data.ContainsKey(PUBLIC_KEY_INPUT))
                {
                    object value = data[PUBLIC_KEY_INPUT];
                    if (value != null)
                    {
                        this.publicKey = (string)value;
                    }
                }
                if (data.ContainsKey(PRIVATE_KEY_INPUT))
                {
                    object value = data[PRIVATE_KEY_INPUT];
                    if (value != null)
                    {
                        this.privateKey = (string)value;
                    }
                }
                if (data.ContainsKey(AMOUNT_INPUT))
                {
                    object value = data[AMOUNT_INPUT];
                    if (value != null)
                    {
                        this.amount = (decimal)value;
                    }
                }
                if (data.ContainsKey(MERCHANT_ACCOUNT_INPUT))
                {
                    object value = data[MERCHANT_ACCOUNT_INPUT];
                    if (value != null)
                    {
                        this.merchantAccount = (string)value;
                    }
                }
                if (data.ContainsKey(FIRST_NAME_INPUT))
                {
                    object value = data[FIRST_NAME_INPUT];
                    if (value != null)
                    {
                        this.firstName = (string)value;
                    }
                }
                if (data.ContainsKey(LAST_NAME_INPUT))
                {
                    object value = data[LAST_NAME_INPUT];
                    if (value != null)
                    {
                        this.lastName = (string)value;
                    }
                }
                if (data.ContainsKey(ORDER_ID_INPUT))
                {
                    object value = data[ORDER_ID_INPUT];
                    if (value != null)
                    {
                        this.orderId = (string)value;
                    }
                }
                if (data.ContainsKey(DESCRIPTOR_REQUEST_INPUT))
                {
                    object value = data[DESCRIPTOR_REQUEST_INPUT];
                    if (value != null)
                    {
                        this.descriptorRequest = (DescriptorRequest)value;
                    }
                }
            }
            base.ConsumeData(data);
        }

        /// <summary>
        /// Initialize the Gateway and generate the ClientToken for Braintree Initialization and render the actual UI at the client-side
        /// </summary>
        public override DataPair[] ControlValues
        {
            get
            {
                DataPair[] returnValue;
                try
                {
                    //Get the Gateway to generate the client token by passing the details like Enviornment, MerchantId, PublicKey, PrivateKey
                    var gateway = config.GetGateway(enviornment, merchantId, publicKey, privateKey);
                    clientToken = gateway.ClientToken.Generate();
                    returnValue = new DataPair[] { new DataPair(CLIENT_TOKEN_TEXT, clientToken) };
                }
                catch (Exception ex)
                {
                    log.Error(ex);
                    returnValue = new DataPair[] { new DataPair(CLIENT_TOKEN_ERROR_TEXT, ex.Message) };
                }
                return returnValue;
            }
        }

        /// <summary>
        /// InputData is the List of Input for the form which user will map in the flow to execute the form.
        /// </summary>
        public override DataDescription[] InputData
        {
            get
            {
                List<DataDescription> inputs = new List<DataDescription>();
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), ENVIRONMENT_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), MERCHANT_ID_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), MERCHANT_ACCOUNT_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), PUBLIC_KEY_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), PRIVATE_KEY_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(decimal)), AMOUNT_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), FIRST_NAME_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), LAST_NAME_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(string)), ORDER_ID_INPUT));
                inputs.Add(new DataDescription(new DecisionsNativeType(typeof(DescriptorRequest)), DESCRIPTOR_REQUEST_INPUT));
                return inputs.ToArray();
            }
        }

        /// <summary>
        /// Process the Transaction once form is submitted 
        /// Once Nonce key is generated from client side then Transaction will get executed
        /// if Nonce key is not generarte or any error occured while executng Transaction then the error details will be logged
        /// </summary>
        /// <param name="dataDictionary"> Contains generated Nonce token or error while generating the Nonce token</param>
        public override void SetControlValue(FormDataDictionary dataDictionary)
        {
            if (dataDictionary == null || dataDictionary.Count == 0)
                return;

            //check for any error or Nonce not generated
            var controlData = dataDictionary[TOKEN_ERROR_TEXT];
            if (controlData == null)
            {
                //get the Nonce token
                controlData = dataDictionary[NONCE_TEXT];
                if (controlData != null)
                {
                    string nonce = controlData?.ToString();

                    var gateway = config.GetGateway(enviornment, merchantId, publicKey, privateKey);

                    //create transaction request
                    var request = new TransactionRequest
                    {
                        Amount = amount,
                        PaymentMethodNonce = nonce,
                        MerchantAccountId = merchantAccount,
                        OrderId = orderId,
                        Descriptor = descriptorRequest,                        
                        Customer = new CustomerRequest
                        {
                            FirstName = firstName,
                            LastName = lastName                          
                        },
                        Options = new TransactionOptionsRequest
                        {
                            SubmitForSettlement = true
                        }
                    };


                    try
                    {
                        //Execute taransaction and get the TransactionId
                        Result<Transaction> result = gateway.Transaction.Sale(request);
                        if (result.IsSuccess())
                        {
                            Transaction transaction = result.Target;
                            transactionId = transaction.Id;
                            transactionDateTime = transaction.CreatedAt;
                            isValidationError = false;
                            isTransactionSuccessful = true;
                            transactionStatus = transaction.Status.ToString();
                        }
                        //when transaction failed
                        else
                        {
                            isValidationError = false;
                            isTransactionSuccessful = false;
                            var exceptions = result.Errors.DeepAll();

                            foreach (var exception in exceptions)
                            {
                                BraintreeValidationError braintreeValidationError = new BraintreeValidationError();
                                braintreeValidationError.Message = exception.Message;
                                braintreeValidationError.Attribute = exception.Attribute;
                                braintreeValidationError.Code = exception.Code.ToString();

                                error.Add(braintreeValidationError);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        // logging the error
                        log.Error(ex);
                        isValidationError = false;
                        isTransactionSuccessful = false;

                        BraintreeValidationError braintreeValidationError = new BraintreeValidationError();
                        braintreeValidationError.Message = ex.Message;

                        error.Add(braintreeValidationError);
                    }
                }
            }
            //Error while generating Nonce token
            else
            {
                isValidationError = true;
                isTransactionSuccessful = false;
            }
        }

        /// <summary>
        /// Set a validation based on flag check if any error occure due to invalid card details provide by the user.        
        /// Check for the Custom validation, if custom validation is selected and message is provided then show user define message else default message will get displayed
        /// </summary>
        /// <returns></returns>
        public override ValidationIssue[] GetRuntimeValidationIssues()
        {
            List<ValidationIssue> list = new List<ValidationIssue>(base.GetRuntimeValidationIssues() ?? new ValidationIssue[0]);
            if (isValidationError)
            {
                string[] reasonParams = new string[0];
                if (this.OverrideRequiredMessage && !string.IsNullOrEmpty(this.RequiredMessage))
                {
                    list.Add(new ValidationIssue(this, this.RequiredMessage, reasonParams));
                }
                else
                {
                    list.Add(new ValidationIssue(this, ERROR_MESSAGE_TEXT, reasonParams));
                }
            }

            return list.ToArray();
        }

    }
}
