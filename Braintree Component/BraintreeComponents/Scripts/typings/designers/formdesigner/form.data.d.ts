/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    type NodeLevel = {
        [id: string]: number;
    };
    type LevelAncestor = {
        id: string;
        levels: NodeLevel;
    };
    class SelectionInfo {
        selectedIds: string[];
        commonFormElement: $D.Framework.Design.Form.FormElementInfo;
        fixedElementIds: string[];
        relativeElementIds: string[];
        constructor();
        canChangeAlignment(): boolean;
    }
    class FormElementsProvider {
        private _elements;
        private _ids;
        constructor(elements: $D.Framework.Design.Form.FormElementInfo[]);
        dispose(): void;
        get elements(): $D.Framework.Design.Form.FormElementInfo[];
        static get SURFACE_ID(): string;
        set elements(value: $D.Framework.Design.Form.FormElementInfo[]);
        getSurfaceElementId(): string;
        private initializeHierarchy;
        getSelectionInfo(selection: string[]): SelectionInfo;
        private getCommonAncestor;
        private getNodePath;
        private getCommonNodesPath;
        private getCommonPath;
        getParentId(node: string): string;
        private distanceTo;
        getLogicalChildren(formElement: $D.Framework.Design.Form.FormElementInfo): $D.Framework.Design.Form.FormElementInfo[];
        getFormElementById(formElementId: string): $D.Framework.Design.Form.FormElementInfo;
        static findFormElementById(haystack: $D.Framework.Design.Form.FormElementInfo[], formElementId: string): $D.Framework.Design.Form.FormElementInfo;
        private static find;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
