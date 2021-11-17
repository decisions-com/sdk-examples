/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="graphics.d.ts" />
/// <reference path="mappingeditor.svg.d.ts" />
declare namespace $DP.Common {
    import DataDescriptionType = $D.Framework.Utilities.Data.DataDescriptionType;
    class DataDescriptionNodeLoader {
        private flowSessionId;
        private stepId;
        private descriptionType;
        private itemWidthCalculator;
        private setAnchorWidth;
        private forCustom;
        constructor(flowSessionId: string, stepId: string, descriptionType: DataDescriptionType, itemWidthCalculator: Function, setAnchorWidth: boolean, forCustom: boolean);
        getNodeIdByElement(element: JQuery): string;
        getNodesView(nodeId?: string): Promise<string>;
        protected getDatadescriptionNodeConfig(nodeId: string): Promise<DatadescriptionNodeConfig>;
    }
    class DatadescriptionNodeConfig {
        isAllLeaf: boolean;
        datadescriptionNode: DatadescriptionOptions[];
        constructor(isAllLeaf: boolean, datadescriptionNode: DatadescriptionOptions[]);
    }
    interface DatadescriptionOptions {
        id: string;
        label: string;
        path: string;
        dataName: string;
        isList: boolean;
        isAlternateLevel: boolean;
    }
    class MappingEditorConfigOptions {
        componentId: string;
        layoutRoot: JQuery;
        inputPanelHost: JQuery;
        inputTreeHost: JQuery;
        outputPanelHost: JQuery;
        outputTreeHost: JQuery;
        svgSurface: JQuery;
        svgAdorners: JQuery;
        forInput: boolean;
        forCustom: boolean;
        showConfirmationOnSave: boolean;
    }
    class MappingEditor {
        private flowSessionId;
        private stepId;
        private componentId;
        private configuration;
        private _isDirty;
        private _forInput;
        private _forCustom;
        private _showConfirmationOnSave;
        private _context;
        private _mappingLinkView;
        private _specifiedDataNodes;
        private _adornerSurface;
        private _linksSurface;
        private _isDnD;
        private _isSnapped;
        private _initialPoint;
        private _dragElement;
        private _dragSource;
        private _dropElement;
        private _propertyGridInstance;
        private _mappingTree;
        private _treeItemWidth;
        private dataDescriptionLoader;
        private leftTree;
        private rightTree;
        private leftPanel;
        private rightPanel;
        private mappingNodesLoader;
        private mappingTree;
        private dataDescriptionTree;
        constructor(flowSessionId: string, stepId: string, componentId: string, configuration: MappingEditorConfigOptions);
        refresh(): Promise<void>;
        Initialize(): void;
        private onNodesChanged;
        private attachEvents;
        closeDialog(): void;
        private createEllipsisTooltip;
        private getTriangleForTooltip;
        private loadDataDescriptionTree;
        private loadMappingTree;
        private clearDataDescriptionTree;
        private clearMappingTree;
        static computeTreeItemWidth(panel: JQuery, threshold: number): number;
        private static mouseOnEditor;
        private onSurfaceMouseUp;
        private startDrag;
        private endDrag;
        private showHighlighter;
        private findByDataPath;
        private hideHighlighter;
        private showSpecifiedDataNodes;
        saveAndClose(): void;
        save(): void;
        private editComplete;
        cancelAndClose(): void;
        cancel(): void;
        close(dialogHost: JQuery): boolean;
        onResize(): void;
        private release;
        private loadPropertyNodeEditor;
        private loadPropertyNodeEditors;
        private linkNodes;
        private buildLinks;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
