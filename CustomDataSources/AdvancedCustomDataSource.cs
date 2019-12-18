using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Report;
using System;
using System.Data;

namespace CustomDataSources
{
    /*
     * This class implements the minimum required methods inherited from AbstractCustomDataSource.
     * Additional methods can be overriden in order to gain additional control over the data source.
     * 
     * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-sources
     */
    //This decorator will automatically register this class as it's own reporting data source
    [AutoRegisterReportElement("Advanced Custom Data Source", "Custom")]
    [Writable]
    public class AdvancedCustomDataSource : AbstractCustomDataSource
    {
        /*
         * This method must be overriden to define the data that's available to the report. It 
         * supports one table or view. In this case we're using a view to join more than one table
         * and the view is the basis of our data source.
         * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-sources
         */
        public override ReportFieldData[] ReportFields
        {
            get
            {
                return new ReportFieldData[]
                {
                    /*
                     * Each ReportFieldData object is created using Table or View Name, Field Name, and Type.
                     * This must match how it's stored in the database. This data does not have to include every
                     * column in the Table or View.
                     */
                    new ReportFieldData("vwSoftwareItemsDetails", "product_name", "product_name", typeof(string)),
                    new ReportFieldData("vwSoftwareItemsDetails", "available_licenses", "available_licenses", typeof(int)),
                    new ReportFieldData("vwSoftwareItemsDetails", "entity_folder_id", "entity_folder_id", typeof(string)),
                    new ReportFieldData("vwSoftwareItemsDetails", "full_path", "full_path", typeof(string))
                };
            }
        }

        /*
         * The result of this method determines whether this data source is shown as an available data source in the Report Designer.
         * For more information see: https://documentation.decisions.com/v6/docs/custom-reporting-data-sources
         */
        public override bool Applies(ReportDefinition definition)
        {
            return !definition.HasDataSourcesOrFilters();
        }

        /*
         * In this method you define the actual data which will be returned to the report by building up a DataTable.
         * It has the limits and pages as imports to utilize in your build out.
         */
        public override DataTable GetData(DataTable table, IReportFilter[] filters, int? limitCount, int pageIndex)
        {
            //If the table hasn't been initialized, initialize it
            if (table == null)
            {
                table = new DataTable();
            }

            //Add the data range from the created Report Fields
            table.Columns.AddRange(GetColumnsFromReportFields(ReportFields));

            //Create a statement object with the table definition
            CompositeSelectStatement statement = new CompositeSelectStatement(
                 new CompositeSelectStatement.TableDefinition("vwSoftwareItemsDetails"));

            //Add the fields you want to return from the query (must match the db field names)
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("product_name"));
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("available_licenses"));
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("entity_folder_id"));
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("full_path"));

            //You can add WhereConditions to filter out results
            WhereCondition numberOfLicenses = new LiteralWhereCondition("available_licenses > 10");

            //Add the where condition(s) to the statement
            //You can use the IReportFilter[] to process the filters and add the appropriate clauses to the query.
            statement.WhereConditions.WhereConditions.Add(numberOfLicenses);

            //Add Order By to consistently order results for handling pagination
            statement.OrderBy.Add("available_licenses", ORMResultOrder.Descending);
            statement.OrderBy.Add("product_name", ORMResultOrder.Descending);

            //Select Top x to ensure the results include the page
            //Only the correct results within these limited results will be loaded into memory in the report
            if (filters != null && filters[0] != null && filters[0].Report != null && 
                filters[0].Report.RowsPerPage != null && pageIndex != null) {
                statement.Top = (pageIndex + 1) * filters[0].Report.RowsPerPage;
            }
           
            //Execute the query
            DataSet queryResults = new DynamicORM().RunQuery(statement);

            //Parse the Results and build the table
            foreach (DataRow row in queryResults.Tables[0].Rows)
            {
                DataRow dr = table.NewRow();

                for (int i = 0; i < ReportFields.Length; i++)
                {
                    dr[ReportFields[i].FieldName] = row.ItemArray[i];
                }

                table.Rows.Add(dr);
            }

            return table;
        }
    }
}
