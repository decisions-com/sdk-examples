declare namespace $DP.Control {
    class SilverRichLabel extends SilverRichTextDisplay {
        options: Silverdark.Components.SilverRichLabelOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverRichLabelOptions);
        renderhtml(): JQuery;
    }
}
