/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/FormDesignerService.d.ts" />
/// <reference path="../../typings/core/generated/ConfigurationStorageService.d.ts" />
/// <reference path="../common/graphics.d.ts" />
/// <reference path="../../common/spinner.d.ts" />
declare namespace $DP.Designers.Forms {
    import Point = $DP.Common.Point;
    import SizeInfo = $DP.Containers.SizeInfo;
    class FormDesignerSurface extends $DP.FormHost.BaseFormSurface implements $DP.FormHost.DesignTimeFormSurface {
    }
    class FormDesigner extends FormDesignerSurface {
        private layoutRoot;
        private designerParams;
        private service;
        private _sessionId;
        private _formSessionInfoId;
        private _formSession;
        private cssDocuments;
        private _designerRootElement;
        private designerSurface;
        private adornersSurface;
        private formSurface;
        private formSurfaceContainer;
        private formDnD;
        private headerHolder;
        private promptHolder;
        private editComponentSurface;
        private isBusy;
        private showEdges;
        private isRanFromFlow;
        private newComponentId;
        private designerSubscriptionToken;
        private useCompositeControls;
        private leftSidebarHost;
        private infoPanel;
        private rightSidebarHost;
        private formDesignerAdorners;
        private designerToolbox;
        private designerProperties;
        private designerExplorer;
        private tabEditor;
        private inputDataController;
        private formDesignerDnD;
        private helpCenter;
        private surfaceInteraction;
        private selectionProvider;
        private eventProvider;
        private formElementsProvider;
        private headerProps;
        private promptDisplayData;
        private quickAddModeControl;
        private isInQuickAddMode;
        private moveHandleControl;
        private cursorCorrectionX;
        private cursorCorrectionY;
        private _scrollOffset;
        private scrollValues;
        private mouseMoveHandler;
        private mouseUpHandler;
        static create(designerParam: FormDesignerOptions): FormDesigner;
        static getInstance(element: JQuery): FormDesigner;
        get mappingContext(): Common.MappingContext;
        get isResponsiveContainer(): boolean;
        get IsRanFromFlow(): boolean;
        get sessionId(): string;
        get sessionInfoId(): string;
        get formSession(): Controls.FormSurface;
        get isPage(): boolean;
        get designerElementType(): any;
        static get FormHolderSelector(): string;
        private get ComponentSelector();
        private get SurfaceView();
        constructor(layoutRoot: JQuery, designerParams: FormDesignerOptions);
        private buildHeaderProps;
        private initializeTopBar;
        private refreshHeader;
        showInputDataDialog(): void;
        private renderPrompt;
        private toggleShowEdges;
        private setShowEdgesName;
        private startLassoInteraction;
        private updateLassoInteraction;
        private endLassoInteraction;
        private hitTestFormElements;
        getFormSurfaceElement(): JQuery;
        getFormSurfaceContainerElement(): JQuery;
        getformSessionId(): string;
        addControl(control: $DP.FormHost.DecisionsControl): void;
        private initialData;
        get InitialData(): DataPair[];
        private startDrag;
        canSnapTo(point: Point, containerSelector?: string | string[], dragContext?: ComponentDragContext, draggingElementSize?: SizeInfo): boolean;
        private moveDrag;
        private endDrag;
        private adornerEndDrag;
        initialize(): Promise<void>;
        private attachEvents;
        private fileUploadComplete;
        private onSelectionChanged;
        private contextId;
        private showProperties;
        private showPropertyEditor;
        showQuickProperties(componentId: string, genericComponent?: boolean): boolean;
        private showContextMenu;
        private buildShiftComponentInfos;
        private buildLeftAlignComponentInfos;
        private buildTopAlignComponentInfos;
        private buildRightAlignComponentInfos;
        private buildBottomAlignComponentInfos;
        private buildMiddleAlignComponentInfos;
        private buildCenterAlignComponentInfos;
        private canChangeHorizontalDistribution;
        private buildDistributeHorizontallyComponentInfos;
        private canChangeVerticalDistribution;
        private buildDistributeVerticallyComponentInfos;
        private canChangeSelectionWidth;
        private buildSelectionWidthComponentInfos;
        private canChangeSelectionHeight;
        private buildSelectionHeightComponentInfos;
        private showMultipleSelectionOptions;
        selectComponent(componentId: string, multipleSelection?: boolean): void;
        unselectComponent(componentId: string): void;
        copyComponent(componentId: string): void;
        cutComponent(componentId: string): void;
        pasteComponent(parentContainerId: string, point: Point): void;
        deleteComponents(componentIds: string[]): void;
        moveComponent(parent: JQuery, component: JQuery, componentPoint: Point, cursor: Point, availableGridSpan?: $DP.Common.GridSpan): void;
        private getMoveComponentInfo;
        moveComponents(componentMoveInfos: $D.Framework.Design.Form.FormComponentMoveInfo[]): void;
        shiftComponents(deltaX: number, deltaY: number): void;
        resizeComponent(parent: JQuery, component: JQuery, diffLeft: number, diffTop: number, diffWidth: number, diffHeight: number): void;
        updateComponents(componentInfos: $D.Framework.Design.Form.FormComponentInfo[]): JQueryPromise<void>;
        setComponentSpan(parent: JQuery, component: JQuery, direction: $D.Framework.Design.Form.ResizeDirection, expandType: $D.Framework.Design.Form.ExpandType): void;
        duplicateLastRowEditorHandler(componentId: string): void;
        duplicateLastColumnEditorHandler(componentId: string): void;
        insertRow(componentId: any, point: Point, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): void;
        insertColumn(componentId: any, point: Point, insertAt: $D.Framework.Design.Form.InsertColumnRowAt): void;
        convertGridToGridLayout(componentId: string): Promise<void>;
        pickFormBasedComponentSource(componentId: string): void;
        private disableSelectionContextMenu;
        editFormBasedComponentSource(componentId: string): void;
        private showFormPicker;
        surfaceResize(diffWidth: number, diffHeight: number): void;
        quickAddComponent(component: JQuery, x?: number, y?: number): void;
        quickAddComponentById(componentId: string, x?: number, y?: number): void;
        private showQuickAddDialog;
        addComponentAt(toolboxData: any, x?: number, y?: number): void;
        addComponent(creationInfo: $D.Framework.Design.Form.FormComponentCreationInfo): void;
        private addComponentLabel;
        setRestTabOrder(set: boolean): void;
        setComponetsTabOrder(tabInfo: $D.Framework.Design.Form.FormElementTabInfo[], refresh?: boolean): Promise<void>;
        private refreshTabEditor;
        loadToolboxCategories(nodes: string[], callback: (data: {
            GetToolboxCategoriesResult: string[];
        }) => any): void;
        getToolboxCategories(nodes: string[]): {
            GetToolboxCategoriesResult: string[];
        };
        loadToolboxInformation(nodes: string[], callback: (data: {
            GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        }) => any): void;
        getToolboxFavoriteSteps(callback: (data: {
            GetToolboxFavoriteStepsResult: $D.Framework.Design.Form.FormToolboxInformation[];
        }) => any): void;
        getToolboxRecentInformation(callback: (data: {
            GetToolboxRecentResult: $D.Framework.Design.Form.FormToolboxInformation[];
        }) => any): void;
        getToolboxInformation(nodes: string[]): {
            GetToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        };
        getToolboxDataInformation(nodes: string[]): {
            GetToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        };
        searchToolboxInformation(searchString: string, successCallback: (data: {
            SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        }) => any): void;
        getSearchToolboxInformation(searchString: string): {
            SearchToolboxInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        };
        getSearchToolboxDataInformation(searchString: string): {
            SearchToolboxDataInformationResult: $D.Framework.Design.Form.FormToolboxInformation[];
        };
        private buildComponentInfo;
        private fillComponentInfo;
        private getContainerInsertLocation;
        private findClosestElement;
        private buildToolboxCreationInfo;
        private refreshDesigner;
        private appendTosurface;
        private refreshSurface;
        private addOverlay;
        private onSurfaceDataLoaded;
        private resizeDesignArea;
        private setBackground;
        private updateOverlay;
        private storeScrollValues;
        private setScrollValues;
        private initializeFormAdorners;
        private refreshFormAdorners;
        private handleFormDesignerKeyUp;
        private initializeFormEvents;
        private onDocumentMouseUp;
        private onDocumentMouseMove;
        private getValidationEntries;
        private refreshValidation;
        private loadSurface;
        private showContainerHover;
        private showQuickAddMode;
        private showMoveHandle;
        private hideQuickAddMode;
        private hideMoveHandle;
        private switchToQuickAddMode;
        switchToSelectionMode(): void;
        private doSave;
        private save;
        private doClose;
        private createCheckPoint;
        private callBeforeSave;
        private showPreview;
        private showControlEdges;
        private hideControlEdges;
        private onResize;
        private resizeSurface;
        private getElementCenterOffset;
        private scrollSurface;
        private showComponentContextMenu;
        private getComponentIdAt;
        private getContainerIdAt;
        private getContainerAt;
        private getComponent;
        private getComponentPoint;
        private filterElementIdsByBoundingBox;
        static findComponentElementById(surface: JQuery, componentId: string): JQuery;
        private getFormElementById;
        private getComponentElementById;
        private componentHasInteraction;
        getFolderId(): string;
    }
    interface FormDesignerOptions {
        instanceId: string;
        sidebarItems: [{
            sidebarClass: string;
            sidebarId: string;
        }];
        elementId: string;
        folderId: string;
        flowSessionId: string;
        flowStepId: string;
        elementType: string;
        isPage: boolean;
        hasInputData: boolean;
        formBackgroundId?: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
