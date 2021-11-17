/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../merge/MergeTreeDataLoader.d.ts" />
import DataLoader = $DP.Controls.RichText.IMergeExpander;
import DataDescription = $D.Framework.Design.Flow.Mapping.DataDescription;
declare namespace $DP.Editors.RowLinkTextEditor {
    class RowLinkTextEditorDataLoader implements $DP.Controls.RichText.IMergeExpander {
        private _allowFormatting;
        private _fields;
        constructor(allowFormatting: boolean, fields: string[]);
        LoadData(path: string): JQueryPromise<DataDescription[]>;
        GetAutoExpandedNodes(): string[];
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
