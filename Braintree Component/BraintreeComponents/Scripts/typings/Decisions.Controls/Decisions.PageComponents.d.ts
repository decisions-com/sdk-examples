/**
 * Author:ismail.bohri@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Page.Control {
    class ScratchPad {
        InstanceId: string;
        RequestedHeight: string;
        RequestedWidth: string;
        CanAutoSave: boolean;
        AutoSaveTime: any;
        ScratchPadId: string;
        Comment: $D.Framework.ServiceLayer.Services.Comment.Comment;
        PreviousData: string;
        FolderId: string;
        initialize: () => void;
        SaveScratchPadContent: () => void;
        ShowSaveMessage: () => void;
        CreateCommentAndSaveData: (successCallBack: any) => boolean;
        SaveData: () => boolean;
        Resize(elementId: any): void;
        OnResizeEvent: (event: Event, options: any) => void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
