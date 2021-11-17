/**
 * The StringBuilder instance members
 */
interface StringBuilderStatic {

    /**
     * Initializes a new instance of the StringBuilder class using the specified string.
     *
     * @param value The string used to initialize the value of the instance.
     */
    new (value: string): StringBuilderStatic;

    /**
     * Appends a the specified string to this instance.
     *
     * @param value The string to append.
     */
    append(value: string);

    /**
     * Removes all characters from the current instance.
     */
    clear();

    /**
     * Converts the value of this instance to a string.
     */
    toString(): string;
}

interface JQuery {
    /**
     * Function defined as extention for jquery in site.js.
     */
    blink(options?);
    getRelativeOffset(): JQueryCoordinates;
    ActionsMenu(options);
    layout(functionName: string, ...method);
    isVisible(): boolean;
}

declare function escape(s: string): string;
declare function blink(options?);

declare module "site" {
    export = StringBuilder
}

declare var StringBuilder: StringBuilderStatic;
declare var virtualPath: string;


declare function GetMaximumZIndexFromElement(searchElem: JQuery);
declare function closeDialogElement(element);
declare function AttachActionTooltipEvents();

//Init.js 
declare function RunStartupInstruction();
declare function ResumeFlowWithFlowTrackingId(flowTrackingId);

interface MessageDialogStatic {
    Show(title: string, message: string, buttons: string[], icon: string, closedEvent?: (answer: string) => void, size?: number): JQuery;

    Warn(message: string, title?: string): void;

    Error(message: string, title?: string, showCopyTextBtn?: boolean, canMaximize?: boolean): void;

    Info(message: string, title?: string, showCopyTextBtn?: boolean, canMaximize?: boolean, canUserSelect?: boolean): void;

}

interface History {
    pushState(data: any, title: string, url?: string | null): void;
}

declare var RGraph: any;