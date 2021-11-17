declare namespace $DP.Control {
    class SilverImageButtonOpenURL extends OpenUrlControlBase {
        options: Silverdark.Components.OpenURLComponents.SilverImageButtonOpenURLOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.OpenURLComponents.SilverImageButtonOpenURLOptions);
        getButton(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
