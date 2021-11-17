/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Editors {
    import NumericEditorType = $D.Framework.Design.Properties.NumericEditorType;
    interface DigitsEditorOption {
        instanceId: string;
        editingContextID: string;
        path: string[];
        numericType: NumericEditorType;
        isNullableType: boolean;
        autoSubmitInterval: number;
        ShowRTEFilter: boolean;
        lastSubmittedValue: string;
        editorContainer: JQuery;
        callbkRTEFilter: string;
        numberGroupSeparator: string;
        numberDecimalSeparator: string;
        tabIndex: number;
    }
    class DigitsEditor {
        private options;
        textBoxValSubmitTimer: number;
        private numberBox;
        constructor(options: DigitsEditorOption);
        get allowDecimal(): boolean;
        initializeDigitsEditor(): void;
        afterNodeUpdate(): void;
        private submitAfterDelay;
        private submitDigitEditorValue;
        private submitDigitsValue;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
