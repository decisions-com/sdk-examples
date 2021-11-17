/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class ClassNameCssSelector {
        readonly className: string;
        constructor(className: string);
        get selector(): string;
        get hover(): string;
        get first(): string;
        get last(): string;
        element(elementName: string): ClassNameCssSelector;
        modifier(modifierName: string): ClassNameCssSelector;
    }
}
