/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
import SubCalcFieldDefinition = $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition;
import DesignerColor = $D.Silverlight.UI.Utilities.DesignerColor;
import ChartType = $D.Framework.Design.Report.ChartType;
declare function SetContextProviderValue(editingContext: string, path: string[], dataPair: DataPair, element: JQuery, callbackfunction?: Function): void;
interface ChartSeriesEditorModel {
    InstanceId: string;
    ContextId: string;
    EditorModelPath: string;
    Series: SubCalcFieldDefinition[];
    AvailableSeries: SubCalcFieldDefinition[];
    IsMultiChartSeries: boolean;
    ChartType: ChartType;
}
declare class ChartSeriesEditor {
    _model: ChartSeriesEditorModel;
    _modelContextPath: string[];
    _unusedSeries: SubCalcFieldDefinition[];
    constructor(model: ChartSeriesEditorModel);
    get InstanceId(): string;
    get ContextId(): string;
    get ContextPath(): string[];
    get CanAddMoreSeries(): boolean;
    get CanMoveSeriesUpAndDown(): boolean;
    get Series(): SubCalcFieldDefinition[];
    get IsHideSeriesColorOption(): boolean;
    AddSeries(): void;
    RemoveSeries(index: number): void;
    MoveSeriesUp(index: number): void;
    MoveSeriesDown(index: number): void;
    SetSeriesField(index: number, data: any): void;
    SetSeriesColor(index: number, designerColor: DesignerColor): void;
    private InitializeEditor;
    private SaveModel;
    private GetRowIndex;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
