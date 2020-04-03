using System;
using System.Runtime.Serialization;

namespace BehaviorsSDKExamples.DataTypes
{
    [DataContract]
    public class Loan
    {
        [DataMember] public int LoanAmount { get; set; }
        [DataMember] public DateTime RequestedDate { get; set; }
        [DataMember] public string LoanType { get; set; }
        [DataMember] public int TermInMonths { get; set; }
    }
}