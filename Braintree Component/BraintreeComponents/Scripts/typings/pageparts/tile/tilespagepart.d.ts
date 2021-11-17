/**
* Author:akash.singh@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/tiledatareturnservice.d.ts" />
declare namespace $DP.Components.Page.Tiles {
    interface TilesPagePartOptions extends TilePagePartOptions {
        definedTileSize: number;
        sepratorWidth: number;
        sepratorColor: string;
        fillmode: TilesFillMode;
        isHorizontal: boolean;
    }
    class TilesPagePart {
        protected options: TilesPagePartOptions;
        protected pageContextId: string;
        private oldValue;
        private tileInlineStyles;
        private isBusy;
        private refreshPromise;
        static create(options: TilesPagePartOptions): TilesPagePart;
        constructor(options: TilesPagePartOptions);
        protected showLoadingIndicator(): void;
        protected hideLoadingIndicator(): void;
        protected render(): Promise<void>;
        private refresh;
        private updateView;
        private getSeparatorView;
        private onNavigationParamChanged;
        private renderDesignTimeView;
        private getTilesData;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
