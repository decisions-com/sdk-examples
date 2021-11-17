declare namespace $DP.Control {
    class CurrentLogoSilverImage extends ContentBase {
        options: Silverdark.Components.CurrentLogoSilverImageOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.CurrentLogoSilverImageOptions);
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
