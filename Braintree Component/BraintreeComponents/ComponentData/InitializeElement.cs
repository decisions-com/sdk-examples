using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.ConfigurationStorage;

namespace BraintreeComponents
{
    public class InitializeElement : IInitializable
    {
        public InitializableHost[] Environments => new[]
            {
                InitializableHost.Unmanaged, InitializableHost.User, InitializableHost.Control
            };

        public InitializablePhase Phase => InitializablePhase.ApplicationBoot;

        /// <summary>
        /// Name of the Initializing element
        /// </summary>
        public string Name => "Register Braintree Control";

        public int Ordinal => 1500;

        /// <summary>
        /// Initialize Braintree component 
        /// </summary>
        public void Initialize()
        {            
            ConfigurationStorageService.UnRegisterToolboxElement("Braintree Control",
                typeof(BraintreeHostedFieldsFormControl).FullName,
                "Data",
                ElementType.FormElement);

            ConfigurationStorageService.RegisterToolboxElement("Braintree Control",
                typeof(BraintreeHostedFieldsFormControl).FullName,
                "Data",
                ElementType.FormElement);
        }
    }
}
