/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Reports {
    class MergeView implements IViewController {
        private designerContentHost;
        private previewContentHost;
        private mergeEditor;
        constructor(designerContentHost: JQuery, previewContentHost: JQuery);
        attach(): void;
        detach(): void;
        get hidePreview(): boolean;
        initializeView(mergeText: string, mergeDataLoader: () => Controls.RichText.IMergeDataLoader, updateFunction: Function): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
