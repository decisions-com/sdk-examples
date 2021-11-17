declare namespace $DP.Control {
    enum HtmlDisplayModeInMVC {
        Dialog = 0,
        Inline = 1,
        InlineEmbed = 2
    }
    class SilverHtmlDisplay extends FormComponentBase implements $DP.Form.ISilverFormDataConsumer, $DP.Containers.LayoutAware {
        options: Silverdark.Components.SilverHtmlDisplayOptions;
        readonly popupOptions: string;
        $linkButton: JQuery;
        lastUrl: string;
        controlInitialized: boolean;
        value: string;
        isIframeLoaded: boolean;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverHtmlDisplayOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        onMoved(): void;
        initializeControl(): void;
        private getUrl;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
