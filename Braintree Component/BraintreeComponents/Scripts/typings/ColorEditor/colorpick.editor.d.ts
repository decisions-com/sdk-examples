/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="colorpick.d.ts" />
/// <reference path="ColorStyleHelpers.d.ts" />
declare namespace $DP.ColorDialogEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    interface ColorEditorOptions {
        holder?: JQuery;
        pickedColor?: DesignerColor;
        onChangeColor?: (color: DesignerColor) => void;
        showGradients?: boolean;
        showPen?: boolean;
        showRightButtons?: boolean;
        tabIndex?: number;
    }
    class ColorEditor {
        private options?;
        private $view;
        private colorPicker;
        private preview;
        private colorDialog;
        private static get DATA_KEY();
        constructor(options?: ColorEditorOptions);
        static update(updateOptions: $DP.UI.Controls.NodeInfo): void;
        static get(element: JQuery): ColorEditor;
        getColorPickerElement(): JQuery;
        render(): JQuery;
        getColor(): DesignerColor;
        clearColor(): void;
        unsetColor(): void;
        setColor(color: DesignerColor | string, triggerEvent?: boolean): void;
        private getTransparentColor;
        private attachColorPickerClickEvent;
        private showColorPickerDialog;
        static showColorPickerDialog($stickTo: JQuery, color: DesignerColor, options: ColorPickerDialogOptions, showGradients?: boolean): void;
        private getContentHtml;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
