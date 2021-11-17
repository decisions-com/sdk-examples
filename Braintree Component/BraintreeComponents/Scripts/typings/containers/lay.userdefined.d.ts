declare namespace $DP.Containers {
    interface UserDefinedContainerOptions extends ContainerOptions {
    }
    class UserDefinedContainer extends BaseContainer {
        readonly options: UserDefinedContainerOptions;
        constructor(options: UserDefinedContainerOptions);
        protected layout(size: $DP.UI.Size): void;
    }
}
