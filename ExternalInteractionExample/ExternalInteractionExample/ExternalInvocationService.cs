using DecisionsFramework;
using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.ServiceLayer.Utilities;

namespace ExternalInteractionExample
{
    [RegisterUser]
    [AutoRegisterService("External Invocation Service", typeof(IExternalInvocationService))]
    public class ExternalInvocationService : IExternalInvocationService
    {
        private static readonly Log Log = new Log("External Invocation");
        
        public void Complete(AbstractUserContext userContext, string externalEntityInvocationId)
        {
            ORM<ExternalInvocationEntity> externalInvocationEntityOrm = new ORM<ExternalInvocationEntity>();
            ExternalInvocationEntity externalInvocationEntity = externalInvocationEntityOrm.Fetch(externalEntityInvocationId);
            
            // Get the flow engine for the flow we'd like to complete
            FlowEngine engine = FlowEngine.GetEngine(externalInvocationEntity.FlowTrackingId);

            // Call Done to tell the Engine the Step is complete
            engine.Done(externalInvocationEntity.FlowTrackingId, externalInvocationEntity.StepTrackingId, new ResultData("Done"));
            
            // Mark the Entity Invocation Completed
            externalInvocationEntity.Status = "Completed";
            
            // Store the entity
            externalInvocationEntityOrm.Store(externalInvocationEntity);

            Log.Warn("Complete Operation Successfully Invoked");
        }

        public string GetStatus(AbstractUserContext userContext, string externalEntityInvocationId)
        {
            ORM<ExternalInvocationEntity> externalInvocationEntityOrm = new ORM<ExternalInvocationEntity>();
            ExternalInvocationEntity externalInvocationEntity = externalInvocationEntityOrm.Fetch(externalEntityInvocationId);
            
            Log.Warn("Get Status Operation Successfully Invoked");

            return externalInvocationEntity.Status;
        }
    }
}
