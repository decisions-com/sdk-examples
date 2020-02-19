using System.Diagnostics;
using DecisionsFramework;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.ServiceLayer.Utilities;

namespace FolderFlowAndRuleBehaviorExample
{
    public class FlowExecutionThread
    {
        //Create the logger
        private static readonly Log Log = new Log("Performance Testing");
        
        //Create private variables
        private readonly int _executions;
        private readonly AbstractUserContext _userContext;
        private readonly string _flowId;

        //Constructor to initialize the private variables
        public FlowExecutionThread(int executions, AbstractUserContext userContext, string flowId)
        {
            this._executions = executions;
            this._userContext = userContext;
            this._flowId = flowId;
        }
        
        //Method to execute the specified flow a specified number of times.
        public void StartFlowExecution()
        {
            //Register the user
            using (UserContextHolder.Register(_userContext))
            {
                //Create a stopwatch and kick it off, logging a guid to identify the batch of flow runs
                string threadExecutionId = System.Guid.NewGuid().ToString();
                Stopwatch outerStopWatch = new Stopwatch();
                Log.Error("Starting Thread: " + threadExecutionId + ", number of executions: " + _executions + ",flow: " + _flowId);
                outerStopWatch.Start();
                
                //Kick off the specified flow executions with the Flow Engine
                for (int i = 0; i < _executions; i++)
                {
                    //Create a stopwatch and kick it off, logging a guid to identify the individual flow run
                    string flowExecutionId = System.Guid.NewGuid().ToString();
                    Stopwatch innerStopWatch = new Stopwatch();
                    Log.Error("Starting Flow Run: " + flowExecutionId);
                    innerStopWatch.Start();
                    
                    //Execute the flow with canned data
                    FlowEngine.StartSyncFlow(FlowEngine.GetFlow(_flowId),
                        GetFlowStateData());

                    //Stop the stopwatch and log how much time it took for the individual flow run
                    innerStopWatch.Stop();
                    Log.Error("Flow Run " + flowExecutionId + " took: " + innerStopWatch.Elapsed.TotalMilliseconds +
                              " milliseconds.");
                }
                
                //Stop the stopwatch and log how much time it took for the batch of flow runs
                outerStopWatch.Stop();
                Log.Error("Thread: " + threadExecutionId + ", number of executions: " + _executions + ",flow: " + _flowId + ", took " + outerStopWatch.Elapsed.TotalSeconds + " seconds."); 
            }
        }

        //Private method containing canned data to use per flow run.
        private static FlowStateData GetFlowStateData()
        {
            return new FlowStateData(
                    new KeyValuePairDataStructure("ID", "13d71ddb-51ac-11ea-8232-a72eeb3fabdb"),
                    new KeyValuePairDataStructure("Out_Journal_Line_Description", null),
                    new KeyValuePairDataStructure("Out_Amount", 48500.00),
                    new KeyValuePairDataStructure("Out_Segment", null),
                    new KeyValuePairDataStructure("Out_Affiliate_Legal_Entity", null),
                    new KeyValuePairDataStructure("Out_Open_Item_Key", null),
                    new KeyValuePairDataStructure("Out_Catastrophe", null),
                    new KeyValuePairDataStructure("Out_Peril", null),
                    new KeyValuePairDataStructure("Out_Expense_Group", null),
                    new KeyValuePairDataStructure("Out_Reinsurance", null),
                    new KeyValuePairDataStructure("Out_Distribution_Channel", null),
                    new KeyValuePairDataStructure("Out_Account_Book", null),
                    new KeyValuePairDataStructure("Out_Account_Number", null),
                    new KeyValuePairDataStructure("Out_Legal_Entity", null),
                    new KeyValuePairDataStructure("Source_File_Num", null),
                    new KeyValuePairDataStructure("Peril_Code", "0.00"),
                    new KeyValuePairDataStructure("Load_Id", "2527722.00"),
                    new KeyValuePairDataStructure("Journal_Id", "CCTHIRSM"),
                    new KeyValuePairDataStructure("Journal_Date", "2019-12-31T00:00:00"),
                    new KeyValuePairDataStructure("Policy_Rating_State", "VA"),
                    new KeyValuePairDataStructure("Payment_Unique_Id", "cc:4039810"),
                    new KeyValuePairDataStructure("Loss_State", "VA"),
                    new KeyValuePairDataStructure("Loss_Cause", null),
                    new KeyValuePairDataStructure("Legacy_Claim_Number", null),
                    new KeyValuePairDataStructure("Legacy_Claim_Key_Format", "JCLMS"),
                    new KeyValuePairDataStructure("Element_Code", "40"),
                    new KeyValuePairDataStructure("Distribution_Channel", "9"),
                    new KeyValuePairDataStructure("Out_Disbursement_Center", "A7"),
                    new KeyValuePairDataStructure("Out_Producer_State", null),
                    new KeyValuePairDataStructure("Out_State", null),
                    new KeyValuePairDataStructure("Out_Accident_Year", null),
                    new KeyValuePairDataStructure("Out_Stat_Product", null),
                    new KeyValuePairDataStructure("Out_Product", "1450527"),
                    new KeyValuePairDataStructure("Disbursement_Code", null),
                    new KeyValuePairDataStructure("Date_Of_Loss", "2015-01-08T00:08:00"),
                    new KeyValuePairDataStructure("Coverage_Code", "1901"),
                    new KeyValuePairDataStructure("Company_Code", "44"),
                    new KeyValuePairDataStructure("Check_Number", null),
                    new KeyValuePairDataStructure("Cc_Claim_Number", "998333-GB"),
                    new KeyValuePairDataStructure("Cat_Code", null),
                    new KeyValuePairDataStructure("Bank_Acocunt_Number", "0.00"),
                    new KeyValuePairDataStructure("Amount", 48500.00),
                    new KeyValuePairDataStructure("Servicing_Agent_State", null),
                    new KeyValuePairDataStructure("Financial_Agent_State", "VA"),
                    new KeyValuePairDataStructure("Servicing_Agent_Code", null),
                    new KeyValuePairDataStructure("Servicing_Agent_Number", null),
                    new KeyValuePairDataStructure("Financial_Agent_Code", null),
                    new KeyValuePairDataStructure("Financial_Agent_Number", "1450527"),
                    new KeyValuePairDataStructure("Affinity_Program_Number", null),
                    new KeyValuePairDataStructure("Accounting_Date", "2019-01-31T00:12:00"),
                    new KeyValuePairDataStructure("Batch_Control_Date", "2019-01-31T00:12:00"),
                    new KeyValuePairDataStructure("Interface_Name", "CCTHIRSM"),
                    new KeyValuePairDataStructure("Product_Code", null),
                    new KeyValuePairDataStructure("Expense_Code", null),
                    new KeyValuePairDataStructure("Instrument_Code", null),
                    new KeyValuePairDataStructure("Action_Code", null))
                ;
        } 
    }
}