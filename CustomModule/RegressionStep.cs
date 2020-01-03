using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.Design.Flow.CoreSteps;
using DecisionsFramework.Design.Flow.Mapping;
using DecisionsFramework.Design.Properties;
using DecisionsFramework.ServiceLayer.Services.ContextData;
using MathNet.Numerics;
using System;

namespace CustomModule
{
    //Use this decorator so that this class itself is registered as a step.
    //The 1st string argument will become the name of the step.
    //The next 2 agruments make up a list (as many as you need) of categories, so this 
    //step will appear under: Custom Module Example -> Advanced Math
    //
    //The class being extended and the interfaces being implemented are required.
    [Writable]
    [AutoRegisterStep("Apply Regression", "Custom Module Example", "Advanced Math")]
    public class RegressionStep : BaseFlowAwareStep, ISyncStep, IDataConsumer, IDataProducer
    {
        //Constants for the Result Data Names as they'll appear in the Step Properties
        private const string RESULT_ITEM_ONE = "Item 1";
        private const string RESULT_ITEM_TWO = "Item 2";

        //Constants for the Input Data Names as they'll appear in the Step Properties
        private const string INPUT_X_DATA = "X Data";
        private const string INPUT_Y_DATA = "Y Data";

        //Constants for the Outcome Paths as they'll appear in the Flow
        private const string PATH_DONE = "Done";

        //An enumeration that will populate a drop down in the Step Properties
        private enum RegressionTypes
        {
            Simple,
            Polynomial
        };

        //A hidden property to hold the array of names from the enumeration to show in a dropdown in the Step Properties
        [PropertyHidden]
        public static string[] RegressionType { get { return Enum.GetNames(typeof(RegressionTypes)); } }

        //A visible property populated by the RegressionType object which is defined above.
        [WritableValue]
        [SelectStringEditor("RegressionType")]
        public string AppliedRegressionType { get; set; }

        //Define the output data, in this case we're returning 2 separate double values called Item 1 and Item 2
        public override OutcomeScenarioData[] OutcomeScenarios => new OutcomeScenarioData[]
        {
           new OutcomeScenarioData(PATH_DONE,
               new[] {
                   new DataDescription(new DecisionsNativeType(typeof(double)), RESULT_ITEM_ONE),
                   new DataDescription(new DecisionsNativeType(typeof(double)), RESULT_ITEM_TWO)
               })
        };

        //Define the input data, in this case we're defining 2 arrays of double values called X Data and Y Data
        public DataDescription[] InputData =>
            new DataDescription[] {
                new DataDescription(new DecisionsNativeType(typeof(double[])), INPUT_X_DATA),
                new DataDescription(new DecisionsNativeType(typeof(double[])), INPUT_Y_DATA)
            };

        //Run the step and build the output data
        public ResultData Run(StepStartData data)
        {
            double[] regressionResults;
            double[] xData = data[INPUT_X_DATA] as double[];
            double[] yData = data[INPUT_Y_DATA] as double[];

            //Check what Regression Type was selected in the Step Properties
            if (AppliedRegressionType.Equals(RegressionTypes.Simple.ToString()))
            {
                //Call a private method to perform an operation
                regressionResults = PerformSimpleRegression(xData, yData);

                //Build the result data
                return new ResultData(PATH_DONE, new DataPair[] {
                    new DataPair(RESULT_ITEM_ONE, regressionResults[0]),
                    new DataPair(RESULT_ITEM_TWO, regressionResults[1])
                });
            }
            else if (AppliedRegressionType.Equals(RegressionTypes.Polynomial.ToString()))
            {
                //Call a private method to perform an operation
                regressionResults = PerformPolynomialRegression(xData, yData);

                //Build the result data
                return new ResultData(PATH_DONE, new DataPair[] {
                    new DataPair(RESULT_ITEM_ONE, regressionResults[0]),
                    new DataPair(RESULT_ITEM_TWO, regressionResults[1])
                });
            }
            else
            {
                return new ResultData(PATH_DONE, new DataPair[] {
                    new DataPair(RESULT_ITEM_ONE, 0),
                    new DataPair(RESULT_ITEM_TWO, 0)
                });
            }
        }

        //Private method to perform some operation that will NOT be exposed in Decisions
        private double[] PerformSimpleRegression(double[] xData, double[] yData)
        {
            //Use External Math.Net library to perform operations
            Tuple<double, double> p = Fit.Line(xData, yData);

            double a = p.Item1; // intercept
            double b = p.Item2; // slope

            return new double[] { a, b };
        }

        //Private method to perform some operation that will NOT be exposed in Decisions
        private double[] PerformPolynomialRegression(double[] xData, double[] yData)
        {
            //Use External Math.Net library to perform operations
            return Fit.Polynomial(xData, yData, 3);
        }
    }
}

