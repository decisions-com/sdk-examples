/// <reference path="../typings/core/generated/AccountService.d.ts" />
/// <reference path="../typings/core/generated/GroupService.d.ts" />
/// <reference path="../assignment/assigneelist.d.ts" />
/// <reference path="form.datacontrol.d.ts" />
/// <reference path="form.componentbase.d.ts" />
/// <reference path="../Decisions.Controls/Decisions.FormHost.d.ts" />
declare namespace $DP.Control {
    import Account = $D.Framework.ServiceLayer.Services.Accounts.Account;
    import Group = $D.Framework.ServiceLayer.Services.Accounts.Group;
    import AssigneeDto = $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto;
    class AccountAndGroupListControl extends $DP.Control.DataContentBase {
        options: Silverdark.Components.AccountAndGroupListControlOptions;
        private userList;
        constructor(host: JQuery, options: Silverdark.Components.AccountAndGroupListControlOptions);
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        groupToAssigneeDto(group: Group): AssigneeDto;
        accountToAssigneeDto(account: Account): AssigneeDto;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
        private createAccountAndGroupList;
        private getAccountAndGroupList;
        private createListControl;
        renderhtml(): JQuery;
    }
}
