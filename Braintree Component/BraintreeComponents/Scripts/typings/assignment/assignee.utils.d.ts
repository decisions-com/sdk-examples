/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Assignment {
    import AssigneeDto = $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto;
    import AssigneeType = $D.Framework.ServiceLayer.Services.Assignments.AssigneeType;
    interface AssignmentComboboxItem extends $DP.Common.ComboBoxItem {
        entity: AssigneeDto;
    }
    function searchForAssignment(assignmentId: string, text: string, skip: number, pageSize: number): Promise<AssignmentComboboxItem[]>;
    function search(assigneeType: AssigneeType, text: string, skip: number, pageSize: number): Promise<AssignmentComboboxItem[]>;
    function toComboboxItems(assignees: AssigneeDto[]): AssignmentComboboxItem[];
    function getAccountForAdd(account: AssigneeDto): AssignmentComboboxItem;
    function getGroupForAdd(group: AssigneeDto): AssignmentComboboxItem;
    function getFolderRightsForAdd(permission: AssigneeDto): AssignmentComboboxItem;
    function getRoleForAddTo(role: AssigneeDto): AssignmentComboboxItem;
}
