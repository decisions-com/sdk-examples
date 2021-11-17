declare namespace $DP.ActionHandlers {
    interface AccountsPickerOptions {
        id: string;
        selectedAccounts: string[];
        entityId: string;
        actionUniqueName: string;
        pickerModel: string;
        title?: string;
        typeName: string;
        holder: JQuery;
    }
    class PickAccountsActionHandler {
        private options;
        private view;
        private addAccountButton;
        private removeAccountButton;
        private saveButton;
        private dialogView;
        private listBox;
        private selectedAccounts;
        constructor(options: AccountsPickerOptions);
        create(): void;
        private attachEvents;
        private getView;
        private getDialogView;
        private updateAccounts;
    }
}
