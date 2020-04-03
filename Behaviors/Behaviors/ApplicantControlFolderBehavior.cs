using System.Collections.Generic;
using System.Diagnostics;
using DecisionsFramework.ServiceLayer.Actions;
using DecisionsFramework.ServiceLayer.Actions.Common;
using DecisionsFramework.ServiceLayer.Services.ConfigurationStorage;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace BehaviorsSDKExamples.Behaviors
{
    /// <summary>
    /// A folder behavior is a great way to control the ACTIONS and the PAGES that are
    /// available in a folder.  Also what types of entities can be moved into or out of the
    /// folder.
    ///
    /// Pay particular attention to the GetActions method.  This folder is created in
    /// LendingSampleInitializer.
    /// </summary>
    public class ApplicantControlFolderBehavior : DefaultFolderBehavior
    {
        public override BaseActionType[] GetFolderActions(Folder folder, BaseActionType[] proposedActions, EntityActionType[] types)
        {
            List<BaseActionType> resultActions = new List<BaseActionType>();
            // Add all the default folder actions if you want them....
            resultActions.AddRange(base.GetFolderActions(folder, proposedActions, types));

            // A "GetStringAction" collects a single string value, in this case it will be the 
            // name of our new rule.
            resultActions.Add(new GetStringAction(
                "Create Applicant Rule",
                "Adds a new applicant rule",
                CreateApplicantRule,
                "Rule Name",
                "Name of New Rule",
                string.Empty,
                GetTextType.ShortText
            ));
            
            resultActions.Add(new GetStringAction(
                "Create Applicant Flow",
                "Adds a new applicant flow",
                CreateApplicantFlow,
                "Flow Name",
                "Name of New Flow",
                string.Empty,
                GetTextType.ShortText
            ));
            
            return resultActions.ToArray();
        }
        
        private void CreateApplicantFlow(AbstractUserContext usercontext, string entityid, string answer)
        {
            CreateElementRegistrationHelper.Create(
                new ElementContextInfo(
                    entityid, 
                    ElementType.Flow, 
                    null, 
                    typeof(ApplicantFlowBehavior).FullName,
                    null,
                    answer), null, true
            );
        }
        
        private void CreateApplicantRule(AbstractUserContext usercontext, string entityid, string answer)
        {
            CreateElementRegistrationHelper.Create(
                new ElementContextInfo(
                    entityid, 
                    ElementType.Rule, 
                    null, 
                    typeof(ApplicantRuleBehavior).FullName,
                    null,
                    answer), null, true
            );
        }
    }
}