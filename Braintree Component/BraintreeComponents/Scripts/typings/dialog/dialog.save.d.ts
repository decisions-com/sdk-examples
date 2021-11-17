declare namespace $DP.Dialogs {
    interface DependencyWarningDialogOptions {
        onSave: () => void;
        onCancel?: () => void;
        entityType: string;
        totalDependencies: number;
    }
    const OnDesignerCloseMessage = "You are about to close the designer. Do you want to save your changes?";
    class SaveDialog {
        static noChangesMessage: string;
        static show(options: dpComponents.ISaveDialogProps): Promise<JQuery>;
    }
    class DependencyWarningDialog {
        static show(options: DependencyWarningDialogOptions): JQuery;
    }
    interface SaveBackupOptions extends Omit<dpComponents.ISaveDialogProps, 'onSave'> {
        onBackupSave?: (name: string, description: string) => void;
        nameIsRequired?: boolean;
        descriptionIsRequired?: boolean;
    }
    class SaveBackupDialog {
        static show(options: SaveBackupOptions): void;
        private static createDialogContent;
    }
}
