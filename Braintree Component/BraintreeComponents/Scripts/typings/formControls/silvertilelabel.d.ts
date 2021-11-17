declare namespace $DP.Control {
    class SilverTileLabel extends $DP.Control.SilverTextBlock {
        options: Silverdark.Components.SilverTileLabelOptions;
        instanceId: string;
        entityId: string;
        entityTypeName: string;
        $label: JQuery;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverTileLabelOptions);
        static create(options: Silverdark.Components.SilverTileLabelOptions): SilverTileLabel;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        private getFlowResult;
        displayFlowResult(tileReturn: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturn): void;
        private generateLabel;
        onMouseUp(): void;
        buildActions(): Promise<void>;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
