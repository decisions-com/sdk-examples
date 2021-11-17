/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.EntityPicker {
    import EntityTypeInfo = $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo;
    import EntityPickerItem = $D.Framework.ServiceLayer.Services.EntityPickerItem;
    import EntityPickerFolder = $D.Framework.ServiceLayer.Services.EntityPickerFolder;
    class EntityPickerItemFetcher {
        private types;
        private filterNames;
        private client;
        constructor(types: EntityTypeInfo[], filterNames: string[]);
        fetchFolder(id: string): JQueryPromise<EntityPickerFolder>;
        fetchRootFolders(): JQueryPromise<EntityPickerFolder[]>;
        fetchSubFolders(folderId: string): JQueryPromise<EntityPickerFolder[]>;
        fetchEntities(folderId: string): JQueryPromise<EntityPickerItem[]>;
        fetchEntity(entityId: string): JQueryPromise<EntityPickerItem>;
        searchEntities(searchText: string, folderId?: string): JQueryPromise<EntityPickerItem[]>;
        fetchEntitiesOfTypes(types: EntityTypeInfo[]): JQueryPromise<EntityPickerItem[]>;
        fetchFavorites(): JQueryPromise<EntityPickerItem[]>;
        fetchRecentEntites(): JQueryPromise<EntityPickerItem[]>;
    }
    class EpickSettings {
        static getForType(typeName: string): $D.Framework.Design.Properties.Attributes.EntityPickerSettings;
        static getForFolder(): $D.Framework.Design.Properties.Attributes.EntityPickerSettings;
        static getForElementRegistration(elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], subElementType?: string, includeEmptySubElements?: boolean, behaviorTypeName?: string): $D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings;
        static getForDecisionsTypes(filterNames?: string[]): $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings;
    }
    class EpickApi {
        static getFavoriteDecisionsTypes(): JQueryPromise<EntityPickerItem[]>;
        static getRecentlyPickedDecisionsTypes(): JQueryPromise<EntityPickerItem[]>;
        static addRecentPickedEntity(entityId: any): void;
    }
    class EpickConstants {
        static get favoriteEventId(): string;
        static get folderTypeName(): string;
        static get accountTypeName(): string;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
