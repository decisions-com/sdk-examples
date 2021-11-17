/**
* Author:huzefa.ezzi@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Components.Page.Tiles {
    class TilePart {
        protected options: TilePartOptions;
        static get($elem: JQuery): TilePart;
        static create(options: TilePartOptions): void;
        private loadingHolder;
        private instanceId;
        private oldValue;
        constructor(options: TilePartOptions);
        private showLoadingIndicator;
        private hideLoadingIndicator;
        load(pageParms?: DataPair[]): JQueryPromise<any>;
        url(): string;
        attachEvents(): void;
        private onNavigationParamChanged;
        protected addFolderChangeEvents(): void;
    }
    interface TilePartOptions {
        $holder: JQuery;
        flowId: string;
        refreshOnTreeChange: boolean;
        refreshOnCurrentFolderChange: boolean;
        refreshOnAnyFolderChange: boolean;
        refreshOnContainedEntityChange: boolean;
        updateDatafromSelectionBus: boolean;
        selectionBusName: string;
        componentid: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
