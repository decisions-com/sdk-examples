/// <reference path="listbox.item.d.ts" />
/// <reference path="styleprops.d.ts" />
declare namespace $DP.Common {
    interface BaseListItem {
        getView(): JQuery;
        getEntity(): any;
    }
    interface ListOptions<T extends BaseListItem> {
        readonly host?: JQuery;
        readonly height?: number | string;
        readonly items?: T[];
        readonly style?: StyleProps;
        readonly header?: JQuery;
    }
    class ListBox<T extends BaseListItem> {
        protected readonly options: ListOptions<T>;
        protected $view: JQuery;
        protected $list: JQuery;
        protected $header: JQuery;
        constructor(options: ListOptions<T>);
        getView(): JQuery;
        addItem(item: T): void;
        getItems(predicate: (entity: any) => boolean): T[];
        protected render(): void;
    }
}
