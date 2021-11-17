declare namespace $DP.Common {
    interface RadioButtonListOptions extends ListControlStyleOptions {
        host?: JQuery;
        items?: ListControlItem[];
        selectedItemId: string;
        onSelect?: (item: ListControlItem) => boolean;
        instanceId?: string;
    }
    interface ListControlStyleOptions {
        itemTextCssClass?: string;
        itemCssClass?: string;
        fontStyle?: string;
    }
    interface ListControlItem {
        id?: string;
        value?: string;
    }
    class RadioButtonList {
        private options;
        constructor(options: RadioButtonListOptions);
        private seletedItem;
        get firstRadioBox(): JQuery;
        get lastRadioBox(): JQuery;
        private _instanceId;
        get instanceId(): string;
        static get(hostElem: JQuery): RadioButtonList;
        create(host?: JQuery): void;
        setSelectedItemById(selecetdItemId: string, raiseEvent?: boolean): void;
        setSelectedItemByValue(selecetdItemValue: string, raiseEvent?: boolean): void;
        private selectItem;
        attachEvents(): void;
        private markRadioButtonActive;
        private clearSelection;
        private getRadioButtonView;
        private getView;
        setItems(items: ListControlItem[]): void;
    }
}
interface JQuery {
    radiobuttonlist(options: $DP.Common.RadioButtonListOptions): JQuery;
    radiobuttonlist(methodName: 'get'): $DP.Common.RadioButtonList;
    radiobuttonlist(methodName: 'selectItemById', itemId: string, raiseEvent?: boolean): $DP.Common.RadioButtonList;
    radiobuttonlist(methodName: 'selectItemByValue', itemValue: string, raiseEvent?: boolean): $DP.Common.RadioButtonList;
}
