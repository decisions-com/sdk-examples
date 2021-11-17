/**
 * Author:alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    type MessageType = "info" | "warning" | "error";
    interface DesignerMessageOptions {
        id?: string;
        className?: string;
        host?: JQuery;
        type: MessageType;
        content?: string | JQuery;
    }
    class DesignerMessage {
        private options;
        private $view;
        constructor(options: DesignerMessageOptions);
        getView(): JQuery;
        updateContent(content: string | JQuery): void;
        isVisible(): boolean;
        hide(): DesignerMessage;
        show(): DesignerMessage;
        toggleVisibility(visibility: boolean): void;
        private render;
        private getIconClass;
    }
}
