/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/dompurify/index.d.ts" />
declare namespace $DP.StringUtils {
    function replaceAllInstances(value: string, searchValue: string, replaceValue: string): string;
    function equals(val1: string, val2: string, caseSensitive?: boolean): boolean;
    function GetSize(byteCount: number): string;
    function stripInvalidCharacters(input: string): string;
    function endsWith(str: string, suffix: string): boolean;
    function startsWith(str: string, suffix: string, caseSensitive?: boolean): boolean;
    function decodeHTML(input: string): string;
    function encodeHTML(input: string): string;
    function encodeScriptTags(input: string): string;
    function decodeScriptTags(input: string): string;
    function containsScriptTag(input: string): boolean;
    function camelCaseToDash(str: string): string;
    function getHashCode(str: string): number;
    function capitalize(str: string): string;
    function containAny(str: string, search: string[], caseInsensitive?: boolean): boolean;
    function equalsAny(str: string, samples: string[], caseInsensetive?: boolean): boolean;
    function repeat(str: string, howmany: number): string;
    function replaceNaN(str: string): string;
    function encodeByteArrayToBase64String(data: number[]): string;
    function sanitizeHtml(html: any, allowAttributes?: string[], forceBody?: boolean): string;
    /**
     * @example replaceAt("Hello World", 2, "!!") // He!!o World
     */
    function replaceAt(str: string, index: number, replacement: string): string;
    function isValidEmailAddress(emailAddress: string): boolean;
}
declare namespace $DP {
    function stringIsNullOrEmpty(value: string): boolean;
    function stringIsNullOrWhitespace(value: string): boolean;
    function stringStartsWidth(value: string, prefix: string): boolean;
    function stringEndsWidth(value: string, suffix: string): boolean;
    function stringContains(value: string, searchString: string, caseInsensitive?: boolean): boolean;
    function generateRandomId(noDashes?: boolean): string;
    function shortenString(original: string, separator: string, maxLength?: number, replaceWith?: string, keepBothEnds?: boolean): string;
    function splitCamelCase(original: string): string;
}
