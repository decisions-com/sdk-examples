/// <reference path="../typings/core/generated/EntityDetailsService.d.ts" />
declare namespace $DP.Portal {
    import Details = $D.Framework.ServiceLayer.Services.EntityDetails;
    class EntityDetails {
        static readonly ENTITY_DETAILS_ID = "ENTITY_DETAILS_ID";
        static GetEntityDetailsDto(entityId: string, typeName: string): Promise<Details.EntityDetailsDto>;
        static openDetailsLayer(entityId: string, typeName: string, customPreview?: string): Promise<void>;
        static showDetails(entityId: string, typeName: string, holder: JQuery): Promise<void>;
        private static buildDetailsParameters;
        private static createFileUploader;
        private static showGroupActionForTextReport;
        private static showPage;
        static openInNewWindow(entityId: string, typeName: string): void;
    }
}
