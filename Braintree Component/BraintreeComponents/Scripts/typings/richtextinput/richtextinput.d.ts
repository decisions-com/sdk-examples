declare namespace $DP.Controls {
    class RichTextInput {
        static HandleResizeRichTextEditorEvent(event: any): void;
        private static getHiddenToolbarElement;
        static AttachRichTextEvents(id: any, editorName: any): void;
        static TriggerEvents(): void;
    }
}
