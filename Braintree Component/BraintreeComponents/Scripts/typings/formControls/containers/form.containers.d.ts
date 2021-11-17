/// <reference path="form.containercontrol.d.ts" />
/// <reference path="../form.componentbase.d.ts" />
/// <reference path="../../containers/lay.header.d.ts" />
declare namespace $DP.Control {
    interface LayoutProperties {
        style?: string;
        data?: string;
        canvas_child_info_left?: any;
        canvas_child_info_top?: any;
    }
    class SilverCanvas extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverCanvasOptions> {
        getAdditionalLayoutProperties(child: SilverCanvasChildInfo): LayoutProperties;
        initializeContainer(): void;
    }
    class SilverHorizontalStack extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverHorizontalStackOptions> {
        initializeContainer(): void;
    }
    class SilverVerticalStack extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverVerticalStackOptions> {
        initializeContainer(): void;
    }
    class ResponsiveVerticalStack extends FormContainerControl<Silverdark.Designers.Forms.Containers.ResponsiveVerticalStackOptions> {
        private responsiveVerticalStack;
        private surface;
        initializeContainer(): Promise<void>;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<JQuery>;
    }
    class SilverGrid extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverGridOptions> {
        initializeContainer(): void;
    }
    class SimpleGridLayout extends FormContainerControl<$DP.Containers.GridLayoutContainerOptions> {
        private surface;
        initializeContainer(): Promise<void>;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<JQuery>;
    }
    class GridLayout extends FormContainerControl<$DP.Containers.GridLayoutContainerOptions> {
        initializeContainer(): void;
    }
    class ResponsiveContainer extends FormContainerControl<$DP.Containers.ResponsiveContainerOptions> {
        initializeContainer(): void;
    }
    class SilverPartContainer extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverPartContainerOptions> {
        private container;
        initializeContainer(): void;
        handleVisiblityEvent(visiblityEvent: $D.Framework.Design.Form.VisibiltyEvent): void;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<JQuery>;
    }
    class SilverScrollBox extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverScrollBoxOptions> {
        initializeContainer(): void;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): Promise<JQuery>;
    }
    class SilverSplitPanelVertical extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverSplitPanelVerticalOptions> {
        initializeContainer(): void;
    }
    class SilverSplitPanelHorizontal extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverSplitPanelHorizontalOptions> {
        initializeContainer(): void;
    }
    class PagePartContainer extends FormContainerControl<$DP.Containers.ContainerOptions> {
        initializeContainer(): void;
    }
    class BackgroundContainer extends FormContainerControl<$DP.Containers.ContainerOptions> {
        initializeContainer(): void;
    }
    class SilverTabContainer extends FormContainerControl<Silverdark.Designers.Forms.Containers.SilverTabContainerOptions> implements $DP.FormHost.IDataConsumer {
        protected tabContainer: $DP.Containers.SilverTabContainer;
        initializeContainer(): void;
        handleVisiblityEvent(visiblityEvent: $D.Framework.Design.Form.VisibiltyEvent): void;
        handleEnabledEvent(enableEvent: $D.Framework.Design.Form.EnabledEvent): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        private hasTabId;
        private getTabId;
    }
    class SideMenuContainer extends SilverTabContainer {
        initializeContainer(): void;
    }
    class SilverCurvePanel extends SilverCanvas {
        initializeContainer(): void;
    }
    class SilverWizardPanel extends SilverCanvas {
        initializeContainer(): void;
    }
}
