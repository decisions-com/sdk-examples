using DecisionsFramework.Design.Flow;
using System.Linq;

namespace RestrictedDecisionsInitializationExample
{
    /*
    * This class is extended the DefaultFlowBehavior to inherit most behavior from the Default Flow Behavior
    * and just override what we need to override for a specific use case.
    */
    public class RestrictedStepsFlowBehavior : DefaultFlowBehavior
    {
        //Override so that the user cannot change the Behavior Type of Flows with this Behavior
        public override bool IsUserSettable
        {
            get { return false; }
        }

        //Override to filter certain Steps out of the Step Toolbox
        public override bool ToolboxFilterOut(Flow f, string[] category, string name, bool isCategory)
        {
            //If the category array contains .Net Libraries, return true to filter it out
            if (category != null && category.FirstOrDefault(c => c.Contains(".Net Libraries")) != null)
            {
                return true;
            }

            //If the name contains .Net Libraries, return true to filter it out (This will remove the 
            //category itself)
            if (!string.IsNullOrEmpty(name) && name.Equals(".Net Libraries"))
            {
                return true;
            }

            return base.ToolboxFilterOut(f, category, name, isCategory);
        }
    }
}
