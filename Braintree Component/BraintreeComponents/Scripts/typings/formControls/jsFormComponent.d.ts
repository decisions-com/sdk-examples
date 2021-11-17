/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.Controls.d.ts" />
import JSBasedComponentOptions = $D.Framework.Design.Form.JSBased.JSBasedComponentOptions;
import JSBasedActionComponentOptions = $D.Framework.Design.Form.JSBased.JSBasedFormActionComponentOptions;
import JSBasedDataComponentOptions = $D.Framework.Design.Form.JSBased.JSBasedFormDataComponentOptions;
declare namespace $DP.Form.Controls {
    interface JSBasedComponentInterface {
        initialize(host: JQuery, component: any): void;
        resize(height: number, width: number): void;
        setValue?(data: any): void;
        getValue?(): any;
    }
}
declare namespace $DP.Control {
    interface JSBasedActionComponent {
        selectPath(path: string): any;
    }
    interface JSBasedPageComponentOptions {
        componentId: string;
        componentName: string;
        jsFileName: string;
        jsClassName: string;
        requestedWidth: number;
        requestedHeight: number;
        designTimeDataPairs: DataPair[];
    }
    abstract class JSBasedComponent extends FormComponentBase {
    }
    abstract class JSBasedFormComponent extends JSBasedComponent {
    }
    class JSBasedFormActionComponent extends JSBasedFormComponent implements JSBasedActionComponent {
        options: JSBasedActionComponentOptions;
        constructor($controlLayout: JQuery, options: JSBasedActionComponentOptions);
        control: $DP.Form.Controls.JSBasedComponentInterface;
        outcomePath: string;
        designData: any;
        get PossibleOutcomeNames(): string[];
        get DesignTimeData(): any;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        attachEvents(): void;
        getActionName(): string;
        getControl(): JQuery;
        selectPath(path: string): void;
        renderhtml(): JQuery;
    }
    class JSBasedFormDataComponent extends $DP.Control.JSBasedFormComponent {
        options: JSBasedDataComponentOptions;
        private designData;
        constructor($controlLayout: JQuery, options: JSBasedDataComponentOptions);
        control: $DP.Form.Controls.JSBasedComponentInterface;
        fileLoaded: boolean;
        controlData: any;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        attachEvents(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        renderhtml(): JQuery;
    }
    class JSBasedPageComponent {
        private $control;
        private options;
        control: $DP.Form.Controls.JSBasedComponentInterface;
        fileLoaded: boolean;
        designData: {};
        constructor($control: JQuery, options: JSBasedPageComponentOptions);
        static create($holder: JQuery, options: JSBasedPageComponentOptions): JSBasedPageComponent;
        intialize(): void;
        attachEvents(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
