declare namespace $DP.Dialogs {
    interface InputDialogOptions {
        title: string;
        onOk: (event: any, text: any) => void;
        onCancel?: (event: any) => void;
        label?: string;
        maxLength?: number;
        isRequired?: boolean;
        size?: {
            width?: number;
            height?: number;
        };
    }
    function showInputDialog(options: InputDialogOptions): JQuery;
}
