/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    import PromptDisplayData = $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    class FormInputControllerOptions {
        designer: FormDesigner;
        designerInfo: $D.Framework.Design.Form.FormDesignInfo;
        sidebarHost: $DP.Designers.SidebarHost;
        /**
         * Is called if input data has been changed
         */
        onInputDataChanged?: (params: PromptDisplayData) => void;
    }
    class FormInputDataController {
        private options;
        private autoDisposeAnchor?;
        private dataToolbox;
        private pubSubToken;
        constructor(options: FormInputControllerOptions, autoDisposeAnchor?: JQuery);
        dispose(): void;
        private refresh;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
