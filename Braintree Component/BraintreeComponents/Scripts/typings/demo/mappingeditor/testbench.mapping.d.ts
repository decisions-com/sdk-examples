/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/FolderService.d.ts" />
declare namespace Testbench.MappingEditor {
    class ContentManager {
        private folderId;
        private flowId;
        private flowSessionId;
        private steps;
        private selectedStepId;
        private mappingComponentId;
        constructor();
        Initialize(): void;
        private loadFlow;
        private showMappingEditor;
        private saveAndCloseMappingEditor;
        private closeMappingEditor;
        static logMessage(message: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
