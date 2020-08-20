using System.Runtime.Serialization;
using DecisionsFramework.Data.ORMapper;

namespace ExternalInteractionExample
{
    [ORMEntity]
    [DataContract]
    public class ExternalInvocationEntity : BaseORMEntity
    {
        [ORMPrimaryKeyField] 
        private string externalInvocationEntityId;

        [ORMField] 
        private string status;
        
        [ORMField] 
        private string flowTrackingId;

        [ORMField] 
        private string stepTrackingId;

        [DataMember]
        public string Status
        {
            get => status;
            set => status = value;
        }
        
        [DataMember]
        public string FlowTrackingId
        {
            get => flowTrackingId;
            set => flowTrackingId = value;
        }

        [DataMember]
        public string StepTrackingId
        {
            get => stepTrackingId;
            set => stepTrackingId = value;
        }
    }
}