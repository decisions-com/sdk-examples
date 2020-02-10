using DecisionsFramework.Design.Flow;
using System;

namespace CustomModule
{
    //Use this decorator so that any public method in this class is registered as a step.
    //The 2 string arguments make up a list (as many as you need) of categories, so this 
    //step will appear under: Custom Module Example -> Simple Math
    [AutoRegisterMethodsOnClass(true, "Custom Module Example", "Simple Math")]
    public class SimpleMathSteps
    {
        //A simple method that performs a calculation and returns a boolean result.
        //The argument list becomes the inputs required for this step.
        public static bool IsProductGreaterThan(Int32 numberOne, Int32 numberTwo, Int32 numberToCompare)
        {
            Int32 product = numberOne * numberTwo;
            return product > numberToCompare;
        }
        
        //A simple method that performs a calculation and returns a boolean result.
        //The argument list becomes the inputs required for this step.
        public static bool IsProductLessThan(Int32 numberOne, Int32 numberTwo, Int32 numberToCompare)
        {
            Int32 product = numberOne * numberTwo;
            return product > numberToCompare;
        }
    }
}
