using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Properties;
using DecisionsFramework.Design.Report;
using System;
using System.Data;

namespace CustomDataSources
{
    /*
     * This class implements the minimum required methods inherited from AbstractCustomFilter.
     * Additional methods can be overriden in order to gain additional control over the filter.
     * 
     * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-filters
     */
    //This decorator will automatically register this class as a filter
    [AutoRegisterReportElement("Greather Than Custom Filter", "Custom")]
    [Writable]
    public class GreaterThanCustomFilter : AbstractCustomFilter
    {
        /*
         * This is the definition of a property that will show up in the report viewer and can be set.
         * Here we'll give a column name value for use in building our statement in the data source
         */
        [PropertyClassification(new string[] { "Info" }, "Column Name", 1)]
        [WritableValue]
        public string ColumnName { get; set; }

        /*
         * This is the definition of a property that will show up in the report viewer and can be set.
         * Here we'll be give a Greater Than Value to use in the comparison to determine if a row is Included.
         */
        [PropertyClassification(new string[] { "Info" }, "Greater Than Value", 2)]
        [WritableValue]
        public int GreaterThanValue { get; set; }

        /*
         * This method determines if this filter applies for a given type
         * 
         * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-filters
         */
        public override bool Applies(ReportDefinition definition)
        {
            //Check if the Report uses a Custom Data Source
            if (definition.UsesCustomDataSource())
            {
                //Check each of the Custom Reporting Data Sources for the Report
                foreach (ICustomReportDataSource dataSource in definition.GetCustomDataSources())
                {
                    //Only declare this filter as relevant the Custom Data Source is the AdvancedCustomDataSource
                    if (dataSource is AdvancedCustomDataSource)
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        /*
         * This method decides whether or not to include the row.
         * 
         * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-filters
         */
        public override bool IncludeRow(DataRow row)
        {
            if (ColumnName != null)
            {
                return (Convert.ToInt32(row[ColumnName]) > GreaterThanValue);
            }

            return true;
        }
    }
}
