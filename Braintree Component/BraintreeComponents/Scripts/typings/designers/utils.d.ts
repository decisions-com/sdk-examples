/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../typings/report-helper/report-helper.d.ts" />
/// <reference path="../typings/core/generated/DataStructureService.d.ts" />
/// <reference path="../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../typings/core/generated/FormDesignerService.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/moment/moment.d.ts" />
/// <reference path="../typings/core/generated/MatrixRuleEditService.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="../typings/propertygrid.helper/propertygrid.helper.d.ts" />
/// <reference path="../editors/timespan.editor.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../typings/dom-to-image/index.d.ts" />
declare namespace $DP {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    export function findDataPair(list: DataPair[], name: string): DataPair;
    export function getByteThingFromGoString(input: string): number[];
    export function fillObjectFromDataPairs<T = any>(target: any, data: DataPair[]): T;
    export function generatePreviewURL(element: JQuery, filter?: (node: Node) => boolean): Promise<string>;
    export function generatePreview(element: JQuery): JQueryPromise<number[]>;
    export function domToImageDefaultFilters(node: Node): boolean;
    export function logDebuggerMessage(message: string, inlineCss: string): void;
    export function showOverlay($elem?: JQuery): void;
    export function hideOverlay($elem?: JQuery): void;
    export function getDataPairObject(outputValue: any): any;
    interface IWaitUntilElementExists {
        onAdd: () => void;
        onRemove: () => void;
        targetId: string;
    }
    export function waitUntilElementExists({ onAdd, onRemove, targetId }: IWaitUntilElementExists): MutationObserver;
    export {};
}
declare namespace $DP.DateUtilities {
    function parseFromJson(rawDate: any): Date;
    function dateToString(date: Date, mask: string): string;
    /**
     * Transform timespan to display format.
     * @returns Result string contains 2 units if first one less 5 and otherwise show 1 unit. (E.g. 1 day, 4 hours)
     * @param timeSpan
     */
    function transformForDisplay(timeSpan: Editors.TimeSpanValues): string;
    /**
     * Convert time like `10:20:00` to server time `P0DT10H20M0S`
    */
    function timeToServerFormat(time: string): string;
    /**
     * Convert client format of TimeSpan to server format (E.g P5DT4H2M50S)
     * @param time
     */
    function timeSpanToServerFormat(time: Editors.TimeSpanValues): string;
    /**
     * Convert server format of TimeSpan to client format
     * @param timeSpan
     */
    function timeSpanToClientFormat(timeSpan: string): Editors.TimeSpanValues;
}
declare namespace $DP.Designers {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    import ValidationIssue = $D.Framework.ValidationIssue;
    type UndoRedoService = FlowEditServiceStatic | FormDesignerServiceStatic | RuleEditServiceStatic | MatrixRuleEditServiceStatic;
    export function undo(serviceClient: UndoRedoService, sessionId: string, snapshot?: string): Promise<void>;
    export function redo(serviceClient: UndoRedoService, sessionId: string, snapshot?: string): Promise<void>;
    export class TemporizedAction {
        private handler;
        private delay;
        private executionCallback?;
        private handle;
        static execute: (callback: any, delay: number, id: string) => void;
        constructor(handler: () => void, delay: number, executionCallback?: () => void, autoStart?: boolean);
        start(): void;
        stop(): void;
        private run;
        isWaiting(): boolean;
        reset(): void;
    }
    export function editCompleteContext(host: JQuery, callback: () => void): void;
    export function processResultWithEventsAsync<T>(promise: Promise<$D.Framework.Design.Properties.ResultWithEvents>): Promise<T>;
    export function processEventReturn(result: $D.Framework.Design.Form.EventsReturn): void;
    export function processEvents(events: DataPair[]): void;
    export function processEventAndDataReturn<T>(result: $D.Framework.Design.Form.EventsAndDataReturn): T;
    export function getErrorMesssageHtml(): string;
    export function setErrorMessage(errEl: JQuery, text: string): void;
    export function makeValidationIcon(issues: ValidationIssue[]): JQuery;
    export function updateValidationIcon(icon: JQuery, issues: ValidationIssue[]): void;
    export function attachRuleValidationTooltip(element: JQuery, validationIssues: Array<ValidationIssue>): void;
    export {};
}
declare namespace $DP.FileUtilities {
    function downloadFile(url: string, filename?: string): void;
    function getFileExtension(fileName: string): string;
}
declare namespace $DP.ColorUtils {
    function isTransparentColor(color: string): boolean;
}
declare namespace $DP.ImageUtils {
    interface imageResizeOptions {
        element: JQuery;
    }
    function resize(event: Event, options: imageResizeOptions): void;
    function getImageInfoUrl(info: $D.Framework.ServiceLayer.Services.Image.ImageInfo, width?: number, height?: number, color?: string | undefined): string;
    function getStoredSvgImageInfoUrl(imageId: string): string;
    function getImageUrlFromBytes(imageData: number[]): string;
    function blobToImage(blob: Blob, height: number, width: number): Promise<HTMLCanvasElement>;
}
declare namespace $DP.CssUtils {
    interface CssDocumentInfo {
        documentName: string;
        modifiedDate: string;
    }
    function loadDocuments(documents: CssDocumentInfo[], parent: HTMLElement): Promise<void>;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
