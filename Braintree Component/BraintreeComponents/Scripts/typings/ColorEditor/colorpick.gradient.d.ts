declare namespace $DP.ColorDialogEditor {
    import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
    import DesignerGradient = $D.Silverlight.UI.Utilities.DesignerGradient;
    interface ColorGradientOptions {
        id: string;
        holder: JQuery;
        onChangeDesignerColor?: (color: DesignerColor) => void;
    }
    class ColorGradient {
        options: ColorGradientOptions;
        gradientPanel: JQuery;
        constructor(options: ColorGradientOptions);
        getView(): JQuery;
        render(): JQuery;
        reinitialize(designerColor: DesignerColor): void;
        addColor(gradientDefinition: DesignerGradient): void;
        getCssStyle(): string;
        generateDesignerColorObject(): DesignerColor;
        private createGradientDefinition;
        private setHandlerSliderInput;
        private setHandlerColorGradient;
        private showDialogForSelectColor;
        private getSelectedGradientColor;
        private updateGradientColor;
        private getBackgroundRGBAColorFromElement;
        private setHandlerDirectionsGradient;
        private setHandlerAddNewColorButton;
        private moveColorDown;
        private moveColorUp;
        private swapGradientColors;
        private removeColor;
        private handleSliderSlideStopEvent;
        private triggerColorSelectionChangedEvent;
        private resetSlidersMinMaxValues;
        private setMinValueSlider;
        private setMaxValueSlider;
        private refreshColorRowsStyle;
        private updatePreview;
        private createSliderRow;
        private handleSliderSlideEvent;
        private createGradientPanel;
    }
}
