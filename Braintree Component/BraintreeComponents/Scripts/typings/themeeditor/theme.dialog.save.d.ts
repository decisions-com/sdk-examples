declare namespace $DP.ThemeEditor {
    interface SaveDialogOptions {
        onSave: () => void;
        onDontSave: () => void;
        onSaveAndReload: () => void;
    }
    interface ReloadDialogOptions {
        onReload: () => void;
        onDontReload: () => void;
    }
    class SaveThemeDialog {
        static readonly APPLY_CHANGES_PHRASE = "Applying theme changes might take a few minutes and requires the portal to be reloaded. Do you want to apply changes and reload the portal?";
        static showSaveDialog(options: SaveDialogOptions): JQuery;
        static showReloadDialog(options: ReloadDialogOptions): JQuery;
    }
}
