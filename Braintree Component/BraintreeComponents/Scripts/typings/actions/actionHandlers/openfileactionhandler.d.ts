declare namespace $DP.ActionHandlers {
    import Size = $DP.UI.Size;
    class OpenFileActionHanlder {
        private action;
        private host;
        constructor(action: $D.Framework.ServiceLayer.Actions.Common.OpenFileAction);
        show(): void;
        resize(iFrame: JQuery): void;
        getSize(iFrame: JQuery): Size;
    }
}
