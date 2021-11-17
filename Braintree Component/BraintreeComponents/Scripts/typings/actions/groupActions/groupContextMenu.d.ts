/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common.Actions {
    import EntityTypeAndId = $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId;
    import ReportGroupActionBehavior = $D.Framework.Design.Report.ReportGroupActionBehavior;
    class GroupContextMenu {
        instanceId: string;
        private onActionDisplayed?;
        private holder?;
        static SelectedRowsCount: number;
        static execute(instanceId: string, rowDatas: ReportDataRow[], onActionDisplayed?: () => void, event?: JQueryEventObject, holder?: JQuery): void;
        behavior: ReportGroupActionBehavior;
        private loader;
        private $menuContainer;
        private menuId;
        private isDrillDown;
        private drillDownReport;
        constructor(instanceId: string, onActionDisplayed?: () => void, holder?: JQuery);
        show(rowDatas: ReportDataRow[], event: JQueryEventObject): void;
        private render;
        private handleExectution;
        private preRender;
        getPreviewActionDiv(id: any): string;
        private postRender;
        static HideGroupActionsDialog(instanceId: string): void;
        getEntityTypeAndId(row: ReportDataRow): EntityTypeAndId;
        insertGroupActionHeader(): void;
        attachEvent(): void;
    }
    class ReportDataRow {
        EntityTypeName: string;
        EntityId: string;
        RowId: number;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
