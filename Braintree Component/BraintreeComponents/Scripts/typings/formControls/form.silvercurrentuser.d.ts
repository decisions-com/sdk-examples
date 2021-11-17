declare namespace $DP.Control {
    class SilverCurrentUser extends ContentBase {
        options: Silverdark.Components.SilverCurrentUserOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCurrentUserOptions);
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
