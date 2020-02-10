using System.Collections.Generic;
using DecisionsFramework.Design;
using DecisionsFramework.ServiceLayer.Actions;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace FolderFlowAndRuleBehaviorExample
{
    public class TemplateRulesFolderBehavior : DesignerProjectFolder
    {
        public override bool IsVisible(Folder f)
        {
            return UserContextHolder.GetCurrent().StudioPortal;
        }

        public override DecisionsFramework.ServiceLayer.Actions.BaseActionType[] GetFolderActions(
            Folder folder, 
            DecisionsFramework.ServiceLayer.Actions.BaseActionType[] proposedActions, 
            DecisionsFramework.ServiceLayer.Actions.EntityActionType[] types)
        {
            return new List<BaseActionType>().ToArray();
        }
        
        public override string FolderBehaviorName => "All Rules";

        public override string GetFolderShortTypeName(Folder f)
        {
            return "All Rules";
        }
    }
}