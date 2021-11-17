/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    class ReportDesignerGridViewController implements IViewController {
        private selector;
        private reportContextId;
        private folderId;
        private reportId?;
        private gridElement;
        private gridContainerElement;
        constructor(selector: JQuery, reportContextId: string, folderId: string, reportId?: string);
        get loadViewURL(): string;
        get gridSelector(): string;
        attach(): void;
        detach(): void;
        get hidePreview(): boolean;
        private updateView;
        private uloadGridView;
        private createGridView;
        private refreshGridView;
        private resizeGrid;
        private loadGridView;
        private prepareCallData;
        private setGridHandlers;
        private resetGridHandlers;
        private editColumnHandler;
        private deleteColumnHandler;
        private columnsOrderHandler;
        private setColumnWidthHandler;
        private getColumnId;
        private getColumnByRemoteContextId;
        private remotePropertyChangedHandled;
        private setColumnTitle;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
