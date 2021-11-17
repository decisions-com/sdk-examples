/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/ConfigurationStorageService.d.ts" />
/// <reference path="../../typings/site/site.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../TextMergePreview/TextPreviewHost.d.ts" />
declare module $DP.Designers.TextMerge {
    import DesignerHeaderDisplayData = $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
    class TextMergeDesigner {
        textMergeId: string;
        textMergeSessionId: string;
        instanceId: string;
        designerHeaderDisplayData: DesignerHeaderDisplayData;
        private $MergeEditorElement;
        private $SideBarPropertyEditor;
        private $host;
        private $headerHolder;
        private $sideBarButton;
        private $sideBarItemList;
        private $sideBarBoxPanel;
        mergeEditor: $DP.Controls.RichText.MergeEditor;
        private headerProps;
        isDirty: boolean;
        constructor(textMergeId: string, textMergeSessionId: string, instanceId: string, designerHeaderDisplayData: DesignerHeaderDisplayData);
        initialize(): JQueryPromise<any>;
        initializeSplitter(): void;
        attachEvents(): void;
        private buildHeaderProps;
        private initializeTopBar;
        private refreshHeader;
        private preview;
        private close;
        private save;
        static create(instanceId: any, textmergeId: any, textMergeSessionId: any, designerHeaderDisplayData: DesignerHeaderDisplayData): TextMergeDesigner;
        private doSave;
        private doClose;
        private doPreview;
    }
    class BaseTextMergeSideBarPropertyEditor {
        $ContextHolder: any;
        context: $DP.Common.ContextEditor;
        constructor($ContextHolder: any);
        initialize(): void;
        getContextId(cb: (contextId: string) => void): void;
        initializeContext(): void;
    }
    class TextMergeSideBarPropertyEditor extends BaseTextMergeSideBarPropertyEditor {
        textMergeSessionId: any;
        constructor(textMergeSessionId: any, $ContextHolder: any);
        getContextId(cb: any): void;
    }
    class FieldExtentionSideBarPropertyEditor extends BaseTextMergeSideBarPropertyEditor {
        textMergeSessionId: any;
        fieldExtentionId: any;
        constructor(textMergeSessionId: any, fieldExtentionId: any, $ContextHolder: any);
        getContextId(cb: any): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
