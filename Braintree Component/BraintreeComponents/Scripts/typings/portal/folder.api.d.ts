/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/FolderService.d.ts" />
declare namespace $DP.Portal {
    class FoldersApi {
        private static makeUrl;
        static GetIconUrl(folderId: string): JQueryDeferred<string>;
        static GetFolderViewData(folderId: string): any;
        static GetMyRecentFoldersForTree(): $D.Framework.ServiceLayer.Services.Folder.FolderForTree[];
        static getPinnedFolders(): JQueryDeferred<FolderForTree[]>;
        static SaveFolderData(folderId: any): any;
        static getMyRootFoldersForTree(): any;
        static GetSubFoldersForTree(folderId: any): any;
        static getMyRootFoldersForTreeAsync(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;
        static getMyHomeFolderAsync(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;
        static getSubFoldersForTreeAsync(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;
        static getSubFolderForTreeAsync(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;
        static getMyRecentFoldersForTree(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;
    }
}
