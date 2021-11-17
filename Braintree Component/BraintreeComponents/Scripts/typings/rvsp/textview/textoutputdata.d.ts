declare namespace $DP.Controls.Report.Text {
    enum TextGroupMode {
        Expand = 0,
        Collapse = 1
    }
    interface TextOutputDataOptions {
        instanceId: string;
        textDataHolder: JQuery;
        folderId: string;
        textOutput: ReportTextOutput[];
        groupNo: number;
        showOnlyGroupValueInTextView: boolean;
        showLinkOnHover: boolean;
        autoSelectFirstRow: boolean;
        multiSelectedIds: string[];
        singleSelectedId: string;
        collapsedGroupIds: string[];
        showActionsOnRightClick: boolean;
        hideNoActionMenu: boolean;
    }
    import ReportRow = $D.Framework.Design.Report.Service.Comunication.ReportRow;
    class TextOutputData {
        private options;
        private tileDataList;
        private groups;
        private reportRows;
        private groupNo;
        private textViewTable;
        private textOutputDataDiv;
        private lastSelection;
        private textViewDiv;
        private checkBoxes;
        private singleSelectedId;
        private multiSelectedIds;
        private reportRowColors;
        private rowIndex;
        private static SelectedReportClass;
        private static RightArrowClass;
        private static DownArrowClass;
        private static GroupHeaderSelectedClass;
        private static GroupHeaderClass;
        constructor(options: TextOutputDataOptions);
        static create(options: TextOutputDataOptions): TextOutputData;
        initialize(): void;
        addGroupsAndReportRows(): void;
        attachEvent(): void;
        onRowSelectionchanged(row: JQuery, selectedRowId: string): void;
        applyColorOnSelectedRow(row: JQuery): void;
        applyColorOnRow(row: JQuery, isSelected?: boolean): void;
        onShiftKeyPressed(e: JQueryEventObject): void;
        onRightClick(e: JQueryEventObject): void;
        isGroupActions(e: JQueryEventObject): boolean;
        isMultiSelect(): boolean;
        isGroupingRowSelected(element: JQuery): boolean;
        render(): void;
        renderRows(reportRows: ReportRow[], parentId?: string): string;
        getHeaderRowMarkup(id: string, value: string): string;
        getAcitonsForTextReport(isParagraphClicked?: boolean): void;
        getActionsForTextReportView(): void;
        getSelectedRowCount(): number;
        getInput(elem: JQuery): JQuery;
        getLabel(elem: JQuery): JQuery;
        enableMultiSelection(): void;
        disableMultiSelection(): void;
        hideCheckBoxes(): void;
        showCheckBoxes(): void;
        selectFirstRow(): void;
        deselctAllRows(): void;
        activateCheckBox(element: JQuery): void;
        deactivateCheckBox(element: JQuery): void;
        addIdInSelectedList(element: JQuery): void;
        removeIdFromSelectedList(element: JQuery): void;
        removeGroupFromCollapsedGroups(groupID: string): void;
        addGroupInCollapsedGroups(groupID: string): void;
        updateMultiSelectedIds(): void;
        updateSingleSelectedId(): void;
        updateColllapsedGroupeIds(): void;
        getIdOfElement(element: JQuery): string;
        showGroupActionForTextReport(): void;
        expandCollapseGroup(element: any): void;
        isGroupCollapsed(groupId: string): boolean;
        getCollapsedGroupIndex(groupId: string): number;
        expandGroup(target: JQuery): void;
        collapseGroup(target: JQuery): void;
        collapseGroupHeaderAndRows(groupId: string, header?: JQuery): void;
        updateGroupsState(): void;
        selectDeselectRow(rowElement: JQuery): void;
    }
    class KeyValuePair {
        key: string;
        value: Enumerable.IGrouping<string, ReportRow>;
        constructor(key: string, value: Enumerable.IGrouping<string, ReportRow>);
    }
}
