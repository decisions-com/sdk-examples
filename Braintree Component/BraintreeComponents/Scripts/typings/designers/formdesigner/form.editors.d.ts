/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../common/objecteditor.d.ts" />
declare namespace $DP.Designers.Forms.Editors {
    class SelectComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class DeleteComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class CopyComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class CutComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class PasteComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class QuickAddComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class DuplicateLastRowEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class DuplicateLastColumnEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class InsertRowUpEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class InsertRowBottomEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class InsertColumnLeftEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class InsertColumnRightEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class ConvertToGridLayoutEditor extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class QuickReplaceComponent extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class PickFormSource extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class EditFormSource extends $DP.Common.BaseObjectEditor {
        private editorInfo;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
