declare namespace $DP.Control {
    enum DocumentViewerInputType {
        Document = 0,
        FileData = 1,
        FileReference = 2
    }
    class SilverDocumentViewer extends ContentBase {
        options: Silverdark.Components.SilverDocumentViewerOptions;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverDocumentViewerOptions);
        documentViewer: $DP.Form.Controls.DocumentViewer;
        documentId: string;
        noDocumentMessage: string;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        renderhtml(): JQuery;
        initializeControl(): void;
        getUrl(): string;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
