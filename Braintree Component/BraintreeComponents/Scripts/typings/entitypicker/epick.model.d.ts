/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.EntityPicker {
    import EntityPickerSettings = $D.Framework.Design.Properties.Attributes.EntityPickerSettings;
    import DecisionsTypePickerSettings = $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings;
    import ElementRegistrationPickerSettings = $D.Framework.ServiceLayer.Services.ElementRegistrationPickerSettings;
    class EntityPickerModelFactory {
        static create(shortModelTypeName: string, settings: EntityPickerSettings): DefaultEntityPickerModel;
        static createFromJson(rawModel: string): DefaultEntityPickerModel;
    }
    interface EntityPickerModel {
        getNavigationTreeModel(): Tree.EntityPickerTreeModel;
        getPickedLabel(): JQueryPromise<string>;
        getPickedEntityId(): string;
        setPickedEntityId(pickedEntityId: string): any;
        hasSearch(): boolean;
        getGlobalSearchTreeModel(searchText: string): Tree.GlobalSearchEntityPickerTreeModel;
    }
    class DefaultEntityPickerModel implements EntityPickerModel {
        private additionalNodes?;
        protected get DataFetcher(): EntityPickerItemFetcher;
        Settings: EntityPickerSettings;
        private dataFetcher;
        constructor(settings: EntityPickerSettings, additionalNodes?: Tree.EpickNode[]);
        getNavigationTreeModel(): Tree.EntityPickerTreeModel;
        hasSearch(): boolean;
        getGlobalSearchTreeModel(searchText: string): Tree.GlobalSearchEntityPickerTreeModel;
        setPickedEntityId(pickedEntityId: string): void;
        getPickedEntityId(): string;
        getPickedLabel(): JQueryPromise<string>;
    }
    class DecisionsTypePickerModel extends DefaultEntityPickerModel {
        constructor(settings: DecisionsTypePickerSettings);
        getNavigationTreeModel(): Tree.EntityPickerTreeModel;
    }
    class ElementRegistrationPickerModel extends DefaultEntityPickerModel {
        constructor(settings: ElementRegistrationPickerSettings);
    }
    class FolderPickerModel extends DefaultEntityPickerModel {
        getNavigationTreeModel(): Tree.EntityPickerTreeModel;
    }
    class DecisionsTypeDropdownModel extends DefaultEntityPickerModel {
        private nodes;
        constructor(settings: DecisionsTypePickerSettings, nodes: Tree.EpickNode[]);
        getNavigationTreeModel(): Tree.EntityPickerTreeModel;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
