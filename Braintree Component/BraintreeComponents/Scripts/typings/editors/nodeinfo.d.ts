/// <reference path="../typings/jquery/jquery.d.ts" />
declare namespace $DP.UI.Controls {
    interface NodeInfo {
        editorName: string;
        nodeElement: JQuery;
        editingContextId: string;
        value: DataPair;
        node: any;
        editorConfigurationValues?: DataPair[];
    }
}
