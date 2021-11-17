/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
declare namespace $DP.Designers.Forms.Editors {
    class FormDataPickerEditor {
        private node;
        private sessionId;
        private isInput;
        private input;
        private pick;
        private data;
        private typingTimer;
        constructor(node: JQuery, sessionId: string, isInput: boolean);
        private get contextId();
        private get path();
        private updateDataValue;
        afterNodeUpdate(): void;
        static showPickerDialog(selectionCallback: any, onNodeExpand: any): void;
        onNodeExpand(context: $DP.Common.DPTreeContext, callback: (nodes: any[]) => void): Promise<void>;
        static getDataPathFromNode(context: $DP.Common.DPTreeContext): string;
        static getNodesFromDataDescriptions(dataDescriptions: $D.Framework.Design.Flow.Mapping.DataDescription[], dataPath: string): {
            text: string;
            children: boolean;
            data: {
                info: DataDescription;
                path: string;
            };
        }[];
        static createTreeNode(node: $D.Framework.Design.Flow.Mapping.DataDescription, dataPath: string): {
            text: string;
            children: boolean;
            data: {
                info: DataDescription;
                path: string;
            };
        };
        static getFormDataDescriptionsAsync(context: $DP.Common.DPTreeContext, dataPath: string, isInput: boolean, rootData: DataDescription[]): Promise<DataDescription[]>;
        private onDataPicked;
        private submitTextboxValue;
        private submitFormDataPickerValue;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
