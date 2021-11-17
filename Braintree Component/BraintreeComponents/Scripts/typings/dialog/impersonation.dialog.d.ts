declare namespace $DP.Dialogs {
    class ImpersonationDialog {
        CanUseAccount: boolean;
        AccountPickerControlInstanceId: string;
        DialogHtml: string;
        Width: number;
        Height: number;
        IsImpersonating: boolean;
        WindowTitle: string;
        static ShowImpersonateDialog(): void;
        private static OpenImpersonateDialog;
        private static OpenImpersonateOverlay;
        private static GetImpersonateUserDialogData;
        private static AttachImpersonateDialogEvents;
        static RemoveImpersonateOverlay(e: any): void;
    }
}
