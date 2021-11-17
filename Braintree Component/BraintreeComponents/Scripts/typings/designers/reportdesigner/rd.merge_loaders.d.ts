/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../merge/MergeTreeDataLoader.d.ts" />
declare namespace $DP.Designers.Reports {
    import DataDescription = $D.Framework.Design.Flow.Mapping.DataDescription;
    class ReportFieldsMergeDataLoader implements $DP.Controls.RichText.IMergeExpander {
        private _allowFormatting;
        protected _reportContextId: string;
        AllowFormatting: boolean;
        constructor(reportContextId: string, allowFormatting?: boolean);
        LoadData(path: string): JQueryPromise<DataDescription[]>;
        GetAutoExpandedNodes(): string[];
    }
    class ReportFieldsCalcMergeDataLoader extends ReportFieldsMergeDataLoader implements $DP.Controls.RichText.IMergeWithCalculatedDataLoader {
        LoadCalculateData(): JQueryPromise<string[]>;
    }
    class ReportImagesDataLoader extends ReportFieldsCalcMergeDataLoader {
        ReportContextId: string;
        AllowFormatting: boolean;
        AllowTypes: string;
        constructor(reportContextId: string, allowFormatting: boolean);
        LoadCalculateData(): JQueryPromise<string[]>;
        LoadData(path: string): JQueryPromise<DataDescription[]>;
    }
    interface DecisionsTypeExtender extends $D.Framework.Design.Flow.Mapping.DecisionsType {
        FullName: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
