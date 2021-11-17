interface JQueryStatic {
    eventTrigger(typeOfCustomEvent: string, dataToBePassedToEvent: any);
    browser;
} 

interface HTMLAnchorElement {
    download: string;
}

interface MobileResizeHelperStatic {
    applyTextReportHeight();
}

interface DecisionsStatic {
    MobileResizeHelper: MobileResizeHelperStatic;
}
declare var Decisions: DecisionsStatic;
declare function unescape(name: string): string;
