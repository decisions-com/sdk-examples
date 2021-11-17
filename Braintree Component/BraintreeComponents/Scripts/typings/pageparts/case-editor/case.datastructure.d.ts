/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../designers/datastructure/DataStructureEditor.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import DefinedDataStructureDto = $D.Framework.Design.DataStructure.CaseEditor.DefinedDataStructureDto;
    interface CaseDataPanelOptions {
        dataStructure: DefinedDataStructureDto;
    }
    class CaseDataStructure {
        private options;
        private view;
        constructor(options: CaseDataPanelOptions);
        getView(): JQuery;
        protected render(): void;
        private noData;
        private createPropertyRows;
        private createPropertyRow;
        private runEditAction;
    }
}
