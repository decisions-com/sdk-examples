/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/textmergeeditservice.d.ts" />
/// <reference path="../common/spinner.d.ts" />
/// <reference path="../common/scriptloader.d.ts" />
/// <reference path="EditTextInputDialog.d.ts" />
declare namespace $DP.Designers.TextMerge {
    import TextMergePreviewOptions = $D.Framework.Design.Text.TextMergePreviewOptions;
    class TextPreviewHost {
        TextMergeId: string;
        PreviewOptions: TextMergePreviewOptions;
        $dialog: JQuery;
        $plainText: JQuery;
        $richText: JQuery;
        $exportPDFBtn: JQuery;
        $exportHTMLBtn: JQuery;
        $exportDOCBtn: JQuery;
        contextId: string;
        constructor(TextMergeId: string);
        Initialize(): JQueryPromise<any>;
        private OnGatherInputs;
        Close(): void;
        private ShowText;
        private GatherInput;
        private LoadView;
        private getTextPreviewHostElem;
        private getTextPreviewPresenterElem;
        IniitalizeDialog(size: $DP.UI.Size, title: string, buttons: ButtonOptions[], onClose?: (e: any, i: any) => void): JQuery;
        private Export;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
