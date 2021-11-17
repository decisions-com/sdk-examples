declare namespace $DP.Renderer {
    interface SuggestNextFormDialogOptions {
        formInstruction: $D.Framework.Design.Flow.Service.Execution.SuggestNextFormInSessionInstruction;
        instanceId: string;
        dialog?: JQuery;
    }
    class SuggestNextFormDialog {
        static show(options: SuggestNextFormDialogOptions): JQuery;
    }
}
