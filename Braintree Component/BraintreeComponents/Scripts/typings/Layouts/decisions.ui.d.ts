/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/propertygrid.helper/propertygrid.helper.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../common/edges.d.ts" />
/// <reference path="../portal/foldertree.d.ts" />
/// <reference path="../typings/helpers.d.ts" />
/// <reference path="../typings/jquery/jquerymobile.d.ts" />
declare namespace $DP.UI {
    class Constants {
        static _isBodyScrollable: boolean;
        static get IsBodyScrollable(): boolean;
        static updateDocumentHeightAndWidthVariable(): void;
        static _documentHeight: any;
        static get DocumentHeight(): number;
        static set DocumentHeight(value: number);
        static _documentWidth: any;
        static get DocumentWidth(): number;
        static set DocumentWidth(value: number);
        static MarginAtBottomOfPortal: number;
        static MarginAtRightOfPortal: number;
        static SpaceAtBottomOfPortalForPage: number;
        static ScrollbarWidth: any;
        static MediaMinScreenWidth: number;
    }
    class Rect {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
    }
    class Helper {
        static PropertyGridResize(elem: any, newHeight: any, newWidth: any): void;
        static Resize(): void;
        static GetScrollBarWidth(): number;
        static IsElementVisible(elt: any, parentContainer: any): boolean;
        static BrowserHasHorizontalScrollBar(): boolean;
        static BrowserHasVerticalScrollBar(): boolean;
        static esureVerticalScroll(elem: JQuery, scrollParent?: JQuery): boolean;
        static calculateVerticalScroll(elem: JQuery, scrollTop: number, scrollParent?: JQuery): number;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
