/// <reference path="listbox.assigneeitem.d.ts" />
/// <reference path="../common/listbox.d.ts" />
/// <reference path="../common/listbox.restorableitem.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
declare namespace $DP.Assignment {
    import AssignmentFolderRights = $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights;
    import AssigneeDto = $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto;
    import AssigneeType = $D.Framework.ServiceLayer.Services.Assignments.AssigneeType;
    interface AssigneeListOptions {
        host?: JQuery;
        tabIndex?: string | number;
        rootStyle?: $DP.Common.StyleProps;
        suggestPageSize?: number;
        assignees?: AssigneeDto[];
        readonly onAdded?: (event: {
            origin: AssigneeList;
            item: AssigneeDto;
        }) => void;
        readonly onRemoved?: (event: {
            origin: AssigneeList;
            item: AssigneeDto;
        }) => void;
        readonly onRestore?: (event: {
            origin: AssigneeList;
            item: AssigneeDto;
        }) => void;
        readonly onLayerShown?: (e: {
            origin: AssigneeList;
            layer: $DP.Common.ComboBoxLayer;
        }) => void;
        readonly getSuggestedAssignees: (event: {
            origin: AssigneeList;
            text: string;
            loadedCount: number;
            pageSize: number;
        }) => Promise<$DP.Common.ComboBoxItem[]>;
    }
    class AssigneeList {
        private options;
        private view;
        private cbAddContainer;
        private listBox;
        private cbAddTo;
        constructor(options: AssigneeListOptions);
        getAssignees(predicate?: (item: AssigneeDto) => boolean): AssigneeDto[];
        focusOnAdd(): void;
        getView(): JQuery;
        addItem(assignee: AssigneeDto): void;
        deleteItems(assigneeIds: string[]): void;
        /**
         * return result accounts with added and without deleted accounts
         */
        getAccounts(): AssigneeDto[];
        getIdsAccounts(): string[];
        getEmailsAccounts(): string[];
        getDeletedGroups(): AssigneeDto[];
        getNamesGroups(): string[];
        getGroups(): AssigneeDto[];
        getIdsGroups(): string[];
        getFolderRights(): AssigneeDto[];
        getFolderRightsValue(): AssignmentFolderRights[];
        getIdsRoles(): string[];
        getRoles(): AssigneeDto[];
        getItemsByType(type: AssigneeType, predicate?: (item: AssigneeDto) => boolean): AssigneeDto[];
        getItems(predicate?: (item: AssigneeDto) => boolean): AssigneeDto[];
        setSize(size: {
            width: number;
            height: number;
        }): void;
        protected render(): JQuery;
        private createCbAddTo;
        private createListItems;
        private createListItem;
        private triggerOnAdded;
        private triggerOnRemove;
        private triggerOnRestore;
        private createRoleListItem;
        private createFolderRightListItem;
        private createGroupListItem;
        private createAccountListItem;
        private onRemoveListItem;
        private onRestoreListItem;
    }
}
