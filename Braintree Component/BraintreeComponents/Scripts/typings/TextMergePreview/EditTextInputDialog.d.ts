/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../designers/common/ContextEditor.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
declare namespace $DP.Designers.TextMerge {
    class EditTextInputDialog {
        Host: TextPreviewHost;
        $dialog: JQuery;
        private success;
        Context: $DP.Common.ContextEditor;
        constructor(Host: TextPreviewHost);
        get ContextId(): string;
        OnClose: (boolean: any) => void;
        Show(): EditTextInputDialog;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
