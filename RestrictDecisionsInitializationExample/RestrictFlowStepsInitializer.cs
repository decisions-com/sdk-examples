using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace RestrictedDecisionsInitializationExample
{
    /*
     * This class is implementing the IInitializable interface in order to Initialize the locals module.
     * 
     * The Initializer is run every time that SHM starts, so it's a great place to check for special folders, 
     * users, groups, and branding we may want to apply
     */
    public class RestrictFlowStepsInitializer : IInitializable
    {
        //Setting a hardcoded folder id for the example folder is not necessary, but may 
        //make it easier to have code elsewhere that makes references to this folder
        internal const string RESTRICTED_STEPS_FOLDER_EXAMPLE = "RESTRICTED.FLOW.STEPS";

        //This method is called when the module is initialized
        public void Initialize()
        {
            //Create the Base Flow Folder which will take on the implemented behavior if it doesn't already exist
            //This folder will be added for everyone
            SystemUserContext suc = new SystemUserContext();
            if (FolderService.Instance.Exists(suc, RESTRICTED_STEPS_FOLDER_EXAMPLE) == false)
            {
                //Create the folder at the root
                FolderService.Instance.CreateRootFolder(suc, RESTRICTED_STEPS_FOLDER_EXAMPLE, "Restricted Flow Steps", typeof(RestrictedStepsFolderBehavior).FullName);

                //Add all Permissions besides ADMIN for the DESIGNERS group so DESIGNERS can create flows in this folder.
                //IF we want to always ensure this permission we would move it OUT of this if block.
                FolderService.Instance.AddGroupPermission(UserContextHolder.GetCurrent(), RESTRICTED_STEPS_FOLDER_EXAMPLE, Constants.DESIGNERS_GROUP_ID, FolderPermission.AllButAdmin);
            }

            //Example Call to REMOVE the created folder
            //FolderService.Instance.DeleteFolder(suc, RESTRICTED_STEPS_FOLDER_EXAMPLE, false);
        }
    }
}
