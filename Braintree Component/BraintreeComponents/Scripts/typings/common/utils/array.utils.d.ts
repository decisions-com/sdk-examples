declare namespace $DP.ArrayUtilities {
    function deepCopy(o: any): any;
    function areEqual<T>(a: T[], b: T[], comparer?: (a: T, b: T) => boolean): boolean;
    function AreEqual(a: any[], b: any[]): boolean;
    /**
     * Deletes given item from array. Mutate initial array.
     * @param array Initial array
     * @param item item to remove
     */
    function removeItem<T>(array: T[], item: T, throwIfNotFound?: boolean): void;
    /**
     * Deletes given items from array. Does not mutate initial array.
     * @param array initial array
     * @param itemsToRemove items to remove
     */
    function removeItems<T>(array: T[], itemsToRemove: T[]): T[];
    function lastItem<T>(array: T[]): T;
    function isNotEmpty(a: any[]): boolean;
    function isEmpty(a: any[]): boolean;
    function distinct(arr: any[]): any[];
    /**
     * Converts one-dimentional array to two-dimentional array with spicified count of columns
     * @param array
     * @param colCount - count of columns for two-dimentional array
     */
    function toMatrix<T>(array: T[], colCount: number): T[][];
    function zip<T>(...arrays: T[][]): T[][];
    function getValueByKey<T1, T2>(dictionary: Array<{
        Key: T1;
        Value: T2;
    }>, key: T1): T2;
    function sortArrayByKey<T>(array: T[], key: string, direction?: "ascending" | "descending"): T[];
    function isInArray(value: any, array: any): boolean;
}
