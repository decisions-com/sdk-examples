/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    import EditorInformation = $D.Framework.Design.Properties.EditorInformation;
    class ObjectEditorFactory {
        static BuildEditor(information: EditorInformation, provider: IContextProvider): IObjectEditor;
    }
    interface IObjectEditor {
        ContextProvider: IContextProvider;
        EditorInformation: EditorInformation;
        GetEditorAction(options: EditorActionOptions): (e: JQueryEventObject) => any;
        Completed(): JQueryPromise<IObjectEditor>;
    }
    class EditorActionOptions {
        ParentDialog: JQuery;
        Location: {
            Left: number;
            Top: number;
        };
    }
    class BaseObjectEditor implements IObjectEditor {
        protected information: EditorInformation;
        protected provider?: IContextProvider;
        private deffered;
        protected keepContextProvider: boolean;
        constructor(information: EditorInformation, provider?: IContextProvider, keepContextProvider?: boolean);
        get ContextProvider(): IContextProvider;
        get EditorInformation(): EditorInformation;
        GetEditorAction(options: EditorActionOptions): (e: JQueryEventObject) => any;
        Completed(): JQueryPromise<IObjectEditor>;
        protected OnCompleted(): void;
    }
    class MissingObjectEditor extends BaseObjectEditor {
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
