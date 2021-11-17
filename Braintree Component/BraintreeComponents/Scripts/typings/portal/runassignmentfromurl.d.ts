declare namespace $DP.Portal {
    interface RunAssignmentFromUrlOptions {
        assignmentId: string;
        isMaximized: boolean;
        hasBorder: boolean;
        viewReadOnlyFormAction: boolean;
        errorMessage?: string;
        showLoginAsLink: boolean;
        hasMultipleActions: boolean;
        modelRaw: string;
        width?: string;
        height?: string;
    }
    class RunAssignmentFromUrl {
        options: RunAssignmentFromUrlOptions;
        isResized: boolean;
        get assignmentHolder(): JQuery;
        get formSurfaceView(): JQuery;
        constructor(options: RunAssignmentFromUrlOptions);
        resizeViewOnlyInstruction(): void;
    }
}
