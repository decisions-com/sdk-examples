/**
 * relative position of Page controls
 * used for deprecated page parts margins that were defined at PortalSettings
 * not used for new pages since 6.0
 * */
declare namespace $DP.Containers {
    enum ComponentPosition {
        None = 0,
        Left = 1,
        Center = 2,
        Right = 4,
        Top = 8,
        Middle = 16,
        Bottom = 32
    }
}
declare namespace $DP.Containers.Utils {
    function getRelativeComponentPosition(el: JQuery): ComponentPosition;
    function setRelativePosition(el: JQuery, position: ComponentPosition): void;
    function getPagePartEdges(el: JQuery, position: ComponentPosition): $DP.Common.Edges;
    function getVerticalChildPosition(position: ComponentPosition, top: boolean, bottom: boolean): ComponentPosition.Left | ComponentPosition.Center | ComponentPosition.Right | ComponentPosition.Top | ComponentPosition.Middle | ComponentPosition.Bottom;
    function getHorizontalChildPosition(position: ComponentPosition, left: boolean, right: boolean): ComponentPosition.Left | ComponentPosition.Center | ComponentPosition.Right | ComponentPosition.Top | ComponentPosition.Middle | ComponentPosition.Bottom;
}
