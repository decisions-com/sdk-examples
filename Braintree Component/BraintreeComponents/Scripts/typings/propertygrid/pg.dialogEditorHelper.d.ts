/**
 * These helpers are a half-step between having the PropertyGrid itself written in Decisions.FrontEnd,
 * and all of the dialogue editors also rewritten Decisions.FrontEnd
 *
 * Copyright Decisions 2019. For License or Copyright information please contact support@decisions.com
 */
declare namespace $DP.PropertyGrid.Util {
    import ContextProviderNode = $D.Framework.Design.Properties.ContextProviderNode;
    interface IShowDialogAction {
        node: ContextProviderNode;
        path: string[];
        options?: any;
        name?: any;
        onDone?: () => void;
        onOpen?: () => void;
        /** For situations the default needs to be overridden, e.g. PropertyGridEmbeddedEditor */
        editingContextId?: string;
    }
    interface IMergeEditorOptions {
        allowFormating?: boolean;
        value: string;
        buttonElement: Element;
        mappingContext: $DP.Common.MappingContext;
        editorDataLoader?: $DP.Controls.RichText.IMergeExpander;
        onSave: (value: string) => void;
    }
    /**
     * Provide hooks to render dialog editors, to initially limit the scope of
     * rewriting Property Grid itself onto React.
     */
    /**
     *
     * @param node from property grid which is triggering the action
     * @param path of the node within the snapshot data
     * @param editingContextId string context ID
     * @param mappingContext mapping context of parent designer
     * @param onDone callback for when change is complete.
     */
    function launchDialogEditor(action: IShowDialogAction, editingContextId: string, mappingContext: $DP.Common.MappingContext, onDone?: (updatedValue?: any) => void, onOpen?: () => void): Promise<void>;
    interface DialogPropertiesOptions {
        /** Dialog title */
        title: string;
        /** Dialog ID */
        id: string;
        /**
         * Passes a target element for React to render into via "createPortal".
         * This seems less straightforward than passing an element here from React for jQuery to claim,
         * but that results in errors. React insists DOM children it un-mounts have the expected parent.
         */
        setContentTarget: (target: HTMLElement) => void;
        /** Close callback */
        onClose?: () => void;
        width?: number;
        height?: number;
    }
    function showDialogPropertyGrid({ title, id, onClose, setContentTarget, height, width }: DialogPropertiesOptions): void;
    /**
     * Quick changes are things like one-click remove actions, that this implementation
     * does not know how to do, yet. (Since it doesn't have access to server proxies, yet.)
     */
    interface IQuickChangeAction {
        /** Unique action name */
        name: string;
        path: string[];
        index?: number;
        value?: any;
    }
    /**
     * @param node from property grid which is triggering the action
     * @param path of the node within the snapshot data
     * @param editingContextId string context ID
     * @param mappingContext mapping context of parent designer
     * @param onDone callback for when change is complete.
     */
    function quickChange(node: $D.Framework.Design.Properties.ContextProviderNode, editingContextId: string, mappingContext: $DP.Common.MappingContext, action: IQuickChangeAction, onDone?: () => void): Promise<void>;
    function launchTableTemplateEditor(action: IShowDialogAction): void;
    function launchImageInfoEditor(action: IShowDialogAction): void;
}
