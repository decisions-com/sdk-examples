declare namespace $DP.Common.NumberUtilities {
    interface NumberFormattingOptions {
        maximumFractionDigits: number;
    }
    function convertToDoubleDigits(num: number): string | number;
    function range(size: number, startAt?: number): number[];
    function formatNumber(valueToFormat: string | number, numberFormat: NumberFormat, options?: NumberFormattingOptions): number;
    function parseNumber(valueToParse: string, numberFormat: NumberFormat): string;
    function parseIntoNumber(valueToParse: string, numberFormat: NumberFormat): number;
    /**
     * Converts number to formatted string
     * @param value number for formatting
     * @param decimalSeparator string which used to separate intergers and decimals. Comma: "123,456", dot: "123.456"
     * @param groupSeparator string which can be used to separate group, for example - white space, "123 456 789"
     * @param precision count decimals after dot. if value = 123.456, precision = 3
     * @example
     * $DP.Common.NumberUtilities.format(123456789.123456, ",", " ") // "123 456 789,123456"
     */
    function format(value: number, decimalSeparator: string, groupSeparator?: string, precision?: number): string;
    /**
     * Parse formatted string to number.
     * @example
     * parse("123.2", ".") // 123.2
     * parse("123,2", ",") // 123.2
     */
    function parse(value: string, decimalSeparator: string): any;
    /**
     * Count decimals after dot.
     * @example
     * countDecimals(7.245); // 3
     * countDecimals(7.24); // 2
     * countDecimals(7); // 0
     */
    function countDecimals(value: number): number;
    /**
     * checks if provided parameter is a number and finite
     */
    function isValidNumber(num: any): boolean;
}
