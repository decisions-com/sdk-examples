/// <reference path="string.utils.d.ts" />
declare namespace $DP.Utils.Type {
    /**
     * Checks .Net type is Number or not
     * @example
     * isNumber("System.Int32")
     */
    function isNumber(type: string): boolean;
    /**
     * @example
     * isSignedInt('System.String')
     */
    function isSignedInt(type: string): boolean;
    /**
     * @example
     * isUnsignedInt('System.UInt32')
     * isUnsignedInt('System.String')
     */
    function isUnsignedInt(type: string): boolean;
    function isInt(type: string): boolean;
    function isReal(type: string): boolean;
    function isString(type: string): boolean;
    function isBoolean(type: string): boolean;
    function isDateTime(type: string): boolean;
    function isIntValue(str: string): boolean;
    function isNonNegativeIntValue(str: string): boolean;
    function isNegativeIntValue(str: string): boolean;
    function isRealValue(value: string): boolean;
    function getShortType(type: string): string;
    function isNullOrUndefined(obj: any): boolean;
    function parseJSON(text: string, throwError?: boolean): any;
    function convertCamelToPascalCase(camelCaseObject: any): any;
}
