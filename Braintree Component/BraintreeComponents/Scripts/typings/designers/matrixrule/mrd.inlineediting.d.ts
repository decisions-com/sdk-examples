/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../../common/numberspinner.d.ts" />
/// <reference path="../../common/utils/type.utils.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    interface IntersectionEditorInfo {
        rowId?: string;
        columnId?: string;
        displayValue: string;
        dataType: string;
        mappingType: string;
        /**
         * Determine can navigate to other editor by left/up/right/down/tab keys
         */
        canNavigate: boolean;
        commands?: IntersectionEditorCommands;
        initialViewType?: 'label' | 'editor';
    }
    interface IntersectionEditorCommands {
        setIntersectionStringValue(intersection: IntersectionEditorInfo, value: string): void;
        showFullEditor(intersection: IntersectionEditorInfo): void;
        moveLeft?(current: IntersectionEditorInfo): boolean;
        moveUp?(current: IntersectionEditorInfo): boolean;
        moveRight?(current: IntersectionEditorInfo): boolean;
        moveDown?(current: IntersectionEditorInfo): boolean;
        moveNext?(current: IntersectionEditorInfo): boolean;
    }
    abstract class IntersectionEditorBase {
        protected container: JQuery;
        protected intersection: IntersectionEditorInfo;
        initialize(container: JQuery, intersection: IntersectionEditorInfo): IntersectionEditorBase;
        protected createInitialView(): void;
        protected getValueClass(): string;
        protected getDisplayValue(): string;
        protected handleContainerClick(ev: JQueryEventObject): boolean;
        startEdit(): void;
        protected getIntersectionCommandHandler(): IntersectionEditorCommands;
        protected sendTextValueToServer(value: string): void;
    }
    function initializeEditor(container: JQuery | HTMLElement, intersection: IntersectionEditorInfo): IntersectionEditorBase;
    class SelectValueIntersectionEditor extends IntersectionEditorBase {
        protected handleContainerClick(ev: JQueryEventObject): boolean;
    }
    class StringIntersectionEditor extends IntersectionEditorBase {
        private completeEditing;
        protected createInitialView(): void;
        protected createInlineEditor(): void;
        protected handleContainerClick(ev: JQueryEventObject): boolean;
        protected getEditValue(): string;
        protected validate(input: JQuery): void;
        protected updateServerValue(input: JQuery): void;
    }
    class BooleanIntersectionEditor extends IntersectionEditorBase {
        protected createInitialView(): void;
        protected getValueClass(): string;
    }
    class NumberIntersectionEditor extends IntersectionEditorBase {
        private numberBox;
        protected createInitialView(): void;
        protected createInlineEditor(): void;
        protected updateServerValue(value: string): void;
        protected handleContainerClick(ev: JQueryEventObject): boolean;
    }
    class SelectStringIntersectionEditor extends IntersectionEditorBase {
        private readonly values;
        constructor(values: string[]);
        protected createInitialView(): void;
    }
    class DateTimeIntersectionEditor extends StringIntersectionEditor {
        private readonly showTime;
        constructor(showTime?: boolean);
        protected createInitialView(): void;
        protected getDisplayValue(): string;
        protected getEditValue(): string;
        protected validate(input: JQuery): void;
        protected updateServerValue(input: JQuery): any;
    }
    class ArrayIntersectionEditor extends IntersectionEditorBase {
        protected handleContainerClick(ev: JQueryEventObject): boolean;
    }
}
/**
 * Copyright Decisions 2017. For License or Copyright information please contact support@decisions.com
 */
