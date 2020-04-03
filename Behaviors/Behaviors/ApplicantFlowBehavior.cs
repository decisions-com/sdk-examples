using System.Collections.Generic;
using BehaviorsSDKExamples.DataTypes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Mapping;

namespace BehaviorsSDKExamples.Behaviors
{
    /// <summary>
    /// Flow behaviors control the flow designer.  This flow behavior is NOT
    /// settable by users and is only able to be created from the ApplicantControlFolerBehavior
    /// </summary>
    public class ApplicantFlowBehavior : DefaultFlowBehavior
    {
        public override bool IsUserSettable
        {
            get { return false;  }
        }

        public override string GetUserMessage(Flow f)
        {
            return "This flow allows you to process a loan and send it to another system";
        }

        public override bool ShowFlowInputs
        {
            get { return false; }
        }

        public override DataDescription[] ProcessInputDeclaration(Flow flow, DataDescription[] inputData)
        {
            List<DataDescription> allInputs = new List<DataDescription>();
            allInputs.AddRange(base.ProcessInputDeclaration(flow, inputData));
            
            allInputs.Add(new DataDescription(typeof(Loan), "Loan to Evaluate"));
            
            return allInputs.ToArray();
        }
    }
}