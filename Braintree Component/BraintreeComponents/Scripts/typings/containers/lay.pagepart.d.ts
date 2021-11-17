declare namespace $DP.Containers {
    class PagePartContainer extends BaseContainer {
        readonly options: ContainerOptions;
        constructor(options: ContainerOptions);
        protected layout(size: $DP.UI.Size): boolean;
        private calculateFullSizeCSSValue;
        private resize;
    }
}
