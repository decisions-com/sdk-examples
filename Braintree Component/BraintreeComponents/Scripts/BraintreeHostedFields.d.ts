/// <reference path="typings/decisions.controls/decisions.formhost.d.ts" />
/// <reference path="typings/formcontrols/form.contentcontrol.d.ts" />
/// <reference path="typings/formcontrols/form.datacontrol.d.ts" />
declare namespace $DP.Control {
    class BraintreeHostedFieldsFormControl extends DataContentBase {
        $controlLayout: JQuery;
        options: any;
        constructor($controlLayout: JQuery, options: any);
        get CardHolderNameText(): string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        clientToken?: string;
        shortTypeName?: string;
        hostedFieldsCreatedInstance: any;
        getControl(): JQuery;
        setValue(data: FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): FormHost.DecisionsControlData[];
        getValueAsync(): Promise<FormHost.DecisionsControlData[]>;
        renderhtml(): JQuery;
        renderLayout(layoutProperties: any): JQuery;
    }
}
