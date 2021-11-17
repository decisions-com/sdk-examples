declare namespace $DP.Containers {
    interface DataRepeaterContainerOptions extends ContainerOptions {
        lineIndicatorWidth?: number;
    }
    class DataRepeater extends BaseContainer {
        readonly options: DataRepeaterContainerOptions;
        constructor(options: DataRepeaterContainerOptions);
        protected render(): JQuery;
        protected layout(size: $DP.UI.Size): void;
    }
}
