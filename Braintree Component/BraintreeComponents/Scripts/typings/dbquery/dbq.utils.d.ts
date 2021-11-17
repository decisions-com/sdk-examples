declare namespace $DP.DBQuery {
    import Table = $D.Framework.ServiceLayer.Services.DBQuery.Table;
    import Field = $D.Framework.ServiceLayer.Services.DBQuery.Field;
    import ConnectionString = $D.Framework.ServiceLayer.Services.DBQuery.ConnectionString;
    import DatabaseQueryDto = $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto;
    const ROOT_VIEWS_CATEGORY = "Views";
    const ROOT_TABLES_CATEGORY = "Tables";
    function convertFieldToDataDefTree(field: Field, index: number): $DP.Common.DataDefinitionForTree;
    function convertTableToDataDefTree(table: Table, index: number): $DP.Common.DataDefinitionForTree;
    function parsePath(path: string): {
        rootCategory: string;
        tableName: string;
        fieldName: string;
    };
    /**
     * @example
     * isTableCategory('Tables.table_name') // true
     * isTableCategory('table_name') // true
     *
     * isTableCategory('Tables') // false
     * isTableCategory('Tables.table_name.field_name') // false
     * isTableCategory('table_name.field_name') // false
     */
    function isTableCategory(path: string): boolean;
    function isRootCategory(path: string): boolean;
    /**
     * @example
     * isFieldCategory('Tables.table_name.field_name') // true
     * // when search item we don't add 'Tables' and 'Views' in the beginning
     * isFieldCategory('table_name.field_name') // true
     *
     * isFieldCategory('Tables') // false
     * isFieldCategory('Tables.table_name') // false
     * isFieldCategory('table_name') // false
     */
    function isFieldCategory(path: string): boolean;
    function getDefaultConnection(connections: ConnectionString[]): ConnectionString;
    function connectionsToComboBoxItems(connectionStrings: ConnectionString[]): $DP.Common.ComboBoxItem[];
    function connectionToComboBoxItem(connectionString: ConnectionString): {
        id: string;
        name: string;
    };
    function convertDbQueriesToComboBoxItems(queries: DatabaseQueryDto[]): $DP.Common.ComboBoxItem[];
    function convertDbQueryToComboBoxItem(query: DatabaseQueryDto): $DP.Common.ComboBoxItem;
    function getConnectionStringById(connections: ConnectionString[], id: string): ConnectionString;
}
