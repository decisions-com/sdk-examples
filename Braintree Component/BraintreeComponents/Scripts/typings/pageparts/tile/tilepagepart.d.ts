/**
* Author:akash.singh@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/tiledatareturnservice.d.ts" />
declare namespace $DP.Components.Page.Tiles {
    interface TilePagePartOptions extends IEventOptions {
        cssClass?: string;
        isDesingTime: boolean;
    }
    class TilePagePart {
        protected options: TilePagePartOptions;
        protected pageContextId: string;
        private oldValue;
        private isBusy;
        private refreshPromise;
        static create(options: TilePagePartOptions): TilePagePart;
        constructor(options: TilePagePartOptions);
        protected showLoadingIndicator(): void;
        protected hideLoadingIndicator(): void;
        protected render(): Promise<void>;
        private renderDesignTimeView;
        private refresh;
        private onNavigationParamChanged;
        private getTileData;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
