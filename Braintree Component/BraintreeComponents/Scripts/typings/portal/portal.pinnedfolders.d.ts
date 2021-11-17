/// <reference path="folder.api.d.ts" />
/// <reference path="../typings/core/generated/FavoriteService.d.ts" />
declare namespace $DP.Portal {
    class PinnedFolders {
        private host;
        constructor(host: JQuery);
        static get(): JQuery;
        private loadPinnedFolders;
        private attachEvents;
        private renderFolder;
        private LoadAndExecuteAction;
        static OnNavigationCompleted(message: any): void;
        /**
         * handle Favorite Events for Folders
         */
        static FavouriteEventHandler(messageId: string, data: $D.Framework.ServiceLayer.Services.Folder.FavoriteEntityMessage): void;
    }
}
