declare namespace $DP.Containers {
    interface FlowOnPageContainerOptions extends ContainerOptions {
    }
    /**
     *  initialized for:
            - Silverdark.Designers.Flows.Executioner.FlowRunSilverPart
            - DecisionsFramework.Design.Form.ComponentData.FormTilePart
            - Silverdark.Components.Page.PageViewerPart
     * */
    class FlowOnPageContainer extends BaseContainer {
        readonly options: FlowOnPageContainerOptions;
        constructor(options: FlowOnPageContainerOptions);
        protected layout(size: $DP.UI.Size): void;
    }
}
