declare namespace $DP.Form.Controls {
    interface ISliderOptions {
        defaultValue?: number;
        min?: number;
        max?: number;
        holder?: JQuery;
        scaleType?: SliderScaleType;
        scaleTexts?: string[];
        sliderHandleCssClass?: string;
        defaultTextValue?: string;
        tabOrder?: number;
        showScale?: boolean;
        componentId?: string;
        onValueChange?: () => void;
    }
    enum SliderScaleType {
        Default = 0,
        Custom = 1
    }
    interface ISliderControl {
        addSliderTicksAndTexts(): any;
        setValue(value: string, raiseEvent: boolean): any;
        getValue(): string | number;
        setScaleTexts(value: string[]): any;
    }
    class SliderBase {
        options: ISliderOptions;
        static readonly INSTANCE_NAME = "_$DP_slider";
        static readonly TICKS_TEXT_CLASS = "dp-slider__ticktext";
        lastSetValue: number | string;
        numericValue: number;
        textdictionary: {
            [value: number]: string;
        };
        tooltip: JQuery;
        handler: JQuery;
        textValue: string;
        sliderContainer: JQuery;
        sliderScale: JQuery;
        mainSlider: JQuery;
        ticks: JQuery;
        constructor(options: ISliderOptions);
        static get(host?: JQuery): any;
        getStep(): number;
        getValue(): string | number;
        setValue(value: string, raiseEvent?: boolean): void;
        setSliderValue(value: any): void;
        addTooltip(): void;
        addSliderTicksAndTexts(): void;
        isCustomType(): boolean;
        addNumbersOnScale(): void;
        getNumberOfTicks(): number;
        addTextsOnScale(): void;
        getDifferenceBetweenTicks(): number;
        renderSliderTicksAndTexts(count: number, percent: number): void;
        hasTooltip(): boolean;
        getSliderView(): string;
        getScaleView(value: string): JQuery;
        initialize(): void;
    }
    class Slider extends SliderBase implements ISliderControl {
        options: ISliderOptions;
        constructor(options: ISliderOptions);
        create(): void;
        attachEvents(): void;
        adjustTooltipPosition(handle: any): void;
        setScaleTexts(value: string[]): void;
        setSliderValue(value: any): void;
    }
}
