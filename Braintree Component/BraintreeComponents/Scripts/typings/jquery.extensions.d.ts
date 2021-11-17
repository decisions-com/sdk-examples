interface JQueryStatic {
    cleanData(elem: any): any;
    emptyForce(): any;
    removeChildForce(parent: any): any;
    center(): {
        x: number;
        y: number;
    };
    boundaries(): {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    outerSize(includeMargin?: boolean): {
        width: number;
        height: number;
    };
    hasVerticalScrollBar(): boolean;
    hasHorizontalScrollBar(): boolean;
    forceRedraw(): JQuery;
    getRealSize(outer: boolean): any;
    isVisible(): boolean;
    OneWordOnOneLine(): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
