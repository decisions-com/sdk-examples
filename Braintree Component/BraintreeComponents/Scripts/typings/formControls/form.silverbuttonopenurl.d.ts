declare namespace $DP.Control {
    class SilverButtonOpenURL extends OpenUrlControlBase {
        options: Silverdark.Components.OpenURLComponents.SilverButtonOpenURLOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.OpenURLComponents.SilverButtonOpenURLOptions);
        getButton(): JQuery;
        getControl(): JQuery;
        renderhtml(): JQuery;
        lastTextValue: string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
    }
}
