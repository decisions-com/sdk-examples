/// <reference path="combobox.d.ts" />
declare namespace $DP.Common {
    interface ComboBoxItemOptions {
        readonly item: ComboBoxItem;
        readonly searchText?: string;
        readonly isSelected?: boolean;
    }
    class DefaultComboBoxItem {
        private options;
        get rootClass(): string;
        static attachTitle($item: JQuery): JQuery;
        private readonly textItemHeight;
        private $view;
        constructor(options: ComboBoxItemOptions);
        render(): void;
        getView(): JQuery;
        private getItemText;
        private createItemView;
        private appendLeftIconToListItem;
        private highlightItemText;
    }
}
