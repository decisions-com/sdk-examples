declare namespace $DP.Control {
    class SilverHyperLinkButtonOpenURL extends OpenUrlControlBase {
        options: Silverdark.Components.OpenURLComponents.SilverHyperLinkButtonOpenURLOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.OpenURLComponents.SilverHyperLinkButtonOpenURLOptions);
        getButton(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
        lastTextValue: string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
}
