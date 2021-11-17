/**
* Author:akash.singh@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/tiledatareturnservice.d.ts" />
declare namespace $DP.Components.Page.Tiles {
    import TileData = $D.Framework.Design.Flow.CoreSteps.Tile.TileData;
    interface ITileViewOptions {
        holder: JQuery;
        tileData: TileData;
        cssClass?: string;
        inlineStyles?: string;
    }
    interface ITileDesignTimeViewOptions {
        holder: JQuery;
        text?: string;
    }
    class TileView {
        private options;
        protected tileData: TileData;
        private PRIMARY_CLASS_NAME;
        private tileHolder;
        constructor(options: ITileViewOptions);
        private render;
        protected getView(): string;
        private getLineView;
        private attachEvents;
    }
    class DesignTimeTileView {
        private options;
        constructor(options: ITileDesignTimeViewOptions);
        render(): void;
        private getView;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
