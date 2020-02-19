using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace FolderFlowAndRuleBehaviorExample
{
    /*
    * This class is implementing the IInitializable interface in order to Initialize this locals module.
    * 
    * The Initializer is run every time that SHM starts, so it's a great place to check for special folders, 
    * users, groups, and branding we may want to apply
    */
    public class RunFlowActionInitializer : IInitializable
    {
        //Setting a hardcoded folder id for the example folder is not necessary, but may 
        //make it easier to have code elsewhere that makes references to this folder
        internal const string FLOW_PERFORMANCE_TESTS_FOLDER = "FLOW_PERFORMANCE_TEST_FOLDER";
        
        //This method is called when the module is initialized
        public void Initialize()
        {
            //Create the Base Flow Folder which will take on the implemented behavior if it doesn't already exist
            //This folder will be added for everyone
            SystemUserContext suc = new SystemUserContext();
            if (FolderService.Instance.Exists(suc, FLOW_PERFORMANCE_TESTS_FOLDER) == false)
            {
                //Create the folder at the root
                FolderService.Instance.CreateRootFolder(suc, FLOW_PERFORMANCE_TESTS_FOLDER, "Flow Performance Tests", typeof(RunFlowFolderBehavior).FullName);
            }
        }
    }
}