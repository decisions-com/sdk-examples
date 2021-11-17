/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.RuleSet {
    /**
     * Representation of <tr> tag
     */
    class RowDefinition {
        styleClass: string;
        isHeader: boolean;
        Id: string;
        OnMouseOver: (JQuery: any) => void;
        OnMouseOut: (JQuery: any) => void;
        constructor(styleClass?: string, isHeader?: boolean, Id?: string);
        getView(): JQuery;
    }
    interface CustomRowDefinitionOptions {
        content?: JQuery;
        styleClass?: string;
        rowId?: string;
        attr?: string;
    }
    class CustomRowDefinition extends RowDefinition {
        private options;
        private $view;
        constructor(options: CustomRowDefinitionOptions);
        private render;
        set StyleClass(value: string);
        get StyleClass(): string;
        set ContentHtml(value: string);
        getView(): JQuery;
        setContent(content: JQuery): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
