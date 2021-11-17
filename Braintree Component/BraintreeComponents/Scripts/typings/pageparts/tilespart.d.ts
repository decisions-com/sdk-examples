/**
* Author:huzefa.ezzi@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.Components.Page.Tiles {
    class TilesPart extends TilePart {
        protected options: TilesPartOptions;
        constructor(options: TilesPartOptions);
        static getTiles($elem: JQuery): TilesPart;
        static createTiles(options: TilesPartOptions): void;
        load(pageParms?: DataPair[]): JQueryPromise<any>;
        private applyTilesOptions;
        private applySize;
        private getTiles;
        private getSeprators;
        url(): string;
    }
    interface TilesPartOptions extends TilePartOptions {
        definedTileSize: number;
        sepratorWidth: number;
        sepratorColor: string;
        fillmode: TilesFillMode;
        isHorizontal: boolean;
        tileClass?: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
