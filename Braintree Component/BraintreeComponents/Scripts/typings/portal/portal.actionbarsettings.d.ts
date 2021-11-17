declare namespace $DP.Portal {
    function saveActionsBarState(folderId: string, isPinned: boolean): void;
    function isActionsBarPinnedForFolder(folderId: string): boolean | undefined;
}
