/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.ColorDialogEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    class RGBColor {
        ok: boolean;
        simple_colors: any;
        color_defs: any;
        r: any;
        g: any;
        b: any;
        constructor(color_string?: string);
        toRGB: () => string;
        toHex: () => string;
        toDesignerColor(): DesignerColor;
        getKnownColorNameOrHex(): string;
    }
}
declare namespace $DP {
    class ColorConverter {
        static rgbToHex(rgb: any): string;
        static hexToRgb(hex: string, includeAlpha?: boolean): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
