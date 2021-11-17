/// <reference path="theme.panel.d.ts" />
declare namespace $DP.ThemeEditor {
    interface ThemeEditorPanelDialogOptions {
        width?: number | string;
        height?: number | string;
        onClosed?: () => void;
    }
    function showThemeEditorPanelDialog(editorPanel: ThemeEditorPanel, options: ThemeEditorPanelDialogOptions): JQuery;
}
