using System.Collections.Generic;
using System.IO;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Service;
using DecisionsFramework.ServiceLayer.Utilities;
using DecisionsFramework.Utilities;

namespace FlowToolboxSteps
{
    [AutoRegisterMethodsOnClass(true, "SDK", "Flow Toolbox Steps")]
    public class FlowToolboxSteps
    {
        public void ListFlowToolboxSteps(string csvOutputPath, string csvFileName)
        {
            AbstractUserContext userContext = UserContextHolder.GetCurrent();
            FlowEngine currentEngine = FlowEngine.CurrentEngine;
            string flowId = currentEngine.CurrentTrackingData.FlowId;

            FlowEditSession flowEditSession = FlowEditService.Instance.OpenFlowForEditing(userContext, flowId);

            string[] toolboxCategories = 
                FlowEditService.Instance.GetToolboxCategories(userContext, flowEditSession.FlowSessionId, new string[]{});

            List<string> stepInfos = new List<string>();
            foreach (string category in toolboxCategories)
            {
                stepInfos.AddRange(GetStepsInSubCategory(userContext, flowEditSession.FlowSessionId, new [] {category}));
            }

            string filePath = Path.Combine(csvOutputPath, csvFileName);
            File.WriteAllLines(filePath, stepInfos);
        }

        private List<string> GetStepsInSubCategory(AbstractUserContext userContext, string flowSessionId, string[] nodes)
        {
            List<string> stepInfos = new List<string>();
            FlowStepToolboxInformation[] flowStepToolboxInformation = FlowEditService.Instance.GetToolboxStepsInformation(userContext, flowSessionId, nodes);
            foreach (FlowStepToolboxInformation toolboxInformation in flowStepToolboxInformation)
            {
                string categoryString = "";
                for (int i = 0; i < nodes.Length; i++)
                {
                    if (i == nodes.Length - 1)
                    {
                        categoryString += $"{nodes[i]}";
                        continue;
                    }
                    
                    categoryString += $"{nodes[i]}/";
                }
                
                stepInfos.Add($"{categoryString},{toolboxInformation.Label}");
            }
            
            
            string[] toolboxCategories = FlowEditService.Instance.GetToolboxCategories(userContext, flowSessionId, nodes);
            foreach (string toolboxCategory in toolboxCategories)
            {
                if (!string.Equals(toolboxCategory,"[Root Folder]") 
                    && !string.Equals(toolboxCategory,"[Current Folder]") 
                    && !string.Equals(toolboxCategory,".Net Libraries") 
                    && !string.Equals(toolboxCategory,"User Defined Types"))
                {
                    stepInfos.AddRange(GetStepsInSubCategory(userContext, flowSessionId, nodes.Add(toolboxCategory)));
                }
            }

            return stepInfos;
        }
    }
}