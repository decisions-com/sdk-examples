/// <reference path="../common/popuplayer.d.ts" />
/// <reference path="../common/dummysticktoforiframe.d.ts" />
declare namespace $DP.Controls.RichText {
    interface MergeOkCancelLayerOptions {
        content?: JQuery | string;
        contentClass?: string;
        autoClose?: boolean;
        onCreated?: (event: any) => void;
        onOk?: (event: any) => void;
        onCancel?: (event: any) => void;
    }
    class MergeOkCancelLayer {
        private stickTo;
        private options;
        private popupLayer;
        content: JQuery;
        private layerOptions;
        constructor(stickTo: JQuery, options: MergeOkCancelLayerOptions);
        show(): void;
        attachEvents(): void;
        close(): void;
        private getElement;
        private getContextHolder;
        private getButtons;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
