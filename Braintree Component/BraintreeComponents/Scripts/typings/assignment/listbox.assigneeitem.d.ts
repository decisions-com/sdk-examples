declare namespace $DP.Assignment {
    import AssigneeDto = $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto;
    interface CreateFromOptions {
        isNew: boolean;
        entity: AssigneeDto;
        onDelete(item: $DP.Common.RestorableListBoxItem<AssigneeDto>, entity: AssigneeDto): any;
        onRestore(item: $DP.Common.RestorableListBoxItem<AssigneeDto>, entity: AssigneeDto): any;
    }
    class AssigneeListBoxItem extends $DP.Common.RestorableListBoxItem<AssigneeDto> {
        protected options: $DP.Common.RestorableListItemOptions<AssigneeDto>;
        constructor(options: $DP.Common.RestorableListItemOptions<AssigneeDto>);
        static createFromRole(options: CreateFromOptions): AssigneeListBoxItem;
        static createFromFolderRight(options: CreateFromOptions): AssigneeListBoxItem;
        static createFromGroup(options: CreateFromOptions): AssigneeListBoxItem;
        static createFromAccount(options: CreateFromOptions): AssigneeListBoxItem;
        static createAvatarGroup(): JQuery;
        static createAvatarFolderPermission(): JQuery;
        static createAvatarRole(): JQuery;
        static createAvatarPerson(account: AssigneeDto): JQuery;
        private static createHint;
        private static createBadgeNewItem;
    }
    interface AvatarOptions {
        host?: JQuery;
        /**
        * The backgroundColor of the avatar
        */
        backgroundColor?: string;
        /**
        * The letter's color
        */
        color?: string;
        /**
        * This is the size of the avatar in pixels
        */
        size?: number;
        /**
        * The css class name of the root element
        */
        className?: string;
        children?: JQuery;
    }
    class Avatar {
        private options;
        private view;
        constructor(options: AvatarOptions);
        render(): JQuery;
        protected getView(): JQuery;
        private applyStyle;
    }
}
