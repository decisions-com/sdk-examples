/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
declare namespace $DP.Common {
    interface IZoomImageOptions {
        instanceId: string;
        style?: string;
        comboBoxOptions?: $DP.Common.ComboBoxOptions;
        onHorizontalStretchClick?: (e: any) => void;
        onVerticalStretchClick?: (e: any) => void;
        onZoomFit?: (e: any) => void;
        onSliderZoom?: (e: any, ui: any) => void;
        onZoomImageSize?: (e: any) => void;
    }
    class ZoomImage {
        private options;
        comboOptions: $DP.Common.ComboBoxOptions;
        constructor(options: IZoomImageOptions);
        render(): JQuery;
        zoomHandler: (e: any, ui: any) => void;
        private addActiveStyle;
    }
}
interface JQuery {
    zoomImage(options: $DP.Common.IZoomImageOptions): JQuery;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
