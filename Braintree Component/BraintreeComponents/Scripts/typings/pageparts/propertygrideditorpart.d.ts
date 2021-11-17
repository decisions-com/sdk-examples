declare namespace $DP.PageParts {
    interface PropertyGridEditorPartOptions {
        folderId: string;
        holder: JQuery;
    }
    class PropertyGridEditorPart {
        private options;
        instanceId: string;
        propertyGrid: $DP.PropertyGrid.PropertyGrid;
        constructor(options: PropertyGridEditorPartOptions);
        static initialize(options: PropertyGridEditorPartOptions): PropertyGridEditorPart;
        refresh(): Promise<void>;
        attachEvents(): void;
    }
}
