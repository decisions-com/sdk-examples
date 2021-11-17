declare namespace $DP.PageParts {
    type FolderActionBarOptions = Exclude<PageActionBarOptions, "entityTypeName">;
    function renderPageFolderActionsBar(host: HTMLElement, options: Readonly<FolderActionBarOptions>): Promise<void>;
}
