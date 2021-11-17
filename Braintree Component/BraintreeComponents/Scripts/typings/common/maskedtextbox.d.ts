declare namespace $DP.Common {
    interface MaskedTextBoxOptions {
        fontStyle: string;
        maxNumber?: number;
        cssClass: string;
        tabIndex?: number;
        value: string;
        holder?: JQuery;
        textType: TextType;
        overrideDisplayMask?: boolean;
        customDisplayMask?: string;
        watermarkText?: string;
        onValueChange?: (value: string) => void;
        onExit?: () => void;
        onEnter?: () => void;
    }
    enum TextType {
        General = 0,
        Number = 1,
        Decimal = 2,
        Currency = 3,
        EmailAddress = 4,
        SSN = 5,
        Custom = 6,
        PhoneNumber = 7
    }
    class MaskedTextBox {
        private options;
        private static readonly INSTANCE_NAME;
        input: JQuery;
        typingTimer: number;
        lastSetValue: string;
        constructor(options: MaskedTextBoxOptions);
        static get(host?: JQuery): any;
        create(): JQuery;
        initialize(): void;
        applyMask(): void;
        setValue(value: string, raiseEvent?: boolean, raiseEventinSync?: boolean): void;
        raiseEvent(): void;
        raiseEventSync(): void;
        attachEvents(): void;
        isValidInput(event: JQueryKeyEventObject): boolean;
        private removeAllButFirst;
        getValue(): any;
    }
}
interface JQuery {
    maskedtextbox(options: $DP.Common.MaskedTextBoxOptions): JQuery;
    maskedtextbox(methodName: 'get'): $DP.Common.MaskedTextBox;
}
