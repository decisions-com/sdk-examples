declare namespace $DP.Portal {
    enum ChromeSetting {
        Off = 0,
        Small = 1,
        TopBarOnly = 2,
        TopBarFolderTreeCollapsed = 3,
        NoTopBarHasFolderTree = 4,
        NoTopBarFolderTreeCollapsed = 5
    }
    type LeftPanelState = "collapsed" | "expanded" | "hidden";
    type HeaderState = "small" | "full" | "hidden";
    function isActionsBarVisible(chrome?: ChromeSetting): boolean;
    function getLeftPanelState(chrome?: ChromeSetting): LeftPanelState;
    function isNavigationVisible(chrome?: ChromeSetting): boolean;
    function getTopBarState(chrome?: ChromeSetting): HeaderState;
}
