// Global things defined in different not yet converted .js files
// get rid of this file once all this appeared in .ts

// init.js
declare var enableConfirmation: () => any;
declare var needConform;

// CoreScripts.cshtml
declare var portalBaseURL: string;
declare var portalSetup: UserPortalSettingInformation;
// Decisions.ClientEvents.js
declare var UnregisterAllEventAndSession: () => any;

// navigation-mobile.js
declare var allowShowingLoader: boolean;

interface Window {
    action_handlers: {};
    HidePortalSplitter();
    hideExistingMenu();
    enableConfirmation: boolean;
    disableConfirmation: boolean;
    IsGroupAction: boolean; // decisions.menu.js
    jQuery: JQuery;
    $: any;
}

interface UserPortalSettingInformation {
    Chrome?: $DP.Portal.ChromeSetting;
    ImpersonatedUser: string;
    UserDisplayName: string;
    StartupPopUpPage: any; //PopUpFolderPage;
    Settings: MvcPortalSetting;
    HomeFolderId: string;
    HomeFolderName: string;
    DefaultFolderId: string;
    PinnedFolderId: string;
    TimeZoneInformation: string;
    ShowSettingsInHeader: boolean;
    ShowAccountInHeader: boolean;
    ShowAboutInHeader: boolean;
    ShowLockInHeader: boolean;
    ShowLogoutInHeader: boolean;
    CanAddRootFolder: boolean;
    CurrentUserEmail: string;
    CurrentInstanceName: string;
    InitialFolderId: string;
    UseTimeZoneTranslation: boolean;
    LicenseType: string;
}

interface MvcPortalSetting {
    ShowLogoInHeader: boolean;
    Logo: string;
    SloganText: string;
    ActionLocation: any; //MainActionLocation;
    BrowsePageName: string;
    LockPortalShortcut: any; //ShortcutInfo;
    AutoLockReloginAppearance: any; // AutoLockReloginAppearance;
    InlineSearchResultLimit: number;
    MinPortalHeight: number;
    MinPortalWidth: number;
    IsShowDevelopmentAction: boolean;
    NotificationTimeout: number;
    NotificationItemsTimeout: number;
    ShowLockPortalAction: boolean;
    AddSecureCookie: boolean;
    ShowDetailLinkOnErrorDialog: boolean;
    ExtensionsNotAllowed: string[];
    ShowCurrentFolderNameInHeader: boolean;
    ShowFavorites: boolean;
    HideWorkflowCatalog: boolean;
    ShowFoldersCatalog: boolean;
    ShowRecentFolder: boolean;
    HideTopBarSearch: boolean;
    PortalSideBarDefaultPanel: any; //PortalSideBarDefaultPanel;
    CollapsedTreeOnStartStudio: boolean;
    CollapsedTreeOnStartUserPortal: boolean;
    ShowCreateRootFolder: boolean;
    UserBackAccountKey: string;
    RootWorkflowCatalogItems: string;
    DoNotAutoGenerateThemeCss: boolean;
    TimeFormat: any; //TimeFormats;
    AutoSubmitInterval: number;
    DisableSupportChat: boolean;
    SupportEmailAddress: string;
    ChatServiceURL: string;
}
