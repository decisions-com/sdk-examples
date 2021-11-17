declare namespace $DP.Control {
    class SilverTextBlock extends ContentBase {
        options: Silverdark.Components.SilverTextBlockOptions;
        constructor(layout: JQuery, options: Silverdark.Components.SilverTextBlockOptions);
        getControl(): JQuery;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
    }
}
