/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    interface ColorContrastOptions {
        $source?: JQuery;
        $dest?: JQuery;
        setColor?: (iscontrased: boolean, $source: JQuery, $dest: JQuery) => void;
    }
    class ContrastColorConverter {
        private options;
        static create(options: ColorContrastOptions): ContrastColorConverter;
        static get($source: JQuery): ContrastColorConverter;
        constructor(options: ColorContrastOptions);
        setTextColor(): void;
        calculateTextColor(rgb: any): boolean;
        n: any;
        getRgbBackground(obj: any): number[];
    }
}
interface JQuery {
    contrastcolor(options: $DP.Common.ColorContrastOptions): JQuery;
    contrastcolor(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
