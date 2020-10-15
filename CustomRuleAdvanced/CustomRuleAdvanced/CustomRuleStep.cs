using System;
using System.Collections.Generic;
using System.Linq;
using DecisionsFramework;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.CoreRuleSteps;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.Design.Properties;

namespace CustomRuleAdvanced
{
    // [AutoRegisterRuleStep(name, anchorType, isList, category)]
    //  Name: Name of the rule. This value is shown in the Verbs dialog when selecting your comparison operator
    //  anchorType: The primary DataType you intend to interact with. If an Int is selected as InputData in the Rule Designer, this rule will not be shown as a verb
    //  isList: Is anchorType a List?
    //  category: Specifies the rule category for the verb dialog
    [AutoRegisterRuleStep("String Shorter Than", typeof(string), false, "Sample SDK Rules")]
    public class CustomRuleStep : 
        AbstractRuleStep,        // Defines base Rule behavior, you will override methods from this class to create your Rule
        IValidationSource        // Provides interface for exposing ValidationIssues to the Rule Designer
    {
        

            /*
             *
             *    Required Overrides
             * 
             */
            
            // Your logic goes inside of the Run method
            public override bool Run(RuleStepExecutionData data)
            {
                return (((string)data.Data[this.AnchorData.Name]).Length < number);
            }
        
            // This value is shown in the Rule Designer, after selecting "String Shorter Than" from the Verbs dialog
            // if [someVariable 'Shorter Than' myInputData] then...
            public override string GetVerbInfo(IInputMapping[] mappings)
            {
                return "Shorter Than";
            }
        
            
            
            /*
             *
             *    Inputs
             * 
             */
            
            // This method allows you to specify the InputData fields that are required by your Rule
            public override DataDescription[] InputData
            {
                get
                {
                    return new DataDescription[]
                    {
                        new DataDescription(new DecisionsNativeType(typeof(string)), "value"),
                    };
                }
            }
            
            // This method allows you to specify the format for how the mapped value will be displayed in the Rule Designer
            public override string GetValueInfo(IInputMapping[] mappings)
            {
                string value = "";
                IInputMapping valueMapping = (mappings ?? new IInputMapping[0]).FirstOrDefault(m => m != null && "value" == m.InputDataName);
                if (valueMapping != null)
                    value = base.GetValueInfo(valueMapping);
                return value;
            }
            
            
            
            /*
             *
             *    Options
             * 
             */
            
            [WritableValue]
            private int number;
            [PropertyClassification(0, "Number", "Settings")]
            public virtual int Number
            {
                get { return number; }
                set
                {
                    number = value;
                    OnPropertyChanged("Number");
                    InvalidateVerbInfo();             // Updates VerbInfo display in the Rule Designer
                }
            }
            
            
            
            /*
             *
             *    Validations
             * 
             */
            
            // This method allows you to return a list of ValidationIssue objects representing errors and warnings.
            public ValidationIssue[] GetValidationIssues()
            {
                List<ValidationIssue> issues = new List<ValidationIssue>();

                if (Number < 1) // Add a ValidationIssue if the number is < 1
                    issues.Add(new ValidationIssue(this, "Number must be greater than 0", null, BreakLevel.Fatal, "Number"));
                
                return issues.ToArray();
            }



    }
}