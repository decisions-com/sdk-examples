using System.Collections.Generic;
using System.Threading;
using DecisionsFramework.Design;
using DecisionsFramework.ServiceLayer.Actions;
using DecisionsFramework.ServiceLayer.Actions.Common;
using DecisionsFramework.ServiceLayer.Services.Folder;
using DecisionsFramework.ServiceLayer.Utilities;

namespace FolderFlowAndRuleBehaviorExample
{
    /*
    * This class is extending the DesignerProjectFolder to inherit most behavior from the Designer Project Folder Behavior
    * and just override what we need to override for a specific use case.
    */
    public class RunFlowFolderBehavior : DesignerProjectFolder
    {
        //Override to add folder actions for this custom behavior
        public override BaseActionType[] GetFolderActions(Folder folder, BaseActionType[] proposedActions, EntityActionType[] types)
        {
            //Create a new list of actions
            List<BaseActionType> allActions = new List<BaseActionType>();
            
            //Add Non Batch Flow Options
            //Parameters:
            //Name - What shows up in the context menu
            //Description - A description
            //Service Param Method - The method to call when you select the action
            //Title - A title
            //Label - Label that is shown on the popup
            //Current Answer - The initial value of the field type of the action, in this case we're adding an Int Action
            allActions.Add(
                new GetIntAction(
                    "Execute - 4 Threads - Non Batch", 
                    "Executes Flow ID: 803f56bd-51a7-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueNonBatch4, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 8 Threads - Non Batch", 
                    "Executes Flow ID: 803f56bd-51a7-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueNonBatch8, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 16 Threads - Non Batch", 
                    "Executes Flow ID: 803f56bd-51a7-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueNonBatch16, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 32 Threads - Non Batch", 
                    "Executes Flow ID: 803f56bd-51a7-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueNonBatch32, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 64 Threads - Non Batch", 
                    "Executes Flow ID: 803f56bd-51a7-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueNonBatch64, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            
            //Add Batch Flow Options
            allActions.Add(
                new GetIntAction(
                    "Execute - 4 Threads - Batch", 
                    "Executes Flow ID: f0a5627e-5338-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueBatch4, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 8 Threads - Batch", 
                    "Executes Flow ID: f0a5627e-5338-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueBatch8, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 16 Threads - Batch", 
                    "Executes Flow ID: f0a5627e-5338-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueBatch16, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 32 Threads - Batch", 
                    "Executes Flow ID: f0a5627e-5338-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueBatch32, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));
            allActions.Add(
                new GetIntAction(
                    "Execute - 64 Threads - Batch", 
                    "Executes Flow ID: f0a5627e-5338-11ea-8232-a72eeb3fabdb the specified amount of times", 
                    SetExecutionsValueBatch64, 
                    "Execute Flow Performance Testing", 
                    "# of Flow Executions per Thread", 
                    1));

            return allActions.ToArray();
        }

        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //Parameters:
        //User Context - The User Context of the User who executed the Action
        //Entity ID - The Entity ID of the Folder the Action Lives on
        //Answer - The integer input in the action input field
        private void SetExecutionsValueNonBatch4(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 4, "803f56bd-51a7-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueNonBatch8(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 8, "803f56bd-51a7-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueNonBatch16(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 16, "803f56bd-51a7-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueNonBatch32(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 32, "803f56bd-51a7-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueNonBatch64(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 64, "803f56bd-51a7-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueBatch4(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 4, "f0a5627e-5338-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueBatch8(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 8, "f0a5627e-5338-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueBatch16(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 16, "f0a5627e-5338-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueBatch32(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 32, "f0a5627e-5338-11ea-8232-a72eeb3fabdb");
        }
        
        //Wrapper method to call a method on action execution that requires more than the standard action parameters
        //See above for Parameters
        private void SetExecutionsValueBatch64(AbstractUserContext userContext, string entityId, int answer)
        {
            SetExecutionsValue(userContext, answer, 64, "f0a5627e-5338-11ea-8232-a72eeb3fabdb");
        }
        
        //Method to spawn off a specified number of threads to run a specified flow a specified number of executions
        //userContext is the user who triggered whatever is calling this method.
        //executions is the number of times to execute the specified flow.
        //numberOfThreads is the number of threads to spawn for executions.
        //flowId is the flow to execute
        private static void SetExecutionsValue(AbstractUserContext userContext, int executions, int numberOfThreads, string flowId)
        {
            for (int i = 0; i < numberOfThreads; i++)
            {
                FlowExecutionThread flowExecutionThread = new FlowExecutionThread(executions, userContext, flowId);
                Thread thread = new Thread(new ThreadStart(flowExecutionThread.StartFlowExecution));
                thread.Start();
            }
        }
    }
}