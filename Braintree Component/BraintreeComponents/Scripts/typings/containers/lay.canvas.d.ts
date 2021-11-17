declare namespace $DP.Containers {
    interface CanvasOptions extends ContainerOptions {
    }
    class SilverCanvas extends BaseContainer {
        readonly options: CanvasOptions;
        static get className(): string;
        constructor(options: CanvasOptions);
        protected render(): JQuery;
        takeChild(el: JQuery): void;
        layout(size: $DP.UI.Size): void;
        private getElementPositionOnCanvas;
        fillComponentInfo(componentInfo: any, child: JQuery): void;
        protected showDeprecatedMessage(): void;
    }
    class Canvas {
        static get className(): string;
        constructor();
        render(): JQuery;
    }
    class SilverCurvePanel extends SilverCanvas {
        readonly options: CanvasOptions;
        constructor(options: CanvasOptions);
    }
    class SilverWizardPanel extends SilverCanvas {
        readonly options: CanvasOptions;
        constructor(options: CanvasOptions);
    }
}
