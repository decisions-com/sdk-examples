/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../common/dptree.d.ts" />
interface IReportsTreeModel {
    instanceId: string;
    defaultReportId: string;
    defaultFolderId: string;
    currentFolderId: string;
    showDefaultReportList: boolean;
    node: JQuery;
    selectedReportId: string;
    ShowReportHeaderRightSide: boolean;
    rooltFolderLabel: string;
    selectedPickerReportSource: string;
    rootFolderLabel: string;
    componentId: string;
}
declare namespace $DP.Controls.ReportViewer {
    import ReportTree = $D.Framework.Design.Report.Service.Comunication.ReportForTree;
    class ReportViewerTree {
        private options;
        selectedReportId: string;
        reportsTreeData: ReportTree[];
        favoriteReports: ReportTree[];
        reportPickerTreeContainer: JQuery;
        favoriteReportFolderId: string;
        selectedReportFolderId: string;
        selectedReportParentsId: string[];
        constructor(options: IReportsTreeModel);
        tree: JQuery;
        getTree(): JQuery;
        createTree(): void;
        initialize(): this;
        attachEvents(): void;
        addRemoveFavorite(element: JQuery): void;
        addOrRemoveFromFavoriteReportList(button: JQuery, reportId: string, reportName?: string): void;
        addReportUnderFavorite(reportID: string, reportName?: string): void;
        removeReportFromFavorite(reportID: string): void;
        generateStar(canvas: HTMLElement, color: string): void;
        private filterTreeData;
        private getChildrenForFolder;
        private loadNodes;
        getNodeByReportId(treeData: ReportTree[], reportId: string): ReportTree;
        createNode(reportTreeData: ReportTree[], callback: (nodes: any[]) => void): void;
        getNode(reportTree: ReportTree, isSelectedAny: boolean): object;
        private getReportPickerTreeHtml;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
