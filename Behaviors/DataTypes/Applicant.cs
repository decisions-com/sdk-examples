using System.Runtime.Serialization;

namespace BehaviorsSDKExamples.DataTypes
{
    // Data types must be serializable and have public properties.
    [DataContract]
    public class Applicant
    {
        [DataMember] public string Name { get; set; }
        [DataMember] public int Age { get; set; }
        [DataMember] public Gender Gender { get; set; }
        [DataMember] public bool Employed { get; set; }
        [DataMember] public int AnnualIncome { get; set; }
    }

    public enum Gender
    {
        Male,
        Female,
        Other
    }
}