declare namespace $DP.Control {
    interface ImagePickerOptions {
        items: ImagePickerItem[];
        selectedItemIds: string[];
        allowMultipleSelections: boolean;
        holder: JQuery;
        imageClass: string;
        labelClass: string;
        fontStyle: string;
        containerCssClass?: string;
        onSelectionChange?: (selectedItemIds: string[]) => void;
        tabIndex: number;
    }
    interface ImagePickerItem {
        label: string;
        imageUrl: string;
        id: string;
    }
    class ImagePicker {
        private options;
        $container: JQuery;
        _selectedItemIds: string[];
        constructor(options: ImagePickerOptions);
        get holderClass(): string;
        get itemContainerClass(): string;
        get imageContainerClass(): string;
        get selectedImageClass(): string;
        get selectedItemIds(): string[];
        get labelContainerClass(): string;
        static create(options: ImagePickerOptions): ImagePicker;
        initialize(): void;
        render(): void;
        initTooltip(): void;
        getItemsView(): string;
        getItemView(item: ImagePickerItem): string;
        attachEvents(): void;
        raiseSelectionChange(): void;
        updateItems(items: ImagePickerItem[]): void;
        setSelectedByKey(selectedItemsIds: string[]): void;
        selectItem(id: string): void;
        removeSelection(id: string): void;
        clearSelection(): void;
    }
}
