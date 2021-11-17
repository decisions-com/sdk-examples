declare namespace $DP.Containers {
    class PageRootContainer extends BaseContainer {
        readonly options: ContainerOptions;
        constructor(options: ContainerOptions);
        static doLayout(): void;
        private static getRoot;
        private static isCentered;
        private static calcPageContentSize;
        protected layout(size: $DP.UI.Size): void;
    }
}
