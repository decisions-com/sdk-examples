declare namespace $DP.Common {
    interface RestorableListItemOptions<TEntity> extends ListItemOptions {
        isDeleted?: boolean;
        showRightIcon?: boolean;
        /**
         * Prompt which will be shown on hover
         */
        hint?: string;
        onDelete?: (item: RestorableListBoxItem<TEntity>, entity?: TEntity) => void;
        onRestore?: (item: RestorableListBoxItem<TEntity>, entity?: TEntity) => void;
    }
    class RestorableItemCss {
        static get rootClassName(): string;
        static get undoIconClassName(): string;
        static get deleteIconClassName(): string;
    }
    class RestorableListBoxItem<TEntity> extends ListBoxItem {
        protected options: RestorableListItemOptions<TEntity>;
        constructor(options: RestorableListItemOptions<TEntity>);
        /**
         * @description mark item as deleted
         * @param triggerEvent determines whether to trigger onDelete event
         */
        delete(triggerEvent?: boolean): void;
        /**
         * restore item if it was marked as deleted
         */
        restore(): void;
        private applyRestoreToElement;
        private applyDeleteToElement;
        private attachHoverItemEvent;
        private createDeleteButton;
        private createRestoreButton;
    }
}
