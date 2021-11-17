/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="command.d.ts" />
/// <reference path="../../entitypicker/epick.ui.d.ts" />
/// <reference path="../../common/checkbox.d.ts" />
/// <reference path="../../layouts/decisions.ui.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers.Rules {
    interface LayerOptions {
        content?: JQuery;
        onClose?: (h: JQuery, isShowingNew?: boolean) => void;
        onIgnore?: () => Promise<void>;
        width?: number;
        height?: number;
        stickTo?: JQuery;
        resize?: (h: JQuery, size?: {
            width: number;
            height: number;
        }) => void;
    }
    interface PositionAndSize {
        position: JQueryCoordinates;
        size: $DP.UI.Size;
    }
    class Layer {
        private $holder;
        private readonly defaultSize;
        private readonly minSize;
        private isInitialized;
        private options;
        private $layer;
        constructor($holder: JQuery);
        getView(): JQuery;
        isShown(): boolean;
        show(options: LayerOptions): void;
        updateSizeAndPosition(): PositionAndSize;
        private setSizeAndPosition;
        private setPosition;
        private setSize;
        private getPositionAndSizeInWindow;
        private showLayerOnBottom;
        private get resizeHandlerHeight();
        updateContent(content: JQuery): void;
        private getInitialLayerHtml;
        setState(state?: [{
            key: string;
            value: string;
        }]): void;
        close(): Promise<void>;
        dispose(): void;
    }
    interface RuleLayerOptions extends LayerOptions {
        presection?: JQuery;
        section?: JQuery | (() => JQuery);
        commands?: EditableRuleCommand[];
        onClosing?: () => void;
    }
    interface TruthTableLayerOptions extends LayerOptions {
        canIgnore?: boolean;
        evaluateWithNotValue?: boolean;
        evaluateWithNotCallback?: (current: boolean) => void;
    }
    function createRuleLayerContent(presection: JQuery, section: JQuery | (() => JQuery), commands: EditableRuleCommand[]): JQuery;
    function addCommands(commands: EditableRuleCommand[], container: JQuery): void;
    function removeCommands(container: JQuery): void;
    function createTruthTableLayerContent(options: TruthTableLayerOptions): JQuery;
    function setRuleLayerContentHeight(holder: JQuery): void;
    class RuleActionFlowPicker {
        private picker;
        constructor();
        resize(): void;
        Element: JQuery;
        SelectedFlowId: string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
