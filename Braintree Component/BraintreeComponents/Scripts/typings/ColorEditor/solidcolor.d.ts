declare namespace $DP.ColorDialogEditor {
    class SolidColor {
        color: {
            r: string;
            g: string;
            b: string;
        };
        /**
        * value from 0 to 1
        */
        opacity: number;
        constructor();
        static fromDesignerColor(color: DesignerColor): SolidColor;
        static fromRgbaString(rgba: string): SolidColor;
        setFromRgb(rgb: RGBColor): void;
        toDesignerColor(): DesignerColor;
        toRgba(): string;
        toRgb(): string;
        toHex(): string;
    }
}
