declare namespace $DP.Control {
    abstract class FormContainerControl<TOptions extends $DP.Containers.ContainerOptions> extends FormComponentBase {
        options: TOptions;
        constructor(controlLayout: JQuery, options: TOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): Promise<void>;
        get disableHolderElem(): any;
        initializeContainer(): void | Promise<void>;
        onEnablityChange(isEnable: boolean): void;
        getControl(): JQuery;
        loadComplete(): void;
        getAdditionalLayoutProperties(child: SilverContainerChildInfo): any;
        renderLayout(layoutProperties?: any): JQuery;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<JQuery>;
        updateOptions(layoutProperties?: any): void;
    }
    class SilverContainerChildInfo {
    }
    class SilverCanvasChildInfo extends SilverContainerChildInfo {
        left: number;
        top: number;
    }
}
