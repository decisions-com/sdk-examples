/// <reference path="../../dialog/dialog.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Designers.SequentialPicker {
    import SelectValuePieceDto = $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto;
    import SubProperty = $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty;
    interface SequantialDialogOptions {
        title?: string;
        width?: number | string;
        height?: number | string;
        onClosed?: () => void;
        onDoneClick: (options: {
            e: JQueryEventObject;
            picker: SequentialPicker;
        }) => Promise<void>;
    }
    function showSequentialPickerInDialog(picker: SequentialPicker, options: SequantialDialogOptions): JQuery;
    function showSequentialPicker(session: $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession): void;
    function showSequentialPickerDialog(options: {
        /**
         * Session for editing sequence of SelectValuePiece
         */
        sessionId: string;
        sequence: SelectValuePieceDto[];
        nextItems: SubProperty[];
        selectedPath: string;
        forInputName: string;
        forInputType: string;
        showHeader: boolean;
        isEditableAsString: boolean;
        pieceService: SequentialServiceStatic;
        /**
         * There are 2 cases:
         * 1) We have property grid and from one we open sequential editor, then we shouldn't complete editing property grid on dialog close
         * completePropertyGridEditingOnClose = false
         * 2) We create property grid only to show sequential editor, then we should complete editing property grid on dialog close
         * completePropertyGridEditingOnClose = true
         */
        completePropertyGridEditingOnClose: boolean;
        onEditComplete?: (event: {
            picker: SequentialPicker;
        }) => void;
    }): void;
    function showSequentialPickerDialogPromise(options: {
        readonly serverContext: $D.Framework.Design.Flow.Service.MappingContext;
        readonly editingContextId: string;
        readonly propertyPath: string[];
        readonly pieceService?: SequentialServiceStatic;
        readonly showHeader: boolean;
        readonly completePropertyGridEditingOnClose: boolean;
        onEditComplete?: (event: {
            picker: SequentialPicker;
        }) => void;
    }): Promise<void>;
}
