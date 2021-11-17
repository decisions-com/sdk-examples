/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common.Merge {
    interface MergeFieldSelectorTreeOptions {
        treeLoader: $DP.Editors.TextMergeFieldSelectorDataLoader;
        onSelected?: (item: $DP.Common.ComboBoxItem) => boolean;
        onNodeOpened?: (item: $DP.Common.ComboBoxItem) => void;
    }
    class MergeFieldSelectorTree {
        private options;
        private host;
        private treeModel;
        constructor(options: MergeFieldSelectorTreeOptions);
        destory(): void;
        getView(): any;
    }
    interface MergeFieldSelectorOptions {
        readonly host?: JQuery;
        onSelected?: (item: $DP.Common.ComboBoxItem) => boolean;
        selectedItem?: $DP.Common.ComboBoxItem | Promise<$DP.Common.ComboBoxItem>;
        classNames?: {
            root?: string;
            textBox?: $DP.Common.StyleProps;
            layer?: string;
            arrowDownButton?: $DP.Common.StyleProps;
        };
        treeLoader: $DP.Editors.TextMergeFieldSelectorDataLoader;
    }
    class MergeFieldSelector {
        private options;
        private input;
        private layer;
        private expandedNode;
        constructor(options: MergeFieldSelectorOptions);
        getView(): JQuery;
        getLayerConent(): JQuery;
        isLayerOpened(): boolean;
        select(item: $DP.Common.ComboBoxItem, raiseEvent?: boolean): void;
        closeLayer(): void;
        private createPicker;
        private render;
        private showLayer;
        private onLayerKeyDown;
        private selectItem;
        getAutoExpandedNodes(): any[];
        getAutoSelectNode(): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
