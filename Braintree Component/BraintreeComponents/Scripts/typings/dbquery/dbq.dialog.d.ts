/// <reference path="dbq.panel.d.ts" />
declare namespace $DP.DBQuery {
    interface DBQueryPanelDialogOptions {
        title?: string;
        width?: number | string;
        height?: number | string;
        onClosed?: () => void;
    }
    function showDBQueryPanelDialog(editorPanel: DBQueryEditorPanel, options: DBQueryPanelDialogOptions): JQuery;
}
