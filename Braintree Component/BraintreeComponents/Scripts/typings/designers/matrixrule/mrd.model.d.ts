/**
 * Author: catface@decisions.com
 * Notes: Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    import RuleActionDisplayData = $D.Framework.Design.Flow.Service.RuleActionDisplayData;
    class MatrixFlowStep {
        private step;
        private validationIssues;
        constructor(step: $D.Framework.Design.Flow.StepDisplayData, validationIssues: $D.Framework.ValidationIssue[]);
        update(data: $D.Framework.Design.Flow.StepDisplayData, validationIssues: $D.Framework.ValidationIssue[]): void;
        get id(): string;
        get text(): string;
        get paths(): string[];
        get firstPath(): string;
        getFlowStep(): $DP.Designers.Flows.FlowStep;
        toJSON(): any;
    }
    class MatrixFlowLink {
        private readonly link;
        constructor(link: $D.Framework.Design.Flow.StepConnectionData);
        get id(): string;
        get fromStepId(): string;
        get toStepId(): string;
        get fromStepPath(): string;
        toJSON(): any;
    }
    class SideTreeNode {
        protected _step: MatrixFlowStep;
        readonly parentPath: string | undefined;
        private children;
        private _parent;
        constructor(_step: MatrixFlowStep, parentPath?: string | undefined);
        get dimensionId(): string;
        get childrenCount(): number;
        get nonLeafsCount(): number;
        get leafsCount(): number;
        get leafs(): SideTreeNode[];
        get subRows(): number;
        get subTopRows(): number;
        get level(): number;
        get levels(): number;
        getChild(index: number): SideTreeNode;
        getChildForPath(path: string): SideTreeNode | undefined;
        findChild(id: string): SideTreeNode;
        addChild(child: SideTreeNode): void;
        protected clearChildren(): void;
        get parent(): SideTreeNode | undefined;
        get step(): MatrixFlowStep;
        toJSON(): any;
    }
    class SideTree extends SideTreeNode {
        private commandHandler;
        readonly flowId: string;
        private startStep;
        private steps;
        private links;
        constructor(commandHandler: MatrixRuleCommandHandler, flowId: string, steps: $D.Framework.Design.Flow.StepDisplayData[], links: $D.Framework.Design.Flow.StepConnectionData[], validationIssues: $D.Framework.ValidationIssue[]);
        private buildTree;
        updateStep(notification: $D.Framework.Design.Flow.Service.FlowServiceStepNotification): void;
        hasLink(linkId: string): boolean;
        updateLink(notification: $D.Framework.Design.Flow.Service.FlowServiceConnectionNotification): void;
        toJSON(): {
            start: MatrixFlowStep;
            steps: {
                [key: string]: MatrixFlowStep;
            };
            links: {
                [fromStepId: string]: MatrixFlowLink[];
            };
        };
    }
    interface MatrixIntersectionInfo {
        DisplayValue?: string;
        MappingType?: string;
        ValidationIssues?: $D.Framework.ValidationIssue[];
        Actions?: RuleActionDisplayData[];
        AllowActions?: boolean;
    }
    class MatrixIntersection {
        readonly rowId: string;
        readonly columnId: string;
        constructor(rowId: string, columnId: string);
        private _displayValue;
        get displayValue(): string;
        get mappingType(): string;
        get validationIssues(): $D.Framework.ValidationIssue[];
        get Actions(): RuleActionDisplayData[];
        get AllowActions(): boolean;
        update(value: MatrixIntersectionInfo): void;
    }
    class Matrix {
        private cells;
        private _dataType;
        constructor(intersections: $D.Framework.Design.Flow.Service.Edit.MatrixIntersectionInfo[]);
        get dataType(): string;
        set dataType(value: string);
        getIntersection(rowId: string, columnId: string): MatrixIntersection;
        getDisplayValue(rowId: string, columnId: string): string;
        rowAdded(rowId: string, pairs: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEventData[]): void;
        rowDeleted(id: string): void;
        columnAdded(columnId: string, pairs: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEventData[]): void;
        columnDeleted(id: string): void;
        cellUpdated(rowId: string, columnId: string, value: MatrixIntersectionInfo): MatrixIntersection;
        getAction(actionId: string): RuleActionDisplayData;
    }
}
/**
 * Copyright Decisions 2017. For License or Copyright information please contact support@decisions.com
*/
