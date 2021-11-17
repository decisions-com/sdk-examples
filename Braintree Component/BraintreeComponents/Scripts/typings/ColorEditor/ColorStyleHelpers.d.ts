/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.ColorDialogEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    import DesignerGradient = $D.Silverlight.UI.Utilities.DesignerGradient;
    import DesignerGradientDirection = $D.Silverlight.UI.Utilities.DesignerGradientDirection;
    class ColorStyleHelpers {
        static getRandomColor(): string;
        static GetStyle(designerColor: DesignerColor): string;
        static getStyleForSolidColor(designerColor: DesignerColor): string;
        static getColor(designerColor: DesignerColor): string;
        static formatColorStringToObject(colorName: string, elemOpacity?: number, isBase255?: boolean): {
            Color: {
                R: number;
                G: number;
                B: number;
            };
            Opacity: number;
            HtmlOpacity: number;
            Hex: string;
        };
        static getStyleForLinearGradientColor(designerGradients: DesignerGradient[], direction: DesignerGradientDirection): string;
        static areSameColors(color1: string, color2: string): boolean;
        private static createGradientNorth;
        private static createGradientNorthEast;
        private static createGradientEast;
        private static createGradientSouthEast;
        private static createGradientSouth;
        private static createGradientSouthWest;
        private static createGradientWest;
        private static createGradientNorthWest;
    }
}
