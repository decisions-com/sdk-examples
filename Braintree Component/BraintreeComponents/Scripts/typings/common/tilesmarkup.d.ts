declare namespace $DP.Common {
    import Tiles = $D.Framework.Design.Report.Tiles;
    class TilesMarkup {
        private $host;
        private addEditButton?;
        private addThumbnail?;
        constructor($host: JQuery, addEditButton?: boolean, addThumbnail?: boolean);
        protected attachThumbnailEvents(): void;
        renderTilesMarkup(tileDatas: Tiles.TileData[]): void;
        getTileMarkup(tileData: Tiles.TileData): string;
        protected getTileRowMarkup(row: Tiles.TileRow): string;
        protected getThimbnailExpandButton(): string;
        protected getThumbnail(componentRegistrationId: string): Promise<void>;
        protected getButtons(EntityID: string, EntityTypeName: string): string;
        protected getImageView(row: Tiles.TileRow): string;
        protected getIconView(url: string): string;
    }
}
