/// <reference path="epick.model.d.ts" />
/// <reference path="epick.ui.d.ts" />
/// <reference path="epick.data.d.ts" />
/// <reference path="epick.tree.d.ts" />
/// <reference path="../common/combobox/comboboxfield.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../designers/utils.d.ts" />
declare namespace $DP.EntityPicker {
    import DecisionsType = $D.Framework.Design.Flow.Mapping.DecisionsType;
    interface ComboPickerOptions {
        readonly host?: JQuery;
        model: $DP.EntityPicker.EntityPickerModel;
        onSelected?: (item: $DP.Common.ComboBoxItem) => boolean;
        selectedItem?: $DP.Common.ComboBoxItem | Promise<$DP.Common.ComboBoxItem>;
        classNames?: {
            root?: string;
            textBox?: $DP.Common.StyleProps;
            layer?: string;
            arrowDownButton?: $DP.Common.StyleProps;
        };
        disableSpellCheck?: boolean;
        placeholder?: string;
        hideArrowButton?: boolean;
        hasClear?: boolean;
        tabIndex?: number | string;
        layerZIndex?: number;
        layerHeight?: number;
        onLayerShown?: (layer: JQuery) => void;
        onInput?: (text: string) => void;
    }
    class ComboPicker {
        private options;
        private static defaultLayerHeight;
        private picker;
        private input;
        private layer;
        constructor(options: ComboPickerOptions);
        getView(): JQuery;
        getLayerConent(): JQuery;
        getSuggestionsContent(searchText: string): JQuery;
        isLayerOpened(): boolean;
        select(item: $DP.Common.ComboBoxItem, raiseEvent?: boolean): void;
        closeLayer(): void;
        private createPicker;
        private render;
        private showLayer;
        private onLayerKeyDown;
        private selectItem;
    }
    interface TypeComboPickerOptions {
        host?: JQuery;
        selectedType?: string | DecisionsType;
        onSelected?: (type: DecisionsType) => void;
        settings?: $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings;
        hasClear?: boolean;
        moreItems?: Array<{
            id: string;
            title: string;
            onSelected: () => void;
        }>;
        tabIndex?: number | string;
        disableSpellCheck?: boolean;
        layerHeight?: number;
    }
    function createTypeComboPicker(options: TypeComboPickerOptions): ComboPicker;
}
