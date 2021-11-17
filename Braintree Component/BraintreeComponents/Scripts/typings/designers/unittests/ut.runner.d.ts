/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="ut.utils.d.ts" />
/// <reference path="../debugger/debugger.d.ts" />
/// <reference path="../../typings/core/generated/ExecutionService.d.ts" />
declare namespace $DP.Designers.Unittests {
    enum ProfileType {
        DebugOnly = 0,
        DebugAndProfile = 1,
        ProfileOnly = 2
    }
    interface UnittestRunnerOptions {
        host: JQuery;
        apiConfig: ServerApiConfig;
        hasInputs: boolean;
        hasOutputs: boolean;
        width?: number;
        height?: number;
        showRememberToRecents?: boolean;
        onInitialized?: () => void;
        canCancel: boolean;
        onCancel?: () => void;
    }
    class UnittestRunner {
        private options;
        private uiRoot;
        private editorHolder;
        private editorWithButtonsHolder;
        private inputTreeHolder;
        private linksHolder;
        private hintLbl;
        private btnCancel;
        private contextEditor;
        private state;
        private excludeParameters;
        private executionService;
        private startOptionsHandler;
        private _sampleTreeId;
        private _unitTestsTreeId;
        constructor(options: UnittestRunnerOptions);
        set canCancel(value: boolean);
        private static getDebugTypeFromOptions;
        private initializeFilteredContextEditor;
        private static getProfileTypeFromOptions;
        dispose(): void;
        resize(width: number, height: number): void;
        private _mappingContext;
        private get mappingContext();
        private initializeContextEditor;
        private _onTreeAddNewSampleData;
        private _onTreeAddNewUnitTest;
        private _onTreeInputDataSelected;
        private _onTreeRunSampleData;
        private _onTreeRunUnitTest;
        private _onTreeSampleDataSelected;
        private _onTreeUnitTestSelected;
        private loadInputsTree;
        private goToState;
        private runWithout;
        private switchingToRunWithout;
        private runDebugger;
        private switchingToAdd;
        private clearTreeSelection;
        private switchingToSaveAs;
        private switchingToCopy;
        private runOnEdit;
        private switchingToEdit;
        private getApiFactory;
        private validateRightSide;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
