/// <reference path="react.d.ts" />
declare module dpComponents {
    interface IEditorLinkProps extends React.HTMLProps<{}> {
        link: EditorLinkModel | ActionLinkModel;
    }
    /**
     * Editor link for quick actions when editing a step, etc.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorLink({ link }: IEditorLinkProps): JSX.Element;
    export enum EditorNames {
        Array = "default:array",
        CalendarEditor = "CalendarEditor",
        CheckBox = "default:check",
        NullableCheckBox = "default:nullablecheck",
        Combo = "default:combo",
        EditableDropDown = "EditableDropDownEditor",
        Readonly = "default:readonly",
        DisplayString = "DisplayStringEditor",
        Digits = "default:digits",
        String = "default:string",
        StringEditor = "StringEditor",
        TextArea = "LongTextEditor",
        RichText = "RichTextInputEditor",
        GridPopup = "default:gridPopup",
        SelectElementRegistrationEditor = "SelectElementRegistrationEditor",
        EntityPicker = "EntityPickerEditor",
        CheckList = "CheckListEditor",
        Mappings = "MappingTypeSelector",
        StringArray = "StringArrayEditor",
        NumericArray = "NumericArrayEditor",
        NumberFormat = "NumberFormatEditor",
        Assignees = "AssigneesEditor",
        ReportMergeTextEditor = "ReportMergeTextEditor",
        RowLinkTextEditor = "RowLinkTextEditor",
        SuggestStringEditor = "SuggestStringEditor",
        DataDefinitionsEditor = "DataDefinitionsEditor",
        MergeTextEditor = "MergeTextEditor",
        TextMergeFieldSelector = "TextMergeFieldSelectorEditorView",
        LinkArrayEditor = "LinkArrayEditor",
        CharArrayEditor = "CharArrayEditor",
        ColorEditor = "ColorEditor",
        ApprovalLevelsEditor = "ApprovalLevelsEditor",
        PasswordEditor = "PasswordTextModeEditor",
        TokenPicker = "TokenPicker",
        StringFormat = "StringFormatEditor",
        RadioList = "default:radiolist",
        Shortcut = "default:shortcut",
        SelectTagsEditor = "SelectTagsEditor",
        FolderPickerEditor = "FolderPickerEditor",
        GroupsPicker = "GroupsPickerEditor",
        AccountsPicker = "AccountsPickerEditor",
        TableTemplateEditor = "TableTemplateEditor",
        TimeSpan = "default:timespan",
        UpdateRuleDataTriggerEditor = "UpdateRuleDataTriggerEditor",
        ImageInfo = "Silverdark.Editors.ImagePicker.ImageInfoEditor,Silverdark.Editors, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null",
        DataDescriptionPathEditor = "DataDescriptionPathEditor",
        ActiveDirectoryPickerEditor = "ActiveDirectoryPickerEditor",
        ChartSourcePickerEditor = "ChartSourcePickerEditor",
        ChartPartPicker = "ChartPartPicker",
        TimePickerEditor = "TimePickerEditor",
        FormDataPickerEditor = "FormDataPickerEditor",
        EmbeddedPropertyGrid = "PropertyGridEmbeddedEditor",
        DefinedTypeEditor = "DefinedTypeEditor",
        GroupedListEditor = "GroupedListEditor",
        TagFilterEditor = "TagFilterEditor",
        ChartSeriesEditor = "ChartSeriesEditor",
        DatePicker = "DateEditor",
        DateAndTimePicker = "DateAndTimeEditor",
        TimePicker = "TimePickerEditor",
        FileContentPicker = "FileContentPickerEditor",
        FormTriggerData = "FormTriggerData",
        Thickness = "ThicknessEditor",
        DateTimeArray = "DateTimeArrayEditor",
        ChartTypePicker = "ChartTypePickerEditor",
        ChartEntryFilter = "ChartEntryFilterEditor",
        NumericRangeFilter = "NumericRangeFilterEditor",
        StringMatchFilter = "StringMatchFilterEditor",
        PickStringFilter = "PickStringFilterEditor",
        CountDataFilter = "CountDataFilterEditor",
        ReportDateRange = "ReportDateRange",
        FilterDateRange = "FilterDateRange",
        BoolDataFilter = "BoolDataFilterEditor",
        StringWithPrefix = "StringEditorWithPrefix",
        DataDesignerEditor = "DataDesignerEditor",
        OutcomeScenariosEditor = "OutcomeScenariosEditor",
        FilePickerEditor = "FilePickerEditor",
        MultiFilePickerEditor = "MultiFilePickerEditor",
        LayoutEntityEditor = "LayoutEntityEditor",
        TypePickerEditor = "TypePickerEditor",
        ReportFieldSelectorEditor = "ReportFieldSelectorEditor",
        NumericFieldFilterEditor = "NumericFieldFilterEditor",
        NumericFieldsFilterEditor = "NumericFieldsFilterEditor"
    }
    export interface IActionLinkItem {
        label: string;
        value: any;
        onClick?: (arg?: any) => void;
        className?: string;
        disabled?: boolean;
    }
    export interface IActionLinkItems {
        current?: IActionLinkItem[];
        nested?: Map<string, IActionLinkItems>;
    }
    export interface IActionLinksModel {
        values?: IActionLinkItems;
        level?: number;
    }
    export const MAPPING_SUFFIX = "__mapping";
    export const MAPPING_PATH_SUFFIX = "__path";
    /**
     * Corresponds to InputMappingConstants.cs.
     * Wouldn't need to define this here if there was an easy way to generate it.
     */
    export enum InputMappingConstants {
        MAPPING_BUILD = "Build Data",
        MAPPING_NULL = "Null",
        MAPPING_IGNORE = "Ignore",
        MAPPING_UNKNOWN = "Unknown",
        MAPPING_RUN_CONVERTER_FLOW = "Run Converter",
        CONVERTER_FLOW_CATEGORY_SEPARATOR = "|~|",
        MAPPING_SELECT = "Select From Flow",
        MAPPING_CONSTANT = "Constant",
        MAPPING_ARRAY = "Build Array",
        MAPPING_ARRAY_CONCAT = "Join Arrays",
        MAPPING_DATE = "Constant Date",
        MAPPING_DATETIME = "Constant Date and Time",
        MAPPING_MERGE_HTML = "Merge HTML Text",
        MAPPING_MERGE_PLAIN = "Merge Plain Text",
        MAPPING_DATETIME_CURRENT = "Current Date Time",
        MAPPING_DATETIME_COMPUTE = "Compute Date"
    }
    export enum OutputMappingConstants {
        MAPPING_ARRAY_FIRST_ITEM = "Array - First Item",
        MAPPING_ARRAY_ITEMS = "Array - Items",
        MAPPING_ARRAY_LAST_ITEM = "Array - Last Item",
        MAPPING_CHANGE = "Change Value",
        MAPPING_EXPOSE_PROPERTIES = "Expose Properties",
        MAPPING_REFERENCE = "Reference",
        MAPPING_RENAME = "Rename",
        MAPPING_RUN_CONVERTER_FLOW = "Run Converter Flow",
        MAPPING_CONVERTER_FLOW__MAPPING_INDEX = 2
    }
    export const MappingSuffixes: string[];
    export function getEditorValues(child: ContextProviderNode): string[];
    export function getEditorValueIndex(value: string, child: ContextProviderNode): number;
    export function getMappingEditorValues(child: ContextProviderNode): IActionLinkItems;
    export function getEditorConfigValues(child: ContextProviderNode): DataPair[];
    /**
     * Get a configuration value by name
     *
     * @param child whose configuration to search
     * @param name "Name" of data-pair whose "OutputValue" to return
     * @return matching OutputValue or undefined
     */
    export function getEditorConfigValue<T = any>(child: ContextProviderNode, name: string): T;
    export function isMappingUnknown(child: ContextProviderNode): boolean | undefined;
    export function getMappingValue(child: ContextProviderNode): DataPair | undefined;
    export function getEditorConfigDisplayName(child: ContextProviderNode): any;
    export function getEditorListData<T = any>(child: ContextProviderNode): T;
    export function showLabelAtTop(child: ContextProviderNode): boolean;
    export function getEditorSettings<K>(child: IPropertyChild): K;
    /**
     * Hooks for communicating with the ContextProviderService
     */
    export const NodeTypes: {
        Root: string;
        Category: string;
        Property: string;
        ListProperty: string;
    };
    export interface ICategoryNode extends ContextCategoryNode {
        /**
         * Should we expand it during search?
         * cheating by adding this. this will not come from server, but may be added by search feature client-side
         */
        OpenBySearch?: boolean;
    }
    export const NO_CATEGORY = "[nocategory]";
    export const PROVIDER_NODE_PATH_SEPARATOR = ",";
    /**
     * A ContextProviderNode whose "Node" property is a "ContextPropertyNode".
     *
     * (Why can't we know based on the type definitions? Seems disjointed.)
     */
    export interface IPropertyChild extends ContextProviderNode {
        Node: ContextPropertyNode;
    }
    export function getPropertyDisplayLabel(child: IPropertyChild): string;
    export function getChildValueAsArray(child: ContextProviderNode): any[];
    export function getChildValueAsString(child: ContextProviderNode): any;
    export function childValueIsNull(child: ContextProviderNode): boolean;
    export function getChildValue(child: ContextProviderNode): any;
    export function getChildValueAsBoolean(child: ContextProviderNode): boolean;
    export function getChildrenFromSnapshot(result?: ContextProviderNode, hideParentCategory?: boolean): ContextProviderNode[];
    /**
     * Comparator for sorting a set of ContextProviderNodes
     *
     * Ordering is based on legacy MVC sorting:
     * ```csharp
     * var sortedValue = Model.ContextProviderNode.Children.OrderBy(t =>
     *  {
     *    if (t.Children != null && t.Children.Length > 0)
     *        return 1;
     *    return 0;
     *  }).ThenBy(p => p.Node.Index).ThenBy(p => p.Node.Name);
     * ````
     * The above could easily be applied server-side, when fetching context provider snapshots,
     * but because the collection is thereafter dynamic (e.g. PropertyHidden attributes) and maintained client side,
     * sorting needs to be done client side as well.
     *
     * Properties before Categories (as observed...)
     * 1. then: categories without children before categories with children
     * 1. then: by index
     * 1. then: by name - square brackets (at least) should be ignored in alphanumeric sort.
     *
     * @param a first node
     * @param b second node
     */
    export function compareEditorChildren(a: ContextProviderNode, b: ContextProviderNode): number;
    export function categoryIsMappingTypeSelector(child: ContextProviderNode): boolean;
    export function getMappingDataType(node: ContextProviderNode, displayName?: boolean): any;
    export function getCategoryChildCount(child: ContextProviderNode): number;
    export function getNodeEditorName(child: ContextPropertyNode): string;
    /**
     * Recursively follow the 'path' through the data model.
     * @param children to search
     * @param path to desired child data
     * @returns child component with its parent
     */
    export function findContextChildByPath(pathArray: string[], parent: ContextProviderNode): {
        child: ContextProviderNode | undefined;
        parent: ContextProviderNode;
    };
    /**
     * Recursively follow the 'path' through a list of nodes.
     * @param children to search
     * @param path to desired child data
     * @returns child component
     */
    export function findContextChildInListByPath(pathArray: string[], list: ContextProviderNode[]): ContextProviderNode | undefined;
    export function getKeyFromPath(path: string[] | undefined, child: ContextProviderNode): string;
    /**
     * Search a ContextProviderNode tree based on string and any provided and/or filters.
     * @param search string to search
     * @param nodes to comb through recursively
     * @param andConditions extra conditions which must be true
     * @param orConditions extra conditions which may be true
     * @param bailForEmptySearch default to `true` meaning immediate return if search is empty. Will skip your `orConditions`
     * @param modifyInitiallyCollapsed true to modify this setting (e.g. MappingEditor), otherwise will add `OpenBySearch` property (e.g. PropertyGrid)
     * @returns filtered `ContextProviderNode[]`
     */
    export function providerNodeSearch(search: string, nodes?: ContextProviderNode[] | IPropertyChild[], andConditions?: IProviderNodeSearchCondition[], orConditions?: IProviderNodeSearchCondition[], bailForEmptySearch?: boolean, modifyInitiallyCollapsed?: boolean, expansionTracker?: (_path: string, _expanded: boolean) => void): ContextProviderNode[];
    export function displayNameIncludesSearch(search: string, child: ContextProviderNode | IPropertyChild): boolean;
    export function nameIncludesSearch(search: string, childName: string, stripMappingSuffixes?: boolean): boolean;
    /**
     * Because MappingTypeSelectors are a category node with special children which
     * - should not affect search results
     * - should not be filtered out during search
     * - differ in count by mapping type
     *
     * and some MappingTypes also have children that Search _should_ apply to, such as Build Data,
     * we need to handle their children in a special way.
     *
     * @param node to evaluate
     * @param isMappingTypeSelector true if it is, otherwise will be evaluated
     * @returns list of nodes particular to the mapping type selector, and a list of children where search should be applied
     */
    export function getMappingTypeSelectorPartsForSearch(node: ContextProviderNode, isMappingTypeSelector?: boolean): {
        kidsToSearch: ContextProviderNode[];
        mappingSelectorParts: undefined;
    } | {
        kidsToSearch: ContextProviderNode[];
        mappingSelectorParts: ContextProviderNode[];
    };
    export interface IProviderNodeSearchCondition {
        (node: ContextProviderNode, search: string): boolean;
    }
    export function anyOrConditionsTrue(conditions: IProviderNodeSearchCondition[] | undefined, node: ContextProviderNode, search: string, state: boolean): boolean;
    export function allAndConditionsTrue(conditions: IProviderNodeSearchCondition[] | undefined, node: ContextProviderNode, search: string, state: boolean): boolean;
    export function getSearchedCategoryNodeChildren(filteredChildren: (ContextProviderNode | IPropertyChild)[], originalChildren?: (ContextProviderNode | IPropertyChild)[]): (ContextProviderNode | IPropertyChild)[];
    export interface NodeValidationIssues {
        issues: ValidationIssue[];
        fatal: number;
        warning: number;
    }
    export const GLOBAL_ISSUE_KEY = "global";
    export const REF_PROP_SEPARATOR = "\\";
    export function getAllValidationIssues(nodes?: ContextProviderNode[] | IPropertyChild[] | ContextProviderNode | IPropertyChild | ContextProviderNode, global?: ValidationIssue[]): NodeValidationIssues;
    export function hasInvalidPathValidation(validationIssues: ValidationIssue[]): boolean;
    export function getChildValidationIssues(child: ContextProviderNode): ValidationIssue[];
    export function getChildValidationReasons(child: ContextProviderNode): string[];
    export interface ValidationSummary {
        reasons: string[];
        levels: BreakLevel[];
        worstLevel: BreakLevel;
    }
    export function getValidationSummary(issues: ValidationIssue[]): ValidationSummary;
    export function getEditorValidationSummary(editor: ContextProviderNode): ValidationSummary;
    export function getParentValidationIssues(parent: ContextProviderNode): ValidationIssue[];
    export function getParentValidationSummary(parent: ContextProviderNode): ValidationSummary;
    export function getValidationSummaryFromFormIssues(issues: DecisionsValidationIssue[] | undefined): ValidationSummary | undefined;
    /**
     * Clear validations across an entire {@link ContextProviderNode} tree.
     *
     * TODO if time, there's some risk to double-chck here regarding React change detection,
     * because it's mutating the node objects, instead of copying them.
     *
     * @param node to clear, including all of its' children, recursively;
     */
    export function clearValidations(node: ContextProviderNode): void;
    export function aggregateValidationsByRefProp(validationIssues?: ValidationIssue[]): Map<string, ValidationIssue[]>;
    export function addValidationsByRefProp(node: ContextProviderNode, issueMap: Map<string, ValidationIssue[]>): void;
    export function includeLinkInPropertyGrid(info: EditorInformation): string | false;
    export function applyValidationUpdates(state: ContextProviderNode, validationIssues?: ValidationIssue[]): void;
    export function getContextChildrenTotal(node?: ContextProviderNode, nodeIndex?: number): number;
    /**
     * Evaluate whether we can, and then whether we should hide the top category.
     * @param snapshot to evaluate
     * @param hideTopCategory defaults to true, to hide it if we can.
     * @return true if can and should hide top category
     */
    export function shouldHideTopCategory(snapshot?: ContextProviderNode, hideTopCategory?: boolean): boolean;
    interface IRemoveMappingIconProps {
        x: number;
        y: number;
        onMouseEnter?: (e: React.MouseEvent) => void;
        onMouseLeave?: (e: React.MouseEvent) => void;
        onClick: React.MouseEventHandler;
        visible: boolean;
    }
    /**
     * Remove Mapping Icon
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export const RemoveMappingIcon: FC<IRemoveMappingIconProps>;
    interface IInvalidMappingIconProps {
        x: number;
        y: number;
        isHovered?: boolean;
        onMouseEnter?: (e: React.MouseEvent) => void;
        onMouseLeave?: (e: React.MouseEvent) => void;
        onRemoveMapping: React.MouseEventHandler;
    }
    /**
     * Invalid Mapping Icon
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export const InvalidMappingIcon: FC<IInvalidMappingIconProps>;
    export const getMappingFieldPath: (child: ContextProviderNode, path: string[]) => string[];
    export const appendPath: (path: string[], suffix: string) => string[];
    /** get pick path.... '__path' magic string is strange, but it's what legacy has */
    export const getPickPath: (path: string[]) => string[];
    export const getMappingPath: (path: string[]) => string[];
    export const getBuildJoinArraysMappingValue: (mapping: string) => string;
    export function getMappingField(child: ContextProviderNode): ContextProviderNode;
    export function getMappingFieldName(child: ContextProviderNode): string;
    export function getMappingName(child: ContextProviderNode): any;
    export function getChildPath(path: string[], child: ContextProviderNode): string[];
    export function isBuildJoinArrayMapping(mapping: string): boolean;
    export const DATA_PATH_SEPARATOR = ".";
    export const MAPPING_CATEGORY_PREFIX = "Category|~|";
    export function mappingTypeRendersInOverlay(mappingType: string): boolean;
    export function mappingTypeHasChildren(mappingType: string): boolean;
    export function mappingTypeHasConnectors(mappingType: string): boolean;
    export function getNestedDataDescMap(dataDescriptions: DataDescription[], path?: string, filterType?: MappingPanelFilter, mappedNodes?: string[]): Map<string, NestedDataDesc>;
    export function getVisibleFlowDataNodes(flowData: Map<string, NestedDataDesc>, expandedNodes: Map<string, boolean>): string[];
    export function getStepNodeData(baseNodes: ContextProviderNode[], filtered: ContextProviderNode[], expandedNodes: Map<string, boolean>): {
        allStepNodes: StepDataMappingNode[];
        visibleStepNodes: string[];
        mappedDataPaths: string[];
    };
    export function getStepDataNodes(baseNodes: ContextProviderNode[], filtered: ContextProviderNode[], expandedNodes: Map<string, boolean>, mappedDataPaths: string[]): StepDataMappingNode[];
    export function getMappedValueNode(node: ContextProviderNode): ContextProviderNode;
    export function getMappedDataPath(node: ContextProviderNode, mappingType?: string): string;
    export function getCanHaveChildMappings(node: ContextProviderNode, mapping?: string): boolean;
    export function getNodeIsInitiallyOpen(node: ContextProviderNode, mapping?: string): boolean;
    /** mapping editor search also compares data type display name */
    export function searchMatchesDataType(node: ContextProviderNode, search?: string): any;
    /**
     * evaluate whether a row / connector line is hovered or not.
     *
     * (object arg would be more elegant here, but since this fires on hover, let's not tax the garbage collector.)
     *
     * @param mappings to look across colums with
     * @param hoveredFlowNode currently hovered flow node
     * @param hoveredStepNode currently hovered step node
     * @param path to compare
     * @param forFlow false to compare via step nodes
     * @returns true if provided path is directly or indirectly hovered
     */
    export function isRowHovered(mappings: IMapping[], hoveredFlowNode: string, hoveredStepNode: string, path: string, forFlow?: boolean): boolean;
    export function isRowIndirectlyHovered(mappings: IMapping[], hoveredFlowNode: string, hoveredStepNode: string, path: string, forFlow?: boolean): boolean;
    export function isRowDirectlyHovered(hoveredFlowNode: string, hoveredStepNode: string, path: string, forFlow?: boolean): boolean;
    export function isAnyLineHovered(mappings: IMapping[], hoveredFlowNode: string, hoveredStepNode: string): boolean;
    export interface StepDataMappingNode {
        nodeName: string;
        dataPath: string;
        mappingName: string;
        visible: boolean;
        validation: NodeValidationIssues;
        isMappingNode: boolean;
        filtered?: boolean;
    }
    export function containsPropertyNode(node: ContextProviderNode, mapping: string): boolean | undefined;
    export function getMappingValidationId(path: string, validation: ValidationSummary): {
        validationTooltipId?: undefined;
        validationAttributes?: undefined;
    } | {
        validationTooltipId: string;
        validationAttributes: {
            'aria-describedby': string;
        };
    };
    /**
     * This is derivative of PropertyGrid search, but it's necessarily different in that we are matching mapping type names,
     * and we are matching categories & MappingTypeSelectors without further filtering non-category children.
     *
     * It's necessary _not_ to further filter children, because other child nodes (like mapping values) _don't_ need to be matched in search, and can't be excluded by search
     * without breaking things.
     *
     * @param search search string
     * @param nodes
     */
    export function stepNodeSearch(search: string, nodes: ContextProviderNode[], setExpandedNodes: (nodes: Map<string, boolean>) => void, andConditions?: IProviderNodeSearchCondition[]): ContextProviderNode[];
    export function createConditionPerFilter(filter: MappingPanelFilter): (node: ContextProviderNode) => boolean;
    export function filterFlowDataNodes(flowData: Map<string, NestedDataDesc>, newExpandedNodes: Map<string, boolean>, searchString: string, filterType: MappingPanelFilter, mappedNodes: string[]): {
        results: Map<string, NestedDataDesc>;
        newExpandedNodes: Map<string, boolean>;
        filteredNodes: string[];
    };
    export function getConverterFlowSuggestionActions(converters: string[]): IActionLinkItems | undefined;
    export function showIconOnDataDescriptionRow(dataDescType: DataDescriptionType, data: DataDescription): boolean;
    /**
     * @param desc data desc values
     * @param path location of desired nodes
     * @param returnMatchedParent to return matched parent node when full path match fails.
     * @returns
     */
    export function getNestedDataDescByPath(desc: Map<string, NestedDataDesc>, path: string, returnMatchedParent?: boolean): NestedDataDesc | undefined;
    /**
     * @param desc data desc values
     * @param path location of desired nodes
     * @param returnMatchedParent to return matched parent node when full path match fails.
     * @returns
     */
    export function getNestedDataDescChildrenByPath(desc: Map<string, NestedDataDesc>, path: string, returnMatchedParent?: boolean): NestedDataDesc[];
    export function isConstantDataDescription(data: DataDescription): boolean;
    export enum MappingPanelPosition {
        LEFT = 0,
        RIGHT = 1
    }
    export enum MappingPanelType {
        FLOW = 0,
        STEP = 1
    }
    export enum MappingPanelFilter {
        ALL = 0,
        MAPPED = 1,
        UNMAPPED = 2
    }
    /** A nested structure for rendering data descriptions */
    export interface NestedDataDesc extends DataDescription {
        children: Map<string, NestedDataDesc>;
        filtered?: boolean;
    }
    export interface IMappingEditorColumnState {
        title: string;
        scrollPosition: number;
        search: string;
        filter: MappingPanelFilter;
        /** Used for constants and to derive selection of mapped node in other column */
        selectedNodeId: string;
        /** Used for constants and to derive selection of mapped node in other column */
        hoveredNodeId: string;
        expandedNodes: Map<string, boolean>;
        isLoading?: boolean;
        /** if nodes expanded due to search are different than those shown by search */
        searchedExpandedNodes: Map<string, boolean>;
    }
    export interface IDragNewMappingState {
        side: MappingPanelType;
        path: string;
    }
    export interface IMapping {
        startIndex: number;
        endIndex: number;
        dataPath: string;
        nodeName: string;
        /** right side hidden by search or filter */
        rightHidden?: boolean;
        /** left side hidden by search or filter */
        leftHidden?: boolean;
    }
    export interface IMappingEditorStore {
        editingContextId: string;
        visibleFlowDataNodes: string[];
        filteredFlowDataNodes: string[];
        mappedDataPaths: string[];
        flowSessionId: string;
        flowStepId: string;
        forInput: boolean;
        forCustom: boolean;
        flowData: Map<string, NestedDataDesc>;
        flowPanel: IMappingEditorColumnState;
        stepPanel: IMappingEditorColumnState;
        validation: NodeValidationIssues;
        draggingFrom?: IDragNewMappingState;
        dragHasStarted?: boolean;
        mappings: IMapping[];
        setScrollPosition: (pos: number, side: MappingPanelType) => void;
        initFlowData: () => Promise<void>;
        getFlowScrollPosition: typeof getFlowScrollPosition;
        getDataDescriptions: typeof getDataDescriptions;
        expandFlowNode: ReturnType<typeof createExpandFlowNode>;
        expandStepNode: (path: string, expand?: boolean) => void;
        setSearchExpandedNodes: (nodes: IMappingEditorColumnState['searchedExpandedNodes'], side: MappingPanelType) => void;
        flowScrollPosition: number;
        hoverNode: (path: string, side: MappingPanelType) => void;
        selectNode: (path: string, side: MappingPanelType) => void;
        hoverClear: () => void;
        selectClear: () => void;
        setFilter: (filter: MappingPanelFilter, side: MappingPanelType) => void;
        setSearch: (search: string, side: MappingPanelType) => void;
        startDragConnector: (path: string, side: MappingPanelType) => void;
        setDragHasStarted: () => void;
        stopDragConnector: () => void;
        initEditingContextId: () => void;
        dropConnector: (snapShotRef?: ContextProviderNode) => Promise<void>;
        clearMapping: () => Promise<void>;
        setDerivedMappings: (mappings: IMapping[]) => void;
        setMappedFlowDataPaths: (mappedFlowDataPaths: string[]) => void;
        setIsNodesLoading: (isLoading: boolean) => void;
    }
    export interface IMappingEditorSelector<U> {
        (selector: StateSelector<IMappingEditorStore, U>, equalityFn?: EqualityChecker<U>): U;
    }
    type MappingEditorStoreSet = SetState<IMappingEditorStore>;
    type MappingEditorStoreGet = GetState<IMappingEditorStore>;
    /** getter if we need to access from outside React */
    export function getMappingEditorStore(flowSessionId: string, flowStepId: string, forInput?: boolean): UseStore<IMappingEditorStore> | undefined;
    export function createMappingEditorStore(flowSessionId: string, flowStepId: string, forInput: boolean, forCustom?: boolean): UseStore<IMappingEditorStore>;
    export function getFlowScrollPosition(state: IMappingEditorStore): number;
    export function getStepScrollPosition(state: IMappingEditorStore): number;
    export function getStepFilter(state: IMappingEditorStore): MappingPanelFilter;
    export function getFlowFilter(state: IMappingEditorStore): MappingPanelFilter;
    export function getStepSearch(state: IMappingEditorStore): string;
    export function getFlowSearch(state: IMappingEditorStore): string;
    export function getStepTitle(state: IMappingEditorStore): string;
    export function getFlowTitle(state: IMappingEditorStore): string;
    export function getForInput(state: IMappingEditorStore): boolean;
    export function getStepPanelPosition(state: IMappingEditorStore): MappingPanelPosition;
    export function getFlowPanelPosition(state: IMappingEditorStore): MappingPanelPosition;
    export function getDataDescriptions(state: IMappingEditorStore): Map<string, NestedDataDesc>;
    export function getSelectedFlowNodeId(state: IMappingEditorStore): string;
    export function getSelectedStepNodeId(state: IMappingEditorStore): string;
    export function getFlowExpandedNodes(state: IMappingEditorStore): Map<string, boolean>;
    export function getExpandedStepNodes(state: IMappingEditorStore): Map<string, boolean>;
    export function getFlowHoveredNode(state: IMappingEditorStore): string;
    export function getStepHoveredNode(state: IMappingEditorStore): string;
    export function visibleFlowNodesSelector(state: IMappingEditorStore): string[];
    export function filteredFlowNodesSelector(state: IMappingEditorStore): string[];
    export function getEditingContextId(state: IMappingEditorStore): string;
    export function getDraggingFrom(state: IMappingEditorStore): IDragNewMappingState | undefined;
    export function getDragTrulyStarted(state: IMappingEditorStore): boolean | undefined;
    export function draggingFromFlowPath(state: IMappingEditorStore): string;
    export function draggingFromStepPath(state: IMappingEditorStore): string;
    export function storeIdSelector(state: IMappingEditorStore): string;
    export function getBothFiltersUnmapped(state: IMappingEditorStore): boolean;
    export function getDataDescriptionType(state: IMappingEditorStore): DataDescriptionType;
    /** context to pass particular store instance to react children */
    export const MappingEditorStore: React.Context<UseStore<IMappingEditorStore> | undefined>;
    /**
     * Access particular property of particular store via react context.
     * Must have MappingEditorStore.Provider upstream to use this.
     */
    export function useMappingEditorStore<U>(selector: StateSelector<IMappingEditorStore, U>, equalityFn?: EqualityChecker<U>): U;
    /**
     * @param flowSessionId id of current flow edit session
     * @param flowStepId current step id
     * @returns existing useStore hook or a new one.
     */
    export function useCreateMappingEditorStore(flowSessionId: string, flowStepId: string, forInput: boolean, forCustom?: boolean): UseStore<IMappingEditorStore>;
    export function useRowIsHovered(path: string, forFlow?: boolean): boolean;
    export function useRowPartnerIsHovered(path: string, forFlow?: boolean): boolean;
    function createExpandFlowNode(get: MappingEditorStoreGet, set: MappingEditorStoreSet): (path: string) => Promise<void>;
    export interface IMappingConnectorOwnProps extends IMapping {
        /**
         * no connecting line, e.g. a constant mapping, or a select from flow with nothing selected
         */
        isOneSided?: boolean;
        isSelected?: boolean;
        isInvalid?: boolean;
        activeDrag?: boolean;
        validationIssuesForDataDesc?: Map<string, ValidationIssue[]>;
    }
    export interface IMappingConnectorProps extends IMappingConnectorOwnProps {
        rightEdge: number;
        clipPath: string;
    }
    /**
     * Individual Connector line
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingConnector({ activeDrag, clipPath, dataPath, endIndex: endY, isOneSided, isSelected, isInvalid, nodeName, startIndex: startY, rightEdge, rightHidden, leftHidden, }: IMappingConnectorProps): JSX.Element;
    export const MAPPING_ROW_HEIGHT = 42;
    export function getMappings(stepNodes: StepDataMappingNode[], visibleFlowDataNodes: string[], filteredFlowDataNodes: string[], visibleStepNodes: string[], leftToRight?: boolean, bothFiltersUnmapped?: boolean): {
        mappings: never[];
        validationIssueForDataDesc: Map<any, any>;
        validationIssuesForDesc?: undefined;
    } | {
        mappings: IMappingConnectorOwnProps[];
        validationIssuesForDesc: Map<any, any>;
        validationIssueForDataDesc?: undefined;
    };
    export function getConnectorY(rowIndex: number, scroll?: number): number;
    export function nodeIsInvalid(node: ContextProviderNode): boolean;
    export function getDataDescIndex(visibleNodes: string[], dataPath: string): number;
    export function getStepNodeIndex(nodes: string[], path: string, overlayType?: boolean): number;
    interface IGetOppositeYOptions {
        mappings: IMappingConnectorOwnProps[];
        side: MappingPanelType;
        selected: string;
        leftToRight: boolean;
    }
    export function getMappedOppositeY({ mappings, side, leftToRight, selected }: IGetOppositeYOptions): number;
    export interface IMappingConnectorDraggingProps {
        startSide: MappingPanelPosition;
        startY: number;
        leftToRight: boolean;
        targetRows: string[];
        targetSide: MappingPanelType;
        hitY?: number;
        hitSide?: MappingPanelPosition;
        targetScroll: number;
    }
    export interface IMappingConnectorHoverProps {
        startSide: MappingPanelPosition;
        startY: number;
    }
    export function getDraggingProps(visibleFlowDataNodes: string[], visibleStepNodes: string[], stepScroll: number, flowScroll: number, hoveredStepNodeId: string, hoveredFlowNodeId: string, draggingFrom?: IDragNewMappingState, leftToRight?: boolean): IMappingConnectorDraggingProps | undefined;
    export function getRowHoveredPropsForConnectors(stepNodes: string[], visibleFlowDataNodes: string[], flowPanelHoverNodeId: string, stepPanelHoverNodeId: string, flowPanelScrollPosition: number | undefined, stepPanelScrollPosition: number | undefined, mappings: IMappingConnectorOwnProps[], leftToRight?: boolean): IMappingConnectorHoverProps | undefined;
    /**
     * Lookup a node path from x/y coordinates
     * @param x mouse position, relative to connector area
     * @param y mouse position, relative to connector area
     * @param visibleNodes list of visible flow or step node targets (depending on direction)
     * @param currentHit current hit target if any, so as not to emit any duplicate events
     * @param source source column user is dragging from
     * @param forInput true if it's input mapping, affects left to right, right to left of source
     * @returns path of target or empty string.
     */
    export function getDropNodeFromXY(x: number, y: number, visibleNodes: string[], leftToRight: boolean, rightEdge: number, scrollPosition?: number): string;
    export interface IDraggingMappingConnectorDragProps {
        startSide: MappingPanelPosition;
        startY: number;
        hitY?: number;
        hitSide?: MappingPanelPosition;
    }
    export interface IDraggingMappingConnectorProps extends IDraggingMappingConnectorDragProps {
        endX: number;
        endY: number;
        isRowHovered?: boolean;
        rightEdge: number;
        reallyDragging?: boolean;
    }
    /**
     * Just render a connector line for a _potential_ new connection.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function DraggingMappingConnector({ endX, endY, hitY, hitSide, rightEdge, startSide, startY, isRowHovered, reallyDragging, }: IDraggingMappingConnectorProps): JSX.Element;
    export { DraggingMappingConnector } from "domains/designers/FlowDesigner/MappingEditor/MappingConnectors/DraggingMappingConnector/DraggingMappingConnector";
    export interface IRowHoveredMappingConnectorProps extends IMappingConnectorHoverProps {
        rightEdge: number;
        clipPath: string;
    }
    export function RowHoveredMappingConnector({ clipPath, startSide, startY, rightEdge, }: IRowHoveredMappingConnectorProps): JSX.Element;
    /**
     * The Resize Observer API provides a mechanism by which code can monitor
     * an element for changes to its size, with notifications being delivered
     * to the observer each time the size changes.
     */
    export function useResizeObserver(): [Dispatch<SetStateAction<Element | null>>, ResizeObserverEntry | null];
    interface IMappingConnectorGradientProps {
        id: string;
        className: string;
        rightToLeft?: boolean;
    }
    /**
     * Define a gradient def for faded connectors.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingConnectorGradient({ className, id, rightToLeft }: IMappingConnectorGradientProps): JSX.Element;
    export interface IMappingConnectorsProps {
        className?: string;
        visibleStepNodes: string[];
        visibleFlowDataNodes: string[];
    }
    export const CONNECTOR_AREA_OVERLAP = 15;
    export const LEFT_COLUMN_EDGE = -1;
    export const RIGHT_COLUMN_EDGE = 116.5;
    /**
     * Connector lines between mappings
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingConnectors({ className, visibleStepNodes, visibleFlowDataNodes }: IMappingConnectorsProps): JSX.Element;
    export function fillObjectFromDataPairs<T = any>(target: T | null, data: DataPair[]): T;
    /**
     * Creates value to update a property editor value
     * @param value new value for an editor
     */
    export function createDataPairValue(value: any): DataPair;
    export enum ContextActionType {
        /** ContextProviderEventType.Add */
        Add = 1,
        /** ContextProviderEventType.Update */
        Update = 2,
        /** ContextProviderEventType.Delete */
        Delete = 3,
        /** Pass a new snapshot as state */
        NewSnapshot = 4,
        /** Remove current snapshot, triggering a refresh from ContextProviderService */
        ClearSnapshot = 5,
        SetNodeValue = 6,
        /** For occasional malformed data */
        Ignore = 7
    }
    export interface ContextChangeAction {
        value?: any;
        path?: string[];
        type?: ContextActionType;
        validationIssues?: ValidationIssue[];
        skipValidationUpdate?: boolean;
    }
    /**
     * Updates context provider nodes by path within the ROOT, based on context provider node update events.
     *
     * @param state to update
     * @param changes to push into local state
     */
    export function contextProviderNodeReducer(state: ContextProviderNode | undefined, change: ContextChangeAction): ContextProviderNode | undefined;
    export function getNodeUpdateAction(event: ContextProviderNodeChangedNotification | RefreshPropertyGridEvent, skipValidationUpdate?: boolean): ContextChangeAction | undefined;
    export interface IUseBeforeSavePromises<T> {
        action: () => Promise<T>;
    }
    export interface IAddBeforeSavePromises {
        /** A promise that needs to be `await`ed proceeding */
        addBeforeSavePromise?: (id: string, promise: Promise<any>) => void;
        /** Remove a promise that needs to be `await`ed proceeding. */
        removeBeforeSavePromise?: (id: string) => void;
    }
    /**
     * Hook for waiting some other API calls prior to calling some save. Example use case is something that calls service
     * end points and calls ContextProviderService.EditComplete on the server side.
     *
     * If calling editComplete from the client, try `useEditComplete`
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function useBeforeSavePromises<T>({ action }: IUseBeforeSavePromises<T>): {
        addBeforeSavePromise: (id: string, promise: Promise<any>) => Map<string, Promise<any>>;
        removeBeforeSavePromise: (id: string) => boolean;
        save: () => Promise<T>;
    };
    /**
     * Simply notify the server that this client needs to know about this event.
     * @param eventId event id to tell the server about
     */
    export function registerForEvent(eventId: string): Promise<void>;
    /**
     * Simply notify the server that this client no longer needs to know about this event.
     * @param eventId event id to tell the server about
     */
    export function unRegisterForEvent(eventId: string): Promise<void>;
    /**
     * Register, and listen for particular events.
     *
     * Forcing a subscriber ID is annoying for some use-cases, but makes sure this isn't leaky,
     * developers are intentional can use useCallback safely.
     *
     *  If you don't have a meaningful ID handy, try
     *
     * ```tsx
     * const id = useRef(generateGuid());
     *
     * useEffect(() => {
     *    const componentId = id.current;
     *    subScribeToEvent(eventId, componentId, listener);
     *    return () => {
     *      unSubScribeToEvent(eventId, componentId, listener);
     *    };
     * }, [listener]);
     * ```
     *
     * @param eventId to listen for events for this id
     * @param subscriberId - componentId name, etc. to allow several listeners for the same event Id.
     * @param listener to handle the events. without this, it simply registers the event with the ClientEventsService.
     * which may be replaced if something else subscribes in exactly the same way
     */
    export function registerForEventAndSubscribe(eventId: string, subscriberId: string, listener: (event: any) => void): Promise<void>;
    /**
     * Unregister (service) and unsubscribe (client) from particular event ID.
     * @param eventId to listen for
     * @param subscriberId subscribing component, reason, etc.
     * @param listener to remove
     */
    export function unRegisterForEventAndUnsubscribe(eventId: string, subscriberId: string, listener: (event: any) => void): Promise<void>;
    /**
     * Set up client event subscription.
     *
     * _Use this directly only if you know event is going to be registered with server by another mechanism._
     *
     * Forcing a subscriber ID is annoying for some use-cases, but makes sure this isn't leaky,
     * developers are intentional can use useCallback safely.
     *
     *  If you don't have a meaningful ID handy, try
     *
     * ```tsx
     * const id = useRef(generateGuid());
     *
     * useEffect(() => {
     *    const componentId = id.current;
     *    subScribeToEvent(eventId, componentId, listener);
     *    return () => {
     *      unSubScribeToEvent(eventId, componentId, listener);
     *    };
     * }, [listener]);
     * ```
     *
     * @param eventId to listen for
     * @param subscriberId subscribing component, reason, etc.
     * @param listener to remove
     */
    export function subScribeToEvent(eventId: string, subscriberId: string, listener: (event: any) => void): void;
    /**
     * Remove client event subscription.
     *
     * Use this directly only if you know event is going to be un-registered by another mechanism.
     *
     * @param eventId being listened for
     * @param subscriberId subscribing component, reason, etc.
     * @param listener to remove
     */
    export function unSubScribeToEvent(eventId: string, subscriberId: string, listener: (event: any) => void): void;
    /**
     * Subscribe to client event
     * @param eventId to subscribe to
     * @param componentId subscribing to the event
     * @param listener handler
     */
    export function addClientEventListener(eventId: string, componentId: string, listener: (event: any) => void): void;
    /**
     * Unsubscribe from client event id
     * @param eventId to subscribe to
     * @param componentId subscribing
     */
    export function removeClientEventListener(eventId: string, componentId: string): void;
    /** This is used in legacy PubSub logic when checking listener IDs to emit values to. */
    export function getRegisteredListenerIds(): string[];
    /**
     * Get listeners to call for an event id/name
     * @param eventName to get handlers for
     */
    export function getClientListeners(eventName: string): Function[];
    /** This is intended only for code-tests */
    export function getRegisteredClientEventListenersForUnitTests(): Map<string, Map<string, (event: any) => void>>;
    export const ClientEventUtils: {
        getClientListeners: typeof getClientListeners;
        getRegisteredListenerIds: typeof getRegisteredListenerIds;
        registerForEvent: typeof registerForEventAndSubscribe;
        subScribeToEvent: typeof subScribeToEvent;
        unRegisterForEvent: typeof unRegisterForEventAndUnsubscribe;
        unSubScribeToEvent: typeof unSubScribeToEvent;
    };
    export const ClientMessage: {
        FolderChanged: string;
        FolderEntitiesChanged: string;
    };
    export interface IUseKeepContextAlive {
        editingContext: string;
        snapshot?: ContextProviderNode;
        prevEditingContext: MutableRefObject<string | undefined>;
        getSubscriberId?: () => string;
        debouncedUpdate: Dispatch<ContextChangeAction> & {
            clear(): void;
        } & {
            flush(): void;
        };
        refresh: () => {};
        skipValidationResetOnEachUpdate?: boolean;
    }
    /** server will dispose context shortly after 2 minutes */
    export const KEEP_CONTEXT_ALIVE_INTERVAL = 120000;
    /**
     * Hook to manage subscribing to changes in a context provider node,
     * as well as keep that editing context alive.
     * @param props
     */
    export function useSubscribeToEditingContext({ debouncedUpdate, editingContext, getSubscriberId, prevEditingContext, refresh, snapshot, skipValidationResetOnEachUpdate, }: IUseKeepContextAlive): void;
    export interface IUseUpdatesPropertyEditors extends IAddBeforeSavePromises {
        /** needs no introduction */
        editingContext: string;
        /** immediately update node(s) */
        dispatchNodeChange: Dispatch<ContextChangeAction>;
        /** debounce batching node change events */
        debouncedUpdate: Dispatch<ContextChangeAction> & {
            clear(): void;
        } & {
            flush(): void;
        };
        setIsNodesLoading?: (isLoading: boolean) => void;
    }
    export function useUpdatesPropertyEditors({ addBeforeSavePromise, dispatchNodeChange, debouncedUpdate, editingContext, removeBeforeSavePromise, setIsNodesLoading, }: IUseUpdatesPropertyEditors): {
        addEditPromise: (id: string, promise: Promise<any>) => void;
        removeEditPromise: (id: string) => void;
        refresh: () => Promise<void>;
        onChange: (val: any, path: string[]) => Promise<void>;
        setSnapShot: (value: ContextProviderNode) => void;
    };
    interface IAssigneeAvatarProps extends React.HTMLProps<{}> {
        assignee: AssigneeDto;
    }
    /**
     * Avatar / icon for an assignee list item
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function AssigneeAvatar({ assignee, className }: IAssigneeAvatarProps): JSX.Element;
    /**
     * Report then-ables that should be awaited prior to some action proceeding
     * e.g. a blur handler for a `setValue` should be waited on prior to calling `editComplete` in a property editor.
     */
    export interface IAwaitableContext {
        /** A handler that needs to be `await`ed proceeding */
        addPromise: (id: string, promise: Promise<void>) => void;
        /** Remove a handler that needs to be `await`ed proceeding. */
        removePromise: (id: string) => void;
    }
    export const AwaitableContext: React.Context<IAwaitableContext>;
    export interface UseDebounceStringPropertyOptions {
        value: string;
        path: string[];
        /**
         * Method which should be wrapped with "debounce".
         * Notice that you need to wrap this method with useCallback/useRef to pass the same method instance every time.
         *
         * For more information: https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/.
         */
        onChange: ((value: any, path: string[]) => void | Promise<void>) | ((value: any) => void | Promise<void>);
        /** milliseconds */
        interval?: number;
        /** True for numeric behavior */
        /** Helper function to ensure field data conforms to required format */
        formatHelper?: (value: string) => string | null;
        /** Helper function to ensure falsy values are initialized according to field requirements. */
        initialValueHelper?: (value: string | null) => string;
        /**
         * True to skip updating a value for a cycle, e.g. a field has focus, don't clobber what the user is typing.
         *
         * TODO make this _required_ so devs can't forget to track focus and introduce the typing wobble
         */
        skipValueUpdate: boolean;
    }
    export function useDebounceStringProperty({ value, path, formatHelper, initialValueHelper, onChange, interval, skipValueUpdate, }: UseDebounceStringPropertyOptions): {
        debouncedOnChange: (((value: any, path: string[]) => void | Promise<void>) | ((value: any) => void | Promise<void>)) & {
            clear(): void;
        } & {
            flush(): void;
        };
        emitOnBlur: () => Promise<void>;
        fieldValue: string;
        setFieldValue: React.Dispatch<React.SetStateAction<string>>;
        handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    };
    interface IIconProps extends Omit<React.HTMLProps<HTMLElement>, 'size'> {
        className: string;
        size?: IconSize;
        inline?: boolean;
    }
    export type IconSize = 'normal' | 'small' | 'input' | 'large' | 'native';
    /**
     * Component to render an icon by css class name, at standardized sizes.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export const Icon: React.ForwardRefExoticComponent<Pick<IIconProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "inline" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLImageElement>>;
    export interface ISpinnerProps extends React.ComponentProps<'div'> {
        /**
         * Spinner size
         */
        size?: number | string;
        /**
         * Spinner color
         */
        color?: string;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Spinner({ size, color, className, ...otherProps }: ISpinnerProps): JSX.Element;
    export interface IIconButtonProps extends React.ComponentProps<'button'> {
        iconClassName: string;
        iconSize?: IconSize;
        busy?: boolean;
    }
    /**
     * Icon button to standardize certain behaviors
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export const IconButton: React.ForwardRefExoticComponent<Pick<IIconButtonProps, "form" | "slot" | "style" | "title" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "value" | "className" | "id" | "onChange" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "placeholder" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "busy" | "iconClassName" | "iconSize"> & React.RefAttributes<HTMLButtonElement>>;
    /**
     * Hook to DRY up common handlers for tracking focus & blur, and get tidier
     * props to spread onto components for common use-cases.
     */
    export function useTrackFocus(options?: {
        onFocus?: React.FocusEventHandler;
        onBlur?: React.FocusEventHandler;
    }): {
        /**
         * Use to respond to focus
         */
        isFocused: boolean;
        /**
         * Use if you have other focus handling concerns that don't fit in the `onFocus` arg
         */
        trackFocus: (e: React.FocusEvent) => void;
        /**
         * Use if you have other blur handling concerns that don't fit in the `onBlur` arg
         */
        trackBlur: (e: React.FocusEvent) => void;
        /**
         * Spread onto target element, i.e. `{...focusTrackingProps}`, if you don't
         * have other focus/blur handling concerns.
         */
        focusTrackingProps: {
            onFocus: (e: React.FocusEvent) => void;
            onBlur: (e: React.FocusEvent) => void;
        };
    };
    /**
     * Manage tab index between components without worrying about "drilling holes" with props.
     * e.g. MVC TS can tell a PropertyGrid to use a certain tab index, all nested editors
     * can use it, no matter how deeply nested they are.
     */
    export interface ITabbingContext {
        /**
         * To base component tab indexes on.
         */
        tabIndex: number;
    }
    export const TabbingContext: React.Context<ITabbingContext>;
    /**
     * Helper function that allows a tab index provided by props to trump
     * one that comes from the context
     */
    export function getTabIndex(context: ITabbingContext, propsTabIndex?: number): number;
    /**
     * A reusable hook to make `TabbingContext` easier to use for most cases.
     * In cases where
     * @param propsTabIndex tab index from props
     */
    export function useTabbingContext(propsTabIndex?: number): number;
    interface IDebounceComponentProps {
        /**
         * Delay after which child component will be shown
         *
         * @default 250
         */
        delay?: number;
        children: React.ReactNode;
    }
    /**
     * Component is used to show child component (Spinner/Loader) after some delay.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export const DebounceComponent: React.MemoExoticComponent<({ children, delay }: IDebounceComponentProps) => JSX.Element | null>;
    interface ISearchFieldProps extends React.HTMLProps<{}> {
        onSearch: (value: string) => void;
        name?: string;
        value: string;
        onClear: () => void;
        clearTitle?: string;
        showClearIcon?: boolean;
        /**
         * Determines whether to show searchbox or not
         * @default true
         */
        showSearchIcon?: boolean;
        /**
         * submitOnEnter - even if we are allowed to just debounce this in some cases, we might need to handle
         * the enter-key / submit button for other / legacy cases.
         */
        submitOnEnter?: boolean;
        /**
         * Only execute overriden blur event handler provided by parent component
         */
        doNotEmitOnBlur?: boolean;
        /**
         * Indicates that a search process is going and loading indicator is displayed in the field
         */
        isLoading?: boolean;
        /** for legacy reasons, outlined is default. standard is material UI underline */
        variant?: 'outlined' | 'standard';
        /**
         * true to show only search icon when field is empty and has no focus
         *
         * Requires some expanded width setting from parent for animation.
         *
         * TODO react-spring would be better here, but don't have time just now.
         */
        showHideBehavior?: boolean;
        /**
         * true to expand to the right, otherwise to the left when `showHideBehavior` is `true`.
         */
        expandToRight?: boolean;
    }
    /**
     * Search field component. Emits search string state to parent, in order to filter
     * however it sees fit.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export const SearchField: React.ForwardRefExoticComponent<Pick<ISearchFieldProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "isLoading" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "clearTitle" | "onClear" | "onSearch" | "showSearchIcon" | "showClearIcon" | "doNotEmitOnBlur" | "submitOnEnter" | "showHideBehavior" | "variant" | "expandToRight"> & React.RefAttributes<HTMLDivElement>>;
    export function useOnClickOutside(refs: React.MutableRefObject<HTMLElement | null>[] | React.MutableRefObject<HTMLElement | null>, handler?: (event: any) => void): void;
    export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): (value: T) => void;
    export interface ICalloutContentProps extends React.HTMLProps<HTMLElement> {
        /**
         * Sets placement for callout.
         */
        placement: Placement;
        'data-testid'?: string;
        scheduleUpdate: () => void;
    }
    export const CalloutContent: React.ForwardRefExoticComponent<Pick<ICalloutContentProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "placement" | "scheduleUpdate" | "data-testid"> & React.RefAttributes<HTMLElement>>;
    export function outerHeight(el: HTMLElement): number;
    export function outerWidth(el: HTMLElement): number;
    export function createEvent(eventName: string, data?: any): Event | CustomEvent;
    export const DEFAULT_ZINDEX_VALUE = 999;
    /**
     * Finds all elements with "ui-front" className and returns the maximum zIndex.
     * For components you might need to use @method useMaxZIndex() hook
     *
     * @returns max z-index
     */
    export function getMaxZIndex(): number;
    export function isElementVisible(element: HTMLElement): boolean;
    export function getOffset(element: HTMLElement): {
        top: number;
        left: number;
    };
    export function getClosest(node: HTMLElement, className: string): HTMLElement | null;
    export function isInViewport(element: HTMLElement): boolean;
    export function isInViewportWithOverflowX(element: HTMLElement): boolean;
    export function copyToClipboard(text: string): void;
    export const DOMHelpers: {
        getMaxZIndex: typeof getMaxZIndex;
    };
    export function getInnerWidth(node: HTMLElement | null): number | null;
    export function waitElementAppear(selector: string): Promise<NodeListOf<Element> | null>;
    /**
     * Props for rendering an overlay
     * Compare MVC.Host popuplayer.ts
     */
    export interface IOverlayProps {
        id?: string;
        isOpen: boolean;
        sourceRef: MutableRefObject<HTMLElement | null>;
        onClose: () => void;
        children: React.ReactNode;
        className?: string;
        /**
         * TODO: implement
         * Sets the callout's height
         */
        callOutHeight?: number | string;
        callOutMinHeight?: number | string;
        /**
         * Sets the callout's maximum width.
         * @default 400px
         */
        callOutMaxHeight?: number | string;
        /**
         * Sets the callout's width.
         * By default width will be equaled "sourceRef.width".
         */
        callOutWidth?: number | string;
        callOutMinWidth?: number | string;
        callOutMaxWidth?: number | string;
        /**
         * Sets placement for callout.
         * @default "bottom-start"
         */
        placement?: Placement;
        'data-testid'?: string;
        /** If you need to specify where the callout goes when there's no */
        flipBehavior?: Behavior | Position[];
    }
    /**
     * Rendering an overlay, with logic in one place, to avoid complication from potential duplicates.
     *
     * TODO alex: come up with new component name as we do not render overlay anymore
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function DropDownOverlay({ id, children, className, isOpen, onClose, sourceRef, callOutHeight, callOutMinHeight, callOutMaxHeight, callOutWidth, callOutMinWidth, callOutMaxWidth, placement, flipBehavior, ...otherProps }: IOverlayProps): React.ReactPortal | null;
    /**
     * A hook to standardize keyboard navigation between list items.
     * @param focusIndex currently focused item
     * @param list of items to navigate
     * @param setFocusIndex setter for the chosen index
     * @param onChosen handler for selecting an item
     */
    export function useListKeyboardNav<T>(focusIndex: number, list: T[], setFocusIndex: React.Dispatch<React.SetStateAction<number>>, onChosen: (value: T) => void): {
        keyboardNavHandler: (e: React.KeyboardEvent) => void;
    };
    export type SearchCallback<T> = (text: string) => T[] | Promise<T[]>;
    export interface PagingSearchResult<T> {
        items: T[];
        /**
         * if "true" "Load More" button will be visible and will allow to load next page
         */
        hasNext: boolean;
    }
    export interface PagingSearch<T> {
        pageSize: number;
        searchFn: (text: string, loadedCount: number, pageSize: number) => Promise<PagingSearchResult<T>>;
    }
    export type SearchEngine<T> = SearchCallback<T> | PagingSearch<T>;
    export interface ItemTemplateProps<T> {
        item: T;
        searchText: string;
        index: number;
        /**
         * Indicates, item is currently focused by key
         */
        isFocused: boolean;
        /**
         * To hide layer after choice need to call this method instead of "onItemChose" which is passed to props.
         * I hope it is temporary method until we are agreed on pattern. It seems we need to implement some api, like downshift provided.
         * https://www.npmjs.com/package/downshift
         */
        chooseItemCallback: (item: T) => void;
    }
    export enum SearchLayerCloseReason {
        emptyText = 0,
        inputBlur = 1,
        itemChosen = 2,
        clickOutside = 3
    }
    export interface ISearchBoxProps<T> extends Omit<React.HTMLProps<{}>, 'value'> {
        showClearIcon?: boolean;
        /**
         * Determines whether to show searchbox or not
         * @default true
         */
        showSearchIcon?: boolean;
        /**
         * Additional css class for "Load More" button
         */
        loadBtnClass?: string;
        /**
         * It can take either Function or Object.
         * Second option allows you to use pagination.
         */
        search: SearchEngine<T>;
        itemTemplate: (props: ItemTemplateProps<T>) => React.ReactNode;
        /**
         * Handle the selection of an item (passed in to help with keyboard navigation.)
         *
         * Remember to use HighlightMatch to highlight search results if you aren't using
         * this to render a component which does it for you.
         */
        onItemChosen: (item: T, element: HTMLLIElement) => void;
        layerProps?: {
            id?: string;
            width?: number | string;
            placement?: Placement;
            className?: string;
            /**
             * data-testid layer. For testing.
             */
            layerTestId?: string;
        };
        layerControlProps?: {
            isOpen: boolean;
            onClose: (closeReason: SearchLayerCloseReason) => void;
            onOpen: () => void;
        };
        inputProps?: {
            searchText: string;
            setSearchText?: (searchText: string) => void;
        };
        noResult?: React.ReactNode;
        /**
         * Only execute overriden blur event handler provided by parent component
         */
        doNotEmitOnBlur?: boolean;
        /**
         * Search will be run only by pressing Enter.
         *
         * @default false
         */
        submitOnEnter?: boolean;
    }
    /**
     * Search box which allows loading items with pagination
     *
     * TODO alex: need to close layer on ESC press
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SearchBox<T = any>({ id, placeholder, search, className, itemTemplate, onFocus, onBlur, onItemChosen, loadBtnClass, showSearchIcon, layerProps, noResult, layerControlProps: controlProps, inputProps, showClearIcon, doNotEmitOnBlur, submitOnEnter, }: ISearchBoxProps<T>): JSX.Element;
    export function getInitials(assignee: AssigneeDto): any;
    export function getAssigneePrimaryText(assignee: AssigneeDto): string;
    export function getAssigneeSecondaryText(assignee: AssigneeDto): string;
    export function getAssigneeType(assignee: AssigneeDto): AssigneeType;
    export function getUserEmail(assignee: AssigneeDto): string;
    export function getGroupName(assignee: AssigneeDto): string;
    export function getFolderRight(assignee: AssigneeDto): AssignmentFolderRights;
    export function search(text: string, loadedCount: number, pageSize: number, types?: AssigneeType): Promise<PagingSearchResult<AssigneeDto>>;
    export function searchWithExclusion(func: typeof search, toExclude: AssigneeDto[]): typeof search;
    export function getByStates(assignees: AssigneeDto[], ...states: State[]): AssigneeDto[];
    export function getByType(assignees: AssigneeDto[], type: AssigneeType): AssigneeDto[];
    interface IRestorableListItemProps extends React.HTMLProps<HTMLLIElement> {
        onRestore: (isDeleted: boolean, e: React.MouseEvent<HTMLButtonElement>) => void;
        deleted?: boolean;
        /**
         * Determines restore button visibility
         * @default true
         */
        canRestore?: boolean;
        iconProps?: Omit<React.ComponentProps<'button'>, 'className' | 'onClick' | 'ref'>;
        children: React.ReactNode;
    }
    /**
     * List item with a delete/restore behavior. This component is not currently stateful.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function RestorableListItem({ className, children, deleted, canRestore, onRestore, iconProps, ...otherProps }: IRestorableListItemProps): JSX.Element;
    interface IEditorAssigneeProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
        /**
         * TODO alex: need to rename this modifier to suggestion.
         * In this case, we need to remove border of item and change background
         */
        isSuggestion?: boolean;
        /**
         * New assignee has "asterisk" badge
         */
        new?: boolean;
        assignee: AssigneeDto;
        /**
         * Determines restore button visibility.
         * Besides that, visibility depends on assignee state, if state == Excluded it will be hidden as well.
         * @default true
         */
        canRestore?: boolean;
        isFocused?: boolean;
        onClick?: (assignee: AssigneeDto) => void;
        /**
         * Called when an assignee is restored/removed
         * @param isDeleted New assignee state
         * @param e Original event
         */
        onRestore?: (isDeleted: boolean, assignee: AssigneeDto, e: React.MouseEvent<HTMLButtonElement>) => void;
    }
    /**
     * An Assignee (List item)
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function Assignee({ assignee, className, isSuggestion, isFocused, onClick, canRestore, onRestore, new: isNew, ...otherProps }: IEditorAssigneeProps): JSX.Element;
    export function takeWhile<T>(fn: (item: T) => boolean, xs: T[]): Generator<T, void, unknown>;
    /**
     * Swap elements of array. Mutates original array.
     * @param array Array where need to swap elements
     * @param index1 First element index
     * @param index2 Second element index
     */
    export function swap<T>(array: T[], index1: number, index2: number): void;
    export function isNotEmpty<T>(a?: T[]): boolean;
    export function intersect<T>(array1: T[], array2: T[]): T[];
    export function areEqual<T>(a: T[], b: T[], comparer?: (a: T, b: T) => boolean): boolean;
    /**
     * Find how many times a value appears in an array.
     *
     * For more detail about more values consider d3-array.rollup
     *
     * @param array to search
     * @param value to search for dupliacates
     * @param comparator optional for primitive values
     * @returns how many times the a value appears in an array
     */
    export function includesCount<T>(array: T[], value: T, comparator?: (a: T, b: T) => boolean): number;
    export interface IAssignmentFieldProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
        assignees: AssigneeDto[];
        placeholder?: string;
        inputClassName?: string;
        search: (text: string, loadedCount: number, pageSize: number) => Promise<PagingSearchResult<AssigneeDto>>;
        onChange: (assignees: AssigneeDto[]) => void;
        layerTestId?: string;
    }
    /**
     * Assignee list and search (TODO) field.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function AssignmentField({ assignees, placeholder, search: _search, onChange, layerTestId, ...htmlOptions }: IAssignmentFieldProps): JSX.Element;
    export function getAssignees(child: ContextProviderNode, deleted?: Map<number, AssigneeDto>): AssigneeDto[];
    export function convertServerValue(assignees: AssigneeDto[]): AssigneesHolder;
    export function getDeletedAssignees(assignees: AssigneeDto[]): Map<number, AssigneeDto>;
    /**
     * simple props to help add these attributes to your components
     */
    export interface DataAttributeProps {
        dataLabel?: string;
        dataPath?: string;
        dataTestId?: string;
    }
    /**
     * Interface for common data attributes.
     */
    export interface DataAttributes {
        'data-label'?: string;
        'data-path'?: string;
        'data-testid'?: string;
    }
    /**
     * Get a data attributes object that can be spread onto a JSX element as data attribute props.
     * @param props to parse. Undefined values will be ignored.
     * @returns spreadable attribute object.
     */
    export function getDataAttributes({ dataLabel, dataPath, dataTestId }: DataAttributeProps): DataAttributes;
    /**
     * Get reusable class name for validation
     * @param props to evaluate
     * @param ignoreValid true to avoid returning an explicitly "valid" classname.
     * This defaults to true, because we seldom highlight things green when valid
     */
    export function getValidationTextClass(props?: ValidationSummary, ignoreValid?: boolean): "" | "dpc-validation-text--error" | "dpc-validation-text--warn" | "dpc-validation-text--valid";
    /**
     * Get reusable class name for validation
     * @param props to evaluate
     * @param ignoreValid true to avoid returning an explicitly "valid" classname.
     * This defaults to true, because we seldom highlight things green when valid
     */
    export function getValidationOutlineClass(props?: ValidationSummary, ignoreValid?: boolean): "" | "dpc-validation-outline--error" | "dpc-validation-outline--warn" | "dpc-validation-outline--valid";
    /**
     * Get reusable class name for validation
     * @param props to evaluate
     * @param ignoreValid true to avoid returning an explicitly "valid" classname.
     * This defaults to true, because we seldom highlight things green when valid
     */
    export function getValidationUnderlineClass(props?: ValidationSummary, ignoreValid?: boolean): "" | "dpc-validation-outline--valid" | "dpc-validation-underline--error" | "dpc-validation-underline--warn";
    export function getHasValidationErrorClass(props?: ValidationSummary): "" | "dpc-has-validation-error";
    export type VerticalPlacement = 'top' | 'middle' | 'bottom';
    export type HorizontalPlacement = 'left' | 'right' | 'center';
    export interface Placement {
        horizontal: HorizontalPlacement;
        vertical: VerticalPlacement;
    }
    export interface ILabelProps extends DataAttributeProps, React.HTMLProps<{}> {
        actions?: React.ReactNode;
        error?: boolean;
        /**
         * By default, this will wrap contents in the label, for the desired
         * behavior that clicking the label will give focus to the associated input.
         * If this is _not_ desired, then add this flag avoid wrapping contents
         * in a the label element.
         */
        doNotWrap?: boolean;
        labelTextClassName?: string;
        validation?: ValidationSummary;
        placement?: Placement;
    }
    /**
     * Input label component. By default this will wrap contents in a label
     * element, but can be configured to use a section, and embed the label,
     * using the `doNotWrap` prop.
     *
     * This allows it to be used for formatting without passing mouse-events
     * on to the wrapped input, or when one label wraps multiple inputs.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function Label({ actions, children, dataLabel, dataPath, doNotWrap, labelTextClassName, htmlFor, className, label, validation, placement, }: ILabelProps): JSX.Element;
    /**
     *
     * @param path to convert to data attribute
     */
    export function getDataPath(path: string[]): string;
    export function getDataLabel(editor: IPropertyChild): string;
    export function getEditorDataAttributeProps(editor: IPropertyChild, path: string[]): DataAttributeProps;
    export function getEditorDataAttributes(editor: IPropertyChild, path: string[]): DataAttributes;
    interface IEditorLabelProps extends ILabelProps {
        editor: IPropertyChild;
        path: string[];
        /**
         * True will cause the label's React.Children to be rendered in a fragment,
         * and data attributes and class name will be passed to the first child element.
         */
        hideInputLabel?: boolean;
        actions?: React.ReactNode;
    }
    /**
     * A label / wrapper element that assumes a few things about what we intend for editors.
     *
     * passing the `hideInputLabel` prop will cause the label's React.Children to be rendered in a
     * fragment, and data attributes and class name will be passed to the first child element.
     * This is also true if Node.DisplayLabelPosition is "None"
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function EditorLabel(props: IEditorLabelProps): JSX.Element | null;
    /**
     * Hook for all the things you would need to connect and show a
     * validation tooltip on hover.
     */
    export function useHoverValidation(validation?: ValidationSummary): {
        inputRef: HTMLElement | undefined;
        show: boolean;
        onShowValidation: (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => void;
        onHideValidation: () => void;
        valInputAttributes: {
            'aria-describedby': string | undefined;
        };
        toolTipId: string | undefined;
    };
    interface IValidationListProps extends ValidationSummary {
        id?: string;
        className?: string;
        /**
         * Default behavior is 'tooltip'. Specify other to change rendering behavior.
         */
        role?: ValidationRole;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        hideErrorIcon?: boolean;
        validationTextClassName?: string;
        scheduleUpdate?: () => void;
        isOpen?: boolean;
        hasSolutions?: boolean;
        /** for closing if it's got solutions, etc. */
        onMouseLeave?: React.MouseEventHandler;
    }
    export const getClassName: (className?: string | undefined, role?: ValidationRole | undefined, hasSolutions?: boolean | undefined) => string;
    /**
     * Displays validation as a list
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const ValidationList: React.ForwardRefExoticComponent<IValidationListProps & React.RefAttributes<HTMLUListElement>>;
    interface ICalloutCaretProps extends PopperArrowProps {
        placement?: Placement;
    }
    export const CALLOUT_CARET_SIZE = 16;
    /**
     * Caret for callout.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const CalloutCaret: React.ForwardRefExoticComponent<Pick<ICalloutCaretProps, "style" | "placement"> & React.RefAttributes<HTMLDivElement>>;
    interface IScrollListener {
        (e: Event): void;
    }
    /**
     * Allow children too subscribe to changes to
     */
    export interface IScrollContext {
        scrollParent: HTMLElement | null;
        addScrollListener: (id: string, listener: IScrollListener) => void;
        removeScrollListener: (id: string) => void;
    }
    export const ScrollContext: React.Context<IScrollContext | undefined>;
    export interface IScrollProviderProps {
        scrollParent: HTMLElement | null;
        children: React.ReactNode;
    }
    export function ScrollProvider({ children, scrollParent }: IScrollProviderProps): JSX.Element;
    /**
     * A reusable hook to make `ScrollContext` easier to use for most cases,
     * and enforce that it exists.
     * @param propsTabIndex tab index from props
     */
    export function useScroll(): IScrollContext;
    /**
     * Use this only for things that won't always be wrapped in a scroll context.
     * @returns context if it's defined or a fallback value
     */
    export function useScrollSafe(): IScrollContext;
    export type ValidationRole = 'tooltip' | 'list';
    export interface IValidationErrorProps extends ValidationSummary {
        id?: string;
        className?: string;
        sourceRef?: HTMLElement;
        /**
         * Default behavior is 'tooltip'. Specify other to change rendering behavior.
         */
        role?: ValidationRole;
        isOpen?: boolean;
        showTooltipAtCenter?: boolean;
        validationTextClassName?: string;
        hideErrorIcon?: boolean;
        placement?: Placement;
        solutions?: React.ReactNode;
        solutionsTitle?: string;
        /** if it has solutions, and is therefore interactive, might want to close it on mouse-out */
        onMouseLeave?: React.MouseEventHandler;
    }
    /**
     * Validation Error display component. These should be show on hover.
     *
     * This implementation relies on CSS transitions.
     * if we want something more sophisticated than CSS transitions for these, we should consider
     * https://github.com/react-spring/react-spring to handle transitions across the UI.
     *
     * We could split the tool-tip part of this out...
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ValidationError({ id, reasons, levels, worstLevel, role, className, sourceRef, isOpen, showTooltipAtCenter, validationTextClassName, placement, hideErrorIcon, solutions, solutionsTitle, onMouseLeave, }: IValidationErrorProps): JSX.Element | null;
    interface IValidationWrapperProps extends ValidationWrapperCommonProps {
        children: React.ReactNode;
        validation?: ValidationSummary;
        elementClassName?: string;
        calloutClassName?: string;
    }
    export type ValidationBorderType = 'outline' | 'underline' | 'none';
    /**
     * Helper interface for components which wrap [[ValidationWrapper]] to help
     * provide the [[ValidationSummary]].
     */
    export interface ValidationWrapperCommonProps extends DataAttributes {
        borderType?: ValidationBorderType;
    }
    /**
     * Wrapper which adds a validation behavior to its _first_ child element.
     *
     * If validation props is undefined, this is a NOOP.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ValidationWrapper(props: IValidationWrapperProps): JSX.Element;
    interface IEditorValidationWrapperProps extends ValidationWrapperCommonProps {
        editor: IPropertyChild;
        children: React.ReactNode;
    }
    /**
     * A Validation Wrapper that knows how to get the data for an editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function EditorValidationWrapper(props: IEditorValidationWrapperProps): JSX.Element;
    interface IEditorAssigneesProps extends IEditorProps {
        placeholder?: string;
    }
    /**
     * Editor for assignees. Displays current assignees, and shows assignees available.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorAssignees({ child, path, id }: IEditorAssigneesProps): JSX.Element;
    export type CheckboxSize = 'small' | 'standard' | 'large';
    export interface ICheckboxProps extends DataAttributeProps, DataAttributes, React.InputHTMLAttributes<{}> {
        id?: string;
        checked?: boolean;
        label?: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        /** override input type, e.g. "radio" */
        type?: string;
        grouped?: boolean;
        indeterminate?: boolean;
        validation?: ValidationSummary;
        checkSize?: number | CheckboxSize;
    }
    /**
     * A checkbox/radio input with accompanying text.
     * Combining the two to standardize styles and anticipate handling label positioning in one place.
     * Also handles indeterminate state.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function Checkbox({ checked, disabled, type, grouped, indeterminate, className, id, label, name, onChange, onClick, validation, value, tabIndex: propsTabIndex, autoFocus, checkSize, ...dataAttrs }: ICheckboxProps): JSX.Element;
    /**
     * Get an ID for linking/testing an editor
     * @param path of editor to convert to ID
     * @param id if already chosen to easily override default path-based ID
     * @returns kebab-case id string
     */
    export function useEditorId(path: string[], id?: string): string[];
    export function generateGuid(): string;
    interface IEditorCheckboxProps extends IEditorProps {
        nullable?: boolean;
    }
    /**
     * A Checkbox consuming a property child model.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorCheckbox({ child, id, nullable, onChange, path, hideInputLabel }: IEditorCheckboxProps): JSX.Element;
    export interface IComboBoxControlProps {
        open: boolean;
        onOpenClick: () => void;
        onClose: () => void;
    }
    export interface IComboBoxProps extends React.HTMLProps<{}> {
        onChange?: React.EventHandler<ChangeEvent<HTMLInputElement>>;
        onClear?: React.MouseEventHandler<HTMLButtonElement>;
        layout?: any;
        /**
         * true to force it open and ignore internal isOpen state
         */
        open?: boolean;
        /** i18n hook for clear icon button */
        clearTitle?: string;
        /** i18n hook for open icon button */
        openTitle?: string;
        placeholder?: string;
        validation?: ValidationSummary;
        hideClear?: boolean;
        /**
         * Provide control props to manage the open/close of this from the outside.
         */
        controlProps?: IComboBoxControlProps;
        openIconClass?: string;
        /**
         * data-testid layer. For testing.
         */
        layerTestId?: string;
        layerProps?: Partial<Omit<IOverlayProps, 'isOpen' | 'onClose' | 'children'>>;
        inputClass?: string;
        iconButtonClass?: string;
        overlayClass?: string;
        fontStyle?: React.CSSProperties;
        inputRef?: React.MutableRefObject<HTMLInputElement | null>;
        useRippleEffect?: boolean;
    }
    /**
     * An un-opinionated Combobox component, to allowing for rendering / filtering different things
     * in different ways in different contexts.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export const ComboBox: React.ForwardRefExoticComponent<Pick<IComboBoxProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "validation" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "clearTitle" | "onClear" | "layout" | "layerProps" | "layerTestId" | "inputRef" | "openIconClass" | "openTitle" | "hideClear" | "controlProps" | "inputClass" | "iconButtonClass" | "overlayClass" | "fontStyle" | "useRippleEffect"> & React.RefAttributes<HTMLDivElement>>;
    /**
     * Convenience object for namespace TypeScript
     */
    export const StringUtils: {
        equalsAny: typeof equalsAny;
        equals: typeof equals;
        startsWith: typeof startsWith;
        decodeHTML: typeof decodeHTML;
    };
    export function equalsAny(str: string, samples: string[], caseInsensitive?: boolean): boolean;
    export function equals(val1: string, val2: string, caseSensitive?: boolean): boolean;
    export function stringContains(value: string, searchString: string, caseInsensitive?: boolean): boolean;
    export function startsWith(str: string, suffix: string, caseSensitive?: boolean): boolean;
    export function decodeHTML(input: string): string;
    /**
     * Escape a string to be parsed as a regular expression, prior top parsing it.
     * @param string to escape
     */
    export function escapeRegExp(string: string): string;
    export function isNullOrWhitespace(value: string | null | undefined): boolean;
    export function capitalize(value: string): string;
    export function htmlToText(html: string): string | null;
    export function GetSize(byteCount: number): string;
    export function removeSpecialCharacters(input?: string): string;
    export function splitCamelCase(original: string): string;
    /**Determines whether a string contains html reserved chars i.e. " ' & < > */
    export function hasHtmlReservedCharacters(input: string): boolean;
    export function getDecodedHtmlReservedCharacters(input: string): string;
    /**
     * Options for how to truncate the string
     */
    interface IShortenStringOptions {
        dropFrom?: 'end' | 'start' | 'middle';
        /**
         * Defaults to an ellipsis character (U+2026);
         */
        replacement?: string;
        /** `false` if the measurement of total shouldn't include the replacement string. */
        countIncludesReplacement?: boolean;
        /**
         * word separator when abbreviating. This _entails_ the desire to preserve whole words, which in turn means the
         * length will be taken as an approximation.
         */
        separator?: string;
        /**
         * True to keep separator in between replacement and kept words,
         */
        keepSeparator?: string;
    }
    export const ELLIPSIS = "\u2026";
    /**
     * Take a long string down to a given length
     * @param input string to truncate
     * @param length to limit string to. defaults to 30
     * @param {IShortenStringOptions} options optional config object
     */
    export function shortenString(input: string, length?: number, options?: IShortenStringOptions): string;
    export function sanitizeHtml(html: string, allowAttributes?: string[], forceBody?: boolean): string;
    export interface HighlightDto {
        value: string;
        index: number;
        isMatch?: boolean;
    }
    /**
     * Splits a string into ordered objects based on case insensitive matches
     * of a provided search string.
     * @param text to search
     * @param searchString to search with
     */
    export function stringHighlightUtil(text: string, searchString?: string): HighlightDto[];
    interface IHighlightMatchProps extends React.HTMLProps<{}> {
        children: string;
        searchString?: string;
    }
    /**
     * Component which highlights marked
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HighlightMatch({ children, searchString, className }: IHighlightMatchProps): JSX.Element;
    interface IDropDownOptionProps extends React.HTMLProps<{}> {
        id?: string;
        value?: any;
        index: number;
        onChosen: (id: string, value: any) => void;
        isChosen?: boolean;
        isFocused?: boolean;
        searchString?: string;
    }
    /**
     * Drop down option for dropdowns and combo-boxes, etc.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function DropDownOption({ children, id, value, onChosen, isChosen, isFocused, searchString, }: IDropDownOptionProps): JSX.Element;
    interface IStatefulComboProps<T> {
        currentValue?: T;
        options: IStringComboOption<T>[] | string[];
        onValueChange: (value: T | null) => void;
        /**
         * Respond to changes in the text field, e.g. SuggestStringEditor emits string
         * values even before the field blurs.
         */
        onSearchChange?: (value: string) => void;
        id?: string;
        className?: string;
        /**
         * True to allow a free text value to be emitted, on blur, even if it doesn't match any of the
         * pre-defined options. Defaults to `true`
         */
        allowFreeText?: boolean;
        validation?: ValidationSummary;
        /** To handle the text of the search field on blur, if necessary */
        onBlur?: (e: React.FocusEvent<HTMLInputElement>, fieldValue: string) => void;
        hideClear?: boolean;
        /** Whether to auto-select first item on blur when searching. True by default */
        allowPartialMatch?: boolean;
        onValueChosen?: (option: IStringComboOption<T>) => void;
        onValueClear?: () => boolean;
    }
    export interface IStringComboOption<T> {
        text: string;
        value: T;
    }
    /**
     * A drop-down, or essentially a combo box with some of it's options locked down, in order
     * to DRY up the common use-case of a discreet string list.
     *
     * If you need an async list of things, or custom dropdown item content,
     * you should wrap `ComboBox` and add handlers to control it's state in your wrapper.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function StringComboBox<T>({ allowFreeText, allowPartialMatch, hideClear, id, className, currentValue, onBlur, options, onSearchChange, onValueChange, validation, onValueChosen, onValueClear, }: IStatefulComboProps<T>): JSX.Element;
    /**
     * Helper to convert a list of plain strings to combo options.
     * @param values to convert to combo options
     */
    export function getOptionsFromStrings(values?: string[]): IStringComboOption<any>[];
    export function getOptionFromString(value: string): IStringComboOption<string>;
    interface IEditorComboProps extends IEditorProps {
        className?: string;
    }
    /**
     * A combo box consuming a property child model.
     *
     * This is currently tolerant of configuration values being either an array of strings
     * or an array of data-pairs, since all related editor attributes are not currently
     * aligned as either.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function EditorCombo({ child, className, id, onChange, path }: IEditorComboProps): JSX.Element;
    interface IEditorStepInfoProps extends IEditorProps {
    }
    /**
     * Read Only string with a label
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function DisplayStringEditor({ id, child, path }: IEditorStepInfoProps): JSX.Element;
    export function ReadOnlyEditor({ id, child, path }: IEditorProps): JSX.Element;
    interface IValueGetter {
        (child: IPropertyChild): string;
    }
    interface IEditorTextAreaProps extends IEditorProps {
        valueGetter?: IValueGetter;
    }
    /**
     * Basic Text Area Editor
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorTextArea({ child, id, hideInputLabel, path, valueGetter, onChange }: IEditorTextAreaProps): JSX.Element;
    interface IEditorStringArrayFieldProps extends IEditorProps {
    }
    /**
     * Editor which emits a list of string values from a text field.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorStringArrayField(props: IEditorStringArrayFieldProps): JSX.Element;
    interface ITextFieldProps extends React.HTMLProps<HTMLInputElement> {
        value: string | number;
        onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
        onClear?: React.MouseEventHandler;
        showClear?: boolean;
        disabled?: boolean;
        placeholder?: string;
        validation?: ValidationSummary;
        autoComplete?: string;
        onBlur?: React.FocusEventHandler<HTMLInputElement>;
        autoFocus?: boolean;
        overrideDefaultClasses?: boolean;
        ProvidedValidationWrapper?: React.FunctionComponent<ValidationWrapperCommonProps> | React.ComponentClass<ValidationWrapperCommonProps>;
    }
    /**
     * Text field input component handling a variety of common concerns.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export const TextField: React.ForwardRefExoticComponent<Pick<ITextFieldProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "validation" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "onClear" | "showClear" | "overrideDefaultClasses" | "ProvidedValidationWrapper"> & React.RefAttributes<HTMLInputElement>>;
    export function isNumericEditor(editor: IPropertyChild): boolean;
    export function getFieldType(editor: IPropertyChild): string;
    export function isNullableType(editor: IPropertyChild): any;
    export function getNumericEditorType(editor: IPropertyChild): NumericEditorType;
    export function isFloatEditor(editor: IPropertyChild): boolean;
    export function getNumericArrayEditorType(editor: IPropertyChild): NumericArrayEditorType;
    export function isArrayFloatEditor(editor: IPropertyChild): boolean;
    export interface IEditorTextFieldProps extends IEditorProps {
        placeholder?: string;
        externalValue?: string;
        children?: React.ReactNode;
        /**
         * CSS Class to be added to outer-most element of field, whether that's a label wrapper or
         * the input itself.
         */
        className?: string;
        inputType?: string;
        /** Helper function to ensure field data conforms to required format */
        formatHelper?: (value: string) => string | null;
        /** Helper function to ensure falsy values are initialized according to field requirements. */
        initialValueHelper?: (value: string | null) => string;
    }
    /**
     * A Text Field consuming a property child model.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function EditorTextField({ child, children, className, id, inputType, hideInputLabel, path, onChange, placeholder, externalValue, formatHelper, initialValueHelper, }: IEditorTextFieldProps): JSX.Element;
    interface ISuggestStringEditorProps extends IEditorProps {
    }
    /**
     * This editor allows the user to either free-hand a string constant, or define and maintain (add and edit)
     * a list of string constants from which to choose via drop-down.
     *
     * All list configuration & option selection is design time.
     *
     * If list is not configured in EditorConfigurationValues, render a text-field with an "add" icon button.
     * If a list is present, render a drop/combo, with an 'edit' pencil.
     *
     * Add vs edit are handled differently in different dialogs. The "edit" action also offers the user a chance
     * to add any free-text value to the existing list.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function SuggestStringEditor(props: ISuggestStringEditorProps): JSX.Element;
    export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'link' | 'material';
    export type ButtonFontSize = 'small' | 'normal';
    export type ButtonFontWeight = 'normal' | 'medium' | 'bold';
    export type IButtonProps = Omit<React.ComponentPropsWithRef<'button'>, 'color'> & {
        /**
         * Determines button style
         */
        variant: ButtonVariant;
        /**
         * Disables button and displays loading indicator
         */
        loading?: boolean;
        /**
         * Represents invalid button state.
         *
         * TODO: currently we don't have a use case for this property. We might will need to pass array of ValidationIssues instead of it.
         */
        invalid?: boolean;
        /**
         * Allows to use button as a link
         */
        href?: string;
        /**
         * @default 'uppercase'
         */
        textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'initial';
        /**
         * @default 'normal'
         */
        fontSize?: ButtonFontSize;
        /**
         * @default 'bold'
         */
        fontWeight?: ButtonFontWeight;
        /**
         * Indicates that button opened dropDown and applies corresponding styles for the button. Cгrrently this property is supported only for link button with dropdown.
         */
        dropDownOpened?: boolean;
    } & ({
        /**
         * Determines button style
         */
        variant: 'material';
        /**
         * Dropdown is not supported for material-ui button currently
         */
        dropdown: never;
    } | {
        /**
         * Determines button style
         */
        variant: Exclude<ButtonVariant, 'material'>;
        /**
         * Displays chevron next to the button text
         */
        dropdown?: boolean;
    });
    /**
     * Button component
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export const Button: React.ForwardRefExoticComponent<Pick<IButtonProps, "form" | "slot" | "style" | "title" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "value" | "className" | "id" | "invalid" | "onChange" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "href" | "name" | "placeholder" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "variant" | "loading" | "dropdown" | "textTransform" | "fontSize" | "fontWeight" | "dropDownOpened"> & React.RefAttributes<HTMLButtonElement>>;
    export { Button } from "components/buttons/Button/Button";
    export { IconButton } from "components/buttons/IconButton";
    export { Button } from "components/buttons/Button/index";
    export interface IEditorConfigButtonProps extends React.HTMLProps<{}> {
    }
    /**
     * Buttons that appear below editor inputs and provide additional configuration,
     * such as opening a dialog for a ArrayEditor.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorConfigButton({ children, className, onClick, disabled }: IEditorConfigButtonProps): JSX.Element;
    export interface IEditorConfigButtonsProps extends React.HTMLProps<{}> {
    }
    /**
     * Config button wrapper, currently just to normalize styles.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function EditorConfigButtons({ children, className }: IEditorConfigButtonsProps): JSX.Element;
    export interface IUserCulture {
        DateFormat: string;
        DateTimeFormat: string;
        TimeFormat: string;
        UserCulture: string;
        CurrencySymbol: string;
        ISOCurrencySymbol: string;
        NumberGroupSeparator: string;
        NumberDecimalSeparator: string;
    }
    export function setUserCulture(culture: IUserCulture): void;
    export function getUserCulture(): IUserCulture;
    /**
     * Convert a string value to a numeric value, with some fallback enforcement.
     * @param value to convert
     * @param float true if target is a floating point number
     * @param nullable true if the value should be allowed to be null
     */
    export function parseInputToNumber(value: string, float?: boolean, nullable?: boolean): string | null;
    export function cleanTrailingDecimals(value: string): string;
    export function hasTrailingDecimal(value: string): boolean;
    /**
     * Initialize a default value for a numeric field based on whether it is nullable or not.
     * @param value to null check
     * @param nullable true if the value is nullable
     */
    export function initializeNumericValue(value: string | null, nullable?: boolean): string;
    export function getNumberFromFormattedString(value: string, float?: boolean, nullable?: boolean): number;
    export function createRange(size: number, startAt?: number): number[];
    export function convertToDoubleDigits(num: number): string | number;
    export function toFixedWithoutRound(num: number, fixed: number): number;
    export function isNumber(num: any): boolean;
    export function convertToFloat(value: string): number;
    export const MinDate = "0001-01-01";
    export const MaxDate = "9999-12-31";
    export interface TimeDuration {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    export function getMoment(): typeof moment;
    export function getDateMillisFromTicks(ticks?: number): number;
    export function getMomentFromString(dateString: string, justDate?: boolean): moment.Moment;
    export function getMomentFromISOString(dateString: string, justDate?: boolean): moment.Moment;
    export function getMomentFromMillis(millis: number, justDate?: boolean): moment.Moment;
    export function getMomentFromTicks(ticks: number): moment.Moment;
    export function getDateIrrespectiveOfTimezone(millis: number): string;
    export function convertToMomentDateFormat(dateFormat: string): string;
    export function getFormattedDateString(date?: moment.Moment | string | null, format?: string, useStrict?: boolean): string;
    export function getFormattedDateStringForServer(date: moment.Moment, onlyDate?: boolean): string;
    export function getMomentDateObject(date: any, dateFormat?: string, useStrict?: boolean): moment.Moment;
    export function isValidDateTime(date: string, dateFormat: string, allowNull?: boolean, useStrict?: boolean): boolean;
    export function isValidDate(date: string | null | undefined, dateFormat: string, allowNull?: boolean, useStrict?: boolean): boolean;
    export function isISODateString(dateString: string): boolean;
    /**Checks if a .net min date */
    export function isMinDate(date: string | moment.Moment): boolean;
    export function isDotNetJSONDate(dateText: string): boolean;
    export function getISODateStringWithUtcOffset(date: Date): string;
    export function getTimeFormatBetweenTwoDates(date1: Date, date2: Date): string;
    export function getFormatedTimeBetweenTwoDates(date1: Date, date2: Date, displayFormat: LiveColumnDisplayFormat): string;
    export function getTimeDurationBetweenTwoDates(date1: Date, date2: Date): TimeDuration;
    export function getDurationBetweenDates(date1: Date, date2: Date): moment.Duration;
    export function getDateDifferenceInMilliseconds(date1: Date, date2: Date): number;
    export function isSameDate(date1: string | moment.Moment, date2: string | moment.Moment, dateFormat?: string): boolean;
    export function getCurrentCultureMomentTimeFormat(): string;
    /**
     * Evaluate whether a string is intended to be evaluated as a date _quickly_.
     *
     * This is intended to be _fast_ not perfect. If you need something foolproof use moment, but for high-iteration
     * contexts, moment is a bit slow.
     *
     * This will match strings like:
     *
     * * 0001-01-01T00:00:00Z
     * * 2020-04-27 05:45:00Z
     * * 2020-04-27 05:45
     * * 0001-01-01T
     * * 2020-04-27
     *
     * @param value to evaluate
     */
    export function isIsoDateStringQuickAndDirty(value: string): boolean;
    export function getMomentForEditor(value: any, justDate?: boolean): Moment | null;
    export interface ValidateDateResult {
        valid: boolean;
        suggestion: string;
        date: string;
        exact?: boolean;
    }
    export function validateDate(currentText: string, selectedDateTimeValue: string, dateTimeFormat: string): Promise<ValidateDateResult | undefined>;
    export function getDateFormat(isDateTimePicker?: boolean): string;
    export function getMomentDateFormat(isDateTimePicker?: boolean): string;
    export function getTimeFormat(): string;
    export function getMomentTimeFormat(): string;
    export function getMomentAndDateString(format: string, date?: string | moment.Moment, keepInvalidSuggestion?: boolean, returnCurrentDateIfUndefined?: boolean): {
        parsedDateString: string | undefined;
        parsedMoment: moment.Moment;
    } | {
        parsedMoment: undefined;
        parsedDateString: string;
    };
    export function getDateFormatMask(format: string, maskChar?: string): string;
    export function getTimeFormatMask(format: string, maskChar?: string): string;
    export interface TimeSpanValue {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    /**
     * @param value ISO 8601 String value
     */
    export function getValue(value: string): TimeSpanValue;
    export function getIsoString(time: TimeSpanValue): string;
    export function timeIsEmpty(state: TimeSpanValue): boolean;
    export function getTimeSpanDisplayValue(time: TimeSpanValue): string;
    export let friendlyNamesCache: any;
    export function getDecisionsTypeId(type: DecisionsDefinedType | DecisionsType | DecisionsNativeType | DecisionsEnumType): string;
    export function getDecisionsTypeById(id: string): Promise<DecisionsType>;
    export function getTypeDisplayName(type: DecisionsType): Promise<string>;
    export function getFriendlyTypeName(type: DecisionsType): Promise<string>;
    /**
     * Convenience object for non-module TypeScript
     */
    export const TypeUtils: {
        isNumber: typeof isNumber;
        isSignedInt: typeof isSignedInt;
        isUnsignedInt: typeof isUnsignedInt;
        isInt: typeof isInt;
        isReal: typeof isReal;
        isString: typeof isString;
        isBoolean: typeof isBoolean;
        isDateTime: typeof isDateTime;
        isIntValue: typeof isIntValue;
        isNonNegativeIntValue: typeof isNonNegativeIntValue;
        isNegativeIntValue: typeof isNegativeIntValue;
        isRealValue: typeof isRealValue;
        getShortType: typeof getShortType;
    };
    /**
     * Checks .Net type is Number or not
     * @example
     * isNumber("System.Int32")
     */
    export function isNumber(type: string): boolean;
    /**
     * @example
     * isSignedInt('System.String')
     */
    export function isSignedInt(type: string): boolean;
    /**
     * @example
     * isUnsignedInt('System.UInt32')
     * isUnsignedInt('System.String')
     */
    export function isUnsignedInt(type: string): boolean;
    export function isInt(type: string): boolean;
    export function isReal(type: string): boolean;
    export function isString(type: string): boolean;
    export function isBoolean(type: string): boolean;
    export function isDateTime(type: string): boolean;
    export function isIntValue(str: string): boolean;
    export function isNonNegativeIntValue(str: string): boolean;
    export function isNegativeIntValue(str: string): boolean;
    export function isRealValue(value: string): boolean;
    export function getShortType(type: string): string;
    /**
     * @returns type string from a wrapped type name (after '#', currently), e.g. `"DataPair:#Foo"` yields `"Foo"`
     */
    export function getWrappedTypeName(type: string): string;
    export function getColorCssString(value: DesignerColor | string): string;
    export function getDefaultDesignerColor(): DesignerColor;
    export function getColorEditorString(child: ContextProviderNode): string;
    /**
     * Convert an RGB CSS string value to a hexadecimal one.
     *
     * lifted from platform/hosts/Decisions.Web.MVC.Host/Decisions.Web.MVC.Host/Scripts/ColorEditor/ColorConverterHelpers.ts
     * TODO needs deduping after we are generating types from FrontEnd for MVC.
     *
     * @param rgb rgb value to convert to HEX
     * @returns hexadecimal color notation
     */
    export function rgbToHex(rgb: string | null): string;
    /**
     * Convert an hexadecimal CSS string value to an RBG one.
     *
     * lifted from platform/hosts/Decisions.Web.MVC.Host/Decisions.Web.MVC.Host/Scripts/ColorEditor/ColorConverterHelpers.ts
     * TODO needs deduping after we are generating types from FrontEnd for MVC.
     *
     * @param hex string to convert to rgb(a)
     * @param includeAlpha include alpha channel. true by default
     * @returns rgb(a) color notation
     */
    export function hexToRgb(hex: string, includeAlpha?: boolean): string;
    /**
     * Shift the hue of a hex or RGBA color.
     *
     * // TODO - to do a true hue shift, without affecting color or lightness, this should convert to HSL and back.
     * // or maybe do the math on how much to decrease the other colors based on the total
     * // OR d3.interpolate has some color functions we could make use of for this kind of thing, too
     *
     * @param colorString to shift
     * @param shift primary color to update (rgb)
     * @param amount 0 - 255. default is 100
     * @returns adjusted rgb(a) color
     */
    export function shiftHue(colorString: string, shift: 'r' | 'g' | 'b', amount?: number): string;
    export function darken(colorString: string, amount?: number): string;
    /**
     * This returns a direction string, e.g. "to top right".
     *
     * TODO If we wanted these to more accurately reflect the cardinal indicators in
     * the dialog, we should consider converting to `deg` units. Word-based direction is subject
     * to the dimensions of the element, which is sometimes what users want, but sometimes not.
     * Leaving as is for now, to ensure consistent behavior.
     * Ideally, we could let them specify any direction on a radial slider, not just cardinals.
     *
     * @param color to process
     * @returns linear-gradient direction css string
     */
    export function getCssGradientDirection(color: DesignerColor): string;
    export interface ProviderNodeStringValueGetter {
        (node: ContextProviderNode, currentMapping?: string): string | Promise<string>;
    }
    export function getEditorValueString(node: ContextProviderNode, currentMapping?: string): Promise<string>;
    export function getSimpleStringValue(node: ContextProviderNode): string;
    export function getDigitsEditorValue(node: ContextProviderNode): string;
    export function getDateTimeValue(node: ContextProviderNode, currentMapping?: string): string;
    export function getTimeSpanValue(node: ContextProviderNode): string;
    export function getStringArrayValue(node: ContextProviderNode): string;
    export function getDateTimeArrayValue(node: ContextProviderNode): string;
    export function getFilePickerStringValue(node: ContextProviderNode): string;
    export function getMultiFilePickerStringValue(node: ContextProviderNode): string;
    export function getMergeStringEditorValue(node: ContextProviderNode): string;
    export function geGridPopupEditorStringValue(node: ContextProviderNode): string;
    export function getLinkArrayEditorStringValue(node: ContextProviderNode): string;
    export function getFileContentPickerStringValue(node: ContextProviderNode): string;
    export function getPasswordEditorStringValue(node: ContextProviderNode): string;
    export function getColorEditorStringValue(node: ContextProviderNode): string;
    export function getImageInfoEditorStringValue(node: ContextProviderNode): string;
    export function getEntityPickerEditorStringValue(node: ContextProviderNode): Promise<string>;
    export function getTypePickerEditorStringValue(node: ContextProviderNode): Promise<string>;
    export function getPopupEditorValueString(node: ContextProviderNode): string;
    export function getThicknessEditorStringValue(node: ContextProviderNode): string;
    export function getMergedTextDisplayValue(value: string): string;
    interface IEditorMergeStringProps extends IEditorProps {
    }
    /**
     * Merge String Editor
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorMergeString({ child, path, onChange }: IEditorMergeStringProps): JSX.Element;
    interface IListBoxEmptyMessageProps {
        text?: string;
        list?: any[];
        className?: string;
    }
    /**
     * No data readout for lists of things, chiefly a `ListBox`, though could also be used
     * in other places, such as a `CheckListEditor`
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ListBoxEmptyMessage({ className, text, list }: IListBoxEmptyMessageProps): JSX.Element | null;
    export interface IListItemControlButtonsProps {
        index: number;
        onRemove?: (index: number) => void;
        onEdit?: (index: number) => void;
        onMoveUp?: (index: number) => void;
        onMoveDown?: (index: number) => void;
        onShowActions?: (index: number, elem: HTMLElement) => void;
        buttonRef?: React.Ref<HTMLButtonElement>;
    }
    /**
     * Control buttons for list items, with standard behaviors for move up/down, edit, and remove.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ListItemControlButtons(props: IListItemControlButtonsProps): JSX.Element;
    export interface IListItemProps extends IListItemControlButtonsProps {
        className?: string;
        label: string;
        hint?: string;
        render?: (index: number) => React.ReactNode;
    }
    export const LIST_ITEM_CLASS_NAME = "dpc-list-item";
    /**
     * List Item can be removed.
     *
     * TODO this name seems confusingly generic...
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function ListItem(props: IListItemProps): JSX.Element;
    export const OVERLAY_PORTAL_ID = "dpc-overlay-portal";
    export interface IPortalTargetProps {
        className: string;
    }
    export function useOverlayPortalTarget(isOpen: boolean, props?: IPortalTargetProps): {
        overlayPortal: HTMLDivElement;
    };
    interface IOverlayBackdropProps {
        isOpen?: boolean;
        children?: React.ReactNode;
        /** Handler to close overlay on click outside contents */
        onClose: () => void;
        className?: string;
    }
    /**
     * A backdrop / background component for callouts, overlays, and dropdowns.
     * This is primarily to create a space to lay these elements out, and catch mouse events, etc.
     * but could also be used for a darkened backdrop, etc.
     *
     * TODO if there's time, investigate whether we need this, or if it's something we could bake into the "useOverlayPortalTarget" hook.
     * or alternately, something like https://github.com/Pomax/react-onclickoutside, but I suspect that until the UI is a react app,
     * we'll have trouble keeping events to close overlays from also triggering jQuery events in the same click.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function OverlayBackdrop({ children, isOpen, onClose, className }: IOverlayBackdropProps): JSX.Element;
    /**
     * Props for callout behavior. Other HTMLProps will be applied to the callout body element.
     */
    interface ICalloutProps extends React.HTMLProps<HTMLDivElement> {
        /** Whether to show it based on parent state */
        isOpen: boolean;
        /** Element to anchor the callout */
        sourceRef: React.MutableRefObject<HTMLElement | null>;
        /** Handler to close overlay on click outside contents */
        onClose: () => void;
        /** Contents */
        children: React.ReactNode;
        /** Additional styling */
        className?: string;
        /** Fixed height */
        showArrow?: boolean;
        /**
         * How many callouts-deep is this one. Only the first level will
         * be rendered in a portal at the document root.
         */
        depth?: number;
        /** Which side of the sourceRef to show the callout */
        placement?: Placement;
        /** If you need to specify where the callout goes when there's no */
        flipBehavior?: Behavior | Position[];
        overlayClassName?: string;
        width?: number;
        /** Apply class as per popper position */
        getClassNameAsPerPlacement?: (placement: string) => string | undefined;
    }
    /**
     * Simple callout component.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export const Callout: React.ForwardRefExoticComponent<Pick<ICalloutProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "placement" | "isOpen" | "onClose" | "sourceRef" | "flipBehavior" | "depth" | "showArrow" | "overlayClassName" | "getClassNameAsPerPlacement"> & React.RefAttributes<HTMLElement>>;
    interface IActionLinkProps {
        label: string;
        value: any;
        callback?: (value: any) => void;
        valueSet?: string[];
        className?: string;
        onMouseOver?: (label: string) => void;
        children?: React.ReactNode;
        isActive?: boolean;
        disabled?: boolean;
        afterLabel?: React.ReactNode;
        beforeLabel?: React.ReactNode;
    }
    /**
     * Action link component, for action call-outs. Functionally a button (no href) that looks like a link.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export const ActionLink: React.ForwardRefExoticComponent<IActionLinkProps & React.RefAttributes<HTMLButtonElement>>;
    export const hasNesting: (values: IActionLinkItems) => boolean | undefined;
    export interface IActionHoverHandler {
        (label: string): void;
    }
    export interface IShowsNestedOnHover extends IActionLinksModel {
    }
    export function ShowsNestedOnHover({ level, values }: IShowsNestedOnHover): {
        nestingLevel: number;
        hoveredLabel: string;
        nestedKeys: string[];
        mouseOver: IActionHoverHandler;
    };
    interface IActionLinkGroupProps extends IActionLinksModel {
        groupLabel: string;
        callback?: (value: string | number) => void;
        level: number;
        onMouseOver: IActionHoverHandler;
        hoveredLabel: string;
        direction?: Placement;
    }
    /**
     * A group of Action links hidden behind a group heading or category.
     *
     * e.g. "Converters" for Mapping Type Selectors.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function ActionLinkGroup({ groupLabel, callback, values, level, onMouseOver: onGroupHover, hoveredLabel, }: IActionLinkGroupProps): JSX.Element;
    export interface IActionLinksProps extends IActionLinksModel {
        values: IActionLinkItems;
        callback?: (value: any) => void;
        level?: number;
    }
    /**
     * Action Links to show a set of actions.
     *
     * This isn't robust yet, as it is mostly necessary for Mapping Type Selectors within the Property Grid, currently.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function ActionLinks(props: IActionLinksProps): JSX.Element;
    export interface ActionsProps {
        label: string;
        onClick: (index: number) => void;
        value: string;
    }
    export interface ArrayListItemProps extends IListItemProps {
        isActionBusy: boolean;
        actionLinkItems?: IActionLinkItem[];
        /**here moreActions is Menu Actions*/
        moreActions?: ActionsProps[];
    }
    export const LIST_ITEM_CLASS_NAME = "dpc-array-editor__listitem";
    export function ArrayListItem(props: ArrayListItemProps): JSX.Element;
    interface DialogTitleClasses {
        root?: string;
        titleText?: string;
        closeButton?: string;
    }
    interface DialogTitleStyles {
        root?: CSSProperties;
        titleText?: CSSProperties;
        actionButton?: CSSProperties;
    }
    /**We will expose this one to the host */
    export interface DialogTitleProps {
        titleText?: string;
        classes?: DialogTitleClasses;
        styles?: DialogTitleStyles;
        additionalActions?: React.ReactNode;
    }
    interface DailogTitleComponentProps extends DialogTitleProps {
        isFullScreen?: boolean;
        draggableId?: string;
        onClose?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        onFullScreen?: () => void;
        disableFullScreenAction?: boolean;
    }
    export const DialogTitle: FC<DailogTitleComponentProps>;
    export interface IButtonPanelGroupProps {
        actions: IActionsProps[];
        variant?: IActionVariant;
        position: 'left' | 'right';
    }
    export function ButtonPanelGroup({ position, actions, variant }: IButtonPanelGroupProps): JSX.Element;
    export type IActionVariant = 'decisions' | 'material';
    export interface IActionsProps {
        id?: string;
        name: string;
        onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        isDisabled?: boolean;
        className?: string;
        styles?: CSSProperties;
        /**
         * @default "right"
         */
        position?: 'left' | 'right';
        tabIndex?: number;
    }
    export interface IButtonPanelProps {
        className?: string;
        style?: CSSProperties;
        actions?: IActionsProps[];
        /**
         * Use decisions button style instead of material-ui button style
         *
         * @default decisions
         */
        variant?: IActionVariant;
        /**
         * Removes paddings around panel. It is useful when container has its own padding.
         */
        disablePadding?: boolean;
    }
    /**
     * Displays buttons on the left and right sides
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function ButtonPanel({ actions, className, style, variant, disablePadding }: IButtonPanelProps): JSX.Element;
    export { ButtonPanel } from "components/Dialogs/ButtonPanel/ButtonPanel";
    export type { IActionsProps, IActionVariant, IButtonPanelProps } from "components/Dialogs/ButtonPanel/ButtonPanel";
    export type IActionVariant = "decisions" | "material";
    /**We will expose this one to the host */
    export interface IDialogActionsProps extends IButtonPanelProps {
        children?: ReactNode;
    }
    export function DialogActions({ children, className, actions, style, variant }: IDialogActionsProps): JSX.Element | null;
    export function useWindowSize(): {
        width: number;
        height: number;
    };
    export const DIALOG_MARGIN = 32;
    export const DEFAULT_SIZES = 400;
    export const DEFAULT_MIN_SIZES = 75;
    export const RENDER_DEBOUNCE_INTERVAL = 50;
    /**
     * A vanilla JS utility for managing tabbing within a containing element, so that tabbing does not escape that element.
     * e.g. fields and buttons in a dialog that should not allow tabbing to escape that dialog and "leak" to parts of
     * the UI behind the dialog.
     */
    export class TabManagementUtil {
        private container;
        private shouldFocusFirst;
        private trapTabbing;
        private list;
        private nestedUtils;
        private observer;
        protected defaultObserverOptions: {
            attributes: boolean;
            childList: boolean;
            subtree: boolean;
            attributeFilter: string[];
        };
        get observerOptions(): {
            attributes: boolean;
            childList: boolean;
            subtree: boolean;
            attributeFilter: string[];
        };
        parentControl: TabManagementUtil | undefined;
        /**
         * Set to true if this is a child utility, meaning it should allow tabbing to continue,
         * out of the container, rather than creating the loop.
         */
        get isNested(): boolean;
        shouldBeConsideredInTabbing(node: HTMLElement): boolean;
        /**
         * @param container whose elements to tab loop
         * @param shouldFocusFirst true to focus the first element when this is constructed
         */
        constructor(container: HTMLElement, shouldFocusFirst?: boolean, trapTabbing?: boolean);
        /**
         * Triggers an update of the first/last elements to manage tabbing on.
         * You should only need to call this manually if you know you are changing _attributes_ of elements,
         * since this handles adding/removing elements on its own.
         */
        updateTabList(): void;
        /**
         * Recursive call to find all the nested utils, only add the parent elements in the tab targets.
         * For example - If element or util is present in another util then it will not be added it in the
         * tab targets.
         * It also sorts the nested util based on data-tab-order.
         */
        private addNestedUtil;
        private doUpdateList;
        protected punchTabbing: (e: KeyboardEvent, target?: HTMLElement | undefined) => void;
        /**
         * If focusFirst is false, this is a NOOP
         * @param focusFirst optionally reset this flag when calling.
         */
        focusFirstElement: (focusFirst?: boolean | undefined) => void;
        /**
         * Focus last element in the set. Because the use-case of this is different (nested controls, not initial render),
         * it's not debounced.
         */
        protected focusLast: () => void;
        /**
         * Focus first element in the set. Because the use-case of this is different (nested controls, not initial render),
         * it's not debounced.
         */
        protected focusFirst: () => void;
        /**
         * This action is debounced, partly as a timeout to allow for rendering time, but also so we can
         * spam it in case things are rendering out of order.
         */
        private debouncedFocusFirst;
        private focusElement;
        private updateEventHandler;
        cleanupInstance: () => void;
        /**
         * Force tab util(s) to update their list of tab-target elements.
         * This is only necessary for edge cases MutationObserver doesn't catch. (chiefly, things changing inside an iframes...ckeditor) .
         *
         * This method can be spammed, because the the handler method is debounced.
         *
         * @param source child of target tab util container. If provided will bubble up. If not, will affect all utils on the page.
         */
        static dispatchChangeEvent(source?: HTMLElement): void;
        static cleanup: (target: Element) => void;
    }
    export class FormTabManagementUtil extends TabManagementUtil {
        shouldBeConsideredInTabbing(node: HTMLElement): boolean;
        get observerOptions(): {
            attributeFilter: string[];
            attributes: boolean;
            childList: boolean;
            subtree: boolean;
        };
    }
    export interface DialogPosition {
        left?: number;
        top?: number;
    }
    interface MakeStyleOptions {
        isResponsive?: boolean;
        styles?: CSSProperties;
        isFullScreen?: boolean;
        dialogPosition?: DialogPosition;
    }
    interface PositionOptions {
        paperElement?: HTMLDivElement;
        fixed?: ControlPosition;
        data?: ResizeCallbackData;
        windowWidth: number;
        windowHeight: number;
    }
    export const useStyles: (props: MakeStyleOptions) => ClassNameMap<"dialogPaper" | "dialogPaperSize" | "dialogPosition">;
    /** Make sure dialog does not get outside of viewport when _resizing_ */
    export const positionDialog: (options: PositionOptions) => ControlPosition;
    interface IDialogResizableBoxProps {
        children: React.ReactNode;
        windowWidth: number;
        windowHeight: number;
        width: number;
        height: number;
        styles?: DialogCssProperties;
        onResize: ResizableProps['onResize'];
        onResizeStart: ResizableProps['onResizeStart'];
        onResizeStop: ResizableProps['onResizeStop'];
        fullscreen?: boolean;
        responsive?: boolean;
    }
    /**
     * Resizable box for our dialog.  Wraps contents in a resizable box, but also handles differences for fullscreen / responsive.
     *
     * We can't easily conditionally render children in differing JSX trees, without un-mounting and re-mounting
     * the children [because of how react works](https://leoasis.github.io/posts/2017/06/26/reparenting-a-component/)
     *
     * This can lead to data loss, so having a resizer that doesn't do anything is the lesser evil.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function DialogResizableBox({ children, fullscreen, windowHeight, windowWidth, styles, responsive, ...resizableProps }: IDialogResizableBoxProps): JSX.Element;
    export interface IDialogPaperResizeProps {
        onDragStart: DraggableEventHandler;
        onDrag: DraggableEventHandler;
        onDragStop: DraggableEventHandler;
        draggableId: React.MutableRefObject<string>;
        dragPosition: React.MutableRefObject<ControlPosition>;
    }
    interface IDialogPaperComponentProps extends Omit<PaperProps, 'onDrag' | 'onDragStart'>, IDialogPaperResizeProps {
        children?: React.ReactNode;
    }
    /**
     * Originally an inline paper declaration using useCallback to memoize drag handlers,
     * this can be its own component and let React manage it (to preserve dialog children
     * when toggling full screen) because we can merge our drag props using Dialog.PaperProps.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function DialogPaperComponent({ draggableId, dragPosition, onDragStart, onDrag, onDragStop, ...paperProps }: IDialogPaperComponentProps): JSX.Element;
    export function useMaxZIndex(): {
        zIndex: number;
        refresh: () => void;
    };
    /**
     * Need to override the sizes and make it to accept only number
     * As react-resizable supports sizes in number only
     */
    export interface DialogCssProperties extends CSSProperties {
        height?: number;
        width?: number;
        minHeight?: number;
        minWidth?: number;
        maxHeight?: number;
        maxWidth?: number;
    }
    interface DialogCallbacks {
        /**After dialog close */
        onClose?: () => any;
        /**When dialog overlay clicked */
        onBackdropClick?: () => any;
        /**When dialog resizing stops */
        onResizeStop?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
        /**When dialog resizing starts */
        onResizeStart?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
        /**While resizing dialog */
        onResize?: (e: React.SyntheticEvent, data: ResizeCallbackData) => any;
        /** When dialog drag starts. */
        onDragStart?: DraggableEventHandler;
        /** While dragging dialog */
        onDrag?: DraggableEventHandler;
        /** When dialog dragging stops */
        onDragStop?: DraggableEventHandler;
        /** Fired after the dialog enters.*/
        onAfterOpen?: (node: HTMLElement, isAppearing: boolean) => any;
        /**Fired before the dialog enters. */
        onBeforeOpen?: (node: HTMLElement, isAppearing: boolean) => any;
        /**Fired when the dialog is entering. */
        onOpening?: (node: HTMLElement, isAppearing: boolean) => any;
        /**Before dialog closes */
        onBeforeClose?: (node: HTMLElement) => void;
    }
    interface KeyboardOptions {
        /**Auto focus element with the least tabindex */
        autoFocusFirst?: boolean;
        /**Trap tabbing within the dialog */
        trapTabbing?: boolean;
        /**Close dialog on the Esc key press */
        closeOnEscapeKey?: boolean;
    }
    export interface DialogProps extends DialogCallbacks {
        open: boolean;
        holderClassName?: string;
        styles?: DialogCssProperties;
        className?: string;
        dialogTitle?: DialogTitleProps;
        dialogActions?: IDialogActionsProps;
        isFullScreen?: boolean;
        /**
         * Remove resizing feature make it the same height as its content. **Defaults `false`**
         * This is also exclusive of fullscreen / toggling full screen.
         *
         * _**Warning:** Changing this while a dialog is showing will cause children to un-mount & remount, due to "re-parenting."_
         */
        isResponsive?: boolean;
        closeOnBackdropClick?: boolean;
        /**Remove full screen action from header */
        disableFullScreenAction?: boolean;
        /**Horizontal divider between header,content and footer */
        showDividers?: boolean;
        /**Ignores the default title view and uses this */
        titleComponent?: React.ReactNode;
        /**Ignores the default action view and uses this */
        actionComponent?: React.ReactNode;
        contentClassName?: string;
        contentStyles?: React.CSSProperties;
        /**Override default center position with specified custom position */
        dialogPosition?: DialogPosition;
        keyboard?: KeyboardOptions;
        hideTitle?: boolean;
    }
    export const Dialog: React.ComponentType<Pick<DialogProps & {
        children?: React.ReactNode;
    }, "children" | keyof DialogProps> & StyledComponentProps<"root" | "closeButton">>;
    export interface IPropertyGridLayerProps {
        onClose: () => void;
        sourceRef: React.MutableRefObject<HTMLElement | any>;
        placement?: Placement;
        getEditingContextId?: () => Promise<string>;
        mappingContext?: MappingContext;
    }
    export const PropertyGridLayer: FC<IPropertyGridLayerProps>;
    export { PropertyGrid } from "components/property-editors/PropertyGrid/PropertyGrid";
    export type { IPropertyGridProps, IPropertyChangeHandler, EmbeddedPropertyGridProps, IShowDialogAction } from "components/property-editors/PropertyGrid/PropertyGrid";
    export { PropertyGridLayer } from "components/property-editors/PropertyGrid/PropertyGridLayer";
    export type AlertType = 'Error' | 'Warning' | 'Information';
    export interface IAlertDialogProps {
        open: boolean;
        messages: string[];
        onClose: () => void;
        actionName?: string;
        title?: string;
        actionVariant?: IActionVariant;
        type: AlertType;
    }
    export const AlertDialog: FC<IAlertDialogProps>;
    export interface PropertyGridDialogProps {
        dialogProps: DialogProps;
        propertyGridProps: IPropertyGridProps;
        /**Action name, default is 'Ok' */
        actionName?: string;
        /**Edit complete with saved */
        onSubmit?: () => void;
        /**Canceled using title cross action */
        onCancel?: () => void;
        /**Do not call edit complete on ok */
        preserveContextId?: boolean;
    }
    export function PropertyGridDialog(props: PropertyGridDialogProps): JSX.Element;
    interface ListItemComparator {
        (a: IListItemProps, b: IListItemProps): number;
    }
    export interface IArrayEditorProps extends IEditorProps {
        /** Allow providing custom sort handler */
        compareFunction?: ListItemComparator;
        actions?: ActionsProps[];
        containerClassName?: string;
        /** Scenarios where we want to handle Remove action diffrently OR we want to hide the remove icon */
        disableRemoveAction?: boolean;
    }
    /**
     * Array editor component
     *
     * TODO i18n of buttons
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function ArrayEditor({ child, compareFunction, path, actions, containerClassName, disableRemoveAction, }: IArrayEditorProps): JSX.Element;
    interface IListBoxProps extends React.HTMLProps<{}> {
        items: IListItemProps[];
        onRemove?: (index: number) => void;
        noItemsText?: string;
        onEdit?: (index: number) => void;
        onMoveUp?: (index: number) => void;
        onMoveDown?: (index: number) => void;
        render?: (index: number) => React.ReactNode;
        contentClassName?: string;
        onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void;
        onMouseOut?: (e: React.MouseEvent<HTMLElement>) => void;
        editingIndex?: number;
        droppingIndex?: number;
        movingUpIndex?: number;
        movingDownIndex?: number;
    }
    /**
     * List box (used in the editors like ArrayEditor, DataDef Editor
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function ListBox({ className, contentClassName, items, noItemsText, onEdit, onMouseOut, onMouseOver, onMoveDown, onMoveUp, onRemove, render, ...busyIndexProps }: IListBoxProps): JSX.Element;
    export interface IDataDefinitionEditorProps extends IEditorProps {
    }
    /**
     * DataDefinitions editor component
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function DataDefinitionsEditor({ child, path }: IDataDefinitionEditorProps): JSX.Element;
    export interface IPopupButtonsProps {
        id: string;
        onOpen: (e: React.MouseEvent, id: string) => void;
        onClear: (e: React.MouseEvent, id: string) => void;
        editName?: string;
        clearName?: string;
        disableOpen?: boolean;
        disableClear?: boolean;
    }
    /**
     * Icon buttons for showing a popup _editor_ - these should probably be in editors?
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function PopupButtons({ clearName, disableClear, disableOpen, editName, id, onOpen, onClear, }: IPopupButtonsProps): JSX.Element;
    interface IGridPopupProps extends DataAttributeProps, IPopupButtonsProps {
        label: string;
        value?: string;
        children?: React.ReactNode;
        className?: string;
        'data-testid': string;
        placeholder?: string;
        hideLabel?: boolean;
        validation?: ValidationSummary;
    }
    /**
     * Basic Grid Popup elements.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function GridPopup(props: IGridPopupProps): JSX.Element;
    interface IEditorPopupProps<O extends PopupEditorOptions> extends IEditorProps {
        children?: React.ReactNode;
        className?: string;
        dialogOptions?: O;
    }
    export interface PopupEditorOptions {
        sourceElement?: Element;
        onOk?: (result: any) => void;
        onClosed?: () => void;
        onClear?: () => void;
        editingContextId?: string;
        placeholder?: string;
    }
    /**
     * Popup Buttons for a ContextProviderNode.
     *
     * This is a generic component. You probably mean to wrap it in a specific editor to open a specific dialog.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorPopup<O extends PopupEditorOptions>({ child, className, dialogOptions, path, children, hideInputLabel, }: IEditorPopupProps<O>): JSX.Element;
    export type SwatchSize = 'normal' | 'medium' | 'small';
    interface IColorSwatchProps {
        className?: string;
        color: string;
        size?: SwatchSize;
        onClick?: React.MouseEventHandler;
    }
    /**
     * Color swatch / chip for various color picker
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ColorSwatch({ className, color, onClick, size }: IColorSwatchProps): JSX.Element;
    interface IColorEditorProps extends IEditorProps {
    }
    export interface IColorPickerDialogOptions {
        stickTo?: Element;
        title?: string;
        width?: number;
        height?: number;
        onOk?: (designerColor: DesignerColor) => void;
        onClosed?: () => void;
        onClear?: () => void;
        showGradients?: boolean;
    }
    /**
     * Editor Color "Input" for Property Grid. Does not include color picker dialogue at this time.
     *
     *
     * Enhancement Ideas:
     * https://casesandberg.github.io/react-color/ - pretty color dialog
     * https://www.npmjs.com/package/react-circle-slider - circle slider for gradient angle
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function ColorEditor(props: IColorEditorProps): JSX.Element;
    export function useEpickEditor({ child, path, onChange, getEntityLabel, canCreate, canEdit }: IEntityPickerProps): {
        entityName: string;
        allowEdit: boolean;
        onValueChange: (value: object | string | null) => void;
        showEdit: boolean;
        showCreate: boolean;
        showPick: boolean;
        showReset: boolean;
    };
    export interface IEntityPickerWithLinks {
        editor: IPropertyChild;
        path: string[];
        hideInputLabel: boolean | undefined;
        onDrop?: () => void;
        entityName: string;
        onPickClick?: () => void;
        onCreateClick?: () => void;
        onEditClick?: () => void;
    }
    export function EntityPickerWithLinks({ editor, path, hideInputLabel, onDrop, entityName, onCreateClick, onEditClick, onPickClick, }: IEntityPickerWithLinks): JSX.Element;
    export interface IEntityPickerProps extends IEditorProps {
        getEntityLabel?: (value: object | string) => Promise<string>;
        canEdit?: boolean;
        canCreate?: boolean;
    }
    export interface EntityPickedInfo {
        id: string;
        name: string;
    }
    /**
     * Entity Picker Editor.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function EditorEntityPicker(props: IEntityPickerProps): JSX.Element;
    /**
     * Select Element Registration Editor.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function SelectElementRegistrationEditor(props: IEntityPickerProps): JSX.Element;
    export function getEntityPickerStyle(child: IPropertyChild): boolean;
    export interface IHeaderPanelActionProps extends React.HTMLProps<HTMLLIElement> {
        iconClassName: string;
        onClick: () => void;
    }
    /**
     * Custom action which can be added to the header of header panel. Will be shown on hover.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderPanelAction({ onClick, className, title, iconClassName, ...htmlProperties }: IHeaderPanelActionProps): JSX.Element;
    export interface IHeaderPanelProps {
        readonly title: string;
        readonly rootStyle?: StyleProps;
        readonly headerStyle?: StyleProps;
        readonly bodyStyle?: StyleProps;
        readonly titleStyle?: StyleProps;
        readonly actions?: IHeaderPanelActionProps[];
        readonly isCollapsible?: boolean;
        children?: React.ReactNode;
        readonly onCollapsingChanged?: () => void;
        readonly animatedCollapsing?: boolean;
        readonly isOpen?: boolean;
    }
    export interface StyleProps {
        inline?: object;
        className?: string;
    }
    export function HeaderPanel({ title, actions, rootStyle, headerStyle, bodyStyle, titleStyle, isCollapsible, children, onCollapsingChanged, animatedCollapsing, isOpen, }: IHeaderPanelProps): JSX.Element;
    /**
     * Transform timespan to display format.
     * @returns Result string contains 2 units if first one less 5 and otherwise show 1 unit. (E.g. 1 day, 4 hours)
     * @param timeSpan
     *
     * TODO alex:
     * 1. consider move to "TimeSpanUtils.ts"
     * 2. consider using moment.humanize somehow
     */
    export function humanize(duration: string): string;
    export interface IApprovalLevelProps extends React.HTMLProps<HTMLLIElement> {
        canMoveUp: boolean;
        canMoveDown: boolean;
        canDelete: boolean;
        level: ApprovalLevelDto;
        levelNumber: number;
        allowRules?: boolean;
        allowExpiration?: boolean;
        onLevelDown: (levelNumber: number, level: ApprovalLevelDto) => void;
        onLevelUp: (levelNumber: number, level: ApprovalLevelDto) => void;
        onDelete: (levelNumber: number, level: ApprovalLevelDto) => void;
        onAssigneesChanged: (assignees: AssigneeDto[], levelNumber: number, level: ApprovalLevelDto) => void;
        onEditExpiration: (levelNumber: number, level: ApprovalLevelDto) => void;
        onEditRule: (levelNumber: number, level: ApprovalLevelDto) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ApprovalLevel({ level, canMoveDown, canMoveUp, allowRules, allowExpiration, levelNumber, canDelete, className, onLevelUp, onLevelDown, onDelete, onAssigneesChanged, onEditExpiration: onEditTimeToApprove, onEditRule, ...htmlOptions }: IApprovalLevelProps): JSX.Element;
    export interface IApprovalChainProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
        levels: ApprovalLevelDto[];
        /**
         * Determines whether show "Edit Rule Section"
         */
        allowRules: boolean;
        /**
         * Determines whether show "Expiration section" which will allow to edit "time to approve"
         */
        allowExpiration: boolean;
        onChange: (levels: ApprovalLevelDto[]) => void;
        /**
         * Will be called when clicking on "Edit Expiration".
         * Should contain edit expiration implementation and return new value.
         */
        onEditExpiration: (levelNumber: number, level: ApprovalLevelDto) => Promise<string | null>;
        /**
         * Will be called when clicking on "Edit Rule".
         * Should contain edit rule implementation and return new value.
         *
         * @returns if there is no rule, returns created rule id. If rule already exists, returns existing rule id.
         */
        onEditRule: (levelNumber: number, level: ApprovalLevelDto) => Promise<string>;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ApprovalChain({ levels: _levels, allowExpiration, allowRules, className, onChange, onEditExpiration, onEditRule, ...htmlOptions }: IApprovalChainProps): JSX.Element;
    interface IApprovalChainEditorProps extends IEditorProps {
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ApprovalChainEditor({ child, path }: IApprovalChainEditorProps): JSX.Element;
    interface INumericArrayEditorProps extends IEditorProps {
    }
    /**
     * Similar to a String Array Editor, but because of the numeric value handling, it needs to be
     * have handlers chained together differently, and thus needs to be a separate component.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NumericArrayEditor({ child, id, hideInputLabel, path }: INumericArrayEditorProps): JSX.Element;
    interface ICharArrayEditorProps extends IEditorProps {
    }
    /**
     * Char Array editor. Splits the string value into individual characters
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CharArrayEditor({ hideInputLabel, child, path, id }: ICharArrayEditorProps): JSX.Element;
    interface IPasswordEditorProps extends IEditorProps {
    }
    /**
     * Text field editor, with type set to password.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PasswordEditor(props: IPasswordEditorProps): JSX.Element;
    interface IRadioListEditorProps extends IEditorProps {
    }
    /**
     * Simple Radio List
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RadioListEditor({ child, id, path, onChange }: IRadioListEditorProps): JSX.Element;
    interface ICheckListEditorProps extends IEditorProps {
    }
    /**
     * Simple Check List Editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CheckListEditor({ child, path, onChange }: ICheckListEditorProps): JSX.Element;
    export interface IRangeSliderProps {
        className?: string;
        id: string;
        min: number;
        max: number;
        value?: number;
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
        tabIndex?: number;
        step?: number;
        style?: React.CSSProperties;
    }
    /**
     * A basic, HTML 5 range input, with our styling.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RangeSlider({ className, id, max, min, onChange, step, tabIndex, value, style }: IRangeSliderProps): JSX.Element;
    interface ITimeSpanEditorRowProps {
        label: string;
        id: keyof TimeSpanEditorState;
        className?: string;
        min: number;
        max: number;
        value: number;
        onChange: (change: TimeSpanChangeAction) => void;
    }
    /**
     * Row component for a TimeSpanEditor
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TimeSpanEditorRow(props: ITimeSpanEditorRowProps): JSX.Element;
    interface ITimeSpanEditorProps extends IEditorProps {
    }
    /**
     * Time Span Editor, with four range sliders for different time segments
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TimeSpanEditor({ child, path, onChange }: ITimeSpanEditorProps): JSX.Element;
    export interface TimeSpanEditorState extends TimeSpanValue {
        changes?: number;
    }
    export interface TimeSpanChangeAction {
        field: keyof TimeSpanEditorState;
        value: string;
    }
    interface INullableCheckboxEditorProps extends IEditorProps {
    }
    /**
     * A checkbox editor that reports a "null" value for an indeterminate state.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NullableCheckboxEditor(props: INullableCheckboxEditorProps): JSX.Element;
    export type NumberFormatOption = 'Fixed' | 'Number' | 'Percent' | 'Currency';
    export function getCodeForSpecifier(term: string): string;
    export function getNumberFormatOptions(): NumberFormatOption[];
    export function getValueForFormatParts(format: string, places: string, append: string): string;
    export function getNumberFormatSpecifier(code: string): "" | "Fixed" | "Number" | "Percent" | "Currency";
    export function getPartsFromValue(value: string): {
        format: string;
        places: string;
        append: string;
    };
    export function getDecimalPlaceOptions(): string[];
    interface ID3FormatStringGetterOptions {
        formatString?: string;
        /** override the type in some cases  */
        typeOverride?: string;
        /** true to use fixed for formats that otherwise wouldn't, e.g. number or currency */
        useLong?: boolean;
        /** zero/ignored by default */
        minPrecision?: number;
    }
    /**
     * Get a D3.js format string from a decisions format string.
     *
     * https://github.com/d3/d3-format
     * https://observablehq.com/@d3/d3-format
     *
     *
     * this may have some charts oriented assumptions.
     * @param formatString decisions number format string.
     * @param typeOverride d3 type to use if override is desired
     */
    export function getD3FormatString({ formatString, typeOverride, useLong, minPrecision, }: ID3FormatStringGetterOptions): string;
    export function getD3Locale(): FormatLocaleDefinition;
    interface INumberFormatEditorProps extends IEditorProps {
    }
    /**
     * Number format editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NumberFormatEditor({ child, id, onChange, path }: INumberFormatEditorProps): JSX.Element;
    interface IMultipleEntityPickerEditorProps extends IEditorProps {
    }
    /**
     * A Multiple Entity Picker editor, which launches a picker dialog for pick Entity.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function MultipleEntityPickerEditor({ child, path, onChange }: IMultipleEntityPickerEditorProps): JSX.Element;
    interface IGroupsPickerEditorProps extends IEditorProps {
    }
    /**
     * A Groups Picker editor, which launches a picker dialog for groups.
     *
     * It curates a list of groups by name.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function GroupsPickerEditor({ child, path, onChange }: IGroupsPickerEditorProps): JSX.Element;
    interface IAccountsPickerEditorProps extends IEditorProps {
    }
    /**
     * A Account Picker editor, which launches a picker dialog for accounts.
     *
     * It curates a list of accounts by name.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function AccountsPickerEditor({ child, path, onChange }: IAccountsPickerEditorProps): JSX.Element;
    export function getShortcutFromKeyCode(e: React.KeyboardEvent): string;
    export const keyCodeForShortcutEditor: {
        8: string;
        13: string;
        19: string;
        20: string;
        27: string;
        32: string;
        33: string;
        34: string;
        35: string;
        36: string;
        37: string;
        38: string;
        39: string;
        40: string;
        45: string;
        46: string;
        112: string;
        113: string;
        114: string;
        115: string;
        116: string;
        117: string;
        118: string;
        119: string;
        120: string;
        121: string;
        122: string;
        123: string;
        96: string;
        97: string;
        98: string;
        99: string;
        100: string;
        101: string;
        102: string;
        103: string;
        104: string;
        105: string;
        106: string;
        107: string;
        109: string;
        110: string;
        111: string;
        65: string;
        66: string;
        67: string;
        68: string;
        69: string;
        70: string;
        71: string;
        72: string;
        73: string;
        74: string;
        75: string;
        76: string;
        77: string;
        78: string;
        79: string;
        80: string;
        81: string;
        82: string;
        83: string;
        84: string;
        85: string;
        86: string;
        87: string;
        88: string;
        89: string;
        90: string;
        48: string;
        49: string;
        50: string;
        51: string;
        52: string;
        53: string;
        54: string;
        55: string;
        56: string;
        57: string;
    };
    export function getShortcutString(value: ShortcutInfo): string;
    interface IShortcutEditorProps extends IEditorProps {
    }
    /**
     * Create a keyboard shortcut.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ShortcutEditor({ child, path, hideInputLabel, onChange }: IShortcutEditorProps): JSX.Element;
    interface IFolderPickerEditorProps extends IEditorProps {
    }
    export function FolderPickerEditor(props: IFolderPickerEditorProps): JSX.Element;
    export interface ITableTemplateEditorProps extends IEditorProps {
    }
    export function TableTemplateEditor({ child, path, id }: ITableTemplateEditorProps): JSX.Element;
    export interface IUpdateRuleDataTriggerEditorProps extends IEditorProps {
    }
    /**
     * An editor that appears as a button for updating flow inputs.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function UpdateRuleDataTriggerEditor({ child, path, id, onChange }: IUpdateRuleDataTriggerEditorProps): JSX.Element;
    export interface useInputProps {
        type: string;
        placeholder?: string;
        value?: string;
        classNames?: string;
    }
    export function useInput({ type, placeholder, value, classNames }: useInputProps): [string, JSX.Element];
    export interface ICalloutProps {
        popupOpen: boolean;
        closePopup: () => void;
        linkRef: React.RefObject<HTMLElement>;
        onSubmit: (result: string) => void;
    }
    export function Callout({ popupOpen, closePopup, linkRef, onSubmit }: ICalloutProps): JSX.Element;
    export interface ISearchProps {
        displayText: string;
        path: string[];
        child: IPropertyChild;
    }
    export function Search({ displayText, path, child, ...htmlOptions }: ISearchProps): JSX.Element;
    interface IDataDescriptionPathEditorProps extends IEditorProps {
    }
    /**
     * Select DataDescriptionPathEditor Editor.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function DataDescriptionPathEditor({ child, path, onChange, hideInputLabel, showDialogOnRender, }: IDataDescriptionPathEditorProps): JSX.Element;
    interface IGridPopupEditorProps extends IEditorProps {
        children?: React.ReactNode;
    }
    export interface GridPopupEditorOptions extends PopupEditorOptions {
        selectionOption: ObjectSelectionOptions;
        typeName: string;
    }
    /**
     * Default Grid Popup Editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function GridPopupEditor(props: IGridPopupEditorProps): JSX.Element;
    interface IActiveDirectoryPickerEditorProps extends IEditorProps {
    }
    export function ActiveDirectoryPickerEditor({ child, id, path }: IActiveDirectoryPickerEditorProps): JSX.Element;
    export function getImageForEntity(entityId: string, entityType: string): string;
    export function loadDesignerThumbnailImage(entityId: string, ticks: number): string;
    export function getElementTypeIcon(elementType: ElementType, width: number, height: number, color: string): string;
    export function getImageInfoUrl(info: ImageInfo, width?: number, height?: number, color?: string | undefined): string | null | undefined;
    export function getImageUrlFromBytes(imageData: number[]): string | undefined;
    export function encodeByteArrayToBase64String(data: number[]): string;
    interface IImageInfoEditorProps extends IEditorProps {
    }
    export function ImageInfoEditor(props: IImageInfoEditorProps): JSX.Element;
    /**
     * A Chart Source Picker editor, which launches a picker dialog for groups.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartSourcePickerEditor({ child, path, onChange }: IEditorProps): JSX.Element;
    interface IChartPartPickerEditorProps extends IEditorProps {
        className?: string;
    }
    /**
     * Chart Part Picker. A combobox which gets its options from chart-part-specific
     * EditorConfigValues, where the name is a Chart name and the value is a GUID
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartPartPickerEditor({ child, className, path, onChange }: IChartPartPickerEditorProps): JSX.Element;
    /**
     * Form Data Picker Editor.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function FormDataPickerEditor({ child, path, onChange }: IEditorProps): JSX.Element;
    export interface IReportsChildCountProps {
        /**
         * **This only for embedded editing contexts.**
         *
         * For reporting to a parent context, e.g. category, the number of children nested
         * within an otherwise hidden category node. This is necessary for editing contexts
         * that don't know about each other, since we aren't counting DOM nodes in React;
         * (data remains "source of truth" for DOM, not the other way around.)
         */
        reportChildCount?: (count: number) => void;
    }
    /**
     * This currently only for embedded editing contexts.
     *
     * However, this *could be expanded* if we wanted to report things like validation up
     * to the category level.
     */
    export interface IEditorCategoryContext extends IReportsChildCountProps {
        /**
         * Set to `true` to keep the category from _un-mounting_ its direct children when it is collapsed.
         * Primary use-case is to preserve embedded editing context in memory, but it could also be used
         * to preserve other editors that are a bit expensive to re-render (rich text comes to mind).
         *
         * This will not also cause the children to render if the category has never been opened.
         */
        setPreserveChildren: (preserve: boolean) => void;
    }
    export const EditorCategoryContext: React.Context<IEditorCategoryContext>;
    export interface ISkeletonLoaderProps {
        height: number;
        title?: string;
        style?: React.CSSProperties;
    }
    /**
     * Basic Skeleton Loader
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SkeletonLoader({ height, title, style }: ISkeletonLoaderProps): JSX.Element;
    interface IPropertyGridEmbeddedEditorProps extends IEditorProps {
    }
    /**
     * An "editor" that is a Property Grid... so meta
     *
     * TODO At some point we should revisit the utility of this pattern... why is this more useful than embedding
     * these nodes in the original context snapshot the way we do with "UsePopupEditor" categories?
     * It certainly adds a lot of complexity to support this. Seems this is only ever used in Reports.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PropertyGridEmbeddedEditor({ child, path }: IPropertyGridEmbeddedEditorProps): JSX.Element;
    export { PropertyGridEmbeddedEditor } from "components/Editors/PropertyGridEmbeddedEditor/PropertyGridEmbeddedEditor";
    /**
     * Defined Type Editor.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function EditorDefinedType({ child, path, onChange, hideInputLabel }: IEditorProps): JSX.Element;
    export interface IDigitsEditorProps extends Omit<IEditorProps, 'onChange'> {
    }
    /**
     * A Digits Editor
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DigitsEditor(props: IDigitsEditorProps): JSX.Element;
    interface IThicknessEditorProps extends IEditorProps {
    }
    /**
     * A popup editor with specific logic for rendering thickness summary.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ThicknessEditor(props: IThicknessEditorProps): JSX.Element;
    interface IGroupedListEditorProps extends IEditorProps {
    }
    export function GroupedListEditor({ child, path, onChange }: IGroupedListEditorProps): JSX.Element | null;
    interface IGroupedListEditorProps extends IEditorProps {
    }
    export function TagFilterEditor({ child, path, onChange }: IGroupedListEditorProps): JSX.Element;
    export const CALENDAR_MIN_WIDTH = 300;
    export interface DateRange {
        startDate: moment.Moment;
        endDate: moment.Moment;
    }
    interface ICalendarRangeProps {
        wrapperClass?: string;
        headerClass?: string;
        selectRange: boolean;
        hideClear?: boolean;
        startDate?: moment.Moment;
        endDate?: moment.Moment;
        onRangeChange: (startDate?: moment.Moment, endDate?: moment.Moment) => void;
    }
    /**
     * Basic Calendar Component.
     *
     * This is currently based around moment.js.
     *
     * This does not manage it's own selected state,
     * it simply renders what's passed in and emits changes. In that sense it
     * is a "controlled component."
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CalendarRange({ wrapperClass, headerClass, startDate, endDate, selectRange, hideClear, onRangeChange, }: ICalendarRangeProps): JSX.Element;
    interface ICalendarProps {
        wrapperClass?: string;
        currentDate?: moment.Moment;
        hideClear?: boolean;
        onChange: (date?: moment.Moment) => void;
    }
    export function Calendar({ wrapperClass, currentDate, onChange, hideClear }: ICalendarProps): JSX.Element;
    interface ICalendarEditorProps extends IEditorProps {
    }
    /**
     * CalendarEditor
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CalendarEditor({ child, path, hideInputLabel }: ICalendarEditorProps): JSX.Element;
    export interface ITimeSliderValue {
        hours: number;
        minutes: number;
    }
    interface ITimeSlidersProps {
        hours: number;
        minutes: number;
        onChange: (config: ITimeSliderValue) => void;
        children?: React.ReactNode;
    }
    /**
     * Sliders for Hours/Minutes
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TimeSliders({ hours, minutes, onChange, children }: ITimeSlidersProps): JSX.Element;
    export interface IRippleProps {
        isIconButton?: boolean;
        className?: string;
    }
    export const Ripple: FC<IRippleProps>;
    interface IDateTimePickerProps {
        /** Either a valid string, or else a moment object must be provided */
        currentDate?: string | moment.Moment;
        /** True if it's a a picker for both date and time */
        isDateTimePicker?: boolean;
        onChange: (date?: moment.Moment) => void;
        onSuggestionChange?: (dateText: string, suggestion?: ValidateDateResult) => void;
        /** Pass clear handling to handle clear, but also to show X */
        onClear?: () => void;
        validation?: ValidationSummary;
        autoFocus?: boolean;
        tabIndex?: number;
        className?: string;
        keepInvalidSuggestion?: boolean;
        customDateFormat?: string;
        pickerClassname?: string;
        /**
         * true if the field can be cleared and save a null value
         */
        nullable?: boolean;
        onExit?: (event: React.FocusEvent<HTMLInputElement>) => void;
        onEnter?: (event: React.FocusEvent<HTMLInputElement>) => void;
        textBoxRef?: MutableRefObject<HTMLInputElement | null>;
        holderRef?: MutableRefObject<HTMLDivElement | null>;
        inputClassName?: string;
        iconButtonClass?: string;
        iconClass?: string;
        hideIcon?: boolean;
        hideSuggestion?: boolean;
        useRippleEffect?: boolean;
    }
    /**
     * Date and (optionally) Time picker component. Behaves like a drop down,
     * but shows a calendar instead.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DateTimePicker({ currentDate, isDateTimePicker, onChange, onClear, validation, autoFocus, onSuggestionChange, tabIndex: propsTabIndex, className, keepInvalidSuggestion, customDateFormat, nullable, pickerClassname, onExit, onEnter, holderRef, textBoxRef, inputClassName, iconButtonClass, iconClass, hideIcon, useRippleEffect, }: IDateTimePickerProps): JSX.Element;
    export enum ChromeSetting {
        Off = 0,
        Small = 1,
        TopBarOnly = 2,
        TopBarFolderTreeCollapsed = 3,
        NoTopBarHasFolderTree = 4,
        NoTopBarFolderTreeCollapsed = 5
    }
    export type LeftPanelState = "collapsed" | "expanded" | "hidden";
    export type HeaderState = "small" | "full" | "hidden";
    export function isBurgerActionsBarVisible(chrome?: ChromeSetting): boolean;
    export function getLeftPanelState(chrome?: ChromeSetting): LeftPanelState;
    export function isNavigationVisible(chrome?: ChromeSetting): boolean;
    export function getTopBarState(chrome?: ChromeSetting): HeaderState;
    export interface IUserPortalSettingInformation {
        Chrome?: ChromeSetting;
        ImpersonatedUser: string;
        UserDisplayName: string;
        StartupPopUpPage: any;
        Settings: IMvcPortalSetting;
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
        CanSetFavoriteForAllUsers: boolean;
        CurrentUserEmail: string;
        CurrentInstanceName: string;
        InitialFolderId: string;
        UseTimeZoneTranslation: boolean;
    }
    export interface IMvcPortalSetting {
        ShowLogoInHeader: boolean;
        Logo: string;
        SloganText: string;
        ActionLocation: any;
        BrowsePageName: string;
        LockPortalShortcut: any;
        AutoLockReloginAppearance: any;
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
        PortalSideBarDefaultPanel: any;
        CollapsedTreeOnStartStudio: boolean;
        CollapsedTreeOnStartUserPortal: boolean;
        ShowCreateRootFolder: boolean;
        UserBackAccountKey: string;
        RootWorkflowCatalogItems: string;
        DoNotAutoGenerateThemeCss: boolean;
        TimeFormat: any;
        AutoSubmitInterval: number;
        DisableSupportChat: boolean;
        SupportEmailAddress: string;
        ChatServiceURL: string;
    }
    export function setPortalSetup(setup: IUserPortalSettingInformation): void;
    export function getPortalSetup(): IUserPortalSettingInformation;
    interface IDatePickerEditorProps extends IEditorProps {
        isDateTimePicker?: boolean;
    }
    /**
     * Basic Date Picker Component
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DatePickerEditor({ child, path, hideInputLabel, isDateTimePicker }: IDatePickerEditorProps): JSX.Element;
    interface IDateTimePickerEditorProps extends IEditorProps {
    }
    /**
     * Editor for picking both date and time.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DateTimePickerEditor(props: IDateTimePickerEditorProps): JSX.Element;
    interface ITimePickerDropdownProps extends TimePickerFormatOptions {
        /** Either a valid string, or else a moment object must be provided */
        currentDate?: string | moment.Moment;
        /** True if it's a a picker for both date and time */
        onChange: (date: moment.Moment) => void;
        /** Pass clear handling to handle clear, but also to show X */
        onClear?: () => void;
        /** Interval in minutes */
        interval?: number;
        validation?: ValidationSummary;
        className?: string;
        inputClass?: string;
        iconClass?: string;
        iconButtonClass?: string;
        overlayClass?: string;
        fontStyle?: React.CSSProperties;
        inputRef?: React.MutableRefObject<HTMLInputElement | null>;
        onExit?: (event?: React.FocusEvent<{}>) => void;
        useRippleEffect?: boolean;
    }
    /**
     * Time picker dropdown
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TimePickerDropdown(props: ITimePickerDropdownProps): JSX.Element;
    export interface TimePickerFormatOptions {
        format?: string;
        showSeconds?: boolean;
        timeFormat: TimeFormats;
    }
    interface ITimePickerEditorProps extends IEditorProps {
    }
    /**
     * Time Selection Dropdown
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TimePickerEditor({ child, path, hideInputLabel, onChange }: ITimePickerEditorProps): JSX.Element;
    interface IChartSeriaColorPanelProps {
        clearColor: (seriaNumber: number) => void;
        openColorPickerDialog: (e: React.MouseEvent<Element>, seriaNumber: number) => void;
        seria: SubCalcFieldDefinition;
        hideColorOption: boolean;
        seriaNumber: number;
    }
    export function ChartSeriaColorPanel({ seria, clearColor, openColorPickerDialog, seriaNumber, hideColorOption, }: IChartSeriaColorPanelProps): JSX.Element;
    interface IChartSeriaActionPanelProps {
        removeSeria: (seriaNumber: number) => void;
        moveSeriaUp: (seriaNumber: number) => void;
        moveSeriaDown: (seriaNumber: number) => void;
        seriaNumber: number;
        seriesLength: number;
    }
    export function ChartSeriaActionPanel({ removeSeria, moveSeriaUp, moveSeriaDown, seriaNumber, seriesLength, }: IChartSeriaActionPanelProps): JSX.Element;
    interface IChartSeriaProps extends React.HTMLProps<{}> {
        seria: SubCalcFieldDefinition;
        selectableFields: SubCalcFieldDefinition[];
        seriaNumber: number;
        seriesLength: number;
        hideColorOption: boolean;
        comboSelect: (newValue: SubCalcFieldDefinition, seriaNumber: number) => void;
        openColorPickerDialog: (e: React.MouseEvent<Element>, seriaNumber: number) => void;
        clearColor: (seriaNumber: number) => void;
        removeSeria: (seriaNumber: number) => void;
        moveSeriaUp: (seriaNumber: number) => void;
        moveSeriaDown: (seriaNumber: number) => void;
    }
    export function ChartSeria({ seria, selectableFields, seriaNumber, comboSelect, openColorPickerDialog, seriesLength, removeSeria, moveSeriaDown, moveSeriaUp, clearColor, hideColorOption, }: IChartSeriaProps): JSX.Element;
    interface IChartSeriesEditorProps extends IEditorProps {
    }
    /**
     * A Chart Series Picker editor, which launches a picker dialog for groups.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartSeriesEditor({ child, path, onChange }: IChartSeriesEditorProps): JSX.Element;
    interface ITextMergeFieldSelectorEditorProps extends IEditorProps {
    }
    /**
     * Legacy rendering hook with specific HTML for TextMergeFieldSelectorEditor
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TextMergeFieldSelectorEditor(props: ITextMergeFieldSelectorEditorProps): JSX.Element;
    interface ICommonInfo {
        fileId: string;
        fileName: string;
    }
    export interface IFileUploadProgressInfo extends ICommonInfo {
        loaded: number;
        total: number;
    }
    export interface IFileUploadCompleteInfo extends ICommonInfo {
        success: boolean;
    }
    export interface IFileUploadErrorInfo extends ICommonInfo {
        error: string;
    }
    export interface IFileUploaderCallBack {
        onProgress?: (info: IFileUploadProgressInfo) => void;
        onComplete?: (info: IFileUploadCompleteInfo) => void;
        onError?: (info: IFileUploadErrorInfo) => void;
    }
    export interface IFileUploadOptions {
        file: File;
        chunkSize?: number;
        callBacks?: IFileUploaderCallBack;
    }
    export class ChunkUploader {
        private options;
        private uploaded;
        private fileId;
        private userContext;
        private baseUrl;
        private isCanceled;
        private chunkSize;
        private controller;
        constructor(options: IFileUploadOptions);
        startUpload(): Promise<void>;
        cancel(): void;
        private onReaderLoad;
        private run;
        private uploadChunk;
        private getChunkCount;
        private getChunk;
        private onError;
        private onProgress;
        private onComplete;
    }
    export interface IProgressBarProps {
        totalSize: number;
        finished: number;
        hidePercentage?: boolean;
        height?: string | number;
    }
    export const ProgressBar: FC<IProgressBarProps>;
    export function downloadFile(url: string): void;
    export interface IUploadedFileInfo {
        fileId: string;
        fileName: string;
        fileSize: number;
    }
    export interface IUploadCompleteInfo extends IFileUploadCompleteInfo {
        tempFileId: string;
    }
    export interface IFileInfo extends IUploadedFileInfo {
        uploaded: boolean;
        file?: File;
    }
    export interface IFileInfoProps {
        fileInfo: IFileInfo;
        onComplete?: (info: IUploadCompleteInfo) => void;
        onRemove?: (info: IUploadedFileInfo) => void;
        isDisabled?: boolean;
        disabledDownload?: boolean;
        fileNameClassName?: string;
    }
    export const FileInfo: FC<IFileInfoProps>;
    export interface IUploadFileOptions {
        file: File;
        callbacks?: IFileUploaderCallBack;
    }
    export function uploadFile(options: IUploadFileOptions): ChunkUploader | undefined;
    export function fileListToFileArray(files: FileList): File[];
    export function getFileInfo(files: File[], isMultiFileUpload: boolean): IFileInfo[];
    /**Returns an array of valid and invalid files */
    export function filterWithMaxSize(maxSize: number, files: File[]): [File[], File[]];
    /**Returns an array of valid and invalid files */
    export function filterWithAllowedExtensions(files: File[], allowedExtensions?: string[]): [File[], File[]];
    export function kbToBytes(size: number): number;
    export function getFileExtension(fileName: string): string;
    export interface INoFileProps {
        isMultiFileUpload?: boolean;
    }
    export const NoFile: FC<INoFileProps>;
    export interface IChooseFileProps {
        name?: string;
        isMultiFileUpload?: boolean;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        isDisabled?: boolean;
        linkCssClass?: string;
    }
    export const ChooseFile: FC<IChooseFileProps>;
    /**
     * This hook is an analog of life-circle method "componentDidUpdate".
     * Use it if you need to skip first render and run effect on component update only.
     */
    export function useDidUpdateEffect(effect: EffectCallback, deps?: DependencyList): void;
    export interface IFileUploadAreaCommonProps {
        uploadedFileInfo?: IUploadedFileInfo[];
        isMultiFileUpload?: boolean;
        /**Should be in KB's */
        maxFileSize?: number;
        chooseFileActionName?: string;
        allowedExtensions?: string[];
        invalidFileExtensionsMessage?: string;
        isDisabled?: boolean;
        disabledDownload?: boolean;
        /**Flush all the uploaded file and use whatever is there in uploadedFileInfo*/
        reset?: boolean;
        holderClassName?: string;
        labelCssClass?: string;
        linkCssClass?: string;
        fileNameCssClass?: string;
        containerCssClass?: string;
    }
    export interface IFileUploadAreaProps extends IFileUploadAreaCommonProps {
        onRemove?: (file: IUploadedFileInfo) => void;
        onComplete?: (file: IUploadedFileInfo) => void;
        onCompleteAll?: (allfiles: IUploadedFileInfo[]) => void;
        onStart?: (file: IUploadedFileInfo[]) => void;
    }
    export const FileUploadArea: FC<IFileUploadAreaProps>;
    interface IFileContentPickerEditorProps extends IEditorProps {
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function FileContentPickerEditor(props: IFileContentPickerEditorProps): JSX.Element;
    export const PRIMARY_CLASS = "dp-form-data-trigger";
    export const ORDER_BY_OPTION_CONTROL_TYPE = "Control Type";
    export const ORDER_BY_OPTION_NAME = "Name";
    export const ORDER_BY_OPTIONS: string[];
    export interface IFormTriggerDataEditorItemOptions {
        item: FormTriggerSourceData;
        id: string;
        changeHandler: (value: FormTriggerType, componentName: string) => void;
        isSelected: (value: FormTriggerType, componentName: string) => boolean;
    }
    export function FormTriggerDataEditorItem({ item, id, changeHandler, isSelected }: IFormTriggerDataEditorItemOptions): JSX.Element;
    export function getStoredSvgImageInfoUrl(imageId: string): string | undefined;
    interface IPickButtonProps {
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        text: string;
        buttonRef: React.MutableRefObject<HTMLButtonElement | null>;
    }
    export function PickButton({ text, buttonRef, onClick }: IPickButtonProps): JSX.Element;
    export interface IHasOpenState {
        openByDefault?: boolean;
    }
    export function HasOpenState(openByDefault?: boolean): {
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
        setOpen: () => void;
        setClosed: () => void;
        toggleOpen: () => void;
    };
    interface IFormTriggerDataEditorProps extends IEditorProps {
    }
    /**
     * FormTriggerDataEditor
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function FormTriggerDataEditor({ child, path, onChange }: IFormTriggerDataEditorProps): JSX.Element;
    interface IDateTimeArrayEditorProps extends IEditorProps {
    }
    /**
     * Array editor with sort by date.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DateTimeArrayEditor(props: IDateTimeArrayEditorProps): JSX.Element;
    export function RollingDateFilter({ dateRangeFilterData, onSelectionChange }: IDateRangeFilterLayerProps): JSX.Element;
    export enum DateRangeOption {
        Previous = 1,
        Current = 2,
        Future = 3,
        Custom = 4,
        Rolling = 5
    }
    export enum DateSelectionType {
        Week = 1,
        Month = 2,
        Quarter = 3,
        Year = 4
    }
    interface ICustomDateRangeFilterProps extends IDateRangeFilterLayerProps {
    }
    export function CustomDateRangeFilter({ dateRangeFilterData, onSelectionChange: onSelectionChangeHandler, disableRollingRange, }: ICustomDateRangeFilterProps): JSX.Element;
    export interface IDateRangeFilterLayerProps {
        dateRangeFilterData?: ReportDateRange;
        disableRollingRange?: boolean;
        onSelectionChange: (dateRangeFilterData: ReportDateRange) => void;
    }
    export function DateRangeFilterLayer({ dateRangeFilterData: initialDateRangeFilterData, onSelectionChange, disableRollingRange, }: IDateRangeFilterLayerProps): JSX.Element;
    export interface IDateRangeFilterProps {
        wrapperClass?: string;
        buttonClass?: string;
        dateRangeFilterData: ReportDateRange;
        disableRollingRange?: boolean;
        showInLayer: boolean;
        onSelectionChange: (range: ReportDateRange) => void;
    }
    export function DateRangeFilter({ dateRangeFilterData: initialDateRangeFilterData, wrapperClass, buttonClass, showInLayer, disableRollingRange, onSelectionChange: onSelectionChangeHandler, }: IDateRangeFilterProps): JSX.Element;
    export function getDateRangeFilterLabel(dateRangeFilterData?: ReportDateRange): string;
    interface IReportDateRangeEditorProps extends IEditorProps {
    }
    export function ReportDateRangeEditor({ child, id, path, onChange }: IReportDateRangeEditorProps): JSX.Element;
    interface IChartTypePickerEditorProps extends IEditorProps {
    }
    /**
     * Editor presenting icon buttons for available chart types that a chart could be converted to.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartTypePickerEditor({ child, path, onChange }: IChartTypePickerEditorProps): JSX.Element;
    export interface ISimpleSwitchProps {
        /** true for "on", otherwise "off" */
        on: boolean;
        onToggle: (id?: string) => void;
        className?: string;
        id?: string;
    }
    /**
     * A basic checkbox style/sized toggle (with no inner text)
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SimpleSwitch({ className, id, on, onToggle }: ISimpleSwitchProps): JSX.Element;
    interface ColorPickerOptions {
        pickedColor?: DesignerColor | string;
        ShowGradients?: boolean;
    }
    export interface ColorPickerDialogOptions {
        stickTo: HTMLElement;
        title?: string;
        width?: number;
        height?: number;
        onOk?: (designerColor: DesignerColor) => void;
        onClosed?: () => void;
        onClear?: () => void;
    }
    export interface ILegacyColorPickerOptions extends ColorPickerOptions, ColorPickerDialogOptions {
    }
    export const LegacyColorPicker: {
        showLegacyColorPickerDialog: typeof showLegacyColorPickerDialog;
    };
    export function showLegacyColorPickerDialog(options: ILegacyColorPickerOptions): void;
    interface IChartEntryFilterRowProps extends IListItemControlButtonsProps {
        entry: ChartEntryMetadata;
        selected?: boolean;
        onSelection: (index: number, isMulti: boolean) => void;
        onLabelChange: (index: number, label: string) => void;
        onToggleVisible: (index: number) => void;
        onMoveUp: (index: number) => void;
        onMoveDown: (index: number) => void;
        unGroupChild?: (groupKey: string, index: number) => void;
        onAddCancel: () => void;
        multiSelecting?: boolean;
        isFirst: boolean;
        isLast: boolean;
        onColorChange?: (index: number, color: string) => void;
    }
    /**
     * ChartEntryFilter entry row component.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartEntryFilterRow({ entry, index, isFirst, isLast, multiSelecting, onAddCancel, onColorChange, onMoveUp, onMoveDown, onLabelChange, onRemove, onSelection, onToggleVisible, selected, unGroupChild: onUnGroup, }: IChartEntryFilterRowProps): JSX.Element;
    interface IActionLinkGroupTitleProps extends React.HTMLProps<HTMLHeadingElement> {
    }
    /**
     * When action link call-outs have a title
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ActionLinkGroupTitle({ children }: IActionLinkGroupTitleProps): JSX.Element;
    export interface IPersonalizationScopeSelectorProps {
        scope: PersonalizationScope;
        userScope: PersonalizationUserScope;
        onScopeChange: (value: PersonalizationScope) => void;
        onUserScopeChange: (value: PersonalizationUserScope) => void;
        active?: boolean;
        small?: boolean;
        /** true if a setting can't sensibly be applied at a page level */
        partOnly?: boolean;
    }
    /**
     * Choose scope for a personalization value.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PersonalizationScopeSelector({ active, onScopeChange, onUserScopeChange, partOnly, scope, small, userScope, }: IPersonalizationScopeSelectorProps): JSX.Element;
    export interface IChartEntryFilterState {
        selectedRows: number[];
        entries: ChartEntryMetadata[];
        originalEntries?: Map<string, ChartEntryMetadata>;
        multiSelect: boolean;
        multiSelectActions: boolean;
    }
    export const chartEntryFilterReducer: React.Reducer<IChartEntryFilterState, EntryFilterAction>;
    export type EntryFilterActionTypes = 'Add Row' | 'Cancel Add Row' | 'Set Entries' | 'SelectRow' | 'Group' | 'Un Group' | 'ToggleVisibility' | 'Update Label' | 'Update Color' | 'Move Up' | 'Remove' | 'Move Down' | 'Toggle Multi Select' | 'Cancel Multi Select';
    export type EntryFilterAction = {
        type: EntryFilterActionTypes;
        [key: string]: any;
    };
    export function getNew(index: number, grouped?: ChartEntryMetadata[]): ChartEntryMetadata;
    export function getEntriesByKey(entries: ChartEntryMetadata[]): Map<any, any>;
    interface IChartEntryFilterProps {
        title: string;
        entries: ChartEntryMetadata[];
        /** Derived from data, not edited by the user */
        originals: ChartEntryMetadata[];
        onUpdateSet: (entries: ChartEntryMetadata[]) => void;
        className?: string;
        personalization?: IPersonalizationScopeSelectorProps;
        canConfigureColors?: boolean;
    }
    /**
     * A Component for manipulating data on it's way to being displayed on a chart.
     *
     * 1. Label
     * 1. Color
     * 1. Visible
     * 1. Sorting
     *
     * Additionally adding/grouping entries which may or may not yet be present in the data
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartEntryFilter({ canConfigureColors, entries, originals, onUpdateSet, personalization, title, }: IChartEntryFilterProps): JSX.Element;
    export interface IPersonalizationValue {
        PersonalizationScope: PersonalizationScopeDef;
        Area: PersonalizationArea;
        Stored: boolean;
    }
    interface IUseScopeHandlersProps<T extends IPersonalizationValue> {
        value: T;
        path: string[];
        setValue: (value: T) => void;
        onChange: (value: T, path: string[]) => void;
    }
    export function useScopeHandlers<T extends IPersonalizationValue>({ value, setValue, path, onChange, }: IUseScopeHandlersProps<T>): {
        onScopeChange: (Scope: PersonalizationScope) => void;
        onUserScopeChange: (UserScope: PersonalizationUserScope) => void;
        personalization: IPersonalizationScopeSelectorProps;
    };
    interface IChartEntryFilterEditorProps extends IEditorProps {
    }
    /**
     * Editor for filter metadata, which is configuration ahead of data at design time,
     * and is a combination of user-defined and "dynamic" (from data) entries at runtime.
     *
     * Making edits to a dynamic entry causes it to be stored as a user-defined value.
     *
     * Removing a user-defined value causes it to be rendered as a data-driven one if it's present in the data
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartEntryFilterEditor({ child, path, id, onChange }: IChartEntryFilterEditorProps): JSX.Element;
    interface IRangePickerFieldProps {
        show?: boolean;
        value: string;
        label?: string;
        onChange: React.ChangeEventHandler<HTMLInputElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
        tabIndex?: number;
    }
    /**
     * Individual range picker field component.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RangePickerField({ label, onChange, value, onKeyDown, show, tabIndex }: IRangePickerFieldProps): JSX.Element | null;
    export interface IDataFilterFieldCommonProps<T> {
        validation?: ValidationSummary;
        autoFocus?: boolean;
        tabIndex?: number;
        className?: string;
        onFieldChange?: (fieldText: string) => void;
        value: T;
        /** something? */
        onChange: (value: T) => void;
        /**
         * Define to render personalization controls beside the content.
         */
        personalization?: IPersonalizationScopeSelectorProps;
        placeholder?: string;
        id?: string;
        onBlur?: React.FocusEventHandler;
    }
    interface IDataFilterFieldRenderProps {
        /** Just close without triggering other handlers */
        close: () => void;
        /** Trigger any close handlers and close.*/
        onClose: () => void;
        keyHandler: React.KeyboardEventHandler;
    }
    interface IDataFilterFieldProps<T> extends IDataFilterFieldCommonProps<T> {
        fieldText?: string;
        iconClassName?: string;
        activeIconClassName?: string;
        value: T;
        onFieldChange: (fieldText: string) => void;
        children?: (props: IDataFilterFieldRenderProps) => React.ReactNode;
    }
    /**
     * A base component for data filter fields.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataFilterField<T>({ autoFocus, children, className, fieldText, id, onChange, onBlur, onFieldChange, personalization, placeholder, tabIndex, validation, value, }: IDataFilterFieldProps<T>): JSX.Element;
    export interface INumericRangeFieldProps extends IDataFilterFieldCommonProps<NumericRange> {
    }
    /**
     * Input for modifying a Numeric Range input.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NumericRangeField({ onChange, personalization, validation, value }: INumericRangeFieldProps): JSX.Element;
    export const DEFAULT_NUMERIC_MATCH_TYPE_LABELS: Map<NumericRangeType, string>;
    export function getNumericRangeOptions(): IActionLinkItem[];
    export function getNumericFieldOptions(): IActionLinkItem[];
    export function getLabelForNumericMatchType(type: NumericRangeType): string;
    export interface INumericRangeFilterEditorProps extends IEditorProps {
    }
    /**
     * Property Editor wrapper for Numeric Range Field
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NumericRangeFilterEditor({ child, path, onChange, hideInputLabel }: INumericRangeFilterEditorProps): JSX.Element;
    export const DEFAULT_STRING_MATCH_TYPE_LABELS: Map<StringMatchType, string>;
    export function getLabelForStringMatchType(type: StringMatchType): string;
    export function getStringMatchOptions(callback?: () => void): IActionLinkItem[];
    export interface IStringMatchFieldProps extends IDataFilterFieldCommonProps<StringMatch> {
    }
    /**
     * A search string field with personalization controls.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function StringMatchField({ onChange, personalization, id, value, validation }: IStringMatchFieldProps): JSX.Element;
    export function getStringMatchOptions(): IStringComboOption<StringMatchType>[];
    export interface IStringMatchFilterEditorProps extends IEditorProps {
    }
    /**
     * Editor for a string match filter object.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function StringMatchFilterEditor({ child, path, onChange, hideInputLabel }: IStringMatchFilterEditorProps): JSX.Element;
    export interface IPickStringFilterFieldProps extends IDataFilterFieldCommonProps<PickStringFilterValue> {
    }
    /**
     * Drop Down string pick Personalization / Data Filter Field
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function PickStringFilterField({ onChange, personalization, validation, value }: IPickStringFilterFieldProps): JSX.Element;
    export interface IPickStringFilterEditorProps extends IEditorProps {
    }
    /**
     * Property Editor wrapper for ComboFilterField
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PickStringFilterEditor({ child, path, onChange, hideInputLabel }: IPickStringFilterEditorProps): JSX.Element;
    export interface ICountDataFilterFieldProps extends IDataFilterFieldCommonProps<CountFilterValue> {
    }
    /**
     * Numeric filter editor that produces a single value instead of a range definition.
     * e.g. just having a count you want to take of the total results.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function CountDataFilterField({ onChange, personalization, validation, value }: ICountDataFilterFieldProps): JSX.Element;
    export interface ICountDataFilterEditorProps extends IEditorProps {
    }
    /**
     * Editor for a string match filter object.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CountDataFilterEditor({ child, path, onChange, hideInputLabel }: ICountDataFilterEditorProps): JSX.Element;
    export interface IBooleanDataFilterEditorProps extends IEditorProps {
    }
    /**
     * Editor for a boolean (personalization) data-filter editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function BooleanDataFilterEditor({ child, path, onChange, hideInputLabel }: IBooleanDataFilterEditorProps): JSX.Element;
    interface IFilterDateRangeEditorEditorProps extends IEditorProps {
    }
    /**
     * Editor for a filter range (personalization) data-filter editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function FilterDateRangeEditor({ child, path, onChange, hideInputLabel }: IFilterDateRangeEditorEditorProps): JSX.Element;
    export interface IEditorTextFieldProps extends IEditorProps {
        placeholder?: string;
        externalValue?: string;
        children?: React.ReactNode;
        /**
         * CSS Class to be added to outer-most element of field, whether that's a label wrapper or
         * the input itself.
         */
        className?: string;
        inputType?: string;
        /** Helper function to ensure field data conforms to required format */
        formatHelper?: (value: string) => string | null;
        /** Helper function to ensure falsy values are initialized according to field requirements. */
        initialValueHelper?: (value: string | null) => string;
    }
    /**
     * A Text Field with a prefix that will display in front of the editor consuming a property child model.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function TextFieldEditorWithPrefix({ child, children, className, id, inputType, hideInputLabel, path, onChange, placeholder, externalValue, formatHelper, initialValueHelper, }: IEditorTextFieldProps): JSX.Element;
    export interface IColorPaletteState {
        colors: string[];
        selectedIndex: number;
    }
    export const ColorPaletteDefaultState: IColorPaletteState;
    export enum ColorPaletteAction {
        Add = 0,
        Select = 1,
        Update = 2,
        MoveUp = 3,
        MoveDown = 4,
        Remove = 5,
        SetAll = 6
    }
    export function colorPaletteReducer(state: IColorPaletteState | undefined, action: {
        type: ColorPaletteAction;
        value?: any;
    }): IColorPaletteState;
    export function getSelectedColor(state: IColorPaletteState): string;
    export interface IColorSwatchesProps extends React.HTMLProps<{}> {
        colors: string[];
        className?: string;
        selectedIndex: number;
        onSelectColor?: (i: number) => void;
        swatchSize?: SwatchSize;
    }
    /**
     * Color swatches to use, eg a palette display or editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ColorSwatches({ className, colors, selectedIndex, onSelectColor, swatchSize, children, }: IColorSwatchesProps): JSX.Element;
    export interface IColorPaletteControlButtonsProps extends React.HTMLProps<{}> {
        colors: string[];
        selectedIndex: number;
        onAdd?: React.MouseEventHandler;
        onEdit: React.MouseEventHandler;
        onMoveUp: React.MouseEventHandler;
        onMoveDown: React.MouseEventHandler;
        onRemove: React.MouseEventHandler;
    }
    /**
     * Button controls
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ColorPaletteControlButtons({ className, colors, onAdd, onEdit, onMoveDown, onMoveUp, onRemove, selectedIndex, }: IColorPaletteControlButtonsProps): JSX.Element;
    export interface IColorPaletteEditorProps extends IEditorProps {
    }
    /**
     * Edit a whole color pallette. This is for places we need something prettier than
     * an array editor for editing sets of colors.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ColorPaletteEditor({ child, path, id, onChange, hideInputLabel }: IColorPaletteEditorProps): JSX.Element;
    interface RequestCallback<TResult, Params extends any[]> {
        (...parameters: Params): Promise<TResult>;
    }
    interface UseRequestResult<TResult, Params extends any[]> {
        /**
         * Request wrapper
         */
        makeRequest: RequestCallback<TResult | undefined, Params>;
        /**
         * Indicates that request was ran
         */
        isLoading: boolean;
        /**
         * Request result
         */
        response: TResult | undefined;
        /**
         * Error which happened during request
         */
        error: any | null;
    }
    /**
     * Request wrapper function which returns isLoading to determine should you show the data or loading indicator
     */
    export function useRequest<TResult, Params extends any[]>(request: RequestCallback<TResult, Params>): UseRequestResult<TResult, Params>;
    export function useEventSession<T = any>(sessionId: string | null | undefined, listener: (event: T) => void): void;
    export interface IValidationIconProps {
        className?: string;
        validationIssues: ValidationIssue[];
    }
    /**
     * Validation icon indicates that there are validation issues.
     * Displays error icon for "BreakLevel.Fatal" and warning icon for "BreakLevel.Warning".
     * If there are issues for different break level, should be displayed icon for the worst one.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ValidationIcon({ validationIssues, className }: IValidationIconProps): JSX.Element | null;
    export interface IDesignerHeaderProps extends React.HTMLProps<HTMLHeadElement> {
        title: string;
        isLoading?: boolean;
        loadingText?: string;
        breadcrumbs?: string[];
        onClose: () => void;
        children?: React.ReactNode;
    }
    /**
     * Header which is show in all designers
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DesignerHeader({ title, className, breadcrumbs, loadingText, onClose, children, isLoading, ...otherProps }: IDesignerHeaderProps): JSX.Element;
    export const DesignerBody: React.ForwardRefExoticComponent<Pick<React.HTMLProps<HTMLDivElement>, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLDivElement>>;
    interface IDesignerSubActionsProps {
        subActions: IDesignerSubAction[];
        close: () => void;
    }
    export interface IDesignerSubAction {
        name: string;
        title?: string;
        action: () => void;
    }
    export function DesignerSubActions({ subActions, close }: IDesignerSubActionsProps): JSX.Element;
    export interface IDesignerActionsSeparatorProps extends React.HTMLProps<HTMLDivElement> {
    }
    export function DesignerActionsSeparator({ className, ...otherProps }: IDesignerActionsSeparatorProps): JSX.Element;
    export interface IDesignerActionProps extends IDesignerAction {
    }
    export interface IDesignerAction {
        /**
         * Action name
         */
        name: string;
        /**
         * Action title will be shown on hover
         */
        title?: string;
        /**
         * Executes when click on action.
         * If action is not provided, sub actions will be shown on action click.
         */
        action?: ((event?: MouseEvent<HTMLButtonElement>) => void | Promise<any>) | (() => void | Promise<any>);
        id?: string;
        subActions?: IDesignerSubAction[] | (() => Promise<IDesignerSubAction[] | undefined>);
        disabled?: boolean;
        separator?: separatorType;
    }
    export enum separatorType {
        left = 0,
        right = 1,
        both = 2
    }
    export function DesignerAction({ name, action, separator, subActions: _subActions, title, disabled: _disabled, }: IDesignerActionProps): JSX.Element;
    export type ItemsOrientation = "horizontal" | "vertical";
    export interface ResizeOptions {
        availableSpace: number;
        items: ResizableItem[];
    }
    export interface ResizableItem {
        index: number;
        size: number;
        priority: number;
    }
    export interface ResizeResult {
        restSpace: number;
        itemsSpace: number;
        visibleItems: ResizableItem[];
    }
    /**
     * Implementation of Priority+ pattern.
     * Idea: At first to hide elements with less priority
     * https://css-tricks.com/the-priority-navigation-pattern/
     * @param items data associated with rendered elements @see getChildren
     * @param getAvailableSpace available space for items, width if orientation is "horizontal", height if orientation is "vertical"
     * @param getChildren rendered items
     * @param getPriority allows provide priority for each item
     *
     * @description
     * Method consist of 4 stages:
     * 1. Reset calculated space for items (need if it is updating and not rendered for the first time)
     * 2. Render all items to calculate their sizes
     * 3. Calculate items sizes
     * 4. Render only visible items
     */
    export function usePriorityResize<T>(items: T[], getAvailableSpace: (isResized: boolean) => number, getChildren: () => HTMLElement[], getPriority: (item: Readonly<{
        index: number;
        element: HTMLElement;
    }>) => number, orientation?: ItemsOrientation): [T[], () => void];
    export function getResizableItems(options: {
        elements: HTMLElement[];
        prioritize?: (item: Readonly<{
            index: number;
            element: HTMLElement;
        }>) => number;
        orientation: ItemsOrientation;
    }): ResizableItem[];
    export function priorityResize({ availableSpace, items }: Readonly<ResizeOptions>): ResizeResult;
    /**
     * while the request is running, we do the actions element disabled
     */
    export function useDisableAction(): {
        disabledIds: (string | number)[];
        handleClick: (event: any, action: any, id?: string | number) => void;
    };
    export interface IDesignerActionsProps extends Omit<React.ComponentProps<'ul'>, 'children'> {
        actions: IDesignerAction[];
        /**
         * "white" theme is used for flyout menu.
         * "orange" theme is used for header actions.
         */
        theme: 'white' | 'orange';
        /**
         * get all free space in line
         */
        isGrowing?: boolean;
        /**
         * By default if there is no enough space "More" button will be added which will contain actions which cannot be displayed.
         * This property can be used to turn off this behavior.
         *
         * @default true
         */
        autoCollapse?: boolean;
    }
    /**
     * Displays actions in designer header
     */
    export function DesignerActions({ theme, actions, isGrowing, autoCollapse, ...otherProps }: IDesignerActionsProps): JSX.Element;
    export class DesignerSurface extends React.Component<React.ComponentProps<'div'>, {
        hasError: boolean;
    }> {
        state: {
            hasError: boolean;
        };
        static getDerivedStateFromError(error: React.ErrorInfo): {
            hasError: boolean;
        };
        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
        render(): JSX.Element;
    }
    export interface IRect {
        width: number;
        height: number;
        left: number;
        top: number;
    }
    export interface IPoint {
        x: number;
        y: number;
    }
    export function isRectBetweenPoints(rect: IRect, startPoint: IPoint, endPoint: IPoint): boolean;
    /**
     * Returns boundary rectangle
     */
    export function getBoundRect(rects: IRect[] | null): IRect | null;
    export function convertToRelativeCoordinates(point: React.MouseEvent | IPoint, referenceElement: HTMLElement): IPoint;
    export function isPointsEqual(point1: IPoint, point2: IPoint): boolean;
    /**
     * Calculates new position for every item where items have the same indent between each other
     *
     * @param items items which have size and position for distribution
     * @param getItemPosition item position, usually 'x', 'y', 'left' or 'top'
     * @param getItemSize item size, usually 'width' or 'height'
     */
    export function distribute<T>(items: T[], getItemPosition: (item: T) => number, getItemSize: (item: T) => number): Array<{
        item: T;
        newPosition: number;
    }>;
    export function getCenter(rect: IRect): IPoint;
    export interface ILassoAdornerProps extends React.HTMLProps<HTMLDivElement> {
        startPoint: IPoint;
        endPoint: IPoint;
        /**
         * @default 0
         */
        zIndex?: number;
    }
    /**
     * Draws a selection area and uses for multi-selection.
     * Supposed to be used with "useDragAndDrop" hook.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const LassoAdorner: React.MemoExoticComponent<({ startPoint, endPoint, className, zIndex, ...otherProps }: ILassoAdornerProps) => JSX.Element>;
    export interface ISelectionAdornerProps extends IRect {
        className?: string;
        /**
         * @default 0
         */
        zIndex?: number;
        /**
         * Indent between an element and the adorner
         *
         * @default 0
         */
        margin?: number;
    }
    /**
     * Indicates that element or group of elements are selected.
     * Can be used to create custom resize adorner.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SelectionAdorner({ className, children, margin, left, top, width, height, zIndex, }: React.PropsWithChildren<ISelectionAdornerProps>): JSX.Element;
    export interface IResizeHandlerProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onMouseDown'> {
        onMouseDown: (e: React.MouseEvent<HTMLElement> & {
            resizeDirection: ResizeDirection;
        }) => void;
        resizeDirection: ResizeDirection;
    }
    export function ResizeHandler({ onMouseDown, resizeDirection, onMouseUp, ...otherProps }: IResizeHandlerProps): JSX.Element;
    export interface IResizeAdornerProps extends ISelectionAdornerProps {
        resizeDirections?: ResizeDirection[];
        handlerMouseDown: IResizeHandlerProps['onMouseDown'];
        handlerMouseUp?: (e: React.MouseEvent<HTMLElement>) => void;
    }
    /**
     * Component frame during resize operation.
     * It is supposed to be used together with "useResize" hook.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ResizeAdorner({ resizeDirections, className, handlerMouseDown, handlerMouseUp, ...otherProps }: IResizeAdornerProps): JSX.Element;
    interface IMultiSelectionAdornerProps {
        margin?: number;
        innerRecs: IRect[];
        showMutualRect: boolean;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function MultiSelectionAdorner({ innerRecs, margin, showMutualRect }: IMultiSelectionAdornerProps): JSX.Element | null;
    export interface IDndAdornerProps extends React.HTMLProps<HTMLDivElement> {
        zIndex?: number;
        left: number;
        top: number;
        width: number;
        height: number;
    }
    /**
     * Component frame during dnd operation.
     * It is supposed to be used together with "useDragAndDrop" hook.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const DndAdorner: React.NamedExoticComponent<IDndAdornerProps>;
    export interface IFlyOutMenuProps extends React.ComponentPropsWithoutRef<'div'> {
        actions: IDesignerAction[];
    }
    /**
     * Menu is on the top of designer surface.
     * It is supposed to be used for steps/elements editing of surface.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function FlyOutMenu({ actions, className, ...otherProps }: IFlyOutMenuProps): JSX.Element;
    export interface IInputLayerProps extends React.PropsWithChildren<React.HTMLProps<HTMLDivElement>> {
        onClickOutside?: () => void;
    }
    export const InputLayer: ({ children, className, onClickOutside, ...otherProps }: IInputLayerProps) => JSX.Element;
    export interface IInputDataPromptProps {
        message?: string;
        hasInputData?: boolean;
        patternName?: string;
        hasDesignPattern?: boolean;
        onEditInputData?: () => void;
        onEditDesignPattern?: () => void;
    }
    export function InputDataPrompt({ message, hasInputData, patternName, hasDesignPattern, onEditInputData, onEditDesignPattern, }: IInputDataPromptProps): JSX.Element;
    export interface IIntegrationSettingsLayer {
        onClose: () => void;
        sourceRef: React.MutableRefObject<HTMLElement | any>;
        placement?: Placement;
        getEditingContextId?: () => Promise<string>;
    }
    export const IntegrationSettingsLayer: FC<IIntegrationSettingsLayer>;
    export interface IIntegrationPromptProps {
        onClose?: () => void;
        integrationType: IntegrationType;
        showViewButtonWithoutConfigureIntegration: boolean;
        onViewClick: () => void;
        getEditingContextId?: () => Promise<string>;
    }
    export function IntegrationPrompt({ onClose, integrationType, showViewButtonWithoutConfigureIntegration, getEditingContextId, onViewClick, }: IIntegrationPromptProps): JSX.Element;
    export interface IDesignerPromptProps {
        inputDataProps?: IInputDataPromptProps;
        integrationProps?: IIntegrationPromptProps;
    }
    export function DesignerPrompt({ inputDataProps, integrationProps }: IDesignerPromptProps): JSX.Element;
    export interface IDesignerRangeSliderProps extends Omit<IRangeSliderProps, 'onChange'> {
        onValueChanged?: (value: number) => void;
        showZoomButtons?: boolean;
    }
    export function DesignerRangeSlider(props: IDesignerRangeSliderProps): JSX.Element;
    export interface ITabsProps {
        className?: string;
        onTabSelected: (value: string) => void;
        tabs: ITab[];
        currentValue?: string | null;
        renderTab?: (tab: ITab, isCurrent: boolean) => React.ReactNode | null;
    }
    export interface ITab {
        value: string;
        label?: string;
        className?: string;
        disabled?: boolean;
    }
    export function Tabs({ className, tabs, onTabSelected, currentValue, renderTab }: ITabsProps): JSX.Element;
    export interface IPanelTooglerProps {
        tabs: ITab[];
        selectedTab?: string | null;
        onTabSelected: (tab: string | null) => void;
        align: Align;
    }
    export enum Align {
        left = 0,
        right = 1
    }
    export function PanelToggler({ tabs, selectedTab, onTabSelected, align }: IPanelTooglerProps): JSX.Element;
    export function isLeftButtonPressed(e: React.MouseEvent<HTMLElement> | MouseEvent): boolean;
    export function isRightButtonPressed(e: React.MouseEvent<HTMLElement> | MouseEvent): boolean;
    export interface IDragAndDropState {
        /**
         * Indicates whether dnd is active.
         * To active dnd need to call "start" method.
         * To stop dnd need to call "stop" method.
         */
        isActive: boolean;
        /**
         * Initial cursor position in window coordinate system.
         */
        initialCursorPoint: IPoint;
        /**
         * Current cursor position in window coordinate system.
         */
        currentCursorPoint: IPoint;
        /**
         * Initial point of your coordinate system which will be editing when calling "move" method.
         * It can be different from "initialCursorPoint" if "initialPoint" is provide in [IDndStartEvent].
         * initialCursorPoint - point of window coordinate system.
         * initialPoint - point of your coordinate system.
         */
        initialPoint: IPoint;
        /**
         * Current point of your coordinate system which has been editing by calling "move" method
         */
        currentPoint: IPoint;
    }
    export interface IBounds {
        top?: number;
        left?: number;
        bottom?: number;
        right?: number;
    }
    export interface IDragAndDropProps {
        /**
         * Determines whether need to log resize events like 'start', 'move', 'stop'
         * @default false
         */
        logEvents?: boolean;
        bounds?: IBounds;
        onDragStart?: (result: IDragAndDropResult) => void;
        onDragging?: (result: IDragAndDropResult) => void;
        onDragEnd?: (result: IDragAndDropResult) => void;
    }
    export interface IDndEvent {
        cursor: IPoint;
    }
    export interface IDndStartEvent extends IDndEvent {
        /**
         * Point of your coordinate system which will be editing when calling "move" method.
         * TODO alex: need to provide "converter" method to "useDragAndDrop" instead of providing "initialPoint"
         *
         * @default cursor
         */
        initialPoint?: IPoint;
    }
    export interface IDragAndDropResult {
        isActive: boolean;
        startPoint: IPoint;
        endPoint: IPoint;
        start: (event: IDndStartEvent) => void;
        stop: (event: IDndEvent) => void;
        move: (event: IDndEvent) => void;
    }
    /**
     * Creates dnd even from any mouse event.
     * It will prevent copy/pasting this logic.
     */
    export function createDndEvent<T extends IDndEvent>(e: React.MouseEvent<HTMLElement> | MouseEvent, otherProps?: Omit<T, 'cursor'>): T;
    export type IDragAndDropAction = {
        type: 'move' | 'stop';
        cursorPosition: IPoint;
        bounds?: IBounds;
    } | {
        type: 'start';
        cursorPosition: IPoint;
        startPoint: IPoint;
    };
    export function dragAndDropReducer(state: IDragAndDropState, action: IDragAndDropAction): IDragAndDropState;
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function useDragAndDrop(props?: IDragAndDropProps): IDragAndDropResult;
    export type SplitterOrientation = 'vertical' | 'horizontal';
    export interface ISplitterDelta {
        deltaX: number;
        deltaY: number;
    }
    export interface ISplitterProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onDragStart' | 'onDragEnd'> {
        orientation: SplitterOrientation;
        onDragStart?: (position: ISplitterDelta) => void;
        onDragging?: (position: ISplitterDelta) => void;
        onDragEnd?: (position: ISplitterDelta) => void;
    }
    export function Splitter({ orientation, className, style, onDragEnd, onDragStart, onDragging, ...otherProps }: ISplitterProps): JSX.Element;
    export interface IDesignerPanelProps {
        align: Align;
        tabs: ITab[];
        width: number;
        minWidth?: number;
        maxWidth?: number;
        currentTabId?: string | null;
        onTabSelected?: (name: string | null) => void;
        onWidthChanged?: (newWidth: number) => void;
    }
    export function DesignerPanel({ align, tabs, width, minWidth, maxWidth, currentTabId: currentTabIdProp, children, onTabSelected, onWidthChanged, }: React.PropsWithChildren<IDesignerPanelProps>): JSX.Element;
    export { ValidationIcon } from "domains/designers/common/ValidationIcon/ValidationIcon";
    export { DesignerHeader } from "domains/designers/common/DesignerHeader/DesignerHeader";
    export { DesignerBody } from "domains/designers/common/DesignerBody";
    export { DesignerActions } from "domains/designers/common/DesignerActions/DesignerActions";
    export { DesignerSurface } from "domains/designers/common/DesignerSurface";
    export { LassoAdorner } from "domains/designers/common/LassoAdorner/LassoAdorner";
    export { ResizeAdorner } from "domains/designers/common/ResizeAdorner/ResizeAdorner";
    export { MultiSelectionAdorner } from "domains/designers/common/MultiSelectionAdorner";
    export { DndAdorner } from "domains/designers/common/DndAdorner/DndAdorner";
    export { FlyOutMenu } from "domains/designers/common/FlyOutMenu/FlyOutMenu";
    export { InputLayer } from "domains/designers/common/InputLayer";
    export { DesignerPrompt } from "domains/designers/common/DesignerPrompt/DesignerPrompt";
    export { DesignerRangeSlider } from "domains/designers/common/DesignerRangeSlider/DesignerRangeSlider";
    export { DesignerPanel } from "domains/designers/common/DesignerPanel/DesignerPanel";
    export interface ElementOptions {
        className?: string;
        id: string;
        tagName?: string;
        style?: string;
        appendTo?: HTMLElement;
    }
    export interface SetElementStyleOptions {
        className: string;
        style?: CSSProperties;
    }
    export interface DomEvent {
        name: string;
        action: () => void;
    }
    export interface createHtmlComponentInterface {
        zIndex: number | undefined;
        styleObject: CSSProperties;
        id: string;
        className: string;
        appendTo?: HTMLElement | undefined;
        actions?: DomEvent[] | undefined;
    }
    export function createHtmlComponent({ zIndex, styleObject, className, appendTo, actions, id }: createHtmlComponentInterface): HTMLElement;
    export function getOrCreateDomElement({ className, style, appendTo, id, tagName }: ElementOptions): HTMLElement;
    export function setElementStyle(element: HTMLElement, { className, style }: SetElementStyleOptions): void;
    export function jsObjectToCssString(style: object): string;
    export interface LayerOptions {
        children?: React.ReactNode;
        actions?: DomEvent[];
        id: string;
        className: string;
        zIndex?: number;
        style?: React.CSSProperties;
        appendTo?: HTMLElement;
    }
    export const DEFAULT_OVERLAY_STYLE: React.CSSProperties;
    export function Overlay({ children, className, zIndex, style, appendTo, actions, id, }: LayerOptions): React.ReactPortal;
    export interface IDesignerLayoutProps extends React.ComponentPropsWithoutRef<'div'> {
        id: string;
        /**
         * Determines whether to show Designer in overlay or not
         *
         * @default true
         */
        showInLayer?: boolean;
        /**
         * Adds indent around designer.
         *
         * @default false
         */
        hasIndent?: boolean;
    }
    export function DesignerLayout({ id, showInLayer, hasIndent, style, className, children, ...otherProps }: IDesignerLayoutProps): JSX.Element;
    export enum NodePosition {
        first = 0,
        middle = 1,
        last = 2
    }
    export interface ITreeNode<T = undefined> {
        classNames?: string;
        isExpanded: boolean;
        isLoading?: boolean;
        isActive?: boolean;
        children?: ITreeNode<T>[];
        nodeId: string;
        hasChildren?: boolean;
        data: T;
        onNodeKeyDown?: (node: ITreeNode<T>, e: React.KeyboardEvent) => void;
        onNodeKeyUp?: (node: ITreeNode<T>, e: React.KeyboardEvent) => void;
        onNodeExpand?: (node: ITreeNode<T>) => void;
        onNodeFold?: (node: ITreeNode<T>) => void;
        onNodeSelect?: (node: ITreeNode<T>) => void;
        alwaysLoadChildren?: boolean;
    }
    export function getNodePosition(index: number, arrayLength: number): NodePosition;
    export interface ITreeNodeProps<T> extends ITreeNode<T> {
        baseClassName?: string;
        getTreeNode?: (node: ITreeNode<T>) => React.ReactNode;
        nodePosition?: NodePosition;
    }
    export function TreeNode<T>(props: ITreeNodeProps<T>): JSX.Element;
    export const UPDATE_EVENT_PREFIX = "update-tree__";
    export enum TreeCommandType {
        Add = 0,
        Delete = 1,
        Select = 2,
        Refresh = 3,
        Load = 4
    }
    export interface ITreeCommand {
        command?: TreeCommandType;
        id?: string;
    }
    export type TreeNodeMouseEventHandler<T> = (node: ITreeNode<T>, e: React.MouseEvent<HTMLDivElement>) => Promise<void> | void;
    interface IUseTreeModel<T> {
        model: ITreeNode<T>[];
        /**
         * Updates existing node
         */
        setNode: (node: ITreeNode<T>) => void;
        setNodes: (node: ITreeNode<T>[]) => void;
        removeNode: (nodeId: string) => void;
        expandNode: (nodeId: string, isExpanded: boolean, element?: HTMLElement) => Promise<void>;
        toggleExpandNode: TreeNodeMouseEventHandler<T>;
        addNodeChildren: (nodeId: string, children: ITreeNode<T>[]) => void;
        toggleSelectNode: (nodeId: string, selected: boolean) => void;
        setModel: Dispatch<SetStateAction<ITreeNode<T>[]>>;
        toggleSelectNodes: (nodeIds: string[], selected: boolean) => void;
        getActiveNodes: () => ITreeNode<T>[];
        unselectNodes: () => void;
        findNode: (id: string) => ITreeNode<T> | null;
        findNodes: (filter: (node: ITreeNode<T>) => boolean) => ITreeNode<T>[];
    }
    export function useTreeModel<T>(nodes: ITreeNode<T>[], loadNodes?: (parent: ITreeNode<T>) => Promise<ITreeNode<T>[]>, onNodeExpanded?: (isExpanded: boolean, element?: HTMLElement) => void): IUseTreeModel<T>;
    export function findNodesList<T>(filter: (node: ITreeNode<T>) => boolean, nodes: ITreeNode<T>[]): ITreeNode<T>[];
    export function deleteNode<T>(id: string, nodes: ITreeNode<T>[]): boolean;
    export function scrollToElement(element: Element | undefined): void;
    export interface ISkeletonTreeProps {
        height: number;
        style?: React.CSSProperties;
    }
    /**
     * Skeleton loader for TreeView control
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function SkeletonTree({ height, style }: ISkeletonTreeProps): JSX.Element;
    export interface ITreeProps<T> {
        treeId?: string;
        /**
         * for root tree element
         */
        treeClassName?: string;
        /**
         * For node styles (for example: add padding)
         */
        nodeClassName?: string;
        nodes: ITreeNode<T>[];
        getTreeNode?: (node: ITreeNodeProps<T>) => React.ReactNode;
        onNodeKeyDown?: (node: ITreeNode<T>, e: React.KeyboardEvent) => void;
        onNodeExpand?: (node: ITreeNode<T>) => void;
        onNodeFold?: (node: ITreeNode<T>) => void;
        onNodeSelect?: (node: ITreeNode<T>) => void;
        loading?: {
            isLoading: boolean;
            height: number;
        };
    }
    /**
     * TODO:
     * - can we merge TreeNode and CommonTreeNode components. We can use material-ui approach to substitute content part of the node. E.g. <Tree components={{nodeContext: CustomNodeContent}}/>
     * - as we got keyboard navigation and added onNodeFold, onNodeExpand to the Tree. We need to call these methods when we click expand/collapse node by mouse, as well (##CommonTreeNode.onExpandNodeClick).
     */
    export function Tree<T>({ treeId, treeClassName, nodes, getTreeNode, nodeClassName, onNodeKeyDown, onNodeExpand, onNodeFold, onNodeSelect, loading, ...props }: ITreeProps<T>): JSX.Element;
    interface IEpickDataProps {
        types?: EntityTypeInfo[];
        filterNames?: string[];
    }
    export const EpickTreeConstants: {
        allFoldersId: string;
        recentItemsFolderId: string;
        favoriteItemsFolderId: string;
        userDefinedTypesFolderId: string;
        allFoldersName: string;
        favoritesFolderName: string;
        recentFolderName: string;
        userdefinedTypesFolderName: string;
        currentFolderName: string;
        reportRootFolderId: string;
        reportRootFolderName: string;
    };
    export interface IEntityPickerFetcher {
        fetchFolder: (id: string) => Promise<EntityPickerFolder>;
        fetchRootFolders: () => Promise<EntityPickerFolder[]>;
        fetchSubFolders: (folderId: string) => Promise<EntityPickerFolder[]>;
        fetchEntities: (folderId: string) => Promise<EntityPickerItem[]>;
        fetchEntity: (entityId: string) => Promise<EntityPickerItem>;
        searchEntities: (searchText: string, folderId?: string) => Promise<EntityPickerItem[]>;
        fetchEntitiesOfTypes: (types: EntityTypeInfo[]) => Promise<EntityPickerItem[]>;
        fetchFavorites: () => Promise<EntityPickerItem[]>;
        fetchRecentEntites: () => Promise<EntityPickerItem[]>;
    }
    export function entityPickerFetcher({ types, filterNames }: IEpickDataProps): IEntityPickerFetcher;
    export interface IEntityPickerTreeModel {
        getRootNodes(): Promise<ITreeNode<IEpickNode>[]>;
        getSubNodes(nodeId: string): Promise<ITreeNode<IEpickNode>[]>;
        getFavoritesRootNode?: () => Promise<ITreeNode<IEpickNode>[]>;
        getRecentRootNode?: () => Promise<ITreeNode<IEpickNode>[]>;
        getRootFolderNode?: () => Promise<ITreeNode<IEpickNode>[]>;
        getCurrentFolderNode?: () => Promise<ITreeNode<IEpickNode>[]>;
        getAllRootNode?: () => Promise<ITreeNode<IEpickNode>[]>;
        sortNodes?: (a: ITreeNode<IEpickNode>, b: ITreeNode<IEpickNode>) => number;
    }
    export function getTreeNode(epickNode: IEpickNode): ITreeNode<IEpickNode>;
    /**
     * DefaultEntityPickerTreeModel
     */
    export function defaultEpickTreeModel(settings: EntityPickerSettings, dataFetcher: IEntityPickerFetcher, additionalRootNodes?: IEpickNode[], areFoldersPickable?: boolean): IEntityPickerTreeModel;
    export interface ITreeNodeContentProps<T> {
        readonly node: ITreeNode<T>;
        title?: string;
        className?: string;
        chevronClassName?: string;
        hasChildren?: boolean;
        chevron?: React.ReactNode;
        onClick?: TreeNodeMouseEventHandler<T>;
        onMouseUp?: TreeNodeMouseEventHandler<T>;
        onMouseDown?: TreeNodeMouseEventHandler<T>;
        onExpandNodeClick?: (nodeId: string, isExpanded: boolean, element: HTMLElement) => void;
    }
    export function TreeNodeContent<T>({ node, children, chevronClassName, className, chevron, hasChildren, onExpandNodeClick, onMouseDown, onMouseUp, onClick, title, }: React.PropsWithChildren<ITreeNodeContentProps<T>>): JSX.Element;
    export interface IColoredImageProps {
        imageInfo: ImageInfo;
        color: string;
        width: number;
        height: number;
        currentColor: string;
        className?: string;
    }
    export function ColoredImage({ className, width, imageInfo, height, color, currentColor }: IColoredImageProps): JSX.Element;
    export interface IColoredImageInfoProps {
        imageInfo: ImageInfo;
        colors: string[];
        width: number;
        height: number;
        currentColor: string;
        className?: string;
    }
    export function ColoredImageInfo({ colors, height, imageInfo, width, className, currentColor }: IColoredImageInfoProps): JSX.Element;
    export function useHover<T extends HTMLElement>(hoverParent?: boolean): [RefObject<T> | null, boolean];
    interface IEntityIconProps {
        imageInfo: ImageInfo;
        isCurrent?: boolean;
    }
    export function EntityIcon({ imageInfo, isCurrent }: IEntityIconProps): JSX.Element;
    export interface ICancelablePromise<T> {
        promise: Promise<T>;
        cancel: () => void;
    }
    /**
     * {@link https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html Makes promise cancellable}
     * @param promise promise to make cancelable
     */
    export function makeCancelable<T>(promise: Promise<T>): ICancelablePromise<T>;
    export interface IFavoriteIconProps {
        className?: string;
        currentType: FavoriteType;
        onEdit?: () => void;
        onChange?: (type: FavoriteType) => void;
        shouldOpenMenu?: boolean;
        classNamePostfix?: 'flow' | 'form' | 'entity' | 'entity-new' | 'folder';
    }
    /**
     * Favorite Icon turns favorite on and off for the current user
     * if 'shouldOpenMenu' is true, clicking on icon opens a menu with ability to choose a Favorite Type
     * or open an advanced edit dialog
     **/
    export function FavoriteIcon({ className, currentType, onEdit, onChange, shouldOpenMenu, classNamePostfix, }: IFavoriteIconProps): JSX.Element;
    export const FavoriteEventId = "FavoriteEntityEventId";
    export const folderTypeName = "DecisionsFramework.ServiceLayer.Services.Folder.Folder";
    export const accountTypeName = "DecisionsFramework.ServiceLayer.Services.Accounts.Account";
    export interface IEpickTreeProps {
        epickTreeModel: IEntityPickerTreeModel;
        onNodeSelected?: (node: IEpickNode) => void;
        onNodeMouseUp?: TreeNodeMouseEventHandler<IEpickNode>;
        onNodeMouseDown?: TreeNodeMouseEventHandler<IEpickNode>;
        /**
         * Runs on initial load when all root nodes are loaded and when their opened children are loaded as well.
         */
        onTreeLoaded?: (model?: ITreeNode<IEpickNode>[]) => void;
    }
    export interface IEpickNode {
        id: string;
        name: string;
        pickable?: boolean;
        canBeFav?: boolean;
        isFav?: boolean;
        favoriteType?: FavoriteType;
        shouldShowFavoritesMenu?: boolean;
        note?: string;
        expandable?: boolean;
        expanded?: boolean;
        order?: number;
        entity?: EntityPickerItem;
        title?: React.ReactNode;
    }
    export function EpickTree({ epickTreeModel, onNodeMouseDown, onNodeMouseUp, onNodeSelected, onTreeLoaded, }: IEpickTreeProps): JSX.Element;
    /**
     * DecisionsTypePickerTreeModel
     */
    export function decisionsTypeTreeModel(settings: DecisionsTypePickerSettings, dataFetcher: IEntityPickerFetcher): IEntityPickerTreeModel;
    export function getTitle(nameString: string): string | JSX.Element;
    export function splitNameAndType(nameString: string): [string, RegExpMatchArray | null];
    export function inputDesignerEpickTreeModel(settings: DecisionsTypePickerSettings, dataFetcher: IEntityPickerFetcher): IEntityPickerTreeModel;
    interface IDndInputProps extends React.HTMLProps<HTMLDivElement> {
    }
    /**
     * Component which is shown during dragging input data from toolbox to surface
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DndInpuData({ className, ...otherProps }: IDndInputProps): JSX.Element;
    export interface ILinkButtonProps extends React.ComponentProps<'button'> {
        color?: 'primary' | 'accent';
    }
    /**
     * @deprecated use components/Button instead
     */
    export function LinkButton({ color, className, ...otherProps }: ILinkButtonProps): JSX.Element;
    /**
     * DefaultEntityPickerTreeModel
     */
    export function globalSearchEntityPickerTreeModel(searchText: string, settings: EntityPickerSettings, dataFetcher: IEntityPickerFetcher): IEntityPickerTreeModel;
    export interface ToolboxProps {
        onCreateTypeClick?: () => void;
        onTypeDropped: (fullTypeName: string, point: IPoint) => void;
    }
    export function Toolbox({ onCreateTypeClick, onTypeDropped }: ToolboxProps): JSX.Element;
    export interface IInfoPanelProps {
        sessionId: string;
    }
    export function InfoPanel({ sessionId }: IInfoPanelProps): JSX.Element;
    export interface ITabPanelProps extends React.HTMLProps<HTMLDivElement> {
        currentTabId: string | null | undefined;
        tabId: string;
    }
    export function TabPanel(props: React.PropsWithChildren<ITabPanelProps>): JSX.Element;
    export const SimpleDiagramHeight = 35;
    export const DefaultDiagramWidth = 370;
    export const DefaultHorizontalGap = 50;
    export function getHelpCenterValidations(state: DataDesignerReducerState): ValidationIssue[];
    export function getDataDiagramRect(diagram: DiagramDisplayData, isExpanded: boolean): IRect;
    /**
     * Returns filtered array of identifiers which exist in "newDiagrams" argument.
     */
    export function syncDiagramsIds(newDiagrams: DiagramDisplayData[], diagramIds: string[]): string[];
    export function isSimpleOrCollapsed(diagram: DiagramDisplayData, isExpanded: boolean): boolean;
    export function getDiagramsByIds(allDiagrams: DiagramDisplayData[], selectedDiagramIds: string[]): DiagramDisplayData[];
    export function getDiagramById(allDiagrams: DiagramDisplayData[], id: string): DiagramDisplayData | undefined;
    export function hasDiagram(allDiagrams: DiagramDisplayData[], id: string): boolean;
    export function getSelectionDiagramsRect(diagrams: DiagramDisplayData[], expandedDiagramIds: string[]): IRect | null;
    export function getSelectedDiagrams(diagrams: DiagramDisplayData[], expandedDiagramIds: string[], startPoint: IPoint, endPoint: IPoint): DiagramDisplayData[];
    export function hasChildProperties(diagram: DiagramDisplayData): boolean;
    export function getDiagramHeight(diagram: DiagramDisplayData, isExpanded: boolean): number;
    export function getDesignPatternMappingContext(designPatternId: string): MappingContext;
    export function getNoDiagramsMessage(surfaceType: DataDesignerSurfaceType): string;
    export function getNoDiagramNameMessage(surfaceType: DataDesignerSurfaceType): string;
    export type DataDesignerView = 'Diagram View' | 'List View';
    export interface DataDesignerReducerState {
        diagrams: DiagramDisplayData[];
        selectedDiagramIds: string[];
        expandedDiagramIds: string[];
        currentView: DataDesignerView;
        addedDiagramIdsInListView: string[];
        layerForDiagramId: string | null;
    }
    export type DataDesignerReducerAction = {
        type: 'set-diagrams';
        diagrams: DiagramDisplayData[];
    } | {
        type: 'update-diagram';
        diagram: DiagramDisplayData;
    } | {
        type: 'delete-diagrams';
        diagramIds: string[];
    } | {
        type: 'select-diagrams';
        diagramIds: string[];
    } | {
        type: 'add-diagram';
        input: DiagramDisplayData;
    } | {
        type: 'change-view';
        view: DataDesignerView;
    } | {
        type: 'hide-name-layer';
    } | {
        type: 'expand-diagram';
        diagramId: string;
    } | {
        type: 'collapse-diagram';
        diagramId: string;
    } | {
        type: 'unselect-diagrams';
    };
    export const dataDesignerReducer: React.Reducer<DataDesignerReducerState, DataDesignerReducerAction>;
    export function getDefaultState(currentView: DataDesignerView): DataDesignerReducerState;
    interface IInputDataPropertiesPanelProps extends React.HTMLProps<HTMLDivElement>, IAddBeforeSavePromises {
        sessionId: string;
        diagramId: string;
        surfaceType: DataDesignerSurfaceType;
        currentView: DataDesignerView;
    }
    /**
     * Shows DataDiagram properties if inputDataId is provided and design pattern properties otherwise.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const DiagramPropertiesPanel: React.MemoExoticComponent<({ sessionId, diagramId, surfaceType, currentView, className, addBeforeSavePromise, removeBeforeSavePromise, }: IInputDataPropertiesPanelProps) => JSX.Element>;
    export interface IValidationOptions {
        title: string;
        readonly description: string;
        readonly level: BreakLevel;
        readonly gotoAction?: (entry: ValidationEntry) => void;
        readonly ignoreAction?: (entry: ValidationEntry, isIgnored: boolean) => void;
        readonly onClick?: (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        readonly onContextMenu?: (event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void;
        readonly isBreakingIssue?: boolean;
        readonly isIgnored?: boolean;
    }
    /**
     * Duplication of ValidationEntry from MVC project
     */
    export class ValidationEntry {
        private options;
        title: string;
        get description(): string;
        get level(): BreakLevel;
        get gotoAction(): ((entry: ValidationEntry) => void) | undefined;
        get ignoreAction(): ((entry: ValidationEntry, isIgnored: boolean) => void) | undefined;
        get onClick(): ((event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void) | undefined;
        get onContextMenu(): ((event: {
            event: MouseEvent;
            entry: ValidationEntry;
        }) => void) | undefined;
        get isBreakingIssue(): boolean | undefined;
        get isIgnored(): boolean | undefined;
        constructor(options: IValidationOptions);
    }
    interface HelpCenterOptions {
        holder: HTMLElement;
        entries?: ValidationEntry[];
        extraLayerOptions?: any;
        icons?: HelpCenterIconType[];
        reRunValidations?: () => void;
    }
    interface IHelpCenterProps extends React.HTMLProps<HTMLDivElement>, Omit<HelpCenterOptions, 'holder'> {
        isOnSurface?: boolean;
    }
    export enum HelpCenterIconType {
        Error = 0,
        Warning = 1,
        Help = 2,
        Chat = 3,
        Tools = 4
    }
    /**
     * Wrapper around MVC HelpCenter implementation
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HelpCenter({ entries, extraLayerOptions, icons, reRunValidations, className, isOnSurface, ...otherProps }: IHelpCenterProps): JSX.Element;
    export interface IBounds {
        left?: number;
        top?: number;
    }
    export type IResizeAction = {
        type: 'start';
        position: IPoint;
        resizeDirection: ResizeDirection;
        initialRect: IRect;
    } | {
        type: 'move' | 'stop';
        position: IPoint;
        bounds?: IBounds;
    };
    export interface IResizeState {
        isActive: boolean;
        initialCursorPoint: IPoint;
        currentCursorPoint: IPoint;
        initialRect: IRect;
        currentRect: IRect;
        direction: ResizeDirection | null;
    }
    export interface IResizeEvent {
        cursor: IPoint;
    }
    export interface IStartResizeEvent extends IResizeEvent {
        direction: ResizeDirection;
        initialRect: IRect;
    }
    export interface IUseResizeResult extends Omit<IResizeState, 'initialCursorPoint' | 'currentCursorPoint'> {
        start: (event: IStartResizeEvent) => void;
        stop: (event: IResizeEvent) => void;
        move: (event: IResizeEvent) => void;
    }
    export interface IUseResizeProps {
        /**
         * Determines whether need to log resize events like 'start', 'move', 'stop'
         * @default false
         */
        logEvents?: boolean;
        bounds?: IBounds;
        onResizeStart?: (result: IUseResizeResult) => void;
        onResizing?: (result: IUseResizeResult) => void;
        onResizeEnd?: (result: IUseResizeResult) => void;
    }
    /**
     * Calculates result size and position based on current cursor position @param position.
     *
     * Note: exported only for testing in useResize.test.ts
     *
     * @param state Initial state which object had before start of resizing
     * @param position Current cursor position
     */
    export function getSizeAndPosition({ direction, initialRect, initialCursorPoint }: IResizeState, position: IPoint, bounds?: IBounds): IRect;
    /**
     * Creates resize even from any mouse event.
     * It will prevent copypasting this logic.
     */
    export function createResizeEvent<T extends IResizeEvent>(e: React.MouseEvent<HTMLElement> | MouseEvent, otherProps?: Omit<T, 'cursor'>): T;
    export function useResize(props?: IUseResizeProps): IUseResizeResult;
    interface ITreeNodeNameProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
        name: string;
    }
    /**
     *  Tree node name. As most of trees have just name inside node, we've introduced this control.
     *  Supposed to be used with "TreeNodeContent" component.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TreeNodeName({ name, className, ...otherProps }: ITreeNodeNameProps): JSX.Element;
    export interface IDataDesignerContext {
        /**
         * Defines diagram name placeholder which will be shown when no name is set.
         */
        mappingContext?: MappingContext;
        noDiagramsMessage: string;
        noDiagramNameMessage: string;
    }
    export const DataDesignerContext: React.Context<IDataDesignerContext>;
    interface IDataDiagramFieldProps {
        readonly node: IDiagramTreeNode;
        onExpandNodeClick: (nodeId: string, isExpanded: boolean) => void;
        onNameChanged?: (name: string) => void;
    }
    export const DataDiagramField: React.MemoExoticComponent<({ node, onNameChanged, onExpandNodeClick }: IDataDiagramFieldProps) => JSX.Element>;
    export interface IDiagramTreeNode extends ITreeNode<{
        dataDescription: DataDescription;
        path: string;
        isRoot: boolean;
    }> {
    }
    export type DataDiagramMouseEvent = React.MouseEvent<HTMLElement> & {
        diagram: DiagramDisplayData;
    };
    export interface IDataDiagramProps {
        diagramData: DiagramDisplayData;
        onClick: (e: DataDiagramMouseEvent) => void;
        onMouseDown: (e: DataDiagramMouseEvent) => void;
        getDataFields: (id: string, path: string) => Promise<DataDescription[]>;
        onNameChanged: (id: string, newName: string) => void;
        onRootNodeExpand: (id: string, isExpanded: boolean) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const DataDiagram: React.MemoExoticComponent<({ diagramData, onClick, onMouseDown, getDataFields, onNameChanged, onRootNodeExpand }: IDataDiagramProps) => JSX.Element>;
    export interface InputDataDndAdornerProps {
        diagrams: DiagramDisplayData[];
        expandedInputsIds: string[];
        left: number;
        top: number;
    }
    export function InputDataDndAdorner({ diagrams, expandedInputsIds, left, top }: InputDataDndAdornerProps): JSX.Element | null;
    export interface IDataDiagramViewProps {
        className?: string;
        diagrams: DiagramDisplayData[];
        selectedDiagramIds: string[];
        expandedDiagramIds: string[];
        onSelectionChanged: (diagramIds: string[]) => void;
        onDiagramViewUpdated: (diagramId: string, view: DiagramView) => void;
        getDataFields: (diagramId: string, path: string) => Promise<DataDescription[]>;
        onNameChanged: (diagramId: string, newName: string) => void;
        onDeleteDiagrams: (diagramIds: string[]) => void;
        onDiagramExpanded: (diagramId: string) => void;
        onDiagramCollapsed: (diagramId: string) => void;
    }
    /**
     * Represents Inputs/Outputs Data as a set of diagrams.
     * Every input/output has a corresponding diagram.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const DataDiagramView: React.ForwardRefExoticComponent<IDataDiagramViewProps & React.RefAttributes<HTMLDivElement>>;
    export interface IHint {
        keyValue: string;
        label: string;
        onClick: (e: React.MouseEvent) => void;
    }
    export interface IShortcutHintListProps {
        hints: IHint[];
    }
    export const ShortcutHintList: ({ hints }: IShortcutHintListProps) => JSX.Element;
    export interface INameInputLayerProps {
        className?: string;
        onInput: (name: string, isList: boolean) => void;
    }
    export function NameInputLayer({ className, onInput }: INameInputLayerProps): JSX.Element;
    /**
     * DecisionsTypeDropdownTreeModel
     *
     * TODO sasha: simplify
     */
    export function dropdownTreeModel(settings: DecisionsTypePickerSettings, dataFetcher: IEntityPickerFetcher, nodes?: IEpickNode[]): IEntityPickerTreeModel;
    export interface IMoreItem {
        id: string;
        title: string;
        onSelected: (settings?: DecisionsTypePickerSettings | null) => void;
    }
    export interface IComboBoxTreeProps {
        hideClear?: boolean;
        validation?: ValidationSummary;
        createModel: (searchValue?: string) => IEntityPickerTreeModel | null;
        onSelected: (item: IEpickNode | null) => void;
        onFocus?: React.FocusEventHandler<HTMLInputElement>;
        /**
         * Actions which will be shown in the drop down below the suggested types
         */
        moreItems?: IMoreItem[];
        callOutHeight?: number | 'auto';
        searchValue: string;
        handleSearch?: boolean;
        settings?: DecisionsTypePickerSettings | null;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ComboBoxTree({ hideClear, createModel, moreItems, onSelected, onFocus, callOutHeight, validation, searchValue: _searchValue, handleSearch, settings, }: IComboBoxTreeProps): JSX.Element;
    export class EpickSettings {
        static getForType(typeName: string): Promise<EntityPickerSettings>;
        static getForFolder(): Promise<EntityPickerSettings>;
        static getForElementRegistration(elementTypes: ElementType[], subElementType?: string, includeEmptySubElementType?: boolean, behaviorTypeName?: string): Promise<ElementRegistrationPickerSettings>;
        static getForDecisionsTypes(filterNames?: string[]): Promise<DecisionsTypePickerSettings>;
    }
    interface ITypeComboPickerProps extends Omit<IComboBoxTreeProps, 'createModel' | 'searchValue' | 'onSelected'> {
        pickedEntity?: DecisionsType | string | null;
        onSelected: (item: DecisionsType | null) => void;
    }
    export const MORE_ITEMS_START_INDEX = 9;
    /**
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function TypeComboPicker({ settings, moreItems, pickedEntity, onSelected, ...props }: ITypeComboPickerProps): JSX.Element;
    interface ITextItemProps extends React.HTMLProps<HTMLSpanElement> {
        children: string;
    }
    /**
     * Text item displays given text. Supposed to standardize not editable text across truth table.
     * It can be used to show not editable content and labels in header cells.
     * If you need to provide ability to edit text look at [[EditablTextItem]]
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const TextItem: React.ForwardRefExoticComponent<Pick<ITextItemProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLButtonElement>>;
    export interface IntersectionEditorCommands {
        setIntersectionStringValue(intersection: IntersectionEditorInfo, value: string): void;
        showFullEditor(intersection: IntersectionEditorInfo): void;
        moveLeft?(current: IntersectionEditorInfo): boolean;
        moveUp?(current: IntersectionEditorInfo): boolean;
        moveRight?(current: IntersectionEditorInfo): boolean;
        moveDown?(current: IntersectionEditorInfo): boolean;
        moveNext?(current: IntersectionEditorInfo): boolean;
    }
    export interface IntersectionEditorInfo {
        rowId?: string;
        columnId?: string;
        displayValue: string;
        dataType: string;
        mappingType: string;
        /**
         * Determine can navigate to other editor by left/up/right/down/tab keys
         */
        canNavigate: boolean;
        commands?: IntersectionEditorCommands;
        initialViewType?: 'label' | 'editor';
    }
    interface IInlineEditorProps {
        className?: string;
        /**
         * Text is displayed when there is no sutable inline editor for given dataType and mappingType.
         */
        text: string;
        onTextClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
        intersection: IntersectionEditorInfo;
        isInDebug: boolean;
    }
    /**
     * Wrapper around MVC inline editor.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function InlineEditor({ intersection, text, isInDebug, className, onTextClick }: IInlineEditorProps): JSX.Element;
    interface IEditableTextItemProps extends React.HTMLProps<HTMLDivElement> {
        isInDebug: boolean;
        text: string;
        showIgnoreButton?: boolean;
        intersection: IntersectionEditorInfo;
        onIgnoreClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
        onEditClick: (event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
    }
    /**
     * Displayes given text (@param text) and allows to edit it inline.
     * If you need just display readonly text, look at [[TextItem]]
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function EditableTextItem({ text, isInDebug, className, intersection, onIgnoreClick, onEditClick, showIgnoreButton, ...otherProps }: IEditableTextItemProps): JSX.Element;
    interface IPhraseItemProps extends React.ComponentProps<'button'> {
    }
    /**
     * Represents one of phrase part either Anchor or Verb.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const PhraseItem: React.ForwardRefExoticComponent<Pick<IPhraseItemProps, "form" | "slot" | "style" | "title" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "value" | "className" | "id" | "onChange" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "placeholder" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLButtonElement>>;
    export type IHeaderSubAction = {
        name: string;
        action: () => void;
    };
    export interface IHeaderActionProps {
        iconClassName: string;
        title?: string;
        disabled?: boolean;
        className?: string;
        onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
        subActions?: IHeaderSubAction[];
        onShowSubActions: () => void;
        onHideSubActions: () => void;
    }
    export function HeaderAction({ title, disabled, className, iconClassName, subActions, onClick, onShowSubActions, onHideSubActions, }: IHeaderActionProps): JSX.Element;
    export type IHeaderSubAction = {
        name: string;
        action: () => void;
    };
    export type IHeaderAction = {
        iconClassName: string;
        title?: string;
    } & ({
        action?: (event: MouseEvent<HTMLButtonElement>) => void;
        subActions?: never;
    } | {
        subActions?: IHeaderSubAction[];
        action?: never;
    });
    export interface IHeaderActionsProps extends React.HTMLProps<HTMLDivElement> {
        actions: IHeaderAction[];
    }
    /**
     * Set of actions to edit column such as phrase or output. It is supposed to be used only for header cells.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderActions({ className, actions, ...otherProps }: IHeaderActionsProps): JSX.Element | null;
    export { EditableTextItem } from "domains/designers/TruthTable/components/EditableTextItem";
    export { InlineEditor } from "domains/designers/TruthTable/components/InlineEditor";
    export { TextItem } from "domains/designers/TruthTable/components/TextItem";
    export { PhraseItem } from "domains/designers/TruthTable/components/PhraseItem";
    export { HeaderActions } from "domains/designers/TruthTable/components/HeaderActions";
    export { HeaderAction } from "domains/designers/TruthTable/components/HeaderAction";
    export function showSequentialPicker(session: SequentialEditSession): void;
    export interface IDataDefinition {
        Id: string;
        DataName: string;
        DataType: DecisionsType;
        IsArray: boolean;
        InlineMapping?: InlineMapping;
        ValidationIssues: ValidationIssue[];
    }
    export interface IDataDefinitionRowCommonProps {
        showInputColumn?: boolean;
        mappingContext?: MappingContext;
        onMoveUp?: (index: number) => void;
        onMoveDown?: (index: number) => void;
        onNameChanged: (index: number, newName: string) => Promise<string>;
        onIsListChanged: (index: number, isList: boolean) => void;
        onTypeChanged: (index: number, type: DecisionsType | undefined) => void;
        onDelete: (index: number) => void;
        onConstantValueChanged?: (index: number, value: string) => Promise<void>;
        onRowSelected?: (index: number, definition: IDataDefinition) => void;
        onGetEditMappingContextId?: (index: number) => Promise<string>;
        startEditSelectMapping?: (index: number) => Promise<SequentialEditSession>;
    }
    export interface IDataDefinitionRowProps extends React.ComponentProps<'tr'>, IDataDefinitionRowCommonProps {
        index: number;
        isFirst: boolean;
        isLast: boolean;
        canMoveUp: boolean;
        canMoveDown: boolean;
        definition: IDataDefinition;
        isSelected: boolean;
        /**
         * Determines whether it is possible to re-order row
         */
        reorderableRow: boolean;
        onNameBlur: (rowIndex: number) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataDefinitionRow({ index, isFirst, isLast, canMoveUp, canMoveDown, definition, showInputColumn, className, isSelected, reorderableRow, onDelete, onIsListChanged, onNameChanged, onTypeChanged, onRowSelected, onMoveUp, onMoveDown, onNameBlur, onConstantValueChanged, onGetEditMappingContextId, mappingContext, startEditSelectMapping, ...otherProps }: IDataDefinitionRowProps): JSX.Element;
    export interface IDataDefinitionTableProps extends React.ComponentProps<'table'>, IDataDefinitionRowCommonProps {
        definitions: IDataDefinition[];
        /**
         * Index of selected rom (indexing from 0)
         */
        selectedRowIndex?: number;
        /**
         * Determines whether it is possible to re-oreder rows (move up/move down).
         *
         * @default true
         */
        reorderableRows?: boolean;
        onAddRow?: () => Promise<void>;
    }
    /**
     * Table Editor allows edit array of Data Definitions (DataDescription, PlaceholderData, ...)
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataDefinitionTable({ className, definitions, showInputColumn, selectedRowIndex, reorderableRows, onNameChanged, onIsListChanged, onTypeChanged, onDelete, onRowSelected, onMoveUp, onMoveDown, onAddRow, onConstantValueChanged, onGetEditMappingContextId: onGetValueContextId, mappingContext, startEditSelectMapping, ...otherProps }: IDataDefinitionTableProps): JSX.Element;
    export interface IDataListViewProps {
        className?: string;
        diagrams: DiagramDisplayData[];
        /**
         * In list view we can select just one row and consequently one input.
         * So if there is single selected diagram it will be selected in "List View" as well.
         */
        selectedInputId?: string;
        showInputColumn: boolean;
        onNameChanged: (id: string, newName: string) => Promise<string>;
        onTypeChanged: (id: string, newType?: DecisionsType) => void;
        onIsListChanged: (id: string, newIsList: boolean) => void;
        onRowDeleted: (id: string) => void;
        onSelectionChanged: (id?: string) => void;
        onRowMoveUp: (id: string) => void;
        onRowMoveDown: (id: string) => void;
        onAddRow: () => Promise<void>;
        onConstantValueChanged: (id: string, value: string) => Promise<void>;
        onGetEditMappingContextId: (id: string) => Promise<string>;
        startEditSelectMapping: (id: string) => Promise<SequentialEditSession>;
    }
    /**
     * Represents Input/Output Data as a table.
     * Every input/output has a corresponding row.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataListView({ className, diagrams, showInputColumn, selectedInputId, onRowDeleted, onNameChanged, onTypeChanged, onIsListChanged, onSelectionChanged, onRowMoveUp, onRowMoveDown, onAddRow, onConstantValueChanged, onGetEditMappingContextId, startEditSelectMapping, }: IDataListViewProps): JSX.Element;
    export interface IAlignmentResult<T> {
        item: T;
        left: number;
        top: number;
    }
    /**
     * Aligns elements to the left
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignLeft<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    /**
     * Aligns elements to the right
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignRight<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    /**
     * Aligns elements to the center horizontally
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignCenterHorizontally<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    /**
     * Aligns elements to the top
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignTop<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    /**
     * Aligns elements to the bottom
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignBottom<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    /**
     * Aligns elements to center vertically
     * @param items items which have size and position for alignment
     * @param getBounds returns bounding rect for every item
     */
    export function alignCenterVertically<T>(items: T[], getBounds: (item: T) => IRect): IAlignmentResult<T>[];
    interface IDataDesignerSurfaceProps {
        /**
         * Designer session id
         */
        sessionId: string;
        /**
         * Surface state
         */
        state: DataDesignerReducerState;
        surfaceType: DataDesignerSurfaceType;
        /**
         * Changes local surface state.
         */
        dispatch: React.Dispatch<DataDesignerReducerAction>;
        /**
         * Callback to perform side effect when selection has been changed.
         */
        onSelectionChanged: (surface: DataDesignerSurfaceType, diagramIds: string[]) => void;
        /**
         *Callback to perform side effect when deleting diagrams.
         */
        onDeleteDiagrams: (surface: DataDesignerSurfaceType, diagramIds: string[]) => void;
        /**
         * should it have a column to edit default input mapping or not
         */
        showInputColumn: boolean;
    }
    /**
     * Surface contains two view: "Diagram View" and "List View".
     * It is reusable for inputs and outputs.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataDesignerSurface({ children, sessionId, state, surfaceType, dispatch, onSelectionChanged, onDeleteDiagrams, showInputColumn, }: React.PropsWithChildren<IDataDesignerSurfaceProps>): JSX.Element;
    export interface IPortalLoadingProps {
        /**
         * @default true
         */
        isOverlayTransparent?: boolean;
        /**
         * Delay after which child component will be shown
         */
        delay?: number;
        /**
         * Text next to the spinner
         *
         * @default "Loading"
         */
        loadingText?: string;
        /**
         * Indicates whether need to show text next to the spinner
         * @default true
         */
        showText?: boolean;
    }
    /**
     * Portal loading. Forbids to user to interact with the whole portal.
     * Wrapper around MVC implementation.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function PortalLoading(props?: IPortalLoadingProps): null;
    export type ShowSaveDialogCallback = (title: string, message: string) => Promise<'save' | 'close' | undefined>;
    /**
     * Both inputs and outputs can be edited by DataDesigner
     */
    export type EditingDataType = 'inputs' | 'outputs';
    export interface IInputDataDesignerProps {
        startSession: () => Promise<DataDesignSession>;
        /**
         * Required for editing mappings
         */
        mappingContext?: MappingContext;
        /**
         * When editing the design pattern entity
         */
        editDesignPatternId?: string;
        /**
         * Determines which view is currently shown
         *
         * @default 'Diagram View'
         */
        currentView?: DataDesignerView;
        /**
         * Called when designer has been closed
         */
        onClose?: () => void;
        /**
         * Handler for "Create New Data Type" in toolbox
         */
        onCreateTypeClick: () => void;
        /**
         * Determines whether to show Designer in overlay or not
         *
         * @default true
         */
        showInLayer?: boolean;
        /**
         * Adds indent around designer. When Flow/Rule/Form's inputs are being editing by Data Designer, indent should be added to hightlight that
         * there is main designer under this one.
         *
         * @default false
         */
        hasIndent?: boolean;
        /**
         * There is no dialogs in React part yet, so use this callback to provide the implementation from MVC side.
         *
         * When result is "undefined" - save dialog has been closed.
         */
        showSaveDialog: ShowSaveDialogCallback;
        /**
         * Provides handler to create type from inputs
         */
        onCreateTypeFromInputs: (contextId: string) => Promise<'create' | 'cancel'>;
        /**
         * Notify that session has been started
         */
        onSessionStarted?: (session: DataDesignSession) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DataDesigner({ startSession: startSessionProp, mappingContext, editDesignPatternId, showInLayer, hasIndent, currentView: currentViewProp, showSaveDialog, onClose, onCreateTypeClick, onSessionStarted, onCreateTypeFromInputs, }: IInputDataDesignerProps): JSX.Element | null;
    export interface IDataDefinitionEditorProps extends IEditorProps {
    }
    /**
     * Property Editor that opens a Data Designer.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function DataDesignerEditor({ child, path }: IDataDefinitionEditorProps): JSX.Element;
    export interface IOutcomeScenarioProps {
        outcomeScenario: OutcomeScenario;
        onSelect?: (action: any) => void;
        labelClassName?: string;
        buttonClassName?: string;
        calloutClassName?: string;
    }
    export function OutcomeScenarioLinkButton({ outcomeScenario, onSelect, labelClassName, buttonClassName, }: IOutcomeScenarioProps): JSX.Element;
    export const OUTCOME_EDITOR_CLASS_NAME = "dpc-outcome-editor";
    export function OutcomeScenariosEditor({ child, path, onChange }: IEditorProps): JSX.Element;
    export function FilePickerEditor(props: IEditorProps): JSX.Element;
    export function MultiFilePickerEditor(props: IEditorProps): JSX.Element;
    export interface ILayoutEntityEditor extends IEditorProps {
    }
    export function LayoutEntityEditor({ child, path }: ILayoutEntityEditor): JSX.Element;
    export function getPickedEntityId(node: ContextProviderNode): string | null;
    export function submit(editingContext: string, path: string[], elementId?: string): Promise<void>;
    export function clear(editingContext: string, path: string[]): Promise<void>;
    interface ITypePickerDialog {
        open: boolean;
        setClosed: () => void;
        settings: DecisionsTypePickerSettings;
        onSelected: (type: DecisionsType) => void;
    }
    /**
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function TypePickerDialog({ open, settings, setClosed, onSelected }: ITypePickerDialog): JSX.Element;
    interface ITypePickerEditorProps extends IEditorProps {
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TypePickerEditor({ child, path }: ITypePickerEditorProps): JSX.Element;
    export interface IDataDescriptionFetcher {
        fetchDataDescriptions: (value?: string) => Promise<DataDescription[]>;
    }
    export function dataDescriptionFetcher(reportContextId: string): IDataDescriptionFetcher;
    export function dataDescriptionTreeModel({ fetchDataDescriptions }: IDataDescriptionFetcher): {
        getRootNodes: () => Promise<ITreeNode<IEpickNode>[]>;
        getSubNodes: (nodeId: string) => Promise<ITreeNode<IEpickNode>[]>;
    };
    export function submit(editingContext: string, path: string[], item: IEpickNode): Promise<void>;
    export function getPickedEntityName(node: ContextProviderNode): string;
    interface IReportFieldSelectorEditorProps extends IEditorProps {
    }
    /**
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function ReportFieldSelectorEditor({ child, path }: IReportFieldSelectorEditorProps): JSX.Element;
    export { ReportFieldSelectorEditor } from "components/Editors/ReportFieldSelectorEditor/ReportFieldSelectorEditor";
    export interface INumericFieldFilterProps extends IDataFilterFieldCommonProps<NumericField> {
    }
    export function NumericFieldFilter({ onChange, personalization, validation, value }: INumericFieldFilterProps): JSX.Element;
    export interface INumericFieldFilterEditorProps extends IEditorProps {
    }
    export function NumericFieldFilterEditor({ child, path, onChange, hideInputLabel }: INumericFieldFilterEditorProps): JSX.Element;
    export interface INumericFieldsFilterProps extends IDataFilterFieldCommonProps<NumericFields> {
    }
    export function NumericFieldsFilter({ onChange, personalization, validation, value }: INumericFieldsFilterProps): JSX.Element;
    export interface INumericFieldsFilterEditorProps extends IEditorProps {
    }
    export function NumericFieldsFilterEditor({ child, path, onChange, hideInputLabel }: INumericFieldsFilterEditorProps): JSX.Element;
    interface IEditorMap {
        [key: string]: React.FunctionComponent<IEditorProps> | React.ComponentClass<IEditorProps>;
    }
    export const EditorMap: IEditorMap;
    export interface IEditorWrapperProps {
        /**
         * Property child data to render.
         */
        child: IPropertyChild;
        /**
         * ID / key of the rendered node. Also probably used to track
         * some kind of model updates. Derived from the node name and/or depth if not provided.
         */
        id?: string;
        /**
         * How to handle these state updates is kind of a key challenge
         * in this exercise - marked as optional since it's being provided by
         * context within EditorChild component
         */
        onChange?: IPropertyChangeHandler;
        depth?: number;
        hideInputLabel?: boolean;
        path: string[];
        /**
         * `true` if the editor should trigger a dialog handler on it's first render.
         * Take care not to create a loop with this in editor impl.
         *
         * Currently only used in DataDescriptionPathEditor,
         */
        showDialogOnRender?: boolean;
    }
    export interface IEditorProps extends IEditorWrapperProps {
        /**
         * Override as mandatory to avoid certain kinds of type errors
         */
        onChange: IPropertyChangeHandler;
    }
    interface IEditorState {
        hasError: boolean;
    }
    /**
     * A generic component for "Properties" __type child component.
     *
     * This is an entry-point component to render all other editor types.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export class Editor extends React.Component<IEditorWrapperProps, IEditorState> {
        constructor(props: IEditorWrapperProps);
        static getDerivedStateFromError(error: React.ErrorInfo): {
            hasError: boolean;
        };
        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
        render(): JSX.Element | null;
    }
    export function getChildId(child: IPropertyChild, depth?: number): string;
    export type RenderLegacyEditor = (options: LegacyEditorOptions) => void;
    export interface ILegacyEditorRenderProps {
        targetRef: React.MutableRefObject<HTMLElement>;
        instanceId?: string;
        wrapperStyle: React.CSSProperties;
    }
    export interface ILegacyEditorProps extends IEditorProps {
        /** Pass specific content to be rendered into */
        content?: (props: ILegacyEditorRenderProps) => React.ReactNode;
        idPrefix?: string;
        /** Custom control options for cases where some things are defined or rendered on the React side */
        options?: any;
        /** To specify a min height based on some configuration for a particular editor */
        minHeight?: number;
    }
    /**
     * Legacy Editor wrapper component. Loads legacy editor HTML restfully, and renders it into a container element.
     *
     * It also renders expected editor height to minimize impact on surrounding editors.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function LegacyEditor({ child: node, path, content, idPrefix, options, minHeight, hideInputLabel, }: ILegacyEditorProps): JSX.Element;
    /**
     * These are rendered type-script to type-script, no MVC API calls.
     */
    export const ClientSideLegacyEditors: string[];
    /**
     * An object with MvcEditorName keys, with values being the expected height
     * of the user. Having this height is a temporary workaround for the poor
     * user experience of these flattening and making the UI wiggle dramatically
     * during the rendering & process of these editors.
     */
    export const LegacyEditorHeights: {
        RichTextInputEditor: number;
        TypePickerEditor: number;
        ReportFieldSelectorEditor: number;
        TextMergeFieldSelectorEditorView: number;
    };
    export const LegacyEditorList: string[];
    export interface LegacyEditorOptions {
        node: ContextProviderNode;
        path: string[];
        target: HTMLElement;
        instanceId: string;
        tabIndex: number;
        editingContextId: string;
        mappingContext: MappingContext;
        options?: any;
        afterInit: () => void;
        getCleanup: (onCleanup: () => void) => void;
    }
    export function getEditingContext(props: IHasPropertyEditorProps): string;
    export type ShowDialogueHandler = (action: IShowDialogAction) => void | Promise<void>;
    /**
     * Quick action handler function
     */
    export type QuickChangeActionHandler = (child: IPropertyChild, action: IQuickChangeAction, onDone?: () => void) => void;
    export type ShowDialogPropertiesHandler = (options: DialogPropertiesOptions) => void;
    export type AddSaveCallbackHandler = (path: string[], callback: BeforeSaveCallback) => void;
    export interface IPropertyEditorContext {
        editingContextId: string;
        /** this is something like a `formDesignerSessionInfoId`, not Decisions SessionId */
        sessionId: string;
        mappingContext: MappingContext;
        onChange: IPropertyChangeHandler;
        onQuickChange: QuickChangeActionHandler;
        onShowDialogue: ShowDialogueHandler;
        onShowDialogProperties: ShowDialogPropertiesHandler;
        refreshContext: () => void;
        refresh: () => void;
        addBeforeSaveCallback: AddSaveCallbackHandler;
        searchString: string;
        renderLegacyEditor?: RenderLegacyEditor;
    }
    /** default context, exported really just for unit tests. */
    export const defaultPropertyEditorContext: IPropertyEditorContext;
    export const PropertyEditorContext: React.Context<IPropertyEditorContext>;
    interface IPropertyEditorContextProviderValue {
        awaitable: IAwaitableContext;
        children: React.ReactNode;
        tabs: ITabbingContext;
        value: IPropertyEditorContext;
        editorScrollContainer: HTMLElement | null;
    }
    export function PropertyEditorContextProvider({ awaitable, children, tabs, value, editorScrollContainer, }: IPropertyEditorContextProviderValue): JSX.Element;
    /**
     * interface for configuring a context via this helper
     *
     * TODO too many of these are probably optional
     */
    export interface IHasPropertyEditorProps {
        sessionId?: string;
        mappingContext?: MappingContext;
        editingContextId?: string;
        onShowDialogue?: ShowDialogueHandler;
        snapshot?: ContextProviderNode;
        onQuickChange?: QuickChangeActionHandler;
        onShowDialogProperties?: ShowDialogPropertiesHandler;
        addBeforeSaveCallback?: AddSaveCallbackHandler;
        renderLegacyEditor?: RenderLegacyEditor;
        /** true to force loading state */
        loading?: {
            isLoading: boolean;
            height: number;
        };
    }
    export function propertyEditorContextHelper(props: IHasPropertyEditorProps, defaultContext: IPropertyEditorContext, searchString: string): IPropertyEditorContext;
    interface IMappingRowExpandIconProps extends Omit<IIconButtonProps, 'iconClassName'> {
        showIcon?: boolean;
        open?: boolean;
    }
    export function MappingRowExpandIcon({ showIcon, onClick, open }: IMappingRowExpandIconProps): JSX.Element;
    interface IMappingRowDataTypeProps {
        dataType: string;
    }
    export function MappingRowDataType(props: IMappingRowDataTypeProps): JSX.Element;
    export interface IStepMappingEditorProps {
        contextNode: ContextProviderNode;
        path: string[];
        isEditorPanelOpen: boolean;
        rowRef: MutableRefObject<HTMLDivElement | null>;
        onClose: () => void;
        isForBuildData?: boolean;
        editingContextId?: string;
    }
    export const getOverlayClassName: (className: string, isForBuildData?: boolean) => string;
    export function StepMappingEditor({ contextNode, path, isEditorPanelOpen, rowRef, onClose, isForBuildData, editingContextId, }: IStepMappingEditorProps): JSX.Element;
    interface IStepMappedValueTextProps {
        className?: string;
        node: ContextProviderNode;
        currentMapping: string;
    }
    /**
     * Simple Text readout of a node's value
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function StepMappedValueText({ className, node, currentMapping }: IStepMappedValueTextProps): JSX.Element | null;
    export interface IStepMappingRowProps {
        contextNode: ContextProviderNode;
        path: string[];
        showRemoveIcon?: boolean;
        hasDragStarted?: boolean;
    }
    /**
     *
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export const getItemClassNames: (className: string, hasValidation?: boolean) => string;
    export const getRowClassNames: (className: string, isNodeSelected?: boolean, isNodeHovered?: boolean) => string;
    export const MAPPING_ROW_PADDING = 0.3125;
    export function StepMappingRow({ contextNode, path, showRemoveIcon, hasDragStarted }: IStepMappingRowProps): JSX.Element;
    interface IFlowMappingRowProps {
        dataDescriptionNode: NestedDataDesc;
        path: string[];
        validationIssues?: Map<string, ValidationIssue[]>;
        isForInput?: boolean;
        isConstantData?: boolean;
    }
    export const getDataDescRowClassName: (isConstantDataDesc?: boolean) => string;
    /**
     * Particular row in the flow data column
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function FlowMappingRow({ path, dataDescriptionNode, validationIssues, isForInput, isConstantData, }: IFlowMappingRowProps): JSX.Element;
    export { FlowMappingRow } from "domains/designers/FlowDesigner/MappingEditor/FlowMappingRow/FlowMappingRow";
    type BarWidth = 'normal' | 'compact';
    interface IScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
        barWidth?: BarWidth;
        /**
         * top of the element to make visible
         */
        scrollToY?: number;
        /**
         * how big is the element to make visible? 100% arbitrary default of 1 rem
         */
        scrollToYOffset?: number;
        /**
         * for more reliable multiple scrollTos, pass a target name, otherwise it will only
         * scroll to 1x for a particular passed scrollToY.
         */
        scrollToName?: string;
    }
    /**
     * Wrapper for custom scrollbar to encapsulate common bahavior use cases and styles
     *
     * TODO someday will hopefully have option to render scrollbar as overlay.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function ScrollContainer({ barWidth, children, className, scrollToY, scrollToName, scrollToYOffset, // 100% arbitrary default of 1 rem
    ...htmlProps }: IScrollContainerProps): JSX.Element;
    export interface IMappingColumnProps {
        title: string;
        filter: MappingPanelFilter;
        search: string;
        children?: React.ReactNode;
        position: MappingPanelPosition;
        side: MappingPanelType;
        className?: string;
        selectedNodeIds?: string[];
        hoverNodeIds?: string[];
    }
    /**
     * A component which renders one of the data trees, depending on config of editor,
     * e.g. input / output
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingColumn({ children, className, filter, position, search, side, title }: IMappingColumnProps): JSX.Element;
    export { MappingColumn } from "domains/designers/FlowDesigner/MappingEditor/MappingColumn/MappingColumn";
    export type { IMappingColumnProps } from "domains/designers/FlowDesigner/MappingEditor/MappingColumn/MappingColumn";
    export interface IFlowMappingColumnProps {
        validationIssues?: Map<string, ValidationIssue[]>;
        className?: string;
    }
    /**
     * Renders flow data side of mapping editor
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function FlowMappingColumn({ className, validationIssues }: IFlowMappingColumnProps): JSX.Element;
    export { FlowMappingColumn } from "domains/designers/FlowDesigner/MappingEditor/FlowMappingColumn/FlowMappingColumn";
    export { StepMappingRow } from "domains/designers/FlowDesigner/MappingEditor/StepMappingRow/StepMappingRow";
    export interface IStepMappingColumnProps {
        nodes: ContextProviderNode[];
        className?: string;
    }
    /**
     * Renders step data side of mapping editor.
     *
     * It will dispatch some actions to the mapping editor, but primarily, editors will interact with
     * the ContextProviderService / PropertyEditorService at the root via PropertyEditorContext
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function StepMappingColumn({ className, nodes }: IStepMappingColumnProps): JSX.Element;
    export { StepMappingColumn } from "domains/designers/FlowDesigner/MappingEditor/StepMappingColumn/StepMappingColumn";
    export interface IMappingEditorProps extends IAddBeforeSavePromises {
        flowSessionId: string;
        flowStepId: string;
        forInput?: boolean;
        outputMappingContextId?: string;
        forCustom?: boolean;
        /** some designers have a sessionId, and some of their editors will depend on it */
        sessionId?: string;
        mappingContext?: MappingContext;
        /**
         * A callback that needs to be _invoked_ and `await`ed before proceeding.
         */
        /**
         * Set the tab index for a particular property grid.
         * Editors will share the tabindex, and will be navigated by DOM order.
         */
        tabIndex?: number;
        /**
         * Kind of a hack, but tell parent what the editing context id is, so it's managed here, but
         * can be referenced outside.
         */
        setEditingContextId?: (id: string) => void;
    }
    /**
     * Mapping editor for mapping inputs/outputs to flow steps
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingEditor(props: IMappingEditorProps): JSX.Element;
    export interface IUseEditComplete {
        editingContextId: string;
    }
    export interface IAddBeforeSavePromises {
        /** A promise that needs to be `await`ed proceeding */
        addBeforeSavePromise?: (id: string, promise: Promise<any>) => void;
        /** Remove a promise that needs to be `await`ed proceeding. */
        removeBeforeSavePromise?: (id: string) => void;
    }
    /**
     * Hook to track editing promises to make sure they complete prior to EditComplete being called.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function useEditComplete({ editingContextId }: IUseEditComplete): {
        addBeforeSavePromise: (id: string, promise: Promise<any>) => Map<string, Promise<any>>;
        editComplete: (completeType: EditCompleteType) => Promise<void>;
        removeBeforeSavePromise: (id: string) => boolean;
    };
    /**
     * Error fallback that makes sure the error is logged and renders a user
     * friendly message and a way to recover.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingEditorErrorFallback({ error, resetErrorBoundary }: FallbackProps): JSX.Element;
    export interface IMappingEditorDialogProps {
        editorInfo: FlowStepMappingEditorInformation;
        onClose: () => void;
        forCustom?: boolean;
    }
    /**
     * Dialog wrapper around the Mapping Editor.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function MappingEditorDialog({ editorInfo, onClose, forCustom }: IMappingEditorDialogProps): JSX.Element;
    export interface EditorLinkModel {
        info: FlowStepEditorInformation;
        action: (e: any) => any;
    }
    interface IEditorLinksProps extends React.HTMLProps<{}> {
        links: EditorLinkModel[];
        actions?: ActionLinkModel[];
    }
    /**
     * Editor Links above Property Grid in some places.
     *
     * FIXME seems these are Flow Designer specific, and not generic to Property Grid, and should be moved.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorLinks({ links, actions }: IEditorLinksProps): JSX.Element | null;
    interface IEditorCategoryContentsProps {
        child: ContextProviderNode;
        path: string[];
        depth: number;
        name: string;
        usePopupEditor?: boolean;
        className?: string;
        renderHidden?: boolean;
    }
    /**
     * Content component for Editor Category, mostly to DRY up and simplify it's parent.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function EditorCategoryContents({ child, name, path, depth, renderHidden, usePopupEditor, }: IEditorCategoryContentsProps): JSX.Element;
    export interface UseShowContentsInDialogOptions {
        openByDefault?: boolean;
        name: string;
        path: string[];
        width?: number;
        height?: number;
        onClose?: () => void;
    }
    export function useShowContentsInDialog({ openByDefault, name, onClose, path, height, width, }: UseShowContentsInDialogOptions): {
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
        setOpen: () => void;
        setClosed: () => void;
        toggleOpen: () => void;
        contentTarget: HTMLElement | null;
        showDialogCallback: () => void;
    };
    interface IEditorCategoryProps extends React.HTMLProps<{}> {
        child: ContextProviderNode;
        path: string[];
        depth: number;
    }
    export const EDITOR_CATEGORY_CLASS = "dpc-editor-category";
    /**
     * Expandable Editing Group Category
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function EditorCategory({ child, depth, path }: IEditorCategoryProps): JSX.Element;
    interface IUnknownMappingFieldProps extends React.HTMLProps<{}> {
        path: string[];
        child: ContextProviderNode;
        toDos?: boolean;
        validationIssues: ValidationIssue[];
        onPickClick: () => {};
        isList?: boolean;
    }
    /**
     * A field for displaying and assigning an unknown mapping type.
     *
     * TODO this is actually specific to Property Grid, so it should probably live there.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function UnknownMappingField({ child, path, isList, onPickClick, validationIssues }: IUnknownMappingFieldProps): JSX.Element | null;
    interface MappingSuggestion {
        value: string;
        label: string;
        info: string;
        mappingType: string;
    }
    export function buildSuggestList(fieldText: string, options: DataPair[], entityTypeName: string, isList?: boolean): MappingSuggestion[];
    export function getMappingTypeForString(fieldText: string): InputMappingConstants.MAPPING_NULL | InputMappingConstants.MAPPING_IGNORE | InputMappingConstants.MAPPING_CONSTANT;
    export function buildConstSuggestion(fieldText: string, entityTypeName: string): MappingSuggestion | undefined;
    interface IFieldTypeDisplayProps extends React.HTMLProps<{}> {
        entityTypeName?: string;
        isList?: boolean;
    }
    /**
     * Show type name for editors such as a mapping editor.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function FieldTypeDisplay({ children, className, entityTypeName, isList }: IFieldTypeDisplayProps): JSX.Element;
    interface IListMappingItemProps {
        node: ContextProviderNode;
        path: string[];
        onChange: IPropertyChangeHandler;
    }
    /**
     * Mapping Type Selector for an item with in a build-array or similar mapping.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ListMappingItem({ node, onChange, path }: IListMappingItemProps): JSX.Element;
    interface IListMappingSelectorProps {
        child: ContextProviderNode;
        path: string[];
        fieldPath: string[];
        mapping: string;
    }
    /**
     * A set of list mappings, e.g. items of a 'build array' mapping.
     *
     * TODO someday, it would be great to allow drag/drop reorder of these. No way to reorder them now.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ListMappingSelector({ child, path, fieldPath, mapping }: IListMappingSelectorProps): JSX.Element;
    interface IComputeDateMappingProps {
        node: ContextProviderNode;
        path: string[];
    }
    /**
     * Nested mapping selectors ComputeData mapping, which is a compound mapping.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ComputeDateMapping({ node, path }: IComputeDateMappingProps): JSX.Element;
    interface IMappingTypeSelectorProps extends React.HTMLProps<{}> {
        child: IPropertyChild;
        childId?: string;
        path: string[];
    }
    /**
     * Mapping Type Selector component.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function MappingTypeSelector({ child, childId, path, children }: IMappingTypeSelectorProps): JSX.Element;
    export * from "components/property-editors/MappingTypeSelector/MappingTypeSelector";
    interface ContextProviderNodeProps {
        nodes?: ContextProviderNode[];
        depth?: number;
        path?: string[];
        nodeIndex?: number;
        skipSort?: boolean;
        /** Pass to show a skeleton loader instead of contents */
        isLoading?: boolean;
        expectedHeight?: number;
        /** true if it's an embedded property grid */
        embedded?: boolean;
    }
    export const EditorChildren: React.MemoExoticComponent<typeof _EditorChildren>;
    /**
     * Ideally these would be tidied up as actual components,
     * but with function components and fragments, it's become a semantic distinction.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    function _EditorChildren(props: ContextProviderNodeProps): JSX.Element | null;
    export interface IPropertyGridButtonsProps {
        okActionName?: string;
        showLoadFromDataButton?: boolean;
        hasChildren?: boolean;
        cancelActionName?: string;
        onOk?: () => void;
        onCancel?: () => void;
        onLoadData?: () => void;
        disableSave?: boolean;
    }
    /**
     * Property Grid Buttons. Since dialog itself is legacy, relying on legacy dialog buttons for now.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PropertyGridButtons({ cancelActionName, disableSave, hasChildren, okActionName, onCancel, onLoadData, onOk, showLoadFromDataButton, }: IPropertyGridButtonsProps): JSX.Element;
    export interface IPropertyChangeHandler {
        (value: any, path: string[]): void | Promise<void>;
    }
    export type GetSubPropertiesSnapshot = (action: IShowDialogAction) => void;
    export type BeforeSaveCallback = () => Promise<void> | void;
    /** this is defined client side in fd.toolbox.ts in Web.Core */
    export interface ActionLinkInfo {
        Name: string;
        DisplayType: ActionDisplayType;
    }
    /** this is defined client side in fd.toolbox.ts in Web.Core */
    export interface ActionLinkModel {
        info: ActionLinkInfo;
        action: () => void;
    }
    /**
     * Quick changes are things like one-click remove actions, that this implementation
     * does not know how to do, yet. (Since it doesn't have access to server proxies, yet.)
     */
    export interface IQuickChangeAction {
        /** Unique action name */
        name: string;
        path: string[];
        index?: number;
        value?: any;
    }
    /**
     * Config to show react contents in a dialog
     * See / sync with definition in pg.dialogEditorHelper.ts
     */
    export interface DialogPropertiesOptions {
        /** Dialog title */
        title: string;
        /** Dialog ID */
        id: string;
        /**
         * Passes a target element for React to render into via "createPortal".
         * This seems less straightforward than passing an element here from React for jQuery to claim,
         * but that results in errors. React insists DOM children it un-mounts have the expected parent.
         */
        setContentTarget: (target: HTMLElement) => void;
        /** Close callback */
        onClose?: () => void;
        width?: number;
        height?: number;
    }
    export interface IShowDialogAction {
        node: IPropertyChild;
        path: string[];
        options?: any;
        name?: any;
        onDone?: () => void;
        editingContextId: string;
        onOpen?: () => void;
    }
    export interface NumberFormatOptions {
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
    }
    export interface NumberFormatOptions {
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
    }
    export interface EmbeddedPropertyGridProps extends IReportsChildCountProps {
        parentSearch: string;
        hideTopCategory: boolean;
    }
    /**
     * Props to render Property Grid and respond to its changes.
     *
     * TODO limit these, now that we can make API calls with ES Module proxies. We need to be able to use this from React
     * without all the MVC props for simple use-cases. We'll probably leave all of them, but make many optional, so we
     * can respond to some changes on the MVC side.
     */
    export interface IPropertyGridProps extends IAddBeforeSavePromises {
        /**
         * Providing an editingContextId makes this fetch snapshots itself.
         */
        editingContextId?: string;
        /** some designers have a sessionId, and some of their editors will depend on it */
        sessionId?: string;
        /**
         * Providing an snapshot overwrites any locally fetched snapshots.
         */
        snapshot?: ContextProviderNode;
        /**
         * pass values back to MVC to handle in one shot, like dropping a value from a list
         * @deprecated - shouldn't be necessary now we have REST helpers in this project.
         */
        onQuickChange?: QuickChangeActionHandler;
        editorLinks?: any;
        editorActions?: any;
        mappingContext?: MappingContext;
        onShowDialogue?: ShowDialogueHandler;
        onShowDialogProperties?: ShowDialogPropertiesHandler;
        /** Define if you need control buttons, otherwise can skip */
        controlButtonProps?: IPropertyGridButtonsProps;
        /** Override default behavior based on child-count */
        hideSearch?: boolean;
        numberFormatOptions?: NumberFormatOptions;
        /**
         * Pass Validation issues that are found up to the parent context.
         *
         * TODO - likely won't need this, per changes to property-grid.ts#updateValidationIssues
         * which ensures they are fresh from the server before proceeding.
         */
        passValidation?: (issues: NodeValidationIssues) => void;
        /**
         * A callback that needs to be _invoked_ and `await`ed before proceeding.
         */
        addBeforeSaveCallback?: (path: string[], callback: BeforeSaveCallback) => void;
        onUnMount?: () => void;
        /**
         * if this is embedded within another editor / parent property grid.
         */
        embeddedProps?: EmbeddedPropertyGridProps;
        /**
         * Set the tab index for a particular property grid.
         * Editors will share the tabindex, and will be navigated by DOM order.
         */
        tabIndex?: number;
        renderLegacyEditor?: (options: LegacyEditorOptions) => void;
        /**
         * Some Places has their own custom validation
         */
        hideValidation?: boolean;
        /**
         * Pass this index to render only one node at a time
         */
        nodeIndex?: number;
        /**In case where we do not want to render entire pg but a particular category */
        categoryToRender?: string;
        /** `true` or `undefined` to hide a root category if there's only one; `false` to show it. */
        hideTopCategory?: boolean;
        /** true to force loading state */
        loading?: {
            isLoading: boolean;
            height: number;
        };
    }
    /**
     * Property Grid Component, which fetches and maintains a ContextProviderNode model.
     *
     * @param props to render
     */
    export function PropertyGrid(props: IPropertyGridProps): JSX.Element;
    export function loadCustomComponents(callback: Function): Promise<void>;
    export const PORTAL_RESIZE_EVENT = "portalResize";
    export function usePortalResize(listener: EventListenerOrEventListenerObject): void;
    export type IActionBarItemClick = (e: {
        item: IActionBarItemData;
        element: HTMLButtonElement | null;
    }) => void;
    export interface IActionBarItemData {
        id: string;
        label: string;
        /**
         * Used for priority resize. Item with greater priority will be hidden later if not enough room.
         */
        isGroup?: boolean;
        priority?: number;
        isPrimary: boolean;
        order?: number;
    }
    export interface IActionBarItemProps {
        item: IActionBarItemData;
        className?: string;
        onClick: IActionBarItemClick;
    }
    export function ActionBarItem({ className, item, onClick }: IActionBarItemProps): JSX.Element;
    export interface IActionBarItems {
        actions: IActionBarItemData[];
        actionClassName?: string;
        onClick: IActionBarItemClick;
    }
    export function ActionBarItems({ actions, actionClassName: className, onClick }: IActionBarItems): JSX.Element;
    export interface IActionBarProps {
        className?: string;
        actionClassName?: string;
        primaryActionsClassName?: string;
        secondaryActionsClassName?: string;
        actionGroups: IActionBarItemData[];
        onClick: IActionBarItemClick;
    }
    export function ActionsBar({ actionGroups, onClick, className, actionClassName, primaryActionsClassName, secondaryActionsClassName, }: IActionBarProps): JSX.Element;
    export interface IEntityDetailsProps {
        entityId: string;
        typeName: string;
        shortTypeName: string;
        entityName: string;
        previewUrl?: string;
        entityProperties?: DataPair[];
        description?: string;
        loadValidationIssues: boolean;
        history?: DetailsHistory[];
        dependencyFrom?: EntityHeaderDto[];
        dependencyTo?: EntityHeaderDto[];
        customPreview?: string;
        actionBarProps: IActionBarProps;
        getActionHolder?: (element: HTMLElement) => void;
        getUploadHolder?: (element: HTMLElement) => void;
        downloadDocument?: () => void;
        registrationClick: (id: string, typeName: string, clickEvent: MouseEvent) => void;
    }
    export interface FlexGridOptions {
        xs?: number;
        xm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    }
    export function getFlexGridClasses({ xs, xm, md, lg, xl }: FlexGridOptions): string;
    export const headerPanelOptions: (type: string, title: string) => IHeaderPanelProps;
    export function getDetailsItemClasses(detailsClassItem: string, isHeader: boolean): string;
    export function getPanelClasses(panelSide: string, xs: number, md: number): string;
    interface PreviewPanelProps {
        previewUrl: string;
    }
    export function PreviewPanel({ previewUrl }: PreviewPanelProps): JSX.Element;
    interface DescriptionPanelProps {
        description?: string;
    }
    export function DescriptionPanel({ description }: DescriptionPanelProps): JSX.Element;
    interface FileDownloaderProps {
        onClick: () => void;
    }
    export function FileDownloader({ onClick }: FileDownloaderProps): JSX.Element;
    export interface DetailsFileUploaderInterface {
        getUploadHolder?: (element: HTMLElement) => void;
        downloadDocument?: () => void;
    }
    export function DetailsFileLoader({ getUploadHolder, downloadDocument }: DetailsFileUploaderInterface): JSX.Element;
    export function PrimaryActions(props: IActionBarProps): JSX.Element;
    export function EmptyPanel(): JSX.Element;
    interface ValidationPanelProps {
        validationIssues?: ValidationIssue[];
        loadValidationIssues?: boolean;
        entityId: string;
        typeName: string;
    }
    export function ValidationPanel({ loadValidationIssues, entityId, typeName }: ValidationPanelProps): JSX.Element;
    interface IEntityHeaderViewProps extends React.HTMLProps<HTMLLIElement> {
        dependency: EntityHeaderDataObject;
        onEntityClick?: (id: string, typeName: string, clickEvent: MouseEvent) => void;
    }
    export function EntityHeaderView({ dependency, onEntityClick: registrationClick, ...props }: IEntityHeaderViewProps): JSX.Element;
    export function DependenciesList({ dependencies, registrationClick }: any): JSX.Element;
    export const detailsDependenciesClass = "dp-entitydetails-dependency";
    interface DependenciesPanelProps {
        dependencyTo?: EntityHeaderDto[];
        dependencyFrom?: EntityHeaderDto[];
        registrationClick: (id: string, typeName: string, clickEvent: MouseEvent) => void;
    }
    export function DependenciesPanel({ dependencyTo, dependencyFrom, registrationClick }: DependenciesPanelProps): JSX.Element;
    interface HistoryPanelProps {
        history?: DetailsHistory[];
    }
    export function HistoryPanel({ history }: HistoryPanelProps): JSX.Element;
    export function PrimaryDetails(props: IEntityDetailsProps): JSX.Element;
    export function ActionsPanel({ getActionHolder }: any): JSX.Element;
    export interface IEntityPropertiesProps {
        properties?: DataPair[];
    }
    export function EntityProperties({ properties }: IEntityPropertiesProps): JSX.Element;
    interface PropertiesPanelProps {
        properties?: DataPair[];
    }
    export function PropertiesPanel({ properties }: PropertiesPanelProps): JSX.Element;
    interface PropertiesPanelProps {
        preview?: string;
    }
    export function CustomPreviewPanel({ preview }: PropertiesPanelProps): JSX.Element;
    interface CurrentTagProps {
        currentTag: TagData;
        removeTagClick: (value: string) => void;
    }
    export function CurrentTag({ currentTag, removeTagClick }: CurrentTagProps): JSX.Element;
    interface CurrentTagsListProps {
        currentTags: TagData[];
        removeTagClick: (value: string) => void;
    }
    export function CurrentTagsList({ currentTags, removeTagClick }: CurrentTagsListProps): JSX.Element;
    export interface IConfirmAddCalloutProps {
        popupOpen: boolean;
        closePopup: () => void;
        linkRef: React.RefObject<HTMLElement>;
        newTagName: string;
        onSubmit: () => void;
    }
    export function ConfirmAddCallout({ popupOpen, closePopup, linkRef, onSubmit, newTagName }: IConfirmAddCalloutProps): JSX.Element;
    export interface TagsEditorProps {
        objectId: string;
        objectType: string;
        objectShortType: string;
    }
    export function TagsEditor({ objectId, objectType, objectShortType }: TagsEditorProps): JSX.Element;
    export function TagsPanel({ objectId, objectShortType, objectType, }: TagsEditorProps): JSX.Element;
    export function SecondaryDetails(props: IEntityDetailsProps): JSX.Element;
    export const ENTITY_DETAILS_ID = "ENTITY_DETAILS_ID";
    export function EntityDetails(props: IEntityDetailsProps): JSX.Element;
    export interface ILoadingProps {
        className?: string;
    }
    export function Loading(props: ILoadingProps): JSX.Element;
    export interface IPortalActionLinkItem extends IActionLinkItem {
        order: number;
    }
    export interface IPortalActionsMenuProps extends React.HTMLProps<{}> {
        isOpen: boolean;
        email: string;
        timeZone?: string;
        actions: IActionLinkItem[];
        sourceRef: React.MutableRefObject<HTMLElement | null>;
        onClose: () => void;
        loading?: boolean;
    }
    /**
     * Actions menu where user email and actions are displayed.
     *
     * Copyright (c) 2019 Decisions All Rights Reserved
     */
    export function PortalActionsMenu({ onClose, actions: propActions, isOpen, sourceRef, email, timeZone, loading, }: IPortalActionsMenuProps): JSX.Element;
    export interface IBreadcrumPathProps {
        pathElem: FolderPathElement;
        onElementClick: (folderId: string) => void;
    }
    export function BreadcrumbsPathItem({ pathElem, onElementClick }: IBreadcrumPathProps): JSX.Element;
    export interface IPageLinkPathProps {
        pageLinkOption: PageLinkPathProps;
        currentPageId: string;
        isInLayer?: boolean;
        isGroup?: boolean;
        onElementClick: (folderId: string, pageName?: string | undefined) => void;
    }
    export function getPageLinkItemsClassNames(isCurrent: boolean, isGroup?: boolean, isInLayer?: boolean | null | undefined): string;
    export function getPageLinkTextClassNames(isCurrent?: boolean, isGroup?: boolean, isInLayer?: boolean | null | undefined): string;
    export function PageLinkPath({ pageLinkOption, currentPageId, onElementClick, isGroup }: IPageLinkPathProps): JSX.Element;
    export interface PageLinkPathGroupProps {
        groupName: string;
        group: PageLinkPathProps[];
        currentFolderId: string;
        onElementClick: (folderID: string, folderName?: string) => void;
    }
    export function PageLinkPathGroup({ groupName, group, currentFolderId, onElementClick }: PageLinkPathGroupProps): JSX.Element | null;
    export const ON_PAGELINKS_RESIZE_EVENT = "onPageLinksResizeEvent";
    export const SHOW_DATE_RANGE_EVENT = "SHOW_DATE_RANGE";
    export const HIDE_DATE_RANGE_EVENT = "HIDE_DATE_RANGE";
    export interface IPageLinkProps {
        className?: string;
        currentFolderId: string;
        pagelink: PageLinkPathProps[];
        onElementClick: (folderID: string, folderName?: string) => void;
    }
    export interface PageLinkPathProps {
        isCurrent: boolean;
        name: string;
    }
    export const PageLinkClass = "dp-pagelinks";
    export function PageLink({ className, currentFolderId, pagelink, onElementClick }: IPageLinkProps): JSX.Element;
    export const ON_BREADCRUMBS_COLLAPSED_EVENT = "onBreadcrumbsCollapsedEvent";
    export interface BreadcrumbsProps {
        className?: string;
        homeFolderId?: string;
        folderPathArray: FolderPathElement[];
        onElementClick: (folderId: string) => void;
    }
    export interface FolderPathElement {
        folderName: string;
        folderId?: string | null;
        isCollapse?: boolean | null;
        isGroup?: boolean | null;
    }
    export const baseBlockName = "dp-breadcrumbs";
    export function Breadcrumbs({ className, homeFolderId, folderPathArray, onElementClick }: BreadcrumbsProps): JSX.Element;
    export interface NavigationPanelProps {
        homeFolderId?: string;
        folderPathArray: FolderPathElement[];
        onElementClick: (folderID: string, folderName?: string) => void;
        pagelink: PageLinkPathProps[];
        currentFolderId: string;
    }
    export const ON_NAVIGATION_PANEL_RESIZE_EVENT = "onNavigationPanelResize";
    export function NavigationPanel(options: NavigationPanelProps): JSX.Element;
    export const PLACEHOLDER_GROUP_ID: string;
    export const PLACEHOLDER_SORT_ID: string;
    export const ALLCOLUMNS_PLACEHOLDER_ID: string;
    export const ALLCOLUMNS_PLACEHOLDER_LABEL: string;
    export const PLACEHOLDER_FILTER_COLUMN = "placeholderFilter";
    export type SortType = 'ASC' | 'DESC' | undefined;
    export const GRID_CLASS = "dp-report-grid-viewer";
    export const REPORT_TREE_CLASS = "dp-report-tree-viewer";
    export const GRID_ROW_NUMBER_WIDTH = 50;
    export const GRID_ROW_ICON_WIDTH = 60;
    export const GRID_ROW_MULTISELECT_WIDTH = 50;
    export const GRID_ROW_NUMBER_ID = "gridRowNumber";
    export const TYPE_ICON_COLUMN_NAME = "typeIconColumn";
    export const DEFAULT_FOREGROUND_SELECTED_COLOR = "black";
    export const COLUMN_SPLITTER = "_SPLITTER_";
    export const SORT_ORDER_SPLITTER = "@";
    export const FIELD_PREFIX = "ReportField:";
    export const BOOL_TYPE = "System.Boolean";
    export const DATE_TIME_TYPE = "System.DateTime";
    export const DEFAULT_ACTIVE_CELL_INFO: IActiveCellInfo;
    export const MIN_DATE_STRING = "01/01/0001 00:00:00";
    export const DEFAULT_DATE_TIME_FORMAT = "M/d/yyyy H:mm:ss";
    export const DEFAULT_DATE_FORMAT = "M/d/yyyy";
    export const INVALID_CELL_DEFAULT_MESSAGE = "Input string was not in correct format.";
    export const EDITING_CELL_DATE_CALENDAR_CLASS = "dp-grid-cell-date-calendar";
    export const FILTER_LAYER_BOTTOM_SPACE = 45;
    export const INITIAL_HEADER_SPACE = 30;
    export const MIN_COLUMN_WIDTH = 50;
    export const GLOBAL_FILTER_COMBOBOX: {
        id: string;
        name: string;
        label: string;
    };
    export const DEFAULT_SORT = "ASC";
    export interface IReportViewerProps {
        currentView?: IReportViews;
        gridViewProps?: IReportGridContainerProps;
    }
    export enum IReportViews {
        Grid = 0,
        Hierarchical = 1
    }
    interface AggregatedDataItemInfo {
        Label: string;
        Value: any;
        Navigable: boolean;
        Format: string;
        Color: any;
        UseCustomColor: boolean;
        FormattedValue: string;
    }
    interface AggregationGroupInfo {
        PathInfo: string;
        AggregationDataGroup: {
            Name: string;
            AggregationDataItem: AggregatedDataItemInfo[];
        }[];
    }
    export enum GridRowClickActionType {
        ShowSlider = 0,
        ShowActions = 1,
        DefaultAction = 2,
        NoActions = 3
    }
    export interface IActiveCellInfo {
        isEditing: boolean;
        id: string;
        hasValidation: boolean;
        selectLastCell?: boolean;
    }
    export interface IReportGridCommonProps {
        autoSelectFirstRow?: boolean;
        selectedRowId?: string;
        showRowNumber?: boolean;
        hasRowTypeIcon?: boolean;
        onDefaultGridActionClick?: (action: {
            entityId: string;
            entityType: string;
        } | undefined, element: Element, rowId: string) => void;
        onContextMenu?: (info: ISelectedRowInfo) => void;
        availableWidth?: number;
        gridIconType?: GridIconType;
        isMultiSelectOn?: boolean;
        usePercentageWidthUnit?: boolean;
        selectedRows?: string[];
        selectAll?: boolean;
        onRowSelectionChange?: (info: ISelectedRowInfo) => void;
        onUpdateSelectedRow?: (rowId: string) => void;
        onMultiSelectChange?: (info: IMultiSelectionChangeInfo) => void;
        onMultiSelectionRangeChange?: (info: IMultiSelectRowsInfo[], selectedIds?: string[]) => void;
        showMultiSelectMenu?: (selectedRows: IMultiSelectRowsInfo[]) => void;
        gridType: GridType;
        showLinkOnHover?: boolean;
        gridColumnColoring?: ReportViewerCellColorInfo[];
        isBroadcastingSelection?: boolean;
        showSelectedRowIndicator?: boolean;
        rowRightClickActionType: GridRowClickActionType;
        rowLeftClickActionType: GridRowClickActionType;
        selectedRowStyle?: SelectedRowsStyle;
        rightIndicatorDisplay?: RightSideIndicatorOptions;
        hasRuntimeFilters?: boolean;
        gridMode: ReportGridMode;
        onCellSelectionChange?: (info: ISelectedCellInfo) => void;
        activeCellInfo?: IActiveCellInfo;
        onEditedCellSave?: (cellData: DataPair[], savingCellPromise?: Promise<ValidationIssue[]>) => void;
        rowsHolderStyle?: StyleProps;
        gridScrollView?: HTMLDivElement;
        onToggleNode?: (row: any, collapsed: boolean) => void;
        onGridScroll?: (e: React.UIEvent<HTMLElement>) => void;
        includeAllPagesInMultiSelection?: boolean;
        allRowIds?: string[];
        doNotResetSelectedOnRowSelection?: boolean;
        defaultSelectedRowIds?: string[];
        defaultSelectAll?: boolean;
        isDrillDownReport?: boolean;
        showGroupActions?: () => void;
        headerClassName?: string;
        onFlowInlineClick?: (info: IFlowInlineFieldInfo) => void;
    }
    export interface ISelectedRowInfo {
        rowId: string;
        selectionParam?: string;
        event?: React.MouseEvent<Element, MouseEvent>;
        action?: {
            entityId: string;
            entityType: string;
        };
        doNotOpenDetailLayer?: boolean;
        lastSelectedRow?: number;
        keyField?: string;
        onlyTriggerSelectionChange?: boolean;
    }
    export interface ISelectedCellInfo {
        id: string;
        editable: boolean;
        isValid?: boolean;
        startInEditingMode?: boolean;
        selectLastCell?: boolean;
    }
    export interface IMultiSelectionChangeInfo {
        rowId?: string;
        action?: {
            entityId: string;
            entityType: string;
        };
        element?: Element;
        selectAll?: boolean;
        isShiftKey?: boolean;
        keyField?: string;
        isCtrlKey?: boolean;
        selectedRowIds?: string[];
    }
    export enum ReportGridMode {
        SingleSelect = 0,
        MultiSelect = 1,
        InlineEdit = 2,
        InfoOnly = 3
    }
    export interface IRunTimeGridProps extends IReportGridContainerProps {
        getData: (pageIndex?: number) => Promise<GridViewResultData>;
        getDataForParentRow?: (parentId: string) => Promise<GridViewResultData>;
        updateData: (updatedConfiguration: ReportViewConfiguration, currentPage: number) => Promise<[GridViewResultData, ReportViewConfiguration | null]>;
        onPageChange?: (updatedPageNumber?: number) => void;
    }
    export interface IReportGridContainerProps extends IReportFilterActionProps, IReportGridCommonProps {
        hideColumnHeader?: boolean;
        rowsPerPageForPreview: number;
        designerContentHolder: Element;
        instanceId: string;
        gridHolder: HTMLElement;
        autoRefresh?: boolean;
        autoRefreshInterval?: number;
        minimumEventInterval?: number;
        resetSelectionOnRefresh?: boolean;
        afterGridRefresh?: (data: IAfterRefreshData) => void;
        onLoadComplete?: (data: IAfterRefreshData) => string | undefined;
        reportViewConfiguration: ReportViewConfiguration;
        isCollaped?: boolean;
        noDataMessageOptions?: IGridNoDataProps;
        showGroupTitle: ShowGroupTitleReportOptions;
        usePaging?: boolean;
        treeGrid?: boolean;
        parentFieldName?: string;
        childFieldName?: string;
        updateDataForParentRow?: (parentId: string) => void;
        showLoadingIndicator: boolean;
        pageIndex: number;
        reportRowNumbering: ReportRowNumberingOptions;
    }
    export interface IGridNoDataProps {
        class?: string;
        message?: string;
    }
    export interface IAfterRefreshData {
        hasRows: boolean;
        configuration: ReportViewConfiguration;
        rows: any[];
    }
    export interface IGridContainerProps extends IReportGridContainerProps, IReportGridPaginationProps, IColumnHeaderCommonProps {
        gridRowColoring?: ReportViewerCellColorInfo[];
        aggregationGroupInfo?: AggregationGroupInfo[];
        aggSeries?: string[];
        totalAggregation?: AggregationViewInfo[];
        typeColumnName?: string;
        toggleMultiSelection?: (activate: boolean) => void;
        onMultiSelectionRangeUpdate?: (ids: string[]) => void;
        reset?: boolean;
        filterLayerLabels?: IFilterLayerLabels;
    }
    export interface IColumnHeaderCommonProps {
        onSortingChange: (columnName: string, updatedSorting: SortType) => void;
        onColumnResize: (columnId: string, updatedWidth: number) => void;
        gridType: GridType;
        gridHolder: HTMLElement;
        canSort?: boolean;
        headerClassName?: string;
    }
    export interface ITreeViewCommonProps {
        parentFieldName: string;
        childFieldName: string;
        updateDataForParentRow?: (parentId: string) => void;
        reset?: boolean;
        isDesignTime?: boolean;
        onToggleNode?: (row: any, collapsed: boolean) => void;
    }
    export interface IGridViewProps extends IGridContainerProps, IEditableCellCallbacks {
        gridTemplateColumns: string;
        cellInfo: IReportGridCellInfo[];
        onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
        onMultiSelectChange: (info: IMultiSelectionChangeInfo) => void;
        onRowSelectionChange: (info: ISelectedRowInfo) => void;
    }
    export interface IEditedGridRowInfo {
        rowId: string;
        valuesToUpdate: DataPair[];
    }
    export interface IMultiSelectRowsInfo {
        rowId: string;
        element?: Element;
        action: {
            entityId: string;
            entityType: string;
        };
        keyField: string;
    }
    export interface IRowProps extends IGridRowCommonProps, IGridRowCellCommonProps {
        isRowHovered: boolean;
        isRowSelected: boolean;
        rowColoring?: ReportViewerCellColorInfo;
        showBackgroundColorForSelection?: boolean;
        gridType: GridType;
        showLinkOnHover?: boolean;
        gridColumnColoring?: ReportViewerCellColorInfo[];
        hasRowTypeIcon?: boolean;
        isMultiSelectOn?: boolean;
        showRowNumber?: boolean;
        activeCellInfo?: IActiveCellInfo;
        cellInfo: IReportGridCellInfo[];
        gridIconType?: GridIconType;
        allowCellSelection?: boolean;
    }
    export interface IGridRowCommonProps {
        cells: any;
        collapsible?: boolean;
        iscollapsed?: boolean;
        toggleCollapse?: (collapse: boolean) => void;
        nestingLevel?: number;
        rowId: string;
        onTabbing?: (info: ITabbingInfo) => void;
        hasDefaultActionColumn?: boolean;
    }
    export interface IGridRowContainerProps extends IGridCommonProps, IGridRowCommonProps {
        rowIndex: number;
    }
    export interface IGridProps extends IGridCommonProps {
        rows: any;
    }
    export interface ICollapsibleGroup extends IGridCommonProps {
        headerName: string;
        row: any;
        width: number | string;
        headerLeftSpace?: number;
        aggregationGroupInfo?: AggregationGroupInfo[];
        aggSeries?: string[];
        path?: string;
        onResize?: () => void;
    }
    export interface IGridCommonProps extends IReportGridCommonProps, IEditableCellCallbacks {
        cellInfo: IReportGridCellInfo[];
        isCollaped?: boolean;
        showTitleInGroupHeader?: boolean;
        gridRowColoring?: ReportViewerCellColorInfo[];
        isFirstRow?: boolean;
        startIndex?: number;
        gridHolder: HTMLElement;
        gridTemplateColumns: string;
    }
    export interface IGridEditedCellInfo {
        name: string;
        rowId: string;
        updatedVal?: any;
        formattedValue?: any;
    }
    export interface IGroupedGridProps extends IGridCommonProps {
        groupedRows: any;
        headerLeftSpace?: number;
        aggregationGroupInfo?: AggregationGroupInfo[];
        aggSeries?: string[];
        path?: string;
    }
    export enum ShowGroupTitleReportOptions {
        Default = 0,
        Never = 1,
        NotOnSingleGrouping = 2,
        Always = 3
    }
    export interface IReportGridPaginationProps {
        usePaging?: boolean;
        totalPages: number;
        currentPage: number;
        totalRows: number;
        rowPerPage: number;
        unknownPageCount?: boolean;
        onPaginationChange?: (selectedPageNumber: number) => void;
    }
    export enum GridType {
        FIX = 0,
        STRETCH = 1
    }
    export enum SortOrder {
        None = 0,
        Ascending = 1,
        Descending = 2
    }
    export interface ICommonCellProps {
        name: string;
        width: number;
        calculatedWidth: number;
        hidden?: boolean;
        alignment?: TextAlignment;
        wrapping?: TextWrapping;
        liveUpdateColumnInfo?: LiveUpdateColumnInfo;
        isLink?: boolean;
        showPercentageBar?: boolean;
        bottomBound?: number;
        topBound?: number;
        percentageBarBackgroundColor?: string;
        editable?: boolean;
        fullTypeName?: string;
        numberFormat?: NumberFormat;
        customNumberFormat?: string;
        customValidationMessage?: string;
        dateTimeFormat?: DateTimeFormat;
        overrideFont?: boolean;
        fontAttributes?: LabelAttributes;
        cssClassName?: string;
        dateTimeDisplayFormat?: string;
        allowLineBreak?: boolean;
        decimals?: number;
        isNullable?: boolean;
        dataTypeName?: string;
        sortInfo?: string;
        isResponsive?: boolean;
        isFirstCell?: boolean;
        isLastCell?: boolean;
        isDefaultActionLink?: boolean;
    }
    export interface IFlowInlineFieldInfo {
        flowId: string;
        rowId: string;
        showUI: string;
    }
    export interface IReportGridColProps extends ICommonCellProps {
        id: string;
        label: string;
        position: number;
        fieldName: string;
        data: string[];
        isResizable: boolean;
        allowSort?: boolean;
        allowFilter?: boolean;
        allowGroup?: boolean;
        allowEdit?: boolean;
    }
    export interface IEditableCellCallbacks {
        onCellEdit?: (info: IGridEditedCellInfo) => void;
        onCellSave?: () => void;
        onTabbing?: (info: ITabbingInfo) => void;
    }
    export interface IGridRowCellCommonProps extends IEditableCellCallbacks {
        onDefaultGridActionClick?: (element: Element) => void;
        onRowSelectionChange: (event: any, doNotOpendetailLayer?: boolean, onlyTriggerSelectionChange?: boolean) => void;
        onCellSelectionChange?: (info: ISelectedCellInfo) => void;
        gridMode: ReportGridMode;
        onFlowInlineClick?: (info: IFlowInlineFieldInfo) => void;
    }
    export interface ITabbingInfo {
        currentId: string;
        goToNext: boolean;
    }
    export interface ISelectedRowIndicatorProps {
        isSelected?: boolean;
        selectedRowStyle?: SelectedRowsStyle;
        rightIndicatorDisplay?: RightSideIndicatorOptions;
        isBroadcastingSelection?: boolean;
        showSelectedRowIndicator?: boolean;
    }
    export interface IReportRowCellProps extends IReportGridCellInfo, IGridRowCellCommonProps {
        label: string;
        isDefaultGridActionCell?: boolean;
        rowId: string | number;
        gridCellColoring?: ReportViewerCellColorInfo;
        gridIconType?: GridIconType;
        isActive?: boolean;
        isEditing?: boolean;
        isValid?: boolean;
        id: string;
        firstCellLeftPadding?: number;
        allowSelection?: boolean;
    }
    export interface IReportGridCellInfo extends ICommonCellProps {
    }
    export interface IReportHeaderProps extends IReportFilterActionProps {
        title?: string;
    }
    interface IReportCommonProps {
        reportColumnsForGrid: IReportGridColProps[];
        isDesignTime?: boolean;
        canGroup?: boolean;
        canEdit?: boolean;
        canDelete?: boolean;
        canAdd?: boolean;
        canFilter?: boolean;
        canReset?: boolean;
        allowMultiSelection?: boolean;
        columnsToDelete?: string[];
        totalRow?: number;
        canSort?: boolean;
        hasRuntimeFilters?: boolean;
        reportContextId: string;
        folderId: string;
        canAddMultipleColumn?: boolean;
        label?: string;
    }
    export interface IColumnsForGrid {
        id: string;
        name: string;
        fieldName: string;
        label: string;
        position: number;
        width: number;
        allowSort?: boolean;
        allowFilter?: boolean;
        allowGroup?: boolean;
        allowEdit?: boolean;
    }
    export enum ColumnPosition {
        LEFT = 0,
        RIGHT = 1
    }
    export interface IReportFilterActionProps extends IReportGridFilterData, IReportCommonProps, IFilterActionCommon {
        rows?: any[];
        filterPanelHolder: Element;
        groupBy?: string[];
        sortBy?: string[];
    }
    export interface IFilterLayerProps extends IReportGroupingProps, IReportSortingProps, IReportColumnFiltersProps, IReportColumnsEditorProps, IFilterActionCommon, IReportRuntimeFilterProps {
        isOpen: boolean;
        sourceRef: MutableRefObject<HTMLElement | null>;
        onClose: () => void;
        closeFilterPanel: () => void;
        className?: string;
        showArrow?: boolean;
        placement?: Placement;
        maxHeight?: number;
    }
    export interface IFilterActionCommon {
        onReset?: () => void;
        onCancel?: () => void;
        onSave?: (updatedData: IUpdatedGridConfiguration) => void;
        onColumnAdd?: (info: IRuntimeColumn[]) => void;
        isMultiSelectOn?: boolean;
        usePercentageWidthUnit?: boolean;
        selectedRows?: string[];
        selectAll?: boolean;
        availableColumns?: any;
        onFilterReset?: () => void;
        gridHolder: HTMLElement;
        filterLayerLabels?: IFilterLayerLabels;
    }
    export interface IFilterLayerLabels {
        searchLabel: string;
        sortByLabel: string;
        groupByLabel: string;
        multiSelectLabel: string;
        columnsLabel: string;
        rowsLabel: string;
        closeLabel: string;
        resetSettingsLabel: string;
        applyLabel: string;
        widthUnitLabel: string;
    }
    export interface IUpdatedGridConfiguration {
        groupingfields: string[];
        sortingfields: string[];
        filterInfo: FilterInfo[];
        columns: IReportGridColProps[];
        columnsToDelete: string[];
        isMultiSelectOn?: boolean;
        usePercentageWidthUnit?: boolean;
        selectAll?: boolean;
        hasRuntimeFiltersChanged: boolean;
        updatedColumns: string[];
    }
    export interface IColumnNewPositionInfo {
        columnId: string;
        columnWidth: number;
    }
    export interface IReportGroupingProps extends IReportCommonProps {
        onGroupingChange?: (newGrouping: string[]) => void;
        groupBy?: string[];
    }
    export interface IReportRuntimeFilterProps extends IReportCommonProps, IAddBeforeSavePromises {
        editingContextId?: string;
        onFilterReset?: () => void;
        onFIlterClear?: () => void;
    }
    export interface IReportColumnsEditorProps extends IReportCommonProps {
        onColumnDelete?: (columnId: string, columnName: string) => void;
        onColumnsPositionChanged?: (columnsWithNewPositions: IReportGridColProps[]) => void;
        onColumnsWidthChanged?: (columnId: string, newWidth: number) => void;
        onColumnAdd?: (info: IRuntimeColumn[]) => void;
        availableColumns?: any;
        usePercentageWidthUnit?: boolean;
        onWidthUnitChange?: (usePercentage: boolean) => void;
        onColumnEditComplete?: (editingId: string, columnId: string) => void;
        widthAndUnitLabel?: string;
    }
    export interface IReportGridAddColumnsProps {
        isOpen: boolean;
        sourceRef: any;
        onClose: () => void;
        availableColumns?: any;
        onColumnAdd?: (info: IRuntimeColumn[]) => void;
        canAddMultipleColumns?: boolean;
    }
    export interface IReportSortingProps extends IReportCommonProps {
        onSortingChange?: (newSorting: string[]) => void;
        sortBy?: string[];
        groupBy?: string[];
    }
    export interface IReportFilteringProps extends IReportCommonProps, IReportGridFilterData {
        onFilterChange?: (filterInfo: updatedFilterInfo) => void;
        onFilterRemove?: (columnName: string) => void;
        currentFilterInfo: FilterInfo;
    }
    export interface IReportColumnFiltersProps extends IReportCommonProps, IReportGridFilterData {
        onFilterChange?: (filterInfo: FilterInfo[]) => void;
    }
    export interface updatedFilterInfo extends FilterInfo {
        oldColumnName: string;
    }
    export interface FilterInfo {
        columnName: string;
        keyword: string;
        id?: string;
    }
    export interface IReportGridFilterData {
        allFilters?: FilterInfo[];
    }
    export interface IReportComboBoxListProps extends IFilterLayerComboCommon {
        comboBoxs: {
            comboBox: IReportComboboxListOptions;
            comboBoxOptions: IReportComboboxListOptions[];
        }[];
    }
    export interface IFilterLayerComboCommon {
        onChange?: (value: string) => void;
        onClear?: (id: string) => boolean;
        onChosen: (chosenValue: string, oldValue: string, chosenLabel?: string) => void;
        hideClear?: boolean;
    }
    export interface IReportComboboxListOptions {
        id: string;
        name: string;
        label: string;
        isDisabled?: boolean;
        helpMessage?: string;
    }
    export interface IFilterLayerToggleButtonProps {
        isOn?: boolean;
        onChange: (isOn: boolean) => void;
        text?: string;
        onText: string;
        offText: string;
        width?: number;
    }
    export interface IGridHeaderProps {
        columns: IReportGridColProps[];
        isMultiSelectOn?: boolean;
        selectAll?: boolean;
        onMultiSelectChange?: (info: IMultiSelectionChangeInfo) => void;
        gridType: GridType;
        cellInfo: IReportGridCellInfo[];
        instanceId: string;
    }
    export interface ICellValidationInfo {
        dataTypeName: string;
        numberFormat?: NumberFormat;
        customNumberFormat?: string;
        isDateTimePicker: boolean;
        dateTimeDisplayFormat?: string;
        decimals?: number;
        isNullable?: boolean;
    }
    export interface IReportCellEditorProps extends IReportRowCellProps {
        value: any;
        validationInfo: ICellValidationInfo;
    }
    export interface IRuntimeColumn {
        label: string;
        fieldName: string;
        isCalculated: boolean;
    }
    export interface IAddColumnItem extends IAddColumnCommon {
        headerName: string;
        columns: IRuntimeColumn[];
        pickedColumns: IRuntimeColumn[];
    }
    export interface IRuntimeColumnProps extends IAddColumnCommon {
        column: IRuntimeColumn;
        isChecked: boolean;
    }
    export interface IAddColumnCommon {
        canAddMultipleColumns?: boolean;
        onPicked: (info: IRuntimeColumn) => void;
    }
    export interface IUnitTestsApiFactory {
        getUnitTests: () => Promise<UnitTest[]>;
        evaluate: (uniTestId: string) => Promise<UnitTestResult>;
        getUnitTest: (uniTestId: string) => Promise<UnitTest>;
    }
    export const UnitTestsApiFactory: (mappingContext: MappingContext) => IUnitTestsApiFactory;
    export interface IUnitTestTreeProps {
        treeId?: string;
        mappingContext: MappingContext;
        selectedNodeId?: string;
        searchCriteria?: string;
        onAddNewClick: () => void;
        onUnitTestSelected?: (unittest: UnitTest) => void;
        actions?: InlineAction[];
        canRunAll?: boolean;
        apiFactory?: IUnitTestsApiFactory;
        className?: string;
    }
    export interface UnitTestsTreeType {
        nodeName: string;
        nodePath?: string;
        entity?: UnitTest;
        hasChildren?: boolean;
        unittestItemState: UnittestItemState;
    }
    export enum UnittestItemState {
        None = 0,
        Success = 1,
        Failure = 2,
        Running = 3,
        Error = 4
    }
    export function UnitTestTree({ treeId, mappingContext, selectedNodeId, searchCriteria, onAddNewClick, onUnitTestSelected, actions, canRunAll, apiFactory, className, }: IUnitTestTreeProps): JSX.Element;
    interface IInlineActionsProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
        node: ITreeNode<SampleTreeType> | ITreeNode<UnitTestsTreeType>;
        onAddNewClick?: () => void;
        actions?: InlineAction[];
        canRunAll?: boolean;
        onRunStopAllClick?: () => void;
        hasUnitTests?: boolean;
        successNum?: number;
        failureNum?: number;
        errorNum?: number;
        isRunning?: boolean;
    }
    export function InlineActions({ hasUnitTests, successNum, failureNum, errorNum, isRunning, node, className, onAddNewClick, actions, canRunAll, onRunStopAllClick, ...otherProps }: IInlineActionsProps): JSX.Element;
    export interface ISamplesApiFactory {
        getCategories: () => Promise<SampleCategory[]>;
        getCategory: (sampleId: string) => Promise<SampleCategory>;
        search: (searchCriteria: string) => Promise<SampleForTree[]>;
        getByCategory: (category: string, limitCount?: number, pageIndex?: number) => Promise<SampleForTree[]>;
        getSample: (sampleId: string) => Promise<SampleForTree>;
    }
    export const SamplesApiFactory: (mappingContext: MappingContext) => ISamplesApiFactory;
    export const DESELECTALL_EVENT_PREFIX: string;
    export const DELETENODE_EVENT_PREFIX: string;
    export interface ISampleTreeProps {
        treeId?: string;
        mappingContext: MappingContext;
        selectedNodeId?: string;
        defaultId?: string;
        searchCriteria?: string;
        onAddNewClick: () => void;
        onSampleSelected?: (sample: SampleForTree) => void;
        onCategorySelected?: (sampleCategory: SampleCategory) => void;
        sampleActions?: InlineAction[];
        categoryActions?: InlineAction[];
        apiFactory?: ISamplesApiFactory;
        className?: string;
    }
    export interface SampleTreeType {
        nodeName: string;
        nodePath: string;
        hasChildren?: boolean;
        entity?: SampleCategory | SampleForTree;
        parentId?: string;
        pageIndex?: number;
        nextPage?: ITreeNode<SampleTreeType>[];
    }
    export interface InlineAction {
        action: (id: string, el?: HTMLElement) => void;
        className: string;
        title?: string;
        canBeAdded?: (item: SampleCategory | SampleForTree | UnitTest) => boolean;
    }
    export function getNodeContentClassName(isActive: boolean, isRoot?: boolean): string;
    export function SampleTree({ treeId, mappingContext, selectedNodeId, defaultId, searchCriteria, onAddNewClick, onSampleSelected, onCategorySelected, sampleActions, categoryActions, apiFactory, className, }: ISampleTreeProps): JSX.Element;
    export interface IDataDefNode {
        name: string;
        type: string;
        hasChildren: boolean;
    }
    export const DataDefApiFactory: (flowSessionId: string) => {
        getRootData: () => Promise<ITreeNode<IDataDefNode>[]>;
        getSubData: (path: string) => Promise<ITreeNode<IDataDefNode>[]>;
        getSearchData: (searchText: string) => Promise<ITreeNode<IDataDefNode>[]>;
    };
    interface IDataDefTreeProps {
        searchText: string;
        getRootData: (params?: any) => Promise<ITreeNode<IDataDefNode>[]>;
        getSubData: (path: string) => Promise<ITreeNode<IDataDefNode>[]>;
        getSearchData: (value: string) => Promise<ITreeNode<IDataDefNode>[]>;
        onDataSelected: (path: string) => void;
    }
    export function DataDefTree({ searchText, getRootData, getSearchData, getSubData, onDataSelected }: IDataDefTreeProps): JSX.Element;
    export interface IDataExplorerProps {
        flowSessionId: string;
        onDataSelected: (path: string) => void;
    }
    export function DataExplorer({ flowSessionId, onDataSelected }: IDataExplorerProps): JSX.Element;
    export const groupBy: <T, K extends string | number | symbol>(list: T[], getKey: (item: T) => K) => Record<K, T[]>;
    export const unique: <T>(arr: T[]) => T[];
    export enum StepsTreeType {
        explorer = 0,
        byType = 1
    }
    export interface IStepsTree {
        steps: StepDisplayData[];
        onNodeSelected: (stepId?: string | string[]) => void;
        type: StepsTreeType;
    }
    export function StepsTree({ steps: _steps, onNodeSelected: _onNodeSelected, type }: IStepsTree): JSX.Element;
    export interface IDebuggerStartOptions {
        debug: boolean;
        profile: boolean;
        sampleMode: boolean;
        captureAsSampleData: boolean;
    }
    export interface IDebuggerStartOptionsProps {
        elementType: keyof typeof ElementType | ElementType;
        canRememberToRecents: boolean;
        onStart: (options: IDebuggerStartOptions) => void;
    }
    export function DebuggerStartOptions({ elementType, canRememberToRecents, onStart }: IDebuggerStartOptionsProps): JSX.Element;
    export enum DebuggerInputTreeSelectionType {
        Input = 0,
        Sample = 1,
        UnitTest = 2
    }
    export interface IDebuggerInputTreeProps {
        mappingContext: MappingContext;
        onInputDataSelected: () => void;
        unitTestsApiFactory?: IUnitTestsApiFactory;
        onAddNewUnitTest: () => void;
        onRunUnitTest: (unitTestId: string) => void;
        onUnitTestSelected: (ut: UnitTest) => void;
        sampleDataApiFactory?: ISamplesApiFactory;
        onAddNewSampleData: () => void;
        onRunSampleData: (sampleId: string) => void;
        onSampleDataSelected: (s: SampleForTree) => void;
        nodeSelectionType?: DebuggerInputTreeSelectionType;
        selectedNodeId?: string;
        sampleTreeId?: string;
        unitTestsTreeId?: string;
    }
    export function DebuggerInputTree({ mappingContext, onInputDataSelected, unitTestsApiFactory, onAddNewUnitTest, onRunUnitTest, onUnitTestSelected, sampleDataApiFactory, onAddNewSampleData, onRunSampleData, onSampleDataSelected, nodeSelectionType, selectedNodeId, sampleTreeId, unitTestsTreeId, }: IDebuggerInputTreeProps): JSX.Element;
    export interface IVersionsComparerProps {
        left: IVersionsComparer;
        right: IVersionsComparer;
    }
    export interface IVersionsComparer {
        current: string;
        versions: IVersion[];
        onChange: (value: string) => void;
    }
    export interface IVersion {
        id: string;
        title: string;
    }
    export function VersionsComparer({ left, right }: IVersionsComparerProps): JSX.Element;
    export interface IDesignerHeaderProps extends HeaderProps {
        actions?: IDesignerAction[];
        rangeSlider?: IDesignerRangeSliderProps;
        versionsComparer?: IVersionsComparerProps;
    }
    export enum HeaderComponentType {
        action = 0,
        rangeSlider = 1,
        separator = 2
    }
    export function DesignerHeader({ actions, rangeSlider, versionsComparer, ...otherProps }: IDesignerHeaderProps): JSX.Element;
    export const DEFAULT_WIDGET_STYLE: React.CSSProperties;
    export interface DialogWidgetOptions {
        children?: React.ReactNode;
        id: string;
        className: string;
        zIndex?: number;
        style?: React.CSSProperties;
        appendTo?: HTMLElement;
    }
    export function DialogWidget({ children, className, zIndex, style, appendTo, id, }: DialogWidgetOptions): React.ReactPortal;
    interface SliderOptions {
        id: string;
        children?: React.ReactNode;
        layerActions?: DomEvent[];
        layerClassName: string;
        widgetClassName: string;
        showLayer?: boolean;
        layerStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        zIndex?: number;
    }
    export function Slider({ children, layerActions, layerClassName, widgetClassName, id, zIndex, layerStyle, style, showLayer, }: SliderOptions): JSX.Element;
    interface DetailsHeaderOptions {
        onClose?: () => void;
        onOpenInNewWindowClick?: () => void;
        title?: string;
    }
    export function SliderHeader({ onClose, onOpenInNewWindowClick, title }: DetailsHeaderOptions): JSX.Element;
    export const SLIDER_CLASS = "dpc-portal-slider";
    export const CLOSE_EVENT_PREFIX = "close-slider__";
    export const TOGGLE_EVENT_PREFIX = "toggle-slider__";
    export const SETTITLE_EVENT_PREFIX = "settitle-slider__";
    export const SETONCLOSE_EVENT_PREFIX = "setonclose-slider__";
    export interface BasePortalSliderProps {
        htmlContent?: string;
        sliderId?: string;
        onClose?: () => void;
        onOpenInNewWindow?: () => void;
        onMounted?: (sliderBody: HTMLElement) => void;
        closeOnOutsideClick?: boolean;
        openPortalSlider?: boolean;
        sliderTitle?: string;
    }
    export interface PortalSliderProps extends BasePortalSliderProps {
        children?: React.ReactNode;
        closed?: boolean;
        applyTabbing?: boolean;
    }
    export function PortalSlider({ onClose, onOpenInNewWindow, onMounted, children, htmlContent, sliderId, closed, closeOnOutsideClick, openPortalSlider, sliderTitle, applyTabbing }: PortalSliderProps): JSX.Element;
    export interface ISearchResultClickEvent {
        entity: PlatformEntityData;
        target: HTMLLIElement | null;
        clientX?: number;
        clientY?: number;
    }
    export type ISearchResultClick = (event: ISearchResultClickEvent) => void;
    export interface ISearchResultItemProps {
        entity: PlatformEntityData;
        searchText: string;
        isCurrent?: boolean;
        onClick: ISearchResultClick;
        onContextMenu: ISearchResultClick;
    }
    export function SearchResultItem({ entity, searchText, onClick, onContextMenu, isCurrent }: ISearchResultItemProps): JSX.Element;
    export function createSeparator(order: number): ActionHeader & {
        IsDummy: boolean;
    };
    export function isDefaultGridAction(action: ActionHeader): boolean;
    export function parseSearchSwitch(term: string, folderId: string): string;
    export function searchItems(text: string, loadedCount: number, pageSize: number): Promise<PagingSearchResult<PlatformEntityData>>;
    export function getActions(entity: PlatformEntityData): Promise<ActionHeader[]>;
    export interface IPortalSearchBoxProps {
        pageSize: number;
        isCollapsed: boolean;
        runBaseAction: (entityId: string, action: ActionHeader) => void;
        showContextMenu: (event: ISearchResultClickEvent & {
            actions: ActionHeader[];
        }) => void;
        hideContextMenu: () => void;
    }
    export function PortalSearchBox({ pageSize, runBaseAction, showContextMenu, hideContextMenu, isCollapsed, }: IPortalSearchBoxProps): JSX.Element;
    export interface IPortalHeaderProps {
        isDebuggingEnabled?: boolean;
        showSearchBox?: boolean;
        showCurrentFolder?: boolean;
        currentFolderName?: string;
        showNotifications?: boolean;
        slogan: string;
        onNotificationClick?: () => void;
        actionsProvider: () => IPortalActionLinkItem[] | Promise<IPortalActionLinkItem[]>;
        userDisplayName: string;
        timeZone?: string;
        searchProps?: Omit<IPortalSearchBoxProps, 'isCollapsed'>;
    }
    /**
     * Header which displays on the top on the User Portal and Studio and contains Company Logo, Slogan and some actions
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PortalHeader({ slogan, userDisplayName, isDebuggingEnabled, showCurrentFolder, currentFolderName, showSearchBox, showNotifications, onNotificationClick, actionsProvider, timeZone, searchProps, }: IPortalHeaderProps): JSX.Element;
    export interface IPortalLogoProps {
        logoUrl?: string;
        isStudio?: boolean;
    }
    export const PortalLogo: FC<IPortalLogoProps>;
    export const PRIMARY_CLASS_NAME = "dp-form-tab-editor";
    export interface IFormTabEditorProps {
        host: Element;
        formElementsInfo: FormElementInfo[];
        sessionId: string;
        selectedElementId?: string;
    }
    export interface ITabEditorProps {
        formElementInfo: FormElementInfo;
        onTabChange: (info: FormElementTabInfo) => void;
        onSelectionChanged: (id: string) => void;
        selected?: boolean;
    }
    export enum LayoutElementType {
        Fixed = 0,
        Grow = 1,
        Resize = 2
    }
    export enum Orientation {
        Horizontal = 0,
        Vertical = 1
    }
    export enum StackFillMode {
        Scroll = 0,
        ExpandChildrenThenScroll = 1,
        FitChildren = 2
    }
    export class LayoutElement {
        readonly requested: number;
        readonly min: number;
        readonly max: number;
        readonly type: LayoutElementType;
        readonly el?: HTMLBaseElement | undefined;
        final: number;
        constructor(requested: number, min: number, max: number, type: LayoutElementType, el?: HTMLBaseElement | undefined);
        get isFull(): boolean;
        get isFullMax(): boolean;
        get isFullMin(): boolean;
        clearOverFlow(): number;
        isResizable(deltaSize: number): boolean;
    }
    export interface LayoutChildOptions {
        width?: number | string;
        height?: number | 'auto' | '100%';
        left?: number;
        top?: number;
        relativePosition?: ComponentPosition;
    }
    export enum ComponentPosition {
        None = 0,
        Left = 1,
        Center = 2,
        Right = 4,
        Top = 8,
        Middle = 16,
        Bottom = 32
    }
    export type ServerEventHandler = (events: DataPair[]) => void;
    export interface IFormHostProps extends IFormCommonProps {
        formSessionId: string;
        isInDebug: boolean;
        formSessionInfoJSON: string;
    }
    export interface IFormSurfaceProps extends IFormCommonProps {
        formSession: FormSessionInfo;
        onValueChange?: (value: DataPair[], fromServer: boolean) => void;
        surfaceId?: string;
        providerComonentId?: string;
        formDesignerSessionId?: string;
        onRunRules?: (sessionInfo: RunRuleSessionInfo[]) => void;
        validations?: FormInfoValidationIssue[];
        shouldHandleEvents?: (id: string) => boolean;
        isPreview?: boolean;
        isEnabled?: boolean;
    }
    interface IFormCommonProps {
        host: HTMLElement;
        onLoadComplete?: () => void;
        isDesigner?: boolean;
        onReceiveNextInstruction?: (event: NextInstructionEvent | NextFormInstructionEvent) => void;
        currentInstruction?: FlowExecutionStateInstruction;
        validationPanelHost?: HTMLElement;
        inDialog?: boolean;
    }
    export interface SilverFormComponentBaseExtendedProps extends SilverFormComponentBaseProps {
        layoutOptions?: LayoutChildOptions;
        controlRef?: MutableRefObject<HTMLElement>;
        controlClassName?: string;
        hasError?: boolean;
        helperText?: React.ReactNode;
        validationClassName?: string;
        isDisabled?: boolean;
        /**Render control inside this holder */
        holder?: HTMLElement;
        /**Do not warp inside <section /> */
        disableControlLayout?: boolean;
    }
    export interface IFormContextProviderProps {
        controlData: DataPair[];
        onSetValue: (value: DataPair[], fromServer?: boolean) => void;
        validations: FormInfoValidationIssue[];
        clientSideValidations: FormInfoValidationIssue[];
        onClearValidation: (componentIds: string[]) => void;
        onSubmit: (outcomeName: string) => void;
        getControlHiddenState: (componentId: string) => boolean;
        getDisabledInfo: (componentId: string) => DisabledComponentInfo | undefined;
        isUpdatingDataFromSever: boolean;
        isDesignTime: boolean;
        host: HTMLElement;
        isViewOnly: boolean;
        onClientValidationChange: (validation: FormInfoValidationIssue) => void;
        onAddBeforeSubmit: (callback: () => void) => void;
        onSetSeverKeys: (...keys: string[]) => void;
        session: FormSessionInfo;
        surfaceId?: string;
        providerComonentId?: string;
        onRunRules: (sessionInfo: RunRuleSessionInfo[]) => void;
        currentInstruction?: FlowExecutionStateInstruction;
        formDesignerSessionId?: string;
        isPreview?: boolean;
    }
    export interface CurrentFormHostValidation {
        sourceRef: HTMLElement;
        validation?: ValidationSummary;
        tooltipId?: string;
        componentId?: string;
        className?: string;
    }
    export interface ValidatationOnLayout {
        applyValidationOnLayout?: boolean;
    }
    export interface DisabledComponentInfo {
        componentId: string;
        hideControlValue: boolean;
    }
    export type SizeUnit = number | 'auto' | '100%' | undefined;
    export interface SilverContainerBasePropsWithChildren extends SilverContainerBaseProps {
        children: SilverContainerChildInfo[];
    }
    export function useTheme(currentTheme?: PaletteType): Theme;
    export class DecisionsControlEvent {
        producerProps?: Partial<SilverFormComponentBaseProps> | undefined;
        constructor(producerProps?: Partial<SilverFormComponentBaseProps> | undefined);
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
        isSame(componentName: string, events: FormTriggerType[]): boolean;
    }
    export class CustomEvent extends DecisionsControlEvent {
        private eventName;
        constructor(eventName: string, producerProps?: Partial<SilverFormComponentBaseProps>);
        toString(): string;
    }
    export class DataChangedEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class FocusLostEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
    }
    export class KeyPressEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
    }
    export class ClickEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class SubmitEvent extends DecisionsControlEvent {
        outcomePath: string;
        constructor(producerProps?: Partial<SilverFormComponentBaseProps>, outcomePath?: string);
        toString(): string;
        get valueChange(): boolean;
    }
    export class ClearEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class ExitEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class EnterEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get formTriggerType(): FormTriggerType | null;
    }
    export class StoppedTypingEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class SelectionChangedEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class RowAddedEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class RowRemovedEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export class NewControlDataEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        data: DataPair[] | undefined;
    }
    export class TabChangedEvent extends DecisionsControlEvent {
        static DISPLAY_NAME: string;
        toString(): string;
        get valueChange(): boolean;
        get formTriggerType(): FormTriggerType | null;
    }
    export const doNotClearValidationsOnEventNames: string[];
    export type FormClientEventHandler = (events: DecisionsControlEvent[], sessionInfo?: RunRuleSessionInfo[]) => void;
    export interface IFormContext {
        formSessionInfoId: string;
        handleControlEvent: FormClientEventHandler;
        setValue(value: DataPair[], fromServer?: boolean): void;
        getValue(key: string): DataPair | undefined;
        getValueAs<T>(key: string): T | undefined;
        getControlValidations(componentId: string): ValidationSummary | undefined;
        isControlHidden(componentId: string): boolean;
        getDisabledInfo(componentId: string): DisabledComponentInfo | undefined;
        isUpdatingDataFromSever: boolean;
        addOnBeforeSubmit(callback: () => void): void;
        setSeverKeys(...keys: string[]): void;
        clearValidationFor(componentId?: string): void;
        setOutcomeData(outcomeData: DataPair): void;
        getFormValidationSetting(): FormValidationSetting | null;
        getAllValidations(): ValidationSummary[] | undefined;
        refreshClientValidation(validation: FormInfoValidationIssue): void;
        getFormHolder(): HTMLElement | undefined;
        isViewOnly: boolean;
        isDesignTime: boolean;
        getCopyData(key: string): DataPair | undefined;
        setCopyData(value: DataPair[]): void;
        currentInstruction?: FlowExecutionStateInstruction;
        formDesignerSessionId?: string;
        isPreview?: boolean;
        surfaceId?: string;
    }
    export const defaultFormContext: IFormContext;
    export const FormContext: React.Context<IFormContext>;
    export const getValidationStyleClass: (breakLevel: BreakLevel) => "" | "has-validation dp-form-fatal-validation" | "has-validation dp-form-warning-validation";
    export const getBreakLevelClass: (level: BreakLevel) => string;
    export const FORM_CONTROL_CLASS_NAME = "dp-form-control";
    export const useDelayUnmount: (isMounted: boolean, delayTime: number) => boolean;
    export interface IValidationsProps {
        validations?: ValidationSummary[];
        holderClassName?: string;
        messageClassName?: string;
    }
    export const Validations: React.ForwardRefExoticComponent<IValidationsProps & React.RefAttributes<HTMLDivElement>>;
    export type TooltipPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    export interface IValidationMessageProps {
        validations?: ValidationSummary;
        /**
         * Tooltip placement.
         */
        placement?: TooltipPlacement;
    }
    export const ValidationMessage: FC<IValidationMessageProps>;
    export interface ILableStyleProps {
        isActive: boolean;
        validation?: ValidationSummary;
    }
    export function useLabelStyle(props: ILableStyleProps): (props?: any) => ClassNameMap<"root">;
    export function getIsMobile(): boolean;
    export function setIsMobile(isMobile: boolean): void;
    export interface ICompositeControlContainerProps {
        isInDesignMode?: boolean;
        componentId?: string;
        helpMessageKey?: string;
        useCustomValidationHandler?: boolean;
        helperText?: React.ReactNode;
        label?: string;
        /** only validation tooltip with Badge, no border of validation message in bottom of control*/
        useOnlyValidationLayerWithBadge?: boolean;
        validationTooltipPlacement?: TooltipPlacement;
        isDisabled?: boolean;
        controlHolderClassName?: string;
        labelCssClass?: string;
        controlCssClass?: string;
        rootCssClass?: string;
    }
    export const CompositeControlContainer: FC<ICompositeControlContainerProps>;
    export interface IUseValueChangeProps<T> {
        value: DataPair;
        onChange: (value: T) => void;
        useDelay?: boolean;
        delayDuration?: number;
        componentId?: string;
        /**
         * This property is useful where server-data data structure is diffrent from client-data data structure i.e. MultipleFileUpload controls
         */
        forceUpdateInContext?: boolean;
    }
    /**Returns CurrnetValue, OnValueChange function, ClearCurrentTimer function */
    export function useValueChange<T>(props: IUseValueChangeProps<T>): [T, (updatedValue: DataPair) => void, () => void];
    export const KEY_TRIGGER_GO_TO_CONTROL = "kt-goto-control";
    export const KEY_TRIGGER_TRIGGER_ACTION = "kt-trigger-action";
    export function convertShortcutInfoToString(shortcutInfo: ShortcutInfo): string;
    export function getKeyValue(keyCode: number): string;
    export function getGoToControlEventKey(formSessionId: string, componentName: string | undefined, surfaceId?: string): string;
    export function getTriggerActionEventKey(formSessionId: string, componentName: string | undefined, surfaceId?: string): string;
    export function isKeyTriggered(shortcutInfo: ShortcutInfo, keyboardEvent: KeyboardEvent<Element>): boolean;
    export function handleKeyTrigger(event: Event, formSessionId: string, controlProps: Partial<SilverFormComponentBaseExtendedProps>, context: IFormContext, componentId?: string, keyTriggers?: KeyTriggerDefinition[], surfaceId?: string): void;
    export function useGotoControlKeyTrigger(formSessionId: string, componentName: string | undefined, surfaceId: string | undefined, onKeyTriggerGoToControl: ((event: Event) => void) | undefined): void;
    export function useTriggerActionKeyTrigger(formSessionId: string, componentName: string | undefined, surfaceId: string | undefined, onKeyTriggerAction: ((event: Event) => void) | undefined): void;
    interface KeyTriggersProps {
        controlProps: Partial<SilverFormComponentBaseExtendedProps>;
        inputRefControl?: RefObject<HTMLElement | null> | HTMLElement | null;
        onKeyTriggerGoToControl?: (event: Event) => void;
        onKeyTriggerAction?: (event: Event) => void;
        deps?: React.DependencyList;
        formContext?: IFormContext;
    }
    export function useKeyTriggers({ inputRefControl, onKeyTriggerAction, onKeyTriggerGoToControl, controlProps, deps, formContext, }: KeyTriggersProps): void;
    export function useLabelOverflowStyle(): ClassNameMap<"root" | "shrink" | "animated" | "formControl" | "marginDense">;
    export interface IMuiTextBoxProps extends StandardTextFieldProps {
        onValueChange?: (value: string) => void;
        labelCssClass?: string;
    }
    export const MuiTextBox: FC<IMuiTextBoxProps>;
    export function useSetCopyData(componentId: string, value?: string): void;
    export interface ITextBoxProps extends ITextBoxContainerProps {
        type?: string;
        InputProps?: InputProps;
    }
    export const TextBox: FC<Partial<ITextBoxProps>>;
    export interface IValidNumberFromTextOptions {
        value: string;
        groupSeprator: string;
        decimalSeprator: string;
        numberOfDecimalDigits: number;
        allowNullValue?: boolean;
        useMinMax?: boolean;
        maximum?: number;
        minimum?: number;
    }
    export function getValidNumberFromText(options: IValidNumberFromTextOptions): number | null;
    export function getMixMaxNullValue(value: number | undefined | null, maxValue?: number, minValue?: number): number | null;
    export function getNumberWithGroupSeperator(num: string, seperator: string): string;
    export function formatNumber(value: string, groupSeprator?: string, decimalSeparator?: string, numberOfDecimalDigits?: number, doNotFormatWholeNumber?: boolean, numberFormatOptions?: NumberFormatOptions): string;
    export function getValidValue(value: number | undefined | null, maxValue?: number, minValue?: number): number;
    export function getValidNumberString(value?: string | number): string | null;
    export function getValidNumber(value?: number | undefined): number | null;
    export function getValidNullableValue(value: number | undefined | null, maxValue?: number, minValue?: number): number | "";
    export function getValidNumberValue(value: number | undefined | null, maxValue?: number, minValue?: number, isNull?: boolean): number | "";
    export interface INumberBoxProps {
        inputRef?: React.MutableRefObject<HTMLInputElement | null>;
        autoPopulate?: boolean;
        value?: number | null;
        initialValue?: number;
        formatOptions?: NumberFormatOptions;
        allowNullValue?: boolean;
        doNotFormatWholeNumber?: boolean;
        groupSeprator?: string;
        decimalSeprator?: string;
        numberOfDecimalDigits?: number;
        minimum?: number;
        maximum?: number;
        useMinMax?: boolean;
        increment?: number;
        isEditable?: boolean;
        autoSelectOnFocus?: boolean;
        watermarkText?: string;
        hasError?: boolean;
        helperText?: React.ReactNode;
        tabIndex?: number;
        label?: string;
        prefix?: string;
        onSetValue?: (value: number | null) => void;
        onFocusHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
        onFocusOutHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
        className?: string;
        tabOrder?: number;
        isDisabled?: boolean;
        inputClassName?: string;
        labelCssClass?: string;
    }
    export const NumberBoxContainer: (props: INumberBoxProps) => JSX.Element;
    export interface INumberboxProps extends CompositeNumberBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export function NumberBox(props: INumberboxProps): JSX.Element;
    export interface ICurrencyBoxProps extends CompositeCurrencyBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export function CurrencyBox(props: ICurrencyBoxProps): JSX.Element;
    export interface INumberSpinnerProps extends CompositeNumberSpinnerProps, SilverFormComponentBaseExtendedProps {
    }
    export function NumberSpinner(props: INumberSpinnerProps): JSX.Element;
    export interface IMaskedBoxBaseProps {
        value?: string;
        tabIndex?: number;
        label?: string;
        hasError?: boolean;
        helperText?: React.ReactNode;
        handleOnChange: (str: string) => void;
        handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
        format: (str: string) => string;
        replace?: (str: string) => string;
        accept?: RegExp | undefined;
        prefix?: string;
        mask?: boolean;
        inputRef?: React.RefObject<HTMLInputElement>;
        watermarkText?: string;
        className?: string;
        isDisabled?: boolean;
        maximumNumber: number;
        labelCssClass: string;
    }
    export const MaskedBoxBase: React.FC<Partial<IMaskedBoxBaseProps>>;
    export interface IPhoneMaskedProps extends IMaskedBoxBaseProps {
    }
    export const PhoneMasked: React.FC<Partial<IPhoneMaskedProps>>;
    export interface INumberMaskedProps extends IMaskedBoxBaseProps {
        isDecimal: boolean;
        prefix: string;
    }
    export const NumberMasked: React.FC<Partial<INumberMaskedProps>>;
    export interface ISSNMaskedProps extends IMaskedBoxBaseProps {
    }
    export const SSNMasked: React.FC<Partial<ISSNMaskedProps>>;
    export interface IMaskedTextBoxProps extends CompositeMaskedTextBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const MaskedTextBox: React.FC<Partial<IMaskedTextBoxProps>>;
    export interface IPasswordAdornmentProps {
        showPassword?: boolean;
        onVisibleChange(showPass: boolean): void;
    }
    export function PasswordAdornment(props: IPasswordAdornmentProps): JSX.Element;
    export interface IPasswordTextBoxProps extends PasswordTextBoxLookAndFeelProvider, CompositeTextFieldProps, SilverFormComponentBaseExtendedProps {
    }
    export function PasswordTextBox(props: IPasswordTextBoxProps): JSX.Element;
    export interface IAutoCompleteProps extends React.HTMLProps<{}> {
        suggestions: string[];
        selectedValue: string;
        label: string;
        hasError: boolean;
        helperText?: React.ReactNode;
        inputClassName?: string;
        disabled?: boolean;
        labelCssClass?: string;
        onValueChange: (value: string) => void;
    }
    export const AutoComplete: React.ForwardRefExoticComponent<Pick<IAutoCompleteProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "suggestions" | "inputClassName" | "onValueChange" | "hasError" | "helperText" | "labelCssClass" | "selectedValue"> & React.RefAttributes<HTMLInputElement>>;
    export interface IAutoCompleteBox extends ITextFieldProps {
    }
    export function AutoCompleteBox(props: IAutoCompleteBox): JSX.Element;
    export interface ITextFieldProps extends SilverFormComponentBaseExtendedProps, CompositeTextFieldProps {
        autoPopulate?: boolean;
        isEditable?: boolean;
        initialValue?: number;
    }
    export function TextField(props: ITextFieldProps): JSX.Element;
    export interface ITextBoxContainerProps extends CompositeTextBoxProps, SilverFormComponentBaseExtendedProps {
        multiline?: boolean;
        className?: string;
        inputClassName?: string;
        inputProps?: any;
        rowsMax?: string | number;
    }
    export const TextBoxContainer: FC<Partial<ITextBoxContainerProps>>;
    export interface ICheckBoxProps extends CompositeCheckBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const CheckBox: FC<Partial<ICheckBoxProps>>;
    /**
     *
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function RichTextBox(props: any): JSX.Element;
    export interface IRichTextBoxProps extends CompositeDesignDrivenTextAreaProps, SilverFormComponentBaseExtendedProps {
    }
    export const RichTextBox: FC<Partial<IRichTextBoxProps>>;
    export interface ITextAreaProps extends CompositeDesignDrivenTextAreaProps, SilverFormComponentBaseExtendedProps {
    }
    export const TextAreaField: React.MemoExoticComponent<typeof _TextAreaField>;
    function _TextAreaField(props: ITextAreaProps): JSX.Element | null;
    export interface ITextAreaProps extends CompositeTextAreaProps, SilverFormComponentBaseExtendedProps {
    }
    export function TextArea(props: ITextAreaProps): JSX.Element;
    export interface INumberboxProps extends CompositeNumberBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const Numberbox: FC<Partial<INumberboxProps>>;
    export interface IListItem {
        name: string;
        value: string;
        isSelected?: boolean;
        isFocused?: boolean;
    }
    export interface SelectedItemInfo {
        bulkSelection: boolean;
        value: string;
        toggleSelection: boolean;
    }
    export interface ISimpleListItemProps {
        listItem: IListItem;
        isActive?: boolean;
        onClick?: (selectionInfo: SelectedItemInfo) => void;
        className?: string;
    }
    export const SimpleListItem: FC<ISimpleListItemProps>;
    export interface IListBoxMenuItemProps {
        name: string;
        value: string;
        onClick: (value: string) => void;
        isSelected?: boolean;
        style?: React.CSSProperties;
        className?: string;
        selectedItemClassName?: string;
        disabled?: boolean;
        tabIndex?: string | number | undefined;
    }
    export const ListBoxMenuItem: FC<IListBoxMenuItemProps>;
    export interface IListBoxProps extends CompositeListBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export function ListBox(props: IListBoxProps): JSX.Element;
    export interface IRadioButtonListProps extends CompositeRadioButtonListProps, SilverFormComponentBaseExtendedProps {
        selectedItemCssClass?: string;
    }
    export function RadioButtonList(props: IRadioButtonListProps): JSX.Element;
    export interface IListProps extends SilverFormComponentBaseExtendedProps, CompositeListProps {
        outputType?: OutputSelectionType;
    }
    export function List(props: IListProps): JSX.Element;
    export interface IListBoxProps extends CompositeListBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export function ListBox(props: IListBoxProps): JSX.Element;
    export interface INumberSpinnerProps extends CompositeNumberSpinnerProps, SilverFormComponentBaseExtendedProps {
    }
    export const NumberSpinner: React.FC<Partial<INumberSpinnerProps>>;
    export interface ICurrencyBoxProps extends CompositeCurrencyBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const CurrencyBox: FC<Partial<ICurrencyBoxProps>>;
    export interface IClientSideValidation {
        breakLevel: BreakLevel;
        message: string;
    }
    export interface IClientSideValidationInfo {
        componentId: string;
        validation: DecisionsValidationIssue[];
    }
    export function useClientSideValidation(issue?: FormInfoValidationIssue): (issue: FormInfoValidationIssue) => void;
    export function getClientSideValidationObject(breakLevel: BreakLevel, message: string, componentID: string): FormInfoValidationIssue;
    export function getEmptyClientSideValidationObject(componentID: string): FormInfoValidationIssue;
    export interface IDatePickerProps extends CompositeDateTimeFieldProps, BaseDateTimeFieldLookAndFeelProvider, SilverFormComponentBaseExtendedProps {
        withTime?: boolean;
    }
    export function DatePicker(props: IDatePickerProps): JSX.Element;
    export interface ICalendarProps extends CompositeDateTimeFieldProps, CalendarLookAndFeelProvider, SilverFormComponentBaseExtendedProps {
    }
    export const useStyles: (props?: any) => ClassNameMap<"toolbar">;
    export function Calendar(props: ICalendarProps & Partial<CalendarProps>): JSX.Element;
    export interface ITimePickerProps extends CompositeDateTimeFieldProps, TimePickerLookAndFeelProvider, SilverFormComponentBaseExtendedProps {
    }
    export function TimePicker(props: ITimePickerProps): JSX.Element;
    export interface IDateTimeFieldProps extends SilverFormComponentBaseExtendedProps, CompositeDateTimeFieldProps {
    }
    export function DateTimeField(props: IDateTimeFieldProps): JSX.Element;
    export interface IDatePickerProps extends CompositeDatePickerProps, SilverFormComponentBaseExtendedProps {
        withTime?: boolean;
    }
    export const DatePicker: FC<IDatePickerProps>;
    export interface IDateTimePickerProps extends CompositeDateTimePickerProps, SilverFormComponentBaseExtendedProps {
    }
    export const DateTimePicker: FC<IDateTimePickerProps>;
    export interface ITimePickerProps extends CompositeTimePickerProps, SilverFormComponentBaseExtendedProps {
    }
    export const TimePicker: FC<ITimePickerProps>;
    export interface IListBoxItemProps {
        name: string;
        value: string;
        onClick: (value: string) => void;
        isSelected?: boolean;
        style?: React.CSSProperties;
        className?: string;
        selectedItemClassName?: string;
        disabled?: boolean;
        tabIndex?: string | number | undefined;
    }
    export const ListBoxItem: FC<IListBoxItemProps>;
    export interface ICheckBoxListProps extends SilverFormComponentBaseExtendedProps, ListBaseProps, CompositeCheckBoxListProps {
        listHolderClass?: string;
        listClass?: string;
        listItemClass?: string;
    }
    export const CheckBoxList: (props: Partial<ICheckBoxListProps>) => JSX.Element;
    export interface IComboBoxProps extends CompositeComboBoxProps, SilverFormComponentBaseExtendedProps {
        multiple?: boolean;
    }
    export const ComboBox: FC<Partial<IComboBoxProps>>;
    export interface IMultiSelectComboBoxProps extends CompositeMultiSelectComboBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const MultiSelectComboBox: FC<Partial<IMultiSelectComboBoxProps>>;
    export function useMaxFileSize(isFileReference: boolean, specifyMaxFileSize?: boolean, maxFileSize?: number): number | undefined;
    export interface ISingleFileUploadAreaProps extends CompositeFileUploadAreaProps, SilverFormComponentBaseExtendedProps {
    }
    export const SingleFileUploadArea: FC<Partial<ISingleFileUploadAreaProps>>;
    export interface IMultiFileUploadAreaProps extends CompositeMultiFileUploadAreaProps, SilverFormComponentBaseExtendedProps {
    }
    export const MultiFileUploadArea: FC<Partial<IMultiFileUploadAreaProps>>;
    export function useAlignmentStyle(horizontalAlignment?: LabelAlignment, verticalAlignment?: LabelVerticalAlignment): string;
    export interface IIconButtonProps extends IconButtonProps {
        horizontalAlignment?: LabelAlignment;
        verticalAlignment?: LabelVerticalAlignment;
    }
    export function IconButton(props: PropsWithChildren<IIconButtonProps>): JSX.Element;
    export interface IButtonProps extends MuiButtonProps {
    }
    export function Button(props: PropsWithChildren<IButtonProps>): JSX.Element;
    export interface IButtonContainerProps extends IButtonProps {
        horizontalAlignment?: LabelAlignment;
        verticalAlignment?: LabelVerticalAlignment;
    }
    export function ButtonContainer(props: PropsWithChildren<IButtonContainerProps>): JSX.Element;
    export interface ILinkButtonProps extends MuiLinkProps {
        name: string;
        isDisabled?: boolean;
        componentType?: React.ElementType;
        horizontalAlignment?: LabelAlignment;
        verticalAlignment?: LabelVerticalAlignment;
        showUnderline?: ShowUnderlineOptions;
        rootCssClass?: string;
    }
    export const LinkButton: FC<ILinkButtonProps>;
    export interface IFileUploadButtonProps {
        buttonType?: FileUploadButtonType | MultiFileUploadButtonType;
        name?: string;
        onClick: () => void;
        className?: string;
        tabOrder?: number;
        isDisabled?: boolean;
        horizontalAlignment?: LabelAlignment;
        verticalAlignment?: LabelVerticalAlignment;
    }
    export const FileUploadButton: FC<IFileUploadButtonProps>;
    export interface IUploadedFileInfoProps {
        fileInfo: IUploadedFileInfo;
        onRemove: (fileId: string) => void;
        holderClassName?: string;
        fileNameClassName?: string;
        tabOrder?: number;
        isDisabled?: boolean;
    }
    export const UploadedFileInfo: FC<IUploadedFileInfoProps>;
    export interface ISuspenseContainerProps {
        loadingClassName?: string;
        hideLoading?: boolean;
    }
    export const SuspenseContainer: FC<ISuspenseContainerProps>;
    export interface YesNoDialogProps {
        open: boolean;
        message: string;
        /**on dialog close */
        onClose?: () => void;
        onYes: () => void;
        onNo: () => void;
        title?: string;
        yesButtonName?: string;
        noButtonName?: string;
        /**Use decisions button style instead of material-ui button style */
        actionVariant?: IActionVariant;
    }
    export const YesNoDialog: FC<YesNoDialogProps>;
    export interface IFileUploadAreaInDialogProps extends IFileUploadAreaCommonProps {
        open: boolean;
        onOk: (files: IUploadedFileInfo[]) => void;
        onClose: () => void;
        /**Message when user tries to cancel the upload */
        warningMessage?: string;
        headerCssClass?: string;
        bodyCssClass?: string;
        footerCssClass?: string;
    }
    const FileUploadAreaInDialog: FC<IFileUploadAreaInDialogProps>;
    export default FileUploadAreaInDialog;
    export interface ISingleFileUploadProps extends CompositeFileUploadProps, SilverFormComponentBaseExtendedProps {
    }
    export const SingleFileUpload: FC<Partial<ISingleFileUploadProps>>;
    export interface IMultiFileUploadProps extends CompositeMultiFileUploadProps, SilverFormComponentBaseExtendedProps {
    }
    export const MultiFileUpload: FC<Partial<IMultiFileUploadProps>>;
    export interface ImageButtonProps extends MuiButtonProps {
        imageInfo: ImageInfo;
        width?: number;
        height?: number;
        maxWidth?: number;
        maxHeight?: number;
        minWidth?: number;
        minHeight?: number;
        altText?: string;
        rootCssClass?: string;
    }
    export function ImageButton(props: ImageButtonProps): JSX.Element;
    export interface LookAndFeelProps extends BaseLookAndFeelProvider {
        className?: string;
        requestedWidth?: number;
        requestedHeight?: number;
        requestedMaxWidth?: number;
        requestedMaxHeight?: number;
        requestedMinWidth?: number;
        requestedMinHeight?: number;
        onClick?: () => void;
        isInDesignMode?: boolean;
        innerRef?: React.Ref<any>;
        tabIndex?: number;
        isDisabled?: boolean;
        componentName?: string;
        controlCssClass?: string;
    }
    export function LookAndFeel(props: LookAndFeelProps): JSX.Element | null;
    export function useAddOutcomeData(componentId?: string, outcomeName?: string): void;
    export interface OutcomeActionProps extends ActionButtonProps {
    }
    export function OutcomeAction(props: OutcomeActionProps): JSX.Element;
    export interface EventActionProps extends ActionButtonProps {
    }
    export function EventAction(props: EventActionProps): JSX.Element;
    export interface OpenUrlActionProps extends ActionButtonProps {
    }
    export function OpenUrlAction(props: OpenUrlActionProps): JSX.Element;
    export interface SubDialogActionProps extends ActionButtonProps {
    }
    export function SubDialogAction(props: SubDialogActionProps): JSX.Element;
    export interface PreviousActionProps extends ActionButtonProps {
    }
    export function PreviousAction(props: PreviousActionProps): JSX.Element;
    export interface LoopBackActionProps extends ActionButtonProps {
    }
    export function LoopBackAction(props: LoopBackActionProps): JSX.Element;
    export interface CopyTextActionProps extends ActionButtonProps {
    }
    export function CopyTextAction(props: CopyTextActionProps): JSX.Element;
    export interface CompositeDataRepeaterAddBehaviorProps extends ActionButtonProps {
    }
    export function CompositeDataRepeaterAdd(props: CompositeDataRepeaterAddBehaviorProps): JSX.Element;
    export interface CompositeDataRepeaterRemoveBehaviorProps extends ActionButtonProps {
    }
    export function CompositeDataRepeaterRemove(props: CompositeDataRepeaterRemoveBehaviorProps): JSX.Element;
    export interface ActionButtonProps extends SilverFormComponentBaseExtendedProps, CompositeActionButtonProps {
    }
    export function ActionButton(props: ActionButtonProps): JSX.Element;
    export interface IButtonProps extends CompositeButtonProps, SilverFormComponentBaseExtendedProps {
        controlCssClass: string;
    }
    export const ButtonContainer: FC<IButtonProps>;
    export interface IMaskedTextBoxProps extends CompositeMaskedTextBoxProps, SilverFormComponentBaseExtendedProps {
    }
    export const MaskedTextBox: React.FC<Partial<IMaskedTextBoxProps>>;
    export interface ICountDownTimerProps {
        seconds: number;
        displayTimer: boolean;
        timerMessage?: string;
        pauseAtTimeLeft?: number;
        startAfterInactive?: boolean;
        onComplete?: () => void;
        className?: string;
        abortCheckboxCssClass?: string;
        dialogTitleText?: string;
        needsConfirmDialog?: boolean;
        dialogResetButtonText?: string;
        dialogCloseButtonText?: string;
        dialogMessage?: string;
        displayMode?: AutoExitDisplayMode;
    }
    export function CountDownTimer(props: ICountDownTimerProps): JSX.Element;
    export interface ITimerExitProps extends CompositeTimerExitProps, SilverFormComponentBaseExtendedProps {
    }
    export function TimerExit(props: ITimerExitProps): JSX.Element;
    export const getFileStreamUrl: (formSessionId: string, componentId: string, fileId: string) => string;
    interface IImageProps {
        src: string;
        alt?: string;
        className?: string;
        styles?: IImageCssProperties;
        transition?: boolean;
    }
    export interface IImageCssProperties extends CSSProperties {
        height?: number;
        minHeight?: number;
        maxHeight?: number;
        width?: number;
        minWidth?: number;
        maxWidth?: number;
    }
    export function Image(props: IImageProps): JSX.Element;
    export interface IImageProps extends CompositeImageProps, SilverFormComponentBaseExtendedProps {
    }
    function ImageBase(props: IImageProps): JSX.Element;
    export const Image: typeof ImageBase;
    export interface IProgressBarProps extends CompositeProgressBarProps, SilverFormComponentBaseExtendedProps {
    }
    export function ProgressBar(props: IProgressBarProps): JSX.Element;
    export interface IFileDownloadButtonprops {
        buttonType?: FileDownloadButtonType;
        outputType?: OutputType;
        fileReferenceOutputType?: FileReferenceOutputType;
        buttonName?: string;
        className?: string;
        fileId?: string;
        formSessionId?: string;
        componentId?: string;
        staticInput?: boolean;
        tabOrder?: number;
        isDisabled?: boolean;
    }
    export const FileDownloadButton: FC<IFileDownloadButtonprops>;
    export interface ISingleFileDownloadProps extends CompositeFileDownloadProps, SilverFormComponentBaseExtendedProps {
    }
    export const SingleFileDownload: FC<Partial<ISingleFileDownloadProps>>;
    export interface ISignaturePadProps extends CompositeSignaturePadProps, SilverFormComponentBaseExtendedProps {
    }
    export const SignaturePadContainer: FC<Partial<ISignaturePadProps>>;
    export interface IMultipleFileDownloadProps extends CompositeMultiFileDownloadProps, SilverFormComponentBaseExtendedProps {
    }
    export const MultipleFileDownload: FC<Partial<IMultipleFileDownloadProps>>;
    export interface IButtonPanelProps extends ButtonPanelProps, SilverFormComponentBaseExtendedProps {
    }
    export const ButtonPanel: FC<Partial<IButtonPanelProps>>;
    export interface ILabelProps extends LabelLookAndFeelProvider {
        isInDesignMode: boolean;
        componentId: string;
        labelCssClass?: string;
    }
    export function Label(props: ILabelProps): JSX.Element;
    export interface IRichTextLabelProps extends RichTextLabelLookAndFeelProvider {
        isInDesignMode: boolean;
        componentId: string;
    }
    export function RichTextLabel(props: IRichTextLabelProps): JSX.Element;
    export interface ILabelFieldProps extends SilverFormComponentBaseExtendedProps, CompositeLabelFieldProps {
        labelCssClass?: string;
    }
    export function LabelField(props: ILabelFieldProps): JSX.Element;
    export interface ILabelProps extends CompositeLabelProps, SilverFormComponentBaseExtendedProps {
    }
    export function Label(props: ILabelProps): JSX.Element;
    export interface IRadioButtonListProps extends CompositeRadioButtonListProps, SilverFormComponentBaseExtendedProps {
    }
    export function RadioButtonList(props: IRadioButtonListProps): JSX.Element;
    export interface IVideoProps extends CompositeVideoProps, SilverFormComponentBaseExtendedProps {
    }
    export function Video(props: IVideoProps): JSX.Element;
    export const getUniqueAndFilteredValidations: (validationIssues: ValidationSummary[], issueType: ValidationIssueType) => ValidationSummary[];
    export interface IValidationsDisplayProps extends CompositeValidationsDisplayProps, SilverFormComponentBaseExtendedProps {
    }
    export const ValidationsDisplay: FC<Partial<IValidationsDisplayProps>>;
    export interface IVerticalStackChildProps {
        index: number;
        control: SilverContainerChildInfo;
        innerMargin: number;
        outerMargin: number;
        totalChildren: number;
        isInDesignMode?: boolean;
    }
    export const VerticalStackChild: FC<IVerticalStackChildProps>;
    export interface VerticalStackProps extends SilverVerticalStackProps, SilverFormComponentBaseExtendedProps {
    }
    export const VerticalStack: React.FC<Partial<VerticalStackProps>>;
    export interface CssGridOptions {
        /**
         * Id passed from BaseControlOptions
         */
        componentId?: string;
        /**
         * name passed from BaseControlOptions
         */
        componentName?: string;
        /**
         * CSS class, from ContainerOptions
         */
        customCssClass?: string;
        /**
         * corresponds to grid-template-rows
         */
        rows: string[];
        /**
         * corresponds to grid-template-columns
         */
        columns: string[];
        /**
         * to be rendered as padding top
         */
        marginTop?: number;
        /**
         * to be rendered as padding right
         */
        marginRight?: number;
        /**
         * to be rendered as padding Left
         */
        marginLeft?: number;
        /**
         * to be rendered as padding bottom
         */
        marginBottom?: number;
        /**
         * horizontal gutter spacing between rows, css row-gap
         */
        rowGap?: number;
        /**
         * vertical gutter between columns
         */
        columnGap?: number;
        height?: number;
        width?: number;
        isInDesignMode?: boolean;
    }
    export interface CssGridChild {
        id: string;
        rowIndex: number;
        colIndex: number;
        rowSpan: number;
        colSpan: number;
    }
    export interface CssGridCellStyle {
        className: string;
        css: string;
    }
    export interface GridArea {
        colStart: number;
        colEnd: number;
        rowStart: number;
        rowEnd: number;
    }
    export const GRID_LAYOUT_CLASS = "dp-grid-layout";
    export interface IGridLayoutProps extends GridLayoutProps, SilverFormComponentBaseExtendedProps {
    }
    export class GridLayoutUtils {
        static getGridCssClass(options: CssGridOptions): string;
        static getGridChildCss(child: CssGridChild): CssGridCellStyle;
        static getSizeForLayoutElements(elements: SilverGridLayoutEntity[]): string[];
        static getSizeForLayoutElement({ layoutType, requestedSize }: SilverGridLayoutEntity): string;
    }
    export interface IGridLayoutCellProps {
        cellInfo: GridChildInfo;
        isInDesignMode?: boolean;
        useDesignerRenderer?: boolean;
    }
    export function GridLayoutCell(props: IGridLayoutCellProps): JSX.Element;
    export interface IDesignTimePreviewCellProps {
        rowIndex: number;
        colIndex: number;
        cell?: GridChildInfo;
    }
    export const DesignTimePreviewCell: (props: IDesignTimePreviewCellProps) => JSX.Element;
    export const DesignTimeGridLayout: (props: IGridLayoutProps) => JSX.Element;
    export const RunTimeGridLayout: (props: IGridLayoutProps) => JSX.Element;
    export function GridLayout(props: IGridLayoutProps): JSX.Element;
    export interface EventType {
        name: string;
        handler?: (event: any) => void;
    }
    export interface IUseServerEventsProps extends IServerEventHandlers {
        formSessionInfoId: string;
        shouldHandleEvents?: (id: string) => boolean;
    }
    interface IServerEventHandlers {
        onValidationChanged: (event: ValidationChangedEvent) => void;
        onCustomValidationChanged: (event: CustomValidationChangedEvent) => void;
        onDataChanged: (event: NewFormDataEvent) => void;
        onVisiblityChangedEvent: (event: VisibiltyEvent) => void;
        onEnableChangedEvent: (event: EnabledEvent) => void;
        onOutcomeChanged: (event: OutcomeRuleEvent) => void;
        onClearValidationsIssue: (event: ClearValidationIssuesEvent) => void;
        onReceiveNextInstruction?: (event: NextInstructionEvent | NextFormInstructionEvent) => void;
        surfaceId?: string;
    }
    export function useServerEvents(props: IUseServerEventsProps): void;
    export const isContainer: (component: SilverContainerChildInfo) => boolean;
    export function setTypeName<T>(object: {
        $type?: string;
        __type?: string;
    }, recursive?: boolean): T;
    export function useComponentDiplayState(rootContainer?: SilverContainerBaseProps): {
        getDisabledInfo: (componentId: string) => DisabledComponentInfo | undefined;
        isControlHidden: (componentId: string) => boolean;
        handleEnabilityChange: (data: EnabledEvent) => void;
        handleVisibilityChange: (data: VisibiltyEvent) => void;
        allComponents: SilverFormComponentBaseProps[];
    };
    export interface FetchOptions {
        url: string;
        urlParams: any;
    }
    export interface IApiRequestQueueOptions {
        id: string;
        callback: () => Promise<any>;
        useLastRequestedPromise?: boolean;
    }
    export function fetchWithParameters(options: FetchOptions): Promise<Response>;
    export function postWithParameters(options: FetchOptions): Promise<Response>;
    export function fetchHtml(options: FetchOptions): Promise<string>;
    export function fetchHtmlWithFromBody(options: FetchOptions): Promise<string>;
    /**
     *Make a queue of api requests and resove them one after other or use the last request.
     */
    export const asyncQueue: (option: IApiRequestQueueOptions) => Promise<any>;
    export interface IQueueUtilOptions {
        callback: () => Promise<any>;
        useLastRequestedPromise?: boolean;
    }
    /**
     * Need this wrapper class for MVC
     */
    export class QueueUtil {
        private id;
        constructor();
        enqueue(option: IQueueUtilOptions): Promise<any>;
    }
    export function ServiceDisconnectedPopup(): JSX.Element;
    export function renderServiceDisconnectedPopup(): void;
    export class EventsHub {
        connection: HubConnection;
        connectionPromise: Promise<void>;
        queue: QueueUtil;
        timer: number | undefined;
        get jsClientEventSessionId(): any;
        constructor();
        buildConnection(): HubConnection;
        startConnection(): Promise<void>;
        onConnectionSuccess(): void;
        /** Registers the event on the server. */
        registerEvent(eventId: string): Promise<void>;
        /** Unregister the event on the server. */
        unRegisterEvent(eventId: string): Promise<void>;
        registerEvents(eventIds: string[]): Promise<void>;
        /** Updates the user folders on the server. */
        updateUserFolders(): Promise<void>;
        afterConnectionSuccess(): void;
        /** Receives the event from the server and publishes the event here. */
        publishEvents: (events: DataPair[]) => void;
    }
    const eventsHub: EventsHub;
    export { eventsHub };
    export interface IUseLayoutProps {
        initialHeight: number;
        initialWidth: number;
        rootContainer: SilverContainerBaseProps;
        formHolder: HTMLElement;
        isDesigner?: boolean;
        inDialog?: boolean;
    }
    export function useLayout(props: IUseLayoutProps): {
        height: number | "auto";
        width: SizeUnit;
        isResizing: boolean | undefined;
    };
    export function getSessionInfo(rules: IBaseRuleInfo[], triggeredByComponentId: string, triggerType?: null, surfaceId?: string, providerComonentId?: string): RunRuleSessionInfo | null;
    export interface IUseRuleEngineProps {
        rules: IBaseRuleInfo[];
        surfaceId?: string;
        providerComonentId?: string;
    }
    export function useRuleEngine(props: IUseRuleEngineProps): (controlEvents: DecisionsControlEvent[]) => RunRuleSessionInfo | null;
    export const FormContextProvider: FC<IFormContextProviderProps>;
    export interface IValidationPanelProps {
        validations: FormInfoValidationIssue[];
        allComponents: SilverFormComponentBaseProps[];
    }
    export function ValidationPanel(props: IValidationPanelProps): JSX.Element | null;
    interface IRuleCommonProps {
        onRunRules: (sessionInfo: RunRuleSessionInfo[], cancelExecutionIfFormSubmitting: boolean, onComplete?: () => void) => void;
        isFormSubmitting: boolean;
    }
    export interface IUseAutoRunDataFlowProps extends IRuleCommonProps {
        rules: IBaseRuleInfo[];
    }
    export function useAutoRunDataFlow(props: IUseAutoRunDataFlowProps): void;
    export function LoadCssDocuments(documents: CssDocumentInfo[], parent: HTMLElement): Promise<void>;
    export function FormSurface(props: IFormSurfaceProps): JSX.Element | null;
    export interface ISelectedRowIndicator extends SelectionIndicatorProps {
    }
    export function SelectedRowIndicator(props: ISelectedRowIndicator): JSX.Element;
    export interface IDataRepeaterRowProps extends SelectionIndicatorProps {
        isEnabled: boolean;
        rootContainer: IFormContainerProps;
        rowId: string;
        initialControlsData?: DataPair[];
        className?: string;
        showSeparator?: boolean;
        onValueChange?: (rowId: string, updatedData: DataPair[]) => void;
        onSelectionChange?: (rowId: string) => void;
        rules: IBaseRuleInfo[];
        parentSessionInfoId: string;
        providerComonentId: string;
        onRunRules: (sessionInfo: RunRuleSessionInfo[]) => void;
        tabOrder: number;
    }
    export interface SelectionIndicatorProps {
        selectionIndicatorType: SelectionIndicatorType;
        LineIndicatorWidth: number;
        defaultBackgroundColor: DesignerColor;
        selectionBackgroundColor: DesignerColor;
        lineNumberAlignment: LabelAlignment;
        lineNumberVerticalAlignment: LabelVerticalAlignment;
        rowNumber: number;
        isSelected: boolean;
    }
    export function DataRepeaterRow(props: IDataRepeaterRowProps): JSX.Element;
    export function getPickOrCreateProps(forRegistrationId: string, handlePickedRegistration: (registrationId: string) => void, handleCreatedRegistration: (registration: any) => void): {
        registrationType: string;
        folderId: any;
        forRegistrationId: string;
        hidePick: boolean;
        hideCreate: boolean;
        handleCreatedRegistration: (registration: any) => void;
        handlePickedRegistration: (registrationId: string) => void;
        showCreateDialog: any;
        runBaseAction: any;
        onDialogOptionsChanged: () => void;
        onItemChoosen: () => void;
    };
    export function showDesigner(formId: string, formDesignerSessionId: string): void;
    export interface IDesignTimeDataRepeater {
        designTimeContentRoot?: SilverFormComponentBaseProps;
        componentId: string;
        formDesignerSessionId: string;
        formId: string;
        isInPreviewMode?: boolean;
    }
    export function DesignTimeDataRepeater(props: IDesignTimeDataRepeater): JSX.Element;
    export interface IDataRepeaterProps extends CompositeDataRepeaterProps, SilverFormComponentBaseExtendedProps {
        designTimeContentRoot: any;
    }
    export function DataRepeater(props: IDataRepeaterProps): JSX.Element;
    interface IControlMap {
        [key: string]: React.FunctionComponent<SilverFormComponentBaseExtendedProps> | React.ComponentClass<SilverFormComponentBaseExtendedProps> | (React.FC<Partial<SilverFormComponentBaseExtendedProps>> & ValidatationOnLayout);
    }
    export const ControlMap: IControlMap;
    export class Edges {
        top: number;
        right: number;
        bottom: number;
        left: number;
        constructor(top: number, right: number, bottom: number, left: number);
        static getPadding(el: HTMLBaseElement): Edges;
        static getMargin(el: HTMLBaseElement): Edges;
        static setPadding(el: HTMLBaseElement, padding: Edges): void;
        static setMargin(el: HTMLBaseElement, margin: Edges): void;
        toString(): string;
        static get empty(): Edges;
        get isEmpty(): boolean;
        add(more: Edges): void;
    }
    export class Size {
        width: number;
        height: number;
        constructor(width: number, height: number);
        toString(): string;
        IsEmpty(): boolean;
        isEqual(size: Size): boolean;
        static getMaxSize(size1: Size, size2: Size): Size;
        static getMinSize(size1: Size, size2: Size): Size;
        static skipElementBorder(size: Size, el: HTMLBaseElement): Size;
        static skipEdges(size: Size, edges: Edges): Size;
        static setToElement(size: Size, el: HTMLBaseElement): void;
        getCssProps(): {
            height: string;
            width: string;
        };
    }
    export function skipScrollBarSize(scrollContainer: HTMLBaseElement, size: Size): Size;
    export function hasVerticalScrollBar(el: HTMLBaseElement): boolean;
    export function hasHorizontalScrollBar(el: HTMLBaseElement): boolean;
    export function createHorizontalLayout(component: SilverFormComponentBaseProps, type: LayoutElementType, gap?: number): LayoutElement;
    export function createVerticalLayout(component: SilverFormComponentBaseProps, type: LayoutElementType, useHeightAsMinHeight?: boolean, gap?: number): LayoutElement;
    export function getChildStyle(options?: LayoutChildOptions, border?: number): CSSProperties;
    export function getComponentStyle(labelAttribute: LabelAttributes | undefined): CSSProperties | undefined;
    export function getRGBAColor(designerColor?: DesignerColor): string | null;
    export type BorderStyle = {
        radius: number;
        width: number;
        color: DesignerColor;
    };
    export type BackgroundOptions = {
        backgroundDesignerColor?: DesignerColor;
        backgroundType?: SilverContainerBackgroundType;
        transparentBackground?: boolean;
        backgroundImageSrc?: string;
        backgroundStretch?: boolean;
        backgroundAlignmentX?: SilverContainerBackgroundAlignmentX;
        backgroundAlignmentY?: SilverContainerBackgroundAlignmentY;
        backgroundImage?: ImageInfo;
    };
    export function getContainerStyle(options: SilverContainerBaseProps): {
        alignContent?: Property.AlignContent | undefined;
        alignItems?: Property.AlignItems | undefined;
        alignSelf?: Property.AlignSelf | undefined;
        alignTracks?: Property.AlignTracks | undefined;
        animationDelay?: Property.AnimationDelay<string & {}> | undefined;
        animationDirection?: Property.AnimationDirection | undefined;
        animationDuration?: Property.AnimationDuration<string & {}> | undefined;
        animationFillMode?: Property.AnimationFillMode | undefined;
        animationIterationCount?: Property.AnimationIterationCount | undefined;
        animationName?: Property.AnimationName | undefined;
        animationPlayState?: Property.AnimationPlayState | undefined;
        animationTimingFunction?: Property.AnimationTimingFunction | undefined;
        appearance?: Property.Appearance | undefined;
        aspectRatio?: Property.AspectRatio | undefined;
        backdropFilter?: Property.BackdropFilter | undefined;
        backfaceVisibility?: Property.BackfaceVisibility | undefined;
        backgroundAttachment?: Property.BackgroundAttachment | undefined;
        backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
        backgroundClip?: Property.BackgroundClip | undefined;
        backgroundColor?: Property.BackgroundColor | undefined;
        backgroundImage?: Property.BackgroundImage | undefined;
        backgroundOrigin?: Property.BackgroundOrigin | undefined;
        backgroundPositionX?: Property.BackgroundPositionX<string | number> | undefined;
        backgroundPositionY?: Property.BackgroundPositionY<string | number> | undefined;
        backgroundRepeat?: Property.BackgroundRepeat | undefined;
        backgroundSize?: Property.BackgroundSize<string | number> | undefined;
        blockOverflow?: Property.BlockOverflow | undefined;
        blockSize?: Property.BlockSize<string | number> | undefined;
        borderBlockColor?: Property.BorderBlockColor | undefined;
        borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
        borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
        borderBlockEndWidth?: Property.BorderBlockEndWidth<string | number> | undefined;
        borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
        borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
        borderBlockStartWidth?: Property.BorderBlockStartWidth<string | number> | undefined;
        borderBlockStyle?: Property.BorderBlockStyle | undefined;
        borderBlockWidth?: Property.BorderBlockWidth<string | number> | undefined;
        borderBottomColor?: Property.BorderBottomColor | undefined;
        borderBottomLeftRadius?: Property.BorderBottomLeftRadius<string | number> | undefined;
        borderBottomRightRadius?: Property.BorderBottomRightRadius<string | number> | undefined;
        borderBottomStyle?: Property.BorderBottomStyle | undefined;
        borderBottomWidth?: Property.BorderBottomWidth<string | number> | undefined;
        borderCollapse?: Property.BorderCollapse | undefined;
        borderEndEndRadius?: Property.BorderEndEndRadius<string | number> | undefined;
        borderEndStartRadius?: Property.BorderEndStartRadius<string | number> | undefined;
        borderImageOutset?: Property.BorderImageOutset<string | number> | undefined;
        borderImageRepeat?: Property.BorderImageRepeat | undefined;
        borderImageSlice?: Property.BorderImageSlice | undefined;
        borderImageSource?: Property.BorderImageSource | undefined;
        borderImageWidth?: Property.BorderImageWidth<string | number> | undefined;
        borderInlineColor?: Property.BorderInlineColor | undefined;
        borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
        borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
        borderInlineEndWidth?: Property.BorderInlineEndWidth<string | number> | undefined;
        borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
        borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
        borderInlineStartWidth?: Property.BorderInlineStartWidth<string | number> | undefined;
        borderInlineStyle?: Property.BorderInlineStyle | undefined;
        borderInlineWidth?: Property.BorderInlineWidth<string | number> | undefined;
        borderLeftColor?: Property.BorderLeftColor | undefined;
        borderLeftStyle?: Property.BorderLeftStyle | undefined;
        borderLeftWidth?: Property.BorderLeftWidth<string | number> | undefined;
        borderRightColor?: Property.BorderRightColor | undefined;
        borderRightStyle?: Property.BorderRightStyle | undefined;
        borderRightWidth?: Property.BorderRightWidth<string | number> | undefined;
        borderSpacing?: Property.BorderSpacing<string | number> | undefined;
        borderStartEndRadius?: Property.BorderStartEndRadius<string | number> | undefined;
        borderStartStartRadius?: Property.BorderStartStartRadius<string | number> | undefined;
        borderTopColor?: Property.BorderTopColor | undefined;
        borderTopLeftRadius?: Property.BorderTopLeftRadius<string | number> | undefined;
        borderTopRightRadius?: Property.BorderTopRightRadius<string | number> | undefined;
        borderTopStyle?: Property.BorderTopStyle | undefined;
        borderTopWidth?: Property.BorderTopWidth<string | number> | undefined;
        bottom?: Property.Bottom<string | number> | undefined;
        boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
        boxShadow?: Property.BoxShadow | undefined;
        boxSizing?: Property.BoxSizing | undefined;
        breakAfter?: Property.BreakAfter | undefined;
        breakBefore?: Property.BreakBefore | undefined;
        breakInside?: Property.BreakInside | undefined;
        captionSide?: Property.CaptionSide | undefined;
        caretColor?: Property.CaretColor | undefined;
        clear?: Property.Clear | undefined;
        clipPath?: Property.ClipPath | undefined;
        color?: Property.Color | undefined;
        colorAdjust?: Property.ColorAdjust | undefined;
        colorScheme?: Property.ColorScheme | undefined;
        columnCount?: Property.ColumnCount | undefined;
        columnFill?: Property.ColumnFill | undefined;
        columnGap?: Property.ColumnGap<string | number> | undefined;
        columnRuleColor?: Property.ColumnRuleColor | undefined;
        columnRuleStyle?: Property.ColumnRuleStyle | undefined;
        columnRuleWidth?: Property.ColumnRuleWidth<string | number> | undefined;
        columnSpan?: Property.ColumnSpan | undefined;
        columnWidth?: Property.ColumnWidth<string | number> | undefined;
        contain?: Property.Contain | undefined;
        content?: Property.Content | undefined;
        contentVisibility?: Property.ContentVisibility | undefined;
        counterIncrement?: Property.CounterIncrement | undefined;
        counterReset?: Property.CounterReset | undefined;
        counterSet?: Property.CounterSet | undefined;
        cursor?: Property.Cursor | undefined;
        direction?: Property.Direction | undefined;
        display?: Property.Display | undefined;
        emptyCells?: Property.EmptyCells | undefined;
        filter?: Property.Filter | undefined;
        flexBasis?: Property.FlexBasis<string | number> | undefined;
        flexDirection?: Property.FlexDirection | undefined;
        flexGrow?: Property.FlexGrow | undefined;
        flexShrink?: Property.FlexShrink | undefined;
        flexWrap?: Property.FlexWrap | undefined;
        float?: Property.Float | undefined;
        fontFamily?: Property.FontFamily | undefined;
        fontFeatureSettings?: Property.FontFeatureSettings | undefined;
        fontKerning?: Property.FontKerning | undefined;
        fontLanguageOverride?: Property.FontLanguageOverride | undefined;
        fontOpticalSizing?: Property.FontOpticalSizing | undefined;
        fontSize?: Property.FontSize<string | number> | undefined;
        fontSizeAdjust?: Property.FontSizeAdjust | undefined;
        fontSmooth?: Property.FontSmooth<string | number> | undefined;
        fontStretch?: Property.FontStretch | undefined;
        fontStyle?: Property.FontStyle | undefined;
        fontSynthesis?: Property.FontSynthesis | undefined;
        fontVariant?: Property.FontVariant | undefined;
        fontVariantCaps?: Property.FontVariantCaps | undefined;
        fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
        fontVariantLigatures?: Property.FontVariantLigatures | undefined;
        fontVariantNumeric?: Property.FontVariantNumeric | undefined;
        fontVariantPosition?: Property.FontVariantPosition | undefined;
        fontVariationSettings?: Property.FontVariationSettings | undefined;
        fontWeight?: Property.FontWeight | undefined;
        forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
        gridAutoColumns?: Property.GridAutoColumns<string | number> | undefined;
        gridAutoFlow?: Property.GridAutoFlow | undefined;
        gridAutoRows?: Property.GridAutoRows<string | number> | undefined;
        gridColumnEnd?: Property.GridColumnEnd | undefined;
        gridColumnStart?: Property.GridColumnStart | undefined;
        gridRowEnd?: Property.GridRowEnd | undefined;
        gridRowStart?: Property.GridRowStart | undefined;
        gridTemplateAreas?: Property.GridTemplateAreas | undefined;
        gridTemplateColumns?: Property.GridTemplateColumns<string | number> | undefined;
        gridTemplateRows?: Property.GridTemplateRows<string | number> | undefined;
        hangingPunctuation?: Property.HangingPunctuation | undefined;
        height?: Property.Height<string | number> | undefined;
        hyphens?: Property.Hyphens | undefined;
        imageOrientation?: Property.ImageOrientation | undefined;
        imageRendering?: Property.ImageRendering | undefined;
        imageResolution?: Property.ImageResolution | undefined;
        initialLetter?: Property.InitialLetter | undefined;
        inlineSize?: Property.InlineSize<string | number> | undefined;
        inset?: Property.Inset<string | number> | undefined;
        insetBlock?: Property.InsetBlock<string | number> | undefined;
        insetBlockEnd?: Property.InsetBlockEnd<string | number> | undefined;
        insetBlockStart?: Property.InsetBlockStart<string | number> | undefined;
        insetInline?: Property.InsetInline<string | number> | undefined;
        insetInlineEnd?: Property.InsetInlineEnd<string | number> | undefined;
        insetInlineStart?: Property.InsetInlineStart<string | number> | undefined;
        isolation?: Property.Isolation | undefined;
        justifyContent?: Property.JustifyContent | undefined;
        justifyItems?: Property.JustifyItems | undefined;
        justifySelf?: Property.JustifySelf | undefined;
        justifyTracks?: Property.JustifyTracks | undefined;
        left?: Property.Left<string | number> | undefined;
        letterSpacing?: Property.LetterSpacing<string | number> | undefined;
        lineBreak?: Property.LineBreak | undefined;
        lineHeight?: Property.LineHeight<string | number> | undefined;
        lineHeightStep?: Property.LineHeightStep<string | number> | undefined;
        listStyleImage?: Property.ListStyleImage | undefined;
        listStylePosition?: Property.ListStylePosition | undefined;
        listStyleType?: Property.ListStyleType | undefined;
        marginBlock?: Property.MarginBlock<string | number> | undefined;
        marginBlockEnd?: Property.MarginBlockEnd<string | number> | undefined;
        marginBlockStart?: Property.MarginBlockStart<string | number> | undefined;
        marginBottom?: Property.MarginBottom<string | number> | undefined;
        marginInline?: Property.MarginInline<string | number> | undefined;
        marginInlineEnd?: Property.MarginInlineEnd<string | number> | undefined;
        marginInlineStart?: Property.MarginInlineStart<string | number> | undefined;
        marginLeft?: Property.MarginLeft<string | number> | undefined;
        marginRight?: Property.MarginRight<string | number> | undefined;
        marginTop?: Property.MarginTop<string | number> | undefined;
        maskBorderMode?: Property.MaskBorderMode | undefined;
        maskBorderOutset?: Property.MaskBorderOutset<string | number> | undefined;
        maskBorderRepeat?: Property.MaskBorderRepeat | undefined;
        maskBorderSlice?: Property.MaskBorderSlice | undefined;
        maskBorderSource?: Property.MaskBorderSource | undefined;
        maskBorderWidth?: Property.MaskBorderWidth<string | number> | undefined;
        maskClip?: Property.MaskClip | undefined;
        maskComposite?: Property.MaskComposite | undefined;
        maskImage?: Property.MaskImage | undefined;
        maskMode?: Property.MaskMode | undefined;
        maskOrigin?: Property.MaskOrigin | undefined;
        maskPosition?: Property.MaskPosition<string | number> | undefined;
        maskRepeat?: Property.MaskRepeat | undefined;
        maskSize?: Property.MaskSize<string | number> | undefined;
        maskType?: Property.MaskType | undefined;
        mathStyle?: Property.MathStyle | undefined;
        maxBlockSize?: Property.MaxBlockSize<string | number> | undefined;
        maxHeight?: Property.MaxHeight<string | number> | undefined;
        maxInlineSize?: Property.MaxInlineSize<string | number> | undefined;
        maxLines?: Property.MaxLines | undefined;
        maxWidth?: Property.MaxWidth<string | number> | undefined;
        minBlockSize?: Property.MinBlockSize<string | number> | undefined;
        minHeight?: Property.MinHeight<string | number> | undefined;
        minInlineSize?: Property.MinInlineSize<string | number> | undefined;
        minWidth?: Property.MinWidth<string | number> | undefined;
        mixBlendMode?: Property.MixBlendMode | undefined;
        motionDistance?: Property.OffsetDistance<string | number> | undefined;
        motionPath?: Property.OffsetPath | undefined;
        motionRotation?: Property.OffsetRotate | undefined;
        objectFit?: Property.ObjectFit | undefined;
        objectPosition?: Property.ObjectPosition<string | number> | undefined;
        offsetAnchor?: Property.OffsetAnchor<string | number> | undefined;
        offsetDistance?: Property.OffsetDistance<string | number> | undefined;
        offsetPath?: Property.OffsetPath | undefined;
        offsetRotate?: Property.OffsetRotate | undefined;
        offsetRotation?: Property.OffsetRotate | undefined;
        opacity?: Property.Opacity | undefined;
        order?: Property.Order | undefined;
        orphans?: Property.Orphans | undefined;
        outlineColor?: Property.OutlineColor | undefined;
        outlineOffset?: Property.OutlineOffset<string | number> | undefined;
        outlineStyle?: Property.OutlineStyle | undefined;
        outlineWidth?: Property.OutlineWidth<string | number> | undefined;
        overflowAnchor?: Property.OverflowAnchor | undefined;
        overflowBlock?: Property.OverflowBlock | undefined;
        overflowClipBox?: Property.OverflowClipBox | undefined;
        overflowClipMargin?: Property.OverflowClipMargin<string | number> | undefined;
        overflowInline?: Property.OverflowInline | undefined;
        overflowWrap?: Property.OverflowWrap | undefined;
        overflowX?: Property.OverflowX | undefined;
        overflowY?: Property.OverflowY | undefined;
        overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
        overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
        overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
        overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
        paddingBlock?: Property.PaddingBlock<string | number> | undefined;
        paddingBlockEnd?: Property.PaddingBlockEnd<string | number> | undefined;
        paddingBlockStart?: Property.PaddingBlockStart<string | number> | undefined;
        paddingBottom?: Property.PaddingBottom<string | number> | undefined;
        paddingInline?: Property.PaddingInline<string | number> | undefined;
        paddingInlineEnd?: Property.PaddingInlineEnd<string | number> | undefined;
        paddingInlineStart?: Property.PaddingInlineStart<string | number> | undefined;
        paddingLeft?: Property.PaddingLeft<string | number> | undefined;
        paddingRight?: Property.PaddingRight<string | number> | undefined;
        paddingTop?: Property.PaddingTop<string | number> | undefined;
        pageBreakAfter?: Property.PageBreakAfter | undefined;
        pageBreakBefore?: Property.PageBreakBefore | undefined;
        pageBreakInside?: Property.PageBreakInside | undefined;
        paintOrder?: Property.PaintOrder | undefined;
        perspective?: Property.Perspective<string | number> | undefined;
        perspectiveOrigin?: Property.PerspectiveOrigin<string | number> | undefined;
        placeContent?: Property.PlaceContent | undefined;
        pointerEvents?: Property.PointerEvents | undefined;
        position?: Property.Position | undefined;
        quotes?: Property.Quotes | undefined;
        resize?: Property.Resize | undefined;
        right?: Property.Right<string | number> | undefined;
        rotate?: Property.Rotate | undefined;
        rowGap?: Property.RowGap<string | number> | undefined;
        rubyAlign?: Property.RubyAlign | undefined;
        rubyMerge?: Property.RubyMerge | undefined;
        rubyPosition?: Property.RubyPosition | undefined;
        scale?: Property.Scale | undefined;
        scrollBehavior?: Property.ScrollBehavior | undefined;
        scrollMargin?: Property.ScrollMargin<string | number> | undefined;
        scrollMarginBlock?: Property.ScrollMarginBlock<string | number> | undefined;
        scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<string | number> | undefined;
        scrollMarginBlockStart?: Property.ScrollMarginBlockStart<string | number> | undefined;
        scrollMarginBottom?: Property.ScrollMarginBottom<string | number> | undefined;
        scrollMarginInline?: Property.ScrollMarginInline<string | number> | undefined;
        scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<string | number> | undefined;
        scrollMarginInlineStart?: Property.ScrollMarginInlineStart<string | number> | undefined;
        scrollMarginLeft?: Property.ScrollMarginLeft<string | number> | undefined;
        scrollMarginRight?: Property.ScrollMarginRight<string | number> | undefined;
        scrollMarginTop?: Property.ScrollMarginTop<string | number> | undefined;
        scrollPadding?: Property.ScrollPadding<string | number> | undefined;
        scrollPaddingBlock?: Property.ScrollPaddingBlock<string | number> | undefined;
        scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<string | number> | undefined;
        scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<string | number> | undefined;
        scrollPaddingBottom?: Property.ScrollPaddingBottom<string | number> | undefined;
        scrollPaddingInline?: Property.ScrollPaddingInline<string | number> | undefined;
        scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<string | number> | undefined;
        scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<string | number> | undefined;
        scrollPaddingLeft?: Property.ScrollPaddingLeft<string | number> | undefined;
        scrollPaddingRight?: Property.ScrollPaddingRight<string | number> | undefined;
        scrollPaddingTop?: Property.ScrollPaddingTop<string | number> | undefined;
        scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
        scrollSnapMargin?: Property.ScrollMargin<string | number> | undefined;
        scrollSnapMarginBottom?: Property.ScrollMarginBottom<string | number> | undefined;
        scrollSnapMarginLeft?: Property.ScrollMarginLeft<string | number> | undefined;
        scrollSnapMarginRight?: Property.ScrollMarginRight<string | number> | undefined;
        scrollSnapMarginTop?: Property.ScrollMarginTop<string | number> | undefined;
        scrollSnapStop?: Property.ScrollSnapStop | undefined;
        scrollSnapType?: Property.ScrollSnapType | undefined;
        scrollbarColor?: Property.ScrollbarColor | undefined;
        scrollbarGutter?: Property.ScrollbarGutter | undefined;
        scrollbarWidth?: Property.ScrollbarWidth | undefined;
        shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
        shapeMargin?: Property.ShapeMargin<string | number> | undefined;
        shapeOutside?: Property.ShapeOutside | undefined;
        tabSize?: Property.TabSize<string | number> | undefined;
        tableLayout?: Property.TableLayout | undefined;
        textAlign?: Property.TextAlign | undefined;
        textAlignLast?: Property.TextAlignLast | undefined;
        textCombineUpright?: Property.TextCombineUpright | undefined;
        textDecorationColor?: Property.TextDecorationColor | undefined;
        textDecorationLine?: Property.TextDecorationLine | undefined;
        textDecorationSkip?: Property.TextDecorationSkip | undefined;
        textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
        textDecorationStyle?: Property.TextDecorationStyle | undefined;
        textDecorationThickness?: Property.TextDecorationThickness<string | number> | undefined;
        textDecorationWidth?: Property.TextDecorationThickness<string | number> | undefined;
        textEmphasisColor?: Property.TextEmphasisColor | undefined;
        textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
        textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
        textIndent?: Property.TextIndent<string | number> | undefined;
        textJustify?: Property.TextJustify | undefined;
        textOrientation?: Property.TextOrientation | undefined;
        textOverflow?: Property.TextOverflow | undefined;
        textRendering?: Property.TextRendering | undefined;
        textShadow?: Property.TextShadow | undefined;
        textSizeAdjust?: Property.TextSizeAdjust | undefined;
        textTransform?: Property.TextTransform | undefined;
        textUnderlineOffset?: Property.TextUnderlineOffset<string | number> | undefined;
        textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
        top?: Property.Top<string | number> | undefined;
        touchAction?: Property.TouchAction | undefined;
        transform?: Property.Transform | undefined;
        transformBox?: Property.TransformBox | undefined;
        transformOrigin?: Property.TransformOrigin<string | number> | undefined;
        transformStyle?: Property.TransformStyle | undefined;
        transitionDelay?: Property.TransitionDelay<string & {}> | undefined;
        transitionDuration?: Property.TransitionDuration<string & {}> | undefined;
        transitionProperty?: Property.TransitionProperty | undefined;
        transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
        translate?: Property.Translate<string | number> | undefined;
        unicodeBidi?: Property.UnicodeBidi | undefined;
        userSelect?: Property.UserSelect | undefined;
        verticalAlign?: Property.VerticalAlign<string | number> | undefined;
        visibility?: Property.Visibility | undefined;
        whiteSpace?: Property.WhiteSpace | undefined;
        widows?: Property.Widows | undefined;
        width?: Property.Width<string | number> | undefined;
        willChange?: Property.WillChange | undefined;
        wordBreak?: Property.WordBreak | undefined;
        wordSpacing?: Property.WordSpacing<string | number> | undefined;
        wordWrap?: Property.WordWrap | undefined;
        writingMode?: Property.WritingMode | undefined;
        zIndex?: Property.ZIndex | undefined;
        zoom?: Property.Zoom | undefined;
        all?: Globals | undefined;
        animation?: Property.Animation<string & {}> | undefined;
        background?: Property.Background<string | number> | undefined;
        backgroundPosition?: Property.BackgroundPosition<string | number> | undefined;
        border?: Property.Border<string | number> | undefined;
        borderBlock?: Property.BorderBlock<string | number> | undefined;
        borderBlockEnd?: Property.BorderBlockEnd<string | number> | undefined;
        borderBlockStart?: Property.BorderBlockStart<string | number> | undefined;
        borderBottom?: Property.BorderBottom<string | number> | undefined;
        borderColor?: Property.BorderColor | undefined;
        borderImage?: Property.BorderImage | undefined;
        borderInline?: Property.BorderInline<string | number> | undefined;
        borderInlineEnd?: Property.BorderInlineEnd<string | number> | undefined;
        borderInlineStart?: Property.BorderInlineStart<string | number> | undefined;
        borderLeft?: Property.BorderLeft<string | number> | undefined;
        borderRadius?: Property.BorderRadius<string | number> | undefined;
        borderRight?: Property.BorderRight<string | number> | undefined;
        borderStyle?: Property.BorderStyle | undefined;
        borderTop?: Property.BorderTop<string | number> | undefined;
        borderWidth?: Property.BorderWidth<string | number> | undefined;
        columnRule?: Property.ColumnRule<string | number> | undefined;
        columns?: Property.Columns<string | number> | undefined;
        flex?: Property.Flex<string | number> | undefined;
        flexFlow?: Property.FlexFlow | undefined;
        font?: Property.Font | undefined;
        gap?: Property.Gap<string | number> | undefined;
        grid?: Property.Grid | undefined;
        gridArea?: Property.GridArea | undefined;
        gridColumn?: Property.GridColumn | undefined;
        gridRow?: Property.GridRow | undefined;
        gridTemplate?: Property.GridTemplate | undefined;
        lineClamp?: Property.LineClamp | undefined;
        listStyle?: Property.ListStyle | undefined;
        margin?: Property.Margin<string | number> | undefined;
        mask?: Property.Mask<string | number> | undefined;
        maskBorder?: Property.MaskBorder | undefined;
        motion?: Property.Offset<string | number> | undefined;
        offset?: Property.Offset<string | number> | undefined;
        outline?: Property.Outline<string | number> | undefined;
        overflow?: Property.Overflow | undefined;
        overscrollBehavior?: Property.OverscrollBehavior | undefined;
        padding?: Property.Padding<string | number> | undefined;
        placeItems?: Property.PlaceItems | undefined;
        placeSelf?: Property.PlaceSelf | undefined;
        textDecoration?: Property.TextDecoration<string | number> | undefined;
        textEmphasis?: Property.TextEmphasis | undefined;
        transition?: Property.Transition<string & {}> | undefined;
        MozAnimationDelay?: Property.AnimationDelay<string & {}> | undefined;
        MozAnimationDirection?: Property.AnimationDirection | undefined;
        MozAnimationDuration?: Property.AnimationDuration<string & {}> | undefined;
        MozAnimationFillMode?: Property.AnimationFillMode | undefined;
        MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
        MozAnimationName?: Property.AnimationName | undefined;
        MozAnimationPlayState?: Property.AnimationPlayState | undefined;
        MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
        MozAppearance?: Property.MozAppearance | undefined;
        MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
        MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
        MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
        MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
        MozBorderEndWidth?: Property.BorderInlineEndWidth<string | number> | undefined;
        MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
        MozBorderRightColors?: Property.MozBorderRightColors | undefined;
        MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
        MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
        MozBorderTopColors?: Property.MozBorderTopColors | undefined;
        MozBoxSizing?: Property.BoxSizing | undefined;
        MozColumnCount?: Property.ColumnCount | undefined;
        MozColumnFill?: Property.ColumnFill | undefined;
        MozColumnGap?: Property.ColumnGap<string | number> | undefined;
        MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
        MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
        MozColumnRuleWidth?: Property.ColumnRuleWidth<string | number> | undefined;
        MozColumnWidth?: Property.ColumnWidth<string | number> | undefined;
        MozContextProperties?: Property.MozContextProperties | undefined;
        MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
        MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
        MozHyphens?: Property.Hyphens | undefined;
        MozImageRegion?: Property.MozImageRegion | undefined;
        MozMarginEnd?: Property.MarginInlineEnd<string | number> | undefined;
        MozMarginStart?: Property.MarginInlineStart<string | number> | undefined;
        MozOrient?: Property.MozOrient | undefined;
        MozOsxFontSmoothing?: Property.FontSmooth<string | number> | undefined;
        MozPaddingEnd?: Property.PaddingInlineEnd<string | number> | undefined;
        MozPaddingStart?: Property.PaddingInlineStart<string | number> | undefined;
        MozPerspective?: Property.Perspective<string | number> | undefined;
        MozPerspectiveOrigin?: Property.PerspectiveOrigin<string | number> | undefined;
        MozStackSizing?: Property.MozStackSizing | undefined;
        MozTabSize?: Property.TabSize<string | number> | undefined;
        MozTextBlink?: Property.MozTextBlink | undefined;
        MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
        MozTransformOrigin?: Property.TransformOrigin<string | number> | undefined;
        MozTransformStyle?: Property.TransformStyle | undefined;
        MozTransitionDelay?: Property.TransitionDelay<string & {}> | undefined;
        MozTransitionDuration?: Property.TransitionDuration<string & {}> | undefined;
        MozTransitionProperty?: Property.TransitionProperty | undefined;
        MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
        MozUserFocus?: Property.MozUserFocus | undefined;
        MozUserModify?: Property.MozUserModify | undefined;
        MozUserSelect?: Property.UserSelect | undefined;
        MozWindowDragging?: Property.MozWindowDragging | undefined;
        MozWindowShadow?: Property.MozWindowShadow | undefined;
        msAccelerator?: Property.MsAccelerator | undefined;
        msAlignSelf?: Property.AlignSelf | undefined;
        msBlockProgression?: Property.MsBlockProgression | undefined;
        msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
        msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
        msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
        msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
        msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
        msContentZooming?: Property.MsContentZooming | undefined;
        msFilter?: Property.MsFilter | undefined;
        msFlexDirection?: Property.FlexDirection | undefined;
        msFlexPositive?: Property.FlexGrow | undefined;
        msFlowFrom?: Property.MsFlowFrom | undefined;
        msFlowInto?: Property.MsFlowInto | undefined;
        msGridColumns?: Property.MsGridColumns<string | number> | undefined;
        msGridRows?: Property.MsGridRows<string | number> | undefined;
        msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
        msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
        msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
        msHyphenateLimitZone?: Property.MsHyphenateLimitZone<string | number> | undefined;
        msHyphens?: Property.Hyphens | undefined;
        msImeAlign?: Property.MsImeAlign | undefined;
        msJustifySelf?: Property.JustifySelf | undefined;
        msLineBreak?: Property.LineBreak | undefined;
        msOrder?: Property.Order | undefined;
        msOverflowStyle?: Property.MsOverflowStyle | undefined;
        msOverflowX?: Property.OverflowX | undefined;
        msOverflowY?: Property.OverflowY | undefined;
        msScrollChaining?: Property.MsScrollChaining | undefined;
        msScrollLimitXMax?: Property.MsScrollLimitXMax<string | number> | undefined;
        msScrollLimitXMin?: Property.MsScrollLimitXMin<string | number> | undefined;
        msScrollLimitYMax?: Property.MsScrollLimitYMax<string | number> | undefined;
        msScrollLimitYMin?: Property.MsScrollLimitYMin<string | number> | undefined;
        msScrollRails?: Property.MsScrollRails | undefined;
        msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
        msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
        msScrollSnapType?: Property.MsScrollSnapType | undefined;
        msScrollTranslation?: Property.MsScrollTranslation | undefined;
        msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
        msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
        msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
        msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
        msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
        msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
        msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
        msTextAutospace?: Property.MsTextAutospace | undefined;
        msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
        msTextOverflow?: Property.TextOverflow | undefined;
        msTouchAction?: Property.TouchAction | undefined;
        msTouchSelect?: Property.MsTouchSelect | undefined;
        msTransform?: Property.Transform | undefined;
        msTransformOrigin?: Property.TransformOrigin<string | number> | undefined;
        msTransitionDelay?: Property.TransitionDelay<string & {}> | undefined;
        msTransitionDuration?: Property.TransitionDuration<string & {}> | undefined;
        msTransitionProperty?: Property.TransitionProperty | undefined;
        msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
        msUserSelect?: Property.MsUserSelect | undefined;
        msWordBreak?: Property.WordBreak | undefined;
        msWrapFlow?: Property.MsWrapFlow | undefined;
        msWrapMargin?: Property.MsWrapMargin<string | number> | undefined;
        msWrapThrough?: Property.MsWrapThrough | undefined;
        msWritingMode?: Property.WritingMode | undefined;
        WebkitAlignContent?: Property.AlignContent | undefined;
        WebkitAlignItems?: Property.AlignItems | undefined;
        WebkitAlignSelf?: Property.AlignSelf | undefined;
        WebkitAnimationDelay?: Property.AnimationDelay<string & {}> | undefined;
        WebkitAnimationDirection?: Property.AnimationDirection | undefined;
        WebkitAnimationDuration?: Property.AnimationDuration<string & {}> | undefined;
        WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
        WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
        WebkitAnimationName?: Property.AnimationName | undefined;
        WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
        WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
        WebkitAppearance?: Property.WebkitAppearance | undefined;
        WebkitBackdropFilter?: Property.BackdropFilter | undefined;
        WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
        WebkitBackgroundClip?: Property.BackgroundClip | undefined;
        WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
        WebkitBackgroundSize?: Property.BackgroundSize<string | number> | undefined;
        WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
        WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
        WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<string | number> | undefined;
        WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<string | number> | undefined;
        WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<string | number> | undefined;
        WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
        WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<string | number> | undefined;
        WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<string | number> | undefined;
        WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
        WebkitBoxReflect?: Property.WebkitBoxReflect<string | number> | undefined;
        WebkitBoxShadow?: Property.BoxShadow | undefined;
        WebkitBoxSizing?: Property.BoxSizing | undefined;
        WebkitClipPath?: Property.ClipPath | undefined;
        WebkitColumnCount?: Property.ColumnCount | undefined;
        WebkitColumnFill?: Property.ColumnFill | undefined;
        WebkitColumnGap?: Property.ColumnGap<string | number> | undefined;
        WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
        WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
        WebkitColumnRuleWidth?: Property.ColumnRuleWidth<string | number> | undefined;
        WebkitColumnSpan?: Property.ColumnSpan | undefined;
        WebkitColumnWidth?: Property.ColumnWidth<string | number> | undefined;
        WebkitFilter?: Property.Filter | undefined;
        WebkitFlexBasis?: Property.FlexBasis<string | number> | undefined;
        WebkitFlexDirection?: Property.FlexDirection | undefined;
        WebkitFlexGrow?: Property.FlexGrow | undefined;
        WebkitFlexShrink?: Property.FlexShrink | undefined;
        WebkitFlexWrap?: Property.FlexWrap | undefined;
        WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
        WebkitFontKerning?: Property.FontKerning | undefined;
        WebkitFontSmoothing?: Property.FontSmooth<string | number> | undefined;
        WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
        WebkitHyphens?: Property.Hyphens | undefined;
        WebkitJustifyContent?: Property.JustifyContent | undefined;
        WebkitLineBreak?: Property.LineBreak | undefined;
        WebkitLineClamp?: Property.WebkitLineClamp | undefined;
        WebkitMarginEnd?: Property.MarginInlineEnd<string | number> | undefined;
        WebkitMarginStart?: Property.MarginInlineStart<string | number> | undefined;
        WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
        WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<string | number> | undefined;
        WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
        WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
        WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
        WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<string | number> | undefined;
        WebkitMaskClip?: Property.WebkitMaskClip | undefined;
        WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
        WebkitMaskImage?: Property.WebkitMaskImage | undefined;
        WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
        WebkitMaskPosition?: Property.WebkitMaskPosition<string | number> | undefined;
        WebkitMaskPositionX?: Property.WebkitMaskPositionX<string | number> | undefined;
        WebkitMaskPositionY?: Property.WebkitMaskPositionY<string | number> | undefined;
        WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
        WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
        WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
        WebkitMaskSize?: Property.WebkitMaskSize<string | number> | undefined;
        WebkitMaxInlineSize?: Property.MaxInlineSize<string | number> | undefined;
        WebkitOrder?: Property.Order | undefined;
        WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
        WebkitPaddingEnd?: Property.PaddingInlineEnd<string | number> | undefined;
        WebkitPaddingStart?: Property.PaddingInlineStart<string | number> | undefined;
        WebkitPerspective?: Property.Perspective<string | number> | undefined;
        WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<string | number> | undefined;
        WebkitPrintColorAdjust?: Property.ColorAdjust | undefined;
        WebkitRubyPosition?: Property.RubyPosition | undefined;
        WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
        WebkitShapeMargin?: Property.ShapeMargin<string | number> | undefined;
        WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
        WebkitTextCombine?: Property.TextCombineUpright | undefined;
        WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
        WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
        WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
        WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
        WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
        WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
        WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
        WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
        WebkitTextOrientation?: Property.TextOrientation | undefined;
        WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
        WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
        WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<string | number> | undefined;
        WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
        WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
        WebkitTransform?: Property.Transform | undefined;
        WebkitTransformOrigin?: Property.TransformOrigin<string | number> | undefined;
        WebkitTransformStyle?: Property.TransformStyle | undefined;
        WebkitTransitionDelay?: Property.TransitionDelay<string & {}> | undefined;
        WebkitTransitionDuration?: Property.TransitionDuration<string & {}> | undefined;
        WebkitTransitionProperty?: Property.TransitionProperty | undefined;
        WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
        WebkitUserModify?: Property.WebkitUserModify | undefined;
        WebkitUserSelect?: Property.UserSelect | undefined;
        WebkitWritingMode?: Property.WritingMode | undefined;
        MozAnimation?: Property.Animation<string & {}> | undefined;
        MozBorderImage?: Property.BorderImage | undefined;
        MozColumnRule?: Property.ColumnRule<string | number> | undefined;
        MozColumns?: Property.Columns<string | number> | undefined;
        MozTransition?: Property.Transition<string & {}> | undefined;
        msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
        msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
        msFlex?: Property.Flex<string | number> | undefined;
        msScrollLimit?: Property.MsScrollLimit | undefined;
        msScrollSnapX?: Property.MsScrollSnapX | undefined;
        msScrollSnapY?: Property.MsScrollSnapY | undefined;
        msTransition?: Property.Transition<string & {}> | undefined;
        WebkitAnimation?: Property.Animation<string & {}> | undefined;
        WebkitBorderBefore?: Property.WebkitBorderBefore<string | number> | undefined;
        WebkitBorderImage?: Property.BorderImage | undefined;
        WebkitBorderRadius?: Property.BorderRadius<string | number> | undefined;
        WebkitColumnRule?: Property.ColumnRule<string | number> | undefined;
        WebkitColumns?: Property.Columns<string | number> | undefined;
        WebkitFlex?: Property.Flex<string | number> | undefined;
        WebkitFlexFlow?: Property.FlexFlow | undefined;
        WebkitMask?: Property.WebkitMask<string | number> | undefined;
        WebkitMaskBoxImage?: Property.MaskBorder | undefined;
        WebkitTextEmphasis?: Property.TextEmphasis | undefined;
        WebkitTextStroke?: Property.WebkitTextStroke<string | number> | undefined;
        WebkitTransition?: Property.Transition<string & {}> | undefined;
        azimuth?: Property.Azimuth | undefined;
        boxAlign?: Property.BoxAlign | undefined;
        boxDirection?: Property.BoxDirection | undefined;
        boxFlex?: Property.BoxFlex | undefined;
        boxFlexGroup?: Property.BoxFlexGroup | undefined;
        boxLines?: Property.BoxLines | undefined;
        boxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
        boxOrient?: Property.BoxOrient | undefined;
        boxPack?: Property.BoxPack | undefined;
        clip?: Property.Clip | undefined;
        fontVariantAlternates?: Property.FontVariantAlternates | undefined;
        gridColumnGap?: Property.GridColumnGap<string | number> | undefined;
        gridGap?: Property.GridGap<string | number> | undefined;
        gridRowGap?: Property.GridRowGap<string | number> | undefined;
        imeMode?: Property.ImeMode | undefined;
        offsetBlock?: Property.InsetBlock<string | number> | undefined;
        offsetBlockEnd?: Property.InsetBlockEnd<string | number> | undefined;
        offsetBlockStart?: Property.InsetBlockStart<string | number> | undefined;
        offsetInline?: Property.InsetInline<string | number> | undefined;
        offsetInlineEnd?: Property.InsetInlineEnd<string | number> | undefined;
        offsetInlineStart?: Property.InsetInlineStart<string | number> | undefined;
        scrollSnapCoordinate?: Property.ScrollSnapCoordinate<string | number> | undefined;
        scrollSnapDestination?: Property.ScrollSnapDestination<string | number> | undefined;
        scrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
        scrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
        scrollSnapTypeX?: Property.ScrollSnapTypeX | undefined;
        scrollSnapTypeY?: Property.ScrollSnapTypeY | undefined;
        scrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
        KhtmlBoxAlign?: Property.BoxAlign | undefined;
        KhtmlBoxDirection?: Property.BoxDirection | undefined;
        KhtmlBoxFlex?: Property.BoxFlex | undefined;
        KhtmlBoxFlexGroup?: Property.BoxFlexGroup | undefined;
        KhtmlBoxLines?: Property.BoxLines | undefined;
        KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
        KhtmlBoxOrient?: Property.BoxOrient | undefined;
        KhtmlBoxPack?: Property.BoxPack | undefined;
        KhtmlLineBreak?: Property.LineBreak | undefined;
        KhtmlOpacity?: Property.Opacity | undefined;
        KhtmlUserSelect?: Property.UserSelect | undefined;
        MozBackgroundClip?: Property.BackgroundClip | undefined;
        MozBackgroundInlinePolicy?: Property.BoxDecorationBreak | undefined;
        MozBackgroundOrigin?: Property.BackgroundOrigin | undefined;
        MozBackgroundSize?: Property.BackgroundSize<string | number> | undefined;
        MozBinding?: Property.MozBinding | undefined;
        MozBorderRadius?: Property.BorderRadius<string | number> | undefined;
        MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<string | number> | undefined;
        MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<string | number> | undefined;
        MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<string | number> | undefined;
        MozBorderRadiusTopright?: Property.BorderTopRightRadius<string | number> | undefined;
        MozBoxAlign?: Property.BoxAlign | undefined;
        MozBoxDirection?: Property.BoxDirection | undefined;
        MozBoxFlex?: Property.BoxFlex | undefined;
        MozBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
        MozBoxOrient?: Property.BoxOrient | undefined;
        MozBoxPack?: Property.BoxPack | undefined;
        MozBoxShadow?: Property.BoxShadow | undefined;
        MozFloatEdge?: Property.MozFloatEdge | undefined;
        MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon | undefined;
        MozOpacity?: Property.Opacity | undefined;
        MozOutline?: Property.Outline<string | number> | undefined;
        MozOutlineColor?: Property.OutlineColor | undefined;
        MozOutlineRadius?: Property.MozOutlineRadius<string | number> | undefined;
        MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<string | number> | undefined;
        MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<string | number> | undefined;
        MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<string | number> | undefined;
        MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<string | number> | undefined;
        MozOutlineStyle?: Property.OutlineStyle | undefined;
        MozOutlineWidth?: Property.OutlineWidth<string | number> | undefined;
        MozTextAlignLast?: Property.TextAlignLast | undefined;
        MozTextDecorationColor?: Property.TextDecorationColor | undefined;
        MozTextDecorationLine?: Property.TextDecorationLine | undefined;
        MozTextDecorationStyle?: Property.TextDecorationStyle | undefined;
        MozUserInput?: Property.MozUserInput | undefined;
        msImeMode?: Property.ImeMode | undefined;
        msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
        OAnimation?: Property.Animation<string & {}> | undefined;
        OAnimationDelay?: Property.AnimationDelay<string & {}> | undefined;
        OAnimationDirection?: Property.AnimationDirection | undefined;
        OAnimationDuration?: Property.AnimationDuration<string & {}> | undefined;
        OAnimationFillMode?: Property.AnimationFillMode | undefined;
        OAnimationIterationCount?: Property.AnimationIterationCount | undefined;
        OAnimationName?: Property.AnimationName | undefined;
        OAnimationPlayState?: Property.AnimationPlayState | undefined;
        OAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
        OBackgroundSize?: Property.BackgroundSize<string | number> | undefined;
        OBorderImage?: Property.BorderImage | undefined;
        OObjectFit?: Property.ObjectFit | undefined;
        OObjectPosition?: Property.ObjectPosition<string | number> | undefined;
        OTabSize?: Property.TabSize<string | number> | undefined;
        OTextOverflow?: Property.TextOverflow | undefined;
        OTransform?: Property.Transform | undefined;
        OTransformOrigin?: Property.TransformOrigin<string | number> | undefined;
        OTransition?: Property.Transition<string & {}> | undefined;
        OTransitionDelay?: Property.TransitionDelay<string & {}> | undefined;
        OTransitionDuration?: Property.TransitionDuration<string & {}> | undefined;
        OTransitionProperty?: Property.TransitionProperty | undefined;
        OTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
        WebkitBoxAlign?: Property.BoxAlign | undefined;
        WebkitBoxDirection?: Property.BoxDirection | undefined;
        WebkitBoxFlex?: Property.BoxFlex | undefined;
        WebkitBoxFlexGroup?: Property.BoxFlexGroup | undefined;
        WebkitBoxLines?: Property.BoxLines | undefined;
        WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
        WebkitBoxOrient?: Property.BoxOrient | undefined;
        WebkitBoxPack?: Property.BoxPack | undefined;
        WebkitScrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
        WebkitScrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
        alignmentBaseline?: Property.AlignmentBaseline | undefined;
        baselineShift?: Property.BaselineShift<string | number> | undefined;
        clipRule?: Property.ClipRule | undefined;
        colorInterpolation?: Property.ColorInterpolation | undefined;
        colorRendering?: Property.ColorRendering | undefined;
        dominantBaseline?: Property.DominantBaseline | undefined;
        fill?: Property.Fill | undefined;
        fillOpacity?: Property.FillOpacity | undefined;
        fillRule?: Property.FillRule | undefined;
        floodColor?: Property.FloodColor | undefined;
        floodOpacity?: Property.FloodOpacity | undefined;
        glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
        lightingColor?: Property.LightingColor | undefined;
        marker?: Property.Marker | undefined;
        markerEnd?: Property.MarkerEnd | undefined;
        markerMid?: Property.MarkerMid | undefined;
        markerStart?: Property.MarkerStart | undefined;
        shapeRendering?: Property.ShapeRendering | undefined;
        stopColor?: Property.StopColor | undefined;
        stopOpacity?: Property.StopOpacity | undefined;
        stroke?: Property.Stroke | undefined;
        strokeDasharray?: Property.StrokeDasharray<string | number> | undefined;
        strokeDashoffset?: Property.StrokeDashoffset<string | number> | undefined;
        strokeLinecap?: Property.StrokeLinecap | undefined;
        strokeLinejoin?: Property.StrokeLinejoin | undefined;
        strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
        strokeOpacity?: Property.StrokeOpacity | undefined;
        strokeWidth?: Property.StrokeWidth<string | number> | undefined;
        textAnchor?: Property.TextAnchor | undefined;
        vectorEffect?: Property.VectorEffect | undefined;
    };
    export function getBackgroundStyle(options: BackgroundOptions): CSSProperties;
    export function useMaxMinSize(maxHeight?: number, minHeight?: number): (props?: any) => ClassNameMap<"root">;
    export interface IFormControlLayoutProps extends SilverFormComponentBaseProps {
        layoutOptions?: LayoutChildOptions;
        hideControlValue?: boolean;
        controlClassName?: string;
        isVerticalStack?: boolean;
    }
    export const FormControlLayout: FC<IFormControlLayoutProps>;
    export function useSetServerKeys(...keys: string[]): void;
    export function useValidationStyles(breakLevel: BreakLevel): (props?: any) => ClassNameMap<"root">;
    export const CustomFormControl: FC;
    export interface IFormControlProps extends SilverFormComponentBaseExtendedProps {
        isVerticalStack?: boolean;
    }
    export function FormControl(props: IFormControlProps): JSX.Element | null;
    /**Usefull where we do not want to render a control in the normal render flow but with a custom holder e.g. Button Panel inside designer */
    export function renderCustomFormControl(element: ReactElement, container: HTMLElement): Promise<void>;
    export interface IControlRenderOption {
        controlProps: SilverFormComponentBaseProps;
    }
    export function FormDesignerControlRenderer(props: IControlRenderOption): JSX.Element;
    export interface IAppCardProps {
        appCard: IAppCard;
    }
    export enum AppCardImageSize {
        Auto = 0,
        Thumbnail = 1,
        Image = 2
    }
    export interface IAppCard {
        id: string;
        shortName: string;
        description?: string;
        color?: string;
        imageSrc?: string | null;
        descriptionURL?: string;
        installed?: boolean;
        showDetailsLink: boolean;
        imageSize: AppCardImageSize;
        imageClass?: string;
        installedText?: string;
        showInstallButton?: boolean;
        version?: string;
        onDetailsClick?: () => void;
        onInstallClick?: () => void;
    }
    export function AppCard({ appCard }: IAppCardProps): JSX.Element;
    export interface IAppCardListProps {
        cards: IAppCard[] | undefined;
    }
    export function AppCardList({ cards }: IAppCardListProps): JSX.Element;
    interface IAppListProps {
        onDetailsClick: (app: ModuleDetails) => void;
    }
    export function AppsList({ onDetailsClick }: IAppListProps): JSX.Element;
    export interface IModulesListProps {
        onDetailsClick: (module: ModuleInfo) => Promise<boolean>;
    }
    export function ModulesList({ onDetailsClick }: IModulesListProps): JSX.Element;
    export interface IAppStoreProps {
        onAppDetailsClick: (app: ModuleDetails) => void;
        onModuleDetailsClick: (module: ModuleInfo) => Promise<boolean>;
    }
    export function AppStore({ onAppDetailsClick, onModuleDetailsClick }: IAppStoreProps): JSX.Element;
    export interface IOptionsHeaderProps extends React.HTMLProps<{}> {
        title: string;
        isOpen?: boolean;
    }
    export function Options({ children, title, isOpen }: IOptionsHeaderProps): JSX.Element;
    export interface ISettingItemProps extends React.HTMLProps<{}> {
        title?: string;
        controlClassName?: string;
        titleClassName?: string;
    }
    export function SettingItem({ children, title, controlClassName, titleClassName }: ISettingItemProps): JSX.Element;
    export interface ITextEditor {
        title: string;
        value: string;
        placeholder: string;
        type?: string;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
    export function TextEditor(props: ITextEditor): JSX.Element;
    interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
        validation?: ValidationSummary;
    }
    export const Button: React.ForwardRefExoticComponent<Pick<IButtonProps, "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "children" | "type" | "onMouseEnter" | "onMouseLeave" | "onClick" | "results" | "size" | "validation" | "value" | "selected" | "className" | "id" | "action" | "onChange" | "accept" | "acceptCharset" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "lang" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key"> & React.RefAttributes<HTMLButtonElement>>;
    export interface IWarningProps {
        message: string;
        className?: string;
        iconClassName?: string;
        messageClassName?: string;
    }
    export function Warning(props: IWarningProps): JSX.Element;
    export interface IAuthenticationProps {
        sessionId: string;
        namedSessions?: NamedSession[];
        hideLogin?: boolean;
        title?: string;
        onAuthenticationChange?: (value: string) => void;
        onStoreCredentialsClick?: (userId: string, password: string) => void;
        onStoreSessionIdClick?: (value: string) => void;
    }
    export function Authentication(props: IAuthenticationProps): JSX.Element;
    export interface IInfoItemsProps extends React.HTMLProps<{}> {
        title: string;
        rootClass?: string;
        titleClass?: string;
        contentClass?: string;
    }
    export function InfoItem({ children, title, rootClass, titleClass, contentClass }: IInfoItemsProps): JSX.Element;
    export interface ILeftPanelProps {
        serviceMethodInfo: ServiceMethodInfo;
        namedSessions: NamedSession[];
        sessionId: string;
        canUseGet: boolean;
        restOptions: string[];
        onAuthenticationChange?: (value: string) => void;
        onStoreCredentialsClick?: (userId: string, password: string) => void;
        onStoreSessionIdClick?: (value: string) => void;
        onServiceTypeChange?: (value: ServiceType) => void;
        onRestOptionChange?: (value: RestOptions) => void;
        onOutputTypeChange?: (value: OutputType) => void;
        onPostAuthInURLChange?: (value: boolean) => void;
    }
    export enum ServiceType {
        'REST' = 0,
        'Javascript' = 1
    }
    export enum RestOptions {
        'GET' = 0,
        'POST' = 1
    }
    export enum OutputType {
        'JSON' = 0,
        'XML' = 1
    }
    export function LeftPanel(props: ILeftPanelProps): JSX.Element;
    export enum DisplayType {
        PostData = 0,
        REST = 1,
        WCF = 2,
        Webservice = 3
    }
    export enum ReferBy {
        Id = 0,
        Path = 1,
        Alias = 2,
        Url = 3
    }
    export enum IntegrationTabs {
        Info = 0,
        Test = 1
    }
    export enum Credential {
        Login = 0,
        NamedSession = 1,
        Guest = 2,
        SessionId = 3,
        UserId = 4
    }
    export enum UrlDisplayType {
        HTML = 0,
        Mobile = 1,
        Tablet = 2
    }
    export enum DisplayLocation {
        Maximized = 0,
        TopLeft = 1,
        TopCenter = 2,
        TopRight = 3,
        CenterLeft = 4,
        Center = 5,
        CenterRight = 6,
        BottomLeft = 7,
        BottomCenter = 8,
        BottomRight = 9
    }
    export interface IIntegrationDetailsProps {
        allowDelete: boolean;
        allowPut: boolean;
        allowPatch: boolean;
        elementName?: string;
        elementType?: ElementType;
        isFolder?: boolean;
        integrationType?: IntegrationType;
        integrationDescription?: string;
        serviceReferenceTypeDescription?: string;
        serviceDataFormatDescription?: string;
        namedSessions?: NamedSession[];
        sessionId?: string;
        serviceReferenceType?: ServiceReferenceType;
        serviceDataFormat?: ServiceDataFormat;
        isPostToFlowBehavior?: boolean;
        referByOptions?: ReferBy[];
        overrideServiceUrl?: boolean;
        embedType?: string;
        serviceDataFormatOptionsForReport?: string[];
        serviceDataFormatOptions?: string[];
        isReport?: boolean;
        enablePageSelection?: boolean;
        pagesList?: DataPair[];
        allowRestAPICall?: boolean;
        referBy?: ReferBy;
        allowPost?: boolean;
        credential?: Credential;
        userId?: string;
        authenticationParam?: string;
        password?: string;
        sessionValue?: string;
        entityId?: string;
        folderId?: string;
        serviceApiDisplayType?: DisplayType;
        alias?: string;
        allowGet?: boolean;
        authId?: string;
        shouldGenerateService?: boolean;
        serviceApiDisplayTypeOptions?: DisplayType[];
        endPoint?: string;
        areRestApiCallsAllowed?: boolean;
        urlDisplayTypeOptions?: UrlDisplayType[];
        showSmallTopBar?: boolean;
        locations?: DisplayLocation[];
        sizeOptions?: string[];
        selectedSizeType?: string;
        urlDisplayType?: UrlDisplayType;
        displayPage?: string;
        location?: DisplayLocation;
        chrome?: ChromeSetting;
        background?: boolean;
        backgroundColor?: string;
        border?: boolean;
        borderWidth?: number;
        borderColor?: string;
        shadow?: boolean;
        boxShadow?: string;
        spacings?: boolean;
        outerMargin?: number;
        innerMargin?: number;
        height?: number;
        width?: number;
        autoRestartOnComplete?: boolean;
        editingContext?: string;
        displayPageId?: string;
        serviceUrl?: string;
        authType?: string;
    }
    export interface DescribeRuleORFlowModel {
        allowPatch?: boolean;
        allowPut?: boolean;
        allowDelete?: boolean;
        configureHttpMethods?: boolean;
        allowedHttpMethods?: string[];
        elementName?: string;
        elementType?: ElementType;
        displayType?: DisplayType;
        serviceDataFormat?: ServiceDataFormat;
        referBy?: ReferBy;
        overrideServiceUrl?: boolean;
        getUrl?: string;
        allowGet?: boolean;
        postUrl?: string;
        allowPost?: boolean;
        getServiceUrl?: string;
        postServiceUrl?: string;
        getServiceUrlWithParam?: string;
        isComplex?: boolean;
        parameterDisplay?: string;
        parametersAndTypes?: DataPair[];
        optionalParameters?: string[];
        inputString?: string;
        xmlInputString?: string;
        jsonInputString?: string;
        errorMessage?: string;
        outputTypeDescriptions?: ElementOutputTypeDescription[];
        integrationSchemaStructures?: IntegrationSchemaStructure;
        isPostToFlowBehavior?: boolean;
        allowRestAPICall?: boolean;
        allowServiceCall?: boolean;
        seportRunServiceURL?: string;
        generatedServiceName?: string;
        generatedServiceMethodName?: string;
        userId?: string;
        password?: string;
        sessionId?: string;
        authId?: string;
        credential?: Credential;
        reportRunServiceURL?: string;
    }
    export const NAMED_SESSION_VALUE_PREFIX: string;
    export const REST_API_PREFIX = "restapi/";
    export const API_AND_AUTHENTICATION_URL = "https://documentation.decisions.com/v7/docs/api-and-authentication";
    export interface SelectMethodOptionModel {
        serviceName: string;
        methodName: string;
        serviceType: ServiceType;
        credential: Credential;
        userId: string;
        password: string;
        sessionValue: string;
        restServiceType: RestOptions;
        authId: string;
        postAuthInUrl: boolean;
        outputType: OutputType;
        sessionId?: string;
    }
    export interface ServiceMethodHelpModel extends SelectMethodOptionModel {
        serviceMethodInfo: ServiceMethodInfo;
        namedSessions?: NamedSession[];
        canUseGet: boolean;
    }
    export const EXTERNAL_FORM_DOCUMENTATION_URL = "https://documentation.decisions.com/v7/docs/basic-external-form-process";
    export interface SelectMethodOptionModel {
        serviceName: string;
        methodName: string;
        serviceType: ServiceType;
        credential: Credential;
        userId: string;
        password: string;
        sessionValue: string;
        restServiceType: RestOptions;
        authId: string;
        postAuthInUrl: boolean;
        outputType: OutputType;
        sessionId?: string;
    }
    export interface ServiceMethodHelpModel extends SelectMethodOptionModel {
        serviceMethodInfo: ServiceMethodInfo;
        namedSessions?: NamedSession[];
        canUseGet: boolean;
    }
    export interface IHeaderProps {
        elementName?: string;
        elementType?: ElementType;
        isFolder?: boolean;
        showTabs?: boolean;
        currentTab?: IntegrationTabs;
        showTestTab: boolean;
        title?: string;
        documentationTitle?: string;
        decumentationLink?: string;
        onTabSwitch?: (selectedTab: IntegrationTabs) => void;
    }
    export function Header(props: IHeaderProps): JSX.Element;
    export interface ILineProps {
        text: string;
        lineClass?: string;
        areaClass?: string;
        textClass?: string;
    }
    export function Line(props: ILineProps): JSX.Element;
    export interface ITestPanel {
        postUrl: string;
        getUrl: string;
        xmlInputString: string;
        jsonInputString: string;
        inputString: string;
        allowPost: boolean;
        allowGet: boolean;
        allowPatch: boolean;
        allowDelete: boolean;
        allowPut: boolean;
        allowedHttpMethods: string[];
        elementType?: ElementType;
        configureHttpMethods: boolean;
        serviceDataFormat?: ServiceDataFormat;
    }
    export enum UrlOptions {
        'POST' = 0,
        'GET' = 1,
        'PUT' = 2
    }
    export function TestPanel(props: ITestPanel): JSX.Element;
    export interface IRightPanelProps {
        serviceMethodHelpModel: ServiceMethodHelpModel;
        baseApiUrl: string;
        parameters: string;
        showLoading: boolean;
        currentTab: IntegrationTabs;
        restOptions: string[];
    }
    export function RightPanel(props: IRightPanelProps): JSX.Element;
    export interface IMethodInformation {
        serviceMethodInfo: ServiceMethodInfo;
        namedSessions: NamedSession[];
        sessionId: string;
        types: TypeDescription[];
        canUseGet: boolean;
        baseApiUrl: string;
    }
    export function MethodInformation(props: IMethodInformation): JSX.Element;
    export function getDescribeRuleFlowModel(model: IIntegrationDetailsProps, element?: ElementRegistration): Promise<DescribeRuleORFlowModel | null>;
    export function generateFolderUrl(model: IIntegrationDetailsProps): Promise<string>;
    export function generateRunFlowUrl(model: IIntegrationDetailsProps, element: ElementRegistration): Promise<string>;
    export function generatePageUrl(model: IIntegrationDetailsProps): Promise<string>;
    export function generateReportUrl(model: IIntegrationDetailsProps): Promise<string>;
    export function getElementRegistrationByFolderIdAndElementName(folderId?: string, elementName?: string): Promise<ElementRegistration | undefined>;
    export function getBaseUriWithInstanceName(): string;
    export function downloadScript(componentRegistrationId?: string, postUrl?: string, postData?: string, isPostman?: boolean): Promise<void>;
    export function getDefaultMethodOption(serviceName: string, methodName: string, canUseGet: boolean): SelectMethodOptionModel;
    export function getDefaultServiceMethodHelpModel(model: IMethodInformation): ServiceMethodHelpModel;
    export function getServiceMethodParametersString(model: ServiceMethodHelpModel, restServiceType: RestOptions): string;
    export function getServiceIntegrationParameters(model: ServiceMethodHelpModel): Promise<string>;
    export function getServiceIntegrationParametersForJavascript(model: ServiceMethodHelpModel): Promise<string>;
    export function getServiceUrl(serviceName: string, methodName: string): string;
    export function getServiceHelpUrl(serviceName: string, isVirtualPath?: boolean): string;
    export function getNamedSessionValue(sessionId?: string): string;
    export function getPrettifiedXml(sourceXmlString: string): string;
    export function getPrettifiedJson(jsonString: string): string;
    export function isIntegrationConfigured(integrationType?: IntegrationType, isPostToFlowBehavior?: boolean, allowRestAPICall?: boolean): boolean | undefined;
    export interface IServiceIntegrationProps {
        decisionsServiceInfo: DecisionsServiceInfo;
    }
    export function ServiceIntegration(props: IServiceIntegrationProps): JSX.Element;
    export interface ILeftPanel {
        onInteractionTypeChange?: (value: string) => void;
        interactionTypes: string[];
    }
    export function LeftPanel(props: ILeftPanel): JSX.Element;
    export interface IParametersProps {
        stepOutput: ElementOutputTypeDescription;
    }
    export function Parameters(props: IParametersProps): JSX.Element;
    export interface IHttpRedirectProps {
        stepOutput: ElementOutputTypeDescription;
        url: string;
    }
    export function HttpRedirect(props: IHttpRedirectProps): JSX.Element;
    export interface IServiceMethodProps {
        stepOutput: ElementOutputTypeDescription;
    }
    export function ServiceMethod(props: IServiceMethodProps): JSX.Element;
    export interface IBrowserBasedApplicationContentProps {
        stepOutput: ElementOutputTypeDescription;
        url: string;
        generateServiceForStep: boolean;
    }
    export function BrowserBasedApplicationContent(props: IBrowserBasedApplicationContentProps): JSX.Element;
    export interface IApiBasedInteraction {
        generateServiceForStep: boolean;
        serviceName: string;
    }
    export function ApiBasedInteraction(props: IApiBasedInteraction): JSX.Element;
    export interface IExampleProps {
        stepOutputs: ElementOutputTypeDescription[];
        stepInputs: ElementInputTypeDescription;
        url: string;
        callBackURL: string;
    }
    export function Example(props: IExampleProps): JSX.Element;
    export interface IInfoPanel {
        selectedInteraction: string;
        stepOutputs: ElementOutputTypeDescription[];
        stepInputs: ElementInputTypeDescription;
        generateServiceForStep: boolean;
        serviceName: string;
    }
    export function InfoPanel(props: IInfoPanel): JSX.Element;
    export interface IExternalFormIntegrationProps {
        name: string;
        serviceName: string;
        generateServiceForStep: boolean;
        stepOutputs: ElementOutputTypeDescription[];
        stepInputs: ElementInputTypeDescription;
    }
    export function ExternalFormIntegration(props: IExternalFormIntegrationProps): JSX.Element;
    export interface ILeftPanel {
        onOutputTypeChanged?: (value: OutputType) => void;
        setSearchText?: (value: string) => void;
    }
    export function LeftPanel(props: ILeftPanel): JSX.Element;
    export interface IRightPanel {
        seriviceIntegrationData?: null | TypeIntegrationStructure;
        outputType: OutputType;
        showLoading: boolean;
    }
    export function RightPanel(props: IRightPanel): JSX.Element;
    export interface IMain {
        typeName: string;
    }
    export function Main(props: IMain): JSX.Element;
    export interface IDataTypeSerialization {
        typeName: string;
    }
    export function DataTypeSerialization(props: IDataTypeSerialization): JSX.Element;
    export interface ISwitchProps {
        initiallyChecked: boolean;
        onChecked: (checked: boolean) => void;
        labelOn?: string;
        labelOff?: string;
        className?: string | any;
    }
    export function Switch({ initiallyChecked, onChecked, className, labelOn, labelOff }: ISwitchProps): JSX.Element;
    export interface ISimpleDropDownProps {
        label?: string;
        buttonLabel: string;
        actions: IActionLinkItems;
        actionSelected?: (action: any) => void;
        labelClassName?: string;
        buttonClassName?: string;
        calloutClassName?: string;
    }
    export function SimpleDropDown({ label, buttonLabel, actions, actionSelected, labelClassName, buttonClassName, calloutClassName, }: ISimpleDropDownProps): JSX.Element;
    export interface ISinglePropertyEditorProps {
        editingContextId: string;
        path: string[];
        node: IPropertyChild;
        tabIndex?: number;
    }
    /**
     * Render a single editor with enough react-context to function.
     *
     * Will need this for input/output mapping overlay, but this is just the bare-bones to get
     * FolderPickerEditor working since the .cshtml file was so out dated after being deleted so long.
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function SinglePropertyEditor({ editingContextId, node, path, tabIndex }: ISinglePropertyEditorProps): JSX.Element;
    export enum NotificationType {
        Info = 0,
        Warn = 1
    }
    interface IDialogMessageProps extends React.ComponentPropsWithoutRef<'div'> {
        type: NotificationType;
        message: string;
        subEntities?: EntityHeaderDto[];
        subEntitiesButtonText?: string;
    }
    /**
     * Dialog Message: icon + message.
     * Used on Save Dialog to show dependencies info.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DialogMessage({ className, message, type, subEntities, subEntitiesButtonText }: IDialogMessageProps): JSX.Element;
    export interface ISaveDialogFooterProps {
        entityType: string;
        warning?: string;
        saveDesignerInfo?: SaveDesignerInfo;
    }
    /**
     * Save Dialog panel on bottom with Info and Warn messages
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SaveDialogFooter({ entityType, saveDesignerInfo, warning }: ISaveDialogFooterProps): JSX.Element;
    export interface ISaveDialogProps {
        title: string;
        open?: boolean;
        onSave: (comment: string) => void;
        onDontSave?: () => void;
        onClose?: () => void;
        message?: string;
        mappingContext?: MappingContext;
        entityType?: string;
        warning?: string;
        saveDesignerInfo?: SaveDesignerInfo;
        showNote?: boolean;
        contentTestId?: string;
        requireCommentOnSave?: boolean;
    }
    export function SaveDialog({ title, onDontSave, onSave, open, message, saveDesignerInfo: propsInfo, entityType, mappingContext, warning, showNote, contentTestId, onClose, requireCommentOnSave }: ISaveDialogProps): JSX.Element;
    export interface PagePersonalizationModel {
        Page: DataPair[];
        Parts: {
            [key: string]: DataPair[];
        };
    }
    export interface IPageDataState {
        personalization: PagePersonalizationModel;
        partsData: {
            [partId: string]: any;
        };
    }
    export interface PagePartsData {
        [partId: string]: any;
    }
    export enum PageReducerActions {
        UpdatePart = 0,
        UpdatePagePersonalization = 1,
        UpdatePartPersonalization = 2,
        RemovePartPersonalization = 3
    }
    export function pageDataReducer(state: IPageDataState, action: PageDataAction): IPageDataState;
    export interface PageDataAction {
        type: PageReducerActions;
        value: any;
        partId?: string;
        pageId?: string;
        merge?: boolean;
    }
    export function makeUpdatePagePartAction(partId: string, value: any): PageDataAction;
    export function makeUpdatePagePersonalizationAction(value: DataPair[]): PageDataAction;
    export function makeUpdatePartPersonalizationAction(partId: string, value: DataPair[], merge?: boolean): PageDataAction;
    export function makeRemovePartPersonalizationAction(partId: string, area: PersonalizationArea): {
        type: PageReducerActions;
        partId: string;
        value: PersonalizationArea;
    };
    export interface SessionPersonalization {
        Page: DataPair[];
        Parts: {
            [key: string]: DataPair[];
        };
    }
    export function getInitialPageData(pageId: string): any;
    /**
     * @param id of page or part
     * @param isPage true if it applies to page
     * @returns id string corresponding to personalizationService.SendClientEvents
     */
    export function getPersonalizationId(id: string): string;
    /**
     * Save any session personalization to session storage, merging with any existing values
     * @param id id of page or page part
     * @param value data to store, if they are session level.
     */
    export function saveSessionPersonalization(id: string, personalizations: Personalization[]): SessionPersonalization;
    /**
     * FIXME this was broken during merge storage into one entry per page.
     * Might not be needed, as merging should happen during save, now.
     * Would require a part ID target or list or partID targets to merge into.
     *
     * @param id of page/part
     * @param storedValues any saved values to merge with
     * @param isPage true if loading page-level
     * @returns merged data set, along with flag as to w
     */
    export function loadAndMergeSessionPersonalization(id: string, storedValues?: DataPair[]): {
        hadSessionStoredValues: boolean;
        merged: DataPair[];
    };
    export function clearPersonalization(pageId: string, partId: string | null, area: PersonalizationArea): void;
    /**
     * Merge two arrays by DataPair name, preserving order, and placing any in the preferred list that have no match at
     * the end of the resulting array.
     * @param existing "original" values
     * @param preferred values to prefer in merge.
     * @return values, with a flag as to whether any values in the original array were replaced or not.
     */
    export function mergePersonalization(existing: DataPair[], preferred: DataPair[]): {
        replacedValue: boolean;
        merged: DataPair[];
    };
    export function loadPartPersonalization(initialData: PagePartsData, pageId: string): Map<string, {
        Personalization: DataPair[];
        partData: any;
    }>;
    export function loadSessionPersonalization(pageId: string): SessionPersonalization;
    export function anyFilters(p12n: DataPair[]): boolean;
    export function anyConfig(p12n: DataPair[]): boolean;
    export const PageDataHelpers: {
        saveSessionPersonalization: typeof saveSessionPersonalization;
        clearPersonalization: typeof clearPersonalization;
        loadSessionPersonalization: typeof loadSessionPersonalization;
        mergePersonalization: typeof mergePersonalization;
    };
    export let translatedTextDataCache: {
        [text: string]: string;
    };
    export function getTranslatedStrings(texts: string[]): Promise<{
        [text: string]: string;
    } | null>;
    export function getTranslatedString(text: string): Promise<any>;
    export function storeTranslatedTextData(translatedText: DataPair): void;
    export const TranslationHelpers: {
        getTranslatedString: typeof getTranslatedString;
        getTranslatedStrings: typeof getTranslatedStrings;
    };
    /**
     * Because this is consumed by some namespace based TS, we need a "namespace" way to
     * refer to these Utilities, so we are encapsulating them in this object:
     */
    export const Utils: {
        Type: {
            isNumber: typeof isNumber;
            isSignedInt: typeof isSignedInt;
            isUnsignedInt: typeof isUnsignedInt;
            isInt: typeof isInt;
            isReal: typeof isReal;
            isString: typeof isString;
            isBoolean: typeof isBoolean;
            isDateTime: typeof isDateTime;
            isIntValue: typeof isIntValue;
            isNonNegativeIntValue: typeof isNonNegativeIntValue;
            isNegativeIntValue: typeof isNegativeIntValue;
            isRealValue: typeof isRealValue;
            getShortType: typeof getShortType;
        };
        String: {
            equalsAny: typeof equalsAny;
            equals: typeof equals;
            startsWith: typeof startsWith;
            decodeHTML: typeof decodeHTML;
        };
        TabManagementUtil: typeof TabManagementUtil;
        FormTabManagementUtil: typeof FormTabManagementUtil;
        ClientEventUtils: {
            getClientListeners: typeof getClientListeners;
            getRegisteredListenerIds: typeof getRegisteredListenerIds;
            registerForEvent: typeof registerForEventAndSubscribe;
            subScribeToEvent: typeof subScribeToEvent;
            unRegisterForEvent: typeof unRegisterForEventAndUnsubscribe;
            unSubScribeToEvent: typeof unSubScribeToEvent;
        };
        PageDataHelpers: {
            saveSessionPersonalization: typeof saveSessionPersonalization;
            clearPersonalization: typeof clearPersonalization;
            loadSessionPersonalization: typeof loadSessionPersonalization;
            mergePersonalization: typeof mergePersonalization;
        };
        DOMHelpers: {
            getMaxZIndex: typeof getMaxZIndex;
        };
        QueueUtil: typeof QueueUtil;
        EventsHub: EventsHub;
        TranslationHelpers: {
            getTranslatedString: typeof getTranslatedString;
            getTranslatedStrings: typeof getTranslatedStrings;
        };
    };
    /**
     * Lazy-load these utilities on demand. This should return them immediately after the first load.
     */
    export function getUtils(): Promise<any>;
    export * from "utils/Utils";
    export interface IColumnProps extends React.HTMLProps<HTMLTableDataCellElement | HTMLTableHeaderCellElement> {
        isHeader?: boolean;
    }
    /**
     * Base component for for truth table column.
     * HTML doesn't contain ability to define column so we cosider th, td as columns to apply styles.
     *
     * Previously, we used it to resize columns when implementing position: sticky for header.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Column({ className, isHeader, ...otherProps }: IColumnProps): JSX.Element;
    export function AddPhraseColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function EvaluationColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function OutputColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function PhraseColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function SettingsColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function ActionsColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export function OrderNumberColumn({ className, ...otherProps }: IColumnProps): JSX.Element;
    export interface IRuleActionModel {
        ActionName: string;
        ActionId: string;
        canEdit(): boolean;
        canChange(): boolean;
        getClientData(key: string): any;
        getValidationIssues(): ValidationIssue[];
    }
    export interface RuleActionInlineEditorOptions {
        holder: HTMLElement;
        actionId: string;
        actionName: string;
        sessionId: string;
        inlineMapping: InlineMapping;
    }
    export interface BaseRuleActionHandler {
        change(target?: HTMLElement | null): void;
        getInlineEditor(model: RuleActionInlineEditorOptions): HTMLElement | undefined;
        edit(target?: HTMLElement | null): void;
        remove(target?: HTMLElement | null): void;
        getMenuItems(target?: HTMLElement): any[];
    }
    export interface ActionModel extends IRuleActionModel {
        ActionType: RuleOutputPath;
        ParentGroup: ActionsModel;
        getHandler(): BaseRuleActionHandler;
        getSessionId(): string;
    }
    export interface ActionsModel {
        TrueActions: ActionModel[];
        FalseActions: ActionModel[];
        MissingDataActions: ActionModel[];
        getSessionId(): string;
        getById(actionId: string): ActionModel;
        getAllActionModels(): ActionModel[];
        HasActions(): boolean;
        IsInDebugMode(): boolean;
        showAddMenuItems(targetRef: HTMLElement, outcomeType: RuleOutputPath): void;
    }
    export interface IActionOutputContextItem extends IActionLinkItem {
        onClick: () => void;
    }
    interface IActionOutputItemProps extends React.HTMLProps<{}> {
        actionModel: IRuleActionModel;
        handler: BaseRuleActionHandler;
        sessionId: string;
    }
    /**
     * Represents rule action output, which will be triggered for truly outcome.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ActionOutputItem({ actionModel, handler, sessionId }: IActionOutputItemProps): JSX.Element;
    export interface IRuleDesignerContext {
        isDebug: boolean;
        isSampling: boolean;
    }
    /**
     * When RuleDesigner will be moved to React context will be used there,
     * currently it wraps content of TruthTable, ExternalTruthTable, RuleTable components.
     */
    export const RuleDesignerContext: React.Context<IRuleDesignerContext>;
    interface IActionListProps {
        actionsModel: ActionsModel;
        outputPath: RuleOutputPath;
        showAddLink: boolean;
        onAddActionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    }
    /**
     *  List of actions which will be triggered for truly outcome
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ActionList({ actionsModel, outputPath, showAddLink, onAddActionClick }: IActionListProps): JSX.Element;
    export interface RuleStepDebugModel {
        evaluation: RuleStepEvaluation;
        isSuccess: boolean;
        isFailure: boolean;
        isBeyondThePath: boolean;
    }
    export interface IRuleModelBase {
        Id: string;
        /**
         * TODO alex: Need to remove session from model
         * and put it to TruthTable context
         */
        RuleSessionId: string;
        DisplayData: RuleStepDisplayData;
        /**
         * Can be not defined only for root step
         */
        ParentGroup?: IRuleGroupModelBase;
        Debug?: RuleStepDebugModel;
        resolvedAnchorData?: string;
        /**
         * TODO alex: Need to get rid on IsInDebugMode in models
         *  and put it to TruthTable context
         */
        IsInDebugMode(): boolean;
        GetValidations(): ValidationIssue[];
    }
    export class RuleModelBase implements IRuleModelBase {
        private displayData;
        private isInDebug;
        ParentGroup?: IRuleGroupModelBase | undefined;
        Debug?: RuleStepDebugModel | undefined;
        constructor(displayData: RuleStepDisplayData, isInDebug?: boolean);
        get Id(): string;
        get RuleSessionId(): string;
        get DisplayData(): RuleStepDisplayData;
        IsInDebugMode(): boolean;
        GetValidations(): ValidationIssue[];
        get resolvedAnchorData(): string;
    }
    export interface IRuleStepModel extends IRuleModelBase {
        EvaluateWithNot: boolean;
        TokenAnchorInfo: string;
        TokenVerbInfo: string;
        TokenValueInfo: string;
        IsAnchorSpecified(): boolean;
    }
    export class RuleStepModel extends RuleModelBase implements IRuleStepModel {
        get EvaluateWithNot(): boolean;
        get TokenAnchorInfo(): string;
        get TokenVerbInfo(): string;
        get TokenValueInfo(): string;
        IsAnchorSpecified(): boolean;
    }
    export interface IRuleGroupModelBase extends IRuleModelBase {
        Children: IRuleModelBase[];
        getChildren(): IRuleModelBase[];
        GetRuleStepModels(): IRuleStepModel[];
    }
    export class RuleGroupModelBase extends RuleModelBase implements IRuleGroupModelBase {
        Children: IRuleModelBase[];
        getChildren(): IRuleModelBase[];
        GetRuleStepModels(): IRuleStepModel[];
    }
    export interface IAnyGroupModel extends IRuleGroupModelBase {
    }
    export class AnyGroupModel extends RuleGroupModelBase implements IAnyGroupModel {
    }
    export interface ExecutionInfo {
        executionResult: RuleExecutionResult;
        executionError: string;
        durationExecution: string;
    }
    export interface IAllGroupModel extends IRuleGroupModelBase {
        ActionsModel: ActionsModel;
        canChangeOutputData: boolean;
        ruleType: RuleType;
        hasActions: boolean;
        IsInDebugMode(): boolean;
        GetEitherGroup(): IAnyGroupModel;
    }
    export class AllGroupModel extends RuleGroupModelBase implements IAllGroupModel {
        GetEitherGroup(): AnyGroupModel;
        ActionsModel: ActionsModel;
        get canChangeOutputData(): boolean;
        get ruleType(): RuleType;
        get hasActions(): boolean;
    }
    export const RULE_ANCHOR_ERROR_VALIDATION_CODE = 1;
    export const RULE_VERB_ERROR_VALIDATION_CODE = 2;
    export const RULE_VALUE_ERROR_VALIDATION_CODE = 3;
    export const RULE_OUTPUT_ERROR_VALIDATION_CODE = 4;
    export function getHeaderIssues(issues: ValidationIssue[]): ValidationIssue[];
    export function getOutputIssues(issues: ValidationIssue[], outputName: string): ValidationIssue[];
    export function getValueIssues(issues: ValidationIssue[]): ValidationIssue[];
    export interface SetValueEventObj {
        intersection: IntersectionEditorInfo;
        value: string;
        output: RuleOutputDisplayData;
        model: IAllGroupModel;
    }
    interface IOutputCellProps extends React.HTMLProps<HTMLTableDataCellElement> {
        model: IAllGroupModel;
        output: RuleOutputDisplayData;
        executionResult: RuleExecutionResult | null;
        onEditClick: (event: {
            target: HTMLElement;
            output: RuleOutputDisplayData;
            model: IAllGroupModel;
        }) => void;
        setValue: (event: SetValueEventObj) => void;
        showFullEditor?: (event: {
            editorInfo: IntersectionEditorInfo;
        }) => void;
    }
    /**
     * Contains outptu which will be returned for truly outcome.
     * You rather need to use [[OutputCells]] as it contains logic to display outputs correctly corresponding to RuleType.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function OutputCell({ className, output, model, executionResult, setValue, onEditClick, showFullEditor, ...otherProps }: IOutputCellProps): JSX.Element;
    export type HandleNotificationsCallback = (notifications: RuleServiceStepNotification[]) => void;
    export function canRowBeDeleted(rowModel: IAllGroupModel): boolean;
    export function canRowBeMovedDown(rowModel: IAllGroupModel): boolean;
    export function canRowBeMovedUp(rowModel: IAllGroupModel): boolean;
    export function getRows(rootModel: IAllGroupModel): IAllGroupModel[];
    /**
     * We use first row to display headers.
     */
    export function getHeaderSteps(rootModel: IAllGroupModel): IRuleStepModel[];
    /**
     * Return ids of cells for specified column
     *
     * @param columnIndex Number from 0 to columnNumber - 1
     */
    export function getColumnCellsIds(rootModel: IAllGroupModel, columnIndex: number): string[];
    export function getTableColumnsCount(rootModel: IAllGroupModel, showExecutionNumber: boolean): number;
    export function noFilterResults(isFilterApplied: boolean, rows: IAllGroupModel[]): boolean;
    export function addColumn(rootModel: IAllGroupModel, handleNotifications: HandleNotificationsCallback): void;
    export function addRow(model: IAllGroupModel, handleNotifications: HandleNotificationsCallback): void;
    export function addRowBefore(sessionId: string, beforeRowId: string, handleNotifications: HandleNotificationsCallback): Promise<void>;
    export function addRowAfter(sessionId: string, afterRowId: string, handleNotifications: HandleNotificationsCallback): Promise<void>;
    export function rowOutputSetValue({ output, value, model }: SetValueEventObj): Promise<void>;
    export function getStepIntersectionInfo(ruleStep: IRuleStepModel): IntersectionEditorInfo;
    export function getResultBackgroundColor(result: RuleExecutionResult | null): "" | "rgb(230, 255, 230)" | "rgb(254, 235, 235)";
    export function getRowExecutionResult(row: IAllGroupModel, isDebug: boolean, isSampling: boolean): RuleExecutionResult | null;
    interface IActionsCellProps extends React.HTMLProps<HTMLTableDataCellElement> {
        actionsModel: ActionsModel;
        outputPath: RuleOutputPath;
        executionResult: RuleExecutionResult | null;
    }
    /**
     * Contains a set of actions which will be invoked if all conditions in a row are truth.
     * Should be visible only if rule allows actions.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ActionsCell({ actionsModel, outputPath, executionResult, ...otherProps }: IActionsCellProps): JSX.Element;
    interface IButtonRowProps extends Omit<React.HTMLProps<HTMLTableRowElement>, 'onClick' | 'children'> {
        text: string;
        colSpan: number;
        buttonClassName?: string;
        onClick: React.MouseEventHandler<HTMLButtonElement>;
    }
    /**
     * Table row with a button inside. Supposed to used in the bottom part of table.
     * For example, "Add Row" button for truth table or "Load More" button for external truth table.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ButtonRow({ text, colSpan, onClick, className, buttonClassName }: IButtonRowProps): JSX.Element;
    export interface DefaultRowProps {
        rootModel: IAllGroupModel;
        /**
         * Determines how much columns "Has no match outcome" checkbox will take
         */
        hasNoMatchOutcomeColSpan: number;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * A default row displays outputs which will be return if all rows return false.
     */
    export function DefaultRow({ rootModel, hasNoMatchOutcomeColSpan, showContextEditorLayer }: DefaultRowProps): JSX.Element;
    interface INoMatchesRowProps {
        rootModel: IAllGroupModel;
        showExecutionNumber: boolean;
    }
    /**
     * Rows indicates that there is no items for applied filter.
     *
     * @see TruthTableFilter
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function NoMatchesRow({ rootModel, showExecutionNumber }: INoMatchesRowProps): JSX.Element;
    export interface HeaderOutputCellsProps {
        rootModel: IAllGroupModel;
        onDeleteClick?: (result: RuleOutputDisplayData) => void;
        onEditOutputClick?: (result: RuleOutputDisplayData) => void;
    }
    export function HeaderOutputCells({ rootModel, onDeleteClick, onEditOutputClick }: HeaderOutputCellsProps): JSX.Element;
    export interface IResolvedAnchorValueProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
        resolvedText: string;
    }
    /**
     * Shows resolved anchor value on surface if it is possible to calculate in design time
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ResolvedAnchorValue({ resolvedText, className, ...otherProps }: IResolvedAnchorValueProps): JSX.Element;
    export interface PhraseItemClickEvent {
        target: HTMLButtonElement;
        headerStep: IRuleStepModel;
        columnIndex: number;
        columnStepsIds: string[];
    }
    export type PhraseItemClickCallback = (event: PhraseItemClickEvent) => void;
    export type HeaderActionCallback = (event: {
        headerStep: IRuleStepModel;
    }) => void;
    export interface IHeaderPhraseCellProps {
        className?: string;
        rootModel: IAllGroupModel;
        headerStep: IRuleStepModel;
        canDelete: boolean;
        isDebugMode: boolean;
        columnIndex: number;
        isFirst: boolean;
        isLast: boolean;
        onAnchorClick?: PhraseItemClickCallback;
        onVerbClick?: PhraseItemClickCallback;
        onMoveColumnToLeft: HeaderActionCallback;
        onMoveColumnToRight: HeaderActionCallback;
        onDeleteClick?: HeaderActionCallback;
        onAddBefore: HeaderActionCallback;
        onAddAfter: HeaderActionCallback;
    }
    /**
     * Header phrase cell displays "Anchor" and "Verb" with ability to edit them.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderPhraseCell({ className, rootModel, canDelete, headerStep, columnIndex, isFirst, isLast, isDebugMode, onAnchorClick, onVerbClick, onDeleteClick, onAddBefore, onAddAfter, onMoveColumnToLeft, onMoveColumnToRight, }: IHeaderPhraseCellProps): JSX.Element;
    export interface ITruthTableHeaderProps extends React.HTMLProps<HTMLTableSectionElement> {
        rootModel: IAllGroupModel;
        showExecutionNumber?: boolean;
        onAnchorClick?: PhraseItemClickCallback;
        onVerbClick?: PhraseItemClickCallback;
        onAddConditionClick: () => void;
        onAddOutputClick: () => void;
        onEditOutputClick: (result: RuleOutputDisplayData) => void;
        handleNotifications: HandleNotificationsCallback;
    }
    /**
     * Header row for regular and external truth tables.
     * Contains cells to configure phrases (Anchor and Verb) and outputs.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TruthTableHeader({ rootModel, showExecutionNumber, onAnchorClick, onVerbClick, onAddConditionClick, onAddOutputClick, handleNotifications, onEditOutputClick, ...otherProps }: ITruthTableHeaderProps): JSX.Element;
    interface ITruthTableRowProps extends React.HTMLProps<HTMLTableRowElement> {
        rootModel: IAllGroupModel;
        showExecutionNumber: boolean;
        rowModel: IAllGroupModel;
        handleNotifications: HandleNotificationsCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Represents regular truth table row.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TruthTableRow({ rootModel, showExecutionNumber, rowModel, className, showContextEditorLayer, handleNotifications, ...otherProps }: ITruthTableRowProps): JSX.Element;
    export { ButtonRow } from "domains/designers/TruthTable/rows/ButtonRow";
    export { DefaultRow } from "domains/designers/TruthTable/rows/DefaultRow";
    export { NoMatchesRow } from "domains/designers/TruthTable/rows/NoMatchesRow";
    export { TruthTableHeader } from "domains/designers/TruthTable/rows/TruthTableHeader";
    export { TruthTableRow } from "domains/designers/TruthTable/rows/TruthTableRow";
    interface ITruthTableFilterProps extends React.HTMLProps<{}> {
        rootModel: IAllGroupModel;
        isFilterApplied: boolean;
    }
    /**
     *  Component allows to filter and to sort truth table
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TruthTableFilter({ isFilterApplied, rootModel }: ITruthTableFilterProps): JSX.Element;
    export type ShowContextEditorLayerCallback = (event: {
        target: HTMLElement;
        getContext: () => Promise<string>;
        canIgnore?: boolean;
        onIgnore?: () => Promise<void>;
    }) => void;
    export interface ITruthTableProps {
        isFilterApplied: boolean;
        isSampling: boolean;
        rootModel: IAllGroupModel;
        addOutput: () => Promise<void>;
        onAnchorClick?: PhraseItemClickCallback;
        onVerbClick?: PhraseItemClickCallback;
        onEditOutputClick: (result: RuleOutputDisplayData) => void;
        handleNotifications: HandleNotificationsCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Truth table component.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TruthTable({ isFilterApplied, isSampling, rootModel, addOutput, handleNotifications, onAnchorClick, onVerbClick, onEditOutputClick, showContextEditorLayer, }: ITruthTableProps): JSX.Element;
    interface ICellProps extends React.HTMLProps<HTMLDivElement> {
    }
    /**
     * Truth table cell. It is used for aligning content inside cell.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Cell({ className, ...otherProps }: ICellProps): JSX.Element;
    interface ISettingsCellProps {
        ruleSessionId: string;
        rowModel: IAllGroupModel;
        handleNotifications: HandleNotificationsCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
        onAddRowBefore: () => void;
        onAddRowAfter: () => void;
    }
    /**
     * Shows row actions by click.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function SettingsCell({ rowModel, ruleSessionId, handleNotifications, showContextEditorLayer, onAddRowBefore, onAddRowAfter, }: ISettingsCellProps): JSX.Element;
    export interface IStepEvaluationProps {
        /**
         * @default false
         */
        showBeyondPass?: boolean;
        index?: number;
        evaluation: RuleStepEvaluation;
    }
    /**
     * Shows step evaluation result inline for sampling/unit tests/debugger
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function StepEvaluation({ evaluation, showBeyondPass, index }: IStepEvaluationProps): JSX.Element;
    export interface ListStepEvaluationItemProps {
        className?: string;
        evaluation: RuleStepEvaluation;
        index: number;
        hasSkippedAbove?: boolean;
        hasSkippedBelow?: boolean;
    }
    export function ListStepEvaluationItem({ index, evaluation, hasSkippedAbove, hasSkippedBelow, }: ListStepEvaluationItemProps): JSX.Element;
    export type SeeAllClickEventHandler = (event: {
        target: HTMLElement;
        evaluations: RuleStepEvaluation[];
    }) => void;
    export interface IListStepEvaluationProps extends React.ComponentProps<'div'> {
        /**
         * Indicates how much inline results can be shown
         *
         * @default 8
         */
        maxEvaluationsNumber?: number;
        /**
         * Evaluation results
         */
        evaluations: RuleStepEvaluation[];
        /**
         * "See All" click button handler.
         * When amount of evaliations more then maximum "See All" button will be shown.
         */
        onSeeAllClick: SeeAllClickEventHandler;
    }
    /**
     * Shows list step evaluation result inline for sampling/unit tests/debugger
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ListStepEvaluation({ className, maxEvaluationsNumber, evaluations, onSeeAllClick, ...otherProps }: IListStepEvaluationProps): JSX.Element;
    export interface IFullListStepEvaluationProps extends React.HTMLProps<{}> {
        evaluations: RuleStepEvaluation[];
    }
    /**
     * Displays full evaluation list. If you need to limit it use [[ListSteEvaluation]]
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function FullListStepEvaluation({ evaluations }: IFullListStepEvaluationProps): JSX.Element;
    export { ResolvedAnchorValue } from "domains/designers/RuleDesigner/components/ResolvedAnchorValue";
    export { StepEvaluation } from "domains/designers/RuleDesigner/components/StepEvaluation";
    export { ListStepEvaluation } from "domains/designers/RuleDesigner/components/ListStepEvaluation";
    export { FullListStepEvaluation } from "domains/designers/RuleDesigner/components/FullListStepEvaluation";
    interface IValueCellProps extends React.HTMLProps<HTMLTableDataCellElement> {
        rootModel: IAllGroupModel;
        ruleStep: IRuleStepModel;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Represent 3rd part of phrase - Value.
     * Phrase consist of 3 parts: Anchor, Verb, Value.
     * Anchor and Verb are shown in [[HeaderPhraseCell]]
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ValueCell({ rootModel, showContextEditorLayer, ruleStep, className, ...otherProps }: IValueCellProps): JSX.Element;
    export interface IOutputCellsProps {
        rowModel: IAllGroupModel;
        ruleType: RuleType;
        outputs: RuleOutputDisplayData[];
        executionResult: RuleExecutionResult | null;
        getSingleResultContext: (event: {
            ruleSessionId: string;
        }) => Promise<string>;
        getSingleResultInputMappingSession: (event: {
            ruleSessionId: string;
            stepId: string;
        }) => Promise<SequentialEditSession>;
        getMultipleResultContext: (event: {
            ruleSessionId: string;
            ruleStepId: string;
            resultName: string;
            index: number;
        }) => Promise<string>;
        getMultipleResultInputMappingSession: (event: {
            ruleSessionId: string;
            ruleStepId: string;
            resultName: string;
            index: number;
        }) => Promise<SequentialEditSession>;
        setInlineValue: (event: SetValueEventObj) => void;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Reusable component for editable outputs. The aim of the component is to not repeat generating
     * outputs several times as it is really easy to forget checking RuleType and miss <OutputCell> for "RuleType.DataReturnRule".
     *
     * Only custom behavior can have RuleType = DataReturnRule.
     */
    export function OutputCells({ rowModel, ruleType, outputs, executionResult, setInlineValue, showContextEditorLayer, getSingleResultContext, getSingleResultInputMappingSession, getMultipleResultContext, getMultipleResultInputMappingSession, }: IOutputCellsProps): JSX.Element | null;
    interface IEvaluationCellProps {
        executionResult: RuleExecutionResult | null;
    }
    /**
     * Indicates a row evaluation result by showing "True" or "False" icon inside a cell.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function EvaluationCell({ executionResult }: IEvaluationCellProps): JSX.Element;
    interface IIgnoreCellProps extends React.HTMLProps<HTMLTableDataCellElement> {
    }
    /**
     * Represent ignored value in cell.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function IgnoreCell(props?: IIgnoreCellProps): JSX.Element;
    export { ActionsCell } from "domains/designers/TruthTable/cells/ActionsCell";
    export { SettingsCell } from "domains/designers/TruthTable/cells/SettingsCell";
    export { ValueCell } from "domains/designers/TruthTable/cells/ValueCell";
    export { Cell } from "domains/designers/TruthTable/cells/Cell";
    export { OutputCells } from "domains/designers/TruthTable/cells/OutputCells";
    export { OutputCell } from "domains/designers/TruthTable/cells/OutputCell";
    export { EvaluationCell } from "domains/designers/TruthTable/cells/EvaluationCell";
    export { IgnoreCell } from "domains/designers/TruthTable/cells/IgnoreCell";
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderActionsCell(props: React.HTMLProps<HTMLTableHeaderCellElement>): JSX.Element;
    /**
     * Header cell for execution number when filter or sortering are applying.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderExecutionOrderCell(): JSX.Element;
    export interface IHeaderOutputProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'children'> {
        name: string;
        canRemove?: boolean;
        canEdit?: boolean;
        onDeleteClick?: () => void;
        onEditClick?: () => void;
    }
    /**
     *
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderOutput({ name, canRemove, canEdit, className, onDeleteClick, onEditClick, ...otherProps }: IHeaderOutputProps): JSX.Element;
    interface IAddPhraseCellProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onClick'> {
        onAdd: () => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function AddPhrase({ className, onAdd, ...otherProps }: IAddPhraseCellProps): JSX.Element;
    interface IAddOutputProps extends Omit<React.HTMLProps<HTMLTableHeaderCellElement>, 'onClick'> {
        rootModel: IAllGroupModel;
        onAdd: () => void;
    }
    /**
     * Add output cell.
     * It is supposed to be used in Truth Table Header to add a column.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function AddOutput({ rootModel, className, onAdd, ...otherProps }: IAddOutputProps): JSX.Element;
    export { HeaderActionsCell } from "domains/designers/TruthTable/header-cells/HeaderActionsCell";
    export { HeaderExecutionOrderCell } from "domains/designers/TruthTable/header-cells/HeaderExecutionOrderCell";
    export { HeaderOutput } from "domains/designers/TruthTable/header-cells/HeaderOutput";
    export { HeaderOutputCells } from "domains/designers/TruthTable/header-cells/HeaderOutputCells";
    export { HeaderPhraseCell } from "domains/designers/TruthTable/header-cells/HeaderPhraseCell";
    export { AddPhrase } from "domains/designers/TruthTable/header-cells/AddPhrase";
    export { AddOutput } from "domains/designers/TruthTable/header-cells/AddOutput";
    export type AnchorClickCallback = (event: {
        target: HTMLElement;
        ruleHeader: RuleTableHeaderDisplayData;
    }) => void | Promise<any>;
    export type HeaderActionCallback = (event: {
        header: RuleTableHeaderDisplayData;
    }) => void | Promise<any>;
    export interface IHeaderAnchorCellProps {
        header: RuleTableHeaderDisplayData;
        canDelete: boolean;
        isDebugMode: boolean;
        isFirst: boolean;
        isLast: boolean;
        onAnchorClick: AnchorClickCallback;
        onDeleteClick: HeaderActionCallback;
        onMoveColumnToLeft: HeaderActionCallback;
        onMoveColumnToRight: HeaderActionCallback;
        onAddColumnBefore: HeaderActionCallback;
        onAddColumnAfter: HeaderActionCallback;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function HeaderAnchorCell({ header, canDelete, isDebugMode, isFirst, isLast, onDeleteClick, onAnchorClick, onMoveColumnToLeft, onMoveColumnToRight, onAddColumnAfter, onAddColumnBefore, }: IHeaderAnchorCellProps): JSX.Element;
    export interface IRuleTableHeaderProps {
        rootModel: IAllGroupModel;
        headers: RuleTableHeaderDisplayData[];
        onAnchorClick: AnchorClickCallback;
        onAddHeaderClick: () => void;
        onAddOutputClick: () => void;
        onEditOutputClick: (result: RuleOutputDisplayData) => void;
        handleNotifications: HandleNotificationsCallback;
        onDeleteClick: HeaderActionCallback;
        onMoveColumnToLeft: HeaderActionCallback;
        onMoveColumnToRight: HeaderActionCallback;
        onAddColumnBefore: HeaderActionCallback;
        onAddColumnAfter: HeaderActionCallback;
    }
    /**
     * Header row for rule table.
     * Contains cells to configure anchors and outputs.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTableHeader({ rootModel, headers, onAddHeaderClick, onAddOutputClick, onEditOutputClick, handleNotifications, onAnchorClick, onDeleteClick, onMoveColumnToLeft, onMoveColumnToRight, onAddColumnBefore, onAddColumnAfter, }: IRuleTableHeaderProps): JSX.Element;
    export function getTableColumnsCount(rootModel: IAllGroupModel, headers: RuleTableHeaderDisplayData[]): number;
    export function getStepColumnIndex(step: IRuleStepModel, headers: RuleTableHeaderDisplayData[]): number;
    export function getStepsForHeader(row: IAllGroupModel, header: RuleTableHeaderDisplayData): IRuleStepModel[];
    export function isStepForHeader(step: IRuleStepModel, header: RuleTableHeaderDisplayData): boolean;
    export function addRowBefore(sessionId: string, beforeRowId: string, handleNotifications: HandleNotificationsCallback): Promise<void>;
    export function addRowAfter(sessionId: string, afterRowId: string, handleNotifications: HandleNotificationsCallback): Promise<void>;
    /**
     * Returns validations to display in [[RuleTablePhrase]].
     * It includes verb and value validations. Anchor validation will be shown in a header.
     *
     * @param step
     */
    export function getValidationsForRuleTablePhrase(step: IRuleStepModel): ValidationIssue[];
    export type RuleTablePhraseItemClickCallback = (event: {
        target: HTMLElement;
        step: IRuleStepModel;
    }) => void;
    export interface IRuleTablePhraseItemProps extends React.ComponentProps<'li'> {
        step: IRuleStepModel;
        showContextEditorLayer: ShowContextEditorLayerCallback;
        onVerbClick: RuleTablePhraseItemClickCallback;
        onRemoveClick: RuleTablePhraseItemClickCallback;
    }
    /**
     * Represents step with "verb" and "value".
     * An anchor is displayed in header.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTablePhraseItem({ step, onVerbClick, onRemoveClick, showContextEditorLayer, className, ...otherProps }: IRuleTablePhraseItemProps): JSX.Element;
    interface IRuleTablePhraseListProps {
        steps: IRuleStepModel[];
        onVerbClick: RuleTablePhraseItemClickCallback;
        onRemoveClick: RuleTablePhraseItemClickCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Displays list of phrases (does not display Anchor) for Rule table.
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTablePhraseList({ steps, onVerbClick, onRemoveClick, showContextEditorLayer, }: IRuleTablePhraseListProps): JSX.Element;
    export { RuleTablePhraseItem } from "domains/designers/RuleTable/components/RuleTablePhraseItem";
    export { RuleTablePhraseList } from "domains/designers/RuleTable/components/RuleTablePhraseList";
    interface IPhraseCellProps extends React.HTMLProps<{}> {
        steps: IRuleStepModel[];
        onAddStepClick: () => void;
        onVerbClick: RuleTablePhraseItemClickCallback;
        onRemoveClick: RuleTablePhraseItemClickCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Phrase cell displays "Verb" and "Value" with ability to edit them.
     * Anchor configures in [[HeaderAnchorCell]].
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTablePhraseCell({ steps, onAddStepClick, onVerbClick, onRemoveClick, showContextEditorLayer, }: IPhraseCellProps): JSX.Element;
    interface IRuleTableRowProps {
        row: IAllGroupModel;
        ruleType: RuleType;
        headers: RuleTableHeaderDisplayData[];
        onVerbClick: RuleTablePhraseItemClickCallback;
        handleNotifications: HandleNotificationsCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTableRow({ headers, row, ruleType, showContextEditorLayer, handleNotifications, onVerbClick, }: IRuleTableRowProps): JSX.Element;
    export { RuleTableHeader } from "domains/designers/RuleTable/rows/RuleTableHeader";
    export { RuleTableRow } from "domains/designers/RuleTable/rows/RuleTableRow";
    export interface IRuleTableProps {
        rootModel: IAllGroupModel;
        isSampling: boolean;
        getHeaders: () => Promise<RuleTableHeaderDisplayData[]>;
        onAnchorClick: AnchorClickCallback;
        addOutput: () => Promise<void>;
        onVerbClick: RuleTablePhraseItemClickCallback;
        onEditOutputClick: (result: RuleOutputDisplayData) => void;
        handleNotifications: HandleNotificationsCallback;
        showContextEditorLayer: ShowContextEditorLayerCallback;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function RuleTable({ rootModel, isSampling, getHeaders, onAnchorClick, onVerbClick, addOutput, onEditOutputClick, handleNotifications, showContextEditorLayer, }: IRuleTableProps): JSX.Element;
    export function renderRuleTable(props: IRuleTableProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export { TruthTableFilter } from "domains/designers/TruthTable/TruthTableFilter";
    export { TruthTable } from "domains/designers/TruthTable/TruthTable";
    export function renderTruthTable(props: ITruthTableProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function isExternalDataInvalid(model: IAllGroupModel): boolean;
    interface ILockLayerProps {
        rootModel: IAllGroupModel;
        onEditReport: () => void;
    }
    /**
     * Lock layer is shown over external truth table and indicates that it require updating.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function LockLayer({ rootModel, onEditReport }: ILockLayerProps): JSX.Element | null;
    interface IDataCellProps {
        data: DataPair;
        progress?: RuleStepExecutedProgressData;
    }
    /**
     * External truth table value cell
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ValueCell({ data, progress }: IDataCellProps): JSX.Element;
    interface IDataCellProps {
        data: DataPair;
        executionResult: RuleExecutionResult | null;
    }
    /**
     * External truth table output cell
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function OutputCell({ data, executionResult }: IDataCellProps): JSX.Element;
    export function getCurrentHistory(all: AbstractRuleProgressData[], current?: AbstractRuleProgressData): AbstractRuleProgressData[];
    export function getRowProgress(executionHistory: AbstractRuleProgressData[], row: ExternalDataRuleExecutionData): RuleStepExecutedProgressData[];
    export function getCellProgress(rowProgress: RuleStepExecutedProgressData[], stepId: string): RuleStepExecutedProgressData | undefined;
    export function getRowExecutionResult(rowProgress: RuleStepExecutedProgressData[]): RuleExecutionResult.Success | RuleExecutionResult.Failure | null;
    interface IRowProps {
        rootModel: IAllGroupModel;
        headerSteps: IRuleStepModel[];
        row: ExternalDataRuleExecutionData;
        /**
         * Row evaluation progress. It doesn't contains result for every cell because we stop evaluate row if there is "False" result for some cell.
         */
        rowProgress: RuleStepExecutedProgressData[];
    }
    /**
     * External truth table row
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Row({ rootModel, headerSteps, row, rowProgress }: IRowProps): JSX.Element;
    /**
     * Run force component update. It can be useful when migrating from MVC part.
     * BUT think again before using it and try avoid using it!!!
     */
    export function useForceUpdate(): () => void;
    export interface IExternalTruthTableProps {
        isSampling: boolean;
        rootModel: IAllGroupModel;
        isFilterApplied: boolean;
        /**
         * Full history of evaluation external truth table.
         * Every array item contains step result evaluation.
         * To show current evaluation progress, we need to get all items before the current.
         *
         *  @see getCurrentHistory
         */
        allProgressHistory?: AbstractRuleProgressData[];
        /**
         * In debugger we are able to see an truth table execution step by step by using a slider in the bottom part of debugger.
         * Field indicates current thumb position on the slider.
         * Field will be "undefined" in design mode and when sampling is running.
         */
        currentProgress?: AbstractRuleProgressData;
        addOutput: () => Promise<void>;
        onAnchorClick?: PhraseItemClickCallback;
        onVerbClick?: PhraseItemClickCallback;
        onEditOutputClick: (result: RuleOutputDisplayData) => void;
        onEditReport: () => void;
        showContextEditorLayer: ShowContextEditorLayerCallback;
        handleNotifications: HandleNotificationsCallback;
    }
    /**
     * External truth table. It uses report to fill truth table with values.
     *
     * TODO alex: currently, we don't support execution numbers for external truth table
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ExternalTruthTable({ isSampling, rootModel, isFilterApplied, allProgressHistory, currentProgress, showContextEditorLayer, addOutput, onAnchorClick, onVerbClick, onEditOutputClick, handleNotifications, onEditReport, }: IExternalTruthTableProps): JSX.Element;
    export function renderExternalTruthTable(props: IExternalTruthTableProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function renderListStepEvaluation(props: IListStepEvaluationProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function renderStepEvaluation(props: IStepEvaluationProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function renderFullListStepEvaluation(props: IFullListStepEvaluationProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function renderResolvedAnchorValue(props: IResolvedAnchorValueProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export function renderFavoriteIcon(props: IFavoriteIconProps, container: HTMLElement): Promise<void>;
    export interface IDataDescriptionRowProps extends React.HTMLProps<HTMLInputElement> {
        dataDescription: DataDescriptionWithIssue;
    }
    export function DataDescriptionRow({ dataDescription, ...props }: IDataDescriptionRowProps): JSX.Element;
    export interface IElementUsageProps {
        elementUsage: ElementUsageDto;
        dataType: 'input' | 'output';
    }
    export function getDependencyIssueClassName(level?: BreakLevel): string;
    export function ElementUsage({ dataType, elementUsage }: IElementUsageProps): JSX.Element;
    export function elementUsageHasWarning(elementUsage: ElementUsageDto, isInput: boolean): boolean;
    export function elementUsageHasError(elementUsage: ElementUsageDto, isInput: boolean): boolean;
    export interface ITooltipProps {
        title: React.ReactChild;
        children: React.ReactElement;
        placement?: 'top' | 'bottom' | 'right';
    }
    export function Tooltip({ title, children, placement }: ITooltipProps): JSX.Element;
    export interface IDependencyArrowProps {
        elementUsage: ElementUsageDto;
        isInput: boolean;
        isInbound: boolean;
    }
    export function DependencyArrow(props: IDependencyArrowProps): JSX.Element;
    export interface IDependenciesCounterProps {
        dependenciesCount: number;
    }
    export function DependenciesCounter({ dependenciesCount }: IDependenciesCounterProps): JSX.Element;
    export interface IDependencyNodeProps {
        node: ModuleResourceNode;
        onClick?: (node: ModuleResourceNode) => void;
    }
    export function DependencyNode({ node, onClick }: IDependencyNodeProps): JSX.Element;
    export interface IDependenciesBrowserProps {
        entityId?: string;
        entityType?: string;
        onCloseClick?: () => void;
        node?: ModuleResourceNode;
    }
    export function DependenciesBrowser({ entityId, node, entityType, onCloseClick }: IDependenciesBrowserProps): JSX.Element;
    export function renderDependenciesBrowser(props: IDependenciesBrowserProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderInputDataDesigner(props: IInputDataDesignerProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export interface ICategoryListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
        name: string;
        isActive?: boolean;
        onClick: (categoryName: string) => void;
    }
    export function CategoryListItem({ isActive, name, onClick }: ICategoryListItemProps): JSX.Element;
    export interface ICategoryListProps extends Omit<React.HTMLProps<HTMLUListElement>, 'onSelectionChanged'> {
        categories: NewRegistrationFactory[];
        currentCategory?: string;
        onSelectionChanged: (currentCategory: string | undefined) => void;
    }
    export function CategoryList({ categories, currentCategory, onSelectionChanged, className, ...htmlOptions }: ICategoryListProps): JSX.Element;
    export type TemplateClickCallback = (item: ITemplate) => void;
    export type TemplateFavoriteClick = (item: ITemplate) => void;
    export interface ITemplate {
        id: string;
        name: string;
        description?: string;
        imageUrl: string | undefined | null;
        categoryName: string;
        factoryName: string;
        /**
         * Indicates need to show small hint next to the [[ITemplate.name]]
         */
        showBadge?: boolean;
        /**
         * Determines text which should be shown next to the [[ITemplate.name]].
         * To make it visible use [[ITemplate.showBadge]].
         */
        badgeText?: string;
        /**
         * Indicates that user marked this item as "Favorite" and it will be available in "Favorite" category
         */
        isFavorite?: boolean;
        /**
         * Order to sort templates in the list
         */
        order?: number;
    }
    export interface ITemplateListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
        template: ITemplate;
        showFavoriteButton?: boolean;
        onFavoriteClick?: TemplateFavoriteClick;
        onClick: TemplateClickCallback;
    }
    export function TemplateListItem({ onFavoriteClick, onClick, template, showFavoriteButton, className, ...htmlProps }: ITemplateListItemProps): JSX.Element;
    export type ListOrientation = 'vertical' | 'horizontal';
    export interface ITemplateListProps extends React.HTMLProps<HTMLUListElement> {
        templates: ITemplate[];
        fullWidth?: boolean;
        showFavoriteButton?: boolean;
        orientation: ListOrientation;
        onTemplateClick: TemplateClickCallback;
        onFavoriteClick?: TemplateFavoriteClick;
    }
    /**
     * List of templates available for creation Element Registration
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TemplateList({ templates, className, orientation, fullWidth, showFavoriteButton, onTemplateClick, onFavoriteClick, ...htmlOptions }: ITemplateListProps): JSX.Element;
    export interface IPrimaryTemplateItemProps extends Omit<ITemplateListItemProps, 'onFavoriteClick' | 'showFavoriteButton'> {
        template: ITemplate;
    }
    /**
     * Template which users use in most cases.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PrimaryTemplateItem({ template, onClick, className, ...htmlOptions }: IPrimaryTemplateItemProps): JSX.Element;
    interface IPrimaryTemplateListProps extends Omit<ITemplateListProps, 'orientation' | 'onFavoriteClick'> {
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PrimaryTemplateList({ templates, className, onTemplateClick, ...htmlOptions }: IPrimaryTemplateListProps): JSX.Element;
    export interface IDialogButton {
        id: string;
        text: string;
        class?: string;
        keyCode?: number;
        click: () => void;
    }
    export interface IDialogOptions {
        dialogClass?: string;
        title?: string;
        resizable?: boolean;
        width?: string | number;
        height?: string | number;
        minWidth?: string | number;
        minHeight?: string | number;
        buttons?: IDialogButton[];
        position?: {
            my?: string;
            at?: string;
            of?: any;
        };
    }
    export interface IChoiceItem {
        id: string;
        /**
         * Choice title
         */
        title: string;
        /**
         * On small resolutions we cannot show sidebar and choices go to dialogs buttons panel.
         * This property allows to set alternative text for choice when it goes to buttons panel.
         * By default @param title is used
         */
        asButtonText?: string;
        /**
         * Customize choices illustration
         */
        illustration: {
            url?: string;
            className?: string;
        };
        /**
         * Text of button which is displayed below an illustration
         */
        buttonText: string;
        /**
         * Property is supposed to be used when need to perform some action instead of changing content.
         *
         * @returns whether need to choose item
         */
        handle?: (item: IChoiceItem) => boolean;
        /**
         * Options will be applied to the dialog when choice is selected.
         */
        dialogOptions: IDialogOptions;
    }
    export interface IChoiceItemProps {
        item: IChoiceItem;
        isInSidePanel: boolean;
        showIllustrations: boolean;
        onChoose: (item: IChoiceItem) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChoiceItem({ item, isInSidePanel, showIllustrations, onChoose }: IChoiceItemProps): JSX.Element;
    /**
     * Primary actions (Create Flow, Create Rule, ...) of designer folder for showing "Create Registration Dialog"
     */
    export type ActionKey = 'Rule' | 'Flow' | 'Form' | 'Report' | 'DataTypes/Integration';
    export function getImageUrl(icon: ImageInfo, isPrimary?: boolean): string | null | undefined;
    export function convertToTemplate(item: NewRegistrationItem, isPrimary: boolean): ITemplate;
    export const primaryCategory = "Primary";
    export const secondaryCategory = "Secondary";
    export function loadCategories(folderId: string, actionKey: string): Promise<NewRegistrationFactory[]>;
    export interface ICreateRegistrationOptions {
        actionKey: ActionKey;
        folderId: string;
        template: NewRegistrationItem;
        runBaseAction: RunBaseActionCallback;
        showCreateDialog: ShowCreateDialogCallback;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
    }
    export function createRegistration({ actionKey, folderId, template, runBaseAction, showCreateDialog, handleCreatedRegistration, }: ICreateRegistrationOptions): Promise<null | undefined>;
    /**
     *  Filters design patterns and sort them to put default patterns before the rest.
     */
    export function convertDesignPatternToTemplates(patterns: DeclaredInterfaceDto[]): ITemplate[];
    export function getEntityIconUrl(elementType: keyof typeof ElementType): string;
    export function getDesignPatternIconUrl(): string;
    export function getDefaultDesignPatternIconUrl(): string;
    export function getElementTypes(actionKey: ActionKey): ElementType[];
    export function areAllPatternsDefault(patterns?: DeclaredInterfaceDto[]): boolean;
    /**
     * Determines can be entity create with using design pattern.
     *
     * @param actionKey Primary actions (Create Flow, Create Rule, ...) of designer folder for showing "Create Registration Dialog"
     */
    export function supportsDesignPattern(actionKey: ActionKey): boolean;
    export function createUseDefaultPatternChoice(patterns: DeclaredInterfaceDto[], handle: (choiceItem: IChoiceItem) => boolean, onClose: () => void): IChoiceItem;
    export function createPickPatternChoice(onClose: () => void): IChoiceItem;
    export function createScratchChoice(actionKey: ActionKey, onClose: () => void): {
        id: string;
        title: string;
        illustration: {
            url: string;
        };
        buttonText: string;
        dialogOptions: {
            height: number;
            minHeight: number;
            width: number;
            minWidth: number;
            resizable: boolean;
            buttons: {
                id: string;
                text: string;
                class: string;
                click: () => void;
            }[];
        };
    };
    export interface ICreateRegistrationProps extends React.HTMLProps<HTMLDivElement> {
        fullSize?: boolean;
        folderId: string;
        actionKey: ActionKey;
        runBaseAction: RunBaseActionCallback;
        showCreateDialog: ShowCreateDialogCallback;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
    }
    /**
     * Create Registration Gallery.
     * Displays UI for creation registration elements like flow, rule, page, form and etc.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CreateRegistration({ className, actionKey, folderId, fullSize, showCreateDialog, runBaseAction, handleCreatedRegistration, ...htmlProps }: ICreateRegistrationProps): JSX.Element;
    export interface IChoiceSeparatorProps {
        className?: string;
        /**
         * Separator orientation.
         * Horizontal separator is used for vertical list and vertical for horizontal one.
         */
        orientation: 'horizontal' | 'vertical';
        /**
         * Indicates whether need to show separator lines
         *
         * @default true
         */
        hasLines?: boolean;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChoiceSeparator({ orientation, className, hasLines }: IChoiceSeparatorProps): JSX.Element;
    interface IChoiceListProps {
        className: string;
        items: IChoiceItem[];
        isSideBar: boolean;
        showIllustrations: boolean;
        onChoose: (item: IChoiceItem) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const ChoiceList: React.ForwardRefExoticComponent<IChoiceListProps & React.RefAttributes<HTMLUListElement>>;
    export function convertChoicesToButtons(choices: IChoiceItem[], onChoose: (item: IChoiceItem) => void): IDialogButton[];
    export function convertChoiceToButton(choice: IChoiceItem, onChoose: (item: IChoiceItem) => void): IDialogButton;
    export function getSideBarPosition(choice: IChoiceItem, choices: IChoiceItem[]): "left" | "right";
    export interface IEitherOrDialogProps extends IEitherOrBasedDialogProps {
        /**
         * Hides title bar. It is useful in case custom title should be displayed.
         * @default false
         */
        hideTitleBar?: boolean;
        children: React.ReactNode;
        currentChoiceId?: string | null;
        /**
         * Dialog options. Some of them can be overriden by currently selected choice.
         */
        dialogOptions: IDialogOptions;
        choiceItems: IChoiceItem[];
        className?: string;
        /**
         * Disables sidebar default beahvior when it flips to opposite side when there is no room
         * or goes to buttons panel when there is no room on both sides.
         *
         * @default false
         */
        disableSidebarFlip?: boolean;
    }
    export interface IEitherOrBasedDialogProps {
        onItemChoosen: (item: IChoiceItem) => void;
        onDialogOptionsChanged: (options: IDialogOptions) => void;
        onInitialized?: () => void;
    }
    export const SIDEBAR_WIDTH = 245;
    /**
     * Right now It is only content of EitherOrDialog.
     * It will be dialog when we will move dialog from MVC project to FrontEnd project.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export const EitherOrDialog: React.ForwardRefExoticComponent<IEitherOrDialogProps & React.RefAttributes<HTMLDivElement>>;
    export interface IEitherOrPanelProps extends React.HTMLProps<HTMLDivElement> {
        currentChoiceId: string | null | undefined;
        choiceId: string;
    }
    export function EitherOrPanel(props: React.PropsWithChildren<IEitherOrPanelProps>): JSX.Element;
    export { ChoiceItem } from "components/Dialogs/EitherOrDialog/ChoiceItem";
    export { EitherOrDialog } from "components/Dialogs/EitherOrDialog/EitherOrDialog";
    export { EitherOrPanel } from "components/Dialogs/EitherOrDialog/EitherOrPanel";
    interface ITemplateSearchListProps {
        templates: ITemplate[];
        noItemsText: string;
        onTemplateClick: (pattern: ITemplate) => void;
    }
    /**
     * Template list with search box on the top.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function TemplateSearchList({ templates, noItemsText, onTemplateClick }: ITemplateSearchListProps): JSX.Element;
    interface IDesignPatternListProps {
        patterns: DeclaredInterfaceDto[];
        onDesignPatternClick: (pattern: DeclaredInterfaceDto | null) => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DesignPatternList({ patterns, onDesignPatternClick }: IDesignPatternListProps): JSX.Element;
    export type ShowCreateDialogCallback = (categoryName: string, generalType: string, elementTypeName: string, handleCreateCallback: (name: string) => Promise<void | null>, defaultName?: string) => Promise<void>;
    export interface CreateByDesignPatternDialogOptions {
        /**
         * Design pattern name
         */
        entityName: string;
        /**
         * Available element types to create design pattern
         */
        elementTypes: ElementType[];
        /**
         * General element type: Flow, Rule, ...
         */
        generalType: string;
        /**
         * Default entity name
         */
        defaultName: string;
        handleCreateCallback: (params: {
            name: string;
            type: ElementType;
        }) => Promise<void>;
    }
    export type ShowDesignPatternCreateDialogCallback = (options: CreateByDesignPatternDialogOptions) => Promise<void>;
    export type RunBaseActionCallback = (entityId: string, action: ActionHeader, entityType?: string) => void;
    export interface ICreateRegistrationDialogProps extends IEitherOrBasedDialogProps {
        folderId: string;
        actionKey: ActionKey;
        title: string;
        runBaseAction: RunBaseActionCallback;
        showCreateDialog: ShowCreateDialogCallback;
        showDesignPatternCreateDialog: ShowDesignPatternCreateDialogCallback;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
        onClose: () => void;
    }
    /**
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CreateRegistrationDialog({ folderId, actionKey, title, runBaseAction, showCreateDialog, showDesignPatternCreateDialog, handleCreatedRegistration, onItemChoosen, onClose, onDialogOptionsChanged, onInitialized, }: ICreateRegistrationDialogProps): JSX.Element;
    export function renderCreateRegistrationDialog(container: HTMLElement, props: ICreateRegistrationDialogProps, callback?: () => void): Promise<void>;
    export function renderCreateRegistration(elem: HTMLElement, options: ICreateRegistrationProps, callback?: () => void): Promise<void>;
    export interface ICreateFolderSettings {
        actionId: string;
        folderData: CreateFolderData;
        validationIssues: ValidationIssue[];
        updateFolderData: ({ fieldName, value }: IUpdateField) => void;
        updateValidationIssues: (values: ValidationIssue[]) => void;
        canAddRootFolder: boolean;
        onlyAtRoot?: boolean | null;
    }
    export function CreateFolder({ actionId, folderData, validationIssues, updateFolderData, updateValidationIssues, canAddRootFolder, onlyAtRoot, }: ICreateFolderSettings): JSX.Element;
    export interface ICreateFolderDialogProps extends IEitherOrBasedDialogProps {
        title: string;
        actionId: string;
        canAddRootFolder: boolean;
        onlyAtRoot: boolean | null;
        canCreateDesignerProject: boolean;
        addAtRoot?: boolean;
        onClose: () => void;
    }
    export type CreateFolderData = {
        folderName: string;
        addAtRoot: boolean;
    };
    export interface IUpdateField {
        fieldName: string;
        value: string | boolean;
    }
    export function CreateFolderDialog({ title, actionId, onItemChoosen, onInitialized, onClose, onDialogOptionsChanged, canAddRootFolder, onlyAtRoot, canCreateDesignerProject, }: ICreateFolderDialogProps): JSX.Element;
    export function renderCreateFolderDialog(container: HTMLElement, props: ICreateFolderDialogProps, callback?: () => void): Promise<void>;
    export interface ICreateElementProps {
        /**
         * General type of creating entity: Flow, Rule, Form, ...
         * It will be used as a placeholder in the text field
         */
        generalType: string;
        /**
         * Entity name will be shown initially in the text field
         */
        suggestionName: string;
        /**
         * Additional information which is shown above the text field
         */
        additionalInfo?: {
            label: string;
            name: string;
        };
        /**
         * Types information. Types will be shown in combobox above the text field
         */
        typesInfo?: {
            list: string[];
            value: string;
        };
        onInitialized: () => void;
        onDialogOptionsChanged: (options: IDialogOptions) => void;
        handleCreate: (params: {
            name: string;
            type: string | null;
        }) => void;
        getValidationIssues: (name: string) => Promise<ValidationIssue[]>;
        onClose: () => void;
    }
    export function CreateElement({ generalType, suggestionName, additionalInfo, typesInfo, onInitialized, onDialogOptionsChanged, onClose, handleCreate, getValidationIssues, }: ICreateElementProps): JSX.Element;
    export function renderCreateElement(container: HTMLElement, props: ICreateElementProps, callback?: () => void): Promise<void>;
    export function PickRegistrationTabs(tab: ITab, isCurrent: boolean): React.ReactNode;
    export const tabs: ITab[];
    export interface IEntityThumbnailProps {
        imageInfo: ImageInfo;
        alt: string;
        className: string;
    }
    export function EntityThumbnail({ imageInfo, alt, className }: IEntityThumbnailProps): JSX.Element;
    export interface IRegistrationTilesProps {
        entites: EntityPickerItem[];
        onSelected: (entityId: string) => void;
        currentEntity?: string;
        onMoreClick?: () => void;
        isLoading?: boolean;
    }
    export function RegistrationTiles({ entites, currentEntity, onSelected, onMoreClick, isLoading, }: IRegistrationTilesProps): JSX.Element;
    export interface IPickRegistrationTreeProps {
        onSelected: (entityId: string) => void;
        search?: string;
        settings?: ElementRegistrationPickerSettings;
        /**
         * temporary hack to reload tree, it is needed to reset selection.
         * TODO: Need to add ability to reset selection from the parent component
         */
        shouldRender: boolean;
        onModelLoaded: ({ isLoading, hasResult }: IOnLoadedTabResult) => void;
        isHidden: boolean;
    }
    export function PickRegistrationTree({ onSelected, settings, search, shouldRender, onModelLoaded, isHidden, }: IPickRegistrationTreeProps): JSX.Element;
    export interface IPickModuleEntitiesProps {
        onSelect: (entityId: string) => void;
        pickedEntityId: string;
        /**
         * Parent Element Registration used to get entities in the current project
         */
        forRegistrationId: string;
        pickerSettings: ElementRegistrationPickerSettings | undefined;
        onEntitiesLoaded: ({ isLoading, hasResult }: IOnLoadedTabResult) => void;
        isLoading: boolean;
    }
    export function PickModuleEntities({ onSelect, pickedEntityId, forRegistrationId, pickerSettings, onEntitiesLoaded, isLoading, }: IPickModuleEntitiesProps): JSX.Element;
    export interface IPickRegistartionMessageBox {
        isLoading?: boolean;
        showChildren?: boolean;
        hasResult: boolean;
        noResultsMessage: string;
        children: React.ReactNode;
    }
    export function PickRegistrationMessageBox({ isLoading, noResultsMessage, hasResult, children, showChildren, }: IPickRegistartionMessageBox): JSX.Element;
    export interface IOnLoadedTabResult {
        isLoading: boolean;
        hasResult?: boolean;
    }
    export interface IPickRegistrationProps {
        registrationType: string;
        /**
         * Parent Element Registration used to get entities in the current project
         */
        forRegistrationId: string;
        behaviorTypeName?: string;
        pickerSettings?: ElementRegistrationPickerSettings;
        onPicked: (entityId: string) => void;
    }
    export function PickRegistration({ registrationType, forRegistrationId, onPicked, behaviorTypeName, pickerSettings: propsPickerSettings }: IPickRegistrationProps): JSX.Element;
    interface ICreateNewRegistrationProps extends React.HTMLProps<{}> {
        folderId: string;
        elementType: ElementType;
        behaviorType?: string;
        defaultName?: string;
        showCreateDialog: ShowCreateDialogCallback;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
    }
    /**
     * CreateRegistrationList is analogue to CreateRegistration component but displayes elements as a list without categories.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CreateRegistrationList({ folderId, elementType, behaviorType, defaultName, showCreateDialog, handleCreatedRegistration, }: ICreateNewRegistrationProps): JSX.Element;
    interface ICreateNewRegistrationProps {
        folderId: string;
        registrationType: string;
        behaviorType?: string;
        runBaseAction: RunBaseActionCallback;
        showCreateDialog: ShowCreateDialogCallback;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
    }
    /**
     * Create New Choice.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CreateNewRegistration({ registrationType, behaviorType, folderId, showCreateDialog, handleCreatedRegistration, runBaseAction, }: ICreateNewRegistrationProps): JSX.Element;
    export interface IPickOrCreateDialogProps extends IEitherOrBasedDialogProps {
        registrationType: keyof typeof ElementType;
        behaviorType?: string;
        pickerSettings?: ElementRegistrationPickerSettings;
        folderId: string;
        /**
         * Parent Element Registration used to get entities in the current project
         */
        forRegistrationId: string;
        handleCreatedRegistration: (newRegistration: NewRegistrationResult) => void;
        handlePickedRegistration: (registrationId: string) => void;
        showCreateDialog: ShowCreateDialogCallback;
        runBaseAction: RunBaseActionCallback;
        onClose: () => void;
        hideCreate?: boolean;
        hidePick?: boolean;
    }
    export function PickOrCreateDialog({ onDialogOptionsChanged, onInitialized, onItemChoosen, registrationType, behaviorType, folderId, handleCreatedRegistration, showCreateDialog, runBaseAction, onClose, handlePickedRegistration, forRegistrationId, hideCreate, hidePick, pickerSettings }: IPickOrCreateDialogProps): JSX.Element;
    export function getCreateChoice(entityType: string, onCancel: () => void): IChoiceItem;
    export function renderPickOrCreateDialog(elem: HTMLElement, props: IPickOrCreateDialogProps, callback?: () => void): Promise<void>;
    export function renderElementUsage(props: IElementUsageProps, container: HTMLElement, callback?: () => void): Promise<void>;
    export const RecentFolderId = "RecentFolderId";
    export function getValidOrderNumber(orderNumber: number): number;
    export function sortFolderTreeNodes(nodeA: ITreeNode<IFolderTreeNode>, nodeB: ITreeNode<IFolderTreeNode>): number;
    export function findRecentNode(nodes: ITreeNode<IFolderTreeNode>[]): ITreeNode<IFolderTreeNode> | null;
    export function findNode(folderId: string, nodes: ITreeNode<IFolderTreeNode>[]): ITreeNode<IFolderTreeNode> | null;
    export function findAllNodes(folderId: string, nodes: ITreeNode<IFolderTreeNode>[]): ITreeNode<IFolderTreeNode>[];
    export function getFolderViewData(folderId: string): Promise<FolderViewData>;
    export interface ITreeNodeNameProps extends React.HTMLProps<{}> {
        name: string;
        searchString?: string;
    }
    export function TreeNodeName({ name, searchString, children }: ITreeNodeNameProps): JSX.Element;
    interface ICommonTreeContentProps<T> extends Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'onMouseUp' | 'onMouseDown'> {
        readonly node: ITreeNode<T>;
        name: string;
        description?: string;
        icon?: React.ReactChild;
        actions?: ITreeNodeAction[];
        subActions?: IActionLinkItem[];
        searchString?: string;
        onClick?: TreeNodeMouseEventHandler<T>;
        onMouseUp?: TreeNodeMouseEventHandler<T>;
        onMouseDown?: TreeNodeMouseEventHandler<T>;
        onExpandNodeClick?: TreeNodeMouseEventHandler<T>;
        components?: {
            name?: typeof TreeNodeName;
        };
    }
    export interface ITreeNodeAction {
        element: React.ReactChild;
        visibility: TreeNodeActionVisiblity;
    }
    export enum TreeNodeActionVisiblity {
        allways = 0,
        onHover = 1
    }
    /**
     * Common Tree node for most components in portal
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function CommonTreeNode<T>({ node, name, description, icon, actions, subActions, searchString, onClick, onMouseDown, onMouseUp, onExpandNodeClick, components, ...props }: React.PropsWithChildren<ICommonTreeContentProps<T>>): JSX.Element;
    export function renderFolderTree(props: IFolderTreeProps, container: HTMLElement, callback?: RenderCallback): Promise<string>;
    export function updateFolderCount(treeId: string, countResult: FolderCountResults): Promise<void>;
    export function updateFolder(treeId: string, command: TreeCommandType, folderMessage: IFolderMessage): Promise<void>;
    interface IFolderContextMenuProps {
        node: ITreeNode<IFolderTreeNode>;
    }
    /**
     *
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function FolderContextMenu({ node }: IFolderContextMenuProps): JSX.Element;
    export function showContextMenu(folderNode: FolderForTree, elem: HTMLElement, onClose?: () => void): void;
    interface IFolderTreeNodeProps {
        treeId: string;
        node: ITreeNode<IFolderTreeNode>;
        onNodeSelect: (node: ITreeNode<IFolderTreeNode>) => void;
        toggleExpandNode: TreeNodeMouseEventHandler<IFolderTreeNode>;
    }
    /**
     *
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function FolderTreeNode({ node, treeId, onNodeSelect, toggleExpandNode }: IFolderTreeNodeProps): JSX.Element;
    export const UPDATEFOLDERCOUNT_EVENT_PREFIX = "update-foldercount-foldertree__";
    export interface IFolderMessage {
        folderId: string;
        doNotExpand?: string;
    }
    export interface IFolderTreeProps {
        treeId?: string;
        initialFolderId?: string;
        /**
         * Loader has been used in 6.x version when "Recent folders" were rendered as separated Tree.
         */
        loader: IFolderNodeLoader;
    }
    export interface IFolderTreeNode {
        folderNode: FolderForTree;
        /**
         * Folder Selectable flag
         */
        pickable: boolean;
    }
    export function getNodeContentClassName(isActive: boolean): string;
    export function FolderTree({ treeId, initialFolderId, loader }: IFolderTreeProps): JSX.Element;
    export interface IFolderNodeLoader {
        getRootFolders(): Promise<FolderForTree[]>;
        getSubFolders(folderId: string): Promise<FolderForTree[]>;
        getSubFolder(folderId: string): Promise<FolderForTree>;
    }
    export function getMyRootFoldersForTree(): Promise<FolderForTree[]>;
    export function getMyHomeFolder(): Promise<FolderForTree>;
    export function getSubFolderForTree(folderId: string): Promise<FolderForTree>;
    export function getMyRecentFoldersForTree(): Promise<FolderForTree[]>;
    export function getSubFoldersForTree(folderId: string): Promise<any>;
    export class DefaultNodeLoader implements IFolderNodeLoader {
        getRootFolders(): Promise<FolderForTree[]>;
        getSubFolders(folderId: string): Promise<FolderForTree[]>;
        getSubFolder(folderId: string): Promise<FolderForTree>;
    }
    export function createTreeNode(folderNode: FolderForTree, selectedFolderId?: string): ITreeNode<IFolderTreeNode>;
    export function loadFolderTreeNodes(loader: IFolderNodeLoader, parent: ITreeNode<IFolderTreeNode>, selectedFolderId: string): Promise<ITreeNode<IFolderTreeNode>[]>;
    export function navigationItemStoragePromise(parentId: string): Promise<void>;
    interface IChartControlButtonsProps extends React.HTMLProps<{}> {
        onFilterClick: React.MouseEventHandler;
        onConfigClick: React.MouseEventHandler;
        onShowDataClick?: React.MouseEventHandler;
        configActive: boolean;
        filterActive: boolean;
        canFilter?: boolean;
        canConfigure?: boolean;
    }
    /**
     * Buttons to show filter and configuration editors for a chart.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartControlButtons({ canConfigure, canFilter, configActive, filterActive, onConfigClick, onFilterClick, onShowDataClick, }: IChartControlButtonsProps): JSX.Element | null;
    interface ICalloutFooterProps extends React.HTMLProps<{}> {
        leftContent?: React.ReactNode | React.ReactNode[];
        rightContent?: React.ReactNode | React.ReactNode[];
        className?: string;
    }
    /**
     * Footer component for callouts that have control buttons in a footer, etc.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CalloutFooter({ className, leftContent, rightContent }: ICalloutFooterProps): JSX.Element;
    export interface IChartContext {
        onShowDataClick: React.MouseEventHandler;
        folderId: string;
        isReportPart?: boolean;
        /**
         * Provide to filter to provided key on the client-side
         */
        zoomedKey?: string;
        /** to Zoom out of particular key */
        onZoomOut?: (index: any) => void;
        axisLabels?: AxisLabels;
        seriesMetadata?: ChartEntryMetadata[];
        labelMetadata?: ChartEntryMetadata[];
        isInDesignMode?: boolean;
    }
    export const ChartContext: React.Context<IChartContext>;
    interface ICalloutHeaderProps {
        title?: string;
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * Standard header for standard (e.g. filter) call-outs.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function CalloutHeader({ title, className, children }: ICalloutHeaderProps): JSX.Element;
    export interface ChartResetControlProps {
        resetOptions?: ChartResetOptions[];
        editingConfig?: boolean;
        onReset?: () => void;
        onResetWithOption?: (rsetOption: ChartResetOptions) => void;
    }
    export const DISPLAY_LABEL_FOR_CHART_RESET_OPTIONS: Map<ChartResetOptions, string>;
    export function getLabelForChartResetOptions(type: ChartResetOptions): string;
    export function ChartResetControl({ resetOptions, onReset, onResetWithOption, editingConfig }: ChartResetControlProps): JSX.Element;
    export interface IChartControlsProps {
        visible?: boolean;
        chartId: string;
        pageId: string;
        personalization: DataPair[];
        showDataButton?: boolean;
        resetOptions?: ChartResetOptions[];
    }
    /**
     * Chart Controls
     * TODO refactor to work for any page part
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartControls({ chartId, pageId, personalization, showDataButton, visible, resetOptions }: IChartControlsProps): JSX.Element | null;
    export const CHART_MARGIN_DEFAULT_PAD = 30;
    export function getChartDataFromProps(data: ChartRenderData[], config: ChartConfiguration, seriesMetadata?: ChartEntryMetadata[], labelMetadata?: ChartEntryMetadata[]): ChartRenderingProps;
    /**
     * Filter to a key. Could easily be expanded to work on series, but currently
     * works on data-labels _within_ series.
     * @param data to render
     * @param key to filter, if any
     * @returns data filtered to a particular entry label if found, otherwise the original data.
     */
    export function filterToKey(data: ChartRenderData[], key?: string): ChartRenderData[];
    export function getChartHeader(options?: ChartConfiguration): ChartHeaderConfig | undefined;
    export function getTicksForSize(el?: HTMLElement, config?: ChartConfiguration, minValue?: number, maxValue?: number): {
        xTickValues: number | number[];
        yTickValues: number | number[];
    };
    export function getTickSpread(axisMin?: number, axisMax?: number, step?: number): number[] | 5;
    export function getGroupMode(options?: ChartConfiguration): "grouped" | undefined;
    export function getLayoutDirection(options?: ChartConfiguration): "horizontal" | "vertical" | undefined;
    export function needRightMargin(options?: ChartConfiguration): boolean;
    export function getLineSeries(data?: ChartRenderData[], labelFormatter?: DpLabelFormatter): Serie[];
    export function enableGridX(options?: ChartConfiguration): boolean;
    export function enableGridY(options?: ChartConfiguration): boolean;
    export function getLeftAxisLegend(options?: ChartConfiguration): string | undefined;
    export function getBottomAxisLegend(options?: ChartConfiguration): string | undefined;
    /**
     * @param options to evaluate
     * @returns value or 'auto', depending on whether numeric config is set and valid.
     */
    export function getYScaleMax(options?: ChartConfiguration): number | "auto";
    /**
     * @param options to evaluate
     * @returns value or 'auto', depending on whether numeric config is set and valid.
     */
    export function getYScaleMin(options?: ChartConfiguration): number | "auto";
    export function getBorderColor(options?: ChartConfiguration): string | undefined;
    export interface ChartMargins extends Box {
        top: number;
        right: number;
        bottom: number;
        left: number;
        leftAxisLegend: number;
        bottomAxisLegend: number;
    }
    export function getMargins(series: Series[], valueFormatter: ValueFormatter<number | string | Date>, labelFormatter: DpLabelFormatter, config?: ChartConfiguration): ChartMargins;
    export function singleSeriesChartType(type?: ChartType): boolean;
    export function getLegendProps(margins: ChartMargins, series: Series[], legendFormatter: DpLabelFormatter, options?: ChartConfiguration): Array<{
        dataFrom: 'indexes' | 'keys';
    } & LegendProps> | undefined;
    export interface AxisLegendProps {
        legend?: React.ReactNode;
        legendPosition?: 'start' | 'middle' | 'end';
        legendOffset?: number;
    }
    export interface AxesLegendProps {
        left: AxisLegendProps;
        bottom: AxisLegendProps;
    }
    export function getChartSpecificP13n(p13n?: DataPair[]): {
        runtimeConfig: ChartRuntimeConfig | undefined;
        seriesMetadata: ChartEntryMetadata[];
        labelMetadata: ChartEntryMetadata[];
    };
    export function getSeriesColor({ Key: name, Color }: ChartRenderData, seriesMetadata: ChartEntryMetadata[]): string;
    export function getConfiguration(configuration?: ChartConfiguration, runtimeConfig?: ChartRuntimeConfig): ChartConfiguration | undefined;
    export function getChartLabel(labelType: ChartLabelType, datum: ChartDatum, config?: ChartConfiguration): string;
    /**
     * Helper function for axis markers. Currently only WinLossBars, but easily expanded on.
     * @param config to evaluate
     */
    export function getMarkers(config?: ChartConfiguration): CartesianMarkerProps[] | undefined;
    export function getDatumByValueAndLabel(value: number, label: string, data: ChartDatum[]): ChartDatum | undefined;
    export function getAxisNumberFormat(config?: ChartConfiguration, maxValue?: number): string;
    export function getValueFormatter(config?: ChartConfiguration, maxValue?: number): (value: number | string | Date) => string;
    export function getValueTickFormatter(config?: ChartConfiguration, maxValue?: number): ValueFormatter<number | string | Date>;
    export interface DpLabelFormatter {
        (label: string, value: number | string | Date): string;
    }
    export function getLabelTickFormatter(config?: ChartConfiguration, overrideType?: ChartLabelType): (label: string, value: number | string | Date) => string;
    export function getLegendFormatter(config?: ChartConfiguration): (label: string, value: string | number | Date) => string;
    export function getTooltipNumberFormat(config?: ChartConfiguration): string;
    export function getTooltipNumberFormatter(config?: ChartConfiguration, formatString?: string): (n: number | {
        valueOf(): number;
    }) => string;
    /**
     * @returns the configured list of colors, or else defaults.
     * @param config calculated chart configuration
     */
    export function getChartColors(config?: ChartConfiguration): string[];
    /**
     * @param props to evaluate
     * @returns true if it's chart in a report, not a page-part.
     */
    export function isReportChartPart(props: IChartProps): boolean;
    export interface ChartIdModel {
        PageId: string;
        ChartId: string;
        FolderId: string;
        DesignerSessionId?: string;
        /**
         * Provide to filter to provided key on the client-side
         */
        zoomedKey?: string;
        /** to Zoom out of particular key */
        onZoomOut?: (index: any) => void;
    }
    export interface AxisLabels {
        textVisible?: boolean;
        textStyle?: object;
        labels?: object;
    }
    export interface YAxisSettings {
        visible: boolean;
        autoMin?: boolean;
        min?: number;
        autoMax?: boolean;
        max?: number;
    }
    export interface ChartArrayModel {
        ReportId: string;
        FolderId: string;
        OldContextId: string;
        UseMatrixAssource: boolean;
        ChartType: ChartType;
        GroupingField: string[];
        FieldsDefinition: SubCalcFieldDefinition[];
        SeriesName: string;
        ReportContextId: string;
        IsInDesignMode: boolean;
    }
    export interface ChartDrillModel {
        DrillObj: DrillData;
        ReportSearchKey: string;
    }
    export interface DrillData {
        InstanceId: string;
        ChartId: string;
        ReportId: string;
        FolderId: string;
        ReportContextId: string;
        ChartAvailableSeriesNames: string;
        ChartType: ChartType;
        DataDrillMode: string;
        IntersectionDataKey: string;
        Title: string;
        UseMatrixAsSource: boolean;
        disableDrillDown: boolean;
        overrideDrillDownTitle: boolean;
        drillDownTitle: string;
    }
    export interface SeriesStyle {
        fill: string;
        strokeWidth: number;
    }
    export interface ChartDataPoint {
        label: string;
        [key: string]: any;
    }
    export interface Series {
        legendEntry: boolean;
        data: {
            bindingY?: string;
            bindingX?: string;
        };
        originalData: ChartDatum[];
        legendText: string;
        markers: {};
    }
    export interface ChartRenderingProps {
        series: Series[];
        seriesStyles: SeriesStyle[];
        finalData: ChartDataPoint[];
        labelType: ChartLabelType;
        palette: string[];
        bindingY: string;
        indexBy: string;
        bindingX?: string;
        keys: string[];
        margins: ChartMargins;
        legendFormatter: DpLabelFormatter;
        legends?: Array<{
            dataFrom: 'indexes' | 'keys';
        } & LegendProps>;
        theme: Theme;
        labelRotation: number;
        enableElementLabels: boolean;
        /**
         * This is used to disable tooltips without disabling all interactions,
         * since isInteractive is handled inconsistently in different NIVO charts
         */
        tooltip?: React.StatelessComponent<any>;
        tooltipType: ChartLabelType;
        borderColor?: string;
        tickFormatter: ValueFormatter<string | number | Date>;
        labelFormatter: DpLabelFormatter;
        minValue: number;
        maxValue: number;
        axisLegendProps: AxesLegendProps;
        totalsByLabel: Map<string, number>;
        stackedAxisMax?: number;
    }
    /**
     * since this is only modified in property editors, or otherwise nestled in a DataPair,
     * we don't get it over typescript generation and have to define it
     */
    export interface ChartRuntimeConfig {
        DisplayStacked: boolean;
        ChartType: ChartType;
        ShowTitle: boolean;
        TooltipType: ChartLabelType;
        RotateLabelsAngle: number;
        MaxAxisLabelLength: number;
        ChartLegendPosition: ChartLegendPosition;
        YAxisMin: number;
        SetYMinimum: boolean;
        SetYMaximum: boolean;
        YAxisMax: number;
        ShowElementLabels: boolean;
        BulletMaximum: number;
        BulletMinimum: number;
        TargetValue: number;
        OkValue: number;
        GoodValue: number;
        RangeColors: string[];
        MeasureColors: string[];
        MarkerColors: string[];
        BulletLayout: BulletLayout;
        BulletTitlePosition: BulletTitlePosition;
        ShowTooltip: boolean;
        MinimumPointSize: number;
        MaximumPointSize: number;
        LabelNumberFormat: string;
        TooltipNumberFormat: string;
        ColorPalette: string[];
    }
    export function NoData(): JSX.Element;
    interface IChartLeftControlButtonsProps extends React.HTMLProps<{}> {
        onGoBackClick?: React.MouseEventHandler;
        zoomedKey?: string;
    }
    /**
     * Controls on the _right_ side of the chart
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartLeftControlButtons({ onGoBackClick, children, zoomedKey }: IChartLeftControlButtonsProps): JSX.Element;
    interface IChartWrapperProps {
        configuration?: ChartConfiguration;
        personalization?: DataPair[];
        children: React.ReactNode;
        chartId: string;
        pageId: string;
        className?: string;
        currentData?: ChartRenderData[];
    }
    /**
     * Wrapper element for charts, normalizing styling and chart position.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function ChartWrapper({ chartId, children, className, configuration, pageId, currentData, personalization, }: IChartWrapperProps): JSX.Element;
    interface IChartTooltipProps {
        datum: BarDatumWithColor;
        tooltipType: ChartLabelType;
        useBasicTooltip?: boolean;
        hasCheap?: boolean;
    }
    /**
     * Chart Tooltip implementation
     *
     * Copyright (c) 2021 Decisions All Rights Reserved
     */
    export function ChartTooltip({ datum, tooltipType, useBasicTooltip, hasCheap }: IChartTooltipProps): JSX.Element;
    interface IWinLossBarComponentProps extends BarItemProps {
        threshold: number;
        shouldShowTooltip?: boolean;
        tooltipFormatter: (n: number) => string;
    }
    /**
     * Custom bar component, primarily to handle the hue shift below the zero line.
     *
     * Most of the rest of it's guts are lifted from
     * [the source](https://github.com/plouc/nivo/blob/master/packages/bar/src/BarItem.js)
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function WinLossBarItem(props: IWinLossBarComponentProps): JSX.Element;
    interface UseMixedBarOptions {
        keys: string[];
        palette: string[];
        config?: ChartConfiguration;
        areaKey?: string;
        lineKey?: string;
    }
    /**
     * Hook to consolidate logic specific to MixedBars
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     *
     * @param options
     */
    export function useMixedBarParts({ config, keys, palette }: UseMixedBarOptions): {
        adjustedKeys: string[];
        adjustedPalette: string[];
        layers?: undefined;
    } | {
        adjustedKeys: string[];
        layers: (React.FunctionComponent<{}> | BarLayerType)[];
        adjustedPalette: string[];
    };
    /** Because nivo doesn't export this, yet */
    interface CartesianMarkersItemProps<V extends AxisValue> {
        animatedProps: {
            opacity: any;
            textTransform: Interpolation;
            transform: any;
        };
        tickIndex: number;
        rotate: number;
        textBaseline: string;
        textAnchor: string;
        value: V;
        x: number;
        y: number;
        lineX: number;
        lineY: number;
        textX: number;
        textY: number;
    }
    interface IDpCartesianMarkersItemProps<V extends AxisValue> extends CartesianMarkersItemProps<V> {
        formatter?: ValueFormatter<V>;
    }
    /**
     * This is basically a re-implementation of the DOM parts of @nivo/core/.../CartesianMarkersItem,
     * in order to accommodate our requirement to be able to add CSS class names to HTML elements.
     *
     * for [DT-028413]
     *
     * But while we're at it, we can add a hook for automated tests, too.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function DpCartesianMarkersItem<V extends AxisValue>({ animatedProps, textBaseline, textAnchor, formatter, value, lineX, lineY, }: IDpCartesianMarkersItemProps<V>): JSX.Element;
    export interface IUseParseChartProps {
        configuration?: ChartConfiguration;
        currentData?: ChartRenderData[];
        defaultProps?: Partial<ChartRenderingProps>;
    }
    export function useParseChartProps(props: IUseParseChartProps): ChartRenderingProps;
    export interface IBarChartProps extends IChartProps {
    }
    /**
     * Bar Chart implementation
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function BarChart({ configuration, currentData, PageId: pageId, ChartId: chartId, personalization, onDataPointClick, wrapperElement, }: IBarChartProps): JSX.Element;
    export const exampleConfig: ChartRenderingProps;
    interface ILineChartProps extends IChartProps {
    }
    /**
     * Line Chart implementation, which also renders "Areas" and "Dots" types.
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function LineChart({ configuration, currentData, PageId: pageId, ChartId: chartId, personalization, onDataPointClick, wrapperElement, }: ILineChartProps): JSX.Element;
    export interface IPieChartProps extends IChartProps {
    }
    /**
     * Pie Chart implementation
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function PieChart({ configuration, currentData, PageId: pageId, ChartId: chartId, personalization, onDataPointClick, }: IPieChartProps): JSX.Element;
    export const exampleConfig: ChartRenderingProps;
    export interface ILegendEntryProps {
        color: string;
        label: string;
    }
    /**
     * Legend entry
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function LegendEntry({ color, label }: ILegendEntryProps): JSX.Element;
    export interface ILegendProps extends IChartProps {
        horizontal?: boolean;
        overrideItems?: ILegendEntryProps[];
        className?: string;
        children?: React.ReactNode;
        style?: React.CSSProperties;
    }
    export function Legend({ children, className, configuration, currentData, horizontal, overrideItems, style, }: ILegendProps): JSX.Element;
    interface IBulletChartMeasureProps extends BulletRectsItemProps {
        ranges: number[];
        measureColors: string[];
        target: number;
    }
    /**
     * Custom bullet measure component lets us chose the color the way we want.
     *
     * It also allows for adding a class name for automated ts
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function BulletChartMeasure({ animatedProps: { x, y, width, height }, data, onMouseEnter, onMouseMove, onMouseLeave, onClick, ranges, target, measureColors, }: IBulletChartMeasureProps): JSX.Element;
    interface IBulletChartProps extends IChartProps {
    }
    /**
     * Bullet Chart implementation
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function BulletChart(props: IBulletChartProps): JSX.Element;
    interface IScatterPlotChartProps extends IChartProps {
    }
    /**
     * Bubbles
     *
     * https://nivo.rocks/scatterplot/
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Bubbles({ configuration, currentData, PageId: pageId, ChartId: chartId, personalization, onDataPointClick, wrapperElement, }: IScatterPlotChartProps): JSX.Element;
    export interface IChartProps extends ChartIdModel {
        /**
         *  Configuration about which chart and how it should be displayed.
         * Lacking this input or sufficient parts, implementations should render a default/placeholder.
         */
        configuration?: ChartConfiguration;
        /**
         * Data which the chart should render. When lacking, a chart implementations should render placeholder data.
         */
        currentData?: ChartRenderData[];
        personalization?: DataPair[];
        onShowDataClick?: (config: ChartConfiguration, data: ChartRenderData[]) => void;
        onDataPointClick?: (config: ChartConfiguration, datum: ChartDatum, clientX: number, clientY: number) => void;
        wrapperElement?: HTMLElement;
        render?: (renderProps: IChartProps) => JSX.Element;
    }
    /**
     * Entry-point component for rendering any particular chart component:
     *
     * Copyright (c) 2020 Decisions All Rights Reserved
     */
    export function Chart(props: IChartProps): JSX.Element;
    export function renderChartControls(el: HTMLElement, props: IChartControlsProps, callback?: () => void): Promise<void>;
    export function renderChart(el: HTMLElement, props: IChartProps, callback?: () => {}): Promise<void>;
    export function renderChartLegend(el: HTMLElement, props: ILegendProps, callback?: () => {}): Promise<void>;
    interface IPatternsDetailsProps {
        pattern: DeclaredInterfaceDto;
        onEditDesignPattern: (patternId: string) => void;
    }
    export const PatternDetails: ({ pattern: { Id, Name, Description, InputData }, onEditDesignPattern, }: IPatternsDetailsProps) => JSX.Element;
    export type DataDefinitionsDialogView = 'pick-design-pattern' | 'define-data';
    export interface IEitherOrDataDefinitionsDialogProps extends IEitherOrBasedDialogProps, Omit<IInputDataDesignerProps, 'startSession' | 'onSessionStarted' | 'showInLayer' | 'currentView' | 'onClose'> {
        /**
         * Dialog's title
         */
        title: string;
        /**
         * Element registration's mapping context
         */
        mappingContext: MappingContext;
        /**
         * Determines which part should be visible 'Pick Design Pattern' or 'Define Data'
         */
        currentView?: DataDefinitionsDialogView;
        /**
         * Applied design pattern id.
         * Component will display details view if appliedDesignPatternId is provided along with currentView = "pick-design-pattern".
         */
        appliedDesignPatternId?: string;
        /**
         * Dialog is shown if user has applied design pattern and switch to setting up inputs "Define Data".
         * @returns Whether need to unapply design pattern
         */
        showUnApplyWarningDialog: (title: string, message: string) => Promise<boolean>;
        onClose: () => void;
    }
    /**
     * Dialogs has two options "Pick Design Pattern" and "Define Data".
     * It should be shown just for entities which support design pattern.
     */
    export function EitherOrInputDataDialog({ title, currentView, appliedDesignPatternId: appliedDesignPatternIdProp, showUnApplyWarningDialog, showSaveDialog, onInitialized, onItemChoosen, onCreateTypeClick, mappingContext, onDialogOptionsChanged, onClose, onCreateTypeFromInputs, }: IEitherOrDataDefinitionsDialogProps): JSX.Element | null;
    export function renderEitherOrInputDataDialog(container: HTMLElement, props: IEitherOrDataDefinitionsDialogProps, callback?: () => void): Promise<void>;
    export function useNavigationComplete(listener: EventListenerOrEventListenerObject): void;
    export interface ISwitchPortalViewLinkProps {
        isStudio: boolean;
        hasStudioRights?: boolean;
        baseUrl: string;
    }
    export function SwitchPortalViewLink({ isStudio, hasStudioRights, baseUrl }: ISwitchPortalViewLinkProps): JSX.Element;
    export function renderSwitchPortalViewLink(container: HTMLElement, props: ISwitchPortalViewLinkProps, callback?: () => void): Promise<void>;
    export function renderMappingEditor(el: HTMLElement, props: IMappingEditorDialogProps): Promise<void>;
    /**
     * Page Control represents actions vertically in two column.
     *
     * Copyright (c) 2019 Decisions ALl Rights Reserved
     */
    export function FolderActionsBar({ className, actionClassName, actionGroups, primaryActionsClassName, secondaryActionsClassName, onClick, }: IActionBarProps): JSX.Element;
    export interface IInfoForAdditionalColumn {
        columns: IReportGridColProps[];
        hasRowTypeIcon?: boolean;
        showRowNumber?: boolean;
        typeColumnName?: string;
        allSortings?: string[];
    }
    export const updateColumnsConfiguration: (currentConfiguration: ReportViewConfiguration, updatedColumns: IReportGridColProps[], columnsToDelete: string[]) => ReportViewConfiguration;
    export const updateFilteringInConfiguration: (currentConfiguration: ReportViewConfiguration, updatedFiltering: FilterInfo[]) => ReportViewConfiguration;
    export const updateSortingsInConfiguration: (currentConfiguration: ReportViewConfiguration, updatedSorting: string[], columns: IReportGridColProps[]) => ReportViewConfiguration;
    export const getUpdatedSortingsConfiguration: (data: any, columnName: string, updatedSorting: SortType) => ReportViewConfiguration;
    export const getUpdatedConfigurationWithResizedColumn: (currentConfiguration: ReportViewConfiguration, columnId: string, updatedWidth: number, availableWidth: number) => ReportViewConfiguration | undefined;
    export const updateGroupingsInConfiguration: (currentConfiguration: ReportViewConfiguration, updatedGroupings: string[], columns: IReportGridColProps[]) => ReportViewConfiguration;
    export const getSortingOrder: (order: string) => SortOrder;
    export const getSortings: (currentConfiguration: ReportViewConfiguration, columns: IReportGridColProps[]) => string[];
    export const getGroupings: (currentConfiguration: ReportViewConfiguration, columns: IReportGridColProps[]) => string[];
    export const getRowsFromJsonRows: (jsonRows: any[]) => any[];
    export const getColumnsForGrid: (configuration: ReportViewConfiguration, canFilter?: boolean | undefined) => IReportGridColProps[];
    export const getTrimedAggData: (aggData: any[]) => any[];
    export const getActionInfo: (actions: any[]) => {
        entityId: any;
        entityType: any;
    } | undefined;
    export const getColumnsAndCalculatedColumns: (contextId: string) => Promise<{
        Columns: IRuntimeColumn[];
        'Calculated Columns': IRuntimeColumn[];
    }>;
    export const getPartialProps: (gridViewResultData: any) => {
        rows: any[];
        aggregationGroupInfo: any[];
        aggSeries: any;
        totalAggregation: any;
        gridRowColoring: ReportViewerCellColorInfo[];
        gridColumnColoring: any;
        totalPages: any;
        currentPage: any;
        unknownPageCount: any;
        totalRows: any;
        typeColumnName: any;
        hasRowTypeIcon: boolean;
        isBroadcastingSelection: boolean;
    };
    export const getUpdatedProps: (updatedConfiguration: ReportViewConfiguration, gridViewResultData: any, canFilter: boolean) => {
        gridColumns: IReportGridColProps[];
        groupings: string[];
        sortings: string[];
        allFilters: FilterInfo[];
        configuration: ReportViewConfiguration;
        usePercentageWidthUnit: any;
        rows: any[];
        aggregationGroupInfo: any[];
        aggSeries: any;
        totalAggregation: any;
        gridRowColoring: ReportViewerCellColorInfo[];
        gridColumnColoring: any;
        totalPages: any;
        currentPage: any;
        unknownPageCount: any;
        totalRows: any;
        typeColumnName: any;
        hasRowTypeIcon: boolean;
        isBroadcastingSelection: boolean;
    };
    /**this method is useful where grid column remains unchanged
     * It has major impact on performation (unnecessary updating grid column)
     */
    export const getUpdatedPropsWithoutColumn: (updatedConfiguration: ReportViewConfiguration, gridViewResultData: any, gridColumns: IReportGridColProps[]) => {
        groupings: string[];
        sortings: string[];
        allFilters: FilterInfo[];
        configuration: ReportViewConfiguration;
        usePercentageWidthUnit: any;
        rows: any[];
        aggregationGroupInfo: any[];
        aggSeries: any;
        totalAggregation: any;
        gridRowColoring: ReportViewerCellColorInfo[];
        gridColumnColoring: any;
        totalPages: any;
        currentPage: any;
        unknownPageCount: any;
        totalRows: any;
        typeColumnName: any;
        hasRowTypeIcon: boolean;
        isBroadcastingSelection: boolean;
    };
    export const getAllFilters: (configuration: ReportViewConfiguration, columns: IReportGridColProps[]) => FilterInfo[];
    export const getAllColumns: (info: IInfoForAdditionalColumn) => [IReportGridColProps[], IReportGridColProps[], IReportGridCellInfo[]];
    export interface IFilterLayerInfo {
        updatedData: IUpdatedGridConfiguration;
        currentConfig: ReportViewConfiguration;
        gridColumns: IReportGridColProps[];
        instanceId: string;
        reportContextId: string;
        gridHolder: HTMLElement;
    }
    export interface IColumnFilterInfo {
        currentConfiguration: ReportViewConfiguration;
        updatedFiltering: FilterInfo[];
        gridHolder: HTMLElement;
    }
    export interface IRuntimeFilterChangeInfo {
        config: ReportViewConfiguration;
        filters: DataPair[];
    }
    export const getValidSelectedId: (rows: any[], selectedId?: string | undefined, autoSelectFirstRow?: boolean | undefined) => string | undefined;
    export const getValidSelectedIds: (rows: any[], selectedIds?: string[] | undefined, autoSelectFirstRow?: boolean | undefined) => string[];
    export const deteleGridColumns: (columnsToDelete: string[], reportContextId: string) => Promise<void>;
    export const updateColumnFilters: (info: IColumnFilterInfo) => ReportViewConfiguration;
    export const getPartialUpdatedOnRunTimeFilterChange: (info: IRuntimeFilterChangeInfo) => ReportViewConfiguration;
    export const getUpdatedSort: (currentSort: SortType) => SortType;
    export const getConfiguration: (currentConfiguration: ReportViewConfiguration, reportContextId: string, isdrilldown: boolean, configurationToMerge?: ReportViewConfiguration | undefined) => Promise<ReportViewConfiguration>;
    export const getFilterLayerLabels: (gridData: GridViewResultData) => {
        searchLabel: string;
        sortByLabel: string;
        groupByLabel: string;
        multiSelectLabel: string;
        columnsLabel: string;
        rowsLabel: string;
        closeLabel: string;
        resetSettingsLabel: string;
        applyLabel: string;
        widthUnitLabel: string;
    };
    export interface IFilterLayerComboBoxProps extends IFilterLayerComboCommon {
        comboBox: IReportComboboxListOptions;
        comboBoxOptions: IReportComboboxListOptions[];
    }
    export const FilterLayerComboBox: FC<IFilterLayerComboBoxProps>;
    export default function GridFilterLayerComboList(props: IReportComboBoxListProps): JSX.Element;
    export default function Grouping(props: IReportGroupingProps): JSX.Element;
    export default function Sorting(props: IReportSortingProps): JSX.Element;
    export const getPlaceholderFilter: () => FilterInfo;
    export const getUpdatedFilters: (newFilter: updatedFilterInfo, oldFilters: FilterInfo[], columns: IReportGridColProps[]) => FilterInfo[];
    export const addPlaceholderFilter: (updatedFilters: FilterInfo[], columns: IReportGridColProps[]) => boolean | "";
    export const globalFilterColumn: () => IReportGridColProps;
    export function Filter(props: IReportFilteringProps): JSX.Element;
    export default function ColumnFilters(props: IReportColumnFiltersProps): JSX.Element;
    export default function ToggleButton(props: IFilterLayerToggleButtonProps): JSX.Element;
    export function RuntimeColumn(props: IRuntimeColumnProps): JSX.Element;
    export function AddColumnItem(props: IAddColumnItem): JSX.Element;
    export default function AddColumns(props: IReportGridAddColumnsProps): JSX.Element;
    export function ColumnEditorFooter(props: IReportColumnsEditorProps): JSX.Element;
    export interface IColumnEditorColumnProps extends IReportColumnsEditorProps {
        column: IReportGridColProps;
    }
    export function Column(props: IColumnEditorColumnProps): JSX.Element;
    export default function ColumnsEditors(props: IReportColumnsEditorProps): JSX.Element;
    export interface IFilterPanelFooterProps {
        canReset?: boolean;
        onApply: () => void;
        onCancel: () => void;
        onReset: () => void;
        closeLabel?: string;
        applyLabel?: string;
        resetLabel?: string;
    }
    export function Footer({ canReset, closeLabel, applyLabel, resetLabel, onApply, onCancel, onReset, }: IFilterPanelFooterProps): JSX.Element;
    export const getStyleFormFontAttribute: (fontAttributes: LabelAttributes) => any;
    export const getLiveUpdateColumnStyle: (liveUpdateColumnInfo: LiveUpdateColumnInfo, liveDate: Date) => [string, string];
    export const getCellColoringInfo: (gridCellColoring: ReportViewerCellColorInfo, isActive?: boolean | undefined, gridIconType?: GridIconType | undefined) => [string, string];
    export const isValidValue: (value: string, info: ICellValidationInfo) => boolean;
    export const getFromattedAndUnformattedValue: (value: any, info: ICellValidationInfo) => any[];
    export const isActive: (cellId: string, tabbableCells: string[], activeCellInfo?: IActiveCellInfo | undefined) => boolean;
    export const getColumnsWithCalculatedWidth: (columns: IReportGridColProps[], gridHolder: HTMLElement, usePercentageWidthUnit?: boolean | undefined) => IReportGridColProps[];
    export default function RuntimeFilters(props: IReportRuntimeFilterProps): JSX.Element | null;
    export interface EditedColumnInfo {
        columnId: string;
        editingId: string;
    }
    export default function FilterLayerContainer(props: IFilterLayerProps): JSX.Element | null;
    export function FilterLayer(props: IFilterLayerProps): JSX.Element;
    export function FilterAction(props: IReportFilterActionProps): JSX.Element;
    export function Pagination(props: IReportGridPaginationProps): JSX.Element | null;
    export function GridFooter(props: {
        totalAggregation: AggregationViewInfo[];
    }): JSX.Element | null;
    export const getKeyField: (keyField: string) => string;
    export const getMultiSelectInfoForRow: (row: any) => IMultiSelectRowsInfo | undefined;
    export const getSelectedRowIdsFromKey: (selectedRows: IMultiSelectRowsInfo[], rows: any[], selectAll?: boolean | undefined) => IMultiSelectRowsInfo[];
    export const getUpdatedSelections: (selectedRows: IMultiSelectRowsInfo[], rows: any[], info: IMultiSelectionChangeInfo) => {
        selected: IMultiSelectRowsInfo[];
        allSelected: boolean;
    };
    export const getValidMultiSelectionInfo: (rows: any[], selectedIds?: string[] | undefined) => IMultiSelectRowsInfo[];
    export const removeGroupActions: (instanceId: string) => void;
    export const getUpdatedMultiSelectInfo: (ids: string[], rows: any[]) => IMultiSelectRowsInfo[];
    export interface IUpdatedSizeInfo {
        height: number;
        width: number;
    }
    export interface IResizableBox {
        onResize?: (updatedSizeInfo: IUpdatedSizeInfo) => void;
        onResizeStop?: () => void;
        holderClassName?: string;
        holderInlineStyle?: CSSProperties;
        resizerClassName?: string;
        resizerInlineStyle?: CSSProperties;
        id?: string;
    }
    export const ResizableBox: FC<IResizableBox>;
    export interface IColumnHeader extends IColumnHeaderCommonProps {
        column: IReportGridColProps;
        onResize: (columnId: string, updatedWidth: number) => void;
    }
    export const ColumnHeader: FC<IColumnHeader>;
    export interface IUseColumnResizeProps {
        host: HTMLElement;
    }
    export function useVisibleRows(props: IUseColumnResizeProps): [() => Element[]];
    export interface IUseColumnsTemplate {
        reportColumns: IReportGridColProps[];
        showRowNumber?: boolean;
        hasRowTypeIcon?: boolean;
        isMultiSelectOn?: boolean;
        usePercentageWithUnit?: boolean;
        gridType: GridType;
        gridHost: HTMLElement;
    }
    export function useColumnsTemplate(props: IUseColumnsTemplate): [string, (columnId?: string, updatedWidth?: number) => string];
    export interface IMultiSelectCheckBoxProps {
        isSelected?: boolean;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        onMultiSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        id: string;
        holderClassName?: string;
        checkBoxClassName?: string;
    }
    const MultiSelectCheckBox: FC<IMultiSelectCheckBoxProps>;
    export default MultiSelectCheckBox;
    export interface IHeaderContainerProps extends IColumnHeaderCommonProps {
        columns: IReportGridColProps[];
        cellInfo: IReportGridCellInfo[];
        instanceId: string;
        gridTemplateColumns: string;
        isMultiSelectOn?: boolean;
        selectAll?: boolean;
        onMultiSelectChange?: (info: IMultiSelectionChangeInfo) => void;
        usePercentageWithUnit?: boolean;
        hasRowTypeIcon?: boolean;
        showRowNumber?: boolean;
    }
    export const HeaderContainer: FC<IHeaderContainerProps>;
    export enum MultiSelectionRangeOperation {
        ArrowUp = 0,
        ArrowDown = 1,
        InRange = 2 /**Shift key + click */,
        Picked = 3 /**Ctrl key + click */
    }
    export interface IMultiSelectInfo {
        refresh: boolean;
        operation?: MultiSelectionRangeOperation;
        currentSelectedRow?: Element;
    }
    export interface IMultiSelectionRangeProps extends IMultiSelectInfo {
        holder: HTMLElement;
        selectedRows?: string[];
        lastSelectedRow?: Element;
        isMultiSelectMode?: boolean;
        onChange?: (selectedRows: string[]) => void;
        onLastSelectedChange?: (row: Element) => void;
        rows?: any[];
    }
    export function useMultiSelectionRange(props: IMultiSelectionRangeProps): void;
    export default function CellEditor(props: IReportCellEditorProps): JSX.Element;
    export interface IColorRuleIconProps {
        gridIconType?: GridIconType;
        colorInfo?: ReportViewerCellColorInfo;
        isHovered?: boolean;
        isSelected?: boolean;
    }
    export default function ColorRuleIcon(props: IColorRuleIconProps): JSX.Element | null;
    export interface IPercentBarCellProps {
        value: any;
        bottomBound?: number;
        topBound?: number;
        backgroundColor?: string;
        className?: string;
        columnName?: string;
    }
    export default function PercentBarCell(props: IPercentBarCellProps): JSX.Element;
    export interface ICellWithInnerHtmlProps {
        html: string;
        className?: string;
        columnName?: string;
        onFlowInlineClick?: (info: IFlowInlineFieldInfo) => void;
    }
    export default function CellWithInnerHtml(props: ICellWithInnerHtmlProps): JSX.Element;
    export interface ILiveUpdateCellProps {
        value: any;
        liveUpdateColumnInfo?: LiveUpdateColumnInfo;
        className?: string;
        liveDate?: Date;
        columnName?: string;
        duration?: number;
    }
    export default function LiveUpdateCell(props: ILiveUpdateCellProps): JSX.Element;
    export interface IDefaultActionCellProps {
        value: any;
        onDefaultGridActionClick?: (element: Element) => void;
        onRowSelectionChange: (event: any, doNotOpendetailLayer?: boolean, onlyTriggerSelectionChange?: boolean) => void;
        className?: string;
        handleCellSelectionChange?: () => void;
        columnName?: string;
    }
    export default function DefaultActionCell(props: IDefaultActionCellProps): JSX.Element;
    export const Cell: FC<IReportRowCellProps>;
    export interface ITypeIconCellProps {
        iconUrl: string;
    }
    export default function TypeIconCell(props: ITypeIconCellProps): JSX.Element;
    export function Row(props: IRowProps): JSX.Element;
    export function LeftIndicator(props: ISelectedRowIndicatorProps): JSX.Element | null;
    export function RightIndicator(props: ISelectedRowIndicatorProps): JSX.Element | null;
    export interface IRowNumberProps {
        rowIndex: string;
    }
    export function RowNumber(props: IRowNumberProps): JSX.Element;
    export function RowContainer(props: IGridRowContainerProps): JSX.Element;
    export interface ICollapsibleRowProps extends IGridCommonProps, ITreeViewCommonProps {
        row: any;
        nestingLevel: number;
        rowIndex: number;
        isCollapsed?: boolean;
    }
    export function CollapsibleRow(props: ICollapsibleRowProps): JSX.Element;
    export interface IGroupedRowProps extends IGridProps, ITreeViewCommonProps {
        nestingLevel?: number;
    }
    export function GroupedRow(props: IGroupedRowProps): any;
    export function NoData(props: IGridNoDataProps): JSX.Element;
    export interface ITreeViewProps extends IGridViewProps, ITreeViewCommonProps {
        parentFieldName: string;
        childFieldName: string;
    }
    export default function TreeView(props: ITreeViewProps): JSX.Element;
    export interface IGroupingProps {
        data?: any[];
        groups: string[];
        showTitleInGroupHeader?: boolean;
        columnInfo?: IReportGridColProps[];
    }
    export function useGrouping(props: IGroupingProps): [boolean, any[]];
    export function Grid(props: IGridProps): any;
    export function CollapsibleGroup(props: ICollapsibleGroup): JSX.Element;
    export function GroupedGrid(props: IGroupedGridProps): any;
    export default function GridView(props: IGridViewProps): JSX.Element | null;
    const EditableGridView: FC<IGridViewProps>;
    export default EditableGridView;
    export function GridContainer(props: IGridContainerProps): JSX.Element;
    export default function DesignTimeGrid(props: IReportGridContainerProps): JSX.Element | null;
    export interface IGroupActionsProps {
        selectedRows: IMultiSelectRowsInfo[];
        instanceId: string;
        isMultiSelectOn?: boolean;
        showMultiSelectMenu?: (selectedRows: IMultiSelectRowsInfo[]) => void;
        rows: any[];
    }
    /**show/hide multi-selection menu if it is on/off */
    export function useGroupActions(props: IGroupActionsProps): [(options: IGroupActionsProps) => void];
    export interface UseUpdateFiltersProps {
        filters: FilterInfo[];
        gridHolder: HTMLElement;
    }
    /**This hook will keep other views in sync in case of filters changes from grid view */
    export function useUpdateFilters(props: UseUpdateFiltersProps): void;
    export interface UseUpdatePaginationProps {
        currentPageIndex: string;
        instanceId: string;
    }
    /**This hook will keep other views in sync in case of page index changes from grid view */
    export function useUpdatePagination(props: UseUpdatePaginationProps): void;
    export default function ReportGrid(props: IRunTimeGridProps): JSX.Element | null;
    export function ReportGridContainer(props: IReportGridContainerProps): JSX.Element;
    export function HierarchicalViewContainer(props: IReportGridContainerProps): JSX.Element;
    export function ReportViewer(props: IReportViewerProps): JSX.Element;
    export function TabEditor(props: ITabEditorProps): JSX.Element;
    export const getSortedFormElements: (elements: FormElementInfo[]) => FormElementInfo[];
    export function FormTabEditor(props: IFormTabEditorProps): JSX.Element | null;
    export function FormHost(props: IFormHostProps): JSX.Element;
    export const FormHostContainer: FC<IFormHostProps>;
    export function RootContainer(props: IFormSurfaceProps): JSX.Element;
    export interface IHeaderProps {
        elementType?: ElementType;
        isFolder?: boolean;
        integrationType?: IntegrationType;
        integrationDescription?: string;
        serviceReferenceTypeDescription?: string;
        serviceDataFormatDescription?: string;
        isPostToFlowBehavior?: boolean;
        integrationConfigured?: boolean;
    }
    export function Header(props: IHeaderProps): JSX.Element;
    export interface IAdditionalOptionsProps {
        elementType?: ElementType;
        serviceReferenceType?: ServiceReferenceType;
        overrideServiceUrl?: boolean;
        embedType?: string;
        integrationType?: IntegrationType;
        isFolder?: boolean;
        serviceDataFormat?: ServiceDataFormat;
        serviceDataFormatOptionsForReport?: string[];
        serviceDataFormatOptions?: string[];
        isReport?: boolean;
        pagesList?: DataPair[];
        enablePageSelection?: boolean;
        referByOptions?: ReferBy[];
        alias?: string;
        serviceUrl?: string;
        isPostToFlowBehavior?: boolean;
        isUIOrForm?: boolean;
        isServiceType?: boolean;
        onDataFormatChange?: (value: ServiceDataFormat) => void;
        onEmbedTypeChange?: (value: string) => void;
        onReferByChange?: (value: ReferBy) => void;
        onPageChange?: (value?: DataPair) => void;
        onEnablePageSelection?: (value: boolean) => void;
        onAutoRestartOnCompleteChange?: (value: boolean) => void;
    }
    export function AdditionalOptions(props: IAdditionalOptionsProps): JSX.Element;
    export interface IDisplayOptionsProps {
        elementType?: ElementType;
        isFolder?: boolean;
        isPostToFlowBehavior?: boolean;
        shouldGenerateService?: boolean;
        areRestApiCallsAllowed?: boolean;
        serviceApiDisplayTypeOptions?: DisplayType[];
        urlDisplayTypeOptions?: UrlDisplayType[];
        showSmallTopBar?: boolean;
        integrationType?: IntegrationType;
        isReport?: boolean;
        locations?: DisplayLocation[];
        sizeOptions?: string[];
        isUIOrForm?: boolean;
        onUrlDisplayTypeOptionChange?: (value: UrlDisplayType) => void;
        onHeightChange?: (value: number) => void;
        onWidthChange?: (value: number) => void;
        onBackgroundChange?: (value: boolean) => void;
        onBorderChange?: (value: boolean) => void;
        onShadowChange?: (value: boolean) => void;
        onSpacingsChange?: (value: boolean) => void;
        onEnablePageSelection?: (value: boolean) => void;
        onShowSmallTopBarChange?: (value: boolean) => void;
        onLocationChange?: (value: DisplayLocation) => void;
        onBackgroundColorChange?: (value: string) => void;
        onSelectedSizeTypeChange?: (value: string) => void;
        onBorderWidthChange?: (value: number) => void;
        onBorderColorChange?: (value: string) => void;
        onBoxShadowChange?: (value: string) => void;
        onInnerMarginChange?: (value: number) => void;
        onOuterMarginChange?: (value: number) => void;
        onChromeChange?: (value: ChromeSetting) => void;
    }
    export function DisplayOptions(props: IDisplayOptionsProps): JSX.Element | null;
    export function Main(props: ILeftPanelProps): JSX.Element;
    export interface IFooterProps {
        entityId?: string;
        postUrl?: string;
        serializedData?: string;
    }
    export function Footer(props: IFooterProps): JSX.Element;
    export interface ILeftPanelProps extends IIntegrationDetailsProps {
        postUrl?: string;
        serializedData?: string;
        isUIOrForm?: boolean;
        isServiceType?: boolean;
        integrationConfigured?: boolean;
        onDataFormatChange?: (value: ServiceDataFormat) => void;
        onStoreCredentialsClick?: (userId: string, password: string) => void;
        onAuthenticationChange?: (authType: string) => void;
        onStoreSessionIdClick?: (sessionId: string) => void;
        onEmbedTypeChange?: (value: string) => void;
        onReferByChange?: (value: ReferBy) => void;
        onUrlDisplayTypeOptionChange?: (value: UrlDisplayType) => void;
        onHeightChange?: (value: number) => void;
        onWidthChange?: (value: number) => void;
        onAutoRestartOnCompleteChange?: (value: boolean) => void;
        onShowSmallTopBarChange?: (value: boolean) => void;
        onSelectedSizeTypeChange?: (value: string) => void;
        onLocationChange?: (value: DisplayLocation) => void;
        onBackgroundChange?: (value: boolean) => void;
        onBackgroundColorChange?: (value: string) => void;
        onBorderChange?: (value: boolean) => void;
        onBorderWidthChange?: (value: number) => void;
        onBorderColorChange?: (value: string) => void;
        onShadowChange?: (value: boolean) => void;
        onBoxShadowChange?: (value: string) => void;
        onSpacingsChange?: (value: boolean) => void;
        onInnerMarginChange?: (value: number) => void;
        onOuterMarginChange?: (value: number) => void;
        onEnablePageSelection?: (value: boolean) => void;
        onPageChange?: (value?: DataPair) => void;
        onChromeChange?: (value?: ChromeSetting) => void;
    }
    export function LeftPanel(props: ILeftPanelProps): JSX.Element;
    export interface IPreviewPanel {
        previewUrl?: string;
        isfolder?: boolean;
        elementType?: ElementType;
        embedType?: string;
        isBackground?: boolean;
        backgroundColor?: string;
        isBorder?: boolean;
        borderWidth?: number;
        borderColor?: string;
        isShadow?: boolean;
        boxShadow?: string;
        isSpacings?: boolean;
        outerMargin?: number;
        innerMargin?: number;
        selectedSizeType?: string;
        height?: number;
        width?: number;
        location?: DisplayLocation;
    }
    export function PreviewPanel(props: IPreviewPanel): JSX.Element;
    export interface IInfoPanel {
        getUrl: string;
        postUrl: string;
    }
    export function InfoPanel(props: DescribeRuleORFlowModel): JSX.Element;
    export interface IRightPanel {
        className?: string;
        describeRuleORFlowModel: DescribeRuleORFlowModel | null;
        elementType?: ElementType;
        isUIOrForm: boolean;
        currentTab?: IntegrationTabs;
        previewUrl: string;
        serviceDataFormat?: ServiceDataFormat;
        postUrl: string;
        getUrl: string;
        isFolder: boolean;
        embedType: string;
        background?: boolean;
        backgroundColor?: string;
        border?: boolean;
        borderWidth?: number;
        borderColor?: string;
        shadow?: boolean;
        boxShadow?: string;
        spacings?: boolean;
        outerMargin?: number;
        innerMargin?: number;
        selectedSizeType?: string;
        height?: number;
        width?: number;
        location?: DisplayLocation;
        isPostToFlowBehavior?: boolean;
    }
    export function RightPanel(props: IRightPanel): JSX.Element;
    export interface IMainProps extends IIntegrationDetailsProps {
        currentTab?: IntegrationTabs;
        integrationConfigured?: boolean;
    }
    export function Main(props: IMainProps): JSX.Element;
    export function IntegrationDetails(props: IIntegrationDetailsProps): JSX.Element;
    /**
     * Define what is available at the root of this library
     */
    export { setUserCulture } from "utils/UserCulture";
    export { setPortalSetup } from "utils/PortalSetup";
    export { setIsMobile } from "config/PortalConfiguration";
    export * from "utils/index";
    export * from "components/property-editors/MappingConstants";
    export * from "domains/designers/RuleTable/index";
    export * from "domains/designers/ExternalTruthTable/index";
    export * from "domains/designers/RuleDesigner/index";
    export * from "components/FavoriteIcon/index";
    export { renderDependenciesBrowser } from "domains/portal/DependenciesBrowser/index";
    export * from "domains/designers/DataDesigner/index";
    export { renderTruthTable } from "domains/designers/TruthTable/index";
    export { renderCreateRegistration, renderCreateRegistrationDialog } from "components/CreateRegistration/index";
    export { renderCreateFolderDialog } from "components/CreateFolder/index";
    export { renderCreateElement } from "components/CreateElement/index";
    export { renderPickOrCreateDialog } from "components/PickOrCreateRegistration/index";
    export { renderElementUsage } from "components/ElementUsage/index";
    export { DefaultNodeLoader } from "components/FolderTree/NodeLoaders";
    export * from "components/charts/index";
    export { renderEitherOrInputDataDialog } from "components/EitherOrDataDefinitions/index";
    export * from "components/FolderTree/index";
    export { StepsTreeType } from "components/Tree/StepsTree/StepsTree";
    export { scrollToElement, TreeCommandType } from "components/Tree/useTreeModel";
    export { renderSwitchPortalViewLink } from "domains/portal/LeftPanel/index";
    export { renderMappingEditor } from "domains/designers/FlowDesigner/index";
    export type RenderCallback = () => void;
    /**
     * Handle for rendering the property grid into an HTML element.
     * @param el to house property grid component
     * @param props to render property grid with
     * @param callback when rendered
     */
    export function renderPropertyGrid(el: HTMLElement, props: IPropertyGridProps, callback?: RenderCallback): Promise<void>;
    export function renderSinglePropertyEditor(el: HTMLElement, props: ISinglePropertyEditorProps, callback?: RenderCallback): Promise<void>;
    export function renderActionBar(el: HTMLElement, props: IActionBarProps, callback?: RenderCallback): Promise<void>;
    export function unMount(el: HTMLElement): Promise<void>;
    /**
     * Use to plug in new editor types at runtime, so backend changes an sync with them.
     *
     * Only other alternate would be allowing a pre-build hook that could run during a
     * webpack build while the system is running, similar to how we do it with .less files.
     *
     * Something similar to this
     * @param identifier used to lookup component type from data from server
     * @param component to render based on data
     */
    export function registerComponent(identifier: string, component: React.FunctionComponent<IEditorProps> | React.ComponentClass<IEditorProps>): Promise<void>;
    export function renderEntityDetailsSlider(sliderOptions: PortalSliderProps, entityDetails: IEntityDetailsProps, elem: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderPortalSlider(sliderOptions: BasePortalSliderProps, onUnmount?: (element: HTMLElement) => void, callback?: RenderCallback): Promise<string>;
    export function closePortalSlider(id: string): Promise<void>;
    export function togglePortalSlider(id: string, show: boolean): Promise<void>;
    export function setPortalSliderTitle(id: string, title: string): Promise<void>;
    export function setPortalSliderOnClose(id: string, onClose: () => void): Promise<void>;
    export function renderEntityDetails(options: IEntityDetailsProps, elem: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderNavigationPanel(options: NavigationPanelProps, elem: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderFolderActionsBar(elem: HTMLElement, options: IActionBarProps, callback?: RenderCallback): Promise<void>;
    export function renderPortalActionsMenu(elem: HTMLElement, options: IPortalActionsMenuProps, callback?: RenderCallback): Promise<void>;
    export function renderPortalHeader(elem: HTMLElement, options: IPortalHeaderProps, callback?: RenderCallback): Promise<void>;
    export function renderPortalLogo(elem: HTMLElement, options: IPortalLogoProps, callback?: RenderCallback): Promise<void>;
    export function renderTagsEditor(elem: HTMLElement, options: TagsEditorProps, callback?: RenderCallback): Promise<void>;
    export function renderReportViewer(props: IReportViewerProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function setupServiceFetcher(settings: ServiceFetcherSettings): void;
    export function renderFormDesignerTabEditor(props: IFormTabEditorProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderFormHost(props: IFormHostProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderFormControlInDesigner(props: IControlRenderOption, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderRootContainerInFormDesigner(props: IFormSurfaceProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderSampleTree(props: ISampleTreeProps, container: HTMLElement, callback?: RenderCallback): Promise<string>;
    export function renderUnitTestTree(props: IUnitTestTreeProps, container: HTMLElement, callback?: RenderCallback): Promise<string>;
    export function treeDeselectAll(treeId: string): Promise<void>;
    export function treeUpdate(treeId: string, command: TreeCommandType, id: string): Promise<void>;
    export function renderDataExplorer(props: IDataExplorerProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderStepsTree(props: IStepsTree, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderDebuggerStartOptions(props: IDebuggerStartOptionsProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderDebuggerInputTree(props: IDebuggerInputTreeProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderDesignerHeader(props: IDesignerHeaderProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderDateRangeFilter(props: IDateRangeFilterProps, container: HTMLElement, callback?: RenderCallback): Promise<string>;
    export function renderAppStore(props: IAppStoreProps, container: HTMLElement, callback?: RenderCallback): Promise<string>;
    export function renderDesignerPrompt(props: IDesignerPromptProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderValidationError(issues: ValidationIssue[], className: string, role: ValidationRole, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderEntityProperties(props: IEntityPropertiesProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderModulesList(props: IModulesListProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderProgressBar(props: IProgressBarProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderSwitch(props: ISwitchProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderSimpleDropDown(props: ISimpleDropDownProps, container: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderViewIntegrationDetailsPage(props: IIntegrationDetailsProps, el: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderServiceIntegration(props: IServiceIntegrationProps, el: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderMethodInformation(props: IMethodInformation, el: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderExternalFormIntegration(props: IExternalFormIntegrationProps, el: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderDataTypeSerialization(props: IDataTypeSerialization, el: HTMLElement, callback?: RenderCallback): Promise<void>;
    export function renderSaveDialog(props: ISaveDialogProps, el: HTMLElement, callback?: RenderCallback): Promise<void>;
}
