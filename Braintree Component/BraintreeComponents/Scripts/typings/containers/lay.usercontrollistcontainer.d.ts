declare namespace $DP.Containers {
    class UserControlListContainerContainer extends BaseContainer {
        private containerChildren;
        constructor(options: ContainerOptions);
        protected layout(size: $DP.UI.Size): void;
        setChildrensSize(size: number, cellSizes: number[]): void;
        private getLayouts;
    }
}
