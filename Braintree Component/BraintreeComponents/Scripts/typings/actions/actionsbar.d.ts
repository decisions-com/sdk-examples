/// <reference path="../dp-cmp/dp-cmp.d.ts" />
declare namespace $DP.Common.Actions {
    interface CreateActionBarOptions {
        entityId: string;
        entityTypeName: string;
        actionButtonCssClass?: string;
        menuCssClass?: string;
        showAllButton?: boolean;
        minPrimaryActions?: number;
        minSecondaryActions?: number;
        isMobile?: boolean;
        actionFilters?: ActionButtonOverride[];
        filterActions?: boolean;
        actionBarCssClass?: string;
        primaryActionsCssClass?: string;
        secondaryActionsCssClass?: string;
        isFullSize?: boolean;
        folderId?: string;
    }
    function createActionBarForEntity(props: Readonly<{
        host: HTMLElement;
    } & CreateActionBarOptions>): Promise<void>;
    function renderActionsBar(host: HTMLElement, model: ActionsBarModel, callback?: dpComponents.RenderCallback): void;
    function convertToProps(host: HTMLElement, model: ActionsBarModel, className?: string): dpComponents.IActionBarProps;
}
