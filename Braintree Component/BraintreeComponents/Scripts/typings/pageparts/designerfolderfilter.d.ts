/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/decisions.d.ts" />
declare namespace $DP.PageParts.DesignerFolder {
    interface DesignerFolderFilterPartOptions {
        host?: JQuery;
        pageContextId?: string;
        folderId?: string;
        refreshPartId?: string;
    }
    class DesignerFolderFilterPart {
        private options;
        private host;
        private filterBoxHolder;
        private filterBox;
        private filterPanel;
        private filterAbilities;
        private currentFilter;
        constructor(options: DesignerFolderFilterPartOptions);
        private updateFilterAbilities;
        private initializeFilterBox;
        private onFilterBoxMouseDown;
        private checkStickyItemInFilter;
        private clearStickyItems;
        private getCurrentStickyItems;
        private static checkStringInList;
        private showPanel;
        static get(host: JQuery): DesignerFolderFilterPart;
        private setFilterOnPage;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
