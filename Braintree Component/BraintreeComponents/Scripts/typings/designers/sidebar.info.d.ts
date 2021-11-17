declare namespace $DP.Designers {
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    interface IInfoPanelActions {
        name: string;
        action: () => void;
    }
    class InfoPanel implements $DP.Designers.SidebarPanel {
        private elRegId;
        private onSave;
        private getMappingContext;
        private panelActions?;
        private serviceClient;
        private view;
        private infoTabs;
        private descriptionCKEditor;
        private ckEditor;
        private ckEditorEvent;
        private container;
        private designerWindowId;
        private ownerEmail;
        get header(): string;
        constructor(elRegId: string, onSave: () => Promise<void>, getMappingContext: () => MappingContext, panelActions?: IInfoPanelActions[]);
        dispose(): void;
        initialize(container: JQuery): void;
        private setDesignerChanged;
        private onCurrentFolderChanged;
        private createView;
        private createCommentsTabContent;
        static sidePanelFileUploadComplete(id: string, fileName: string, responseJSON: $DP.Designers.FileUploadResponseJSON, container: JQuery, elRegId: string): void;
        static get listItemClass(): string;
        static get listItemTitleClass(): string;
        private createCommentListItem;
        private createFilesTabContent;
        private static createFileListItem;
        private updateList;
        getDesignerInfo(): $D.Framework.Design.Flow.Service.Edit.DesignerInfo;
        resize(width?: number, height?: number): void;
        onExpanded(): void;
        /**
         * Promise for waiting for info panel applying changes
         */
        private savePromise;
        save(): Promise<void>;
        private isDirty;
        /**
         * apply changes on server
         */
        private onChanged;
        /**
         * create 'promise' to make Designers wait for save changes
         * mark as 'dirty'
         */
        private resolveSavePromise;
        private setChanged;
        /**
         * save changes if 'dirty' and resolve Promise
         * unmark as 'dirty'
         */
        private applyChanges;
    }
}
