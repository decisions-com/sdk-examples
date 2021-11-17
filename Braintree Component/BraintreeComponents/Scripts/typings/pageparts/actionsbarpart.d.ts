declare namespace $DP.PageParts {
    import CreateActionBarOptions = $DP.Common.Actions.CreateActionBarOptions;
    interface PageActionBarOptions extends CreateActionBarOptions {
        isInDesignMode: boolean;
    }
    function createPageActionBar(host: HTMLElement, props?: Readonly<PageActionBarOptions>): Promise<void>;
}
