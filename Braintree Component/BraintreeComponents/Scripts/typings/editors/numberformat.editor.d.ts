/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Editors {
    interface NumberFormatEditorOptions {
        instanceId: string;
        formatString: string;
        interval: number;
        path: string[];
        editingContextId: string;
    }
    class NumberFormatEditor {
        private options;
        private formatSpecifier;
        private formatSpecifierChar;
        private numberOfDecimalPalces;
        private appendString;
        private appendStringSubmitTimer;
        private numberFormatEditorMainDiv;
        private appendStringTextBox;
        private stringFormatSpecifierCombo;
        private decimalPlacesCombo;
        constructor(options: NumberFormatEditorOptions);
        initialize(): void;
        attachEvents(): void;
        parseFormatString(): void;
        setFormatSpecifier(): void;
        setNumberFormatValue(): void;
        createFormatString(): string;
        onStringFormatValueChanged(data: any): void;
        onDecimalPlacesValueChanged(data: any): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
