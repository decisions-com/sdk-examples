/// <reference path="../typings/core/generated/profilesessionservice.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="../typings/core/generated/FlowDebugService.d.ts" />
/// <reference path="../typings/es6-promise/es6-promise.d.ts" />
/// <reference path="../typings/core/generated/FlowProfileService.d.ts" />
declare namespace $DP.Designers {
    class FlowProfiler {
        private instanceId?;
        static FLOW_PROFILER_PAGE_ID: string;
        constructor(instanceId?: string);
        attachEventListerner(flowTrackingId: string): Promise<void>;
        static startFlowProfile(flowId: string, forSession?: boolean): Promise<void>;
        handleProfileFlowEvent(eventData: any): any;
        displayFlowInstruction(profileData: $D.Framework.Design.Flow.Service.Execution.ProfileFlowDataEvent): Promise<void>;
        profileFlowWithData(profileParameters: $D.Framework.Design.Flow.Service.Execution.FlowProfileParameters): Promise<void>;
        showProfilePageResult(flowTrackingId: any): Promise<void>;
    }
}
