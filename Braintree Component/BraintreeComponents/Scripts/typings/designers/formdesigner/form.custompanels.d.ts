/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    class QuickAddPanelOptions {
        left: number;
        top: number;
        width: number;
        height: number;
        content: JQuery;
        showAddLabelHint: boolean;
        lines: number;
        lineHeight: number;
        contentHeight: number;
        confirmMessage: string;
        additionalMessage: string;
    }
    class QuickAddPanel {
        static panelId: string;
        static buildControlReplacementView(item: $D.Framework.Design.Form.ControlReplacementInfo, checked: boolean): JQuery;
        static show(options: QuickAddPanelOptions): JQuery;
        static close(): void;
        static setHintLabelVisibility(show: boolean): void;
        private static onDocumentClick;
    }
    class MultipleSelectionPanelOptions {
        left: number;
        top: number;
        width: number;
        height: number;
        content: JQuery;
        contentHeight: number;
    }
    class MultipleSelectionPanel {
        static panelId: string;
        static buildControlCommonView(): JQuery;
        static show(options: MultipleSelectionPanelOptions): JQuery;
        static isPanelDisplayed(): boolean;
        static getAlignmentCommandUI(): JQuery;
        static getSizeCommandUI(): JQuery;
        static getDistributeCommandUI(): JQuery;
        static getEditCommandUI(): JQuery;
        static getDeleteCommandUI(): JQuery;
        static setAlignment(enabled: boolean): void;
        static setSize(enabled: boolean): void;
        static setDistribution(enabled: boolean): void;
        static close(): void;
        private static onDocumentClick;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
