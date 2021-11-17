declare namespace $DP.Components.Page {
    interface FolderTimelineGaugeOptions {
        instanceId: string;
        updateFromSelectionBus: boolean;
        selectionBusName: string;
        dataName: string;
        percentageValue: number;
        $elem: JQuery;
    }
    class FolderTimelineGaugePart {
        private options;
        static create(options: FolderTimelineGaugeOptions): FolderTimelineGaugePart;
        static get(host: JQuery): FolderTimelineGaugePart;
        private folderId;
        private canvas;
        private canvasContext;
        private $gaugePartText;
        constructor(options: FolderTimelineGaugeOptions);
        private listen;
        refresh(): void;
        private draw;
    }
}
