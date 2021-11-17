/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    import ContextNode = $D.Framework.Design.Properties.ContextNode;
    import ContextProviderNode = $D.Framework.Design.Properties.ContextProviderNode;
    import ContextProviderEventType = $D.Framework.Design.Properties.ContextProviderEventType;
    import ValidationIssue = $D.Framework.ValidationIssue;
    import ObjectEditorInformation = $D.Framework.Design.Properties.ObjectEditorInformation;
    interface IContextProvider {
        getRootNodes(): ContextProviderNode[];
        getValue(path: string[]): any;
        setValue(path: string[], value: any): any;
        setValueAsync(path: string[], value: any): JQueryPromise<any>;
        getChildrenNodes(path: string[]): ContextNode[];
        getEditorConfigurationValue(path: string[]): Array<[string, any]>;
        getObjectEditors(): ObjectEditorInformation;
        getInvalidReasons(): ValidationIssue[];
        getInvalidReasonsByPath(path: string[]): ValidationIssue[];
        hasIssues(path: string[], level: $D.Framework.BreakLevel): boolean;
        dispose(): any;
        beginSetValue(): any;
        endSetValue(): any;
    }
    class NodeChangedArgs {
        eventType: ContextProviderEventType;
        path: string[];
        node: ContextNode;
        constructor(eventType: ContextProviderEventType, path: string[], node: ContextNode);
    }
    class RemoteContextProvider implements IContextProvider {
        contextId: string;
        onlyForEditors: boolean;
        private root;
        private globalIssues;
        private subscriptionToken;
        private sequentialCalls;
        constructor(contextId: string, onlyForEditors?: boolean);
        getRootNodes(): ContextProviderNode[];
        getValue(path: string[]): any;
        setValue(path: string[], value: any): void;
        setValueAsync(path: string[], value: any): JQueryPromise<any>;
        beginSetValue(): void;
        endSetValue(): void;
        private internalSetValue;
        private sequentialSetValue;
        getChildrenNodes(path: string[]): ContextNode[];
        getEditorConfigurationValue(path: string[]): Array<[string, any]>;
        getObjectEditors(): ObjectEditorInformation;
        static getObjectEditorsForContext(contetxId: string): ObjectEditorInformation;
        getInvalidReasons(): ValidationIssue[];
        getInvalidReasonsByPath(path: string[]): ValidationIssue[];
        hasIssues(path: string[], level: $D.Framework.BreakLevel): boolean;
        dispose(): void;
        private onNodeChanged;
        refresh(): void;
        private receiveServerNotification;
        findNode(path: string[]): ContextProviderNode;
        static findNodeByPath(root: ContextProviderNode, path: string[]): ContextProviderNode;
        static EditComplete(contextId: string, value?: $D.Framework.Design.Properties.EditCompleteType): void;
        editComplete(value?: $D.Framework.Design.Properties.EditCompleteType): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
