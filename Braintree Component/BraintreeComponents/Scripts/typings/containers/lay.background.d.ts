declare namespace $DP.Containers {
    class BackgroundContainer extends BaseContainer {
        readonly options: ContainerOptions;
        static get className(): string;
        constructor(options: ContainerOptions);
        protected layout(size: $DP.UI.Size): void;
    }
}
