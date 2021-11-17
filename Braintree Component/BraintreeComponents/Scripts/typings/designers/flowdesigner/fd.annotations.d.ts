/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="fd.step.d.ts" />
declare namespace $DP.Designers.Flows {
    import FlowAnnotation = $D.Framework.Design.Flow.Annotations.FlowAnnotation;
    abstract class FlowAnnotationView extends FlowEntity {
        protected faInfo: FlowAnnotation;
        constructor(designerId: string, faInfo: FlowAnnotation);
        get Info(): FlowAnnotation;
        static create(designerId: string, data: FlowAnnotation): FlowAnnotationView;
        added(diagram: FlowDiagram): void;
        removed(): void;
        get id(): string;
        get name(): string;
        get templateKey(): string;
        protected getTemplateKey(): string;
        get isLink(): boolean;
        createSelectionDialog(): FlowStepDialog;
        update(faInfo: $D.Framework.Design.Flow.Annotations.FlowAnnotation): void;
        protected updateInfo(model: go.GraphLinksModel, faInfo: $D.Framework.Design.Flow.Annotations.FlowAnnotation): void;
        getUpdatedInfo(resetDirty?: boolean): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
