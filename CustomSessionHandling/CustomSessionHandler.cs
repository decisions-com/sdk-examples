using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.Accounts;
using DecisionsFramework.ServiceLayer.Utilities;

namespace CustomSessionHandling
{
    public class CustomSessionHandler : ICustomSessionHandler, IInitializable
    {
        public int Order => 100;
    
        public Account GetAccountFromSession(string session)
        {
            // Set up an account to return
            Account account = null;
            
            // Access the session string here, it's sent in on the request as an HTTP Header
            // Key : Authorization
            // Value : Session XYZ
            // Where XYZ would be the JWT Token you want to authorize
            if (!string.IsNullOrEmpty(session))
            {
                // Here, you would do some logic to access/validate your JWT Token against your service

                // Here, you would use the response from your service to look up an account using our Account ORM
                ORM<Account> accountOrm = new ORM<Account>();

                // Fetch the account using some criteria in WhereConditions
                // For Example, if your service returns an email address for a validated JWT token
                // Use it to fetch the account by email_address
                Account[] accounts = accountOrm.Fetch(new WhereCondition[]
                {
                    new FieldWhereCondition("email_address", QueryMatchType.Equals, "Email Address From Service")
                });

                if (accounts.Length == 1)
                {
                    account = accounts[0];
                }
            }

            return account;
        }

        public void Initialize()
        {
            CustomSessionRegistration.AddSessionHandler(this);
        }
    }
}