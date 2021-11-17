declare namespace $DP.Control {
    class SilverCaptureImagePanel extends ActionControl implements $DP.FormHost.IDataProducer {
        options: Silverdark.Components.SilverCaptureImagePanelOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCaptureImagePanelOptions);
        private mediaStream;
        private $video;
        private $captureButton;
        private imageData;
        private video;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setVideo(): Promise<void>;
        renderhtml(): JQuery;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getActionName(): string;
        getControl(): JQuery;
    }
}
