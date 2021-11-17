/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Actions {
    interface AssignmentPanelOptions {
        Id: string;
        Priorities: Array<{
            Key: number;
            Value: string;
        }>;
        /**
         * Number is used as key for @param Priorities
         */
        CurrentPriority: number;
        InvokeEntityId: string;
    }
    function openAssignmentDialog(action: AssignmentPanelOptions): void;
}
