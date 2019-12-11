using DecisionsFramework.ServiceLayer;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace RestrictedDecisionsInitializationExample
{
    /*
     * This class is implementing the IInitializable interface in order to Initialize the locals module.
     */
    public class RestrictFlowStepsInitializer : IInitializable
    {
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
                FolderService.Instance.AddGroupPermission(UserContextHolder.GetCurrent(), RESTRICTED_STEPS_FOLDER_EXAMPLE, Constants.DESIGNERS_GROUP_ID, FolderPermission.AllButAdmin);
            }

            //Example Call to REMOVE the created folder
            //FolderService.Instance.DeleteFolder(suc, RESTRICTED_STEPS_FOLDER_EXAMPLE, false);
        }
    }
}
