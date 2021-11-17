declare namespace $DP.Common {
    /**
     * If required type is missing check it DecisionsFramework.Design.Flow.Service.Contexts.InputMappingWrappers namespace on server
     */
    class InputMappingConstants {
        static get CONVERTER_FLOW_CATEGORY_SEPARATOR(): string;
        static get MAPPING_ARRAY(): string;
        static get MAPPING_ARRAY_CONCAT(): string;
        static get MAPPING_CONSTANT(): string;
        static get MAPPING_DATE(): string;
        static get MAPPING_DATETIME(): string;
        static get MAPPING_IGNORE(): string;
        static get MAPPING_MERGE_HTML(): string;
        static get MAPPING_MERGE_PLAIN(): string;
        static get MAPPING_NULL(): string;
        static get MAPPING_RUN_CONVERTER_FLOW(): string;
        static get MAPPING_SELECT(): string;
        static get MAPPING_DATETIME_COMPUTE(): string;
        static get MAPPING_UNKNOWN(): string;
    }
    class OutputMappingConstants {
        static get MAPPING_ARRAY_FIRST_ITEM(): string;
        static get MAPPING_ARRAY_ITEMS(): string;
        static get MAPPING_ARRAY_LAST_ITEM(): string;
        static get MAPPING_CHANGE(): string;
        static get MAPPING_RENAME(): string;
        static get MAPPING_RUN_CONVERTER_FLOW(): string;
    }
}
