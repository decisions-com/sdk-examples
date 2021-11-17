/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/AssignmentService.d.ts" />
/// <reference path="assigneelist.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../common/checkbox.d.ts" />
/// <reference path="../common/mobile/combobox.mobile.d.ts" />
declare namespace $DP.Assignment {
    interface AssignmentPanelOptions {
        readonly host?: JQuery;
        readonly optionalMessage?: string;
        /**
         * Number is used as key for @param priorities
         */
        readonly currentPriority: number;
        readonly priorities: Array<{
            Key: number;
            Value: string;
        }>;
        readonly actionUniqueName: string;
        readonly assignmentId: string;
        readonly onCreated?: (panel: AssignmentPanel) => void;
    }
    class AssignmentPanel {
        private options?;
        private view;
        private selectPriority;
        private optionalMessage;
        private chSendOnlyNew;
        private assigneetList;
        private selectedPriority;
        private assignmentService;
        constructor(options?: AssignmentPanelOptions);
        getView(): JQuery;
        getPriority(): string;
        saveChanges(): void;
        private render;
        private triggerOnCreated;
        private initAssigneeList;
        private initSelectPriority;
    }
    interface AssignmentDialogOptions {
        title?: string;
        width?: string | number;
        height?: string | number;
    }
    function showAssignmentPanel(assignmentPanel: AssignmentPanel, options: AssignmentDialogOptions): JQuery;
}
