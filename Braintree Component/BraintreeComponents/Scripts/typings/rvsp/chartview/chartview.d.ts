/// <reference path="../../typings/jquery/jquery.d.ts" />
declare namespace $DP.Controls.Report {
    class ChartView {
        chartHost: JQuery;
        chartData: ChartDataOptions;
        constructor(chartData: ChartDataOptions);
        getChartLabel(aggregatedItem: ChartAggregatedItem): string;
        setLegendLabels(legendText: any): void;
        getLegendProperties(): ChartLegend;
        getChartLabelFormatString(): string;
        getFormattedChartLabel(chartLabel: string): string;
    }
    interface PieSlice {
        label: string;
        legendEntry: boolean;
        data: any;
        originalData: any;
    }
    interface SeriesStyle {
        stroke: string;
        strokewidth: number;
        fill: string;
        opacity: number;
    }
    interface ChartLegend {
        visible?: boolean;
        compass?: string;
    }
    class BarChart extends ChartView {
        private labelTextCssClass;
        private chart;
        private controlsContainer;
        private testingReactChart;
        constructor(chartData: ChartDataOptions, labelTextCssClass?: string);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
    }
    class LineChart extends ChartView {
        private chart;
        private testingReactChart;
        constructor(chartData: ChartDataOptions, setMinimum: boolean);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
    }
    class BubbleChart extends ChartView {
        private labelTextCssClass;
        private chart;
        constructor(chartData: ChartDataOptions, labelTextCssClass?: string);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
    }
    class PieChart extends ChartView {
        private elementsHaveBorder;
        private elementsBorderColor;
        private labelBackgroundCssClass;
        private labelTextCssClass;
        private chart;
        private testingReactChart;
        constructor(chartData: ChartDataOptions, elementsHaveBorder: boolean, elementsBorderColor: $D.Silverlight.UI.Utilities.DesignerColor, labelBackgroundCssClass?: string, labelTextCssClass?: string);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
        getPieChartLabelBlock(labelBackgroundCssClass: any, labelTextCssClass: any): void;
        removePieBorderOnHover(elem: any, seriesStyles: any): void;
        getChartLegend(value: any): string;
        getInnerRadius(width: number, height: number): number;
    }
    class SimpleBarChart extends ChartView {
        private chart;
        constructor(chartData: ChartDataOptions);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
    }
    class GaugeChart extends ChartView {
        private maximum;
        private labelTextCssClass;
        private chart;
        constructor(chartData: ChartDataOptions, maximum: number, labelTextCssClass?: string);
        initialize(): void;
        renderer(data: any): void;
        resizer(): void;
        disposer(): void;
    }
}
interface JQueryStatic {
    wijraphael: any;
}
