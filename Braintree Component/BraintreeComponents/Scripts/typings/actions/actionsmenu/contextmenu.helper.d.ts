declare class ContextMenuHelperStatic {
    showActionsAtBottom(actions: any[], element: JQuery | Element, onClosed?: () => void): void;
    showActionsAtRight(actions: any[], element: JQuery | Element, onClosed?: () => void, loader?: () => $DP.Common.Actions.ActionMenu.Action[]): void;
    showActionsAtPoint(actions: any[], point: {
        x: any;
        y: any;
    }, onClosed?: () => void, loader?: () => $DP.Common.Actions.ActionMenu.Action[]): void;
    Action(name: string, onClick: (e: any) => void, order: number, category?: any, separator?: boolean): void;
    showActions(actions: any[], element: any, menuPosition: any, onClosed?: () => void, loader?: () => $DP.Common.Actions.ActionMenu.Action[], showArrow?: boolean, left?: any, top?: any): void;
    showActionMenu(id: string, actions: any[], element: JQuery, menuPosition: any, onClosed?: () => void, loader?: any, showArrow?: any, left?: any, top?: any): void;
    showEntityActionMenu(id: string, typeName: string, event: MouseEvent): void;
    overrideActionsClick(actions: any, element: JQuery): void;
    buildActionObject(id: any, loader: any, left: any, top: any): any;
}
import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
declare namespace $DP.Common.Actions.ActionMenu {
    class Action {
        Id: string;
        Name: string;
        IsSeparator: boolean;
        OnClick: (e: any) => void;
        Order: number;
        Category: string;
        constructor(name: string, onClick: (e: any) => void, order: number, category: string, separator?: boolean);
        GetActionObject(): any;
    }
}
