// Type definitions for jQuery jqgrid Plugin 1.3
// Project: https://github.com/tonytomov/jqGrid
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />
interface JQueryJqGridColumn {
    name: string;
    index: string;
    hidden?: boolean;
    sortable?: boolean;
    search?: boolean;
    width?: number;
    formatter?: (cellvalue: any, options: any, rowObject: any) => any;
}

interface IJqGridJsonReader {
    repeatitems: boolean;
    root(obj: any): any;
    page(obj: any): any;
    total(obj: any): number;
    records(obj: {data: any[]}): number;
}

interface JQueryJqGridOptions {
    datatype?: string;
    mtype?: string;
    autoencode?: boolean;
    pager?: string;
    rowNum?: number;
    rowList?: number[];
    colNames?: string[];
    colModel?: JQueryJqGridColumn[];
    sortname?: string;
    sortorder?: string;
    multiselect?: boolean;
    multiboxonly?: boolean;
    forceFit?: boolean;
    height?: number;
    width?: number;
    shrinkToFit?: boolean;
    url?: string;
    jsonReader?: IJqGridJsonReader;
    gridComplete?: () => void;
    cellEdit?: boolean;
    cellsubmit?: string;
    data?: any;
    beforeSelectRow?: (rowid: string | number, e: JQueryEventObject) => boolean;
    onSortCol?: (index: number, iCol: number, sortorder: number) => void;
    beforeEditCell?: (rowId: string | number) => void;
    afterEditCell?: (id: string, name: string, val: string, iRow: string, iCol: string) => void;
    afterSaveCell?: (id: string, name: string, val: string, iRow: number, iCol: number) => void;
    resizeStop?: (nw, indx: number) => void;
    onRightClickRow?: (rowid: string | number, e: JQueryEventObject) => void;
    onCellSelect?: (rowId: string | number, ci, tdHtml: string, e: JQueryEventObject) => void
    onSelectAll?: () => void;
    onSelectRow?: (rowId: string | number, status, e: JQueryEventObject) => void;
    afterRestoreCell?: (id: string, val: string, iRow: string, iCol: string)=>void;
}

interface JQueryJqGridStatic {
    (): JQuery;
    (gridName: string): any;
    (gridName: string, propName: string): any;
    (gridName: string, obj: any): any;
    (gridName: string, id: any, colname: any): any;
    (options: JQueryJqGridOptions): JQuery;
}

interface JQueryStatic {
    jqGrid?: JQueryJqGridStatic;
}

interface JQuery {
    jqGrid?: JQueryJqGridStatic;

    setGridParam(obj: any): void;
}