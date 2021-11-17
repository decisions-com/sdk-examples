declare namespace $DP.Control {
    class SilverLatitudeAndLongitude extends ContentBase implements $DP.FormHost.IDataProducer {
        options: Silverdark.Components.SilverLatitudeAndLongitudeOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverLatitudeAndLongitudeOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        private latitude;
        private longitude;
        setPositionValues: (position: any) => void;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
    }
}
