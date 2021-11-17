/// <reference path="../typings/core/generated/DBQueryService.d.ts" />
declare namespace $DP.DBQuery {
    import Table = $D.Framework.ServiceLayer.Services.DBQuery.Table;
    function createGenerator(dbType: $D.Framework.ServiceLayer.DataBaseTypeEnum, table: Table): BaseGenerator;
    class BaseGenerator {
        protected table: Table;
        constructor(table: Table);
        generateSelect(): string;
        generateInsert(): string;
        generateUpdate(): string;
        generateDelete(): string;
        generateAllFields(formatFieldName?: (filedName: string) => string): string;
        protected get formattedTableName(): string;
    }
    class MsSqlGenerator extends BaseGenerator {
        generateSelect(): string;
    }
    class MySqlGenerator extends BaseGenerator {
        generateSelect(): string;
    }
    class PostgreSQLGenerator extends BaseGenerator {
        generateSelect(): string;
        generateAllFields(formatFieldName?: (filedName: string) => string): string;
        protected get formattedTableName(): string;
    }
    class AzureGenerator extends BaseGenerator {
        generateSelect(): string;
    }
    class OracleGenerator extends BaseGenerator {
        generateSelect(): string;
    }
}
