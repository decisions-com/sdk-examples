declare namespace $DP.Control {
    class CompositeDummyControl extends SilverTextBlock {
        options: Silverdark.Components.ContentBaseOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.ContentBaseOptions);
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
        getControl(): JQuery;
    }
}
