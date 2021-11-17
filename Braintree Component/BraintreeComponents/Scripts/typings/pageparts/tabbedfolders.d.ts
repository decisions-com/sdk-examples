declare namespace $DP.Components.Page {
    import ViewPageData = $D.Framework.ServiceLayer.Services.Folder.ViewPageData;
    interface TabbedFolderOptions {
        id: string;
        holder: JQuery;
        pages: ViewPageData[];
        pageName: string;
        folderId: string;
    }
    class TabbedFolders {
        private options;
        tabPanels: JQuery;
        constructor(options: TabbedFolderOptions);
        intialize(): void;
        getTabs(): $DP.Common.DPTab[];
    }
}
