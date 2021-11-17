declare namespace $DP.Common {
    interface LinkListOptions extends ListControlStyleOptions {
        host?: JQuery;
        items?: ListControlItem[];
        selectedItemId: string;
        onSelect?: (item: ListControlItem) => boolean;
        showLinks?: boolean;
        linkCssClass?: string;
        linkTitle?: string;
        listCssClass?: string;
    }
    class LinkList {
        private options;
        constructor(options: LinkListOptions);
        static get(hostElem: JQuery): any;
        private root;
        create(host?: JQuery): void;
        setSelectedItem(): void;
        createItemsView(): void;
        setItems(items: ListControlItem[]): void;
        getView(): JQuery;
        getLinkView(index: number, item: ListControlItem): JQuery;
        attachEvents(): void;
    }
}
interface JQuery {
    linklist(options: $DP.Common.LinkListOptions): JQuery;
    linklist(methodName: 'get'): $DP.Common.LinkList;
}
