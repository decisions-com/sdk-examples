/// <reference path="../typings/signature-pad/signature_pad.d.ts" />
import SignaturePadLib = SignaturePad;
declare namespace $DP.Control {
    enum SignaturePadBackgroundType {
        Transparent = 0,
        Color = 1
    }
    class SignaturePad extends $DP.Control.DataContentBase {
        options: Silverdark.Components.SignaturePadOptions;
        static dataKey: string;
        private canvas;
        private signaturePad;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SignaturePadOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        bindEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        renderOnDesignTime(): JQuery;
        renderhtml(): JQuery;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
