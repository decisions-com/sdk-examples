/// <reference path="./datatypes._base.d.ts" />

interface FlowProfileServiceStatic {

	ProfileFlowWithDataAndTrackingId(profileParameters: $D.Framework.Design.Flow.Service.Execution.FlowProfileParameters, successCallback: (data: { ProfileFlowWithDataAndTrackingIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ProfileFlowWithDataAndTrackingIdResult: string }>;

	ProfileFlowWithDataAndTrackingId(profileParameters: $D.Framework.Design.Flow.Service.Execution.FlowProfileParameters): { ProfileFlowWithDataAndTrackingIdResult: string };

	ProfileFlowWithDataAndTrackingIdPromise(profileParameters: $D.Framework.Design.Flow.Service.Execution.FlowProfileParameters): Promise<string>;
}

interface ServicesStatic {
	FlowProfileService(): FlowProfileServiceStatic;
}
