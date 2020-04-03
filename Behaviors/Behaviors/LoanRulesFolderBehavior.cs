using System.Collections.Generic;
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
    public class LoanRulesFolderBehavior : DefaultFolderBehavior
    {
        public override BaseActionType[] GetFolderActions(Folder folder, BaseActionType[] proposedActions, EntityActionType[] types)
        {
            List<BaseActionType> resultActions = new List<BaseActionType>();
            // Add all the default folder actions if you want them....
            resultActions.AddRange(base.GetFolderActions(folder, proposedActions, types));

            // A "GetStringAction" collects a single string value, in this case it will be the 
            // name of our new rule.
            resultActions.Add(new GetStringAction(
                    "Create Loan Rule",
                    "Adds a new loan rule",
                    CreateLoanRule,
                    "Rule Name",
                    "Name of New Rule",
                    string.Empty,
                    GetTextType.ShortText
                ));
            
            return resultActions.ToArray();
        }

        private void CreateLoanRule(AbstractUserContext usercontext, string entityid, string answer)
        {
            CreateElementRegistrationHelper.Create(
                    new ElementContextInfo(
                        entityid, 
                        ElementType.Rule, 
                        null, 
                        typeof(LoanRuleBehavior).FullName,
                        null,
                        answer), null, true
                );
        }
    }
}