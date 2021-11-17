/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="../../typings/core/generated/ReportService.d.ts" />
/// <reference path="../../typings/core/generated/CommonActionService.d.ts" />
/// <reference path="../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../../common/spinner.d.ts" />
/// <reference path="rd.hierarchicalview.d.ts" />
declare namespace $DP.Designers.Reports {
    import ReportClientData = $D.Framework.Design.Report.Service.Comunication.ReportClientData;
    import ReportFieldInfo = $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo;
    import ReportElementInfo = $D.Framework.Design.Report.Service.Comunication.ReportElementInfo;
    import ReportElementType = $D.Framework.Design.Report.Service.Comunication.ReportElementType;
    import ReportDesignerFolderInfo = $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo;
    import ReportColumnInfo = $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo;
    import ReportServiceSettingsChanged = $D.Framework.Design.Report.Service.Comunication.ReportServiceSettingsChanged;
    import DesignerHeaderDisplayData = $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
    interface ReportFieldsAdded {
        ReportContextId: string;
        Columns: ReportColumnInfo[];
    }
    interface ReportColumnsChanged extends ReportFieldsAdded {
    }
    class AbstractReportDesignerTreeLoader {
        protected _contextId: string;
        protected _searchCriteria: string;
        constructor(contextId: string, searchCriteria: string);
        get CategoryNodeClass(): string;
        getLeafNodeClassByType(elementType: ReportElementType): string;
        getNodeIdByElement(context: Common.DPTreeContext): string;
        get ReportElementType(): ReportElementType;
        loadNodesAsync(node: Common.DPTreeContext, successCallback: (nodes: any[]) => void): void;
        protected searchNodes(searchCriteria: string, callback: (nodes: any[]) => void): Promise<void>;
        protected loadNodes(nodeId: string, callback: (nodes: any[]) => void): Promise<void>;
        protected beginMeasureLabels(): JQuery;
        protected endMeasureLabels(element: JQuery): void;
        protected measureMaxWidth(element: JQuery, values: string[]): number;
        createTreeNodeFromReportFolderInfo(node: ReportDesignerFolderInfo, hasChildren?: boolean): {
            text: string;
            children: boolean;
            data: {
                info: ReportDesignerFolderInfo;
                id: string;
            };
            id: string;
            li_attr: {
                class: string;
            };
        };
        createTreeNodeElementInfo(node: ReportElementInfo, hasChildren?: boolean, nodeType?: number): {
            text: string;
            children: boolean;
            data: {
                info: ReportElementInfo;
                id: string;
                type: number;
            };
            id: string;
            li_attr: {
                class: string;
            };
        };
    }
    class ReportDesignerDataSourcesLoader extends AbstractReportDesignerTreeLoader {
        constructor(contextId: string, searchCriteria: string);
        get ReportElementType(): ReportElementType;
    }
    class ReportDesignerDataFiltersLoader extends AbstractReportDesignerTreeLoader {
        constructor(contextId: string, searchCriteria: string);
        get ReportElementType(): ReportElementType;
    }
    class ReportDesignerColumnsLoader extends AbstractReportDesignerTreeLoader {
        constructor(contextId: string, searchCriteria: string);
        protected searchNodes(searchCriteria: string, callback: (nodes: any[]) => void): Promise<void>;
        protected loadNodes(nodeId: string, callback: (nodes: any[]) => void): Promise<void>;
        private createFieldCategoryNode;
        createTreeNodeFieldInfo(node: ReportFieldInfo, hasChildren?: boolean, cssClass?: string): {
            text: string;
            children: boolean;
            data: {
                info: ReportFieldInfo;
                type: number;
                id: string;
            };
            id: string;
            li_attr: {
                class: string;
            };
        };
    }
    class ReportViewsLoader extends AbstractReportDesignerTreeLoader {
        private views;
        constructor(views: Array<{
            name: string;
            category: string;
            cssClass: string;
        }>, searchCriteria: string);
        protected searchNodes(searchCriteria: string, callback: (nodes: any[]) => void): Promise<void>;
        protected loadNodes(nodeId: string, callback: (nodes: any[]) => void): Promise<void>;
        private createFieldCategoryNode;
    }
    class ReportDesigner {
        instanceId: string;
        reportId: string;
        reportContextId: string;
        folderId: string;
        integrationType: $D.Framework.Design.IntegrationType;
        serviceDataFormat: $D.Framework.Design.ServiceDataFormat;
        serviceReferenceType: $D.Framework.Design.ServiceReferenceType;
        private _layoutRoot;
        private _isDirty;
        private _isBusy;
        private designerProperties;
        private sidebar;
        private _designerViews;
        private _gridView;
        private _hierarchicalView;
        private _matrixView;
        private _cellsView;
        private _mergeView;
        private _columnsView;
        private _tilesView;
        private _eventsHelper;
        private _selectedHeaderItemId;
        private _selectedElementId;
        private _propertyGridContextId;
        _reportClientData: ReportClientData;
        private _designerViewsModel;
        private _designerRootElement;
        private _headerHolder;
        private sqlText;
        filterLayerHolder: JQuery;
        private headerProps;
        private editingContextId;
        private get helpCenterElem();
        static Create(instanceId: string, reportId: string, reportContextId: string, folderId: string, integrationType: $D.Framework.Design.IntegrationType, serviceDataFormat: $D.Framework.Design.ServiceDataFormat, serviceReferenceType: $D.Framework.Design.ServiceReferenceType, layoutRoot: JQuery): ReportDesigner;
        constructor(instanceId: string, reportId: string, reportContextId: string, folderId: string, integrationType: $D.Framework.Design.IntegrationType, serviceDataFormat: $D.Framework.Design.ServiceDataFormat, serviceReferenceType: $D.Framework.Design.ServiceReferenceType, _layoutRoot: JQuery);
        private buildHeaderProps;
        private initializeTopBar;
        private refreshHeader;
        private renderPrompt;
        static getInstance(element: JQuery): ReportDesigner;
        private initializeHeaderData;
        Initialize(limitRows: number, designerViewsModel: ViewConfigOptions[], reportClientData: ReportClientData, designerHeaderData: DesignerHeaderDisplayData, reportColumnInfo: ReportColumnInfo[]): Promise<void>;
        attachEvents(): void;
        private static canAttachController;
        private static canDetachController;
        get autoRefreshPreview(): boolean;
        get designerContentHost(): JQuery;
        hidePreviewView(): void;
        private LoadViews;
        private initializeMergeView;
        private initializeChartView;
        private showPropertyGrid;
        private getEditContext;
        private get contentAreaHeight();
        private get contentAreaWidht();
        private save;
        private close;
        private runReport;
        private openDesignerPropertyGrid;
        private subscribeToViewEvents;
        private RemoveColumnNameFromGroupingFields;
        private subscribeToMessages;
        private Save;
        private ReleaseReport;
        private _limitRowsElement;
        private get LimitRows();
        private _rowCountElement;
        private get RowCount();
        private refreshSQLText;
        private refreshPreview;
        private onReportPropertyChanged;
        private onReportServiceSettingsChanged;
        private updateCurrentView;
        private selectHeaderElement;
        private showObjectEditor;
        private AddElementWizard;
        private GetDataLoaderByWizardParams;
        private searchQuickAddNode;
        private lastCriteria;
        private buildTree;
        private onWizardTreeNodeSelected;
        private onGridViewChanged;
        private onFieldAdded;
        private onFieldRemoved;
        private onFieldsRemoved;
        private onDataSourceAdded;
        private onFilterAdded;
        private onFiltersDeleted;
        private loadSQLText;
        private refreshReportFilters;
        private refreshReportColumns;
        private allowToAddReportViews;
        private showValidationOnInvalidColumns;
        private refreshRequiredFields;
        private hasVisibleDataSources;
        private onFilterNameChangedCallback;
        private onColumnPropertyChanged;
        private onGroupedColumnChangedCallback;
        private removeAllGroupings;
        private onChartAdded;
        private onChartPropertyChanged;
        private onDesignerChangedCallback;
        private onPreviewChanged;
        private onColumnsOrderChanged;
        private onRequiredFieldsChanged;
        private onReportFieldsAdded;
        private onReportFieldsChanged;
        private onReportFieldAdded;
    }
    class ReportDesignerEventsHelper {
        private _reportContextId;
        private _eventTokens;
        designerChangedCallback: (contextId: string) => void;
        fieldRemovedCallback: (fieldName: string) => void;
        fieldsRemovedCallback: (fieldsName: string[]) => void;
        filterAddedCallback: (contextId: string) => void;
        filtersDeletedCallback: (contextId: string, reportfilters: string[], columns: ReportColumnInfo[], filters: ReportElementInfo[], sqlText: string) => void;
        filterNameChangedCallback: (filterContextId: string, name: string) => void;
        columnPropertyChanged: (columnContextId: string, propertyName: string, title: string) => void;
        groupedColumnChangedCallback: (contextId: string, newGroupedColumns: string[]) => void;
        chartPropertyChanged: (chartInfo: $D.Framework.Design.Report.ChartInfo) => void;
        chartAddedCallback: (chartInfo: $D.Framework.Design.Report.ChartInfo) => void;
        previewDataChangedCallback: (contextId: string) => void;
        fieldAddedCallback: (contextId: string, dataSourceName: string, fieldName: string, columnContextId: string) => void;
        fieldsAddedCallback: (contextId: string, columns: ReportColumnInfo[]) => void;
        reportFieldsChangedCallback: (contextId: string, columns: ReportColumnInfo[]) => void;
        reportPropertyChangedCallback: (contextId: string, propertyName: string) => void;
        reportServiceSettingsChangedCallback: (serviceSettings: ReportServiceSettingsChanged) => void;
        constructor(reportContextId: string);
        subscribeToEvents(): void;
        unsubscribeFromEvents(): void;
        private serverMessageHandler;
        private onReportFieldAdded;
        private onReportFieldsAdded;
        private onReportColumnsChanged;
        private onReportFilterAdded;
        private onFilterRemoved;
        private onReportFilterNameChanged;
        private onFilterPropertyChanged;
        private onReportColumnPropertyChanged;
        private onReportFieldRemoved;
        private onReportFieldsRemoved;
        private onGroupedColumnChanged;
        private onPreviewDataChanged;
        private onChartPropertyChanged;
        private onChartAdded;
        private onReportPropertyChanged;
        private onReportMatrixDefinionChanged;
        private onReportServiceSettingsChanged;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
