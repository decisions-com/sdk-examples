declare namespace $DP.Common {
    function showDialogWithContext(options: {
        contextId: string;
        title: string;
        affirmativeText?: string;
        width?: number;
        height?: number;
        onOkClick?: (e: any, ce: ContextEditor) => void;
        onCancelClick?: () => void;
    }): void;
}
