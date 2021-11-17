/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../layouts/decisions.ui.d.ts" />
/// <reference path="../typings/core/generated/activedirectoryservices.d.ts" />
declare namespace $DP.ActiveDirectory {
    import ActiveDirectoryServerRegistation = $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation;
    import ActiveDirectorySyncOption = $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySyncOption;
    interface ADItem {
        path: string;
        name: string;
    }
    interface ADContentOptions {
        instanceId: string;
        contextId: string;
        isOrgUnit: boolean;
        OUnit: string;
        delay: number;
        editingContextId: string;
        path: string[];
        inputList: string[];
        title: string;
        onClose: (selectedEntites: any) => void;
    }
    class ActiveDirectoryPickerContent {
        private options;
        isTreeVisible: boolean;
        textBoxValSubmitTimer: number;
        tree: $DP.Common.DPTree;
        folders: string[];
        adRegistration: ActiveDirectoryServerRegistation;
        selectedEntities: string[];
        adContainer: JQuery;
        syncOption: ActiveDirectorySyncOption;
        constructor(options: ADContentOptions);
        initialise(): Promise<void>;
        private search;
        activeDirectoryTreeLoader(elem: JQuery): Common.DPTree;
        loadCategoriesForOrganisation(folderName: string, parentNode: string): {
            text: string;
            children: boolean;
            data: {
                path: string;
            };
        };
        static openAdDialogAndInitialiseADContent(options: ADContentOptions): Promise<void>;
        openAdDialog(): void;
        setValue(): Promise<void>;
        getAdContentView(): Promise<string>;
        getViewIfTreeVisible(): string;
        getLimitedListForActiveDirectory(): Promise<void>;
        isTreeVisibleOrNot(): void;
        getEditorConfigurationValue(dataPairs: DataPair[], dataKey: any): any;
        getDisplayPath(path: string): string;
        getItems(folders: string[], ounit: string): ADItem[];
        getSearchResult(searchText: string): Promise<any[]>;
        getSearchView(searchText: string): Promise<string>;
        getADView(adItems: any): string;
        addSelectedEntity(entity: any): void;
        removeSectedEntity(entity: any): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
