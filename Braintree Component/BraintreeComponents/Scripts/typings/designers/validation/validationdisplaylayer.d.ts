/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../common/popuplayer.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Common {
    interface ValidationDisplayLayerBaseOptions {
        readonly id: string;
        readonly stickTo: JQuery;
        readonly group: ValidationGroup;
    }
    interface ValidationDisplayLayerOptions {
        readonly header?: JQuery;
        readonly onClose?: (event: {
            origin: ValidationDisplayLayer;
        }) => void;
        readonly onCreate?: (event: {
            origin: ValidationDisplayLayer;
        }) => void;
        readonly layerPlacement?: Popper.Placement;
        readonly showDuplicateTitles?: boolean;
        readonly collapseDuplicateTitles?: boolean;
        readonly showArrow?: boolean;
        readonly offset?: number | string;
        readonly className?: string;
        readonly showMenuButton?: boolean;
        readonly width?: number;
        readonly behavior?: Behavior | Popper.Position[];
    }
    class ValidationDisplayLayer {
        private options;
        private $root;
        private $issues;
        private headerContainer;
        private layer;
        private _group;
        get group(): ValidationGroup;
        constructor(options: ValidationDisplayLayerBaseOptions & ValidationDisplayLayerOptions);
        remove(): void;
        updateHeader(header: JQuery): void;
        updateGroup(updated: ValidationGroup): void;
        getView(): JQuery;
        /**
         * @param $element element with class 'validation-layer-item'
         */
        static setActive(element: JQuery | Element): void;
        removeActiveItem(): void;
        private getEntries;
        private getEntriesList;
        private appendValidationIem;
        private filterEntries;
    }
}
