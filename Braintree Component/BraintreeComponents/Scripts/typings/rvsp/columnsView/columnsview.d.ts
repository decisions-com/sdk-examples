/// <reference path="../../common/tilesmarkup.d.ts" />
import Tiles = $D.Framework.Design.Report.Tiles;
import TilesMarkup = $DP.Common.TilesMarkup;
declare function handleRunDefaultAction(instanceId: any, data: any, entityId: any, targetElement: any): any;
declare namespace $DP.Controls.Report {
    interface ColumnOptions {
        contextId: string;
        instanceId: string;
        reportId?: string;
        folderId?: string;
        componentId?: string;
        $holder: JQuery;
        selectedTileType?: string;
        sortBy?: string;
        stackColumns?: boolean;
        size: {
            width: number;
            height: number;
        };
        tilesDataProvider: (contextId: string, reportId: string) => Promise<Tiles.Tile[]>;
        showActions: boolean;
    }
    class ColumnsView {
        private options;
        private tiles;
        private tileTypes;
        private $root;
        private filterText;
        private static instanceHolder;
        private tilesMarkup;
        constructor(options: ColumnOptions);
        get configuration(): ReportViewConfiguration;
        get sortingOptions(): string[];
        get actionsMenuId(): string;
        static create(options: ColumnOptions): ColumnsView;
        static getInstance(instanceId: string): ColumnsView;
        getTiles(): Promise<Tiles.Tile[]>;
        getSelectedTile(): Tiles.Tile;
        initialize(): Promise<void>;
        updateData(): Promise<void>;
        setSize(): void;
        renderNotSupportedView(): void;
        updateReportHeader(): void;
        loadSortingOptions(forceCreate?: boolean): void;
        doGrouping(tileType: string): void;
        updateView(): void;
        attachEvents(): void;
        render(): void;
        renderTileMarkup(tileData: Tiles.TileData[]): void;
        makeDraggable(): void;
        getColumnTitle(item: JQuery): string;
        initializeTooltip(): void;
        private createEllipsisTooltip;
        showActionsDescription(entityId: string, entityTypeName: string, $icon: JQuery): void;
        attatchDefaultAction(): void;
        doSorting(sortBy: string): void;
        doSortingAndUpdateView(sortBy: string): void;
        filterData(text: string): Promise<void>;
        getFilteredData(): Tiles.TileData[];
    }
}
