declare namespace $DP.Components.Page {
    interface IncrementalSearchOptions {
        componentId: string;
        searchAllTypes?: boolean;
        showDescription?: boolean;
        type?: string;
        searchBoxCssClass?: string;
        dropDownListCssClass?: string;
    }
    class IncrementalSearch {
        private options;
        searchBox: JQuery;
        searchBoxHolder: JQuery;
        searchBoxInputHolder: JQuery;
        popupLayer: Common.PopupLayer;
        constructor(options: IncrementalSearchOptions);
        get suggestionSelector(): string;
        get searchBoxInputHolderClass(): string;
        search: (text: string) => void;
    }
}
