/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../common/popuplayer.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Common {
    import BreakLevel = $D.Framework.BreakLevel;
    interface IValidationOptions {
        title: string;
        readonly description: string;
        readonly level: BreakLevel;
        readonly gotoAction?: (entry: ValidationEntry) => void;
        readonly ignoreAction?: (entry: ValidationEntry, isIgnored: boolean) => void;
        readonly onClick?: (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        readonly onContextMenu?: (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        readonly isBreakingIssue?: boolean;
        readonly isIgnored?: boolean;
    }
    export class ValidationEntry {
        private options;
        title: string;
        get description(): string;
        get level(): BreakLevel;
        get gotoAction(): (entry: ValidationEntry) => void;
        get ignoreAction(): (entry: ValidationEntry, isIgnored: boolean) => void;
        get onClick(): (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        get onContextMenu(): (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        get isBreakingIssue(): boolean;
        get isIgnored(): boolean;
        constructor(options: IValidationOptions);
    }
    export class ValidationGroup {
        readonly groupCssClass: string;
        readonly id: string;
        readonly entries: ValidationEntry[];
        static createError(entries: ValidationEntry[]): ValidationGroup;
        static createWarning(entries: ValidationEntry[]): ValidationGroup;
        static createIgnored(entries: ValidationEntry[]): ValidationGroup;
        static createStandard(errors: ValidationEntry[], warning: ValidationEntry[], ignored: ValidationEntry[], includeEmpty?: boolean): ValidationGroup[];
        constructor(groupCssClass: string, id: string, entries: ValidationEntry[]);
    }
    export {};
}
/**
 * Copyright Decisions 2018. For License or Copyright information please contact support@decisions.com
 */
