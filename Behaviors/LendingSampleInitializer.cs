using BehaviorsSDKExamples.Behaviors;
using DecisionsFramework.Design;
using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Services.Portal;
using DecisionsFramework.ServiceLayer.Utilities;

namespace BehaviorsSDKExamples
{
    // Any class that inherits from IInitializable is run when your 
    // code is loaded or SHM is restarted. This class can be used 
    // to create customizations, branding, set slogans in portal
    // and most importantly for this example: setup a folder with a 
    // specific behavior!
    public class LendingSampleInitializer : IInitializable
    {
        public void Initialize()
        {
            SetBrandingExample();

            SetupLoanRulesFolder();

            SetupApplicantFlowAndRulesFolder();
        }

        private void SetBrandingExample()
        {
            ModuleSettingsAccessor<PortalSettings>.GetSettings().SloganText = "SDK Portal!";
            ModuleSettingsAccessor<DesignerSettings>.GetSettings().StudioSlogan = "Loan Rule Portal";
        }
        
        private static string APPLICANT_RULES_FOLDER_ID = "APPLICANT.RULES";
        private void SetupApplicantFlowAndRulesFolder()
        {
            SystemUserContext s = new SystemUserContext();
            // Check to see if it exists.
            if (FolderService.Instance.Exists(s, APPLICANT_RULES_FOLDER_ID) == false)
            {
                // Create it with behavior.
                FolderService.Instance.CreateRootFolder(
                        s,
                        APPLICANT_RULES_FOLDER_ID,
                        "Applicant Processing",
                        typeof(ApplicantRuleBehavior).FullName
                    );
            }
        }

        private static string LOAN_RULES_FOLDER_ID = "LOAN.RULES";
        private void SetupLoanRulesFolder()
        {
            SystemUserContext s = new SystemUserContext();
            // Check to see if it exists.
            if (FolderService.Instance.Exists(s, LOAN_RULES_FOLDER_ID) == false)
            {
                // Create it with behavior.
                FolderService.Instance.CreateRootFolder(
                    s,
                    LOAN_RULES_FOLDER_ID,
                    "Loan Rules",
                    typeof(LoanRuleBehavior).FullName
                );
            }
        }

       
    }
}