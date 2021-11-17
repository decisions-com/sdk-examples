/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
declare namespace $DP.Controls {
    class ControlDisposeHelper {
        static Initialize(): void;
        static Controls: DisposeControl[];
        static WatcherRunningTime: number;
        static IsWatcherRunning: boolean;
        static WatcherToken: any;
        static IsControlPresent(controlId: string): boolean;
        static AddToDisposeListener(controlId: string, onDisposeFunctionCallback?: string, onDisposeBeforeDeletingElementFromDomFunction?: string): void;
        static RemoveFromDisposeListener(controlId: string): void;
        static CallForceDispose(skipCheck: boolean): void;
        static CallDisposeBeforeDeletingElementFromDom(domElementAboutToDelete: JQuery, shouldDeleteListener: boolean): void;
    }
    class DisposeControl {
        Id: string;
        CallbackFunctionString: string;
        DisposeBeforeDeletingElementFromDom: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
