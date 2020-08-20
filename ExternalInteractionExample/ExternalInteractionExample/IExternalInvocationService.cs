using System.ServiceModel;
using DecisionsFramework.ServiceLayer.Utilities;

namespace ExternalInteractionExample
{
    [ServiceContract]
    public interface IExternalInvocationService
    {
        [OperationContract]
        void Complete(AbstractUserContext userContext, string externalEntityInvocationId);

        [OperationContract]
        string GetStatus(AbstractUserContext userContext,string externalEntityInvocationId);
    }
}