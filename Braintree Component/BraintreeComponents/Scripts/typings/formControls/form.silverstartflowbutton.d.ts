declare namespace $DP.Control {
    class SilverStartFlowButton extends BaseStartFlowButton {
        options: Silverdark.Components.SilverStartFlowButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverStartFlowButtonOptions);
        renderhtml(): JQuery;
    }
    class SilverStartFlowHyperLinkButton extends BaseStartFlowButton {
        options: Silverdark.Components.SilverStartFlowHyperLinkButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverStartFlowHyperLinkButtonOptions);
        renderhtml(): JQuery;
    }
    class SilverStartFlowImageButton extends BaseStartFlowButton {
        options: Silverdark.Components.SilverStartFlowImageButtonOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverStartFlowImageButtonOptions);
        renderhtml(): JQuery;
    }
}
