using System.Collections.Generic;
using BehaviorsSDKExamples.DataTypes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Mapping;

namespace BehaviorsSDKExamples.Behaviors
{
    /// <summary>
    /// Flow behaviors control the rule designer.  This rule behavior is NOT
    /// settable by users and is only able to be created from the ApplicantControlFolerBehavior
    /// </summary>
    public class ApplicantRuleBehavior : DefaultRuleBehavior
    {
        public override string GetUserMessage(Rule r)
        {
            return "Return TRUE if applicant is qualified for loan";
        }

        public override bool IsUserSettable => false;

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
                RuleDesignerFeature.Debug
            }; }
        }
    }
}