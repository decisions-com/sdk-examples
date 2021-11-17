declare namespace $DP.Containers {
    enum SilverContainerBackgroundType {
        Transparent = 0,
        Color = 1,
        Image = 2
    }
    enum SilverContainerBackgroundAlignmentX {
        Left = 0,
        Center = 1,
        Right = 2
    }
    enum SilverContainerBackgroundAlignmentY {
        Top = 0,
        Center = 1,
        Bottom = 2
    }
    interface ChildInfo {
        componentId?: string;
    }
    interface GridChildInfo extends ChildInfo {
        row?: any;
        column?: any;
        rowSpan?: any;
        columnSpan?: any;
    }
    interface ResponsiveContainerChildInfo extends ChildInfo {
        height: number;
        minWidth: number;
        isFullWidth?: boolean;
    }
    interface SplitContainerChildInfo extends ChildInfo {
        panelIndex: $DP.Common.PanelIndex;
    }
}
