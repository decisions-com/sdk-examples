declare namespace $DP.Common.Actions {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    enum ActionButtonOverrideType {
        KeepOriginal = 0,
        Primary = 1,
        Secondary = 2
    }
    interface ActionButtonOverride {
        OriginalCategory: string;
        OriginalActionName: string;
        OverrideDisplayInfo: boolean;
        /**
         * Determines whether show action in category. Category name provided in @field OverridedCategory.
         * If value = false, then @field OverridedCategory will not be used
         */
        ShowInCategory: boolean;
        OverridedCategory: string;
        OverridedActionName: string;
        OverridedSortIndex: number;
        OverridedType: ActionButtonOverrideType;
    }
    function overrideAction(action: ActionHeader, actionOverride: ActionButtonOverride): ActionHeader;
}
