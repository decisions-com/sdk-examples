/// <reference path="datatypes._base.d.ts" />
declare module Silverdark.Designers.Common {
    interface ViewFlowButtonPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Designers.Flows.Executioner {
    interface FlowRunSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface SilverFlowRunContainerOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface SilverSubDataFlowButtonOptions extends Silverdark.Designers.Flows.Executioner.SubDataFlowControlBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SubDataFlowControlBaseOptions extends Silverdark.Components.ContentBaseOptions {
        useLegacy?: boolean;
        text?: string;
        textFromDataName?: boolean;
        textDataName?: string;
        cssClass?: string;
        setFocusOnPreviousControl?: boolean;
        runatStartup?: boolean;
        inputDataNames?: string[];
        outcomeDataNames?: string[];
    }
    interface SilverSubDataFlowImageOptions extends Silverdark.Designers.Flows.Executioner.SubDataFlowControlBaseOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        text?: string;
        textFromDataName?: boolean;
    }
    interface SilverSubDataFlowLinkOptions extends Silverdark.Designers.Flows.Executioner.SubDataFlowControlBaseOptions {
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
    }
}
declare module Silverdark.Designers.Forms.Containers {
    interface BaseTabContainerOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        defaultTab?: string;
        designTimeSelectedTabId?: string;
        headersPlacement?: Silverdark.Designers.Forms.Containers.TabHeadersPlacement;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        dataName?: string;
        tabButtonCssClass?: string;
        children?: any;
    }
    interface SilverVerticalStackOptions extends Silverdark.Designers.Forms.Containers.SilverStackBaseOptions {
        fillMode?: Silverdark.Designers.Forms.Containers.SilverStackFillMode;
        constrainChildren?: boolean;
    }
    interface ResponsiveVerticalStackOptions extends Silverdark.Designers.Forms.Containers.SilverStackBaseOptions {
        fillMode?: Silverdark.Designers.Forms.Containers.SilverStackFillMode;
        constrainChildren?: boolean;
    }
    interface SilverHorizontalStackOptions extends Silverdark.Designers.Forms.Containers.SilverStackBaseOptions {
    }
    interface SilverTabContainerOptions extends Silverdark.Designers.Forms.Containers.BaseTabContainerOptions {
        pages?: Silverdark.Designers.Forms.Containers.TabPageInformation[];
        tabPanelCssClass?: string;
    }
    interface SideMenuContainerOptions extends Silverdark.Designers.Forms.Containers.BaseTabContainerOptions {
        pages?: Silverdark.Designers.Forms.Containers.SideMenuPageInformation[];
        tabButtonCssClass?: string;
        dataName?: string;
    }
    interface SilverSplitPanelBaseOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        children?: any;
        initialPercent?: number;
        rememberPercent?: boolean;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
    }
    interface SilverSplitPanelVerticalOptions extends Silverdark.Designers.Forms.Containers.SilverSplitPanelBaseOptions {
    }
    interface SilverSplitPanelHorizontalOptions extends Silverdark.Designers.Forms.Containers.SilverSplitPanelBaseOptions {
    }
    interface SilverScrollBoxOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        child?: Silverdark.Designers.Forms.Containers.SilverScrollBoxChildInfo;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
    }
    interface GridLayoutOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        columns?: Silverdark.Designers.Forms.Containers.GridLayoutColumn[];
        rows?: Silverdark.Designers.Forms.Containers.GridLayoutRow[];
        marginLeft?: number;
        marginRight?: number;
        marginTop?: number;
        marginBottom?: number;
        rowGap?: number;
        columnGap?: number;
    }
    interface SilverGridOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        gridClientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverGridChildInfo[];
        columns?: Silverdark.Designers.Forms.Containers.SilverGridColumn[];
        rows?: Silverdark.Designers.Forms.Containers.SilverGridRow[];
        innerMargin?: number;
        outerMargin?: number;
    }
    interface ResponsiveContainerOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        sectionsMargin?: number;
    }
    interface SilverCanvasOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        canvasClientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverCanvasChildInfo[];
    }
    interface SilverContainerBaseOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        requestedMinHeight?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        requestedMaxWidth?: number;
        backgroundType?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundType;
        transparentBackground?: boolean;
        backgroundImage?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        backgroundAlignmentX?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentX;
        backgroundAlignmentY?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentY;
        backgroundStretch?: boolean;
        backgroundDesignerColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        borderDesignerColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        designerCornerRadius?: number;
        borderWidth?: number;
        cssClass?: string;
    }
    interface SilverCurvePanelOptions extends Silverdark.Designers.Forms.Containers.SilverCanvasOptions {
        designerCornerRadius?: number;
        borderWidth?: number;
        borderDesignerColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverPartContainerOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
        child?: Silverdark.Designers.Forms.Containers.SilverPartContainerChildInfo;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        isSilverPartCollapsable?: boolean;
        headerBackgroundType?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundType;
        headerTransparentBackground?: boolean;
        headerBackgroundImage?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        headerBackgroundAlignmentX?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentX;
        headerBackgroundAlignmentY?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentY;
        headerBackgroundStretch?: boolean;
        headerBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        headerBorderType?: Silverdark.Designers.Forms.Containers.HeaderContainerBorder;
        headerBorderWidth?: number;
        headerBorderColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        headerLabelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        headerHeight?: number;
        contentBackgroundType?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundType;
        contentTransparentBackground?: boolean;
        contentBackgroundImage?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        contentBackgroundAlignmentX?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentX;
        contentBackgroundAlignmentY?: Silverdark.Designers.Forms.Containers.SilverContainerBackgroundAlignmentY;
        contentBackgroundStretch?: boolean;
        contentBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        contentBorderWidth?: number;
        contentBorderColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
    }
    interface SilverWizardPanelOptions extends Silverdark.Designers.Forms.Containers.SilverCanvasOptions {
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        canvasClientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverCanvasChildInfo[];
    }
    interface SilverStackBaseOptions extends Silverdark.Designers.Forms.Containers.SilverContainerBaseOptions {
        fillMode?: Silverdark.Designers.Forms.Containers.SilverStackFillMode;
        children?: any;
        clientChildrenInfo?: Silverdark.Designers.Forms.Containers.SilverContainerChildInfo[];
        innerMargin?: number;
        outerMargin?: number;
    }
    interface PageTemplateContentOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface SilverContainerChildInfo {
        componentId?: string;
        child?: $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions;
    }
    enum TabHeadersPlacement {
        Top = 0,
        Left = 1
    }
    enum SilverStackFillMode {
        Scroll = 0,
        ExpandChildrenThenScroll = 1,
        FitChildren = 2
    }
    interface TabPageInformation {
        pageId?: string;
        header?: string;
    }
    interface SideMenuPageInformation extends Silverdark.Designers.Forms.Containers.TabPageInformation {
        icon?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    interface SilverScrollBoxChildInfo extends Silverdark.Designers.Forms.Containers.SilverContainerChildInfo {
    }
    interface GridLayoutColumn extends Silverdark.Designers.Forms.Containers.SilverGridLayoutEntity {
    }
    interface GridLayoutRow extends Silverdark.Designers.Forms.Containers.SilverGridLayoutEntity {
    }
    interface SilverGridChildInfo extends Silverdark.Designers.Forms.Containers.GridChildInfo {
    }
    interface SilverGridColumn extends Silverdark.Designers.Forms.Containers.SilverGridLayoutEntity {
    }
    interface SilverGridRow extends Silverdark.Designers.Forms.Containers.SilverGridLayoutEntity {
    }
    interface SilverCanvasChildInfo extends Silverdark.Designers.Forms.Containers.SilverContainerChildInfo {
        left?: number;
        top?: number;
    }
    enum SilverContainerBackgroundType {
        Transparent = 0,
        Color = 1,
        Image = 2
    }
    enum SilverContainerBackgroundAlignmentX {
        Left = 0,
        Center = 1,
        Right = 2
    }
    enum SilverContainerBackgroundAlignmentY {
        Top = 0,
        Center = 1,
        Bottom = 2
    }
    interface SilverPartContainerChildInfo extends Silverdark.Designers.Forms.Containers.SilverContainerChildInfo {
    }
    enum HeaderContainerBorder {
        Full = 0,
        Bottom = 1,
        Off = 2
    }
    interface SilverGridLayoutEntity {
        minSize?: number;
        maxSize?: number;
        requestedSize?: number;
        layoutType?: Silverdark.Designers.Forms.Containers.Internals.LayoutElementType;
    }
    interface GridChildInfo extends Silverdark.Designers.Forms.Containers.SilverContainerChildInfo {
        column?: number;
        columnSpan?: number;
        row?: number;
        rowSpan?: number;
    }
}
declare module Silverdark.Components {
    interface AccountAndGroupListControlOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: $D.Framework.ServiceLayer.Services.Assignments.AccountAndGroupList;
        filterAccountGroupList?: Silverdark.Components.AccountGroupListFilter;
    }
    interface ApprovalChainEditorOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
    }
    interface BaseCopyTextButtonOptions extends Silverdark.Components.ContentBaseOptions {
        cssClass?: string;
        sourceComponentId?: string;
    }
    interface BaseFileDownloadControlOptions extends Silverdark.Components.ContentBaseOptions {
        fileOutputType?: Silverdark.Components.OutputType;
        fileReferenceOutputType?: Silverdark.Components.FileReferenceOutputType;
        buttonType?: Silverdark.Components.FileDownloadButtonType;
        staticInput?: boolean;
    }
    interface BaseStartFlowButtonOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
        runInSameWindow?: boolean;
        closeExistingWindow?: boolean;
        cssClass?: string;
    }
    interface ColorPickerControlOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        showPickIcon?: boolean;
        showRightButtons?: boolean;
        showTextbox?: boolean;
    }
    interface DataRepeaterOptions extends Silverdark.Components.UserDefinedControlBaseOptions {
        formId?: string;
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
        selectedItemDataName?: string;
        selectedItemLineNumberDataName?: string;
        autoAddNewRow?: boolean;
        showSeparator?: boolean;
        componentIdToInsertNewRowOnTabOut?: string;
        addButtonComponentId?: string;
        removeButtonComponentId?: string;
        columns?: number;
        selectionIndicatorType?: Silverdark.Components.SelectionIndicatorType;
        defaultLineIndicatorWidth?: number;
        numberLineIndicatorWidth?: number;
        defaultBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        selectionBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        attributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        moveUpShortcutKey?: $D.Framework.Design.ShortcutInfo;
        moveDownShortcutKey?: $D.Framework.Design.ShortcutInfo;
        outcomeDataNames?: string[];
        lineIndicatorWidth?: number;
        surfaceFormValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.FormValidationSetting;
    }
    interface DataRepeaterAddButtonOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        text?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface DataRepeaterRemoveButtonOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        text?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface UserControlListContainerOptions extends Silverdark.Components.UserDefinedControlBaseOptions {
        isReadOnly?: boolean;
        childSurfaces?: $D.Framework.Design.Form.ComponentData.CompositeControls.UserControlListContainerChildInfo[];
    }
    interface UserDefinedOptions extends Silverdark.Components.UserDefinedControlBaseOptions {
        formId?: string;
        childInfo?: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfo;
    }
    interface UserDefinedControlBaseOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        isReadOnly?: boolean;
        designTimeContentRoot?: $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions;
        ruleInfo?: $D.Silverlight.UI.Forms.IBaseRuleInfo[];
        surfaceKeyTriggers?: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        customRules?: $D.Silverlight.UI.Forms.FormCustomRule[];
        dataName?: string;
        allDataNames?: string[];
        ruleInfoJson?: string;
    }
    interface ContentBaseOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        dataName?: string;
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
        allDataNames?: string[];
    }
    interface ContentButtonBaseOptions extends Silverdark.Components.ContentBaseOptions {
        text?: string;
        componentName?: string;
        outcomePathName?: string;
        syncTextAndPath?: boolean;
    }
    interface CopyTextButtonOptions extends Silverdark.Components.BaseCopyTextButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface CopyTextImageButtonOptions extends Silverdark.Components.BaseCopyTextButtonOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
    }
    interface CopyTextLinkOptions extends Silverdark.Components.CopyTextButtonOptions {
        text?: string;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        overrideBackgroundColor?: boolean;
    }
    interface CurrentLogoSilverImageOptions extends Silverdark.Components.ContentBaseOptions {
        cssClass?: string;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface DataContentBaseOptions extends Silverdark.Components.ContentBaseOptions {
        staticInput?: boolean;
        dataName?: string;
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
        requiredOnOutputs?: string[];
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        serverDataKeys?: string[];
        outcomeDataNames?: string[];
        syncableDataNames?: string[];
    }
    interface EventImageButtonOptions extends Silverdark.Components.ContentBaseOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        cssClass?: string;
    }
    interface ListBaseOptions extends Silverdark.Components.ContentBaseOptions {
        staticListItems?: boolean;
        dataName?: string;
        selectedItemDataName?: string;
        requiredOnOutputs?: string[];
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        cssClass?: string;
        serverDataKeys?: string[];
        outcomeDataNames?: string[];
        selectedItemDataNameKey?: string;
        selectedExternalItemDataNameKey?: string;
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
        syncableDataNames?: string[];
    }
    interface ListDataContentBaseOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        dataName?: string;
    }
    interface ListSingleOutputDataContentBaseOptions extends Silverdark.Components.ListDataContentBaseOptions {
    }
    interface CompactMergeEditorOptions extends Silverdark.Components.MergeEditorOptions {
    }
    interface MergeEditorOptions extends Silverdark.Components.DataContentBaseOptions {
        selectedCategories?: string[];
        outputMergedText?: boolean;
        respectTabbing?: boolean;
        staticInput?: boolean;
        defaultValue?: string;
        borderWidth?: number;
        borderColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
        mergeVariablesSource?: Silverdark.Components.MergeDataDescriptionsSourceEnum;
    }
    interface BasePreviousButtonOptions extends Silverdark.Components.ContentBaseOptions {
    }
    interface BaseLoopBackButtonOptions extends Silverdark.Components.ContentBaseOptions {
        possibleOutcomeNames?: string[];
    }
    interface SilverPreviousButtonOptions extends Silverdark.Components.BasePreviousButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
    }
    interface SilverImagePreviousButtonOptions extends Silverdark.Components.BasePreviousButtonOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        cssClass?: string;
    }
    interface SilverHyperLinkPreviousButtonOptions extends Silverdark.Components.BasePreviousButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        cssClass?: string;
    }
    interface SilverLoopBackButtonOptions extends Silverdark.Components.BaseLoopBackButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
    }
    interface SignaturePadOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: $D.Framework.ServiceLayer.Services.Image.SignaturePadInfo;
        staticInput?: boolean;
        keyTriggers?: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
        showClearBtn?: boolean;
        showUndoBtn?: boolean;
        backgroundType?: Silverdark.Components.SignaturePadBackgroundType;
        transparentBackground?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        borderWidth?: number;
        borderColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
    }
    interface SilverAdvancedDataGridOptions extends Silverdark.Components.ContentBaseOptions {
        outputDataName?: string;
        reportId?: string;
        gridMode?: Silverdark.Components.AdvancedDataGridMode;
        showActions?: boolean;
        folderId?: string;
        selectAll?: boolean;
        selectDefaultItems?: boolean;
        selectedItemDataName?: string;
        outputSelectedItemDataName?: string;
        addButtonName?: string;
        removeButtonName?: string;
        showPreviewProperty?: boolean;
        previewMode?: Silverdark.Controls.ReportDesigner.PreviewDisplayMode;
        autoSelectFirstRow?: boolean;
        outcomeDataNames?: string[];
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
    }
    interface IDynamicDataSourceProviderOptions {
    }
    interface SilverAdvancedMaskedTextBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        textType?: Silverdark.Components.TextType;
        overrideDisplayMask?: boolean;
        customDisplayMask?: string;
        staticInput?: boolean;
        defaultValue?: string;
        maximumNumber?: number;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        watermarkText?: string;
        cssClass?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverAutoCompleteBoxOptions extends Silverdark.Components.ListSingleOutputDataContentBaseOptions {
        defaultValue?: string[];
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        textBoxCssClass?: string;
        dropDownListCssClass?: string;
        waterMarkText?: string;
        selectedItemDataNameKey?: string;
        serverDataKeys?: string[];
    }
    interface SilverButtonOptions extends Silverdark.Components.ContentButtonBaseOptions {
        text?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        dataName?: string;
        dataNameRequired?: boolean;
        specifyVisibility?: boolean;
        visiblityDataName?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        cssClass?: string;
        needsConfirm?: boolean;
        confirmationMessage?: string;
        isConfirmMessageFromDataName?: boolean;
        confirmMessageDataName?: string;
        confirmDialogYesButtonText?: string;
        isYesButtonTextFromDataName?: boolean;
        yesButtonTextDataName?: string;
        confirmDialogNoButtonText?: string;
        isNoButtonTextFromDataName?: boolean;
        noButtonTextDataName?: string;
        displayText?: string;
        considerVisibility?: boolean;
        isButtonVisibleBasedOnDataName?: boolean;
    }
    interface SilverCalendarOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: Date;
        cssClass?: string;
        dayNamesMin?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        dayNames?: string[];
        overrideRequiredMessage?: boolean;
    }
    interface SilverCaptureImagePanelOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
    }
    interface SilverCheckBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        text?: string;
        isThreeState?: boolean;
        defaultValue?: boolean;
        cssClass?: string;
        overrideRequiredMessage?: boolean;
    }
    interface SilverCheckBoxListOptions extends Silverdark.Components.ListBaseOptions {
        transparentBackground?: boolean;
        noBorder?: boolean;
        borderThicknessValue?: number;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showToggleButtons?: boolean;
        showSearchBox?: boolean;
        isHorizontal?: boolean;
        containerCssClass?: string;
        itemTextCssClass?: string;
    }
    interface SilverCloseFormButtonOptions extends $D.Framework.Design.Form.ComponentData.BaseCloseButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverComboOptions extends Silverdark.Components.ListBaseOptions {
        staticListItems?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        isCaseSensitive?: boolean;
        controlCssClass?: string;
        textBoxCssClass?: string;
        buttonCssClass?: string;
        dropDownListCssClass?: string;
        cssClass?: string;
        watermarkText?: string;
        isUsingTypingTextInFlowInput?: boolean;
        dependentDataNames?: string[];
        allowExternalValuesToBeSelected?: boolean;
    }
    interface SilverCompactTagOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        controlCssClass?: string;
        textBoxCssClass?: string;
        buttonCssClass?: string;
        dropDownListCssClass?: string;
        outcomeDataNames?: string[];
    }
    interface SilverContactEditorOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
    }
    interface SilverControlValidationIssuesOptions extends Silverdark.Components.SilverTextBlockOptions {
        sourceControl?: string;
        sourceComponentId?: string;
        text?: string;
        cssClass?: string;
    }
    interface SilverCSVEditorOptions extends Silverdark.Components.DataContentBaseOptions {
        readOnly?: boolean;
        columnsExpected?: number;
        cssClass?: string;
        rowsPerPage?: number;
    }
    interface SilverCurrencyBoxOptions extends Silverdark.Components.SilverNumberBoxOptions {
        outputType?: Silverdark.Components.NumericBoxOutputType;
        currencySymbol?: string;
        numberAlignment?: Silverdark.Components.LabelAlignment;
        autoSelectOnFocus?: boolean;
    }
    interface SilverCurrentTimeOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        tabOrder?: number;
        cssClass?: string;
    }
    interface SilverCurrentUserOptions extends Silverdark.Components.ContentBaseOptions {
        userFontAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        tabOrder?: number;
        cssClass?: string;
    }
    interface SilverDatePickerOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: Date;
        autoSelectOnFocus?: boolean;
        turnOffAllSuggestions?: boolean;
        turnOffDatePicker?: boolean;
        textBoxCssClass?: string;
        buttonCssClass?: string;
        calendarCssClass?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        dayNamesMin?: string[];
        dayNames?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        displayText?: string;
        todayLinkText?: string;
        clearLinkText?: string;
        format?: string;
    }
    interface SilverDateTimePickerOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: Date;
        allowNull?: boolean;
        autoSelectOnFocus?: boolean;
        hideSeconds?: boolean;
        layerCssClass?: string;
        textBoxCssClass?: string;
        buttonCssClass?: string;
        calendarCssClass?: string;
        timePickerCssClass?: string;
        doneButtonCssClass?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        dayNamesMin?: string[];
        monthNames?: string[];
        monthNamesShort?: string[];
        hourLabelText?: string;
        minuteLabelText?: string;
        todayLinkText?: string;
        clearLinkText?: string;
        nowLinkText?: string;
        doneBtnText?: string;
        dayNames?: string[];
    }
    interface SilverDocumentViewerOptions extends Silverdark.Components.ContentBaseOptions {
        getFromDataName?: boolean;
        addAdditionalUrlParameters?: boolean;
        additionalUrlParameters?: string;
        defaultPageNumber?: number;
        urlParameterDataName?: string;
        dataName?: string;
        documentId?: string;
        documentViewerType?: Silverdark.Components.DocumentViewerInputType;
        noDocumentMessage?: string;
    }
    interface SilverDropDownButtonOptions extends Silverdark.Components.ContentBaseOptions {
        items?: string[];
        textAtTop?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        labelCssClass?: string;
        buttonCssClass?: string;
        dropDownListCssClass?: string;
    }
    interface SilverDynamicDataGridOptions extends Silverdark.Components.ContentBaseOptions {
        columns?: Silverdark.Components.GridColumn[];
        defaultGroupingFields?: string[];
        rowTextAlignment?: $D.Framework.Design.Report.TextAlignment;
        inputDataName?: string;
        selectDefaultItems?: boolean;
        selectAll?: boolean;
        selectedItemDataName?: string;
        gridMode?: Silverdark.Components.GridMode;
        autoSelectFirstRow?: boolean;
        showDeleteAction?: boolean;
        dataName?: string;
        showRowActions?: boolean;
        showPreview?: boolean;
        previewMode?: Silverdark.Controls.ReportDesigner.PreviewDisplayMode;
        entityIDField?: string;
        showActions?: boolean;
        showRowLink?: boolean;
        rowLink?: Silverdark.Components.RowLinkType;
        selectedItemDataNameKey?: string;
        linkText?: string;
        linkUrl?: string;
        addButtonName?: string;
        removeButtonName?: string;
        cssClass?: string;
        showPreviewProperty?: boolean;
        outcomeDataNames?: string[];
        colModel?: Silverdark.Components.GridColumnInfo[];
        colNames?: string[];
        cellLabelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        headerLabelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        editCellOnSingleClick?: boolean;
        syncableDataNames?: string[];
    }
    interface SilverDynamicDataGridAddButtonOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        text?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface IDataGridAddButtonOptions {
    }
    interface SilverDynamicDataGridRemoveButtonOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        text?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface IDataGridRemoveButtonOptions {
    }
    interface SilverEntityViewerOptions extends Silverdark.Components.ContentBaseOptions {
        staticEntityType?: boolean;
        staticEntityID?: boolean;
        entityTypeDataName?: string;
        entityIdDataName?: string;
        entityTypeName?: string;
        entityID?: string;
        cssClass?: string;
    }
    interface SilverEventButtonOptions extends Silverdark.Components.ContentBaseOptions {
        text?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        textFromDataName?: boolean;
        textDataName?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        cssClass?: string;
        translate?: boolean;
    }
    interface SilverEventHyperlinkOptions extends Silverdark.Components.ContentBaseOptions {
        text?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
        cssClass?: string;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        translate?: boolean;
    }
    interface SilverFileDownloadOptions extends Silverdark.Components.BaseFileDownloadControlOptions {
        text?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        dataName?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        cssClass?: string;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface SilverFileUploadOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
        fileLabel?: string;
        invalidExtensionMessage?: string;
        buttonType?: Silverdark.Components.FileUploadButtonType;
        useFullSize?: boolean;
        outputType?: Silverdark.Components.FileOutputType;
        specifyMaxFileSize?: boolean;
        maxFileSize?: number;
        specifyAllowedExtensions?: boolean;
        allowedExtensions?: string[];
        dragFileLabelText?: string;
        chooseFileLabelText?: string;
        uploadAreaFileLabel?: string;
        dialogOkBtnText?: string;
        dialogCancelBtnText?: string;
        dialogTitleText?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        labelCssClass?: string;
        fileNameCssClass?: string;
        buttonCssClass?: string;
        clipCssClass?: string;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        outcomeDataNames?: string[];
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
    }
    interface SilverFileUploadAreaOptions extends Silverdark.Components.SilverFileUploadOptions {
        buttonType?: Silverdark.Components.FileUploadButtonType;
        containerClass?: string;
        useFullSize?: boolean;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
    }
    interface SilverFormStepsOptions extends Silverdark.Components.ContentBaseOptions {
        currentStepDataName?: string;
        inputDataName?: string;
        staticListItems?: boolean;
        cssClass?: string;
    }
    interface SilverFormValidationIssuesOptions extends Silverdark.Components.SilverTextBlockOptions {
        issueType?: Silverdark.Components.ValidationIssueType;
        text?: string;
        cssClass?: string;
    }
    interface SilverHorizontalFolderTimelineOptions extends Silverdark.Components.ContentBaseOptions {
        stateSource?: Silverdark.Components.TimlineStateSource;
        staticInput?: boolean;
        folderId?: string;
        folderIdDataName?: string;
        states?: string[];
        statesDataName?: string;
        currentState?: string;
        currentStatesDataName?: string;
    }
    interface SilverHtmlDisplayOptions extends Silverdark.Components.ContentBaseOptions {
        mvcDisplayMode?: Silverdark.Components.HtmlDisplayModeInMVC;
        source?: Silverdark.Components.HtmlSourceEnum;
        cssClass?: string;
        linkName?: string;
        linkFontAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        popupHeight?: number;
        popupWidth?: number;
        isChrome?: boolean;
        urlDataName?: string;
        relativeToBaseURL?: boolean;
        dataName?: string;
    }
    interface SilverHyperlinkButtonOptions extends Silverdark.Components.ContentButtonBaseOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
        cssClass?: string;
        needsConfirm?: boolean;
        confirmationMessage?: string;
        isConfirmMessageFromDataName?: boolean;
        confirmMessageDataName?: string;
        confirmDialogYesButtonText?: string;
        isYesButtonTextFromDataName?: boolean;
        yesButtonTextDataName?: string;
        confirmDialogNoButtonText?: string;
        isNoButtonTextFromDataName?: boolean;
        noButtonTextDataName?: string;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface SilverHyperlinkCloseButtonOptions extends $D.Framework.Design.Form.ComponentData.BaseCloseButtonOptions {
        text?: string;
        useFormFont?: boolean;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        cssClass?: string;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface SilverImageOptions extends Silverdark.Components.ContentBaseOptions {
        tabOrder?: number;
        staticImage?: boolean;
        useImageInfo?: boolean;
        dataName?: string;
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        sizeToImage?: boolean;
        showNoIconWhenImageMissing?: boolean;
        cssClass?: string;
        keyTriggers?: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
    }
    interface SilverImageButtonOptions extends Silverdark.Components.ContentBaseOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        cssClass?: string;
        needsConfirm?: boolean;
        confirmationMessage?: string;
        isConfirmMessageFromDataName?: boolean;
        confirmMessageDataName?: string;
        confirmDialogYesButtonText?: string;
        isYesButtonTextFromDataName?: boolean;
        yesButtonTextDataName?: string;
        confirmDialogNoButtonText?: string;
        isNoButtonTextFromDataName?: boolean;
        noButtonTextDataName?: string;
        componentName?: string;
        outcomePathName?: string;
    }
    interface SilverImageCloseButtonOptions extends $D.Framework.Design.Form.ComponentData.BaseCloseButtonOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        altText?: string;
        cssClass?: string;
    }
    interface SilverImageGalleryOptions extends Silverdark.Components.ContentBaseOptions {
        imageGalleryType?: Silverdark.Components.ImageGalleryOutputType;
        previewInDialog?: boolean;
        dataName?: string;
        imageGalleryMode?: Silverdark.Components.GalleryMode;
        outcomeDataNames?: string[];
    }
    interface SilverImagePickerOptions extends Silverdark.Components.ContentBaseOptions {
        allowMultipleSelections?: boolean;
        selectedItemDataName?: string;
        dataName?: string;
        selectedItemDataKey?: string;
        outcomeDataNames?: string[];
        imageCssClass?: string;
        labelCssClass?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
    }
    interface SilverLabelOptions extends Silverdark.Components.SilverTextBlockOptions {
        dataNameRequired?: boolean;
        text?: string;
        displayText?: string;
        labelFor?: string;
        dataName?: string;
        textBehaviour?: Silverdark.Components.TextBehaviour;
        isCopyable?: boolean;
        validationSourceComponentId?: string;
        labelAsterisk?: Silverdark.Components.LabelAsterisk;
        asteriskPosition?: Silverdark.Components.AsteriskPosition;
        cssClass?: string;
        labelHolderCssClass?: string;
    }
    interface SilverLatitudeAndLongitudeOptions extends Silverdark.Components.ContentBaseOptions {
        latitudeAndLongitudeFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        isVisibleAtRuntime?: boolean;
        tabOrder?: number;
        outcomeDataNames?: string[];
        dataName?: string;
        cssClass?: string;
    }
    interface SilverLinkListOptions extends Silverdark.Components.ListBaseOptions {
        requiredOnOutputs?: string[];
        outcomePathName?: string;
        showLinks?: boolean;
        linkTitle?: string;
        richTextFormatting?: boolean;
        transparentBackground?: boolean;
        noBorder?: boolean;
        borderThicknessValue?: number;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        linkCssClass?: string;
        itemTextCssClass?: string;
    }
    interface SilverListOptions extends Silverdark.Components.ListBaseOptions {
        outputType?: Silverdark.Components.OutputSelectionType;
        isMultiSelect?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
    }
    interface SilverMaskedTextBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        defaultValue?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverMultiFileDownloadOptions extends Silverdark.Components.BaseFileDownloadControlOptions {
        text?: string;
        downloadZip?: boolean;
        zipName?: string;
        dataName?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        noFileToDownlodMessage?: string;
        downloadZipLinkText?: string;
        fileNameCssClass?: string;
        buttonCssClass?: string;
        linkCssClass?: string;
    }
    interface SilverMultiFileUploadOptions extends Silverdark.Components.ContentBaseOptions {
        maxFileSize?: number;
        specifyMaxFileSize?: boolean;
        multiOutputType?: Silverdark.Components.MultiFileOutputType;
        specifyAllowedExtensions?: boolean;
        allowedExtensions?: string[];
        dataName?: string;
        buttonType?: Silverdark.Components.MultiFileUploadButtonType;
        buttonHorizontalAlignment?: Silverdark.Components.UploadButtonHorizontalAlignment;
        buttonVerticalAlignment?: Silverdark.Components.UploadButtonVerticalAlignment;
        invalidExtensionMessage?: string;
        dragFileLabelText?: string;
        chooseFileLabelText?: string;
        uploadAreaFileLabel?: string;
        dialogOkBtnText?: string;
        dialogCancelBtnText?: string;
        dialogTitleText?: string;
        fileLabel?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        fileNameCssClass?: string;
        linkCssClass?: string;
        buttonCssClass?: string;
        clipCssClass?: string;
        progressBarCssClass?: string;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
    }
    interface SilverMultiFileUploadAreaOptions extends Silverdark.Components.SilverMultiFileUploadOptions {
        buttonType?: Silverdark.Components.MultiFileUploadButtonType;
        buttonHorizontalAlignment?: Silverdark.Components.UploadButtonHorizontalAlignment;
        buttonVerticalAlignment?: Silverdark.Components.UploadButtonVerticalAlignment;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        containerClass?: string;
    }
    interface SilverMultiSelectDropDownOptions extends Silverdark.Components.SilverComboOptions {
    }
    interface SilverNumberBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useMinMax?: boolean;
        minimum?: number;
        maximum?: number;
        initialValue?: number;
        increment?: number;
        isEditable?: boolean;
        doNotFormatWholeNumber?: boolean;
        allowNullValue?: boolean;
        dataName?: string;
        outputType?: Silverdark.Components.NumericBoxOutputType;
        formatOptions?: $D.Framework.Utilities.Data.NumberFormatOptions;
        decimalDigits?: number;
        useNumberGroupSeparator?: boolean;
        numberGroupSeparator?: string;
        autoSelectOnFocus?: boolean;
        autoPopulate?: boolean;
        staticInput?: boolean;
        defaultValue?: any;
        cssClass?: string;
        watermarkText?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
        numberOfDecimalDigits?: number;
        groupSeprator?: string;
        decimalSeprator?: string;
    }
    interface SilverNumberSpinnerOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        minimum?: number;
        maximum?: number;
        initialValue?: number;
        defaultValue?: number;
        increment?: number;
        decimalPlaces?: number;
        isEditable?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        textBoxCssClass?: string;
        upArrowCssClass?: string;
        downArrowCssClass?: string;
        overrideRequiredMessage?: boolean;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverPasswordBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        defaultValue?: string;
        minimumLength?: number;
        maximumLength?: number;
        cssClass?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverProgressOptions extends Silverdark.Components.ContentBaseOptions {
        min?: number;
        max?: number;
        dataName?: string;
        cssClass?: string;
    }
    interface SilverPropertyGridOptions extends Silverdark.Components.ContentBaseOptions {
        hideFormValidation?: boolean;
        dataName?: string;
        cssClass?: string;
    }
    interface SilverRadioButtonListOptions extends Silverdark.Components.ListBaseOptions {
        isBorderNeeded?: boolean;
        isHorizontal?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        noBorder?: boolean;
        borderThicknessValue?: number;
        containerCssClass?: string;
        itemTextCssClass?: string;
    }
    interface SilverRichLabelOptions extends Silverdark.Components.SilverRichTextDisplayOptions {
    }
    interface SilverRichTextBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: string;
        xmlText?: string;
        sendPlainTextToRules?: boolean;
        cssClass?: string;
        defaultFont?: string;
        defaultFontSize?: number;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverRichTextDisplayOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
        xmlText?: string;
        showScrollbars?: boolean;
        cssClass?: string;
    }
    interface SilverSliderOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        showScale?: boolean;
        min?: number;
        max?: number;
        defaultValue?: number;
        scaleType?: Silverdark.Components.SliderScaleType;
        scaleTexts?: string[];
        scaleTextsDataName?: string;
        defaultTextValue?: string;
        sliderCssClass?: string;
        sliderHandleCssClass?: string;
    }
    interface SilverSortableCheckBoxListOptions extends Silverdark.Components.ListBaseOptions {
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        transparentBackground?: boolean;
        noBorder?: boolean;
        borderThicknessValue?: number;
        showSearchBox?: boolean;
        containerCssClass?: string;
        itemTextCssClass?: string;
    }
    interface SilverStartFlowButtonOptions extends Silverdark.Components.BaseStartFlowButtonOptions {
        text?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverStartFlowHyperLinkButtonOptions extends Silverdark.Components.BaseStartFlowButtonOptions {
        text?: string;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface SilverStartFlowImageButtonOptions extends Silverdark.Components.BaseStartFlowButtonOptions {
        image?: number[];
        altText?: string;
    }
    interface SilverTextAreaOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: string;
        staticInput?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        watermarkText?: string;
        cssClass?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverTextBlockOptions extends Silverdark.Components.ContentBaseOptions {
        text?: string;
        attributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
        cssClass?: string;
    }
    interface SilverTextBoxOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        text?: string;
        maximumNumber?: number;
        autoSelectOnFocus?: boolean;
        cssClass?: string;
        watermarkText?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface SilverTileLabelOptions extends Silverdark.Components.SilverTextBlockOptions {
        flowId?: string;
        flowInputData?: Silverdark.Components.SilverLabelInputData[];
        cssClass?: string;
    }
    interface SilverTimelineOptions extends Silverdark.Components.ContentBaseOptions {
        steps?: string[];
        currentStep?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        itemCssClass?: string;
    }
    interface SilverTimePickerOptions extends Silverdark.Components.DataContentBaseOptions {
        defaultValue?: string;
        textBoxCssClass?: string;
        clockCssClass?: string;
        dropDownListCssClass?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideRequiredMessage?: boolean;
    }
    interface SilverTimerExitOptions extends Silverdark.Components.ContentBaseOptions {
        displayMode?: Silverdark.Components.AutoExitDisplayMode;
        time?: string;
        afterInActive?: boolean;
        outcomePathName?: string;
        needsConfirm?: boolean;
        confirmDialogCloseTime?: string;
        customizeConfirmationDialog?: boolean;
        confirmationMessage?: string;
        closeFormButtonText?: string;
        resetButtonText?: string;
        timerCssClass?: string;
        abortCheckboxHandleCssClass?: string;
    }
    interface SilverToggleButtonOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        trueText?: string;
        falseText?: string;
        noneText?: string;
        defaultValue?: boolean;
        isThreeState?: boolean;
        cssClass?: string;
        overrideRequiredMessage?: boolean;
    }
    interface SilverTreeEditorOptions extends Silverdark.Components.ListBaseOptions {
        staticListItems?: boolean;
        cssClass?: string;
    }
    interface SilverVideoOptions extends Silverdark.Components.ContentBaseOptions {
        videoURL?: string;
        cssClass?: string;
        isStatic?: boolean;
        videoSource?: Silverdark.Components.VideoType;
        dataName?: string;
        showControls?: boolean;
    }
    interface SilverWizardNextButtonOptions extends Silverdark.Components.ContentBaseOptions {
        nextCaption?: string;
        doneText?: string;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        outcomePathName?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverWizardPreviousButtonOptions extends Silverdark.Components.ContentBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        useFormFont?: boolean;
        text?: string;
        cssClass?: string;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverWizardPropertyGridOptions extends Silverdark.Components.SilverPropertyGridOptions {
        previousButtonOnFirstScreen?: boolean;
        wizardNextButtonName?: string;
        wizardPreviousButtonName?: string;
    }
    enum LabelAlignment {
        Left = 1,
        Right = 2,
        Center = 3
    }
    enum LabelVerticalAlignment {
        Top = 1,
        Middle = 2,
        Bottom = 3
    }
    enum ShowUnderlineOptions {
        Always = 0,
        OnHover = 1,
        Never = 2
    }
    enum AccountGroupListFilter {
        All = 0,
        OnlyAccounts = 1,
        OnlyGroups = 2
    }
    enum OutputType {
        FileData = 1,
        FileReference = 2
    }
    enum FileReferenceOutputType {
        Selectable = 1,
        Internal = 2,
        Url = 3
    }
    enum FileDownloadButtonType {
        Link = 1,
        Button = 2
    }
    enum SelectionIndicatorType {
        None = 0,
        VisualIndicator = 1,
        LineNumber = 2
    }
    enum MergeDataDescriptionsSourceEnum {
        SpecificDataDefinitions = 0,
        AllFormInputs = 1,
        AllFormInputsWithAdditionalData = 2
    }
    enum SignaturePadBackgroundType {
        Transparent = 0,
        Color = 1
    }
    enum AdvancedDataGridMode {
        InfoOnly = 0,
        SingleSelect = 1,
        MultipleSelect = 2,
        InlineEdit = 3,
        OutputAll = 4
    }
    enum TextType {
        General = 0,
        Number = 1,
        Decimal = 2,
        Currency = 3,
        EmailAddress = 4,
        SSN = 5,
        Custom = 6,
        PhoneNumber = 7
    }
    enum NumericBoxOutputType {
        OutputAsDouble = 0,
        OutputAsInt = 1,
        OutputAsDecimal = 2
    }
    enum DocumentViewerInputType {
        Document = 0,
        FileData = 1,
        FileReference = 2
    }
    interface GridColumn {
        textAlignment?: $D.Framework.Design.Report.TextAlignment;
    }
    enum GridMode {
        InfoOnly = 0,
        SingleSelect = 1,
        MultipleSelect = 2,
        InlineEdit = 3,
        PropertyGridEdit = 4,
        OutputAll = 5
    }
    enum RowLinkType {
        FirstColumn = 0,
        LastColumn = 1,
        AllColumns = 2,
        AddColumn = 3
    }
    interface GridColumnInfo {
        name?: string;
        editable?: boolean;
        hidden?: boolean;
        width?: number;
        sortable?: boolean;
        allowGroup?: boolean;
        edittype?: string;
        allowSort?: boolean;
        align?: string;
        title?: boolean;
        sortingOrder?: $D.Framework.Design.Report.SortOrder;
        fieldName?: string;
        sortType?: string;
        key?: boolean;
        resizable?: boolean;
        allowFilter?: boolean;
        editoptions?: Silverdark.Components.IGridColumnEditOptions;
        formatoptions?: Silverdark.Components.GridColumnFormatOptions;
        dataType?: string;
        columnName?: string;
        cultureName?: string;
        classes?: string;
        label?: string;
        allowUnsafeJavascript?: boolean;
    }
    enum FileUploadButtonType {
        Link = 1,
        Button = 2,
        Clip = 3
    }
    enum FileOutputType {
        FileData = 1,
        ByteArray = 2,
        FileReference = 3
    }
    enum ValidationIssueType {
        All = 0,
        Fatal = 1,
        Warning = 2
    }
    enum TimlineStateSource {
        FromFolder = 0,
        DefineStates = 1
    }
    enum HtmlDisplayModeInMVC {
        Dialog = 0,
        Inline = 1,
        InlineEmbed = 2
    }
    enum HtmlSourceEnum {
        URL = 0,
        Data = 1,
        Static = 2
    }
    enum ImageGalleryOutputType {
        FileData = 0,
        FileReference = 1,
        Document = 2
    }
    enum GalleryMode {
        ViewOnly = 0,
        AllowSelection = 1
    }
    enum TextBehaviour {
        Wrap = 0,
        Clip = 1
    }
    enum LabelAsterisk {
        Off = 0,
        On = 1,
        Dynamic = 2
    }
    enum AsteriskPosition {
        Left = 0,
        Right = 1
    }
    enum OutputSelectionType {
        SingleSelect = 0,
        MultipleSelect = 1
    }
    enum MultiFileOutputType {
        FileData = 1,
        FileReference = 2
    }
    enum MultiFileUploadButtonType {
        Link = 1,
        Button = 2,
        Clip = 3
    }
    enum UploadButtonHorizontalAlignment {
        Left = 1,
        Right = 2
    }
    enum UploadButtonVerticalAlignment {
        Bottom = 1,
        Top = 2
    }
    enum SliderScaleType {
        Default = 0,
        Custom = 1
    }
    interface SilverLabelInputData {
        inputName?: string;
        formDataName?: string;
    }
    enum AutoExitDisplayMode {
        Abortable = 1,
        Visible = 2,
        Invisible = 3
    }
    enum VideoType {
        URL = 0,
        FileData = 1
    }
    interface IGridColumnEditOptions {
    }
    interface GridColumnFormatOptions {
        baseLinkUrl?: string;
        target?: string;
    }
}
declare module Silverdark.Components.Navigation {
    interface NavigationTreeFormControlOptions extends Silverdark.Components.DataContentBaseOptions {
        staticInput?: boolean;
        defaultValue?: string;
        specifyRootFolder?: boolean;
        rootFolderId?: string;
        cssClass?: string;
        textCssClass?: string;
    }
    interface NavigationTreePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.CMS {
    interface CMSContentEditorSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Form {
    interface ChatViewerFormComponentOptions extends Silverdark.Components.ContentBaseOptions {
    }
}
declare module Silverdark.Components.OpenURLComponents {
    interface BaseOpenURLOptions extends Silverdark.Components.ContentBaseOptions {
        dataName?: string;
        uRL?: string;
        relativeToBaseURL?: boolean;
        openInNewTab?: boolean;
        windowName?: string;
        height?: number;
        width?: number;
        isChrome?: boolean;
    }
    interface OpenURLButtonBaseOptions extends Silverdark.Components.OpenURLComponents.BaseOpenURLOptions {
        text?: string;
        textDataName?: string;
        cssClass?: string;
    }
    interface SilverButtonOpenURLOptions extends Silverdark.Components.OpenURLComponents.OpenURLButtonBaseOptions {
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
        overrideBackgroundColor?: boolean;
        backgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    interface SilverHyperLinkButtonOpenURLOptions extends Silverdark.Components.OpenURLComponents.OpenURLButtonBaseOptions {
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        showUnderline?: Silverdark.Components.ShowUnderlineOptions;
        useFormFont?: boolean;
        labelAlignment?: Silverdark.Components.LabelAlignment;
        labelVerticalAlignment?: Silverdark.Components.LabelVerticalAlignment;
    }
    interface SilverImageButtonOpenURLOptions extends Silverdark.Components.OpenURLComponents.BaseOpenURLOptions {
        imageInfo?: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        cssClass?: string;
    }
}
declare module Silverdark.Components.Page {
    interface AccountInfoSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ActionsBarOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface AddCommentPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface AddDocumentPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface AppStorePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface AssignmentsSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface DiagramTileViewPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
        flowId?: string;
        inputFlowId?: string;
        margins?: number;
        scale?: Silverdark.Components.Page.DiagramTileScale;
        verticalAlign?: Silverdark.Components.Page.DiagramTileVerticalAlign;
        horizontalAlign?: Silverdark.Components.Page.DiagramTileHorizontalAlign;
        refreshOnTreeChange?: boolean;
        refreshOnCurrentFolderChange?: boolean;
        refreshOnContainedEntityChange?: boolean;
        refreshOnAnyFolderChange?: boolean;
        updateDatafromSelectionBus?: boolean;
        selectionBusName?: string;
    }
    interface CaseEditorPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface DateRangeFilterPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ContactInfoSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface DisplayHtmlSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface DocumentViewerSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FeaturesPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderActionsOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderActionsBarPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderHeaderDataPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FoldersBarOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface FolderTreePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface GoogleMapSearchOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface GoogleSearchOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ImagePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ImageViewerSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface IncrementalSearchPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface NavigateToFolderOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
    interface NavigateToParentFolderOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
    interface NavigateToParentProcessPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface OpenURLOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
        openInNewTab?: boolean;
        windowName?: string;
    }
    interface PageViewerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ScratchPadPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RunFlowOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
    interface SystemInformationPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RichTextPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RunAssignmentsSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface PropertyGridEditorSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RuleSetsDesignerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RunReportSettingsFlowOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
    interface SpecRunnerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface UserTimeZonePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    enum DiagramTileScale {
        None = 0,
        Uniform = 1,
        UniformToFill = 2
    }
    enum DiagramTileVerticalAlign {
        Top = 0,
        Middle = 1,
        Bottom = 2
    }
    enum DiagramTileHorizontalAlign {
        Left = 0,
        Center = 1,
        Right = 2
    }
}
declare module Silverdark.Components.Page.ServiceCatalog {
    interface ServiceCatalogPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Resources {
    interface ResourcesViewerOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Printing {
    interface PageBreakControlOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface PrintDataTextBlockOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
}
declare module Silverdark.Components.Page.Notifications {
    interface NotificationsPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Matrix {
    interface MatrixPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.ImageFolder {
    interface ImageFolderViewerOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
}
declare module Silverdark.Components.Page.FolderData {
    interface DynamicImageOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderDataDateTimePartOptions extends Silverdark.Components.Page.FolderData.FolderDataSilverPartOptions {
    }
    interface FolderDataRichTextBoxPartOptions extends Silverdark.Components.Page.FolderData.FolderDataSilverPartOptions {
    }
    interface FolderDataSaveButtonPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderDataSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderDataStateLineOptions extends Silverdark.Components.SilverTextBlockOptions {
    }
    interface FolderDataStateSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderDataTextBlockOptions extends Silverdark.Components.SilverTextBlockOptions {
        dataName?: string;
    }
    interface FolderDataTextBoxPartOptions extends Silverdark.Components.Page.FolderData.FolderDataSilverPartOptions {
    }
    interface OpenChatPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.DesignerFolder {
    interface DesignerFolderFilterPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface DesignerFolderViewerOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Components {
    interface ConfigurableButtonOptions extends Silverdark.Components.ContentBaseOptions {
    }
    interface OpenChildTabButtonPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RefreshPagePartOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
}
declare module Silverdark.Components.Page.Tagging {
    interface CompactTagsPartOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface TagBrowserOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Logging {
    interface ClientLogViewerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface LogViewerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Chat {
    interface ChatPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Charts {
    interface ChartLegendPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ChartPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface CounterChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface CountersChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface GaugesChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface AreasChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface BubblesChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface BarsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface SimpleBarsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface MixedBarsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface StackedBarsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface WinLooseBarsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface BulletsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface ColumnsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface DotsChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface LinesChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface PieChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
    interface RingChartPartOptions extends Silverdark.Components.Page.Charts.ChartPartOptions {
    }
}
declare module Silverdark.Components.Page.ReportViewer {
    interface BlurbReportViewerOptions extends Silverdark.Components.Page.ReportViewer.ReportViewerPartOptions {
    }
    interface EntityScrollerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderViewerOptions extends Silverdark.Components.Page.ReportViewer.ReportViewerPartOptions {
    }
    interface ReportViewerPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface ReportViewActionBarOptions extends Silverdark.Components.Page.ActionsBarOptions {
    }
    interface TextOutputReportViewerOptions extends Silverdark.Components.Page.ReportViewer.ReportViewerPartOptions {
    }
}
declare module Silverdark.Components.Page.ActionButtons {
    interface ActionButtonBaseOptions extends Silverdark.Components.Page.Components.ConfigurableButtonOptions {
    }
    interface NavigateButtonOptions extends Silverdark.Components.Page.ActionButtons.ActionButtonBaseOptions {
    }
    interface RunFlowButtonOptions extends Silverdark.Components.Page.ActionButtons.ActionButtonBaseOptions {
    }
    interface RunFolderActionButtonOptions extends Silverdark.Components.Page.ActionButtons.ActionButtonBaseOptions {
    }
    interface RunReportButtonOptions extends Silverdark.Components.Page.ActionButtons.ActionButtonBaseOptions {
    }
    interface ServiceCatalogButtonOptions extends Silverdark.Components.Page.ActionButtons.ActionButtonBaseOptions {
    }
    interface RunActionButtonPartOptions extends Silverdark.Components.Page.ActionButtons.BaseRunActionPartOptions {
    }
    interface RunActionImagePartOptions extends Silverdark.Components.Page.ActionButtons.BaseRunActionPartOptions {
    }
    interface RunActionLinkPartOptions extends Silverdark.Components.Page.ActionButtons.BaseRunActionPartOptions {
    }
    interface BaseRunActionPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Tiles {
    interface AbstractMetroTileSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface TilePagePartOptions extends Silverdark.Components.Page.Tiles.TilePartOptions {
    }
    interface TilesPagePartOptions extends Silverdark.Components.Page.Tiles.TilesPartOptions {
    }
    interface TileHtmlSilverPartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
    interface TileLabelSilverPartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
    interface TilePartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
    interface TileSimpleHtmlSilverPartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
    interface TileSimpleTextSilverPartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
    interface TilesPartOptions extends Silverdark.Components.Page.Tiles.AbstractMetroTileSilverPartOptions {
    }
}
declare module Silverdark.Components.Page.Activity {
    interface AbstractActivityPanelOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderActivityViewPartOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
    }
    interface FolderTimelineGaugePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface FolderTimelineSilverPartOptions extends Silverdark.Components.Page.Activity.AbstractActivityPanelOptions {
    }
    interface HorizontalFolderTimelineSilverPartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface RuntimeCasePartOptions extends Silverdark.Components.Page.Activity.AbstractActivityPanelOptions {
    }
}
declare module $D.Silverlight.UI.Controls {
    interface SilverPartOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        title?: string;
        isCollapsed?: boolean;
        isSilverPartCollapsable?: boolean;
        requestedHeight?: number;
        requestedMaxHeight?: number;
        requestedMinHeight?: number;
    }
}
declare module $D.Silverlight.UI.Core.FormDesignerModel {
    interface ICopyTextSourceControlOptions {
    }
    interface ISilverFormEventsProviderOptions {
    }
}
declare module $D.Silverlight.UI.Forms {
    interface SilverFormComponentBaseOptions {
        requestedHeight?: number;
        requestedMaxHeight?: number;
        requestedMinHeight?: number;
        containerComponentId?: string;
        isComponentVisible?: boolean;
        isEnabled?: boolean;
        componentId?: string;
        originalComponentId?: string;
        tabOrder?: number;
        parentId?: string;
        componentName?: string;
        requestedMinWidth?: number;
        requestedMaxWidth?: number;
        requestedWidth?: number;
        helpMessageKey?: string;
        initiallyVisible?: boolean;
        initiallyEnabled?: boolean;
        isInDesignMode?: boolean;
        isViewOnlyMode?: boolean;
        keyTriggers?: $D.Silverlight.UI.Forms.KeyTriggerDefinition[];
    }
    interface IFormComponentOptions {
        componentId?: string;
        componentName?: string;
        container?: $D.Silverlight.UI.Forms.IFormContainerOptions;
        requestedHeight?: number;
        requestedWidth?: number;
        tabOrder?: number;
        defaultComponentName?: string;
        respectTabbing?: boolean;
        isComponentVisible?: boolean;
        isEnabled?: boolean;
    }
    interface INotFocusableFormComponentOptions {
    }
    interface IFormContainerOptions {
    }
    interface IFormContainerExOptions {
    }
    interface IFormCanvasContainerOptions {
    }
    interface IBaseRuleInfo {
        id?: string;
        triggers?: string[];
    }
    interface KeyTriggerDefinition {
        shortcutKey?: $D.Framework.Design.ShortcutInfo;
        triggerType?: $D.Framework.Design.Form.TriggerType;
        controlToFocus?: string;
        controlToTrigger?: string;
        selectedDataFlows?: string[];
        selectedValidationRules?: string[];
        selectedActiveFormFlows?: string[];
    }
    interface FormCustomRule {
        id?: string;
        ruleId?: string;
        ruleInputs?: $D.Silverlight.UI.Forms.FormCustomRuleInput[];
        triggers?: string[];
        customTriggers?: string[];
    }
    interface FormCustomRuleInput {
        iName?: string;
        inputType?: $D.Silverlight.UI.Forms.FormCustomRuleInputType;
        formDataName?: string;
        runOnValueChanged?: boolean;
        formInputName?: string;
    }
    enum FormCustomRuleInputType {
        InputData = 0,
        Form = 1,
        LastPostbackButton = 2,
        PostbackButtonsList = 3
    }
}
declare module $D.Framework.Design.Form.JSBased {
    interface JSBasedComponentOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        designTimeDataPairs?: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        jsClassName?: string;
        jsFileName?: string;
    }
    interface JSBasedFormActionComponentOptions extends $D.Framework.Design.Form.JSBased.JSBasedFormComponentOptions {
        possibleOutcomeNames?: string[];
    }
    interface JSBasedFormComponentOptions extends $D.Framework.Design.Form.JSBased.JSBasedComponentOptions {
    }
    interface JSBasedFormDataComponentOptions extends $D.Framework.Design.Form.JSBased.JSBasedFormComponentOptions {
    }
    interface JSBasedPageComponentOptions extends $D.Framework.Design.Form.JSBased.JSBasedComponentOptions {
    }
}
declare module $D.Framework.Design.Form.ComponentData {
    interface BaseCloseButtonOptions extends Silverdark.Components.ContentBaseOptions {
        needsConfirm?: boolean;
        confirmationMessage?: string;
        isConfirmMessageFromDataName?: boolean;
        confirmMessageDataName?: string;
        confirmDialogYesButtonText?: string;
        isYesButtonTextFromDataName?: boolean;
        yesButtonTextDataName?: string;
        confirmDialogNoButtonText?: string;
        isNoButtonTextFromDataName?: boolean;
        noButtonTextDataName?: string;
    }
    interface FormTilePartOptions extends $D.Silverlight.UI.Controls.SilverPartOptions {
    }
    interface IDataGridOptions {
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite {
    interface BaseCompositeDataControlOptions extends Silverdark.Components.DataContentBaseOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        labelCssClass?: string;
        controlCssClass?: string;
    }
    interface BaseCompositeListControlOptions extends Silverdark.Components.ListBaseOptions {
        staticLabel?: boolean;
        staticListItems?: boolean;
        items?: string[];
        label?: string;
        labelDataName?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        formValidationSetting?: $D.Silverlight.UI.Core.FormDesignerModel.ControlValidationSetting;
        cssClass?: string;
        labelCssClass?: string;
        controlCssClass?: string;
    }
    interface CompositeCheckBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        staticInput?: boolean;
        isThreeState?: boolean;
        defaultValue?: boolean;
    }
    interface CompositeCurrencyBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.CompositeNumberBoxOptions {
        outputType?: Silverdark.Components.NumericBoxOutputType;
        currencySymbol?: string;
        numberAlignment?: Silverdark.Components.LabelAlignment;
    }
    interface CompositeDatePickerOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        overrideDateFormat?: boolean;
        dateFormat?: string;
        defaultValue?: Date;
        invalidDateFormatValidationMessage?: string;
        buttonCssClass?: string;
        calendarCssClass?: string;
    }
    interface CompositeDateTimeFieldOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        staticInput?: boolean;
        dataName?: string;
        invalidDateFormatValidationMessage?: string;
        buttonCssClass?: string;
        arrowButtonCssClass?: string;
        requiredMessage?: string;
        overrideRequiredMessage?: boolean;
    }
    interface CompositeDateTimePickerOptions extends $D.Framework.Design.Form.ComponentData.Composite.CompositeDatePickerOptions {
        overrideDateFormat?: boolean;
        dateFormat?: string;
        invalidDateFormatValidationMessage?: string;
        defaultValue?: Date;
    }
    interface CompositeDesignDrivenTextAreaOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        staticInput?: boolean;
        dataName?: string;
        maximumNumber?: number;
        minimumNumber?: number;
        overrideDefaultFont?: boolean;
        defaultFont?: string;
        defaultFontSize?: string;
        text?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
        serverDataKeys?: string[];
        requiredMessage?: string;
        overrideRequiredMessage?: boolean;
        watermarkText?: string;
        requestedHeight?: number;
        requestedMinHeight?: number;
    }
    interface CompositeMaskedTextBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        textType?: Silverdark.Components.TextType;
        staticInput?: boolean;
        defaultValue?: string;
        maximumNumber?: number;
        watermarkText?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface CompositeNumberBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        outputType?: Silverdark.Components.NumericBoxOutputType;
        useMinMax?: boolean;
        minimum?: number;
        maximum?: number;
        initialValue?: number;
        increment?: number;
        isEditable?: boolean;
        doNotFormatWholeNumber?: boolean;
        allowNullValue?: boolean;
        dataName?: string;
        formatOptions?: $D.Framework.Utilities.Data.NumberFormatOptions;
        decimalDigits?: number;
        useNumberGroupSeparator?: boolean;
        numberGroupSeparator?: string;
        autoSelectOnFocus?: boolean;
        autoPopulate?: boolean;
        staticInput?: boolean;
        defaultValue?: any;
        watermarkText?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
        numberOfDecimalDigits?: number;
        groupSeprator?: string;
        decimalSeprator?: string;
    }
    interface CompositeNumberSpinnerOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        staticInput?: boolean;
        minimum?: number;
        maximum?: number;
        initialValue?: number;
        defaultValue?: number;
        increment?: number;
        decimalPlaces?: number;
        isEditable?: boolean;
        isNullable?: boolean;
        raiseValueChangeEventOnlyOnExit?: boolean;
        overrideRequiredMessage?: boolean;
    }
    interface CompositeRichTextBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.CompositeTextAreaOptions {
        text?: string;
        maximumNumber?: number;
        minimumNumber?: number;
        specifyMaxRows?: boolean;
        maxRows?: number;
        watermarkText?: string;
    }
    interface CompositeSignaturePadOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        showClearBtn?: boolean;
        showUndoBtn?: boolean;
        staticInput?: boolean;
    }
    interface CompositeTextAreaOptions extends $D.Framework.Design.Form.ComponentData.Composite.CompositeTextBoxOptions {
        text?: string;
        specifyMaxRows?: boolean;
        maxRows?: number;
    }
    interface CompositeTextBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        text?: string;
        maximumNumber?: number;
        minimumNumber?: number;
        watermarkText?: string;
        staticInput?: boolean;
        raiseValueChangeEventOnlyOnExit?: boolean;
    }
    interface CompositeTextFieldOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        watermarkText?: string;
        staticInput?: boolean;
        dataName?: string;
        raiseValueChangeEventOnlyOnExit?: boolean;
        serverDataKeys?: string[];
        requiredMessage?: string;
        overrideRequiredMessage?: boolean;
    }
    interface CompositeTimePickerOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeDataControlOptions {
        defaultValue?: string;
        buttonCssClass?: string;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.UserDefinedControls {
    interface CompositeDataRepeaterOptions extends Silverdark.Components.DataRepeaterOptions {
        formId?: string;
        serverDataKeys?: string[];
        autoAddNewRow?: boolean;
        moveDownShortcutKey?: $D.Framework.Design.ShortcutInfo;
        moveUpShortcutKey?: $D.Framework.Design.ShortcutInfo;
        isReadOnly?: boolean;
        attributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        selectedItemLineNumberDataName?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        showSeparator?: boolean;
        numberLineIndicatorWidth?: number;
        defaultBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
        selectionBackgroundColor?: $D.Silverlight.UI.Utilities.DesignerColor;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.ListControls {
    interface CompositeCheckBoxListOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        isHorizontal?: boolean;
        controlCssClass?: string;
        containerCssClass?: string;
        itemCssClass?: string;
    }
    interface CompositeComboBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        buttonCssClass?: string;
        dropdownListCssClass?: string;
    }
    interface CompositeListOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        labelCssClass?: string;
        controlCssClass?: string;
        selectedLookAndFeelCssClass?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelCssClassProvider;
        staticListItems?: boolean;
        items?: string[];
        overrideRequiredMessage?: boolean;
        requiredMessage?: string;
        selectedItemDataName?: string;
    }
    interface CompositeListBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        outputType?: Silverdark.Components.OutputSelectionType;
        isMultiSelect?: boolean;
        controlCssClass?: string;
        containerCssClass?: string;
        itemCssClass?: string;
        selectedItemCssClass?: string;
    }
    interface CompositeMultiSelectComboBoxOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        buttonCssClass?: string;
        dropdownListCssClass?: string;
    }
    interface CompositeRadioButtonListOptions extends $D.Framework.Design.Form.ComponentData.Composite.BaseCompositeListControlOptions {
        isHorizontal?: boolean;
        controlCssClass?: string;
        containerCssClass?: string;
        itemCssClass?: string;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.FileControls {
    interface CompositeFileUploadOptions extends Silverdark.Components.SilverFileUploadOptions {
        staticLabel?: boolean;
        useFullSize?: boolean;
        label?: string;
        labelDataName?: string;
        useFormFont?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        serverDataKeys?: string[];
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        labelCssClass?: string;
        linkCssClass?: string;
    }
    interface CompositeFileUploadAreaOptions extends Silverdark.Components.SilverFileUploadAreaOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        useFormFont?: boolean;
        buttonCssClass?: string;
        clipCssClass?: string;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        serverDataKeys?: string[];
        labelCssClass?: string;
        linkCssClass?: string;
    }
    interface CompositeMultiFileUploadOptions extends Silverdark.Components.SilverMultiFileUploadOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        useFormFont?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        progressBarCssClass?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        serverDataKeys?: string[];
        labelCssClass?: string;
    }
    interface CompositeMultiFileUploadAreaOptions extends Silverdark.Components.SilverMultiFileUploadAreaOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        serverDataKeys?: string[];
        useFormFont?: boolean;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        dialogHeaderClass?: string;
        dialogBodyClass?: string;
        dialogFooterClass?: string;
        clipCssClass?: string;
        buttonCssClass?: string;
        progressBarCssClass?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        labelCssClass?: string;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.FileControls.Download {
    interface CompositeFileDownloadOptions extends Silverdark.Components.SilverFileDownloadOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        cssClass?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        labelCssClass?: string;
        linkCssClass?: string;
        buttonCssClass?: string;
    }
    interface CompositeMultiFileDownloadOptions extends Silverdark.Components.SilverMultiFileDownloadOptions {
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        labelAttributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        labelCssClass?: string;
        zipButtonCssClass?: string;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.DisplayControls {
    interface CompositeImageOptions extends Silverdark.Components.SilverImageOptions {
        cssClass?: string;
        transition?: boolean;
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        requestedMinHeight?: number;
        sizeToImage?: boolean;
        labelCssClass?: string;
        controlCssClass?: string;
    }
    interface CompositeLabelOptions extends Silverdark.Components.SilverLabelOptions {
        labelFor?: string;
        labelAsterisk?: Silverdark.Components.LabelAsterisk;
        cssClass?: string;
        attributes?: $D.Silverlight.UI.Utilities.LabelAttributes;
        labelCssClass?: string;
    }
    interface CompositeLabelFieldOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        controlCssClass?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
    }
    interface CompositeProgressBarOptions extends Silverdark.Components.SilverProgressOptions {
        dataName?: string;
        min?: number;
        max?: number;
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        cssClass?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        controlCssClass?: string;
    }
    interface CompositeValidationsDisplayOptions extends Silverdark.Components.ContentBaseOptions {
        issueType?: Silverdark.Components.ValidationIssueType;
        variant?: $D.Framework.Design.Form.ComponentData.Composite.DisplayControls.ValidationVariant;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        controlCssClass?: string;
    }
    interface CompositeVideoOptions extends Silverdark.Components.SilverVideoOptions {
        cssClass?: string;
        autoPlay?: boolean;
        loop?: boolean;
        staticLabel?: boolean;
        label?: string;
        labelDataName?: string;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        labelCssClass?: string;
        controlCssClass?: string;
    }
    enum ValidationVariant {
        Standard = 0,
        Outlined = 1
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.ActionControls {
    interface ButtonPanelOptions extends Silverdark.Components.ContentBaseOptions {
        okOutcomeName?: string;
        cancelOutcomeName?: string;
        possibleOutcomeNames?: string[];
    }
    interface CompositeActionButtonOptions extends $D.Silverlight.UI.Forms.SilverFormComponentBaseOptions {
        selectedLookAndFeel?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased.BaseLookAndFeelProvider;
        selectedBehavior?: $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.BehaviourBased.BaseBehaviorProvider;
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
        controlCssClass?: string;
    }
    interface CompositeButtonOptions extends Silverdark.Components.SilverButtonOptions {
        cssClass?: string;
        overrideRequiredMessage?: boolean;
        specifyVisibility?: boolean;
        overrideBackgroundColor?: boolean;
        textFont?: $D.Silverlight.UI.Utilities.LabelAttributes;
    }
    interface CompositeTimerExitOptions extends Silverdark.Components.SilverTimerExitOptions {
        requestedHeight?: number;
        requestedWidth?: number;
        requestedMaxWidth?: number;
        requestedMinWidth?: number;
        requestedMaxHeight?: number;
    }
}
declare module Silverdark.Controls.ReportDesigner {
    enum PreviewDisplayMode {
        Inline = 0,
        Outside = 1,
        Tooltip = 2,
        None = 3,
        RightSide = 4
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.LookAndFeelBased {
    interface BaseLookAndFeelProvider {
    }
    interface BaseLookAndFeelCssClassProvider {
        labelCssClass?: string;
        controlCssClass?: string;
    }
}
declare module $D.Framework.Design.Form.ComponentData.Composite.DesignDriven.BehaviourBased {
    interface BaseBehaviorProvider {
    }
}
declare module $D.Framework.Design.Form {
    enum TriggerType {
        GoToControl = 0,
        TriggerAction = 1,
        RunValidation = 2,
        RunDataFlow = 3,
        RunActiveFormFlow = 4
    }
}
declare module Silverdark.Designers.Forms.Containers.Internals {
    enum LayoutElementType {
        Fixed = 0,
        Grow = 1,
        Resize = 2
    }
}
