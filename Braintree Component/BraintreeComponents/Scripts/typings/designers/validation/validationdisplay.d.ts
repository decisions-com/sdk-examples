/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../common/popuplayer.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Common {
    interface ValidationDisplayOptions {
        readonly smallDisplayCssClass?: string;
        readonly formatGroupText?: (group: ValidationGroup) => string;
        readonly layerOptions?: ValidationDisplayLayerOptions;
    }
    /**
     * Displais groups of validations @see ValidationGroup
     */
    class ValidationDisplay {
        private readonly host;
        private readonly options;
        private root;
        private currentDialog;
        private constructor();
        hideLayer(): void;
        private showValidationList;
        private hideValidationList;
        private getCurrentGroup;
        private refreshValidationList;
        private detach;
        private updateGroups;
        private getGroupText;
        private static get;
        static attachOrUpdate(host: JQuery, groups: ValidationGroup[], options?: ValidationDisplayOptions): ValidationDisplay;
        static detach(host: JQuery): void;
    }
}
