declare namespace $DP.Dialogs {
    export interface MessageDialogSize {
        Width?: string | number;
        Height?: string | number;
    }
    const imageIconsClass: {
        Information: string;
        Question: string;
        Warning: string;
        Error: string;
    };
    export interface MessageDialogProps {
        title: string;
        message: string | string[];
        buttons: string | string[];
        icon: keyof typeof imageIconsClass;
        buttonClickHandler?: (buttonName: string) => void;
        size?: MessageDialogSize;
        showCopyTextBtn?: boolean;
        canMaximize?: boolean;
        canUserSelect?: boolean;
        onClose?: () => void;
    }
    export class MessageDialog {
        private options;
        private buttons;
        private cssClass;
        constructor(options: MessageDialogProps);
        show(): JQuery;
        private getMessage;
        private getImageStyleClass;
        private getButtons;
    }
    export {};
}
