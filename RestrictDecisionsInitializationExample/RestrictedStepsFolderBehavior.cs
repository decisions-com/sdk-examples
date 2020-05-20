using DecisionsFramework.Design;
using DecisionsFramework.ServiceLayer.Actions;
using DecisionsFramework.ServiceLayer.Actions.Common;
using DecisionsFramework.ServiceLayer.Services.ConfigurationStorage;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;
using System.Collections.Generic;
using DecisionsFramework.Design.Flow;

namespace RestrictedDecisionsInitializationExample
{
    /*
    * This class is extending the DesignerProjectFolder to inherit most behavior from the Designer Project Folder Behavior
    * and just override what we need to override for a specific use case.
    */
    public class RestrictedStepsFolderBehavior : DesignerProjectFolder
    {
        //Override to ensure the folder is visible ONLY in the Studio
        public override bool IsVisible(Folder f)
        {
            return UserContextHolder.GetCurrent().StudioPortal;
        }

        //Override to add folder actions for this custom behavior
        public override BaseActionType[] GetFolderActions(Folder folder, BaseActionType[] proposedActions, EntityActionType[] types)
        {
            //Only add the action which will create a flow with the implemented flow behavior
            List<BaseActionType> allActions = new List<BaseActionType>();
            allActions.Add(new GetStringAction("Create Restricted Steps Flow", "Creates a new Flow with restricted Steps",
                CreateRestrictedFlow, "Create Restricted Flow", "Flow Name", "", GetTextType.RequiredText));
            return allActions.ToArray();
        }

        //Method to create a flow with the implemented behavior using Element Registration Helper
        //entityId is the ID of the folder being acted on
        //answer is the text provided by the user who triggered the GetStringAction and will become the name of the rule
        private void CreateRestrictedFlow(AbstractUserContext userContext, string entityID, string answer)
        {

            //Create the flow with the implemented flow behavior 
            ElementContextInfo info = new ElementContextInfo(entityID, ElementType.Flow, null, 
                typeof(RestrictedStepsFlowBehavior).FullName, null, answer);
            
            string createdElementRegistrationId = null;
            if (info.ShowIntent)
            {
                FlowInputDataDescription[] inputs = (info.ShowData) ? info.FlowInputs : null;
                string flowExecutionsInFolderId = (info.ShowTracking && info.SetupReportingOnFlowExecution) ? info.StoreFlowExecutionsInFolderId : null;
                string flowRunIdPrefix = (info.ShowTracking && info.SetupReportingOnFlowExecution) ? info.Prefix : null;

                // we are going to create based on intent
                createdElementRegistrationId =
                    ConfigurationStorageService.Instance.CreateFlowWithExtraSettings(UserContextHolder.GetCurrent(),
                        info.FolderId, info.Name, inputs, flowExecutionsInFolderId, flowRunIdPrefix);
            }
            else
            if (info.BasedOn == CreateElementBasedOn.Template && !string.IsNullOrEmpty(info.TemplateId))
            {
                createdElementRegistrationId =
                    ConfigurationStorageService.Instance.CreateFlowFromTemplate(UserContextHolder.GetCurrent(), info.FolderId, info.Name, info.TemplateId);
            }
            else
            if (info.BasedOn == CreateElementBasedOn.Behavior && !string.IsNullOrWhiteSpace(info.BehaviorType))
            {
                createdElementRegistrationId =
                    ConfigurationStorageService.Instance.CreateFlowFromTemplateAndBehaviorType(UserContextHolder.GetCurrent(), info.FolderId, info.Name, null, info.BehaviorType);
            }

            if (string.IsNullOrEmpty(createdElementRegistrationId))
                ConfigurationStorageService.Instance.CreateFlow(UserContextHolder.GetCurrent(), info.FolderId, info.Name);

        }
    }
}
