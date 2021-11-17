/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../common/utils/array.utils.d.ts" />
declare namespace $DP.Designers.SequentialPicker {
    import SelectValuePieceDto = $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto;
    function getPrevious(sequence: SelectValuePieceDto[], current: SelectValuePieceDto): SelectValuePieceDto;
    function getIconClassName(typeName: string, isEnum: boolean, isArray: boolean): string;
}
