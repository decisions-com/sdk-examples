using DecisionsFramework;
using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Mapping;

namespace ExternalInteractionExample
{
    [Writable]
    [AutoRegisterStep("External Invocation Step", "External Example")]
    public class ExternalInvocationStep : IAsyncStep
    {
        private static readonly Log Log = new Log("External Invocation");

        public OutcomeScenarioData[] OutcomeScenarios
        {
            get
            {
                return new[]
                {
                    new OutcomeScenarioData("Done", new DataDescription(typeof(string), "Result Data"))
                };
            }
        }
        
        public void Start(StepStartData data)
        {
            // Get the Flow Tracking ID and Step Tracking ID
            string flowTrackingId = data.FlowTrackingID;
            string stepTrackingId = data.StepTrackingID;

            ORM<ExternalInvocationEntity> externalInvocationEntityOrm = new ORM<ExternalInvocationEntity>();
            ExternalInvocationEntity externalInvocationEntity = new ExternalInvocationEntity
            {
                Status = "Running", 
                FlowTrackingId = flowTrackingId, 
                StepTrackingId = stepTrackingId
            };
            externalInvocationEntityOrm.Store(externalInvocationEntity);
            
            Log.Warn($"External Invocation Entity ID: {externalInvocationEntity.GetPrimaryKeyValue()}");
        }
    }
}
