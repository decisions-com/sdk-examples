declare namespace $DP.Common.Actions {
    type ActionBarButton = dpComponents.IActionBarItemData & {
        buttons: ActionHeader[];
    };
    function createActionBarButton(options: {
        label: string;
        buttons: ActionHeader[];
        priority: number;
        isPrimary: boolean;
        isGroup: boolean;
        order: number;
    }): ActionBarButton;
    function createActionBarPrimaryButton(label: string, buttons: ActionHeader[]): ActionBarButton;
    function createActionBarSecondaryButton(label: string, buttons: ActionHeader[]): ActionBarButton;
    function createActionBarAllButton(buttons: ActionHeader[]): ActionBarButton;
    function isGroupButton(buttons: ActionHeader[]): boolean;
    function isAllButton(button: dpComponents.IActionBarItemData): boolean;
    function getOrder(buttons: ActionHeader[]): number;
}
