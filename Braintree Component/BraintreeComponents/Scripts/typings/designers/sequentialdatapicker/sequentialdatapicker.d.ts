/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/MappingDataService.d.ts" />
/// <reference path="../../common/listbox.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="selectlist.d.ts" />
/// <reference path="sequenceitem.d.ts" />
declare namespace $DP.Designers.SequentialPicker {
    import SelectValuePieceDto = $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto;
    import SubProperty = $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty;
    import SelectionType = $D.Framework.Design.Flow.Mapping.SelectValue.SelectionType;
    interface NextItemSelectedEvent {
        readonly origin: SequentialPicker;
        readonly piece: SelectValuePieceDto;
        readonly nextItem: SelectListItem;
    }
    interface RemoveItemClickEvent {
        readonly origin: SequentialPicker;
        readonly item: SequenceItem;
    }
    interface ListSelectionTypeChangedItemEvent {
        readonly origin: SequentialPicker;
        readonly newType: SelectionType;
        readonly item: SequenceItem;
    }
    interface RuleItemClickEvent {
        readonly origin: SequentialPicker;
        readonly item: SequenceItem;
        readonly jqueryEvent: JQueryEventObject;
    }
    interface TypeSelectedEvent {
        readonly origin: SequentialPicker;
        readonly item: SequenceItem;
        readonly newType: string;
        readonly converterName: string;
        readonly jqueryEvent: JQueryEventObject;
    }
    interface SequentialDataPickerUpdate {
        sequence: SelectValuePieceDto[];
        nextItems?: SubProperty[];
        selectedPath: string;
        isEditableAsString: boolean;
    }
    type HeaderMode = "full" | "search";
    interface SequentialDataPickerOptions {
        readonly host?: JQuery;
        readonly sequence: SelectValuePieceDto[];
        readonly nextItems: SubProperty[];
        readonly selectedPath: string;
        readonly isEditableAsString: boolean;
        readonly forInput?: {
            name: string;
            type: string;
        };
        readonly headerMode?: HeaderMode;
        readonly onRemoveItemClick: (event: RemoveItemClickEvent) => void;
        readonly onRuleItemClick: (event: RuleItemClickEvent) => void;
        readonly onNextItemSelected: (event: NextItemSelectedEvent) => void;
        readonly onTypeSelected: (event: TypeSelectedEvent) => void;
        readonly onItemReplaceClick: (event: {
            origin: SequentialPicker;
            oldItem: SequenceItem;
            newItem: SelectListItem;
        }) => void;
        readonly onListSelectionTypeChanged: (event: ListSelectionTypeChangedItemEvent) => void;
        readonly getNextItems: (event: {
            origin: SequentialPicker;
            piece: SelectValuePieceDto;
        }) => Promise<SubProperty[]>;
        readonly search: (event: {
            origin: SequentialPicker;
            criteria: string;
        }) => Promise<string[]>;
        readonly onSuggestionSelected: (event: {
            origin: SequentialPicker;
            path: string;
        }) => void;
    }
    class SequentialPicker {
        private options;
        static get DATA_KEY(): string;
        private $view;
        private $list;
        private $content;
        private layer;
        private selectedPath;
        private nextItems;
        private sequence;
        private isEditableAsString;
        private searchBox;
        constructor(options: SequentialDataPickerOptions);
        getLastPiece(): SelectValuePieceDto;
        getView(): JQuery;
        update(options: SequentialDataPickerUpdate): void;
        private getSequenceCount;
        private render;
        private renderContent;
        private appendHeader;
        private appendSequenceList;
        private showNextItemsInLayer;
        private appendNextItemsToSurface;
    }
    function createSequentialPicker(options: {
        readonly host?: JQuery;
        /**
         * Session for editing sequence of SelectValuePiece
         */
        readonly sessionId: string;
        readonly sequence: SelectValuePieceDto[];
        readonly nextItems: SubProperty[];
        readonly selectedPath: string;
        readonly forInputName?: string;
        readonly forInputType?: string;
        readonly headerMode?: HeaderMode;
        readonly isEditableAsString: boolean;
        readonly pieceService: SequentialServiceStatic;
        readonly onDone?: (options: {
            picker: SequentialPicker.SequentialPicker;
        }) => void;
    }): SequentialPicker;
}
