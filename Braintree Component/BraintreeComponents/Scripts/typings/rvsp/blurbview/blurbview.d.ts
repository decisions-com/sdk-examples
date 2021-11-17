/// <reference path="../../typings/jqgrid/jqgrid.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
declare function isShowActionsOnRightClick(instanceId: string): boolean;
declare function recursiveExpandCollapseGroups(currentElement: any, isClicked: any): void;
declare function SaveGridRowIndex(instanceId: string, selectedRowId: string): any;
declare function GetDefaultActionFornEntity(entityId: any, entityTypeName: any, forTextOrBlurb: any, isParagraphClicked: any, instanceID: any, selectedElement: any, isContextMenu: any): any;
declare namespace $DP.Controls.Report {
    interface BlurbViewReportOptions {
        controlElem: JQuery;
        instanceId: string;
        folderId: string;
    }
    class BlurbViewReport {
        private options;
        constructor(options: BlurbViewReportOptions);
        static initialize(options: BlurbViewReportOptions): void;
        attachEvents(): void;
        addSelectedRowColorOnAutoSelectFirstRow(): void;
        addSelectedBlurbRowColor(elem: JQuery): void;
        addBlurbRowColor(elem: JQuery): void;
    }
}
