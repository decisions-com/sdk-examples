declare namespace $DP.Designers.RuleSet {
    import SampleCategory = $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    import PromptDisplayData = $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    enum FlowSetTemplateType {
        Parameterized = 0,
        Simple = 1,
        Hierarchy = 2
    }
    interface RuleSetDto {
        Id: string;
        Name: string;
        BehaviorType: string;
        RunFlowId: string;
        FlowSetType?: FlowSetTemplateType;
        DefaultCategory: SampleCategory;
        Instances?: $D.FlowSets.DropDownItem[];
        RuleSetsInSet: RuleSetDto[];
        TileData: $D.Framework.Design.Report.Tiles.TileData[];
        PromptDisplayData: PromptDisplayData;
    }
}
