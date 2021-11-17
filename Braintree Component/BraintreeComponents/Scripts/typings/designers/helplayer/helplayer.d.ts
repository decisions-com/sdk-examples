/// <reference path="propertylist.d.ts" />
/// <reference path="outcomelist.d.ts" />
/// <reference path="../../dialog/dialog.d.ts" />
/// <reference path="../../actions/actionsmenu/menu.helpers.d.ts" />
/// <reference path="../../common/popuplayer.d.ts" />
/// <reference path="../../common/utils/dom.utils.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../typings/core/generated/ToolboxHelpService.d.ts" />
declare namespace $DP.Designers.Help {
    import PropertyDefinition = $D.Framework.Design.Properties.Help.PropertyDefinition;
    import Outcome = $D.Framework.Design.Properties.Help.Outcome;
    import ToolboxHelpDisplayData = $D.Framework.Design.Properties.ToolboxHelpDisplayData;
    class StepHelpOptions {
        stepName: string;
        /**
         * Help description in HTML format (not encoded).
         */
        description: string;
        /**
         * URL to external resourse, which contains documentation
         */
        externalHelpUrl?: string;
        inputs?: PropertyDefinition[];
        outcomes?: Outcome[];
        canEdit?: boolean;
        shortenNames?: boolean;
        onEdit?: (event: {
            target: StepHelp;
        }) => void;
        onCloseClick?: (event: {
            target: StepHelp;
        }) => void;
    }
    class StepHelp {
        private options;
        private $view;
        static create(stepName: string, help: ToolboxHelpDisplayData, shortenNames: boolean, onEdit: (event: {
            target: StepHelp;
        }) => void, onCloseClick?: (event: {
            target: StepHelp;
        }) => void): StepHelp;
        constructor(options: StepHelpOptions);
        getView(): JQuery;
        updateDescription(description: string): void;
        private hasOutcomes;
        private hasInputs;
        private render;
        private createInputs;
        private createStepName;
        private createOutcomes;
        private createBottom;
        private createEdit;
    }
    function showHelpInLayer(options: {
        stepName: string;
        help: ToolboxHelpDisplayData;
        stickTo: JQuery;
        onEdited?: (html: string) => void;
        onLayerShowed?: () => void;
        onClosed?: () => void;
    }): void;
    function showEditHelpDialog(options: {
        help: ToolboxHelpDisplayData;
        onEdited?: (html: string) => void;
    }): void;
}
