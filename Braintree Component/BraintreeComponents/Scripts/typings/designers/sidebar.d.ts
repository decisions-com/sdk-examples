/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.Designers {
    class Sidebar {
        static RESIZED_EVENT: string;
        private options;
        constructor(options: SidebarOptions);
        private getPanelContainer;
        private getPanelToggler;
        private getSplitter;
        addPanel(panel: SidebarPanel, activate?: boolean): void;
        resize(): void;
        private handlePanelClick;
    }
    class SidebarPanelInfo {
        panel: SidebarPanel;
        private uiContainer;
        constructor(panel: SidebarPanel);
        getUIContainer(container: JQuery, callback: (ui: JQuery) => void): void;
        setupUIContainer(container: JQuery): void;
        hide(): void;
        show(): void;
        get container(): JQuery;
        resize(width: number, height: number): void;
    }
    enum SidebarGroup {
        Primary = 0,
        Secondary = 1
    }
    interface SidebarOptions {
        root: JQuery;
        panelContainer?: string | JQuery;
        togglerContainer?: string | JQuery;
        splitter?: string | JQuery;
        orientation?: SidebarOrientation;
        collapsable?: boolean;
        showHelpCenter?: boolean;
    }
    enum SidebarOrientation {
        Right = 0,
        Left = 1
    }
    interface SidebarPanel {
        group?: SidebarGroup;
        header: string;
        initialize(container: JQuery): any;
        resize?(width: number, height: number): any;
        onCollapsed?(): any;
        onExpanded?(): any;
    }
    interface FileUploadResponseJSON {
        chunk: number;
        result: string;
        fileName: string;
        success: boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
