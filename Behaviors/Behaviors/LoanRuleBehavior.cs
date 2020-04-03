using System.Collections.Generic;
using BehaviorsSDKExamples.DataTypes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Mapping;

namespace BehaviorsSDKExamples.Behaviors
{
    /// <summary>
    /// Rule behaviors control the rule designer.  This rule behavior MAY be set by users, but
    /// is most easily set by users and is only able to be created from the LoanRuleFolderBehavior
    /// </summary>
    public class LoanRuleBehavior : DefaultRuleBehavior
    {
        public override string GetUserMessage(Rule r)
        {
            return "Return TRUE if loan may be offered to applicant";
        }

        public override bool IsUserSettable => true;

        public override bool AllowUserToEditRuleInputs(Rule r)
        {
            return false;
        }

        public override DataDescription[] ProcessInputDeclaration(Rule r, DataDescription[] inputData)
        {
            List<DataDescription> allInputs = new List<DataDescription>();
            allInputs.AddRange(base.ProcessInputDeclaration(r, inputData));
            
            allInputs.Add(new DataDescription(typeof(Applicant), "Applicant"));
            allInputs.Add(new DataDescription(typeof(Loan), "Loan to Evaluate"));
            
            return allInputs.ToArray();
        }

        public override RuleDesignerFeature[] VisibleDesignerFeatures {
            get { return new[]
            {
                RuleDesignerFeature.Debug,
                RuleDesignerFeature.History,
                RuleDesignerFeature.UndoRedoButtons
            }; }
        }
    }
}