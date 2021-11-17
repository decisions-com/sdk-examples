/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Flows {
    import IObjectEditor = $DP.Common.IObjectEditor;
    function createValidationsList(target: JQuery, issues: $D.Framework.ValidationIssue[]): JQuery;
    function provideStepEditors(dlg: JQuery, contextId: string, callback: (editor: IObjectEditor, index: number, action: any) => void, provider?: $DP.Common.RemoteContextProvider): $DP.Common.RemoteContextProvider;
    function showStepEditors(dlg: JQuery, selector: string, contextId: string, provider?: $DP.Common.RemoteContextProvider): $DP.Common.RemoteContextProvider;
    function findClosestPortId(diagram: go.Diagram, targetNodeId: string, sourceNodeId: string, sourcePortId?: string): string;
    function mapToFlowAnnotations(annotationNotifications: $D.Framework.Design.Flow.Service.FlowServiceAnnotationNotification[]): $D.Framework.Design.Flow.Annotations.FlowAnnotation[];
    function processResultWithEvents<T>(result: $D.Framework.Design.Properties.ResultWithEvents): T;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
