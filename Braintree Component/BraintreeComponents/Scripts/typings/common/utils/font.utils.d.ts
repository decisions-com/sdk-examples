declare namespace $DP.Common {
    /**
     * the utils that intended to work with fonts
     * (moved here from the deleted Decisions.Container.Helper.js)
     */
    class FontUtils {
        static FontWeight: {
            normal: string;
            bold: string;
            bolder: string;
            lighter: string;
            auto: string;
            inherit: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        static FontStyle: {
            normal: string;
            italic: string;
            oblique: string;
            inherit: string;
        };
        /**
         * returns the integer part of the number returned by getTextWidth
         * in js world where all these functions were born, the parseInt used instead of Math.floor
         */
        static getIntTextWidth({ el, considerPadding, considerMargin }: {
            el: JQuery;
            considerPadding?: boolean;
            considerMargin?: boolean;
        }): number;
        static getTextWidth(element: any, considerPadding?: any, considerMargin?: any): number;
        static GetTextWidthWithSpecifiedValue(element: any, fontWeight: any, fontStyle: any, fontSize: any, fontFace: any, considerPadding: any, considerMargin: any): number;
    }
}
interface JQueryStatic {
    WholeTextOnOneLine(fontSize?: any, fontFamily?: any, fontWeight?: any): any;
}
