/**
 * Author: alex@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="rule.steptokens.d.ts" />
declare namespace $DP.Designers.Rules {
    interface RuleBuilderItemTextOptions {
        text: string;
        onClick?: () => void;
        token: RuleStepToken;
    }
    /**
     * Base class for part of rule condition - Anchor, Verb, Value.
     */
    abstract class RuleBuilderItemText {
        protected options: RuleBuilderItemTextOptions;
        protected view: JQuery;
        static get DATA_KEY(): string;
        static get ROOT_CLASS(): string;
        static get DATA_NOT_SELECTED_TEXT(): string;
        static get VERB_NOT_SELECTED_TEXT(): string;
        static get VALUE_NOT_SELECTED_TEXT(): string;
        protected readonly ACTIVE_CLASS = "active";
        protected readonly DISABLE_CLASS = "disabled";
        protected readonly NEXT_CLASS = "next";
        protected readonly IGNORED_CLASS = "ignored";
        constructor(options: RuleBuilderItemTextOptions);
        static getItems(container: JQuery): RuleBuilderItemText[];
        get text(): string;
        /**
         * is active if now are editing
         */
        abstract get isActive(): boolean;
        /**
         * is disabled if value not specified
         */
        abstract get isDisabled(): boolean;
        private get textElement();
        setOnClick(handler: () => void): void;
        render(): JQuery;
        protected getView(): JQuery;
        updateText(text: string): void;
        setSelection(isSelected: boolean): void;
        setNextItem(isNextItem: boolean): void;
        updateState(): void;
        private setDisabling;
        private isPlaceholder;
    }
    /**
      * Anchor - part of rule condition whose value will be checked.
      */
    class AnchorItemText extends RuleBuilderItemText {
        get isActive(): boolean;
        /**
        * is disabled if value not specified
        */
        get isDisabled(): boolean;
    }
    /**
     * Verb - part of rule condition. E.g. Exists, Is, Is Not, ...
     */
    class VerbItemText extends RuleBuilderItemText {
        get isActive(): boolean;
        /**
        * is disabled if value not specified
        */
        get isDisabled(): boolean;
    }
    /**
      * Value - part of rule condition.
      */
    class ValueItemText extends RuleBuilderItemText {
        get isActive(): boolean;
        /**
        * is disabled if value not specified
        */
        get isDisabled(): boolean;
        /**
         * Item can be ignored when phrase not must contains value like when Exists verb is used
         */
        get isIgnored(): boolean;
    }
}
