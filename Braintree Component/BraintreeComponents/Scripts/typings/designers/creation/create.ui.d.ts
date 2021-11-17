/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../common/ContextEditor.d.ts" />
/// <reference path="../../propertygrid/pg.validationEngine.d.ts" />
/// <reference path="../../entitypicker/epick.ui.d.ts" />
declare namespace $DP.Designers.Creation {
    import ElementType = $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
    class CreateElementRegistrationInfo {
        FolderId: string;
        ElementType: ElementType;
        PreselectedTemplateId?: string;
        BehaviorType?: string;
        SubElementType?: string;
        BaseName?: string;
        WasCreated?: boolean;
        constructor(FolderId: string, ElementType: ElementType, PreselectedTemplateId?: string, BehaviorType?: string, SubElementType?: string, BaseName?: string, WasCreated?: boolean);
        PreselectedSampleId: string;
        CreatedElementId: string;
        CreatedElementName: string;
        getPickInfo(): {
            elementType: ElementType;
            subElemenType: string;
            includeEmptySubElementType: boolean;
            behaviorType: string;
        };
    }
    class CreateElementRegistrationDialog {
        private info;
        private onCreated;
        private onCancelled?;
        private onFailed?;
        private viewId;
        private view;
        private editorElement;
        private contextEditor;
        private title;
        static createAndOpen(folderId: string, elementType: ElementType, onCancelled?: () => void, onFailed?: (error: string) => void): void;
        static show(info: CreateElementRegistrationInfo, onCreated: (info: CreateElementRegistrationInfo) => void, title?: string, onCancelled?: () => void, onFailed?: (error: string) => void): void;
        constructor(info: CreateElementRegistrationInfo, onCreated: (elementInfo: CreateElementRegistrationInfo) => void, onCancelled?: () => void, onFailed?: (error: string) => void, view?: JQuery);
        get Title(): string;
        set Title(value: string);
        show(): void;
        setup(): JQuery;
        private onOkClick;
        private checkValidation;
        invokeCreate(onCreateCallback?: () => void): Promise<void>;
        private createElementRegistration;
        private getContextId;
        private submitContextEditor;
    }
    class OpenElementRegistration {
        static openWithInfo(info: CreateElementRegistrationInfo): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
