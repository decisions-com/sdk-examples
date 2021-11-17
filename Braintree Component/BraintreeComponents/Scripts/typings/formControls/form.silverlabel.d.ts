declare namespace $DP.Control {
    class SilverLabel extends SilverTextBlock {
        options: Silverdark.Components.SilverLabelOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverLabelOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(forHost: $DP.FormHost.DecisionsFormSurface): JQuery;
        bindEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        private getView;
        private create;
        private getLabelClasses;
        private getVerticalAlignment;
        private getLabelForAttr;
        private getHorizontalAlignment;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
