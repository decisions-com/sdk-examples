using System;
using System.Collections.Generic;
using DecisionsFramework;
using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.ServiceLayer.Services.ConfigurationStorage;
using DecisionsFramework.ServiceLayer.Services.DatabaseIntegration;
using DecisionsFramework.ServiceLayer.Services.DatabaseIntegration.FlowSteps;

namespace FetchSpecificSteps
{
    //Auto-register the public methods on this class as steps.
    //Specifically appearing under SDK -> Fetch Specific Steps -> Public Method Name.
    [AutoRegisterMethodsOnClass(true, "SDK", "Fetch Specific Steps")]
    public class FetchSpecificSteps
    {
        //Define a log category.
        Log _log = new Log("FetchSpecificSteps");
        
        //Fetch all the steps using a specified Database Connection Name.
        //The databaseConnectionName parameter will become a step input.
        //The step will return an array of step names and the table they connect to
        public string[] FetchStepsUsingDbConnection(string databaseConnectionName)
        {
            //Create the results list to return
            List<string> stepResultsList = new List<string>();

            //Use the ORM to get all FLOW element registrations
            ElementRegistration[] allFlows = new ORM<ElementRegistration>().Fetch(new WhereCondition[]
            {
                new FieldWhereCondition("is_flow", QueryMatchType.Equals, true),
            });
            
            //Loop through each flow
            foreach (ElementRegistration reg in allFlows)
            {
                //Open the flow 
                Flow flow = FlowEngine.LoadFlowByID(reg.ComponentRegistrationId, false, true);
                FlowStep currentStep = null;
                try
                {
                    //Loop through each step in the current flow
                    foreach (FlowStep step in flow.Steps)
                    {
                        currentStep = step;
                        
                        //If the step is a GetAllStep, Process it 
                        if (step.FlowStepType.Equals("GetAllStep`1"))
                        {
                            //Cast the step.WrappedStep into the appropriate step type.
                            GetAllStep<DatabaseTableDefinition> getAllStep = (GetAllStep<DatabaseTableDefinition>) step.WrappedStep;
                            
                            //If the step is on the appropriate connection, add it to the results.
                            if (string.Equals(getAllStep.DBConnectionName, databaseConnectionName))
                            {
                               stepResultsList.Add("Flow Name: " + flow.Name + " | Step Name: " + step.Name 
                                                   + " | DB Connection Name: " + getAllStep.DBConnectionName + " | Table Name: " + getAllStep.TableName);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    if (flow != null && currentStep != null)
                    {
                        stepResultsList.Add("Failed | Flow Name: " + flow.Name + " | Step Name: " + currentStep.Name);
                    }

                    if (flow != null)
                    {
                        _log.Error(ex, "Error processing steps for Flow: " + flow.Name + " with ID: " + flow.Id);
                    }
                }
            }

            return stepResultsList.ToArray();
        }
    }
}