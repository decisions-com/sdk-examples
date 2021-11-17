declare namespace $DP.Common {
    enum SplitOrientation {
        Horizontal = 0,
        Vertical = 1
    }
    interface SplitOptions {
        size?: $DP.UI.Size;
        orientation: SplitOrientation;
        className?: string;
        onSplitterMove?: (firstPanelSize: any) => void;
        getInitialFirstPanelSize?: (panelsSize: number) => number;
    }
    type PanelIndex = 1 | 2;
    class Split {
        private options;
        private root;
        private children;
        private splitter;
        private firstPanel;
        private secondPanel;
        private panelsSize;
        private initialFirstPanelSize;
        static get verticalClassName(): string;
        static get horizontalClassName(): string;
        static get resizedEvent(): string;
        private get className();
        private get cellClassName();
        private get splitterClassName();
        private get splitterIconClassName();
        constructor(options: SplitOptions);
        render(): JQuery;
        setSize(size: $DP.UI.Size): void;
        private setPanelsSize;
        getPanelSize(index: PanelIndex): number;
        private makeSplitter;
        getPanelByIndex(index: PanelIndex): JQuery;
        getView(): JQuery;
        addChild(el: JQuery, panelIndex: PanelIndex): void;
        getChildren(): JQuery;
        getSnaptoRectangle(point: $DP.Common.Point): Rectangle;
        getPanelByCoordinates(coordinates: JQueryCoordinates): JQuery;
        getPanelIndex(coordinates: JQueryCoordinates): PanelIndex;
    }
}
