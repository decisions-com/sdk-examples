/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    interface SearchBoxOptions {
        searchCallback: (text: string) => void;
        resetCallback?: () => void;
        onKeyDown?: (event: {
            origin: SearchBox;
            keyCode: number;
            text: string;
            originalEvent: Event;
        }) => void;
        onKeyUp?: (event: {
            origin: SearchBox;
            keyCode: number;
            text: string;
            originalEvent: Event;
        }) => void;
        onFocusIn?: (event: {
            origin: SearchBox;
        }) => void;
        holder?: JQuery;
        placeholder?: string;
        text?: string;
        hidePlaceholder?: boolean;
        class?: string;
        resetOnClearText?: boolean;
        ariaLable?: string;
        useBasicStyles?: boolean;
        submitOnTyping?: boolean;
    }
    class SearchBox {
        private options;
        private view;
        private searchBtn;
        private textBox;
        private resetBtn;
        static create(options: SearchBoxOptions): SearchBox;
        static get(host: JQuery): SearchBox;
        constructor(options: SearchBoxOptions);
        focus(): void;
        update(options: SearchBoxOptions): void;
        getView(): JQuery;
        submit(): void;
        Reset(): void;
        get textbox(): JQuery;
        getText(): string;
        setText(text: string): void;
        setPlaceholder(text: string): void;
    }
}
interface JQuery {
    searchBox(options: $DP.Common.SearchBoxOptions): JQuery;
    searchBox(methodName: 'get'): $DP.Common.SearchBox;
    searchBox(methodName: 'getBox'): JQuery;
    searchBox(methodName: string): any;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
