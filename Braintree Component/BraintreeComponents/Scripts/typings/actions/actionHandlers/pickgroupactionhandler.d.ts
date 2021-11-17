declare namespace $DP.ActionHandlers {
    interface PickGroupActionHandlerOptions {
        groups: string[];
        holder: JQuery;
        actionUniqueName: string;
        entityId: string;
        entityInfo: $D.Framework.ServiceLayer.Services.Folder.EntityAction[];
        typeName: string;
    }
    class PickGroupActionHandler {
        private options;
        private $addBtn;
        private $removeBtn;
        private $okBtn;
        private $root;
        private selectedGroup;
        get groupItemDataName(): string;
        constructor(options: PickGroupActionHandlerOptions);
        static create(options: PickGroupActionHandlerOptions): PickGroupActionHandler;
        initialize(): void;
        render(): void;
        getGroupItems(): string;
        updateGroupItems(): void;
        attachEvents(): void;
    }
}
