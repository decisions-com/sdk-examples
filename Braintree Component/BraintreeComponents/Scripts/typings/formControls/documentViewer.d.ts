/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Form.Controls {
    interface IDocumentViewerOptions {
        url?: string;
        holder?: JQuery;
        noDocumentMessage?: string;
    }
    class DocumentViewer {
        private options;
        private view;
        constructor(options: IDocumentViewerOptions);
        static create(options: IDocumentViewerOptions): DocumentViewer;
        intialize(): void;
        private render;
        refresh(options: IDocumentViewerOptions): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
