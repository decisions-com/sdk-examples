/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="ColorConverterHelpers.d.ts" />
/// <reference path="colorpick.editor.d.ts" />
/// <reference path="colorpick.gradient.d.ts" />
/// <reference path="solidcolor.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../common/dptabs.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
declare namespace $DP.ColorDialogEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    import ColorGradient = $DP.ColorDialogEditor.ColorGradient;
    interface ColorPickerOptions {
        holder?: JQuery;
        pickedColor?: DesignerColor;
        ShowGradients?: boolean;
    }
    class DefaultColorPickerOptions implements ColorPickerOptions {
        ShowGradients: boolean;
    }
    class ColorPicker {
        private options;
        readonly defaultOpacity = 1;
        colorPanel: JQuery;
        colorView: JQuery;
        colorPreview: JQuery;
        colorDiv: JQuery;
        colorDivChild: JQuery;
        sliderOpacity: JQuery;
        sliderRed: JQuery;
        sliderGreen: JQuery;
        sliderBlue: JQuery;
        sliderInputs: JQuery;
        opacityInput: JQuery;
        redInput: JQuery;
        greenInput: JQuery;
        blueInput: JQuery;
        RGBaTextBox: JQuery;
        HEXTextBox: JQuery;
        comboBox: $DP.Common.ComboBox;
        colorPickerType: JQuery;
        colorTabs: $DP.Common.DPTabs;
        selectedColorId: number;
        designerColorObj: DesignerColor;
        RGBaTextBoxValue: string;
        HEXTextBoxValue: string;
        editorGradient: ColorGradient;
        pickedColor: SolidColor;
        constructor(options: ColorPickerOptions);
        render(): JQuery;
        getView(): JQuery;
        getColor(): DesignerColor;
        updateSelectedColor(color: SolidColor): void;
        private initialize;
        private get designerColor();
        private initTabsTypePicker;
        private initGradientEditor;
        private getDefaultGradientColor;
        private attachRgbInputsEvents;
        private attachRgbSlidersEvents;
        private handleSlideStartEvent;
        private handleSlideEvent;
        private handleSlideStopEvent;
        private updatePalleteSelection;
        private updateSliders;
        private updatePreview;
        private updateHexTextBox;
        private updateRgbaTextBox;
        private getBackgroundRGBAColorFromElement;
        private removeColorDivSelectClass;
        private colorDialogEvents;
        private clickOnExpadingNode;
        private rgbaTextBoxEvents;
        private hexTextBoxEvents;
        private getColorDialogTemplate;
        private getAdvancedColorContentHtml;
        private getCommonContentHtml;
        private getRecentColorContentHtml;
        private getCurrentColorContentHtml;
        private getCommonColors;
        private getPalleteColors;
        /**
         * Convert opacity to html opacity - value used for editing in ui (from 0 to 255)
         * @param opacity number from 0 to 1
         */
        private getHtmlOpacity;
        /**
         * Convert html opacity to opacity - value from 0 to 1
         * @param opacity number from 0 to 255
         */
        private getOpacity;
    }
    interface ColorPickerDialogOptions {
        stickTo: JQuery;
        title?: string;
        width?: number;
        height?: number;
        onOk?: (designerColor: DesignerColor) => void;
        onClosed?: () => void;
        onClear?: () => void;
    }
    function showColorPickerDialog(picker: ColorPicker, options: ColorPickerDialogOptions): JQuery;
}
/**
* Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
