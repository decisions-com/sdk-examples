/// <reference path="../../typings/core/generated/ConfigurationStorageService.d.ts" />
declare namespace $DP.Designers.Creation {
    import ElementType = $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
    /**
     * Dialog with the common information about a entity type and with input to provide name.
     * A main purpose is getting name for the future entity.
     *
     * @param categoryName Category of element
     * @param generalType  General element type: Flow, Rule, ...
     * @param elementTypeName Certain element type: "Simple Rule", "Truth Table", ...
     * @param defaultName Default entity name
     * @param handleCreateCallback callback for diff creation cases
     */
    function showCreateDialog(categoryName: string, generalType: string, elementTypeName: string, handleCreateCallback: (name: string) => Promise<void>, defaultName?: string): Promise<void>;
    interface CreateByDesignPatternDialogOptions {
        entityName: string;
        elementTypes: ElementType[];
        /**
         * General element type: Flow, Rule, ...
         */
        generalType: string;
        /**
         * Default entity name
         */
        defaultName: string;
        handleCreateCallback: (params: {
            name: string;
            type: string;
        }) => Promise<void>;
    }
    function showDesignPatternCreateDialog({ entityName, elementTypes, generalType, defaultName, handleCreateCallback }: CreateByDesignPatternDialogOptions): Promise<void>;
}
