declare namespace $DP.Portal {
    function getPortalActions(options: {
        isStudio: boolean;
        isUserInDesignersOrAdministratorGroup: boolean;
        baseUrl: string;
        returnUrl: string;
        isAdministratorUser: boolean;
    }): Promise<dpComponents.IPortalActionLinkItem[]>;
    function getActionsForSmallHeader(): dpComponents.IPortalActionLinkItem[];
}
