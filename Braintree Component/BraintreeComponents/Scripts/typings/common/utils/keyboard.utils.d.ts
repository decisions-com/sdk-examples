declare namespace $DP.Keyboard {
    function getNextControl(tabIndex: number, forward: any, tabEnabledElements: Element[]): JQuery;
    function isControlFocusable(control: JQuery): boolean;
}
