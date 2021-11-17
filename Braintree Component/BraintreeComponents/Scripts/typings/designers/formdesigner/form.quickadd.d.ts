/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/FormEditService.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
declare namespace $DP.Designers.Forms {
    interface DPNodeData {
        nodePath: string;
        nodeId: string;
        toolbox: $D.Framework.Design.Form.FormToolboxInformation;
        canFav: boolean;
    }
    class QuickAddDialog {
        private creationInfo;
        private dialog;
        private quickAddContent;
        constructor(creationInfo: $D.Framework.Design.Form.FormComponentCreationInfo);
        show(designer: FormDesigner): void;
        private onResize;
        getDialog(): JQuery;
    }
    class QuickAddContent {
        holder: JQuery;
        designer: FormDesigner;
        creationInfo: $D.Framework.Design.Form.FormComponentCreationInfo;
        private selectedNodeId;
        private selectedNodeData;
        private btnAdd;
        private treeContainer;
        private lastCriteria;
        constructor(holder: JQuery, designer: FormDesigner, creationInfo: $D.Framework.Design.Form.FormComponentCreationInfo);
        private createTree;
        private loadNodes;
        private searchNodes;
        private getFavoriteEntityType;
        private getRecentElementType;
        private doSearch;
        private onNodeSelected;
        onAddButtonClick(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
