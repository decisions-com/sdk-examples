/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    import FavoriteType = $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
    interface FavoriteIconOptions {
        holder?: JQuery;
        width?: number | string;
        height?: number | string;
        isFavorite?: boolean;
    }
    interface IRenderFavoriteIconOptions {
        entityId: string;
        sessionId?: string;
        favoriteType: FavoriteType;
        shouldOpenMenu?: boolean;
        container: JQuery;
    }
    interface IHandleFavoriteEntityOptions {
        entityData: $D.Framework.ServiceLayer.Services.Folder.FavoriteEntityMessage;
        container: JQuery;
        getFavoritesNodeSelector: (nodeId?: string) => string;
        getFavoriteNodeSelector: (nodeId: string) => string;
        getNodeSelectors: (nodeId: string) => string[];
        renderFavIconCallback: (entityId: string, favoriteType: FavoriteType, container: JQuery) => void;
    }
    class FavoriteIcon {
        private options?;
        private width;
        private height;
        private isFavorite;
        static get(element: JQuery): FavoriteIcon;
        constructor(options?: FavoriteIconOptions);
        update(options: FavoriteIconOptions): void;
        private updateInternal;
        private drawStar;
    }
    class FavoriteTreeManager {
        private treeRoot;
        private actionLoader;
        private favoriteNodeSelector;
        private nodeSelector;
        private favoritesNodeSelector;
        private favoriteButtonSelector;
        private autoDisposeAnchor?;
        private useNewTree?;
        private pubSubToken;
        constructor(treeRoot: JQuery, // TODO: change this to a DPTree thingy
        actionLoader: (li: JQuery) => $D.Framework.ServiceLayer.Actions.BaseActionType, favoriteNodeSelector: (nodeId: string) => string, nodeSelector: (nodeId: string) => string, favoritesNodeSelector: string, favoriteButtonSelector?: string, autoDisposeAnchor?: JQuery, useNewTree?: boolean);
        private handleFavIconClick;
        dispose(): void;
    }
    function handleFavoriteEntityEvent({ entityData, container, getFavoritesNodeSelector, getFavoriteNodeSelector, getNodeSelectors, renderFavIconCallback }: IHandleFavoriteEntityOptions): Promise<void>;
    function renderFavIconForFlowStep(params: IRenderFavoriteIconOptions): Promise<void>;
    function renderFavIconForFormControl(params: IRenderFavoriteIconOptions): Promise<void>;
    function renderFavIconForPageControl(params: IRenderFavoriteIconOptions): Promise<void>;
    function renderFavIconForEntity(params: IRenderFavoriteIconOptions): Promise<void>;
}
interface JQuery {
    favIcon(options?: $DP.Common.FavoriteIconOptions): JQuery;
    favIcon(methodName: 'get'): $DP.Common.FavoriteIcon;
    favIcon(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
