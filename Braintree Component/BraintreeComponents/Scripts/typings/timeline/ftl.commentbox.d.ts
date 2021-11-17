/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare module $DP.UI.Controls.Timeline {
    interface IAccountInfo {
        accountId: string;
        displayName: string;
    }
    interface ITimelineCommentBoxOptions {
        folderId: string;
        host: JQuery;
        resize?: () => void;
        refresh?: (callback?: () => void) => void;
        onCommentAdded?: (commentId: string) => void;
        onUploadDialogOkClick(event: {
            component: $DP.Common.FileUploadControl;
        }): any;
    }
    class TimelineCommentBox {
        private options;
        private selectedAccounts;
        private accountMap;
        private $view;
        private $textArea;
        constructor(options: ITimelineCommentBoxOptions);
        private init;
        private cachequeryMentions;
        private xhr;
        private getAccount;
        private getAccountIdByName;
        private addComment;
        private onCommentAdded;
        redraw(): void;
        updateFolderId(folderId: string): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
