using DecisionsFramework.Data.ORMapper;
using DecisionsFramework.Design.ConfigurationStorage.Attributes;
using DecisionsFramework.Design.Flow;
using DecisionsFramework.ServiceLayer.Services.Accounts;
using System.Collections.Generic;
using System.Data;

namespace CustomDataSources
{
    //This decorator will automatically register any public method that returns an array as a reporting data source
    [AutoRegisterMethodsOnClassAsReportSources(true, "Custom Data Sources")]
    [Writable]
    public class CustomDataSource
    {
        public SoftwareItem[] MoreThanTenAvailableLicenses()
        {
            //Create a statement object with the table definition
            CompositeSelectStatement statement = new CompositeSelectStatement(
                 new CompositeSelectStatement.TableDefinition("PurchaseOrderSoftwareInventoryApplication_software_item", "si"));
            
            //Add the fields you want to return from the query (must match the db field names)
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("product_name"));
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("available_licenses"));
            statement.PrimaryTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("entity_folder_id"));

            //Create Join(s)
            CompositeSelectStatement.TableDefinition entityFolderTable = new CompositeSelectStatement.TableDefinition("entity_folder", "ef");

            //Fields you want to select from Join Table
            entityFolderTable.Fields.Add(new CompositeSelectStatement.FieldDefinition("full_path"));
            
            CompositeSelectStatement.JoinDefinition joinEntityFolder =
                new CompositeSelectStatement.JoinDefinition(
                    CompositeSelectStatement.JoinType.InnerJoin,
                    entityFolderTable,
                    new AndWhereSet(
                        new[] {
                            new FieldToFieldWhereCondition("si.entity_folder_id", "ef.folder_id", QueryMatchType.Equals)
                        }
                    )
                );

            //Add Join(s) to statement
            statement.JoinList.Add(joinEntityFolder);

            //You can add WhereConditions to filter out results
            WhereCondition numberOfLicenses = new LiteralWhereCondition("available_licenses > 10");

            //Add the where condition(s) to the statement
            statement.WhereConditions.WhereConditions.Add(numberOfLicenses);

            //Execute the query
            DataSet queryResults = new DynamicORM().RunQuery(statement);

            //Parse the query results
            List<SoftwareItem> softwareItems = new List<SoftwareItem>();
            foreach (DataRow row in queryResults.Tables[0].Rows)
            {
                SoftwareItem softwareItem = new SoftwareItem();
                softwareItem.ProductName = (string) row.ItemArray[0];
                softwareItem.AvailableLicenses = (int) row.ItemArray[1];
                softwareItem.EntityFolderId = (string) row.ItemArray[2];
                softwareItem.FullPath = (string)row.ItemArray[3];
                softwareItems.Add(softwareItem);
            }

            return softwareItems.ToArray();
        }

        public IORMEntity[] AccountsContainingSpecificName()
        {
            ORM<Account> aORM = new ORM<Account>();
            
            FieldWhereCondition fieldWhereCondition = new FieldWhereCondition("user_identifier", QueryMatchType.Equals, "jason@decisions.com");
            WhereCondition[] whereConditions = new WhereCondition[]
            {
                fieldWhereCondition
            };

            IORMEntity[] results = aORM.Fetch(whereConditions);

            return results;
        }
    }

    //Simple data access object to be returned with results
    public class SoftwareItem
    {
        public string ProductName { get; set; }

        public int AvailableLicenses { get; set; }

        public string EntityFolderId { get; set; }

        public string FullPath { get; set; }
    }
}
