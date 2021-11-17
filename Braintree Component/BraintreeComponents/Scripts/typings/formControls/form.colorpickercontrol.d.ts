declare namespace $DP.Control {
    class ColorPickerControl extends DataContentBase {
        options: Silverdark.Components.ColorPickerControlOptions;
        private color;
        private colorEditor;
        private isColorPicked;
        private input;
        constructor($controlLayout: JQuery, options: Silverdark.Components.ColorPickerControlOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        initializeColorPicker(): void;
        attachEvent(): void;
        OnResizeEvent(data: any): void;
        isValidColor(strColor: any): boolean;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        onChangeColor(color: DesignerColor, raiseEvent: boolean): void;
        getHexColor(): string;
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
}
