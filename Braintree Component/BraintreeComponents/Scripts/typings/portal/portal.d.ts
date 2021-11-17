/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/chartservice.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
declare namespace $DP.Portal {
    import ActionHeader = $D.Framework.ServiceLayer.Actions.ActionHeader;
    interface PortalOptions {
        messageToShow?: string;
        runStartupInstruction?: boolean;
        returnUrl?: string;
        isStudio?: boolean;
        baseUrl?: string;
        isUserInDesignersOrAdministratorGroup?: boolean;
        isDebuggingEnabled?: boolean;
        serviceCatalogPanelTitle: string;
        foldersPanelTitle: string;
        hasStudioRights?: boolean;
        showBrowseView?: boolean;
        translatedBrowsePageName?: string;
        host: JQuery;
        isAdministratorUser?: boolean;
    }
    class InitializePortal {
        options: PortalOptions;
        private resizeTimer;
        homeFolderId: string;
        portalSplitter: $DP.Common.Split;
        portalLeftPanel: $DP.Portal.LeftPanel;
        portalPage: $DP.Portal.PortalPage;
        pageHost: JQuery;
        private globalActionCache;
        static browserName: string;
        constructor(options: PortalOptions);
        private showMessage;
        private preloadImages;
        private loadImages;
        getGlobalActionCache(): ActionHeader[];
        static get(elem: JQuery): InitializePortal;
        static updateHomePageId(eventId: any, newHomeFolderId: string): void;
        attachEvents(): void;
        private resize;
        initialize(): Promise<void>;
        private initializeFileUpload;
        private initializePortalSplitter;
        private initializeLeftPanel;
        private initializePage;
        static onPageLoad(options: htmlPageLoadOptions): void;
        static savePersonalizationAndUpdateParts(pageId: string, partIds: string[], personalizations: any): Promise<void>;
        static updateParts(partIds: string[], pageId: string, personalization: dpComponents.SessionPersonalization): Promise<void>;
    }
    interface htmlPageLoadOptions {
        instanceid: string;
        pageContextId: string;
        dateRangeAwareComponentsids: string[];
        pageSurfaceKey: string;
        configurationStorageId: string;
        personalization?: any;
        initialPartsData?: {
            [partId: string]: Object;
        };
    }
    class UI {
        static refreshCurrentPage(): void;
        static refreshComponent(componentId: string): void;
    }
    const PageDataStore: Map<string, htmlPageLoadOptions>;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
