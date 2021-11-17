declare namespace $DP.Common {
    interface FlexTileOptions {
        title: string;
        subtitle?: string;
        className?: string;
        iconClassName?: string;
        footer: string | JQuery;
    }
    class FlexTile {
        private options;
        constructor(options: FlexTileOptions);
        static get className(): string;
        render(): JQuery;
        private getFooter;
        private getTitle;
        private getSubtitleHtml;
        static renderFlexTilesRow(tiles: FlexTile[], className?: string): JQuery;
        static renderExceptions(errors: $D.Framework.ValidationIssue[]): JQuery;
    }
}
