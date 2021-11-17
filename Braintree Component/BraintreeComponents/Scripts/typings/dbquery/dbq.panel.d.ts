/// <reference path="../typings/core/generated/DBQueryService.d.ts" />
/// <reference path="../common/combobox/combobox.d.ts" />
/// <reference path="../common/datadeftree.d.ts" />
/// <reference path="../common/spinner.d.ts" />
/// <reference path="../dialog/dialog.input.d.ts" />
/// <reference path="dbq.result-panel.d.ts" />
/// <reference path="dbq.editor.d.ts" />
/// <reference path="dbq.querygenerator.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
/// <reference path="../actions/actionhandlers.d.ts" />
declare namespace $DP.DBQuery {
    import DatabaseQuery = $D.Framework.ServiceLayer.Services.DBQuery.DatabaseQueryDto;
    interface DBQueryEditorPanelOptions {
        host?: JQuery;
        entityId: string;
        /**
        * @description function called when panel fully created
        */
        onCreated?: (panel: DBQueryEditorPanel) => void;
        /**
        * @description function called when query was created
        */
        onCreateQuery?: (query?: DatabaseQuery) => void;
        /**
        * @description function called when query was selected for editing
        */
        onQuerySelected?: (event: {
            origin: DBQueryEditorPanel;
            query: DatabaseQuery;
            isRecent: boolean;
        }) => void;
    }
    class DBQueryEditorPanel {
        private options;
        private $view;
        private queryEditor;
        private cbConnections;
        private cbRecent;
        private tablesTree;
        private btnCancel;
        private btnRun;
        private btnClear;
        private btnSave;
        private results;
        private widthQuerySection;
        private widthTableSection;
        private heightTopPanel;
        private heightBottomPanel;
        private isMountedQueryEditor;
        private isCreatedPanel;
        private queryResult;
        private recentQueries;
        private currentConnectionString;
        private editedQuery;
        private connectionStrings;
        private dbqService;
        private dbqResulPanel;
        constructor(options: DBQueryEditorPanelOptions);
        render(): JQuery;
        resize(size?: {
            width: number;
            height: number;
        }): void;
        /**
        * @returns returns edited query or null if panel are using for creating new query
        */
        getEditedQuery(): DatabaseQuery;
        get currentCode(): string;
        private resizePanel;
        private getParentSize;
        private resizeResultPanel;
        private resizeVerticalSplitter;
        private resizeTreeSection;
        private resizeEditorSection;
        protected getView(): JQuery;
        private initVerticalSplitter;
        private initHorizontalSplitter;
        private attachEvents;
        private btnCancelClick;
        private btnSaveClick;
        private btnClearClick;
        private updateQuery;
        private showDialogForInputName;
        private saveAs;
        private createView;
        private showInitialNoteForResult;
        private getInitialNoteForResult;
        private getToolbarMarkup;
        private getVerticalSplitterMarkup;
        private getHorizontalSplitterMarkup;
        private getConnectionStringSectionMarkup;
        private initializeComponents;
        private runQuery;
        private showLoadingIndicatorOnResults;
        private getResults;
        private getResult;
        private updateQueryResult;
        private showRunHideCancel;
        private showCancelHideRun;
        private clearResults;
        private showResults;
        private showOutdatedDataMessage;
        private showError;
        private createCbConnections;
        private createTree;
        private createCbRecents;
        private selecteQuery;
        private isRecent;
        private createQueryEditor;
        private codeChangeQueryEditor;
        private queryEditorMounted;
        private loadQueryById;
        private triggerOnCreatedIfCreated;
        private initCbConnectionStrings;
        private initCbRecent;
    }
}
