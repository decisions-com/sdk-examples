declare namespace $DP.Designers.SequentialPicker {
    import SelectValuePieceDto = $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto;
    import SelectionType = $D.Framework.Design.Flow.Mapping.SelectValue.SelectionType;
    type SequenceItemRemoveEvent = (event: {
        origin: SequenceItem;
        jqueryEvent: JQueryEventObject;
    }) => void;
    type SequenceItemSelectEvent = (event: {
        origin: SequenceItem;
        jqueryEvent: JQueryEventObject;
    }) => void;
    type SequenceItemPickRuleEvent = (event: {
        origin: SequenceItem;
        jqueryEvent: JQueryEventObject;
    }) => void;
    type SequenceItemPickTypeEvent = (event: {
        origin: SequenceItem;
        jqueryEvent: JQueryEventObject;
        newType: string;
        converterName: string;
    }) => void;
    type ListSelectionTypeChangedEvent = (event: {
        origin: SequenceItem;
        newType: SelectionType;
    }) => void;
    interface SequenceItemOptions {
        readonly host?: JQuery;
        readonly entity: SelectValuePieceDto;
        readonly rootStyle?: StyleProps;
        readonly onRemove?: SequenceItemRemoveEvent;
        readonly onSelect?: SequenceItemSelectEvent;
        readonly onRuleClick?: SequenceItemPickRuleEvent;
        readonly onPickType?: SequenceItemPickTypeEvent;
        readonly onListSelectionTypeChanged?: ListSelectionTypeChangedEvent;
    }
    class SequenceItem {
        private options;
        private $view;
        static get DATA_KEY(): string;
        constructor(options: SequenceItemOptions);
        get entity(): SelectValuePieceDto;
        getView(): JQuery;
        disableSelect(): void;
        enableSelect(): void;
        private render;
        private createBottomActions;
        private refreshBottomActions;
        private getValidations;
        private setListSelectionType;
        private createValidaiton;
    }
}
