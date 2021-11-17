declare namespace $DP.EntityPicker {
    interface EntityPickerDialogOptions {
        title?: string;
        width?: number;
        height?: number;
        onPicked?: (pickedInfo: EntityPickedInfo) => void;
        onMultiplePicked?: (pickedInfos: EntityPickedInfo[]) => void;
        resize?: (d: JQuery) => void;
        onClosed?: () => void;
    }
    function showPickOrCreateDialog(props: dpComponents.IPickOrCreateDialogProps): void;
    function showPickerDialog(picker: $DP.EntityPicker.EntityPicker, options: EntityPickerDialogOptions): JQuery;
}
