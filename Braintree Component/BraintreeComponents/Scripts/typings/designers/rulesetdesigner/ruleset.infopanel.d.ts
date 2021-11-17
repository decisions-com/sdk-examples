/// <reference path="../sidebar.panels.d.ts" />
declare namespace $DP.Designers.RuleSet {
    class RuleSetsInfoPanel implements $DP.Designers.SidebarPanel {
        private extensionFolderId;
        get header(): string;
        private container;
        private headerDisplay;
        constructor(extensionFolderId: string);
        update(): void;
        initialize(container: JQuery): void;
    }
}
