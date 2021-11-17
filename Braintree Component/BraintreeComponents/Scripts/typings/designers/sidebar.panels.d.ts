/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/AccountService.d.ts" />
/// <reference path="../typings/core/generated/ToolboxHelpService.d.ts" />
/// <reference path="../typings/core/generated/FolderService.d.ts" />
/// <reference path="../typings/core/generated/commondesignerservice.d.ts" />
/// <reference path="../entitypicker/epick.ui.d.ts" />
/// <reference path="../actions/actionExecuter.d.ts" />
/// <reference path="../common/dptabs.d.ts" />
/// <reference path="../common/favicon.d.ts" />
/// <reference path="../common/dptree.d.ts" />
/// <reference path="../common/popuplayer.d.ts" />
/// <reference path="../richtextinput/richtextinput.d.ts" />
/// <reference path="../entitypicker/epick.editors.d.ts" />
/// <reference path="../entitypicker/epick.data.d.ts" />
/// <reference path="../dialog/dialog.notification.d.ts" />
/// <reference path="common/graphics.d.ts" />
/// <reference path="../typings/ckeditor/ckeditor.d.ts" />
/// <reference path="../formControls/form.silverrichtextbox.d.ts" />
/// <reference path="../merge/MergeEditor.d.ts" />
/// <reference path="helplayer/helplayer.d.ts" />
/// <reference path="sidebar.d.ts" />
/// <reference path="../typings/core/generated/FavoriteService.d.ts" />
declare module $DP.Designers {
    import FavoriteType = $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
    interface ToolboxTreeNode {
        nodePath: string[];
        nodeId: string;
        fav: boolean;
        canFav: boolean;
        favoriteType: FavoriteType;
        information: $D.Framework.Design.Flow.StepCreationInfo;
        label?: string;
        showHelpLayer?: boolean;
    }
    class RecentTreeManager {
        private treeContainer;
        private recentsNodeSelector;
        private filterType;
        private autoDisposeAnchor?;
        private pubSubToken;
        constructor(treeContainer: JQuery, recentsNodeSelector: string, filterType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType, autoDisposeAnchor?: JQuery);
        getNode(id: string): any;
        getNodeSelector(id: string): string;
        dispose(): void;
    }
    class BaseToolboxPanel implements $DP.Designers.SidebarPanel {
        protected container: JQuery;
        protected treeContainer: JQuery;
        constructor();
        get header(): string;
        get hasSearch(): boolean;
        get footer(): JQuery;
        initialize(container: JQuery): void;
        protected lastCriteria: string;
        private doSearch;
        protected loadNodes(context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void): void;
        protected searchNodes(criteria: string, callback: (nodes: any[]) => void): void;
        protected drag(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
        protected dragStopped(context: $DP.Common.DPTreeContext, ev: JQueryEventObject, point?: $DP.Common.Point): void;
        protected getFavoriteActionEntity(): string;
        protected getRecentElementType(): $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
        protected onAfterNodeCreated(context: Common.DPTreeContext): void;
        protected onAfterTreeCreated(): void;
        protected createDragTarget(node: any): JQuery;
        protected createToolboxTree(criteria?: string): void;
        protected getFavouriteIdPrefix(): string | undefined;
        refresh(path?: string[] | undefined): void;
    }
    class BasePropertiesPanel implements $DP.Designers.SidebarPanel {
        container: JQuery;
        private tempContextId;
        protected lastContextId: string;
        private tempDeferred;
        protected context: $DP.Common.RemoteContextProvider;
        constructor(contextId?: string);
        get header(): string;
        protected getRefreshUrl(): string;
        protected getRefreshData(currentContextId: string, newContextId: string): any;
        protected contextCreated(contextId: string): void;
        forceRefresh(contextId: string, deferred?: JQueryDeferred<string>): JQueryPromise<string>;
        refresh(contextId: string, deferred?: JQueryDeferred<string>): JQueryPromise<string>;
        protected clear(callback: () => void): void;
        initialize(container: JQuery): void;
        submit(): void;
        private static getEditContextId;
        onExpanded: () => void;
    }
    class QuickAddPanel implements $DP.Designers.SidebarPanel {
        private quickAddContent;
        get header(): string;
        constructor(quickAddContent: JQuery);
        initialize(container: JQuery): void;
    }
    abstract class ReusableSidebarPanel implements $DP.Designers.SidebarPanel {
        abstract get header(): string;
        initialize(container: JQuery): void;
        abstract initializeContent(container: JQuery): any;
        private lastContainer;
        clearContent(): void;
        setContent(newContent: JQuery): void;
        static get<T>(sidebar: JQuery, constructor: {
            new (...args: any[]): T;
        }): T | undefined;
    }
    class QuickAddPropertiesPanel extends ReusableSidebarPanel {
        private quickAddContent;
        get header(): string;
        constructor(quickAddContent: JQuery);
        initializeContent(container: JQuery): void;
    }
    class FlowConfigurationPanel extends ReusableSidebarPanel {
        private quickAddContent;
        get header(): string;
        constructor(quickAddContent: JQuery);
        initializeContent(container: JQuery): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
