/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
import ActionType = $D.Framework.ServiceLayer.Actions.EntityActionType;
declare namespace $DP.Common {
    class Preview {
        private host;
        constructor();
        showFormPreview(elementId: string): Promise<void>;
        renderFromPreview(controlData: DataPair[], surfaceSession: $DP.Controls.FormSurface, sessionId: string, isResponsiveContainer?: boolean, useCompositeControls?: boolean): Promise<void>;
        showDesignPreview(elementId: string, sessionId: string, controlData: DataPair[], isForm: boolean, surfaceSession: $DP.Controls.FormSurface, isResponsiveContainer?: boolean, useCompositeControls?: boolean): Promise<void>;
        private loadPreviewAsync;
        private layout;
        private onPreviewLoaded;
    }
    class FormPreviewSurface extends $DP.FormHost.BaseFormSurface implements $DP.FormHost.DesignTimeFormSurface {
        private host;
        private controlData;
        private sessionId;
        constructor(host: JQuery, controlData: DataPair[], sessionId: string);
        handleControlEvent(...events: $DP.FormHost.DecisionsControlEvent[]): void;
        addControl(control: $DP.FormHost.DecisionsControl): void;
        getFormSurfaceElement(): JQuery;
        get InitialData(): DataPair[];
        getformSessionId(): string;
        isInPreviewMode: boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
