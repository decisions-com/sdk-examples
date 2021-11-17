/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class SideBar {
        private sideBarId;
        protected sideBarElement: JQuery;
        private buttonElement;
        protected sideBarContent: JQuery;
        constructor(sideBarId: string);
        get SideBarElement(): JQuery;
        attachHandlers(): void;
        resize(height: number): void;
    }
    class SideBarPropertyEditor extends SideBar {
        private editingContextId?;
        private sessionId?;
        constructor(sideBarId: string, editingContextId?: string, sessionId?: string);
        get PropertyGridElement(): JQuery;
        get EditingContextId(): string;
        resize(height: number): void;
        private contextEditor;
        reload(onReloaded: (contextId: any) => void): void;
    }
    class SideBarMessages extends SideBar {
        private messagesElement;
        constructor(sideBarId: string);
        get MessagesElement(): JQuery;
        resize(height: number): void;
    }
    class SideBarContainer {
        private sideBars;
        private containerElement;
        resizeCallback: (width: number) => void;
        constructor(instanceId: string, sideBars: SideBar[]);
        get SideBars(): SideBar[];
        resize(): void;
        initializeSplitter(instanceId: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
