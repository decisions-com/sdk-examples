declare namespace $DP.Layout {
    class LayoutCalculation {
        /**
         * calculates layout based on total size and elements configuration
         * @param totalSize - expected size of all elements
         * @param elements - layout configuration
         * @param stretchAllFixed -- allows to stretch all fixed elements
         */
        static calc(totalSize: number, elements: LayoutElement[], stretchAllFixed?: boolean): LayoutElement[];
        private static stretchElements;
        static getPercentWidthChanges(elements: LayoutElement[], deltaSize: any, respectOverflow: boolean): any[];
        static adjustOverflow(overflow: any, o: LayoutElement[], p: any, respectOverflow: any): number;
        private static calcDeltaSize;
    }
}
