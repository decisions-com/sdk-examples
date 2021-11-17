
declare var HelpSystemHelper: HelpSystemStatic;

interface HelpSystemStatic {
    EnsureHelpMessageKeyExists(key: string);
    AttachHelpTextEvent(selector: string | JQuery, helpKey?: string);
}