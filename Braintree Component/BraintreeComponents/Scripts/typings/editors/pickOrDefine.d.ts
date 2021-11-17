declare namespace $DP.UI.Controls {
    interface PickOrDefineOptions {
        pickerRenderer: () => JQueryPromise<DataPair[]>;
        defneRenderer: () => Promise<JQuery>;
        onPicked: (dataPair: DataPair) => void;
        onDefined: (editingContextId: string) => void;
    }
    class PickOrDefine {
        static create(options: PickOrDefineOptions): void;
        private static GetPickerHtml;
    }
}
