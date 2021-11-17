/// <reference path="combobox.d.ts" />
/// <reference path="comboboxitem.d.ts" />
declare namespace $DP.Common {
    interface ComboBoxLayerOptions {
        readonly stickTo: JQuery;
        readonly className?: string;
        readonly onLayerShown?: (layer: JQuery) => void;
        readonly layerZIndex?: number;
        readonly layerHeight?: number;
        readonly width?: number;
        readonly onSelectionChanged?: (event: {
            origin: ComboBoxLayer;
            prevIndex: number;
            currentindex: number;
        }) => void;
        readonly onPicked?: (event: {
            origin: ComboBoxLayer;
            item: ComboBoxItem;
        }) => void;
        readonly onClose?: (event: {
            origin: ComboBoxLayer;
        }) => void;
    }
    class ComboBoxLayer {
        private $items;
        private options;
        private layer;
        private $itemsContainer;
        private $layer;
        /**
         *
         * @param $items Should contains combobox items without wrapper
         * @example
         *  <div class="combobox-item"></div>
         *  <div class="combobox-item"></div>
         *  <div class="combobox-item"></div>
         */
        constructor($items: JQuery, options: ComboBoxLayerOptions);
        get currentIndex(): number;
        get $current(): JQuery;
        updateSize(): void;
        appendItem($elem: JQuery): void;
        focus(): void;
        getView(): JQuery;
        hasNext(): boolean;
        hasPrev(): boolean;
        isVisible(): boolean;
        update($items: JQuery): void;
        show(): ComboBoxLayer;
        remove(): void;
        selectNext(): void;
        selectPrev(): void;
        /**
         * Mark item as selected in list with given index.
         * @param index Index of item. Indexing from 0.
         */
        selectItem(index: number): void;
        clickCurrent(): void;
        removeSelection(): void;
        hasSelectedItem(): boolean;
        private renderContainer;
        private scrollToItem;
        private getItem;
        private onListBoxKeyDown;
    }
}
