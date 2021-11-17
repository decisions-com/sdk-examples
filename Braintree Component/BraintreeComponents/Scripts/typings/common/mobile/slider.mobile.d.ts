declare namespace $DP.Mobile.Common {
    class MobileSlider extends $DP.Form.Controls.SliderBase implements $DP.Form.Controls.ISliderControl {
        options: $DP.Form.Controls.ISliderOptions;
        constructor(options: $DP.Form.Controls.ISliderOptions);
        mobileSlider: JQuery;
        create(): void;
        attachEvents(): void;
        adjustTooltipPosition(): void;
        setScaleTexts(value: string[]): void;
        getRangeInput(): string;
    }
}
