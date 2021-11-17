/// <reference path="../common/datadeftree.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../common/checkbox.d.ts" />
/// <reference path="../typings/core/generated/ThemeService.d.ts" />
/// <reference path="../dialog/dialog.input.d.ts" />
/// <reference path="theme.color.d.ts" />
/// <reference path="theme.color.variable.d.ts" />
declare namespace $DP.ThemeEditor {
    import ThemeEditVariable = $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode;
    interface ThemeEditOptions {
        host: JQuery;
        themeVariable: ThemeEditVariable;
        themeEditVariables: ThemeEditVariable[];
        readonly onVariableChanged?: (result: ThemeEditVariable) => void;
    }
    interface ThemeEditorPanelOptions {
        host?: JQuery;
        entityId: string;
        onCreated?: (panel: ThemeEditorPanel) => void;
    }
    const ThemeType: {
        UserPortal: string;
        Studio: string;
        Mobile: string;
    };
    class ThemeEditorPanel {
        private options;
        private $view;
        private rlThemeType;
        private tablesTree;
        private widthEditSection;
        private widthTableSection;
        private heightTopPanel;
        private themeEditVariables;
        private changedVariables;
        private selectedVariable;
        private themeService;
        constructor(options: ThemeEditorPanelOptions);
        render(): JQuery;
        resize(size?: {
            width: number;
            height: number;
        }): void;
        private resizePanel;
        private getParentSize;
        private resizeVerticalSplitter;
        private resizeTreeSection;
        private resizeEditorSection;
        getView(): JQuery;
        private initVerticalSplitter;
        private createView;
        private getVerticalSplitterMarkup;
        private getThemesTypeSectionMarkup;
        private createTree;
        private createRadioListThemeTypes;
        private createColorEditor;
        private createIconEditor;
        private createFontSizeEditor;
        private createFontWeightEditor;
        private createFontFamilyEditor;
        private addThemesToSave;
        saveTheme(onThemeSaved?: any): void;
        getChangesCount(): number;
        cancelChanges(): void;
        private renderRightPane;
        private renderVariableNameHeader;
        private clearVariableNameHeader;
    }
}
