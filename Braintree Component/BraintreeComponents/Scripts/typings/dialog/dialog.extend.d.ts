declare module $DP {
    interface DialogToExtend {
        options: DialogOptions;
        uiDialog: JQuery;
        element: JQuery;
        uiDialogTitlebar: JQuery;
        _makeResizable: () => void;
        _makeDraggable: () => void;
    }
    class DialogExtend {
        private dialog;
        private resizeableHandle;
        private btnMinimise;
        private btnRestore;
        private btnMaximize;
        private originalWidth;
        private originalHeight;
        private originalLeft;
        private originalTop;
        private previousState;
        constructor(dialog: DialogToExtend);
        initialize(): void;
        private createMaximizeButton;
        private createRestoreButton;
        private createMinimiseButton;
        private showRestore;
        private hideRestore;
        private showMaximize;
        private hideMaximize;
        private showMinimise;
        private hideMinimise;
        private savePosition;
        private restorePosition;
        private checkPosition;
        private restoreSize;
        private maximizedResizeHandler;
        restore(): boolean;
        normalize(): void;
        private minimize;
        private maximize;
        static setParentIdToDialog(dialogElement: JQuery, parentDialogId: string): void;
        static getDialogId(element: JQuery): string;
        static resetOverlays(): void;
    }
}
