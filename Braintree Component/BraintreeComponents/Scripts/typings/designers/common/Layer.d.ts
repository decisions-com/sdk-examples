/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/site/site.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare module $DP.Common {
    class Layer {
        StickTo: JQuery;
        $Layer: any;
        private id;
        constructor(StickTo: JQuery);
        Show(): void;
        get AutoClose(): boolean;
        get ShowCloseButton(): boolean;
        get LayerType(): $DP.Common.LayerType;
        GetZIndex(): number;
        GetSize(): {
            height: number;
            width: number;
        };
        GetLayerClass(): string;
        BuildLayerView(): string;
        GetElement(): JQuery;
        GetPosition(): JQueryCoordinates;
        private selfEventSender;
        private RegisterAutoCloseEvent;
        private onOutsideClick;
        Close(): void;
        AfterClose: () => void;
        BeforeClose: () => void;
    }
    enum LayerType {
        New = 0,
        Old = 1
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
