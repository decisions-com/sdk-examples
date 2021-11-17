declare namespace $DP.Containers {
    interface ResponsiveContainerOptions extends ContainerOptions {
        sectionsMargin?: number;
    }
    /**
     * See https://sites.google.com/a/decisions.com/dev-team-wiki/dev-guidelines-and-cookbooks/layout-containers/responsive-container
     */
    class ResponsiveContainer extends BaseContainer implements SnapTo {
        readonly options: ResponsiveContainerOptions;
        private cells;
        constructor(options: ResponsiveContainerOptions);
        render(): JQuery;
        takeChild(el: JQuery, childInfo: ResponsiveContainerChildInfo): void;
        layout(size: $DP.UI.Size): void;
        canSnapto(point: $DP.Common.Point): boolean;
        getSnaptoRectangle(point: $DP.Common.Point, dragContext?: $DP.Designers.Forms.ComponentDragContext): Common.Rectangle;
        get isResponsive(): boolean;
    }
}
