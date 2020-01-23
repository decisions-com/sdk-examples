using System;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.CoreRuleSteps;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.Design.Flow.Mapping.InputImpl;
using DecisionsFramework.ServiceLayer.Services.ConfigurationStorage;
using DecisionsFramework.ServiceLayer.Utilities;

namespace RestRulesExample
{
    [AutoRegisterMethodsOnClass(true, "RestRulesExample")]
    public class RuleMaker
    {
        /// <summary>
        /// This method creates a step in the step toolbox in the flow designer.
        /// </summary>
        /// <param name="ruleName"> Whatever you want to name your rule </param>
        /// <param name="inputTypeName"> The type of the input to the rule </param>
        /// <param name="inputName"> Dataname of the input to the rule </param>
        /// <param name="ruleValue"> The value the rule is used to evaluate input against </param>
        /// <param name="folderId"> The folder id where the rule will be stored on creation </param>
        public static void CreateEqualsRule(string ruleName, string inputTypeName, string inputName, string ruleValue, string folderId)
        {
            var rule = new Rule();

            //Size of array corresponds to number of inputs
            rule.InputData = new DataDescription[1];

            var inputType = Type.GetType(inputTypeName);

            if (inputType == null)
            {
                throw new ArgumentException($"Invalid type: {inputTypeName}");
            }

            //Define input's type and dataname 
            rule.InputData[0] = new DataDescription(inputType, inputName);

            //Rules are a collection of RuleSteps
            var rootStep = rule.GetRootStep();

            var eqRule = new EqualsRuleStep();

            var stepToAdd = new RuleStep(eqRule);
            stepToAdd.ParentGroupId = rootStep.Id;

            rule.AddStep(stepToAdd);

            stepToAdd.AnchorData = new DataDescription(inputType, "inputValue");
            stepToAdd.AnchorDataMapping = new SelectValueInputMapping("inputValue", inputName, stepToAdd);

            stepToAdd.AddInputMapping(new ConstantInputMapping("Value", inputType.FullName, false, ruleValue));

            ElementRegistration er = new ElementRegistration
            {
                ComponentRegistrationId = Guid.NewGuid().ToString(),
                Name = ruleName,
                ElementAttribute = new[] { ElementType.Rule },
                EntityFolderID = folderId
            };

            ConfigurationStorageService.Instance.SaveWithConfigurationData(new SystemUserContext(), er,
                WritableHelper.Write(rule));
        }
    }
}
