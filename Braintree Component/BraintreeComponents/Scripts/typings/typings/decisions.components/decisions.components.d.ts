interface Window {
    AdvancedSeachResultPanelResize(height: number, width: number);
    arrayBufferToBase64(buffer);
    portalSetup: any;
}

declare function ArrayEditorMoveDown(editingContext: string, selectedPath: string[], selectedIndex: number, asyncCallBackFunc?: any);
declare function ArrayEditorMoveup(editingContext: string, selectedPath: string[], selectedIndex: number, asyncCallBackFunc?: any);
declare function ArrayEditorRemove(editingContextId: string, selectedPath: string[], selectedIndex: number);
declare function StretchEditor(instanceId: string);
declare function SubmitActiveDirectoryId(contextId: string, commaSeperatedPath: string, element: JQuery, entityIds: string);
declare function UpdateValidationReasonsForAllElements(editingContext: string, path: string[], element: JQuery): void;

declare module $D.Framework.Design.Flow.Service.Execution {
    interface FlowExecutionStateInstruction {
        $type?: string;
        getType(): string;
    }
}
