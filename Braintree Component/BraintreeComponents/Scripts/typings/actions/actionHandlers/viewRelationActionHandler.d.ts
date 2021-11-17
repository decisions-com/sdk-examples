/// <reference path="../../common/dptree.d.ts" />
/// <reference path="../../typings/core/generated/RelationService.d.ts" />
declare namespace $DP.ActionHandlers {
    import DpTreeNode = $DP.Common.DPTreeNode;
    import DpTreeContext = $DP.Common.DPTreeContext;
    import ViewRelationsActionSourceType = $D.Framework.ServiceLayer.Services.Relations.ViewRelationsActionSourceType;
    import Relation = $D.Framework.ServiceLayer.Services.Relations.Relation;
    import AccountRelation = $D.Framework.ServiceLayer.Services.Relations.AccountRelation;
    interface IRelationNode {
        sourceRelationType: ViewRelationsActionSourceType;
        relationName: string;
        sourceType: ViewRelationsActionSourceType;
        sourceId: string;
        sourceName: string;
    }
    interface IRelationTreeOptions {
        SourceType: ViewRelationsActionSourceType;
        SourceId: string;
    }
    class RelationNodeOptions implements IRelationNode {
        sourceRelationType: ViewRelationsActionSourceType;
        relationName: string;
        sourceType: ViewRelationsActionSourceType;
        sourceId: string;
        sourceName: string;
        id?: string;
        constructor(sourceRelationType: ViewRelationsActionSourceType, relationName: string, sourceType: ViewRelationsActionSourceType, sourceId: string, sourceName: string, id?: string);
    }
    class ViewRelationTree {
        private $Tree;
        private dpTree;
        private $TreeHolder;
        private relationTreeOptions;
        constructor(_relationTreeOptions: IRelationTreeOptions);
        private createTree;
        childRelaions(context: DpTreeContext, callback: (nodes: (string | DpTreeNode)[]) => void): Promise<any>;
        private getRelations;
        rootRelaions(context: DpTreeContext, callback: (nodes: (string | DpTreeNode)[]) => void): Promise<void>;
        generateNode(relationNodeOptions: RelationNodeOptions): {
            text: string;
            children: boolean;
            li_attr: {
                "data-sourceType": string;
                "data-sourceId": string;
            };
        };
        configurnode(relation: Relation): Promise<RelationNodeOptions>;
        isAccountRelation(relation: AccountRelation | Relation): relation is AccountRelation;
        getNodeView(relationNodeOptions: RelationNodeOptions): string;
        private loadTree;
        dialogIt(): void;
        static Create(relationTreeOptions: IRelationTreeOptions): ViewRelationTree;
        private getTreeHolder;
    }
}
