declare namespace $DP.Designers.SequentialPicker {
    import SubProperty = $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty;
    class SelectListItem implements $DP.Common.BaseListItem {
        private readonly options;
        private $view;
        constructor(options: {
            readonly entity: SubProperty;
            readonly typeName: string;
            readonly isArray: boolean;
            readonly isEnum: boolean;
            readonly isSutableType: boolean;
            readonly resolvedValue: string;
            readonly title: string;
            readonly onClick: (event: {
                origin: SelectListItem;
            }) => void;
        });
        getEntity(): SubProperty;
        getView(): JQuery;
        private render;
    }
    function createSelectList(options: {
        rootStyle?: $DP.Common.StyleProps;
        nextItems: SubProperty[];
        showHeader: boolean;
        onClick: (event: {
            origin: SelectListItem;
        }) => void;
    }): $DP.Common.ListBox<SelectListItem>;
}
