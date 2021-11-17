/// <reference path="service.handlers.base.d.ts" />
declare module $D.Framework {
    interface _DBO {
        __type?: string;
    }
}
declare module $D.ServiceHost {
    enum ResourceType {
        SQLScript = 0,
        CLIScript = 1,
        ImportObject = 2
    }
}
declare module $D.Framework.Design.Report {
    enum CalculationType {
        Count = 0,
        Sum = 1,
        Average = 2,
        Min = 3,
        Max = 4,
        Median = 5
    }
    enum TextWrapping {
        NoWrap = 0,
        Wrap = 1,
        PreserveAllSpaces = 2
    }
    enum ChartType {
        Areas = 0,
        Bubbles = 1,
        Bars = 2,
        SimpleBars = 3,
        MixedBars = 4,
        StackedBars = 5,
        WinLossBars = 6,
        Bullet = 7,
        Columns = 8,
        Dots = 9,
        Lines = 10,
        Pies = 11,
        Gauges = 12,
        Counter = 13,
        Counters = 14,
        Ring = 15
    }
    enum ChartLabelType {
        NameAndValue = 0,
        Name = 1,
        Value = 2,
        None = 3
    }
    enum PieLabelPosition {
        Inside = 0,
        Outside = 1
    }
    enum ChartLegendPosition {
        North = 0,
        South = 1,
        East = 2,
        West = 3,
        Off = 4
    }
    enum CounterChartLabelBehavior {
        None = 0,
        Standard = 1,
        Clip = 2,
        Wrap = 3
    }
    enum HistoricalValueMode {
        NotUsed = 0,
        ByValue = 1,
        ByReport = 2,
        BySnapshot = 3
    }
    enum BulletType {
        PositiveMore = 0,
        PositiveLess = 1,
        NegativeMore = 2,
        NegativeLess = 3
    }
    enum BulletLabelFormat {
        Number = 0,
        Percent = 1
    }
    enum BulletLayout {
        Horizontal = 0,
        Vertical = 1
    }
    enum BulletTitlePosition {
        Before = 0,
        After = 1
    }
    enum ReportView {
        Data = 0,
        Matrix = 1,
        Blurb = 2,
        Text = 3,
        Cells = 4,
        Calendar = 5,
        Tiles = 6,
        Charts = 7,
        HierarchicalView = 8,
        ColumnsView = 9
    }
    interface RefreshReportMessage extends $D.Framework._DBO {
    }
    function RefreshReportMessage(): RefreshReportMessage;
    enum ReportGroupActionBehavior {
        Dynamic = 0,
        Flow = 1
    }
    enum SortOrder {
        None = 0,
        Ascending = 1,
        Descending = 2
    }
    enum TextAlignment {
        Left = 0,
        Center = 1,
        Right = 2
    }
    enum FilterMode {
        Off = 0,
        CurrentPage = 1,
        All = 2
    }
    enum AddTemplateType {
        Text = 0,
        Field = 1,
        Image = 2,
        Spacer = 3
    }
}
declare module $D.Silverlight.UI.Utilities {
    enum DesignerGradientDirection {
        North = 0,
        NorthEast = 1,
        East = 2,
        SouthEast = 3,
        South = 4,
        SouthWest = 5,
        West = 6,
        NorthWest = 7
    }
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    enum ThemeGradientType {
        SolidColor = 0,
        LinearGradient = 1,
        RadialGradient = 2,
        Key = 3
    }
    enum ThemeDefaultAction {
        Yes = 0,
        No = 1,
        SaveUserPreference = 2
    }
    enum ThemeVariableType {
        Color = 0,
        Size = 1,
        Number = 2,
        Icon = 3,
        Text = 4
    }
}
declare module $D.Utilities.Data.DataStore {
    enum StorageState {
        Current = 0,
        Writing = 1,
        Deleted = 2,
        Locked = 3,
        Undefined = 4
    }
}
declare module $D.Framework.ServiceLayer.Actions.Handlers {
    interface ActionHandler extends $D.Framework._DBO {
    }
    function ActionHandler(): ActionHandler;
}
declare module $D.Framework.ServiceLayer.Actions {
    enum ActionRefreshScope {
        None = 0,
        Self = 1,
        OwningFolder = 2,
        Tree = 3,
        TreeAndOwningFolder = 4
    }
    enum ActionDisplayType {
        Primary = 0,
        Secondary = 1,
        None = 2
    }
    enum EntityActionType {
        Silverlight = 0,
        WebForm = 2,
        CLI = 3,
        WindowsFormsOffline = 4,
        Mvc = 5,
        MvcMobile = 6,
        MvcTablet = 7
    }
    enum ActionSearchType {
        Contains = 0,
        Matches = 1
    }
    interface ActionsForActionHeader extends $D.Framework._DBO {
    }
    function ActionsForActionHeader(): ActionsForActionHeader;
    interface ActionsForEntityPickerHeader extends $D.Framework._DBO {
    }
    function ActionsForEntityPickerHeader(): ActionsForEntityPickerHeader;
    enum NavigateType {
        Default = 0,
        NewWindow = 1,
        Portal = 2
    }
}
declare module $D.OAuth {
    enum OAuthVersion {
        OAuth1x = 0,
        OAuth2 = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    enum DisplayType {
        Unknown = 0,
        Silverlight = 1,
        Html = 2,
        HtmlWithSilverlight = 3,
        HtmlMobile = 4,
        HtmlTablet = 5
    }
    enum SubMenuBehavior {
        Default = 0,
        Hide = 1,
        Group = 2
    }
    enum FavoriteType {
        ForAllUsers = 0,
        ForMe = 1,
        ForThisSessionOnly = 2,
        None = 3
    }
    /**
     * [Flags]
     */
    enum FolderPermission {
        None = 0,
        CanUse = 1,
        CanOpen = 2,
        CanView = 4,
        CanEdit = 8,
        CanAdd = 16,
        CanDelete = 32,
        CanAdministrate = 64,
        CanSeeHidden = 128,
        CanSeeArchived = 256,
        CanViewBrowsePage = 512,
        CustomPermission1 = 1024,
        CustomPermission2 = 2048,
        CustomPermission3 = 4096,
        CustomPermission4 = 8192,
        CustomPermission5 = 16384,
        CustomPermission6 = 32768,
        CustomPermission7 = 65536,
        CustomPermission8 = 131072,
        CustomPermission9 = 262144,
        CustomPermission10 = 524288,
        CustomPermission11 = 1048576,
        CustomPermission12 = 2097152,
        CustomPermission13 = 4194304,
        CustomPermission14 = 8388608,
        CustomPermission15 = 16777216,
        CustomPermission16 = 33554432,
        CustomPermission17 = 67108864,
        CustomPermission18 = 134217728,
        CustomPermission19 = 268435456,
        CustomPermission20 = 536870912,
        AllButAdmin = 1073741375,
        All = 1073741823
    }
    enum SystemFolder {
        System = 0,
        Accounts = 1,
        Groups = 2,
        Settings = 3,
        Protocols = 4,
        ServicesProtocols = 5,
        ManagerProtocols = 6,
        DataStructures = 7,
        Components = 8,
        RecycleBin = 9,
        Users = 10,
        Modules = 11,
        CommonDataElements = 12,
        ExternalServices = 13,
        UserDefinedFolderTypes = 14,
        FlowManagement = 15,
        FlowData = 16,
        FlowAssignments = 17,
        Images = 18
    }
    enum ResolutionBehavior {
        AlwaysShow = 0,
        Hide = 1,
        MakeNotDefault = 2
    }
    enum PortalActionsBarVisibility {
        Show = 0,
        Collapse = 1,
        Hide = 2
    }
    enum SearchType {
        Name = 0,
        ID = 1,
        TextSearch = 2
    }
}
declare module $D.Framework.ServiceLayer.Utilities {
    enum UserIdentifierType {
        AccountID = 0,
        EmailAddress = 1
    }
    enum InstanceType {
        Host = 0,
        Unknown = 1,
        Control = 2,
        HostedInstance = 3,
        Managed = 4,
        Unmanaged = 5
    }
    interface ImportSessionResolution extends $D.Framework._DBO {
    }
    function ImportSessionResolution(): ImportSessionResolution;
    interface SystemValidationMessage extends $D.Framework._DBO {
    }
    function SystemValidationMessage(): SystemValidationMessage;
    enum StartPolicy {
        Lazy = 0,
        OnInitialization = 1,
        Background = 2,
        DoNotStart = 3
    }
    enum ServerType {
        Personal = 0,
        Managed = 1,
        Unmanaged = 2,
        Hosted = 3,
        AWSHosted = 4,
        Development = 5,
        Repository = 6
    }
    enum GroupIdentifierType {
        GroupName = 0,
        GroupID = 1
    }
}
declare module $D.DesignerRepository {
    enum RepositoryState {
        Unknown = 0,
        Release = 1,
        HotFix = 2,
        Development = 3
    }
    interface SessionClientInfo extends $D.Framework._DBO {
    }
    function SessionClientInfo(): SessionClientInfo;
    enum ApplicationState {
        Release = 0,
        Draft = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.Image {
    enum ImageInfoType {
        RawData = 0,
        Url = 1,
        StoredImage = 2,
        Document = 3
    }
}
declare module $D.DesignerRepository.Client {
    interface ResourceCheckoutInfo extends $D.Framework._DBO {
    }
    function ResourceCheckoutInfo(): ResourceCheckoutInfo;
}
declare module $D.DesignerRepository.Client.Service {
    interface AbstractRepositoryProxyAccessInfo extends $D.Framework._DBO {
    }
    function AbstractRepositoryProxyAccessInfo(): AbstractRepositoryProxyAccessInfo;
}
declare module $D.Framework.Design.Properties {
    enum EditCompleteType {
        Saved = 0,
        Canceled = 1
    }
    enum EditInputsType {
        None = 0,
        Additional = 1,
        Centralized = 2
    }
    enum ObjectEditorType {
        AboveProperties = 0,
        BelowProperties = 1,
        InsteadOfProperties = 2,
        OnInitialCreate = 3,
        AsPrimaryAction = 4
    }
    enum ContextPropertyNodeLabelPosition {
        Unspecified = 0,
        Top = 1,
        Left = 2,
        None = 3
    }
    enum ContextProviderEventType {
        Add = 1,
        Update = 2,
        Delete = 3
    }
    enum NumericEditorType {
        Byte = 0,
        SByte = 1,
        Int16 = 2,
        UInt16 = 3,
        Int32 = 4,
        UInt32 = 5,
        Int64 = 6,
        UInt64 = 7,
        Double = 8,
        Single = 9,
        Decimal = 10
    }
}
declare module $D.Framework.ServiceLayer.Services.ImportExport {
    enum ImportResults {
        Imported = 0,
        NotNecessary = 1,
        ImportedNeedsRestart = 2
    }
    enum ExportSubEntitiesOptions {
        Include = 0,
        Exclude = 1,
        Separately = 2
    }
    enum ImportOptions {
        ImportInCurrentFolderIfParentMissing = 0,
        ImportAllInCurrentFolder = 1,
        ImportInRootFolderIfParentMissing = 2
    }
}
declare module $D.Framework.Design {
    enum ValidationDisplayType {
        IconAndText = 0,
        Icon = 1,
        Text = 2
    }
    enum ValidationOutlineType {
        Surround = 0,
        Underline = 1,
        Off = 2
    }
    enum IntegrationType {
        ExternalService = 0,
        InternalService = 1,
        UiOrForm = 2,
        WebHook = 3,
        None = 4
    }
    enum ServiceDataFormat {
        JSON = 0,
        XML = 1,
        Raw = 2,
        RawJson = 3,
        RawXml = 4,
        Excel = 5,
        Pdf = 6,
        All = 7
    }
    enum ServiceReferenceType {
        IdOrPath = 0,
        Id = 1,
        Path = 2,
        Url = 3
    }
    enum DesignerProjectDefaultPageType {
        DefaultFolderView = 0,
        DesignerProjectView = 1
    }
    enum RuleTreeCategoryDisplayType {
        None = 0,
        InFront = 1,
        AtEnd = 2
    }
    enum FlowDesignerLinkType {
        Cornered = 0,
        Direct = 1
    }
    enum DefaultStepShape {
        Default = 0,
        DarkIcon = 1,
        Box = 2,
        Icon = 3,
        BoxWithLargeIcon = 4,
        NoIconBox = 5
    }
    enum StudioVisibilityPolicy {
        StudioOnly = 0,
        StudioAndUserPortal = 1
    }
    enum ElementUsageRole {
        Unknown = 0,
        Entity = 1,
        Folder = 2,
        DataType = 3,
        Image = 4,
        Document = 5,
        Flow = 6,
        EvaluateFlow = 7,
        ActionFlow = 8,
        ConverterFlow = 9,
        DataFlow = 10,
        ActiveFormFlow = 11,
        Form = 12,
        MobileForm = 13,
        TabletForm = 14,
        FormBackground = 15,
        DataRepeater = 16,
        Page = 17,
        StatementRule = 18,
        RuleTable = 19,
        TruthTable = 20,
        MatrixRule = 21,
        FormVisibilityRule = 22,
        FormValidationRule = 23,
        FormOutcomeRule = 24,
        RuleEngineExtension = 25,
        RuleOutcomeType = 26,
        Report = 27,
        EntitiesReport = 28,
        CommentsReport = 29,
        TextMerge = 30,
        Expression = 31,
        Contact = 32,
        CatalogItem = 33,
        RuleActionToRunFlow = 34
    }
}
declare module $D.Framework.ComponentData {
    enum FormTriggerType {
        Click = 0,
        Clear = 1,
        Exit = 2,
        Enter = 3,
        StoppedTyping = 4,
        ValueChanged = 5,
        SelectionChanged = 6,
        RowAdded = 7,
        RowRemoved = 8,
        TabChanged = 9
    }
}
declare module $D.FlowSets {
    enum RulesSetRuleType {
        EvaluationRule = 0,
        ActionRule = 1,
        InterceptRule = 2,
        TruthTable = 3,
        EvaluationFlow = 4,
        ChangeDataFlow = 5,
        PassThroughFlow = 6,
        MatrixRule = 7
    }
    enum FlowSetTemplateType {
        Parameterized = 0,
        Simple = 1,
        Hierarchy = 2
    }
    enum RuleSetExecutionType {
        Rule = 0,
        Flow = 1,
        MatrixRule = 2,
        TruthTable = 3
    }
}
declare module $D.Framework {
    enum BreakLevel {
        Warning = 0,
        Fatal = 1,
        Ignored = 2
    }
    /**
     * [Flags]
     */
    enum LogSeverity {
        None = 0,
        Debug = 1,
        Info = 2,
        Verbose = 3,
        Warn = 4,
        Error = 8,
        Fatal = 16,
        All = 31
    }
    enum SymetricalCryptographyTypes {
        DES = 0,
        TripleDES = 1,
        Rijndael = 2,
        RC2 = 3,
        Aes = 4
    }
}
declare module $D.Framework.ProjectConversion {
    enum InputMappingType {
        SelectValue = 0,
        Constant = 1,
        MergeText = 2,
        ArrayBuilder = 3,
        None = 4
    }
}
declare module $D.Framework.Design.Flow {
    enum RuleType {
        LogicalRule = 0,
        DataReturnRule = 1,
        ActionRule = 2,
        MultipleDataRule = 3,
        MultipleDataRuleValueOutput = 4
    }
    interface EndStepDataDescription extends $D.Framework._DBO {
    }
    function EndStepDataDescription(): EndStepDataDescription;
    enum FlowLinkLineType {
        Default = 0,
        Direct = 1,
        Cornered = 2
    }
    enum FlowBooleanSetting {
        Default = 0,
        True = 1,
        False = 2
    }
    enum StoreFlowStats {
        Sampling = 0,
        Always = 1,
        Never = 2
    }
    enum FlowDesignerType {
        Default = 0,
        ConstrainedBinaryTree = 1
    }
    enum FlowSwimlanesType {
        None = 0,
        Horizontal = 1,
        Vertical = 2
    }
    enum FlowStepShapeType {
        Circle = 0,
        Diamond = 1,
        Square = 2,
        TriangleLeft = 3,
        TriangleRight = 4,
        Waypoint = 7,
        Form = 8,
        Flow = 9,
        RuleSet = 10,
        Image = 11,
        Task = 12,
        Page = 13,
        NewSquare = 14,
        SimpleCircle = 50,
        SimpleRectangle = 51,
        SimpleTriangleLeft = 52,
        SimpleTriangleRight = 53,
        SimpleTriangleUp = 54,
        SimpleTriangleDown = 55,
        ArrowLeft = 56,
        ArrowRight = 57,
        ArrowUp = 58,
        ArrowDown = 59,
        SimpleDiamond = 60,
        Cylinder = 61,
        Cube = 62,
        None = 63,
        SimpleFlowShape = 64,
        DMNDecision = 65,
        DMNBusinessKnowledge = 66,
        DMNInputData = 67,
        DMNKnowledgeSource = 68
    }
    enum FlowStepWaypointType {
        Circle = 0,
        Exception = 1,
        Path = 2
    }
    enum FlowDesignerFeature {
        DataPanel = 0,
        Debug = 1,
        Integration = 2,
        ClipboardButtons = 3,
        ZoomBar = 4,
        HideZoomButtons = 5,
        FlowActions = 6,
        ViewSelector = 7,
        UndoRedoButtons = 8,
        CreateCheckpoints = 9,
        InfoPanel = 10,
        SamplePanel = 11,
        StepsPanel = 12,
        StepsByTypePanel = 13,
        StepsToolbox = 14,
        StepEditMenu = 15,
        StepPropertiesPanel = 16,
        StepReplacementOnDrop = 17,
        StepTemplates = 18,
        StepGrouping = 19,
        RotateOffByDefault = 20,
        ShowRotateAction = 21,
        ShowGridAction = 22,
        DiagramInStepSelection = 23,
        FlowName = 24,
        CloseCrossSign = 25,
        CanMoveSteps = 26,
        CanRePortLinks = 27,
        CanReLinkLinks = 28,
        CanReshapeLinks = 29,
        CanRemoveLinks = 30,
        CanAddLinks = 31,
        CanEditLinks = 32,
        ProtoPropertyGrid = 33
    }
    enum Order {
        Ascending = 0,
        Descending = 1
    }
    enum FlowStepToolboxItemType {
        Step = 0,
        Form = 1,
        Flow = 2,
        Rule = 3,
        Report = 4
    }
    enum StepDataInformationType {
        Input = 0,
        Create = 1,
        Output = 2
    }
    enum FlowCompareDataEntityType {
        Step = 0,
        Link = 1,
        Annotation = 2
    }
    enum FlowCompareResult {
        Unchanged = 0,
        MovedLeft = 1,
        MovedRight = 2,
        ModifiedLeft = 3,
        ModifiedRight = 4,
        Changed = 5,
        Removed = 6,
        New = 7
    }
    enum NewFlowEntityType {
        Step = 0,
        Annotation = 1
    }
    enum QuickAddTreeNodeType {
        Toolbox = 0,
        Data = 1,
        Integrations = 2,
        Registrations = 3,
        Existing = 4,
        Recent = 5,
        Favorite = 6
    }
    enum StepShapeType {
        Start = 0,
        End = 1,
        Decision = 2,
        Action = 3,
        Composite = 4,
        Form = 5,
        Branch = 6,
        Merge = 7,
        LinkedFlow = 8
    }
    enum StartFlowOption {
        Prompt = 0,
        Automatically = 1
    }
    /**
     * [Flags]
     */
    enum RuleOutputVisibility {
        TrueOnly = 1,
        FalseOnly = 2,
        TrueAndFalse = 3,
        MissingData = 4,
        All = 7
    }
    enum RuleOutputPath {
        True = 0,
        False = 1,
        MissingData = 2
    }
    enum MatrixRuleDesignerFeature {
        Debug = 0,
        UndoRedo = 1,
        EntityActions = 2,
        CreateCheckpoints = 3,
        Integration = 4
    }
    enum FlowRunUIBehavior {
        Default = 0,
        ExpectForm = 1,
        ShowMessage = 2,
        ShowNotification = 3,
        RunSilently = 4
    }
}
declare module $D.Framework.ProjectConversion.RuleImport {
    enum GroupType {
        And = 0,
        Or = 1
    }
    enum DataValueType {
        Null = 0,
        InputData = 1,
        Constant = 2
    }
}
declare module $D.Framework.Utilities.Profiler {
    enum ProfilerDetailType {
        ErrorLogMessage = 0,
        Info = 1,
        SqlStatement = 2
    }
    enum ProfilerType {
        Flow = 0,
        FlowStep = 1,
        Rule = 2,
        RuleStep = 3,
        Report = 4,
        Job = 5,
        Service = 6,
        Method = 7,
        Database = 8,
        ORM = 9,
        BootStep = 10,
        FlowRuleSet = 11,
        Usage = 12
    }
    enum ThreadProfileEndBehavior {
        WriteToLog = 0,
        WriteToDatabase = 1,
        DoNothing = 2
    }
    interface BaseProfiledObject extends $D.Framework._DBO {
    }
    function BaseProfiledObject(): BaseProfiledObject;
}
declare module $D.Framework.Utilities.Logging {
    enum ClientSideProfilingEntryType {
        Start = 0,
        End = 1,
        Error = 2
    }
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    enum TestResult {
        None = 0,
        Pass = 1,
        Fail = 2,
        Error = 3,
        NoError = 4,
        Missing = 5
    }
    enum FlowDebugType {
        Unspecified = 0,
        CaptureAll = 1,
        Sampling = 2
    }
    enum FlowDebugOptions {
        OutputDataOnChange = 0,
        OutputTiming = 1
    }
}
declare module $D.Framework.Utilities.FrameworkUnitTests {
    enum FrameworkUnitTestType {
        Native = 0,
        NUnit = 1,
        JS = 2
    }
}
declare module $D.Framework.Utilities.Data {
    enum DateFormat {
        MM_DD_YYYY = 0,
        DD_MM_YYYY = 1,
        YYYY_MM_DD = 2
    }
    enum MergeDataType {
        PlainText = 1,
        Html = 2
    }
    /**
     * [Flags]
     */
    enum DataDescriptionType {
        Read = 1,
        Write = 2
    }
    enum DateTimeFormat {
        ShortDateTime = 0,
        ShortDate = 1,
        LongDate = 2,
        ShortTime = 3,
        LongTime = 4,
        LongDateTime = 5,
        FullDateTime = 6,
        YearMonth = 7,
        MonthDay = 8,
        Year = 9,
        Month = 10,
        Day = 11,
        Other = 12,
        Date = 13
    }
    enum NumberFormat {
        General = 0,
        Number = 1,
        FixedPoint = 2,
        Currency = 3,
        Percent = 4,
        Other = 5
    }
    enum NumberFormatOptions {
        Default = 0,
        Custom = 1,
        None = 2
    }
}
declare module $D.Framework.Data.ORMapper {
    interface BaseConverter extends $D.Framework._DBO {
    }
    function BaseConverter(): BaseConverter;
    enum ORMResultOrder {
        Ascending = 0,
        Descending = 1
    }
    interface WhereCondition extends $D.Framework._DBO {
    }
    function WhereCondition(): WhereCondition;
    enum QueryMatchType {
        Equals = 0,
        EqualsWithoutCase = 1,
        Contains = 2,
        ContainsWithoutCase = 3,
        DoesNotEqual = 4,
        GreaterThanOrEqualTo = 5,
        LessThanOrEqualTo = 6,
        GreaterThan = 7,
        LessThan = 8,
        Exists = 9,
        DoesNotExist = 10,
        IsNotNull = 11,
        IsNull = 12,
        EqualsToOtherField = 13,
        StartsWith = 14,
        EndsWith = 15,
        DoesNotContain = 16,
        DoesNotEndWith = 17,
        DoesNotStartWith = 18
    }
    interface IORMFieldConverter extends $D.Framework._DBO {
    }
    function IORMFieldConverter(): IORMFieldConverter;
    interface ORMCommandSequence extends $D.Framework._DBO {
    }
    function ORMCommandSequence(): ORMCommandSequence;
    interface SqlStatement extends $D.Framework._DBO {
    }
    function SqlStatement(): SqlStatement;
}
declare module $D.Framework.Data.Messaging {
    interface MessageQueueQuery extends $D.Framework._DBO {
    }
    function MessageQueueQuery(): MessageQueueQuery;
    enum MessageFetchType {
        LockMessage = 0,
        LockMessageWithAutoUnlock = 1,
        PeekMessage = 2,
        PopMessage = 3
    }
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    enum PropertyEditorType {
        Form = 0,
        FlowForm = 1,
        PropertyGrid = 2,
        TabForm = 3
    }
    enum GetTextType {
        ShortText = 0,
        LongText = 1,
        HTMLText = 2,
        Password = 3,
        RequiredText = 4
    }
    interface MergeEditorModel extends $D.Framework._DBO {
    }
    function MergeEditorModel(): MergeEditorModel;
    enum FileFilter {
        All = 0,
        Documents = 1,
        Images = 2
    }
    enum TextType {
        ASCII = 0,
        HTML = 1
    }
    enum MakeMultiSelectionType {
        CheckedListBox = 0,
        DoubleListBox = 1,
        DoubleCheckedListBox = 2
    }
    enum MakeSelectionType {
        DropDown = 0,
        ListBox = 1,
        RadioGroup = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    enum ElementType {
        Form = 0,
        FormElement = 1,
        FormElementFactory = 2,
        FormBackground = 3,
        FormBackgroundElement = 4,
        FormBackgroundElementFactory = 5,
        Flow = 6,
        SimpleFlow = 7,
        FlowParameters = 8,
        FlowElement = 9,
        FlowElementFactory = 10,
        FlowSnippet = 11,
        Template = 12,
        AgentFlow = 13,
        AgentFlowElement = 14,
        AgentFlowElementFactory = 15,
        AgentRule = 16,
        EmbeddedFlow = 17,
        DiagramTile = 18,
        EmbeddedRule = 19,
        Sync = 20,
        Async = 21,
        Page = 22,
        PageElement = 23,
        PageElementFactory = 24,
        PrintPageTemplateElement = 25,
        Report = 26,
        ReportElement = 27,
        ReportElementFactory = 28,
        FolderAwareReport = 29,
        EndForm = 30,
        EndFormElement = 31,
        IsInvalid = 32,
        HasBreakingIssues = 33,
        Rule = 34,
        RuleStep = 35,
        RuleChain = 36,
        AgentRuleStep = 37,
        InputData = 38,
        Archive = 39,
        TruthTable = 40,
        RuleTable = 41,
        Locked = 42,
        TextMerge = 43,
        UserControl = 44,
        UserControlRepeater = 45,
        JavaScriptDataControl = 46,
        JavaScriptActionControl = 47,
        JavaScriptPageControl = 48,
        JavaScriptControlResource = 49,
        MatrixRule = 50,
        MatrixRuleStep = 51,
        SimpleFormElement = 52,
        SimpleForm = 53,
        SimpleFormRepeater = 54
    }
    interface BaseElementRegistrationFilter extends $D.Framework._DBO {
    }
    function BaseElementRegistrationFilter(): BaseElementRegistrationFilter;
    enum OutcomesMatch {
        All = 0,
        Any = 1
    }
    enum FolderSearchType {
        FolderOnly = 0,
        FolderAndSubFolders = 1,
        SubFoldersOnly = 2
    }
    enum InputField {
        Name = 0,
        Type = 1
    }
    enum CreateElementBasedOn {
        Behavior = 0,
        Template = 1
    }
}
declare module $D.Framework.Design.WebHooks {
    enum RequestType {
        Post = 0,
        Get = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.RootNodes {
    enum FolderPosition {
        AboveNormalRootFolders = 0,
        InNormalRootFolders = 1,
        BelowNormalRootFolders = 2,
        PrimaryRootFolder = 3
    }
}
declare module $D.Framework.ServiceLayer {
    enum EntityImageType {
        Icon = 0,
        Thumbnail = 1,
        FullImage = 2
    }
    enum OutcomeType {
        Required = 0,
        Optional = 1,
        NotUsed = 2
    }
    enum InstanceStatus {
        Stopped = 0,
        Starting = 1,
        Started = 2,
        Failed = 3,
        Disabled = 4
    }
    enum DataBaseTypeEnum {
        MSSQL = 0,
        MYSQL = 1,
        ORACLE = 2,
        AZURE = 3,
        POSTGRES = 4,
        ODBC = 5,
        AZURESYNAPSE = 6
    }
    enum RequestStatus {
        Complete = 0,
        Failed = 1,
        Pending = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    enum AccountType {
        Machine = 0,
        Person = 1
    }
    enum UserAuthenticationType {
        ActiveDirectory = 0,
        Password = 1,
        Facebook = 2,
        SAML = 3,
        OpenID = 4,
        RepositorySSO = 5
    }
    interface AccountAndGroupsReturn extends $D.Framework._DBO {
    }
    function AccountAndGroupsReturn(): AccountAndGroupsReturn;
    enum DoNotShowNotificationType {
        CurrentSession = 0,
        Today = 1,
        Ever = 2,
        AutoShow = 3
    }
}
declare module $D.Framework.ServiceLayer.Services.Portal {
    enum GroupBrowserSilverlightBehavior {
        Default = 0,
        UseHTML = 1,
        UseSL = 2,
        UseHTMLInstallSL = 3
    }
    enum TimeFormats {
        Default = 0,
        Use24HourFormat = 1,
        Use12HourFormat = 2
    }
    enum DateFormats {
        Default = 0,
        Short = 1,
        Long = 2,
        ShortDateWithShortMonthname = 3,
        ShortDateWithFullMonthname = 4
    }
    enum AutoLockReloginAppearance {
        ShowUserNameAsLabel = 0,
        HideUsername = 1,
        RetypeUsername = 2
    }
    enum WebClientSecurityOptions {
        Default = 0,
        Secure = 1
    }
    enum ClientLogLevel {
        Unknown = 0,
        Debug = 1,
        Info = 2,
        Warn = 4,
        Error = 8,
        Fatal = 16
    }
    enum MainActionLocation {
        Both = 0,
        Left = 1,
        Right = 2,
        Off = 3
    }
    enum TranslateStrings {
        No = 0,
        Yes = 1,
        TestMode = 2
    }
    enum InstanceNameVisibility {
        MultiTenant = 0,
        Always = 1,
        Never = 2
    }
    enum NumberFormatSource {
        UseCultureDefault = 0,
        Define = 1
    }
    enum PortalSideBarDefaultPanel {
        Folders = 0,
        WorkflowCatalog = 1,
        Recent = 2
    }
    enum TwoFactorAuthenticationType {
        Numeric = 0,
        Alphanumeric = 1
    }
}
declare module $D.Framework.ServiceLayer.Services {
    enum FavoriteReferenceType {
        Folder = 0,
        Action = 1,
        DataSource = 2,
        Step = 3,
        RuleStep = 4,
        FormControl = 5,
        PageControl = 6,
        Entity = 7,
        Report = 8,
        NewRegistrationTemplate = 9
    }
}
declare module $D.Framework.Design.Text {
    enum MergeEditorNodeType {
        Category = 0,
        Data = 1,
        DynamicData = 2,
        CalculatedData = 3
    }
    enum TextMergePreviewOptions {
        RichText = 0,
        RichTextAndPlainText = 1,
        PlainText = 2
    }
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    enum TemplateHorizontalAlignment {
        Left = 0,
        Center = 1,
        Right = 2,
        Stretch = 3
    }
    enum TemplateVerticalAlignment {
        Top = 0,
        Center = 1,
        Bottom = 2,
        Stretch = 3
    }
    enum LengthType {
        Auto = 0,
        Pixel = 1,
        Percentage = 2
    }
    enum SpanDirection {
        Horizontal = 0,
        Vertical = 1
    }
    enum SpanBehavior {
        None = 0,
        AllFreeCells = 1,
        AllCells = 2,
        Specified = 3
    }
    enum CellBehavior {
        None = 0,
        MoveBottomCellUp = 1,
        MoveRightCellLeft = 2
    }
    enum CellOrientation {
        Horizontal = 0,
        Vertical = 1
    }
    enum TableSlotBehavior {
        None = 0,
        CollapseWhenNull = 1
    }
}
declare module $D.Framework.Design.Flow.Service {
    enum MappingContextType {
        Flow = 0,
        Rule = 1,
        Matrix = 2,
        Form = 3
    }
    enum FlowServiceNotificationType {
        Add = 0,
        Delete = 1,
        Update = 2
    }
    enum RuleServiceNotificationType {
        Add = 0,
        Delete = 1,
        Update = 2,
        RowMoved = 3,
        StepMoved = 4
    }
    enum RuleStepType {
        Step = 0,
        AllGroup = 1,
        AnyGroup = 2
    }
    enum RuleDesignerSurface {
        StatementRule = 0,
        TruthTable = 1,
        ExternalTruthTable = 2,
        RuleTable = 3
    }
}
declare module $D.Framework.Design.Page.Layouts {
    enum ExportDimensionType {
        Pixels = 0,
        Points = 1,
        Percent = 2,
        Auto = 3
    }
    enum ExportTextDirection {
        Horizontal = 0,
        Vertical = 1,
        ReverseVertical = 2
    }
    enum ExportTextAlignment {
        Near = 0,
        Middle = 1,
        Far = 2
    }
    enum ExportReportViewType {
        Grid = 0,
        Blurb = 1,
        Text = 2,
        Cells = 3,
        Calendar = 4
    }
    enum PrintPageTemplateDataType {
        PageName = 0,
        FolderName = 1,
        FolderPath = 2,
        CurrentUserEmail = 3,
        PageNumber = 4
    }
}
declare module $D.Framework.Design.Charts {
    enum ChartSorting {
        None = 0,
        ValueAscending = 1,
        ValueDescending = 2,
        LabelAscending = 3,
        LabelDescending = 4
    }
    enum ChartMetadataType {
        Dynamic = 0,
        UserDefined = 1
    }
    enum ChartMetadataBehavior {
        Label = 0,
        Series = 1
    }
}
declare module $D.Framework.Design.Page {
    enum PDFPageOrientation {
        Landscape = 0,
        Portrait = 1
    }
    enum PDFPageSize {
        SizeToFit = 0,
        A0 = 1,
        A1 = 2,
        A2 = 3,
        A3 = 4,
        A4 = 5,
        A5 = 6,
        RA0 = 7,
        RA1 = 8,
        RA2 = 9,
        RA3 = 10,
        RA4 = 11,
        RA5 = 12,
        B0 = 13,
        B1 = 14,
        B2 = 15,
        B3 = 16,
        B4 = 17,
        B5 = 18,
        Quarto = 100,
        Foolscap = 101,
        Executive = 102,
        GovernmentLetter = 103,
        Letter = 104,
        Legal = 105,
        Ledger = 106,
        Tabloid = 107,
        Post = 108,
        Crown = 109,
        LargePost = 110,
        Demy = 111,
        Medium = 112,
        Royal = 113,
        Elephant = 114,
        DoubleDemy = 115,
        QuadDemy = 116,
        STMT = 117,
        Folio = 120,
        Statement = 121,
        Size10x14 = 122
    }
    enum PrintContextType {
        Excel = 0,
        PDF = 1,
        Html = 2,
        CSV = 3
    }
    enum ReportExportFormat {
        Excel = 0,
        Pdf = 1
    }
}
declare module $D.Framework.Design.Page.Personalization {
    enum PersonalizationScope {
        Part = 0,
        Page = 1
    }
    /**
     * [Flags]
     */
    enum PersonalizationUserScope {
        Session = 0,
        User = 1,
        AllUsers = 2
    }
    enum PersonalizationArea {
        DataFilters = 0,
        Configuration = 1
    }
    enum ChartResetOptions {
        ResetPartForCurrentUser = 0,
        ResetPartForAllUsers = 1,
        ResetPageForCurrentUser = 2,
        ResetPageForAllUsers = 3
    }
}
declare module $D.Framework.Design.Page.Filters {
    interface AbstractDataFilter extends $D.Framework._DBO {
    }
    function AbstractDataFilter(): AbstractDataFilter;
    enum NumericRangeType {
        Above = 0,
        Below = 1,
        Between = 2,
        Equals = 3
    }
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    enum DateRangeTypes {
        None = 0,
        Yesterday = 1,
        Today = 2,
        ThisWeek = 3,
        LastWeek = 4,
        ThisMonth = 5,
        LastMonth = 6,
        ThisQuarter = 7,
        LastQuarter = 8,
        ThisYear = 9,
        LastYear = 10,
        NextWeek = 11,
        NextMonth = 12,
        NextQuarter = 13,
        NextYear = 14,
        Custom = 15,
        Rolling = 16,
        Other = 17
    }
    enum RollingDateRangeType {
        Last = 1,
        Next = 2
    }
    enum RollingDateRangeTimePeriodType {
        Days = 1,
        Weeks = 2,
        Months = 3,
        Quarters = 4,
        Years = 5
    }
    enum TileReturnActionType {
        None = 0,
        URL = 1,
        NavigatePortal = 2,
        EntityActions = 3,
        RunFlow = 4,
        PushDataToControls = 5
    }
    enum TileImageLocation {
        Left = 0,
        Right = 1,
        Center = 2
    }
    enum TileImageVerticalAlign {
        Top = 0,
        Center = 1,
        Bottom = 2
    }
    enum TileImageHorizontalAlign {
        Left = 0,
        Right = 1,
        Center = 2
    }
    enum TileHorizontalAlign {
        Left = 0,
        Right = 1,
        Center = 2
    }
    enum TileVerticalAlign {
        Top = 0,
        Center = 1,
        Bottom = 2
    }
    enum TileLineType {
        Text = 0,
        ProgressBar = 1
    }
    enum TileBulletStyle {
        Bullet = 0,
        Dash = 1,
        Number = 2,
        None = 3
    }
    enum IndicatorType {
        None = 0,
        Negative = 1,
        Nuetral = 2,
        Postive = 3
    }
}
declare module $D.Framework.Design.Report.Service.FilterFactory {
    enum StringMatchType {
        Equals = 0,
        DoesNotEqual = 1,
        Contains = 2,
        IsNotEmpty = 3,
        IsEmpty = 4,
        StartsWith = 5,
        EndsWith = 6,
        DoesNotContain = 7,
        DoesNotEndWith = 8,
        DoesNotStartWith = 9
    }
}
declare module $D.Framework.Design.EntityActions {
    enum GenerateDescriptionField {
        CustomLongDescription = 0,
        CustomShortDescription = 1,
        EntityDescription = 2
    }
}
declare module $D.Framework.Design.Flow.Mapping.SelectValue {
    enum SelectionType {
        All = 0,
        First = 1,
        Last = 2,
        AllMatching = 3,
        PickFirst = 4,
        PickLast = 5
    }
}
declare module $D.Framework.Design.Flow.ExternalForm {
    enum UrlSource {
        Specified = 0,
        FlowInput = 1,
        FlowConstant = 2
    }
}
declare module $D.Framework.Design.Flow.CoreSteps {
    enum ReturnUrlType {
        Html = 0,
        Auto = 1,
        Silverlight = 2
    }
    interface DefaultCustomFormStepOutcome extends $D.Framework._DBO {
    }
    function DefaultCustomFormStepOutcome(): DefaultCustomFormStepOutcome;
    enum ChromeSetting {
        None = 0,
        Off = 1,
        Small = 2,
        TopBarOnly = 3,
        TopBarFolderTreeCollapsed = 4,
        NoTopBarHasFolderTree = 5,
        NoTopBarFolderTreeCollapsed = 6
    }
    enum PopupLocation {
        Side = 0,
        Center = 1
    }
}
declare module $D.Framework.Design.Flow.Service.Execution {
    enum SizeType {
        Maximized = 0,
        DesignerSize = 1,
        SpecifiedSize = 2
    }
    enum FormPositionType {
        Center = 0,
        LastPosition = 1
    }
    enum FormHostType {
        Dialog = 0,
        SidePanel = 1,
        InNewWindow = 2
    }
}
declare module $D.Framework.Design.Flow.CoreSteps.Tile {
    enum HorizontalAlignment {
        Left = 0,
        Right = 1,
        Center = 2
    }
    enum TileTextBehaviour {
        Wrap = 0,
        Ellipsis = 1
    }
    enum VerticalAlignment {
        Top = 0,
        Middle = 1,
        Bottom = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Statistics {
    enum MetricDisplayType {
        Count = 0,
        Percentage = 1,
        AvgTime = 2,
        MaxTime = 3,
        MinTime = 4,
        CurrentCount = 5
    }
    enum ExecutionStatisticType {
        Rule = 0,
        Flow = 1,
        RuleSet = 2
    }
}
declare module $D.Framework.Design.Flow.CoreSteps.Excel {
    interface ExcelHeaderFooterData extends $D.Framework._DBO {
    }
    function ExcelHeaderFooterData(): ExcelHeaderFooterData;
    interface ExcelHeaderFooterSection extends $D.Framework._DBO {
    }
    function ExcelHeaderFooterSection(): ExcelHeaderFooterSection;
    enum ExcelTextJustification {
        Left = 0,
        Center = 1,
        Right = 2
    }
    interface ExcelWorkbookHeadersFooters extends $D.Framework._DBO {
    }
    function ExcelWorkbookHeadersFooters(): ExcelWorkbookHeadersFooters;
    interface ExcelWorksheetHeaderFooterData extends $D.Framework._DBO {
    }
    function ExcelWorksheetHeaderFooterData(): ExcelWorksheetHeaderFooterData;
}
declare module $D.Framework.Design.Flow.CoreSteps.EMail {
    interface EmailAddress extends $D.Framework._DBO {
    }
    function EmailAddress(): EmailAddress;
    interface EmailDateTime extends $D.Framework._DBO {
    }
    function EmailDateTime(): EmailDateTime;
}
declare module $D.Framework.Design.Flow.CoreSteps.DistanceCalculator {
    enum DistanceUnits {
        Miles = 0,
        Kilometers = 1
    }
}
declare module $D.Framework.Design.DataStructure {
    enum StorageOption {
        DatabaseStored = 0,
        NotDatabaseStored = 1
    }
    enum TextLength {
        Default = 0,
        Specify = 1,
        Max = 2
    }
    enum DefinedFieldType {
        Text = 0,
        LongText = 1,
        RichText = 2,
        StringList = 3,
        SimpleLookupList = 4,
        Password = 5,
        Logical = 6,
        IntNumber = 7,
        DecimalNumber = 8,
        DateTime = 9,
        Other = 10
    }
    interface BaseSimpleFlowData extends $D.Framework._DBO {
    }
    function BaseSimpleFlowData(): BaseSimpleFlowData;
}
declare module $D.Framework.Design.Flow.CoreSteps.StandardSteps {
    enum CsvFileType {
        Csv = 0,
        Excel_xls = 1,
        Excel_xlsx = 2,
        AutoSelect = 3
    }
    interface CellValue extends $D.Framework._DBO {
    }
    function CellValue(): CellValue;
    interface FastFileWriter extends $D.Framework._DBO {
    }
    function FastFileWriter(): FastFileWriter;
    enum BoundaryIncluding {
        None = 0,
        Low = 1,
        High = 2,
        Both = 3
    }
    enum PageRangeType {
        Range = 0,
        Single = 1,
        ToEnd = 2
    }
    enum RegexOperation {
        FirstOccurrence = 0,
        AllOccurrences = 1,
        IsMatch = 2,
        Replace = 3
    }
    enum LineFeedType {
        CarriageReturn = 0,
        LineFeed = 1,
        CarrageReturnLineFeed = 2
    }
}
declare module $D.Framework.Design.Flow.CoreSteps.CSV {
    enum CSVSeparator {
        Comma = 0,
        Dot = 1,
        Tab = 2,
        VerticalBar = 3,
        Semicolon = 4,
        Tilde = 5
    }
}
declare module $D.Framework.Design.Flow.Annotations {
    enum AnnotationHorizontalAlignment {
        Left = 0,
        Center = 1,
        Right = 2
    }
    enum AnnotationVerticalAlignment {
        Top = 0,
        Center = 1,
        Bottom = 2
    }
    enum ChartOrientation {
        Horizontal = 0,
        Vertical = 1
    }
    enum ImageAnnotationType {
        StaticImage = 0,
        Document = 1,
        URL = 2,
        StoredImage = 3
    }
    enum LabelAnchorPoint {
        TopLeft = 0,
        TopCenter = 1,
        TopRight = 2,
        CenterLeft = 4,
        Center = 5,
        CenterRight = 6,
        BottomLeft = 8,
        BottomCenter = 9,
        BottomRight = 10
    }
}
declare module $D.Framework.ServiceLayer.Services.Comment {
    enum CommentType {
        System = 0,
        User = 1,
        Audit = 2
    }
}
declare module $D.Framework.Design.Flow.Service.Debugging.Events {
    enum RuleExecutionResult {
        Success = 0,
        Failure = 1,
        MissingData = 2
    }
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    enum DataRuleExecutionType {
        First = 0,
        Last = 1,
        All = 2
    }
    enum RunTruthTableOptions {
        AllMatches = 0,
        FirstMatchOnly = 1
    }
    interface TruthTableServiceNullMapping extends $D.Framework._DBO {
    }
    function TruthTableServiceNullMapping(): TruthTableServiceNullMapping;
    interface TruthTableServiceIgnoreMapping extends $D.Framework._DBO {
    }
    function TruthTableServiceIgnoreMapping(): TruthTableServiceIgnoreMapping;
}
declare module $D.Framework.Design.Flow.Service.StepFactories {
    interface ActionsForFlowToolboxHeader extends $D.Framework._DBO {
    }
    function ActionsForFlowToolboxHeader(): ActionsForFlowToolboxHeader;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    enum MatrixRuleType {
        Matrix = 0,
        Tree = 1
    }
    enum MatrixRuleEventType {
        Add = 0,
        Delete = 1,
        Update = 2
    }
    enum MatrixRuleEventEntityType {
        Row = 0,
        Column = 1,
        Intersection = 2
    }
    interface MatrixRuleRefreshEvent extends $D.Framework._DBO {
    }
    function MatrixRuleRefreshEvent(): MatrixRuleRefreshEvent;
}
declare module $D.Framework.Design.Flow.Service.Debugging.DebugData {
    enum DebugDataRootType {
        Flow = 0,
        Rule = 1,
        MatrixRule = 2
    }
    enum DebugTreeNodeType {
        Flow = 0,
        Rule = 1,
        Form = 2,
        Set = 3,
        MatrixRule = 4,
        Assignment = 5,
        Global = 6
    }
    enum GlobalDebugGroupingStyle {
        NoGrouping = 0,
        GroupAll = 1,
        GroupConsecutive = 2
    }
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData {
    enum DataDesignerSurfaceType {
        Input = 0,
        Output = 1
    }
}
declare module $D.Framework.Design.Flow.Service.Edit.DataDefinitions {
    interface DataDefinitionsEditorMessage extends $D.Framework._DBO {
    }
    function DataDefinitionsEditorMessage(): DataDefinitionsEditorMessage;
}
declare module $D.Silverlight.UI.Controls {
    enum SilverPartType {
        BaseContent = 0,
        Container = 1,
        Child = 2,
        Chromeless = 3
    }
}
declare module $D.Framework.Design.Report.Tiles {
    enum TileDataType {
        ValueTile = 0,
        DateAgeTile = 1
    }
}
declare module $D.Framework.Design.Report.Matrix.Dimensions {
    enum SummaryDimensionNameOption {
        None = 0,
        DimensionNameBefore = 1,
        DimensionNameAfter = 2
    }
    enum UnspecifiedValueBehavior {
        SortToBeginning = 0,
        SortToEnd = 1,
        Ignore = 2
    }
    enum DateCalculationType {
        ByYear = 0,
        ByHourOfDay = 1,
        ByDayOfMonth = 2,
        ByWeek = 3,
        ByMonth = 4,
        ByDayOfWeek = 5,
        ByWeekOfMonth = 6,
        ByMonthAndYear = 7
    }
    enum AgingSummaryDirection {
        InPast = 0,
        InFuture = 1
    }
    enum SummaryOverflowType {
        Ignore = 0,
        PutInOther = 1
    }
    enum AgingSummarySortOrder {
        OlderFirst = 0,
        NewerFirst = 1
    }
    enum AgingDimensionReferencePointType {
        CurrentDateTime = 0,
        CurrentDate = 1,
        CurrentDateAtMidnight = 2
    }
    enum SummarizedDataOtherHandling {
        Exclude = 0,
        OtherCategory = 1
    }
    enum AgingSummaryOverflowType {
        Ignore = 0,
        PutInOther = 1
    }
}
declare module $D.Framework.Design.Report.Matrix {
    enum PercentCalculationType {
        Total = 0,
        ChangeFromFirst = 1,
        ChangeFromPrior = 2
    }
    enum DataDimensionType {
        DataSelection = 0,
        NonDataSelection = 1,
        Summary = 2
    }
}
declare module $D.Framework.Design.Report.InlineFields {
    interface MatchData extends $D.Framework._DBO {
    }
    function MatchData(): MatchData;
    enum TimeSpanFormat {
        HoursAndMinutes = 0,
        HoursMinutesAndSeconds = 1,
        DaysHoursMinutesAndSeconds = 2,
        Custom = 3
    }
    enum LiveColumnDisplayFormat {
        Auto = 0,
        Days = 1,
        Hours = 2,
        Minutes = 3
    }
}
declare module $D.Framework.Design.Report.Service.Comunication {
    enum ReportElementType {
        DataSource = 0,
        ReportFilter = 1,
        CalculatedColumn = 2
    }
    enum DeltaReportRowType {
        Changed = 0,
        Added = 1,
        Removed = 2
    }
    enum DeltaReportRowPositionType {
        Unchanged = 0,
        Top = 1,
        End = 2,
        Below = 3
    }
    enum ReportTextOutputType {
        Blurb = 0,
        Text = 1,
        Cells = 2,
        Default = 3,
        Tiles = 4,
        Calendar = 5,
        Data = 6,
        Matrix = 7,
        None = 8,
        Hierarchical = 9,
        Columns = 10
    }
}
declare module $D.Framework.Design.Report.Service.Utils {
    enum OutputReportType {
        CSV = 0,
        HTML = 1
    }
}
declare module $D.Framework.Design.Form {
    interface ActionsForFormToolboxHeader extends $D.Framework._DBO {
    }
    function ActionsForFormToolboxHeader(): ActionsForFormToolboxHeader;
    enum CreationAnchorPoint {
        TopLeft = 0,
        BottomRight = 1
    }
    /**
     * [Flags]
     */
    enum ResizeDirection {
        None = 0,
        Left = 1,
        Top = 2,
        Right = 4,
        Bottom = 8,
        All = 15
    }
    enum ExpandType {
        Inflate = 0,
        Deflate = 1
    }
    enum ResizeType {
        ByDrag = 0,
        ByClick = 1
    }
    enum InsertColumnRowAt {
        Before = 0,
        After = 1
    }
    interface FlowManagedDataChangedMessage extends $D.Framework._DBO {
    }
    function FlowManagedDataChangedMessage(): FlowManagedDataChangedMessage;
    enum DecisionsValidationIssueType {
        Unknown = 0,
        Custom = 1,
        RequiredDataMissing = 2,
        Runtime = 3
    }
    interface FormRuleOrFlowEvent extends $D.Framework._DBO {
    }
    function FormRuleOrFlowEvent(): FormRuleOrFlowEvent;
}
declare module $D.Framework.Design.Form.FormHost {
    enum PublishFormHostEnum {
        AsDesigned = 0,
        Dialog = 1,
        SidePanel = 2
    }
}
declare module $D.Framework.Design.Properties.Attributes {
    enum NumericArrayEditorType {
        ByteArray = 0,
        Int16Array = 1,
        Int32Array = 2,
        Int64Array = 3,
        DoubleArray = 4,
        DecimalArray = 5
    }
    /**
     * [Flags]
     */
    enum PickerFolders {
        None = 0,
        Recent = 1,
        Favorites = 2,
        Root = 4,
        Parent = 8,
        Current = 16,
        DefaultExpand = 22,
        Shared = 32,
        All = 64,
        DefaultShow = 95
    }
    /**
     * [Flags]
     */
    enum PickerActions {
        None = 0,
        Pick = 1,
        Reset = 2,
        Default = 3,
        Edit = 4,
        Create = 8,
        All = 15
    }
    enum PickerEntityVisibility {
        Visible = 0,
        All = 1
    }
    enum PickerFolderVisibility {
        Visible = 0,
        All = 1
    }
    enum RichTextEditorMode {
        Simple = 0,
        Full = 1
    }
}
declare module $D.Framework.ServiceLayer.Containers {
    interface ContainerHealthResponse extends $D.Framework._DBO {
    }
    function ContainerHealthResponse(): ContainerHealthResponse;
}
declare module $D.Framework.ServiceLayer.Services.UserMessage {
    enum UserMessageStatus {
        Unread = 0,
        Read = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.Twitter {
    interface TweetPlace extends $D.Framework._DBO {
    }
    function TweetPlace(): TweetPlace;
    interface TweetEntity extends $D.Framework._DBO {
    }
    function TweetEntity(): TweetEntity;
}
declare module $D.Framework.ServiceLayer.Services.Translation {
    enum HelpEventType {
        Added = 0,
        Changed = 1,
        Removed = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    enum TagEventType {
        Added = 0,
        Deleted = 1,
        Updated = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Support {
    interface SupportData extends $D.Framework._DBO {
    }
    function SupportData(): SupportData;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    enum BasicHttpSecurityType {
        None = 0,
        Transport = 1,
        Message = 2,
        TransportWithMessageCredential = 3,
        TransportCredentialOnly = 4
    }
    enum NetNamedPipeSecurityType {
        None = 0,
        Transport = 1
    }
    enum SecurityType {
        None = 0,
        Transport = 1,
        Message = 2,
        TransportWithMessageCredential = 3
    }
    enum CredentialType {
        Login = 0,
        UserIdPwd = 1,
        NamedSession = 2,
        Guest = 3,
        AuthId = 4,
        SessionId = 5
    }
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService {
    enum RestContentType {
        Xml = 0,
        Json = 1,
        Raw = 2,
        RawJson = 3,
        RawXml = 4
    }
    enum MultiPartFormDataPartType {
        File = 0,
        Value = 1
    }
    enum TokenEncodingType {
        URLEncoded = 0,
        URLEscaped = 1,
        None = 2
    }
    enum RestInputMethod2 {
        Get = 0,
        Post = 1,
        Put = 2,
        Delete = 3,
        Patch = 4,
        Custom = 99
    }
    enum RestContentType2 {
        Unspecified = 0,
        Json = 1,
        Xml = 2,
        FormUrlEncoded = 3,
        MultipartFormData = 4,
        Custom = 99
    }
    enum RestRequestBodyFormat {
        FromFlowString = 0,
        Binary = 1,
        FromDataType = 2,
        FromStatic = 3
    }
    enum RestSerializationFormat {
        Json = 0,
        Xml = 1,
        FormUrlEncoded = 2
    }
    enum RestOutputType2 {
        RawValue = 0,
        SelectType = 1,
        Binary = 2,
        None = 3
    }
    enum RestDeserializationFormat {
        Json = 0,
        Xml = 1
    }
    enum RestMethodBaseUrlOverride {
        FromFlow = 0,
        Static = 1,
        FromToken = 2
    }
    enum RestServiceAuthType {
        None = 0,
        Basic = 1,
        Windows = 2,
        OAuth = 3
    }
    enum RestOutputType {
        None = 0,
        JSON = 1,
        XML = 2,
        Binary = 3
    }
    enum RestInputMethod {
        Get = 0,
        Post = 1,
        Put = 2
    }
    enum IntegrationSchemaType {
        Xsd = 0,
        Json = 1,
        RawXml = 2,
        RawJson = 3,
        Raw = 4
    }
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    enum CatalogItemType {
        Item = 0,
        Folder = 1
    }
    enum ChargeModel {
        ChargeBack = 0,
        Included = 1,
        NoCost = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Sync {
    enum SyncType {
        Add = 0,
        Update = 1,
        Remove = 2,
        SetPermissions = 3
    }
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Instances {
    enum ConfigurationHostingType {
        SharedServer = 0,
        AmazonEC2 = 1
    }
    interface HostingEnvironmentParameter extends $D.Framework._DBO {
    }
    function HostingEnvironmentParameter(): HostingEnvironmentParameter;
}
declare module $D.Framework.ServiceLayer.Services.PeerCache {
    interface NotifyServerEvent extends $D.Framework._DBO {
    }
    function NotifyServerEvent(): NotifyServerEvent;
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob {
    enum NoAdditionalScheduleAction {
        Archive = 0,
        LeaveActive = 1,
        Delete = 2
    }
    enum ComputeScheduleOptions {
        RunOnCalculatedDay = 0,
        FirstBusinessDayBefore = 1,
        FirstBusinessDayAfter = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob.Schedules {
    enum Run {
        Immediately = 0,
        AfterTimeSpan = 1,
        SpecifiedTimePeriod = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    enum RelationType {
        ToGroup = 0,
        ToAccount = 1
    }
    enum ViewRelationsActionSourceType {
        Account = 1,
        Group = 2,
        Relation = 3
    }
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    enum ContactInfoType {
        Address = 0,
        Phone = 1,
        EmailAddress = 2,
        InstantMessengerAddress = 3,
        Other = 4
    }
    enum AddressType {
        NotSpecified = 0,
        Home = 1,
        Office = 2,
        Other = 3
    }
    enum PhoneType {
        Mobile = 0,
        Office = 1,
        Home = 2,
        Fax = 3,
        Other = 4,
        Pager = 5,
        IpPhone = 6
    }
    enum InstantMessengerNetwork {
        MSN = 0,
        AOL = 1,
        GoogleTalk = 2,
        Yahoo = 3,
        Other = 4
    }
    enum ContactDetailType {
        Phone = 0,
        Pager = 1,
        Fax = 2,
        Email = 3,
        MSN = 4,
        GoogleTalk = 5,
        IMOther = 6
    }
    enum ContactInfoPriorityType {
        Primary = 0,
        Secondry = 1,
        NotPreferred = 2
    }
    interface ContactInfoChangedEvent extends $D.Framework._DBO {
    }
    function ContactInfoChangedEvent(): ContactInfoChangedEvent;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    enum NotificationMessageType {
        Error = 0,
        Warning = 1,
        Information = 2,
        ActionRequested = 3,
        ActionRequestedTimeBound = 4
    }
    interface BaseNotificationHandler extends $D.Framework._DBO {
    }
    function BaseNotificationHandler(): BaseNotificationHandler;
    enum NotificationCommunicationType {
        Email = 0,
        PopUp = 1,
        SMS = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Module {
    enum ModuleResourceNodeType {
        Main = 0,
        From = 1,
        To = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Logging {
    enum ClientLogCategoriesSetType {
        Select = 0,
        EnableAll = 1,
        DisableAll = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.FileReference {
    enum FileState {
        Uploading = 0,
        Exists = 1,
        Missing = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Excel {
    enum ExcelFileType {
        Csv = 0,
        Excel_xls = 1,
        Excel_xlsx = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Events {
    interface UrlData extends $D.Framework._DBO {
    }
    function UrlData(): UrlData;
    interface EmailData extends $D.Framework._DBO {
    }
    function EmailData(): EmailData;
    interface FileWatcherData extends $D.Framework._DBO {
    }
    function FileWatcherData(): FileWatcherData;
    interface PingServerData extends $D.Framework._DBO {
    }
    function PingServerData(): PingServerData;
}
declare module $D.Framework.ServiceLayer.Services.Document {
    enum StorageType {
        Database = 0,
        FileSystem = 1
    }
    enum DocumentExistsBehavior {
        Error = 0,
        UpdateAndArchive = 1,
        UpdateDontArchive = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.DesignerRepository.Client {
    interface AppStorageChangedMessage extends $D.Framework._DBO {
    }
    function AppStorageChangedMessage(): AppStorageChangedMessage;
}
declare module $D.Framework.ServiceLayer.Services.DBQuery {
    enum Status {
        Running = 0,
        Finished = 1,
        Error = 2,
        Cancelled = 3
    }
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    enum OutputQueryOption {
        CreateType = 0,
        ChouceType = 1,
        DynamicDataRow = 2,
        CSVFileData = 3
    }
    enum QueryParameterType {
        String = 0,
        Char = 1,
        Logical = 2,
        Byte = 3,
        Int16 = 4,
        Int32 = 5,
        UInt64 = 6,
        Int64 = 7,
        Decimal = 8,
        Double = 9,
        DateTime = 10,
        Guid = 11
    }
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.FlowSteps.ODBCSteps {
    interface OdbcMetadataFlow extends $D.Framework._DBO {
    }
    function OdbcMetadataFlow(): OdbcMetadataFlow;
    interface ODBCSchemaRestrictions extends $D.Framework._DBO {
    }
    function ODBCSchemaRestrictions(): ODBCSchemaRestrictions;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices {
    enum DatabaseObjectType {
        Table = 0,
        View = 1,
        Procedure = 2,
        Query = 3
    }
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.Comunication {
    enum DefinitionType {
        Database = 0,
        Table = 1,
        Procedure = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Chat {
    enum ChatType {
        OpenEnded = 0,
        Closed = 1
    }
    enum ChatClosingOptions {
        Archive = 0,
        Delete = 1,
        History = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.AuditService {
    enum AuditingProcess {
        InTransaction = 0,
        Queued = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.Association {
    interface AssociationTypeParams extends $D.Framework._DBO {
    }
    function AssociationTypeParams(): AssociationTypeParams;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    /**
     * [Flags]
     */
    enum AssigneeType {
        Account = 1,
        Group = 2,
        Role = 4,
        AssignmentFolderRights = 8
    }
    enum State {
        Initial = 0,
        Added = 1,
        Removed = 2,
        Excluded = 3
    }
    /**
     * [Flags]
     */
    enum AssignmentFolderRights {
        None = 0,
        Use = 1,
        Open = 2,
        View = 4,
        Edit = 8,
        Add = 16,
        Delete = 32,
        Administrate = 64,
        CustomPermission1 = 128,
        CustomPermission2 = 256,
        CustomPermission3 = 512,
        CustomPermission4 = 1024,
        CustomPermission5 = 2048,
        CustomPermission6 = 4096,
        CustomPermission7 = 8192,
        CustomPermission8 = 16384,
        CustomPermission9 = 32768,
        CustomPermission10 = 65536,
        CustomPermission11 = 131072,
        CustomPermission12 = 262144,
        CustomPermission13 = 524288,
        CustomPermission14 = 1048576,
        CustomPermission15 = 2097152,
        CustomPermission16 = 4194304,
        CustomPermission17 = 8388608,
        CustomPermission18 = 16777216,
        CustomPermission19 = 33554432,
        CustomPermission20 = 67108864,
        All = 134217727
    }
    enum AssignmentHandlerEscalationType {
        None = 0,
        Current = 1,
        Warn = 2,
        Late = 3,
        Expired = 4,
        Escalate = 5,
        Check = 6
    }
    enum AssignmentStateNotifyType {
        AnyStateChange = 0,
        OnAssignmentEscalated = 1,
        OnAssignmentCompleted = 2,
        OnAssignmentExpired = 3
    }
    enum AssignmentState {
        Pending = 0,
        Current = 1,
        Warn = 2,
        Late = 3,
        Escalated = 4,
        Completed = 5
    }
    enum AssignmentAgeParms {
        OlderThan = 0,
        CreatedWithin = 1,
        FromWarnDate = 2,
        FromLateDate = 3,
        FromEscalateDate = 4,
        StartingIn = 5
    }
    enum AssignmentDateParms {
        Create = 0,
        Start = 1,
        Warn = 2,
        Late = 3,
        Escalate = 4
    }
    interface RefreshStartupDialogEvent extends $D.Framework._DBO {
    }
    function RefreshStartupDialogEvent(): RefreshStartupDialogEvent;
}
declare module $D.Framework.ServiceLayer.Services.Approvals {
    enum ApproverType {
        User = 0,
        Group = 1,
        Relation = 2
    }
    enum ApprovalNotificationType {
        Approval = 0,
        Rejection = 1,
        NewLevel = 2
    }
    enum HowManyApprovers {
        All = 0,
        Any = 1
    }
    enum NotifyWhen {
        OnRejection = 0,
        OnCompletion = 1,
        AfterEachApproval = 2,
        Never = 3
    }
    enum TimeOutAction {
        Approved = 0,
        Rejected = 1,
        Escalated = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory {
    enum LDAPSchema {
        ActiveDirectory = 0,
        OpenLDAP = 1
    }
    enum LogonBy {
        Uid = 0,
        EmailAddress = 1
    }
    enum ActiveDirectorySyncOption {
        EntireDomain = 0,
        SelectedOrgUnits = 1,
        SelectedGroups = 2
    }
}
declare module $D.Framework.ServiceLayer.Services.Agent {
    enum AgentEvents {
        PingAgent = 0
    }
}
declare module $D.Framework.ServiceLayer.Services.APIService {
    enum OutputType {
        Xml = 0,
        Raw = 1,
        Json = 2,
        Excel = 3,
        Csv = 4,
        Pdf = 5,
        Html = 6,
        RawJson = 7,
        RawXml = 8
    }
    enum RequestType {
        Get = 0,
        Post = 1
    }
}
declare module $D.Framework.ServiceLayer.Services.Folder.FolderUserActions {
    enum UserActionType {
        RunFlow = 0,
        OpenFolder = 1
    }
}
declare module $D.Framework.Data.ORMapper {
    interface BaseORMEntity extends $D.Framework._DBO {
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function BaseORMEntity(): BaseORMEntity;
    interface TimeSpanRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function TimeSpanRelationalMappingFieldConverter(): TimeSpanRelationalMappingFieldConverter;
    interface NullableTimeSpanRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function NullableTimeSpanRelationalMappingFieldConverter(): NullableTimeSpanRelationalMappingFieldConverter;
    interface TextFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function TextFieldConverter(): TextFieldConverter;
    interface EncryptedConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function EncryptedConverter(): EncryptedConverter;
    interface FixedLengthStringFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function FixedLengthStringFieldConverter(): FixedLengthStringFieldConverter;
    interface FixedLengthNonUnicodeStringFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function FixedLengthNonUnicodeStringFieldConverter(): FixedLengthNonUnicodeStringFieldConverter;
    interface ORMXmlSerializedFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function ORMXmlSerializedFieldConverter(): ORMXmlSerializedFieldConverter;
    interface EnumFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function EnumFieldConverter(): EnumFieldConverter;
    interface OracleBooleanConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function OracleBooleanConverter(): OracleBooleanConverter;
    interface BaseDateTimeConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function BaseDateTimeConverter(): BaseDateTimeConverter;
    interface BigVarchar extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function BigVarchar(): BigVarchar;
    interface String2000 extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function String2000(): String2000;
    interface KeyFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function KeyFieldConverter(): KeyFieldConverter;
    interface XMLSqLConvertor extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function XMLSqLConvertor(): XMLSqLConvertor;
    interface TimeFieldConverter extends $D.Framework.Data.ORMapper.BaseConverter {
    }
    function TimeFieldConverter(): TimeFieldConverter;
    interface ORMOrderBy extends $D.Framework._DBO {
        FieldName: string;
        Order: $D.Framework.Data.ORMapper.ORMResultOrder;
    }
    function ORMOrderBy(): ORMOrderBy;
    interface AbstractWhereSet extends $D.Framework.Data.ORMapper.WhereCondition {
        WhereConditions: any;
    }
    function AbstractWhereSet(): AbstractWhereSet;
    interface FieldWhereCondition extends $D.Framework.Data.ORMapper.WhereCondition {
        FieldName: string;
        ConditionMatchType: $D.Framework.Data.ORMapper.QueryMatchType;
        Value: any;
        OverrideConverterTypeName: string;
    }
    function FieldWhereCondition(): FieldWhereCondition;
    interface FieldToFieldWhereCondition extends $D.Framework.Data.ORMapper.WhereCondition {
        FirstFieldName: string;
        SecondFieldName: string;
        OverrideConverterTypeName: string;
    }
    function FieldToFieldWhereCondition(): FieldToFieldWhereCondition;
    interface FullTextContainsWhereCondition extends $D.Framework.Data.ORMapper.WhereCondition {
    }
    function FullTextContainsWhereCondition(): FullTextContainsWhereCondition;
    interface FieldSetValue extends $D.Framework._DBO {
        FieldName: string;
        Value: any;
        IsQuoted: boolean;
        OverrideConverterTypeName: string;
    }
    function FieldSetValue(): FieldSetValue;
    interface BaseNoReturnSql extends $D.Framework._DBO {
        Sequence: $D.Framework.Data.ORMapper.ORMCommandSequence;
        ExecutionOrdinal: number;
        CommandTimeout: any;
    }
    function BaseNoReturnSql(): BaseNoReturnSql;
    interface SqlQueryWithParams extends $D.Framework._DBO {
        QueryStatement: string;
        CommandParams: any;
        MaxResultSetSize: number;
    }
    function SqlQueryWithParams(): SqlQueryWithParams;
    interface SimpleSelectStatement extends $D.Framework._DBO {
        Distinct: boolean;
        NoLock: boolean;
        Top: any;
        TableName: string;
        SchemaName: string;
        Fields: any;
        WhereSets: any;
        TableHints: string[];
        OrderBy: any;
        MaxResultSetSize: number;
        Sequence: $D.Framework.Data.ORMapper.ORMCommandSequence;
        IsTableNameQuoted: boolean;
    }
    function SimpleSelectStatement(): SimpleSelectStatement;
    interface CommonTableExpression extends $D.Framework._DBO {
        ExpressionName: string;
        Columns: string[];
        Statement: $D.Framework.Data.ORMapper.SqlStatement;
        Sequence: $D.Framework.Data.ORMapper.ORMCommandSequence;
    }
    function CommonTableExpression(): CommonTableExpression;
}
declare module $D.Silverlight.UI.Utilities {
    interface DesignerGradient extends $D.Framework._DBO {
        Color: string;
        Offset: number;
    }
    function DesignerGradient(): DesignerGradient;
}
declare module $D.Framework.ServiceLayer.Services.ContextData {
    interface DataPair extends $D.Framework._DBO {
        Name: string;
        OutputValue: any;
    }
    function DataPair(): DataPair;
}
declare module $D.Utilities.Data.DataStore {
    interface DataStoreChange extends $D.Framework._DBO {
        FileName: string;
        Key: string;
        ContentChange: boolean;
        StorageState: $D.Utilities.Data.DataStore.StorageState;
        NextState: $D.Utilities.Data.DataStore.StorageState;
        NextStateTime: any;
        LastDateTime: Date;
    }
    function DataStoreChange(): DataStoreChange;
}
declare module $D.Framework.ServiceLayer.Actions {
    interface ActionHeader extends $D.Framework._DBO {
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function ActionHeader(): ActionHeader;
}
declare module $D.Framework.ServiceLayer.Actions.Handlers {
    interface SilverLightActionHandler extends $D.Framework.ServiceLayer.Actions.Handlers.ActionHandler {
        ClassName: string;
    }
    function SilverLightActionHandler(): SilverLightActionHandler;
    interface CLIActionHandler extends $D.Framework.ServiceLayer.Actions.Handlers.ActionHandler {
        ClassName: string;
    }
    function CLIActionHandler(): CLIActionHandler;
    interface MvcActionHandler extends $D.Framework.ServiceLayer.Actions.Handlers.ActionHandler {
        IsDialog: boolean;
        HandlerName: string;
        ShowLoadingIndicatorOutsideDialog: boolean;
    }
    function MvcActionHandler(): MvcActionHandler;
}
declare module $D.Framework.Data.DataTypes {
    interface UISize extends $D.Framework._DBO {
        Width: number;
        Height: number;
    }
    function UISize(): UISize;
    interface FileData extends $D.Framework._DBO {
        Id: string;
        FileName: string;
        Contents: number[];
    }
    function FileData(): FileData;
    interface Date extends $D.Framework._DBO {
        DateTicks: number;
    }
    function Date(): Date;
    interface DBParameterInfo extends $D.Framework._DBO {
        Name: string;
        DBType: string;
        Type: string;
        Direction: any;
        IsQuoted: boolean;
    }
    function DBParameterInfo(): DBParameterInfo;
    interface DBProcedureInfo extends $D.Framework._DBO {
        ProcedureName: string;
        SchemaName: string;
        DatabaseName: string;
        SpecificName: string;
    }
    function DBProcedureInfo(): DBProcedureInfo;
    interface DBTableInfo extends $D.Framework._DBO {
        TableName: string;
        SchemaName: string;
        DatabaseName: string;
        FullName: string;
    }
    function DBTableInfo(): DBTableInfo;
    interface DBColumnInfo extends $D.Framework._DBO {
        Name: string;
        DBType: string;
        Type: string;
        IsNullable: boolean;
        IsIdentity: boolean;
    }
    function DBColumnInfo(): DBColumnInfo;
    interface DesignerCornerRadius extends $D.Framework._DBO {
        BottomLeft: number;
        BottomRight: number;
        TopLeft: number;
        TopRight: number;
    }
    function DesignerCornerRadius(): DesignerCornerRadius;
    interface DesignerThickness extends $D.Framework._DBO {
        Bottom: number;
        Left: number;
        Right: number;
        Top: number;
    }
    function DesignerThickness(): DesignerThickness;
    interface AbstractElementReference extends $D.Framework._DBO {
        Name: string;
        Id: string;
    }
    function AbstractElementReference(): AbstractElementReference;
    interface FileDataReference extends $D.Framework._DBO {
        FileName: string;
        Url: string;
    }
    function FileDataReference(): FileDataReference;
    interface FileInfoData extends $D.Framework._DBO {
        IsReadOnly: boolean;
        DirectoryName: string;
        LastAccessTime: Date;
        FileName: string;
        Length: number;
        CreationTime: Date;
        LastWriteTime: Date;
        FullName: string;
        FileExtension: string;
    }
    function FileInfoData(): FileInfoData;
    interface ColumnInfo extends $D.Framework._DBO {
        ColumnName: string;
        FullTypeName: string;
        AllowNull: boolean;
    }
    function ColumnInfo(): ColumnInfo;
    interface SimpleKeyValuePair extends $D.Framework._DBO {
        Key: string;
        Value: string;
    }
    function SimpleKeyValuePair(): SimpleKeyValuePair;
    interface SilverCompactTagDataInfo extends $D.Framework._DBO {
        Tag: string;
        TagNote: string;
    }
    function SilverCompactTagDataInfo(): SilverCompactTagDataInfo;
    interface CSVEditorFileData extends $D.Framework._DBO {
        CSVRowsData: string;
        TotalRowCount: number;
        ColumnNames: string[];
    }
    function CSVEditorFileData(): CSVEditorFileData;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface AbstractUserContext extends $D.Framework._DBO {
        ClientEventSessionId: string;
        DisplayType: $D.Framework.ServiceLayer.Services.Folder.DisplayType;
        StudioPortal: boolean;
        BrowserUserAgent: string;
    }
    function AbstractUserContext(): AbstractUserContext;
    interface ExportDependency extends $D.Framework._DBO {
        Id: string;
        Name: string;
        TypeName: string;
        ShortTypeName: string;
        BehaviorTypeName: string;
        IsDeclaredDependency: boolean;
    }
    function ExportDependency(): ExportDependency;
    interface ExportAssemblyDependency extends $D.Framework._DBO {
        AssemblyName: string;
        ModuleName: string;
    }
    function ExportAssemblyDependency(): ExportAssemblyDependency;
    interface ExportValidationData extends $D.Framework._DBO {
        Key: string;
        Value: string;
    }
    function ExportValidationData(): ExportValidationData;
    interface ExportObjectInfo extends $D.Framework._DBO {
        EntityID: string;
        EntityName: string;
        TypeName: string;
        ModifiedBy: string;
        ShortTypeName: string;
        ModifiedOn: any;
        ModuleName: string;
        IncludedByEntityID: string;
        IncludedByEntityName: string;
    }
    function ExportObjectInfo(): ExportObjectInfo;
    interface FrameworkFault extends $D.Framework._DBO {
        Message: string;
        ErrorCode: number;
    }
    function FrameworkFault(): FrameworkFault;
    interface ImportValidationIssue extends $D.Framework._DBO {
        Id: string;
        EntityName: string;
        TypeName: string;
        ShortTypeName: string;
        Reason: string;
        ModuleName: string;
        MissingItemName: string;
        MissingItemId: string;
        MissingItemTypeName: string;
        MissingItemShortTypeName: string;
        ResolutionDescription: string;
        ErrorResolution: $D.Framework.ServiceLayer.Utilities.ImportSessionResolution;
    }
    function ImportValidationIssue(): ImportValidationIssue;
    interface SkipImportResolution extends $D.Framework.ServiceLayer.Utilities.ImportSessionResolution {
    }
    function SkipImportResolution(): SkipImportResolution;
    interface IgnoreImportResolution extends $D.Framework.ServiceLayer.Utilities.ImportSessionResolution {
    }
    function IgnoreImportResolution(): IgnoreImportResolution;
    interface OverrideImportResolution extends $D.Framework.ServiceLayer.Utilities.ImportSessionResolution {
    }
    function OverrideImportResolution(): OverrideImportResolution;
    interface ParentMissingForFolderResolution extends $D.Framework.ServiceLayer.Utilities.ImportSessionResolution {
    }
    function ParentMissingForFolderResolution(): ParentMissingForFolderResolution;
    interface KeepLocalVersionResolution extends $D.Framework.ServiceLayer.Utilities.ImportSessionResolution {
    }
    function KeepLocalVersionResolution(): KeepLocalVersionResolution;
    interface Project extends $D.Framework._DBO {
        ProjectName: string;
    }
    function Project(): Project;
}
declare module $D.OAuth {
    interface RequestTokenComplete extends $D.Framework._DBO {
        TokenId: string;
        TokenData: string;
    }
    function RequestTokenComplete(): RequestTokenComplete;
    interface AuthorizationPendingEvent extends $D.Framework._DBO {
        TokenId: string;
        TokenData: string;
    }
    function AuthorizationPendingEvent(): AuthorizationPendingEvent;
}
declare module $D.DesignerRepository {
    interface ModuleReference extends $D.Framework._DBO {
        ModuleName: string;
        ModuleUpdateDate: Date;
    }
    function ModuleReference(): ModuleReference;
    interface RepositoryReference extends $D.Framework._DBO {
        ProjectName: string;
        BranchName: string;
        RevisionId: string;
    }
    function RepositoryReference(): RepositoryReference;
    interface ModuleInfoFile extends $D.Framework._DBO {
        Name: string;
        TypeName: string;
        Id: string;
        Path: string;
        ModifiedOnRevisionId: string;
        ModifiedBy: string;
        ModifiedDate: any;
        ModifiedByMachine: string;
        HasPreview: boolean;
    }
    function ModuleInfoFile(): ModuleInfoFile;
    interface ModuleInfoItemSummary extends $D.Framework._DBO {
        FlowCount: number;
        FormCount: number;
        RuleCount: number;
        ReportCount: number;
        TruthTable: number;
        FolderCount: number;
        PageCount: number;
    }
    function ModuleInfoItemSummary(): ModuleInfoItemSummary;
    interface ModuleCheckinInfo extends $D.Framework._DBO {
        CheckinId: string;
        ModifiedBy: string;
        ModifiedDate: Date;
        Note: string;
        IsTag: boolean;
        State: $D.DesignerRepository.RepositoryState;
        RevisionId: string;
        Resources: string;
        Description: string;
    }
    function ModuleCheckinInfo(): ModuleCheckinInfo;
    interface ModuleCheckoutInfo extends $D.Framework._DBO {
        CheckoutBy: string;
        CheckoutDate: string;
        RevisionNumber: string;
        BranchName: string;
    }
    function ModuleCheckoutInfo(): ModuleCheckoutInfo;
    interface ProjectDependency extends $D.Framework._DBO {
        ProjectName: string;
    }
    function ProjectDependency(): ProjectDependency;
    interface ResourceDescription extends $D.Framework._DBO {
        ResourceId: string;
        ResourceName: string;
        ResourcePath: string;
    }
    function ResourceDescription(): ResourceDescription;
}
declare module $D.Framework.ServiceLayer.Services.Image {
    interface ImageInfo extends $D.Framework._DBO {
        ImageType: $D.Framework.ServiceLayer.Services.Image.ImageInfoType;
        DocumentId: string;
        ImageUrl: string;
        ImageId: string;
        RawData: number[];
        UrlEncodedImage: string;
        ImageName: string;
        ImageFileReferenceId: string;
    }
    function ImageInfo(): ImageInfo;
    interface ImageDocument extends $D.Framework._DBO {
        FolderId: string;
        Name: string;
        ImageId: string;
    }
    function ImageDocument(): ImageDocument;
    interface ImageParams extends $D.Framework._DBO {
    }
    function ImageParams(): ImageParams;
    interface SignaturePadInfo extends $D.Framework._DBO {
        DataJSON: string;
        RawData: number[];
    }
    function SignaturePadInfo(): SignaturePadInfo;
}
declare module $D.Framework.Design.Flow.Mapping {
    interface DecisionsType extends $D.Framework._DBO {
        Name: string;
    }
    function DecisionsType(): DecisionsType;
}
declare module $D.DesignerRepository.Client {
    interface CheckoutResourceCounts extends $D.Framework._DBO {
        ToUpdate: number;
        ToMerge: number;
        ToDelete: number;
    }
    function CheckoutResourceCounts(): CheckoutResourceCounts;
    interface CheckoutResources extends $D.Framework._DBO {
        ToUpdate: $D.DesignerRepository.Client.ResourceCheckoutInfo[];
        ToMerge: $D.DesignerRepository.Client.ResourceCheckoutInfo[];
        ToDelete: $D.DesignerRepository.Client.ResourceCheckoutInfo[];
    }
    function CheckoutResources(): CheckoutResources;
}
declare module $D.DesignerRepository.Client.Service {
    interface AppClientProxyAccessInfo extends $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo {
    }
    function AppClientProxyAccessInfo(): AppClientProxyAccessInfo;
    interface RepositoryClientProxyAccessInfo extends $D.DesignerRepository.Client.Service.AbstractRepositoryProxyAccessInfo {
    }
    function RepositoryClientProxyAccessInfo(): RepositoryClientProxyAccessInfo;
    interface RepositoryClientData extends $D.Framework._DBO {
        ClientIPAddress: string;
        AuthenticationKey: string;
        ClientPortalBaseURL: string;
    }
    function RepositoryClientData(): RepositoryClientData;
    interface ResourceDownloadStatus extends $D.Framework._DBO {
        Name: string;
        Status: string;
        ErrorMessage: string;
    }
    function ResourceDownloadStatus(): ResourceDownloadStatus;
    interface CheckinTypeStatistic extends $D.Framework._DBO {
        TypeName: string;
        Count: number;
    }
    function CheckinTypeStatistic(): CheckinTypeStatistic;
}
declare module $D.Framework.ServiceLayer.Services.Module {
    interface ModuleInfo extends $D.Framework._DBO {
        ModuleName: string;
        DependsOn: string[];
        Version: string;
        RequiresLicense: boolean;
        Description: string;
        CompiledOnDate: Date;
        CompiledOnServer: string;
        ImagePath: string;
        Installed: boolean;
        InstalledVersion: string;
        IsGithubModule: boolean;
    }
    function ModuleInfo(): ModuleInfo;
}
declare module $D.Framework.ServiceLayer.Services.ImportExport {
    interface ImportResult extends $D.Framework._DBO {
        Result: $D.Framework.ServiceLayer.Services.ImportExport.ImportResults;
        EntityId: string;
        Errors: string[];
    }
    function ImportResult(): ImportResult;
    interface ExportModuleData extends $D.Framework._DBO {
        ClassName: string;
        Id: string;
        CreatedOn: any;
        LastModifiedOn: any;
        CreatedBy: string;
        ModifiedBy: string;
        Name: string;
        Description: string;
        FolderPath: string;
    }
    function ExportModuleData(): ExportModuleData;
    interface ImportableEntityInfo extends $D.Framework._DBO {
        ParentFolderID: string;
        Description: string;
        ID: string;
        TypeName: string;
        Name: string;
        Children: $D.Framework.ServiceLayer.Services.ImportExport.ImportableEntityInfo[];
    }
    function ImportableEntityInfo(): ImportableEntityInfo;
}
declare module $D.Silverlight.UI.Forms {
    interface FormTriggerData extends $D.Framework._DBO {
        ComponentName: string;
        Events: $D.Framework.ComponentData.FormTriggerType[];
    }
    function FormTriggerData(): FormTriggerData;
}
declare module $D.FlowSets {
    interface FlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: any;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function FlowSetRunResult(): FlowSetRunResult;
    interface DecimalFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: number;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function DecimalFlowSetRunResult(): DecimalFlowSetRunResult;
    interface DoubleFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: number;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function DoubleFlowSetRunResult(): DoubleFlowSetRunResult;
    interface IntFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: number;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function IntFlowSetRunResult(): IntFlowSetRunResult;
    interface LongFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: number;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function LongFlowSetRunResult(): LongFlowSetRunResult;
    interface DateFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: Date;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function DateFlowSetRunResult(): DateFlowSetRunResult;
    interface BoolFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: boolean;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function BoolFlowSetRunResult(): BoolFlowSetRunResult;
    interface StringFlowSetRunResult extends $D.Framework._DBO {
        RuleResultData: string;
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
        CustomLongDescription: string;
        CustomShortDescription: string;
    }
    function StringFlowSetRunResult(): StringFlowSetRunResult;
    interface DropDownItem extends $D.Framework._DBO {
        label: string;
        value: string;
        isSelected: boolean;
    }
    function DropDownItem(): DropDownItem;
    interface RuleSetRunSampleHistory extends $D.Framework._DBO {
        SampleName: string;
        SampleId: string;
        Duration: string;
    }
    function RuleSetRunSampleHistory(): RuleSetRunSampleHistory;
    interface RuleSetSampleResult extends $D.Framework._DBO {
        EntityId: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionCount: number;
        Result: any;
    }
    function RuleSetSampleResult(): RuleSetSampleResult;
    interface ChangeFlowSetBehavior extends $D.Framework._DBO {
        BehaviorName: string;
    }
    function ChangeFlowSetBehavior(): ChangeFlowSetBehavior;
}
declare module $D.Framework.Design.Flow.Service {
    interface DesignerPromptDisplayData extends $D.Framework._DBO {
        ShowPrompt: boolean;
        ShowInputData: boolean;
        PromptMessage: string;
        CanEditInputData: boolean;
        HasInputData: boolean;
        EditInputsType: $D.Framework.Design.Properties.EditInputsType;
        CanApplyDesignPattern: boolean;
        HasDesignPattern: boolean;
        DesignPatternId: string;
        DesignPatternName: string;
        ShowIntegration: boolean;
        IntegrationType: $D.Framework.Design.IntegrationType;
        ShowViewButtonWithoutConfigureIntegration: boolean;
    }
    function DesignerPromptDisplayData(): DesignerPromptDisplayData;
    interface MappingContext extends $D.Framework._DBO {
        Type: $D.Framework.Design.Flow.Service.MappingContextType;
        HandlerName: string;
        SessionId: string;
        ElementId: string;
        StepId: string;
        UseFormSessionInfo: boolean;
    }
    function MappingContext(): MappingContext;
    interface DesignerHeaderDisplayData extends $D.Framework._DBO {
        Title: string;
        Path: string[];
    }
    function DesignerHeaderDisplayData(): DesignerHeaderDisplayData;
    interface RuleServiceNotification extends $D.Framework._DBO {
        RuleId: string;
        NotificationType: $D.Framework.Design.Flow.Service.RuleServiceNotificationType;
    }
    function RuleServiceNotification(): RuleServiceNotification;
    interface RuleOutputDisplayData extends $D.Framework._DBO {
        Index: number;
        DataDescriptionName: string;
        DataType: string;
        Value: string;
        MappingText: string;
        MappingType: string;
        IsList: boolean;
        DisplayName: string;
    }
    function RuleOutputDisplayData(): RuleOutputDisplayData;
}
declare module $D.Framework {
    interface ValidationIssue extends $D.Framework._DBO {
        SourceInfo: string;
        Reason: string;
        Details: string;
        IsIgnored: boolean;
        Level: $D.Framework.BreakLevel;
        ReferenceProperty: string;
        ValidationCode: number;
        IsBreakingIssue: boolean;
    }
    function ValidationIssue(): ValidationIssue;
    interface ModuleLicenseDetail extends $D.Framework._DBO {
        ModuleName: string;
        LicenseData: string;
        UserLimit: number;
        TransactionLimit: number;
    }
    function ModuleLicenseDetail(): ModuleLicenseDetail;
    interface AbstractTreeNode extends $D.Framework._DBO {
        Name: string;
        InstanceId: string;
        IsExpanded: boolean;
        IsSelected: boolean;
        HasChildren: boolean;
        Path: string;
        Children: $D.Framework.AbstractTreeNode[];
        Parent: $D.Framework.AbstractTreeNode;
    }
    function AbstractTreeNode(): AbstractTreeNode;
    interface LogCategorySetting extends $D.Framework._DBO {
        CategoryName: string;
        LogFatal: boolean;
        LogError: boolean;
        LogWarn: boolean;
        LogInfo: boolean;
        LogDebug: boolean;
        CategoryLevels: any[];
        LogToOwnFileName: boolean;
    }
    function LogCategorySetting(): LogCategorySetting;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Samples {
    interface OutputDataCoverage extends $D.Framework._DBO {
        Key: string;
        DisplayValues: string[];
        Count: number;
        Percent: number;
    }
    function OutputDataCoverage(): OutputDataCoverage;
}
declare module $D.Framework.ProjectConversion {
    interface ConversionResult extends $D.Framework._DBO {
        ErrorsOccured: boolean;
        Errors: string[];
        ConvertedFlows: string[];
        ConvertedForms: string[];
        ConvertedRules: string[];
        ConvertedSteps: string[];
        NewProjectId: string;
    }
    function ConversionResult(): ConversionResult;
    interface DataDefinition extends $D.Framework._DBO {
        Name: string;
        FullTypeName: string;
        CanBeNull: boolean;
        IsList: boolean;
    }
    function DataDefinition(): DataDefinition;
    interface ConvertedEnum extends $D.Framework._DBO {
        TypeId: string;
        Values: string[];
    }
    function ConvertedEnum(): ConvertedEnum;
    interface StepInput extends $D.Framework._DBO {
        Name: string;
        MappingType: $D.Framework.ProjectConversion.InputMappingType;
        SelectValuePathName: string;
        ConstantValue: string;
        FullTypeName: string;
        IsList: boolean;
        ExtraData: string;
        ArrayParts: $D.Framework.ProjectConversion.StepInput[];
    }
    function StepInput(): StepInput;
    interface ConvertedConnection extends $D.Framework._DBO {
        TargetStepId: string;
        SourceStepId: string;
        PathName: string;
        SourcePortNumberOnStep: number;
        TargetPortNumberOnStep: number;
    }
    function ConvertedConnection(): ConvertedConnection;
}
declare module $D.Framework.ProjectConversion.RuleImport {
    interface ConvertedStatementDataValue extends $D.Framework._DBO {
        ValueName: string;
        ValueType: $D.Framework.ProjectConversion.RuleImport.DataValueType;
        ValueData: string;
        ListValueData: string[];
    }
    function ConvertedStatementDataValue(): ConvertedStatementDataValue;
    interface ConvertedActionInputMapping extends $D.Framework._DBO {
        ValueType: $D.Framework.ProjectConversion.RuleImport.DataValueType;
        ValueData: string;
        ParameterName: string;
        ParameterTypeName: string;
    }
    function ConvertedActionInputMapping(): ConvertedActionInputMapping;
}
declare module $D.Framework.ComponentData {
    interface FormControlValidationIssue extends $D.Framework._DBO {
        BreakLevel: $D.Framework.BreakLevel;
        Message: string;
    }
    function FormControlValidationIssue(): FormControlValidationIssue;
}
declare module $D.Framework.Utilities {
    interface ThemeCss extends $D.Framework._DBO {
        Css: string;
        StartColor: string;
        StopColor: string;
    }
    function ThemeCss(): ThemeCss;
}
declare module $D.Framework.Utilities.Profiler {
    interface ProcessorUsage extends $D.Framework._DBO {
        When: Date;
        Value: number;
    }
    function ProcessorUsage(): ProcessorUsage;
    interface ProfilerDetail extends $D.Framework._DBO {
        DetailType: $D.Framework.Utilities.Profiler.ProfilerDetailType;
        Message: string;
        Count: number;
    }
    function ProfilerDetail(): ProfilerDetail;
    interface ProfileTime extends $D.Framework._DBO {
        Milliseconds: number;
        When: Date;
    }
    function ProfileTime(): ProfileTime;
    interface ProfileTypeData extends $D.Framework._DBO {
        TypeName: string;
        Count: number;
    }
    function ProfileTypeData(): ProfileTypeData;
    interface ProfileUserData extends $D.Framework._DBO {
        UserID: string;
        Count: number;
        UserTime: number;
    }
    function ProfileUserData(): ProfileUserData;
    interface FlowProfilingEndedMessage extends $D.Framework._DBO {
        FlowTrackingId: string;
    }
    function FlowProfilingEndedMessage(): FlowProfilingEndedMessage;
}
declare module $D.Framework.Utilities.Profiler.Heartbeat {
    interface HeartbeatData extends $D.Framework._DBO {
        AllocatedMemory: number;
        UsedMemory: number;
        CPUPercent: number;
        EventDate: Date;
        NumberOfFlowStarts: number;
        NumberOfFlowStepExecutions: number;
        NumberOfAPICalls: number;
        NumberOfRuleExecutions: number;
        NumberOfJobStarts: number;
        NumberOfThreadJobStarts: number;
        UserCount: number;
        AssignmentCount: any;
        StoredFlowCount: any;
        CaseCount: any;
        FlowExeExtensionCount: any;
        PlatformServerCount: any;
    }
    function HeartbeatData(): HeartbeatData;
}
declare module $D.Framework.Utilities.Profiler.Control {
    interface SummarizedProfileResult extends $D.Framework._DBO {
        Name: string;
        TypeName: string;
        Count: number;
        TimeWithChildren: number;
        TimeWithoutChildren: number;
        ObjectsCreatedWithChildren: number;
        ObjectsCreatedWithoutChildren: number;
    }
    function SummarizedProfileResult(): SummarizedProfileResult;
    interface ProfileResultsWrapper extends $D.Framework._DBO {
        Id: string;
        Name: string;
        SessionId: string;
    }
    function ProfileResultsWrapper(): ProfileResultsWrapper;
    interface ProfileUserDetails extends $D.Framework._DBO {
        UserId: string;
        ProfileName: string;
        UserCount: number;
        TotalUserTime: number;
    }
    function ProfileUserDetails(): ProfileUserDetails;
}
declare module $D.Framework.Utilities.Messaging {
    interface EntityActionInfo extends $D.Framework._DBO {
        FolderID: string;
        EntityClassName: string;
        EntityID: string;
        ActionID: string;
    }
    function EntityActionInfo(): EntityActionInfo;
}
declare module $D.Framework.Utilities.Logging {
    interface ClientSideMonitoringEntry extends $D.Framework._DBO {
        Timestamp: Date;
        Exception: string;
        Category: string;
        Details: string;
    }
    function ClientSideMonitoringEntry(): ClientSideMonitoringEntry;
}
declare module $D.Framework.Utilities.FrameworkUnitTests {
    interface FrameworkUnitTestResult extends $D.Framework._DBO {
        ID: string;
        Result: $D.Framework.Design.Flow.Service.Debugging.TestResult;
        ResultName: string;
        ClassName: string;
        MethodName: string;
        TimeTaken: number;
        TimeExpected: number;
        Notes: string;
        Details: string;
        RunWhen: Date;
        UnitTestType: $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestType;
    }
    function FrameworkUnitTestResult(): FrameworkUnitTestResult;
    interface RunningTestInfo extends $D.Framework._DBO {
        ClassName: string;
        TestCount: number;
        TestStart: Date;
        TestEnd: any;
    }
    function RunningTestInfo(): RunningTestInfo;
}
declare module $D.Framework.Utilities.CodeGeneration {
    interface CustomAttributeDefinition extends $D.Framework._DBO {
        Name: string;
        Arguments: string[];
    }
    function CustomAttributeDefinition(): CustomAttributeDefinition;
}
declare module $D.Framework.Data.ORMapper.Encryption {
    interface ReportKeyData extends $D.Framework._DBO {
        Name: string;
        AlgorithmName: string;
        Length: number;
        Check: string;
    }
    function ReportKeyData(): ReportKeyData;
}
declare module $D.Framework.Data.Messaging {
    interface MessageQueueMessage extends $D.Framework._DBO {
        Id: string;
        Sequence: number;
        Payload: number[];
        MessageDateTime: Date;
        ExpirationDateTime: any;
        StringPayload: string;
        MessageQueueName: string;
        MessageSource: string;
        Attribute1: string;
        Attribute2: string;
        Attribute3: string;
        Attribute4: string;
        Attribute5: string;
        LeaseId: string;
    }
    function MessageQueueMessage(): MessageQueueMessage;
}
declare module $D.Framework.Design {
    interface ElementUsageData extends $D.Framework._DBO {
        ToEntityId: string;
        Role: $D.Framework.Design.ElementUsageRole;
    }
    function ElementUsageData(): ElementUsageData;
    interface PortalNavigationMessage extends $D.Framework._DBO {
        FolderId: string;
        PageName: string;
    }
    function PortalNavigationMessage(): PortalNavigationMessage;
    interface StudioNavigationMessage extends $D.Framework._DBO {
        ElementId: string;
        ElementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
        SampleId: string;
    }
    function StudioNavigationMessage(): StudioNavigationMessage;
    interface EditDataStructureMessage extends $D.Framework._DBO {
        DataTypeFullName: string;
        EntityTypeName: string;
    }
    function EditDataStructureMessage(): EditDataStructureMessage;
    interface EditDesignPatternMessage extends $D.Framework._DBO {
        DesignPatternId: string;
    }
    function EditDesignPatternMessage(): EditDesignPatternMessage;
    interface ShortcutInfo extends $D.Framework._DBO {
        Control: boolean;
        Alt: boolean;
        Shift: boolean;
        KeyName: string;
    }
    function ShortcutInfo(): ShortcutInfo;
    interface ShowMessageBoxEvent extends $D.Framework._DBO {
        Title: string;
        Message: string;
    }
    function ShowMessageBoxEvent(): ShowMessageBoxEvent;
}
declare module $D.Framework.Design.WebHooks {
    interface HttpDataPair extends $D.Framework._DBO {
        Name: string;
        Value: string;
    }
    function HttpDataPair(): HttpDataPair;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface SubFolderInfo extends $D.Framework._DBO {
        FolderId: string;
        EntityName: string;
    }
    function SubFolderInfo(): SubFolderInfo;
    interface EntityTypeInfo extends $D.Framework._DBO {
        EntityTypeName: string;
        ExtensionTypeName: string;
    }
    function EntityTypeInfo(): EntityTypeInfo;
    interface FolderCountResults extends $D.Framework._DBO {
        Count: number;
        Important: boolean;
        FolderId: string;
    }
    function FolderCountResults(): FolderCountResults;
    interface EntityAction extends $D.Framework._DBO {
        EntityFolderId: string;
        EntityTypeName: string;
        EntityId: string;
        ActionUniqueName: string;
    }
    function EntityAction(): EntityAction;
    interface EntityTypeAndId extends $D.Framework._DBO {
        EntityTypeName: string;
        EntityId: string;
    }
    function EntityTypeAndId(): EntityTypeAndId;
    interface FolderSummary extends $D.Framework._DBO {
        DisplayName: string;
        DataTypeName: string;
        Count: number;
    }
    function FolderSummary(): FolderSummary;
    interface PlatformEntityData extends $D.Framework._DBO {
        Id: string;
        Name: string;
        Description: string;
        Type: string;
        ShortTypeName: string;
        EntityImageId: string;
        CreatedBy: string;
        ModifiedBy: string;
        CreatedOnDate: Date;
        ModifiedDate: Date;
        Hidden: boolean;
        State: string;
        FullPath: string;
        IconImageUrl: string;
    }
    function PlatformEntityData(): PlatformEntityData;
    interface ViewPageData extends $D.Framework._DBO {
        ViewPageName: string;
        Order: number;
        DisplayType: $D.Framework.ServiceLayer.Services.Folder.DisplayType[];
        MinimumResolutionThreshold: number;
        MaximumResolutionThreshold: number;
        ExcludeFromLockBehavior: boolean;
        BehaviorBelowMinimum: $D.Framework.ServiceLayer.Services.Folder.ResolutionBehavior;
        BehaviorAboveMaximum: $D.Framework.ServiceLayer.Services.Folder.ResolutionBehavior;
    }
    function ViewPageData(): ViewPageData;
    interface DefaultFolderReport extends $D.Framework._DBO {
        ReportId: string;
        Order: number;
        ReportName: string;
    }
    function DefaultFolderReport(): DefaultFolderReport;
    interface FolderNavigationPanel extends $D.Framework._DBO {
        NavigationPanelClassName: string;
        Width: number;
    }
    function FolderNavigationPanel(): FolderNavigationPanel;
    interface EntityIdentifier extends $D.Framework._DBO {
        Name: string;
        Id: string;
    }
    function EntityIdentifier(): EntityIdentifier;
    interface ElementRegistrationInfo extends $D.Framework._DBO {
        ElementRegistrationId: string;
        EntityName: string;
        ElementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[];
        EntityDescription: string;
    }
    function ElementRegistrationInfo(): ElementRegistrationInfo;
    interface DisplayPageContextInfo extends $D.Framework._DBO {
        Name: string;
        DisplayTypes: string[];
        PageId: string;
    }
    function DisplayPageContextInfo(): DisplayPageContextInfo;
    interface FolderEntitiesChangedNotification extends $D.Framework._DBO {
        FolderId: string;
        DeletedEntityIDs: string[];
        UpdatedEntityIDs: string[];
    }
    function FolderEntitiesChangedNotification(): FolderEntitiesChangedNotification;
    interface ElementRegistrationChanged extends $D.Framework._DBO {
        RegistrationId: string;
        Timestamp: number;
    }
    function ElementRegistrationChanged(): ElementRegistrationChanged;
    interface FolderMessage extends $D.Framework._DBO {
        FolderId: string;
        TreeStructureImpact: boolean;
        DoNotExpand: boolean;
    }
    function FolderMessage(): FolderMessage;
    interface PageContextInfo extends $D.Framework._DBO {
        Name: string;
        Description: string;
        TemplateId: string;
        ConfigurationStorageFolderId: string;
        DisplayTypes: string[];
    }
    function PageContextInfo(): PageContextInfo;
}
declare module $D.Framework.Design.Report {
    interface SpecifiedGroupAction extends $D.Framework._DBO {
        Category: string;
        SubCategory: string;
        Name: string;
        GroupActionName: string;
    }
    function SpecifiedGroupAction(): SpecifiedGroupAction;
    interface ColumnInfo extends $D.Framework._DBO {
        Name: string;
        IsCalculated: boolean;
    }
    function ColumnInfo(): ColumnInfo;
    interface EntityReportAction extends $D.Framework._DBO {
        EntityTypeName: string;
        EntityID: string;
        EntityImageId: string;
    }
    function EntityReportAction(): EntityReportAction;
    interface RefreshReportByFolderMessage extends $D.Framework.Design.Report.RefreshReportMessage {
        FolderId: string;
    }
    function RefreshReportByFolderMessage(): RefreshReportByFolderMessage;
    interface RefreshReportByKeysMessage extends $D.Framework.Design.Report.RefreshReportMessage {
        Keys: string[];
    }
    function RefreshReportByKeysMessage(): RefreshReportByKeysMessage;
    interface RefreshReportByFolderAndKeysMessage extends $D.Framework.Design.Report.RefreshReportMessage {
        FolderId: string;
        Keys: string[];
    }
    function RefreshReportByFolderAndKeysMessage(): RefreshReportByFolderAndKeysMessage;
    interface ReportGroupLevelInfo extends $D.Framework._DBO {
        Level: number;
        FontSize: number;
        IndentationLevel: number;
    }
    function ReportGroupLevelInfo(): ReportGroupLevelInfo;
    interface ReportImageData extends $D.Framework._DBO {
        SizeToFit: boolean;
        ImageUrl: string;
        Width: number;
        Height: number;
        Message: string;
    }
    function ReportImageData(): ReportImageData;
    interface ColumnData extends $D.Framework._DBO {
        Name: string;
        Width: number;
        Filter: string;
        ValueFormat: string;
    }
    function ColumnData(): ColumnData;
    interface FlowGroupAction extends $D.Framework._DBO {
        GroupActionFlow: string;
        GroupActionName: string;
        ShowUI: boolean;
    }
    function FlowGroupAction(): FlowGroupAction;
}
declare module $D.Framework.ServiceLayer.Services {
    interface FavoriteReturn extends $D.Framework._DBO {
        ReferenceId: string;
        ReferenceIdType: string;
        TypeOfFavorite: $D.Framework.ServiceLayer.Services.FavoriteReferenceType;
        Name: string;
        OrderNum: number;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        ShowOnMobile: boolean;
    }
    function FavoriteReturn(): FavoriteReturn;
}
declare module $D.Framework.Design.ToolboxFilter {
    interface FlowDataHolder extends $D.Framework._DBO {
        FlowId: string;
        FlowSessionId: string;
    }
    function FlowDataHolder(): FlowDataHolder;
    interface RuleDataHolder extends $D.Framework._DBO {
        RuleId: string;
        RuleSessionId: string;
    }
    function RuleDataHolder(): RuleDataHolder;
    interface ReportDataHolder extends $D.Framework._DBO {
        ReportId: string;
        ReportSessionId: string;
    }
    function ReportDataHolder(): ReportDataHolder;
}
declare module $D.Framework.Design.Properties.Help {
    interface PropertyDefinition extends $D.Framework._DBO {
        PropertyType: string;
        PropertyName: string;
        IsArray: boolean;
    }
    function PropertyDefinition(): PropertyDefinition;
}
declare module $D.Framework.Design.Text {
    interface DynamicTreeNode extends $D.Framework._DBO {
        Name: string;
        Path: string;
        HasDesignText: boolean;
    }
    function DynamicTreeNode(): DynamicTreeNode;
    interface MergeEditorNode extends $D.Framework._DBO {
        Name: string;
        Path: string;
        HasDesignText: boolean;
        DescriptionType: $D.Framework.Design.Text.MergeEditorNodeType;
    }
    function MergeEditorNode(): MergeEditorNode;
    interface TextMergeEvent extends $D.Framework._DBO {
        TextMergeId: string;
        ChangedPropertyName: string;
    }
    function TextMergeEvent(): TextMergeEvent;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface TemplateStyle extends $D.Framework._DBO {
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        MarginBottom: number;
    }
    function TemplateStyle(): TemplateStyle;
    interface TableSlotInfo extends $D.Framework._DBO {
        Index: number;
        NullValueBehavior: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableSlotBehavior;
        Height: any;
        Width: any;
        MinWidth: any;
        LengthType: $D.Framework.Design.Report.Matrix.IntersectionTemplate.LengthType;
    }
    function TableSlotInfo(): TableSlotInfo;
}
declare module $D.Framework.Design.Page.Layouts {
    interface ExportDimension extends $D.Framework._DBO {
        DimensionType: $D.Framework.Design.Page.Layouts.ExportDimensionType;
        Size: number;
    }
    function ExportDimension(): ExportDimension;
    interface ExportColor extends $D.Framework._DBO {
        A: number;
        R: number;
        G: number;
        B: number;
    }
    function ExportColor(): ExportColor;
    interface ExportFont extends $D.Framework._DBO {
        Name: string;
        Size: number;
        Bold: boolean;
        Italic: boolean;
        Underline: boolean;
    }
    function ExportFont(): ExportFont;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface RemoteEditableObject extends $D.Framework._DBO {
        ObjectContextID: string;
    }
    function RemoteEditableObject(): RemoteEditableObject;
    interface BaseReportViewReultData extends $D.Framework._DBO {
        ReportContextId: string;
        PageIndex: number;
        TotalPages: number;
        TotalRowsCount: number;
        UnknownPageCount: boolean;
        IsLastPage: boolean;
    }
    function BaseReportViewReultData(): BaseReportViewReultData;
    interface ReportViewerCellColorInfo extends $D.Framework._DBO {
        RowID: string;
        ColumnName: string;
        BackGroundColor: string;
        ForeGroundColor: string;
        BackGroundSelectedColor: string;
        ForeGroundSelectedColor: string;
        IconImageUrl: string;
        ImageId: string;
        OverrideFont: boolean;
        FontAttributes: string;
        CssClassName: string;
    }
    function ReportViewerCellColorInfo(): ReportViewerCellColorInfo;
    interface AggregationViewInfo extends $D.Framework._DBO {
        Label: string;
        Value: string;
    }
    function AggregationViewInfo(): AggregationViewInfo;
    interface ReportValidationInfo extends $D.Framework._DBO {
        FiltersAreValid: boolean;
        HasValidName: boolean;
        HasColumns: boolean;
        HasValidGeneratedDataType: boolean;
        HasValidSnapshotTypeName: boolean;
    }
    function ReportValidationInfo(): ReportValidationInfo;
    interface RuntimeFilterInfo extends $D.Framework._DBO {
        Name: string;
        Value: string;
        ColumnName: string;
    }
    function RuntimeFilterInfo(): RuntimeFilterInfo;
    interface ReportDisplayData extends $D.Framework._DBO {
        IntegrationType: $D.Framework.Design.IntegrationType;
        ServiceDataFormat: $D.Framework.Design.ServiceDataFormat;
        ServiceReferenceType: $D.Framework.Design.ServiceReferenceType;
    }
    function ReportDisplayData(): ReportDisplayData;
    interface BaseReportContext extends $D.Framework._DBO {
        ReportContextID: string;
        InstanceContextId: string;
    }
    function BaseReportContext(): BaseReportContext;
    interface ReportElementInfo extends $D.Framework._DBO {
        EntityFolderId: string;
        ElementRegistrationID: string;
        Name: string;
        Description: string;
        IsUsed: boolean;
        ElementType: $D.Framework.Design.Report.Service.Comunication.ReportElementType;
        FilterContextID: string;
        FieldName: string;
        TableName: string;
    }
    function ReportElementInfo(): ReportElementInfo;
    interface ReportClientData extends $D.Framework._DBO {
        GroupedCols: string[];
        SummaryMergeData: string;
        TextMergeData: string;
        BlurbMergeData: string;
        CalendarMergeData: string;
        ShowDataView: boolean;
        ShowMatrixView: boolean;
        ShowRowSummaryView: boolean;
        ShowBlurbSummaryView: boolean;
        ShowTextSummaryView: boolean;
        ShowCalendarSummaryView: boolean;
        ShowCellSummaryView: boolean;
        ShowTileView: boolean;
        CanAddChartView: boolean;
        CanAddMatrixView: boolean;
        CanAddRowSummaryView: boolean;
        CanAddBlurbSummaryView: boolean;
        CanAddTextSummaryView: boolean;
        CanAddCalendarSummaryView: boolean;
        CanAddCellSummaryView: boolean;
        CanAddTileView: boolean;
        ShowHierarchicalView: boolean;
        ShowColumnsView: boolean;
        AutoRefreshPreview: boolean;
    }
    function ReportClientData(): ReportClientData;
    interface ReportPropertyData extends $D.Framework._DBO {
        EnableSnapshot: boolean;
        GenerateRunApi: boolean;
        GeneratedReportApiName: string;
        GenerateRunStep: boolean;
        SpecifyOutputTypeName: boolean;
        GeneratedDataTypeName: string;
        UsePaging: boolean;
        RowsPerPage: number;
        Order: $D.Framework.Data.ORMapper.ORMResultOrder;
        OrderByField: string;
        TakeSnapshotOnSchedule: boolean;
        SnapshotScheduleStartImmediately: boolean;
        SnapshotScheduleStartOn: Date;
        SnapshotScheduleHours: number;
        SnapshotScheduleMinutes: number;
        SnapshotScheduleDays: number;
    }
    function ReportPropertyData(): ReportPropertyData;
    interface ReportInfo extends $D.Framework._DBO {
        Name: string;
        Description: string;
        ElementRegistrationID: string;
    }
    function ReportInfo(): ReportInfo;
    interface ReportForTree extends $D.Framework._DBO {
        Id: string;
        Name: string;
        IsReport: boolean;
        IsSnapshot: boolean;
        IsFavorite: boolean;
        IsDefault: boolean;
        Children: $D.Framework.Design.Report.Service.Comunication.ReportForTree[];
        IsUserView: boolean;
        ViewSourceFolderId: string;
        ViewSourceId: string;
    }
    function ReportForTree(): ReportForTree;
    interface ReportSummary extends $D.Framework._DBO {
        TotalRows: number;
        HistoricalValue: number;
    }
    function ReportSummary(): ReportSummary;
    interface GroupedColumnChanged extends $D.Framework._DBO {
        ReportContextId: string;
        OldGroupedColumns: string[];
        NewGroupedColumns: string[];
    }
    function GroupedColumnChanged(): GroupedColumnChanged;
    interface ReportPropertyChanged extends $D.Framework._DBO {
        ReportContextId: string;
        PropertyName: string;
    }
    function ReportPropertyChanged(): ReportPropertyChanged;
    interface ReportPreviewDataChanged extends $D.Framework._DBO {
        ReportContextId: string;
        RemoteContextId: string;
    }
    function ReportPreviewDataChanged(): ReportPreviewDataChanged;
    interface ReportFieldAdded extends $D.Framework._DBO {
        ReportContextId: string;
        DataSource: string;
        FieldName: string;
        FieldTitle: string;
        ObjectContextId: string;
        ColumnContextId: string;
    }
    function ReportFieldAdded(): ReportFieldAdded;
    interface ReportFieldRemoved extends $D.Framework._DBO {
        ReportContextId: string;
        DataSource: string;
        FieldName: string;
        FieldContextId: string;
    }
    function ReportFieldRemoved(): ReportFieldRemoved;
    interface ReportFieldsRemoved extends $D.Framework._DBO {
        ReportContextId: string;
        DataSource: string;
        FieldsName: string[];
        FieldsContextId: string[];
    }
    function ReportFieldsRemoved(): ReportFieldsRemoved;
    interface ColumnPropertyChanged extends $D.Framework._DBO {
        ReportContextId: string;
        ColumnContextId: string;
        PropertyName: string;
        Title: string;
    }
    function ColumnPropertyChanged(): ColumnPropertyChanged;
    interface ColumnDefinitionChanged extends $D.Framework._DBO {
        ReportContextId: string;
        ColumnContextId: string;
    }
    function ColumnDefinitionChanged(): ColumnDefinitionChanged;
    interface CalculatedColumnPropertyChanged extends $D.Framework._DBO {
        ReportContextId: string;
        ObjectContextId: string;
        Title: string;
    }
    function CalculatedColumnPropertyChanged(): CalculatedColumnPropertyChanged;
    interface ReportFilterAdded extends $D.Framework._DBO {
        ReportContextId: string;
    }
    function ReportFilterAdded(): ReportFilterAdded;
    interface FilterPropertyChanged extends $D.Framework._DBO {
        ReportContextId: string;
        FilterContextId: string;
        PropertyName: string;
    }
    function FilterPropertyChanged(): FilterPropertyChanged;
    interface FilterNameChanged extends $D.Framework._DBO {
        ReportContextId: string;
        FilterContextId: string;
        Name: string;
    }
    function FilterNameChanged(): FilterNameChanged;
    interface ReportReportFieldsUpdated extends $D.Framework._DBO {
        ReportContextId: string;
    }
    function ReportReportFieldsUpdated(): ReportReportFieldsUpdated;
    interface ReportMatrixDefinitionChanged extends $D.Framework._DBO {
        ReportContextId: string;
    }
    function ReportMatrixDefinitionChanged(): ReportMatrixDefinitionChanged;
    interface SortedColumnChanged extends $D.Framework._DBO {
        ReportContextId: string;
        OldSortedColumns: string[];
        NewSortedColumns: string[];
    }
    function SortedColumnChanged(): SortedColumnChanged;
}
declare module $D.Framework.Design.Page {
    interface PrintContext extends $D.Framework._DBO {
        PageNumber: number;
        FolderId: string;
        RegistrationId: string;
        ReportContextId: string;
        SelectedView: string;
        TemplateId: string;
        ExportType: $D.Framework.Design.Page.PrintContextType;
        PageOrientation: any;
        PageSize: any;
        RuntimeData: any;
    }
    function PrintContext(): PrintContext;
    interface PrintPageNotificationEntity extends $D.Framework._DBO {
        Url: string;
    }
    function PrintPageNotificationEntity(): PrintPageNotificationEntity;
    interface RefreshPageMessage extends $D.Framework._DBO {
        PageId: string;
        FolderId: string;
    }
    function RefreshPageMessage(): RefreshPageMessage;
}
declare module $D.Framework.Design.Page.Personalization {
    interface PersonalizationScopeDef extends $D.Framework._DBO {
        Scope: $D.Framework.Design.Page.Personalization.PersonalizationScope;
        UserScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope;
    }
    function PersonalizationScopeDef(): PersonalizationScopeDef;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface ReportDateRange extends $D.Framework._DBO {
        FromDate: Date;
        NumberOfDays: number;
        DateRange: $D.Framework.Design.Flow.CoreSteps.Metro.DateRangeTypes;
        RollingDateRangeType: $D.Framework.Design.Flow.CoreSteps.Metro.RollingDateRangeType;
        RollingDateRangeTimePeriodType: $D.Framework.Design.Flow.CoreSteps.Metro.RollingDateRangeTimePeriodType;
        RollingPeriod: number;
    }
    function ReportDateRange(): ReportDateRange;
    interface IconSettings extends $D.Framework._DBO {
        Text: string;
        Width: number;
        Height: number;
        VerticalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileVerticalAlign;
        HorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
    }
    function IconSettings(): IconSettings;
    interface TileMetricReturn extends $D.Framework._DBO {
        MetricName: $D.Framework.ServiceLayer.Services.Statistics.MetricDisplayType;
        MetricValue: string;
    }
    function TileMetricReturn(): TileMetricReturn;
}
declare module $D.Framework.Design.EntityActions {
    interface AddEntityFolderEditObject extends $D.Framework._DBO {
        TypeName: string;
        FolderId: string;
        AvailableEntityTypes: string[];
    }
    function AddEntityFolderEditObject(): AddEntityFolderEditObject;
    interface AccessPatternEditObject extends $D.Framework._DBO {
        AccessStepName: string;
        Fields: string[];
    }
    function AccessPatternEditObject(): AccessPatternEditObject;
    interface AddFlowExecutionActionEditObject extends $D.Framework._DBO {
        TypeName: string;
        FolderId: string;
        FlowExecutionExtensionActionList: string[];
    }
    function AddFlowExecutionActionEditObject(): AddFlowExecutionActionEditObject;
    interface AddFolderBehaviorFolderEditObject extends $D.Framework._DBO {
        TypeName: string;
        FolderId: string;
        FolderBehaviorsList: string[];
    }
    function AddFolderBehaviorFolderEditObject(): AddFolderBehaviorFolderEditObject;
}
declare module $D.Framework.Design.Flow {
    interface FlowServiceGenerateNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function FlowServiceGenerateNotification(): FlowServiceGenerateNotification;
    interface RuleServiceGenerateNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function RuleServiceGenerateNotification(): RuleServiceGenerateNotification;
    interface ReportServiceGenerateNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function ReportServiceGenerateNotification(): ReportServiceGenerateNotification;
    interface FlowSwimlaneInfo extends $D.Framework._DBO {
        HeaderStepId: string;
        StartPosition: number;
        EndPosition: number;
        SwimlaneId: string;
        BackgroundColor: string;
        HeaderLabel: string;
        Offset: number;
        Index: number;
        Size: number;
        Length: number;
        Deleted: boolean;
    }
    function FlowSwimlaneInfo(): FlowSwimlaneInfo;
    interface InstructionWaitingEvent extends $D.Framework._DBO {
        FlowTrackingId: string;
    }
    function InstructionWaitingEvent(): InstructionWaitingEvent;
    interface InlineMapping extends $D.Framework._DBO {
        Value: string;
        EditorType: string;
        MappingText: string;
        MappingType: string;
        MappingTypes: string[];
    }
    function InlineMapping(): InlineMapping;
    interface TruthTableSearch extends $D.Framework._DBO {
        SearchText: string;
        ColumnName: string;
    }
    function TruthTableSearch(): TruthTableSearch;
    interface TruthTableSort extends $D.Framework._DBO {
        ColumnName: string;
        Order: $D.Framework.Design.Flow.Order;
    }
    function TruthTableSort(): TruthTableSort;
    interface FlowDisplayDataUpdate extends $D.Framework._DBO {
        ShowInputsPrompt: boolean;
    }
    function FlowDisplayDataUpdate(): FlowDisplayDataUpdate;
    interface StepCreationInfo extends $D.Framework._DBO {
        DefaultName: string;
        AnchorDataName: string;
        AnchorDataOutputPath: string;
        AnchorDataOutcomeName: string;
        AnchorDataPath: string;
        LinkFromStepId: string;
        LinkFromStepPath: string;
        PrependPathToStepName: boolean;
        TargetTypeName: string;
    }
    function StepCreationInfo(): StepCreationInfo;
    interface FlowStepPositionInfo extends $D.Framework._DBO {
        StepId: string;
        X: number;
        Y: number;
        Width: number;
        Height: number;
    }
    function FlowStepPositionInfo(): FlowStepPositionInfo;
    interface PreviousStepInformation extends $D.Framework._DBO {
        StepId: string;
        StepName: string;
        OutboundPath: string;
        HasOutcomeData: boolean;
    }
    function PreviousStepInformation(): PreviousStepInformation;
    interface StepDataInformation extends $D.Framework._DBO {
        MappingType: $D.Framework.Design.Flow.StepDataInformationType;
        DataPath: string;
        StepId: string;
    }
    function StepDataInformation(): StepDataInformation;
    interface FlowCompareData extends $D.Framework._DBO {
        FlowEntityId: string;
        EntityType: $D.Framework.Design.Flow.FlowCompareDataEntityType;
        CompareResult: $D.Framework.Design.Flow.FlowCompareResult;
        Info: string;
    }
    function FlowCompareData(): FlowCompareData;
    interface StepConnectionWaypointData extends $D.Framework._DBO {
        X: number;
        Y: number;
    }
    function StepConnectionWaypointData(): StepConnectionWaypointData;
    interface StepConnectionCreationInfo extends $D.Framework._DBO {
        ConnectClosestPorts: boolean;
    }
    function StepConnectionCreationInfo(): StepConnectionCreationInfo;
    interface StepChangedEvent extends $D.Framework._DBO {
        StepId: string;
    }
    function StepChangedEvent(): StepChangedEvent;
}
declare module $D.Framework.Design.Properties {
    interface EditorInformation extends $D.Framework._DBO {
        EditorClassName: string;
        MvcEditorClassName: string;
        MvcEditorGroupName: string;
        EditorType: $D.Framework.Design.Properties.ObjectEditorType;
        Name: string;
        Description: string;
        ShowInPropertyGrid: boolean;
    }
    function EditorInformation(): EditorInformation;
    interface ContextNode extends $D.Framework._DBO {
        Name: string;
        Index: number;
    }
    function ContextNode(): ContextNode;
    interface BooleanArrayEditorFacade extends $D.Framework._DBO {
        BooleanValue: boolean;
    }
    function BooleanArrayEditorFacade(): BooleanArrayEditorFacade;
    interface ParseDateTimeResult extends $D.Framework._DBO {
        IsValidInput: boolean;
        Value: Date;
        IsParsedExactly: boolean;
    }
    function ParseDateTimeResult(): ParseDateTimeResult;
    interface PropertyEditorInformation extends $D.Framework._DBO {
        EditorClassName: string;
        PropertyPath: string[];
        PropertyName: string;
        PropertyIndex: any;
    }
    function PropertyEditorInformation(): PropertyEditorInformation;
    interface RefreshPropertyGridEvent extends $D.Framework._DBO {
        ContextId: string;
    }
    function RefreshPropertyGridEvent(): RefreshPropertyGridEvent;
}
declare module $D.Framework.Design.Flow.RuleAction {
    interface RuleActionTypeInfo extends $D.Framework._DBO {
        Title: string;
        Category: string;
        TypeName: string;
    }
    function RuleActionTypeInfo(): RuleActionTypeInfo;
}
declare module $D.Framework.Design.Flow.Mapping.SelectValue {
    interface ConverterDto extends $D.Framework._DBO {
        Name: string;
        FromType: string;
        ToType: string;
    }
    function ConverterDto(): ConverterDto;
    interface SubProperty extends $D.Framework._DBO {
        Title: string;
        Name: string;
        IsDynamic: boolean;
        FormattedTypeName: string;
        IsEnum: boolean;
        IsArray: boolean;
        IsSuitableType: any;
        ResolvedValue: string;
    }
    function SubProperty(): SubProperty;
}
declare module $D.Framework.ServiceLayer.Services.Portal {
    interface BasicPortalSetupInfo extends $D.Framework._DBO {
        CurrentCulture: string;
        LanguageName: string;
        AccountName: string;
        DefineNumberFormat: boolean;
        NumberGroupSeparator: string;
        NumberOfDecimalDigits: number;
        ThemeName: string;
        ThemeTimestamp: string;
        AccountTimeStamp: string;
        PortalSettingsTimeStamp: string;
        TimeFormat: $D.Framework.ServiceLayer.Services.Portal.TimeFormats;
        DateFormat: $D.Framework.ServiceLayer.Services.Portal.DateFormats;
        AutoSubmitEditorValue: boolean;
        AutoSubmitEditorOnFirstType: boolean;
        AutoSubmitEditorOnClear: boolean;
        AutoSubmitInterval: number;
        AllowAutoAdd: boolean;
        ShowContactOrder: boolean;
        ShowDeveloperLevelErrors: boolean;
        NotificationTimeout: string;
        NotificationItemsTimeout: string;
        Slogan: string;
        Logo: number[];
        BrowserWebPageName: string;
    }
    function BasicPortalSetupInfo(): BasicPortalSetupInfo;
    interface ServicePointManagerSettings extends $D.Framework._DBO {
        OutboundConnectionLimitWarningText: string;
        OverrideSettings: boolean;
        DefaultConnectionLimit: number;
        UseNagleAlgorithm: boolean;
    }
    function ServicePointManagerSettings(): ServicePointManagerSettings;
    interface ThreadPoolSettings extends $D.Framework._DBO {
        WarningText: string;
        OverrideSettings: boolean;
        OverrideThreadPoolMinimumValues: boolean;
        MinimumWorkerThreadCount: number;
        MinimumCompletionPortThreadCount: number;
        OverrideThreadPoolMaximumValues: boolean;
        MaximumWorkerThreadCount: number;
        MaximumCompletionPortThreadCount: number;
    }
    function ThreadPoolSettings(): ThreadPoolSettings;
    interface PopUpFolderPage extends $D.Framework._DBO {
        FolderID: string;
        PageName: string;
    }
    function PopUpFolderPage(): PopUpFolderPage;
    interface DecisionsSettingInfo extends $D.Framework._DBO {
        PortalBaseURL: string;
        EMailServerAddress: string;
        EmailRequiresAuthentication: boolean;
        EmailUsername: string;
        EmailUseSSL: boolean;
        EmailPort: number;
        ByPassSmtpServer: boolean;
        ServerName: string;
        FileStorageLocation: string;
        UseLuceneFullTextSearch: boolean;
        UseTimeZoneTranslation: boolean;
        ServerType: $D.Framework.ServiceLayer.Utilities.ServerType;
        CurrentDatabase: string;
        DatabaseType: string;
        HideSystemValidationWarning: boolean;
    }
    function DecisionsSettingInfo(): DecisionsSettingInfo;
    interface UserCultureInfo extends $D.Framework._DBO {
        Name: string;
        DisplayName: string;
    }
    function UserCultureInfo(): UserCultureInfo;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface PreloadFormInformation extends $D.Framework._DBO {
        FormId: string;
        TimeStamp: any;
    }
    function PreloadFormInformation(): PreloadFormInformation;
    interface AbstractResultState extends $D.Framework._DBO {
        ResultDate: Date;
    }
    function AbstractResultState(): AbstractResultState;
    interface ProfileFlowDataEvent extends $D.Framework._DBO {
        FlowTrackingId: string;
        StepTrackingId: string;
        InstructionTypeName: string;
        ExceptionMessage: string;
    }
    function ProfileFlowDataEvent(): ProfileFlowDataEvent;
}
declare module $D.Framework.Design.Form {
    interface FormExecutionData extends $D.Framework._DBO {
        FormId: string;
        InputFlowId: string;
        OutputFlowId: string;
        CurrentFolderId: string;
        PageContextid: string;
    }
    function FormExecutionData(): FormExecutionData;
    interface FormCloseData extends $D.Framework._DBO {
        PageContextid: string;
        FlowTrackingId: string;
        StepTrackingId: string;
        KeepFormSessionTemporary: boolean;
    }
    function FormCloseData(): FormCloseData;
    interface ActionsForPageToolboxHeader extends $D.Framework.Design.Form.ActionsForFormToolboxHeader {
    }
    function ActionsForPageToolboxHeader(): ActionsForPageToolboxHeader;
    interface FormComponentInfo extends $D.Framework._DBO {
        ComponentId: string;
        ParentId: string;
        Left: number;
        Top: number;
        Width: number;
        Height: number;
        Row: number;
        RowSpan: number;
        Column: number;
        ColSpan: number;
        AnchorPoint: $D.Framework.Design.Form.CreationAnchorPoint;
        IsNewRow: boolean;
        PanelIndex: number;
        TabId: string;
    }
    function FormComponentInfo(): FormComponentInfo;
    interface FormComponentInstanceInfo extends $D.Framework._DBO {
        Width: number;
        Height: number;
    }
    function FormComponentInstanceInfo(): FormComponentInstanceInfo;
    interface ResizeInfo extends $D.Framework._DBO {
        ExpandType: $D.Framework.Design.Form.ExpandType;
        ResizeDirection: $D.Framework.Design.Form.ResizeDirection;
    }
    function ResizeInfo(): ResizeInfo;
    interface FormElementTabInfo extends $D.Framework._DBO {
        ComponentId: string;
        TabOrder: number;
    }
    function FormElementTabInfo(): FormElementTabInfo;
    interface FormServiceToolboxNotification extends $D.Framework._DBO {
        FormSessionId: string;
    }
    function FormServiceToolboxNotification(): FormServiceToolboxNotification;
    interface RunRuleSessionInfo extends $D.Framework._DBO {
        ComponentId: string;
        SurfaceId: string;
        RuleIds: string[];
        TriggeredByComponentId: string;
        FormTriggerType: any;
    }
    function RunRuleSessionInfo(): RunRuleSessionInfo;
    interface SurfaceComponentInfo extends $D.Framework._DBO {
        ComponentId: string;
        SurfaceId: string;
        ComponentProviderId: string;
    }
    function SurfaceComponentInfo(): SurfaceComponentInfo;
    interface DecisionsFormInfoServerEvent extends $D.Framework._DBO {
        ParentComponentId: string;
        SurfaceId: string;
    }
    function DecisionsFormInfoServerEvent(): DecisionsFormInfoServerEvent;
    interface DecisionsValidationIssue extends $D.Framework._DBO {
        BreakLevel: $D.Framework.BreakLevel;
        Message: string;
        ForData: string;
        ValidationType: $D.Framework.Design.Form.DecisionsValidationIssueType;
        RuleID: string;
    }
    function DecisionsValidationIssue(): DecisionsValidationIssue;
}
declare module $D.Framework.Design.Flow.CoreSteps {
    interface CSVRowData extends $D.Framework._DBO {
        Field01: string;
        Field02: string;
        Field03: string;
        Field04: string;
        Field05: string;
        Field06: string;
        Field07: string;
        Field08: string;
        Field09: string;
        Field10: string;
        Field11: string;
        Field12: string;
        Field13: string;
        Field14: string;
        Field15: string;
        Field16: string;
        Field17: string;
        Field18: string;
        Field19: string;
        Field20: string;
        Field21: string;
        Field22: string;
        Field23: string;
        Field24: string;
        Field25: string;
        Field26: string;
        Field27: string;
        Field28: string;
        Field29: string;
        Field30: string;
        Field31: string;
        Field32: string;
        Field33: string;
        Field34: string;
        Field35: string;
        Field36: string;
        Field37: string;
        Field38: string;
        Field39: string;
        Field40: string;
        Field41: string;
        Field42: string;
        Field43: string;
        Field44: string;
        Field45: string;
        Field46: string;
        Field47: string;
        Field48: string;
        Field49: string;
    }
    function CSVRowData(): CSVRowData;
}
declare module $D.Framework.Design.Flow.CoreSteps.Word {
    interface WordSectionData extends $D.Framework._DBO {
        SectionNumber: number;
        Header: string;
        Footer: string;
    }
    function WordSectionData(): WordSectionData;
    interface DocumentPhrase extends $D.Framework._DBO {
        Name: string;
        Text: string;
    }
    function DocumentPhrase(): DocumentPhrase;
}
declare module $D.Framework.Design.Flow.CoreSteps.Tile {
    interface CssDocumentInfo extends $D.Framework._DBO {
        DocumentName: string;
        ModifiedDate: Date;
    }
    function CssDocumentInfo(): CssDocumentInfo;
}
declare module $D.Framework.Design.Flow.CoreSteps.SFtp {
    interface FTPFileInfo extends $D.Framework._DBO {
        Name: string;
        IsFile: boolean;
        IsDirectory: boolean;
        Created: Date;
        Modified: Date;
        Size: number;
    }
    function FTPFileInfo(): FTPFileInfo;
}
declare module $D.Framework.Design.Flow.CoreSteps.Google {
    interface GoogleGeoCoordinate extends $D.Framework._DBO {
        Longitude: number;
        Latitude: number;
        FormatedAddress: string;
    }
    function GoogleGeoCoordinate(): GoogleGeoCoordinate;
}
declare module $D.Framework.Design.Flow.CoreSteps.Excel {
    interface ExcelFooterData extends $D.Framework.Design.Flow.CoreSteps.Excel.ExcelHeaderFooterData {
    }
    function ExcelFooterData(): ExcelFooterData;
    interface ExcelHeaderData extends $D.Framework.Design.Flow.CoreSteps.Excel.ExcelHeaderFooterData {
    }
    function ExcelHeaderData(): ExcelHeaderData;
    interface ExcelWorksheetHeadersFooters extends $D.Framework.Design.Flow.CoreSteps.Excel.ExcelWorkbookHeadersFooters {
        WorksheetIndex: number;
    }
    function ExcelWorksheetHeadersFooters(): ExcelWorksheetHeadersFooters;
}
declare module $D.Framework.Design.Flow.CoreSteps.EMail {
    interface EmailHeader extends $D.Framework._DBO {
        CC: $D.Framework.Design.Flow.CoreSteps.EMail.EmailAddress[];
        Date: $D.Framework.Design.Flow.CoreSteps.EMail.EmailDateTime;
        From: $D.Framework.Design.Flow.CoreSteps.EMail.EmailAddress[];
        ReplyTo: $D.Framework.Design.Flow.CoreSteps.EMail.EmailAddress[];
        Sender: $D.Framework.Design.Flow.CoreSteps.EMail.EmailAddress;
        UniqueId: string;
        Subject: string;
        To: $D.Framework.Design.Flow.CoreSteps.EMail.EmailAddress[];
        HasAttachments: boolean;
        DisplayDate: Date;
        DisplayTo: string;
        DisplayCC: string;
        DisplaySender: string;
        DisplayFrom: string;
        DisplayReplyTo: string;
    }
    function EmailHeader(): EmailHeader;
}
declare module $D.Framework.Design.DataStructure {
    interface OriginalNamePair extends $D.Framework._DBO {
        PropertyName: string;
        OriginalName: string;
    }
    function OriginalNamePair(): OriginalNamePair;
    interface DataTypeInfo extends $D.Framework._DBO {
        ClassName: string;
        IsORMReady: boolean;
        CanBeSuperClass: boolean;
        IsSimpleType: boolean;
    }
    function DataTypeInfo(): DataTypeInfo;
    interface ContainedDataInfo extends $D.Framework._DBO {
        TypeName: string;
        IsList: boolean;
        RelationshipName: string;
        CanBeNull: boolean;
    }
    function ContainedDataInfo(): ContainedDataInfo;
}
declare module $D.Framework.Design.Flow.CoreSteps.DataBase {
    interface QueryParameters extends $D.Framework._DBO {
        MatchCriteria: $D.Framework.Data.ORMapper.QueryMatchType;
        FieldName: string;
        Alias: string;
    }
    function QueryParameters(): QueryParameters;
}
declare module $D.Framework.Design.Flow.CoreSteps.StandardSteps {
    interface ExcelSheetInfo extends $D.Framework._DBO {
        Name: string;
        Password: string;
    }
    function ExcelSheetInfo(): ExcelSheetInfo;
    interface HistoricalStepInformation extends $D.Framework._DBO {
        StepTrackingId: string;
        ExecutedOn: any;
        Name: string;
    }
    function HistoricalStepInformation(): HistoricalStepInformation;
    interface FlowStepData extends $D.Framework._DBO {
        StepId: string;
        StepName: string;
        GroupId: string;
        StepTypeName: string;
        Description: string;
        Order: number;
    }
    function FlowStepData(): FlowStepData;
    interface NetworkedFileConnectionSettings extends $D.Framework._DBO {
        ServerIPOrDNS: string;
        DomainPrefixForUserName: string;
        UserName: string;
        Password: string;
    }
    function NetworkedFileConnectionSettings(): NetworkedFileConnectionSettings;
    interface NumberRange extends $D.Framework._DBO {
        RangeName: string;
        LowValue: number;
        HighValue: number;
        IncludeEqual: boolean;
    }
    function NumberRange(): NumberRange;
    interface PageRange extends $D.Framework._DBO {
        Type: $D.Framework.Design.Flow.CoreSteps.StandardSteps.PageRangeType;
        StartPageOrSinglePage: any;
        EndPage: any;
    }
    function PageRange(): PageRange;
    interface RegexCapture extends $D.Framework._DBO {
        Value: string;
        Index: number;
        Length: number;
    }
    function RegexCapture(): RegexCapture;
    interface StringListResult extends $D.Framework._DBO {
        ResultData: string[];
    }
    function StringListResult(): StringListResult;
}
declare module $D.Framework.Design.Flow.Annotations {
    interface FlowAnnotation extends $D.Framework._DBO {
        Id: string;
        Name: string;
    }
    function FlowAnnotation(): FlowAnnotation;
    interface SegmentData extends $D.Framework._DBO {
        Label: string;
        Value: number;
        Emphasized: boolean;
    }
    function SegmentData(): SegmentData;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface FlowInfo extends $D.Framework._DBO {
        FlowID: string;
        StartNewFlow: $D.Framework.Design.Flow.StartFlowOption;
        PromptMessage: string;
        PromptButtonName: string;
        ShowOpenPortalButton: boolean;
    }
    function FlowInfo(): FlowInfo;
    interface BaseIterationFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter {
    }
    function BaseIterationFilter(): BaseIterationFilter;
    interface IntersectFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter {
        FilterList: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter[];
    }
    function IntersectFilter(): IntersectFilter;
    interface UnionFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter {
        FilterList: $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseElementRegistrationFilter[];
    }
    function UnionFilter(): UnionFilter;
    interface NewRegistrationFactory extends $D.Framework._DBO {
        Name: string;
        HasItems: boolean;
        Order: number;
    }
    function NewRegistrationFactory(): NewRegistrationFactory;
    interface NewRegistrationResult extends $D.Framework._DBO {
        RegistrationType: string;
        RegistrationId: string;
    }
    function NewRegistrationResult(): NewRegistrationResult;
    interface ElementContextInfo extends $D.Framework._DBO {
        Name: string;
        BasedOn: $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementBasedOn;
        BehaviorType: string;
        TemplateId: string;
        ElementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
        SubElementType: string;
        FolderId: string;
    }
    function ElementContextInfo(): ElementContextInfo;
    interface DesignerFolderFilter extends $D.Framework._DBO {
        SearchText: string;
        ElementTypes: string[];
        Tags: string[];
    }
    function DesignerFolderFilter(): DesignerFolderFilter;
    interface ElementForTree extends $D.Framework._DBO {
        Id: string;
        Name: string;
        IsElement: boolean;
        IsFavorite: boolean;
        Children: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementForTree[];
    }
    function ElementForTree(): ElementForTree;
    interface DefaultHeaderData extends $D.Framework._DBO {
        Name: string;
        Description: string;
        Enabled: boolean;
    }
    function DefaultHeaderData(): DefaultHeaderData;
    interface UserCustomPageInfo extends $D.Framework._DBO {
        ElementConfigurationId: string;
        OriginalElementConfigurationId: string;
        ContentLength: number;
        LastUpdate: Date;
    }
    function UserCustomPageInfo(): UserCustomPageInfo;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface SessionDesignerInfo extends $D.Framework._DBO {
        Name: string;
        Description: string;
        OwnerEmail: string;
    }
    function SessionDesignerInfo(): SessionDesignerInfo;
    interface SimilarRule extends $D.Framework._DBO {
        DisplayName: string;
        RuleId: string;
    }
    function SimilarRule(): SimilarRule;
    interface ArrayEditingContext extends $D.Framework._DBO {
        ContextId: string;
        Path: string[];
        Index: any;
    }
    function ArrayEditingContext(): ArrayEditingContext;
    interface MatrixRuleInformation extends $D.Framework._DBO {
        LeftFlowId: string;
        TopFlowId: string;
        RuleType: $D.Framework.Design.Flow.Service.Edit.MatrixRuleType;
        RuleReturnType: string;
    }
    function MatrixRuleInformation(): MatrixRuleInformation;
}
declare module $D.Framework.Design.Flow.Service.Debugging.DebugData {
    interface AbstractRuleProgressData extends $D.Framework._DBO {
        Index: number;
        Start: Date;
    }
    function AbstractRuleProgressData(): AbstractRuleProgressData;
    interface RuleStepEvaluation extends $D.Framework._DBO {
        Anchor: string;
        Verb: string;
        Values: string;
        WithNot: boolean;
        RowId: string;
        BeyondThePath: boolean;
        Result: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
    }
    function RuleStepEvaluation(): RuleStepEvaluation;
    interface FlowStepProgressData extends $D.Framework._DBO {
        Index: number;
        StepId: string;
        StepTrackingId: string;
        StepDebuggingId: string;
    }
    function FlowStepProgressData(): FlowStepProgressData;
    interface DebugDataInfo extends $D.Framework._DBO {
        DebugDataId: string;
        EntityType: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataRootType;
        EntityId: string;
        TrackingId: string;
    }
    function DebugDataInfo(): DebugDataInfo;
    interface DebugInputsDataItem extends $D.Framework._DBO {
        Name: string;
        ValueText: string;
    }
    function DebugInputsDataItem(): DebugInputsDataItem;
    interface DebugOutputsDataItem extends $D.Framework._DBO {
        Path: string;
        Name: string;
        ValueText: string;
    }
    function DebugOutputsDataItem(): DebugOutputsDataItem;
    interface DebugAggregationDataItem extends $D.Framework._DBO {
        StepTypeName: string;
        TotalExecutions: number;
        TotalTime: string;
    }
    function DebugAggregationDataItem(): DebugAggregationDataItem;
    interface DebugTreeUpdateEvent extends $D.Framework._DBO {
        ChildId: string;
        Info: string;
        End: any;
        Events: number;
        HasErrors: boolean;
        IsIgnoredRun: boolean;
    }
    function DebugTreeUpdateEvent(): DebugTreeUpdateEvent;
    interface GlobalDebuggerStateEvent extends $D.Framework._DBO {
        GlobalDebuggerState: any;
        CacheTimeout: any;
        GroupingStyle: any;
    }
    function GlobalDebuggerStateEvent(): GlobalDebuggerStateEvent;
    interface DebugTreeNodeRemovedEvent extends $D.Framework._DBO {
        RootNodeIds: string[];
    }
    function DebugTreeNodeRemovedEvent(): DebugTreeNodeRemovedEvent;
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    interface DataMatchRuleDataDefinition extends $D.Framework._DBO {
        TypeName: string;
        IsList: boolean;
        Name: string;
    }
    function DataMatchRuleDataDefinition(): DataMatchRuleDataDefinition;
    interface RuleParameter extends $D.Framework._DBO {
        Name: string;
        DataTypeName: string;
        IsList: boolean;
    }
    function RuleParameter(): RuleParameter;
    interface TruthTableSpecifiedResult extends $D.Framework._DBO {
        RuleStepId: string;
        Name: string;
        Value: string;
    }
    function TruthTableSpecifiedResult(): TruthTableSpecifiedResult;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData {
    interface DiagramView extends $D.Framework._DBO {
        Left: number;
        Top: number;
        Width: number;
        Height: number;
        ZIndex: number;
    }
    function DiagramView(): DiagramView;
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    interface FlowDebugEvent extends $D.Framework._DBO {
        EventTime: Date;
        FlowTrackingID: string;
        FullFlowTrackingID: string;
        FlowID: string;
    }
    function FlowDebugEvent(): FlowDebugEvent;
    interface FlowPauseInfo extends $D.Framework._DBO {
        StepName: string;
        StepID: string;
        FlowName: string;
        FlowID: string;
        FlowStepTrackingID: string;
    }
    function FlowPauseInfo(): FlowPauseInfo;
    interface DataDescriptionDisplay extends $D.Framework._DBO {
        FlowName: string;
        Name: string;
        ValueDescription: string;
        ElementsContained: number;
        IsArray: boolean;
    }
    function DataDescriptionDisplay(): DataDescriptionDisplay;
    interface UnitTestBreak extends $D.Framework._DBO {
        BreakMessage: string;
    }
    function UnitTestBreak(): UnitTestBreak;
    interface InitializeDebugStartData extends $D.Framework._DBO {
        ShowRememberToRecents: boolean;
    }
    function InitializeDebugStartData(): InitializeDebugStartData;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Events {
    interface Outcome extends $D.Framework._DBO {
        OutcomeName: string;
        OutcomeData: string;
    }
    function Outcome(): Outcome;
    interface MatrixRuleDebugEvent extends $D.Framework._DBO {
        EventTime: Date;
        MatrixRuleTrackingId: string;
        MatrixRuleId: string;
    }
    function MatrixRuleDebugEvent(): MatrixRuleDebugEvent;
    interface RuleDebugEvent extends $D.Framework._DBO {
        EventTime: Date;
        RuleTrackingId: string;
        RuleId: string;
    }
    function RuleDebugEvent(): RuleDebugEvent;
}
declare module $D.Framework.Design.DataStructure.CaseEditor {
    interface PropertyDto extends $D.Framework._DBO {
        Name: string;
        FullTypeName: string;
        FriendlyTypeName: string;
        IsList: boolean;
    }
    function PropertyDto(): PropertyDto;
    interface StateStepDto extends $D.Framework._DBO {
        Id: string;
        Name: string;
        Order: number;
        FlowBehaviorType: string;
        OrmTypeName: string;
        EntityFolderID: string;
        StateName: string;
    }
    function StateStepDto(): StateStepDto;
    interface CreateStateActionDto extends $D.Framework._DBO {
        Name: string;
    }
    function CreateStateActionDto(): CreateStateActionDto;
    interface DeleteStateStepEvent extends $D.Framework._DBO {
        StepId: string;
    }
    function DeleteStateStepEvent(): DeleteStateStepEvent;
}
declare module $D.Framework.Design.Charts {
    interface ChartTextStyle extends $D.Framework._DBO {
        FontSize: number;
        FontWeight: string;
        transForm: string;
    }
    function ChartTextStyle(): ChartTextStyle;
    interface AxisOptions extends $D.Framework._DBO {
        Visible: boolean;
        autoMin: boolean;
        autoMax: boolean;
        min: number;
        max: number;
        autoMajor: boolean;
        unitMajor: number;
    }
    function AxisOptions(): AxisOptions;
    interface MixedBarProps extends $D.Framework._DBO {
        LineKey: string;
        AreaKey: string;
    }
    function MixedBarProps(): MixedBarProps;
    interface ChartEntryMetadata extends $D.Framework._DBO {
        Key: string;
        BackingDataTypeName: string;
        LabelText: string;
        Color: string;
        Visible: boolean;
        SortIndex: number;
        Type: $D.Framework.Design.Charts.ChartMetadataType;
        Behavior: $D.Framework.Design.Charts.ChartMetadataBehavior;
        Grouped: $D.Framework.Design.Charts.ChartEntryMetadata[];
    }
    function ChartEntryMetadata(): ChartEntryMetadata;
    interface ChartDatum extends $D.Framework._DBO {
        Label: string;
        DisplayLabel: string;
        Value: number;
        Navigable: boolean;
        ColorString: string;
        IntersectionDataKey: string;
        Title: string;
        RowName: string;
        ColumnName: string;
        ColorOpacity: number;
    }
    function ChartDatum(): ChartDatum;
}
declare module $D.Framework.Design.Report.Tiles {
    interface Tile extends $D.Framework._DBO {
        Id: string;
        Name: string;
        SortDescription: string;
        TileDataList: any;
    }
    function Tile(): Tile;
    interface TileIconImageInfo extends $D.Framework._DBO {
        ImageId: string;
        IconUrl: string;
    }
    function TileIconImageInfo(): TileIconImageInfo;
    interface TileData extends $D.Framework._DBO {
        Name: string;
        Title: string;
        Count: number;
        Data: any;
        Image: number[];
        TileDataType: $D.Framework.Design.Report.Tiles.TileDataType;
        Rows: any;
    }
    function TileData(): TileData;
}
declare module $D.Framework.Design.Report.Matrix {
    interface AbstractDimension extends $D.Framework._DBO {
        Id: string;
        IsHidden: boolean;
        FieldName: string;
        DimensionTitle: string;
        Child: $D.Framework.Design.Report.Matrix.AbstractDimension;
        DimensionTypeName: string;
        TotalDimension: boolean;
        TotalFieldName: string;
        TotalNamingOption: $D.Framework.Design.Report.Matrix.Dimensions.SummaryDimensionNameOption;
        ComputePercentageDimension: boolean;
        PercentFieldName: string;
        PercentCalculationType: $D.Framework.Design.Report.Matrix.PercentCalculationType;
        PercentFormatString: string;
        PercentNamingOption: $D.Framework.Design.Report.Matrix.Dimensions.SummaryDimensionNameOption;
        SortMethod: $D.Framework.Design.Report.SortOrder;
        FormatAboveValue: boolean;
        BoldAboveValue: boolean;
        ColorAboveValue: number;
        BackgroundColorAboveValue: number;
        ItalicsAboveValue: boolean;
        FormatBelowValue: boolean;
        BoldBelowValue: boolean;
        ColorBelowValue: number;
        BackgroundColorBelowValue: number;
        ItalicsBelowValue: boolean;
        NumberFormatString: string;
    }
    function AbstractDimension(): AbstractDimension;
    interface DataDimension extends $D.Framework._DBO {
        Id: string;
        CellValueFormat: string;
        Name: string;
        Parent: $D.Framework.Design.Report.Matrix.DataDimension;
        Children: any;
        DimensionType: $D.Framework.Design.Report.Matrix.DataDimensionType;
        DimensionId: string;
        IsHidden: boolean;
    }
    function DataDimension(): DataDimension;
    interface PercentConfig extends $D.Framework._DBO {
        PercentFieldName: string;
        PercentCalculationType: $D.Framework.Design.Report.Matrix.PercentCalculationType;
        PercentNamingOption: $D.Framework.Design.Report.Matrix.Dimensions.SummaryDimensionNameOption;
        PercentFormatString: string;
    }
    function PercentConfig(): PercentConfig;
    interface TotalConfig extends $D.Framework._DBO {
        TotalFieldName: string;
        TotalNamingOption: $D.Framework.Design.Report.Matrix.Dimensions.SummaryDimensionNameOption;
    }
    function TotalConfig(): TotalConfig;
}
declare module $D.Framework.Design.Report.Matrix.Dimensions {
    interface AgingSummary extends $D.Framework._DBO {
        TimeOffset: string;
        Direction: $D.Framework.Design.Report.Matrix.Dimensions.AgingSummaryDirection;
        Label: string;
    }
    function AgingSummary(): AgingSummary;
    interface NumericRangeSummary extends $D.Framework._DBO {
        End: number;
        Label: string;
    }
    function NumericRangeSummary(): NumericRangeSummary;
    interface SummarizedValueData extends $D.Framework._DBO {
        Id: string;
        SummaryName: string;
        Values: string[];
        IncludeNulls: boolean;
    }
    function SummarizedValueData(): SummarizedValueData;
    interface ValueTranslation extends $D.Framework._DBO {
        FromValue: string;
        StringToValue: string;
    }
    function ValueTranslation(): ValueTranslation;
}
declare module $D.Framework.Design.Report.InlineFields {
    interface InlineField extends $D.Framework._DBO {
        Name: string;
        ObjectContextId: string;
    }
    function InlineField(): InlineField;
    interface IntervalDescription extends $D.Framework._DBO {
        From: string;
        SpecifyTo: boolean;
        To: string;
        Description: string;
    }
    function IntervalDescription(): IntervalDescription;
}
declare module $D.Framework.Design.Report.Service {
    interface ReportDefinitionChangedMessage extends $D.Framework._DBO {
        ReportId: string;
        ReportContextId: string;
    }
    function ReportDefinitionChangedMessage(): ReportDefinitionChangedMessage;
}
declare module $D.Framework.Design.Report.Service.Utils {
    interface ReportViewContextInfo extends $D.Framework._DBO {
        ContextId: string;
        ReportId: string;
        ReportName: string;
        FolderId: string;
        Email: string;
        IsAlive: boolean;
        RowsInMemory: number;
        RowsInStorage: number;
        MinRows: number;
        MaxRows: number;
        ReportRowSizeInfo: string;
        Created: any;
        Released: any;
    }
    function ReportViewContextInfo(): ReportViewContextInfo;
}
declare module $D.Framework.Design.Properties.Attributes {
    interface DesignerCornerRadiusFacade extends $D.Framework._DBO {
        UseUniformValue: boolean;
        UniformValue: number;
        TopLeft: number;
        TopRight: number;
        BottomRight: number;
        BottomLeft: number;
    }
    function DesignerCornerRadiusFacade(): DesignerCornerRadiusFacade;
    interface DateTimeFacadeForDateTimeArray extends $D.Framework._DBO {
        DateTime: Date;
    }
    function DateTimeFacadeForDateTimeArray(): DateTimeFacadeForDateTimeArray;
    interface FormTagFacade extends $D.Framework._DBO {
        Tag: string;
        TagNote: string;
    }
    function FormTagFacade(): FormTagFacade;
    interface DesignerThicknessFacade extends $D.Framework._DBO {
        UseUniformValue: boolean;
        UniformValue: number;
        Left: number;
        Top: number;
        Right: number;
        Bottom: number;
    }
    function DesignerThicknessFacade(): DesignerThicknessFacade;
    interface TimeSpanArrayEditorFacade extends $D.Framework._DBO {
        TimeSpanValue: string;
    }
    function TimeSpanArrayEditorFacade(): TimeSpanArrayEditorFacade;
}
declare module $D.Framework.ServiceLayer {
    interface InstanceParameters extends $D.Framework._DBO {
        InstanceId: string;
        SocketsPort: number;
        AppDomainName: string;
        BaseDirectory: string;
        DatabaseConnectString: string;
        TypeOfInstance: $D.Framework.ServiceLayer.Utilities.InstanceType;
        LogToDirectory: string;
        VirtualDirectory: string;
        BaseEndpointsPort: number;
        InstanceBaseUrl: string;
        ORMEncryptionAlgorithm: $D.Framework.SymetricalCryptographyTypes;
        ORMEncryptionKeyLength: number;
    }
    function InstanceParameters(): InstanceParameters;
    interface OutcomeScenario extends $D.Framework._DBO {
        OutcomePath: string;
        OutcomeType: $D.Framework.ServiceLayer.OutcomeType;
    }
    function OutcomeScenario(): OutcomeScenario;
}
declare module $D.Framework.ServiceLayer.Utilities.SystemValidation {
    interface SystemValidationIssue extends $D.Framework._DBO {
        Id: string;
        EntityTypeName: string;
        Name: string;
        Details: string;
        ValidationItemType: string;
    }
    function SystemValidationIssue(): SystemValidationIssue;
}
declare module $D.Framework.ServiceLayer.Containers {
    interface ContainerErrors extends $D.Framework._DBO {
        FlowId: string;
        WorkQueueName: string;
        ErrorType: string;
        ErrorMessage: string;
        ErrorTrace: string;
        ErrorDateTime: Date;
    }
    function ContainerErrors(): ContainerErrors;
}
declare module $D.Framework.ServiceLayer.Agent {
    interface AgentInstructionsRequest extends $D.Framework._DBO {
        AgentId: string;
        CESessionId: string;
        ConnectedPort: number;
        LiveConnectionWorking: boolean;
        CheckinDate: Date;
        IPAddy: string;
    }
    function AgentInstructionsRequest(): AgentInstructionsRequest;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface ActionSelectionItem extends $D.Framework._DBO {
        Id: string;
        DisplayText: string;
    }
    function ActionSelectionItem(): ActionSelectionItem;
    interface TitleAndDescription extends $D.Framework._DBO {
        Title: string;
        Description: string;
    }
    function TitleAndDescription(): TitleAndDescription;
    interface MergeEditorNode extends $D.Framework._DBO {
        Name: string;
        Index: number;
    }
    function MergeEditorNode(): MergeEditorNode;
    interface FolderEntityData extends $D.Framework._DBO {
        InvokedEntityType: string;
        InvokedEntityExtensionType: string;
        PickEntityType: string;
        PickEntityExtensionType: string;
        PickEntityID: string;
        PickEntityName: string;
    }
    function FolderEntityData(): FolderEntityData;
    interface EntityBrowseData extends $D.Framework._DBO {
        EntityID: string;
        EntityType: string;
        EntityName: string;
        DataCollection: any;
    }
    function EntityBrowseData(): EntityBrowseData;
    interface EditDescription extends $D.Framework._DBO {
        Description: string;
    }
    function EditDescription(): EditDescription;
}
declare module $D.Framework.ServiceLayer.Services.FileReference {
    interface FileReference extends $D.Framework._DBO {
        Id: string;
        FileName: string;
        Size: number;
        FileDateTime: Date;
    }
    function FileReference(): FileReference;
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    interface ReorderItemKeyValuePair extends $D.Framework._DBO {
        Key: string;
        Value: string;
    }
    function ReorderItemKeyValuePair(): ReorderItemKeyValuePair;
    interface ServiceCatalogChangedEvent extends $D.Framework._DBO {
        CatalogId: string;
    }
    function ServiceCatalogChangedEvent(): ServiceCatalogChangedEvent;
}
declare module $D.Framework.ServiceLayer.Services.UnitTesting {
    interface SearchResultItem extends $D.Framework._DBO {
        DisplayName: string;
        Id: string;
    }
    function SearchResultItem(): SearchResultItem;
    interface UnitTestResult extends $D.Framework._DBO {
        ResultType: $D.Framework.Design.Flow.Service.Debugging.TestResult;
        UnitTestName: string;
        UnitTestId: string;
        TargetName: string;
        TargetId: string;
        ExceptionDetails: string;
        ExecutionTime: number;
        IsFlow: boolean;
        LastExecutedOn: Date;
        State: string;
    }
    function UnitTestResult(): UnitTestResult;
}
declare module $D.Framework.ServiceLayer.Services.Twitter {
    interface TweetContributor extends $D.Framework._DBO {
        id: number;
        id_str: string;
        screen_name: string;
    }
    function TweetContributor(): TweetContributor;
    interface TweetCoordinates extends $D.Framework._DBO {
        coordinates: number[];
        type: string;
    }
    function TweetCoordinates(): TweetCoordinates;
    interface TweetUser extends $D.Framework._DBO {
        contributors_enabled: boolean;
        created_at: string;
        default_profile: boolean;
        default_profile_image: boolean;
        description: string;
    }
    function TweetUser(): TweetUser;
}
declare module $D.Framework.ServiceLayer.Services.Translation {
    interface AccountLanguageChangedEvent extends $D.Framework._DBO {
        AccountName: string;
        Language: string;
    }
    function AccountLanguageChangedEvent(): AccountLanguageChangedEvent;
    interface HelpEvent extends $D.Framework._DBO {
        Key: string;
        EventType: $D.Framework.ServiceLayer.Services.Translation.HelpEventType;
    }
    function HelpEvent(): HelpEvent;
    interface TranslationData extends $D.Framework._DBO {
        FromString: string;
        TranslatedString: string;
        NotTranslated: boolean;
        IgnoreCase: boolean;
        Tags: string[];
    }
    function TranslationData(): TranslationData;
    interface LanguageTranslationChangedEvent extends $D.Framework._DBO {
        Language: string;
    }
    function LanguageTranslationChangedEvent(): LanguageTranslationChangedEvent;
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    interface ThemeBrush extends $D.Framework._DBO {
        Category: string;
        Control: string;
        Property: string;
        Color: string;
        Gradient: string;
    }
    function ThemeBrush(): ThemeBrush;
    interface ThemeColor extends $D.Framework._DBO {
        Name: string;
        Color: string;
        OriginalColor: string;
    }
    function ThemeColor(): ThemeColor;
    interface ThemeGradientBreak extends $D.Framework._DBO {
        Offset: number;
        Color: string;
    }
    function ThemeGradientBreak(): ThemeGradientBreak;
    interface ThemeFont extends $D.Framework._DBO {
        Name: string;
        FontName: string;
        Size: number;
        Bold: boolean;
        Italic: boolean;
        Stretch: string;
    }
    function ThemeFont(): ThemeFont;
    interface ThemeImage extends $D.Framework._DBO {
        Name: string;
        Id: string;
    }
    function ThemeImage(): ThemeImage;
    interface ThemeDefault extends $D.Framework._DBO {
        Name: string;
        Value: number;
    }
    function ThemeDefault(): ThemeDefault;
    interface ThemeNameAndId extends $D.Framework._DBO {
        Name: string;
        Id: string;
        LastModifiedOn: Date;
    }
    function ThemeNameAndId(): ThemeNameAndId;
    interface ThemeCssData extends $D.Framework._DBO {
        FilePath: string;
        CssData: string;
    }
    function ThemeCssData(): ThemeCssData;
}
declare module $D.Framework.ServiceLayer.Services.Theme.ThemeEdit {
    interface ThemeVariableNode extends $D.Framework._DBO {
        FullName: string;
        Value: string;
        DefinedValue: string;
        IsPicked: boolean;
        IsImported: boolean;
        ImportedFrom: string;
        IsChanged: boolean;
        Type: $D.Framework.ServiceLayer.Services.Theme.ThemeVariableType;
        Name: string;
    }
    function ThemeVariableNode(): ThemeVariableNode;
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    interface TagSummary extends $D.Framework._DBO {
        Name: string;
        Number: number;
    }
    function TagSummary(): TagSummary;
    interface TagEvent extends $D.Framework._DBO {
        Tag: string;
        EventType: $D.Framework.ServiceLayer.Services.Tagging.TagEventType;
    }
    function TagEvent(): TagEvent;
    interface EntityTagChangedEvent extends $D.Framework._DBO {
        EntityID: string;
    }
    function EntityTagChangedEvent(): EntityTagChangedEvent;
    interface TagForTree extends $D.Framework._DBO {
        Id: string;
        Name: string;
        IsTag: boolean;
        Children: $D.Framework.ServiceLayer.Services.Tagging.TagForTree[];
    }
    function TagForTree(): TagForTree;
}
declare module $D.Framework.ServiceLayer.Services.Support {
    interface DatabaseHealthTableData extends $D.Framework._DBO {
        TableName: string;
        SizeInMB: number;
        RowCount: number;
    }
    function DatabaseHealthTableData(): DatabaseHealthTableData;
    interface FSUnitHealth extends $D.Framework._DBO {
        Name: string;
        FreeSpaceMB: number;
        PercFree: number;
    }
    function FSUnitHealth(): FSUnitHealth;
    interface SupportChatTicket extends $D.Framework._DBO {
        TicketDetails: string;
        Submitter: string;
        Version: string;
        PortalBaseURL: string;
        LicenseType: string;
    }
    function SupportChatTicket(): SupportChatTicket;
}
declare module $D.Framework.ServiceLayer.Services.Session {
    interface LogoutUserEvent extends $D.Framework._DBO {
        SessionId: string;
    }
    function LogoutUserEvent(): LogoutUserEvent;
    interface AdditionalSessionData extends $D.Framework._DBO {
        SessionId: string;
        NoTimeTranslate: boolean;
        MachineName: string;
        Os: string;
        UserLineFeedType: $D.Framework.Design.Flow.CoreSteps.StandardSteps.LineFeedType;
        UserCulture: string;
        ActionType: $D.Framework.ServiceLayer.Actions.EntityActionType[];
    }
    function AdditionalSessionData(): AdditionalSessionData;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    interface BindingDefinition extends $D.Framework._DBO {
        MaxReceivedMessageSize: number;
        MaxArrayLength: number;
        ReceiveTimeout: string;
        SendTimeout: string;
        MaxStringContentLength: number;
    }
    function BindingDefinition(): BindingDefinition;
    interface InstalledService extends $D.Framework._DBO {
        ContractName: string;
        InstanceTypeName: string;
        StartPolicy: $D.Framework.ServiceLayer.Utilities.StartPolicy;
    }
    function InstalledService(): InstalledService;
    interface MethodType extends $D.Framework._DBO {
        TypeName: string;
        IsComplex: boolean;
        FullTypeName: string;
    }
    function MethodType(): MethodType;
    interface IntegrationModel extends $D.Framework._DBO {
        CredentialType: $D.Framework.ServiceLayer.Services.ServiceManagement.CredentialType;
        UserID: string;
        Password: string;
        NamedSessionId: string;
        AuthParamInUrl: boolean;
        SessionId: string;
        OutputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType;
    }
    function IntegrationModel(): IntegrationModel;
}
declare module $D.Framework.ServiceLayer.Services.ServiceInformation {
    interface ServiceParameterInformation extends $D.Framework._DBO {
        ShortTypeName: string;
        FullTypeName: string;
        ParameterName: string;
        IsDecisionsType: boolean;
    }
    function ServiceParameterInformation(): ServiceParameterInformation;
    interface TypeIntegrationStructure extends $D.Framework._DBO {
        SerializedString: string;
        SchemaStructureString: string;
    }
    function TypeIntegrationStructure(): TypeIntegrationStructure;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface HostingServerInfo extends $D.Framework._DBO {
        FullMemorySize: number;
        FreeMemorySize: number;
        FullDiskSize: number;
        FreeDiskSize: number;
    }
    function HostingServerInfo(): HostingServerInfo;
    interface PlatformServerSettings extends $D.Framework._DBO {
        CanBeJobServer: boolean;
        JobServerOrder: number;
        RunAllQueues: boolean;
        WorkQueues: string[];
        WorkQueueWorker: string;
    }
    function PlatformServerSettings(): PlatformServerSettings;
    interface DistributedInstanceSettings extends $D.Framework._DBO {
        EnableStatisticalTracking: boolean;
        EnableClustering: boolean;
        WorkQueueWorker: string;
        IgnoreAllCertificateErrors: boolean;
    }
    function DistributedInstanceSettings(): DistributedInstanceSettings;
    interface InstanceDatabaseBackupNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function InstanceDatabaseBackupNotification(): InstanceDatabaseBackupNotification;
    interface InstanceStartedNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function InstanceStartedNotification(): InstanceStartedNotification;
    interface InstanceFailedNotification extends $D.Framework._DBO {
        EntityID: string;
    }
    function InstanceFailedNotification(): InstanceFailedNotification;
    interface ServerConfiguration extends $D.Framework._DBO {
        IsMultiInstances: boolean;
        CanRegisterUser: boolean;
        HttpEndpointPort: number;
        HttpsEndpointPort: number;
        ShowRememberMe: boolean;
        Title: string;
        AutoSignIn: boolean;
        USEChromeSSO: boolean;
        ContactUsURL: string;
        HelpURL: string;
        NewsFeed: string;
        ShowUnhandledExceptionDialog: boolean;
        ServerName: string;
        ClientStorageQuota: number;
        DefaultAdministratorEmailAddress: string;
        IsUsingDefaultCredentials: boolean;
        VirtualDirectory: string;
        EnableGuestAccount: boolean;
        HideForgotPassword: boolean;
        InstanceNames: string[];
        DefaultInstanceName: string;
        LocallyAddressableIISWebsiteIPOrDNSName: string;
        SSOEnabled: boolean;
        SSOHandlerTypeName: string;
        ServerType: $D.Framework.ServiceLayer.Utilities.ServerType;
        CustomSelfRegistrationURL: string;
        IsClusteringModeOn: boolean;
        StudioBaseUrl: string;
        PlatformServerId: string;
        WebClientSecurityOption: string;
        UseTimeZoneTranslation: boolean;
    }
    function ServerConfiguration(): ServerConfiguration;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Sync {
    interface SyncOptions extends $D.Framework._DBO {
        Type: string;
        ID: string;
        SyncType: $D.Framework.ServiceLayer.Services.ServerManagement.Sync.SyncType;
        InitiatedByInstanceId: string;
    }
    function SyncOptions(): SyncOptions;
}
declare module $D.Framework.ServiceLayer.Services.Scheduling {
    interface CalculationResult extends $D.Framework._DBO {
        StartDate: Date;
        EndDate: Date;
        Schedulers: string;
        ScheduleFolderName: string;
    }
    function CalculationResult(): CalculationResult;
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob {
    interface ResetIntervalEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
    }
    function ResetIntervalEvent(): ResetIntervalEvent;
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    interface RelationIdentifier extends $D.Framework._DBO {
        RelationId: string;
        Name: string;
        Description: string;
    }
    function RelationIdentifier(): RelationIdentifier;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface AddressChangedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
        AddressID: string;
    }
    function AddressChangedEvent(): AddressChangedEvent;
    interface PhoneChangedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
        PhoneID: string;
    }
    function PhoneChangedEvent(): PhoneChangedEvent;
    interface EmailAddressChangedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
        EmailAddressID: string;
    }
    function EmailAddressChangedEvent(): EmailAddressChangedEvent;
    interface InstantMessengerChangedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
        InstantMessengerID: string;
    }
    function InstantMessengerChangedEvent(): InstantMessengerChangedEvent;
    interface OtherContactChangedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
        OtherContactID: string;
    }
    function OtherContactChangedEvent(): OtherContactChangedEvent;
    interface ContactDetailAutoAddedEvent extends $D.Framework.ServiceLayer.Services.Organization.ContactInfoChangedEvent {
    }
    function ContactDetailAutoAddedEvent(): ContactDetailAutoAddedEvent;
}
declare module $D.Framework.ServiceLayer.Services.OAuth2 {
    interface OAuth2AuthorizationResponse extends $D.Framework._DBO {
        Code: string;
        State: string;
        IsError: boolean;
        Error: string;
        ErrorDescription: string;
        ErrorUri: any;
    }
    function OAuth2AuthorizationResponse(): OAuth2AuthorizationResponse;
    interface OAuth2TokenResponse extends $D.Framework._DBO {
        Token: string;
        Exprires: Date;
    }
    function OAuth2TokenResponse(): OAuth2TokenResponse;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface EmailNotificationHandler extends $D.Framework.ServiceLayer.Services.Notifications.BaseNotificationHandler {
        ToEmail: string;
        EmailTemplateId: string;
        ResponseUrlLinkName: string;
    }
    function EmailNotificationHandler(): EmailNotificationHandler;
    interface PopUpNotificationHandler extends $D.Framework.ServiceLayer.Services.Notifications.BaseNotificationHandler {
        AccountId: string;
    }
    function PopUpNotificationHandler(): PopUpNotificationHandler;
    interface NotificationTypeData extends $D.Framework._DBO {
        FlowId: string;
    }
    function NotificationTypeData(): NotificationTypeData;
    interface SMSNotificationHandler extends $D.Framework.ServiceLayer.Services.Notifications.BaseNotificationHandler {
        AsEmail: boolean;
        ToEmail: string;
    }
    function SMSNotificationHandler(): SMSNotificationHandler;
}
declare module $D.Framework.ServiceLayer.Services.NativeMobilePortal {
    interface NativePortalPage extends $D.Framework._DBO {
        PageId: string;
        PageName: string;
        PageURL: string;
    }
    function NativePortalPage(): NativePortalPage;
    interface WorkflowCatalogItem extends $D.Framework._DBO {
        Name: string;
        URL: string;
        IconURL: string;
    }
    function WorkflowCatalogItem(): WorkflowCatalogItem;
    interface WorkflowTask extends $D.Framework._DBO {
        TaskID: string;
        TaskName: string;
        TaskURL: string;
    }
    function WorkflowTask(): WorkflowTask;
}
declare module $D.Framework.ServiceLayer.Services.Logging {
    interface LogEntry extends $D.Framework._DBO {
        Id: string;
        CategoryNumber: number;
        Category: string;
        MachineName: string;
        Exception: string;
        Message: string;
        Source: string;
        TimeStamp: Date;
        UserName: string;
        Severity: $D.Framework.LogSeverity;
        ProfilerStackLocation: string;
        JsonLogMessage: string;
    }
    function LogEntry(): LogEntry;
}
declare module $D.Framework.ServiceLayer.Services.Groups {
    interface GroupIdentifier extends $D.Framework._DBO {
        Name: string;
        Id: string;
    }
    function GroupIdentifier(): GroupIdentifier;
}
declare module $D.Framework.ServiceLayer.Services.EntityDetails {
    interface DetailsHistory extends $D.Framework._DBO {
        ModifiedBy: string;
        ModifiedDate: string;
    }
    function DetailsHistory(): DetailsHistory;
    interface EntityDetailsViewData extends $D.Framework._DBO {
        ViewId: string;
    }
    function EntityDetailsViewData(): EntityDetailsViewData;
}
declare module $D.Framework.ServiceLayer.Services.DesignerRepository.Client {
    interface RepositoryAccount extends $D.Framework._DBO {
        EmailAddress: string;
        FirstName: string;
        LastName: string;
    }
    function RepositoryAccount(): RepositoryAccount;
}
declare module $D.Framework.ServiceLayer.Services.DBQuery {
    interface ConnectionString extends $D.Framework._DBO {
        Id: string;
        Label: string;
        IsDefault: boolean;
        DBType: $D.Framework.ServiceLayer.DataBaseTypeEnum;
    }
    function ConnectionString(): ConnectionString;
    interface DatabaseQueryDto extends $D.Framework._DBO {
        Id: string;
        Script: string;
        EntityFolderID: string;
        EntityName: string;
        ConnectionStringId: string;
    }
    function DatabaseQueryDto(): DatabaseQueryDto;
    interface Field extends $D.Framework._DBO {
        Name: string;
        Type: string;
    }
    function Field(): Field;
    interface RunQueryParams extends $D.Framework._DBO {
        ConnectionStringId: string;
        QueryText: string;
        Slow: boolean;
    }
    function RunQueryParams(): RunQueryParams;
    interface PageInfo extends $D.Framework._DBO {
        PageNumber: number;
        PageSize: number;
        TotalItems: number;
        TotalPages: number;
    }
    function PageInfo(): PageInfo;
    interface SqlQuery extends $D.Framework._DBO {
        Id: string;
        SqlText: string;
        QueryStatus: $D.Framework.ServiceLayer.Services.DBQuery.Status;
        Stats: any;
        Data: any[][];
        Columns: string[];
        Error: string;
    }
    function SqlQuery(): SqlQuery;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions {
    interface ParameterDefinition extends $D.Framework._DBO {
        DBTypeName: string;
        TypeName: string;
        Name: string;
        IsNullable: boolean;
        IsQuoted: boolean;
    }
    function ParameterDefinition(): ParameterDefinition;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface QueryParameterEditor extends $D.Framework._DBO {
        ParameterType: $D.Framework.ServiceLayer.Services.DatabaseIntegration.QueryParameterType;
        MaximumSize: number;
        Name: string;
        Value: string;
    }
    function QueryParameterEditor(): QueryParameterEditor;
    interface DatabaseTableAccessDefinition extends $D.Framework._DBO {
        Name: string;
        FieldNames: string[];
    }
    function DatabaseTableAccessDefinition(): DatabaseTableAccessDefinition;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.FlowSteps {
    interface TransactionData extends $D.Framework._DBO {
        CommitUnresolvedTransactions: boolean;
        TransactionName: string;
    }
    function TransactionData(): TransactionData;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.Comunication {
    interface DefinitionSaved extends $D.Framework._DBO {
        DatabaseId: string;
        DefinitionType: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices.Comunication.DefinitionType;
        ErrorMessage: string;
        IsSuccsess: boolean;
    }
    function DefinitionSaved(): DefinitionSaved;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.ConnectionContext {
    interface DatabaseConnectionInfo extends $D.Framework._DBO {
        ConnectionString: string;
    }
    function DatabaseConnectionInfo(): DatabaseConnectionInfo;
}
declare module $D.Framework.ServiceLayer.Services.CodeBucket {
    interface RestartControlInstanceEntity extends $D.Framework._DBO {
        EntityID: string;
    }
    function RestartControlInstanceEntity(): RestartControlInstanceEntity;
}
declare module $D.Framework.ServiceLayer.Services.Chat {
    interface ChatServiceNotification extends $D.Framework._DBO {
        Time: Date;
        Username: string;
    }
    function ChatServiceNotification(): ChatServiceNotification;
    interface ChatParticipant extends $D.Framework._DBO {
        Name: string;
        IsInvited: boolean;
    }
    function ChatParticipant(): ChatParticipant;
}
declare module $D.Framework.ServiceLayer.Services.BuildVersion {
    interface BuildVersion extends $D.Framework._DBO {
        BuildNumber: string;
        SCMID: string;
        LastBuildDate: Date;
        MachinName: string;
    }
    function BuildVersion(): BuildVersion;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface AssigneesHolder extends $D.Framework._DBO {
        EmailsAccounts: string[];
        NamesGroups: string[];
        FolderRights: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[];
        IdsRoles: string[];
    }
    function AssigneesHolder(): AssigneesHolder;
    interface BaseAssignmentEscalationHandler extends $D.Framework._DBO {
        ID: string;
    }
    function BaseAssignmentEscalationHandler(): BaseAssignmentEscalationHandler;
    interface ChangeAssignmentDto extends $D.Framework._DBO {
        AccountIDs: string[];
        GroupIDs: string[];
        Permissions: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[];
        Roles: string[];
        Priority: string;
        NotificationMessage: string;
        NotifyOnlyNewAssignees: boolean;
    }
    function ChangeAssignmentDto(): ChangeAssignmentDto;
}
declare module $D.Framework.ServiceLayer.Services.Approvals {
    interface ApproverInfo extends $D.Framework._DBO {
        Type: $D.Framework.ServiceLayer.Services.Approvals.ApproverType;
        Name: string;
    }
    function ApproverInfo(): ApproverInfo;
    interface CreateLevelRuleDto extends $D.Framework._DBO {
        EditingContext: string;
        Path: string[];
        LevelId: string;
        Level: number;
        FolderId: string;
    }
    function CreateLevelRuleDto(): CreateLevelRuleDto;
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    interface AccountChangedMessage extends $D.Framework._DBO {
        AccountId: string;
    }
    function AccountChangedMessage(): AccountChangedMessage;
    interface AccountInfo extends $D.Framework._DBO {
        Name: string;
        Id: string;
        EmailAddress: string;
    }
    function AccountInfo(): AccountInfo;
    interface AccountIdentifier extends $D.Framework._DBO {
        Name: string;
        Id: string;
    }
    function AccountIdentifier(): AccountIdentifier;
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory {
    interface ActiveDirectoryLoginTestResult extends $D.Framework._DBO {
        Success: boolean;
        Message: string;
    }
    function ActiveDirectoryLoginTestResult(): ActiveDirectoryLoginTestResult;
    interface PortableActiveDirectoryServerRegistation extends $D.Framework._DBO {
        SyncOption: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySyncOption;
        BaseDN: string;
        BaseLDAPPath: string;
        SelectedOrgUnits: string[];
        SelectedGroups: string[];
        SelectedGroupsObjectIds: string[];
        LDAPSchema: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.LDAPSchema;
        ElevatedUser: string;
        ElevatedPassword: string;
        Server: string;
        Domain: string;
        DomainLoginPrefix: string;
        UseBlankLoginPrefix: boolean;
        ServerId: string;
        SyncOnlyUsers: boolean;
        FetchLimit: number;
        IgnoreManagersOutOfGroup: boolean;
        IncludeUserGroupsNotInGroupList: boolean;
        SyncManagersForUsers: boolean;
        UserSearchBaseString: string;
        LastUserUSN: number;
        GroupBaseString: string;
        DefaultEmailDomain: string;
        FolderID: string;
        DefaultGroups: string[];
        MemberBaseString: string;
        UseAgent: boolean;
        AgentId: string;
        CreateNewUsersEvenIfDisabled: boolean;
        SyncOnlyGroupsFromLoggedInUsers: boolean;
    }
    function PortableActiveDirectoryServerRegistation(): PortableActiveDirectoryServerRegistation;
    interface ActiveDirectoryMember extends $D.Framework._DBO {
        Guid: any;
        Name: string;
        ObjectId: string;
        FirstName: string;
        Initials: string;
        LastName: string;
        EmailAddress: string;
        DisplayName: string;
        Description: string;
        Office: string;
        TelephoneNumber: string;
        TelephoneNumberAdditionalList: string[];
        USNChanged: number;
        WebPage: string;
        AccountControl: number;
        Assistant: string;
        Changed: Date;
        CommonName: string;
        Created: Date;
        Department: string;
        DepartmentNumber: string;
        DistinguishedName: string;
        Path: string;
        CellPhone: string;
        EmployeeID: string;
        FullDisplayName: string;
        HomePhone: string;
        MiddleInitial: string;
        Notes: string;
        POBox: string;
        ZipCode: string;
        WebPageAdditionalList: string[];
        MemberOf: string[];
        MemberOfIds: string[];
        Members: string[];
        Street: string;
        PostOfficeBox: string;
        City: string;
        State: string;
        PostalCode: string;
        CountryCode: any;
        CountryA2: string;
        CountryName: string;
        UserLogonName: string;
        MiddleName: string;
        HasMoreMembers: boolean;
        MemberRangeVarName: string;
        CurrentMemberCount: any;
        HomeDirectory: string;
        HomeDrive: string;
        EmployeeId: string;
        UserPrincipalName: string;
        SamAccountName: string;
        SIDBYTES: number[];
        SID: string;
        AllowReversiblePasswordEncryption: boolean;
        UserCannotChangePassword: boolean;
        ScriptPath: string;
        PasswordNotRequired: boolean;
        PasswordNeverExpires: boolean;
        StorePasswordUsingReversibleEncription: boolean;
        SmartcardLogonRequired: boolean;
        AccountIsDisabled: boolean;
        AccountExpirationDate: any;
        LastModifiedDate: any;
        AccountIsTrustedForDelegation: boolean;
        ProfilePath: string;
        LogonScript: string;
        HomeFolder: string;
        HomePhoneNumber: string;
        HomePhoneNumberAdditionalList: string[];
        Pager: string;
        PagerAdditionalList: string[];
        MobilePhoneNumber: string;
        MobilePhoneNumberAdditionalList: string[];
        FaxNumber: string;
        FaxNumberAdditionalList: string[];
        IpPhone: string;
        IpPhoneAdditionalList: string[];
        PhoneNotes: string;
        OrganizationTitle: string;
        OrganizationDepartment: string;
        Company: string;
        Manager: string;
        EmployeeNumber: string;
        EmployeeType: string;
    }
    function ActiveDirectoryMember(): ActiveDirectoryMember;
    interface TestADCredentialsObject extends $D.Framework._DBO {
        UserId: string;
        Password: string;
    }
    function TestADCredentialsObject(): TestADCredentialsObject;
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ADSearchDataTypes {
    interface ADNameValuePairResult extends $D.Framework._DBO {
        Name: string;
        Value: string;
    }
    function ADNameValuePairResult(): ADNameValuePairResult;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference {
    interface Credentials extends $D.Framework._DBO {
        UserName: string;
        Password: string;
    }
    function Credentials(): Credentials;
    interface WebServiceWSDLResult extends $D.Framework._DBO {
        ServiceDescription: string;
        XmlSchemas: string[];
        ImportServiceDescriptions: string[];
    }
    function WebServiceWSDLResult(): WebServiceWSDLResult;
    interface HttpHeaderDefinition extends $D.Framework._DBO {
        HeaderName: string;
        VariableName: string;
    }
    function HttpHeaderDefinition(): HttpHeaderDefinition;
    interface HttpHeader extends $D.Framework._DBO {
        Name: string;
        Value: string;
    }
    function HttpHeader(): HttpHeader;
    interface ODataPaginationPosition extends $D.Framework._DBO {
        PagingInfo: string;
        ResultsSinceLastSkip: number;
        TotalResults: number;
        BaseQueryUri: string;
    }
    function ODataPaginationPosition(): ODataPaginationPosition;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService {
    interface RestHttpHeader extends $D.Framework._DBO {
        Key: string;
        UseConstantValue: boolean;
        VariableName: string;
        ConstantValue: string;
    }
    function RestHttpHeader(): RestHttpHeader;
    interface RESTServiceSetupData extends $D.Framework._DBO {
        ServiceName: string;
        ParentFolderId: string;
    }
    function RESTServiceSetupData(): RESTServiceSetupData;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.OpenAPI {
    interface OpenAPIConnection extends $D.Framework._DBO {
        BaseURL: string;
        UserId: string;
        Password: string;
    }
    function OpenAPIConnection(): OpenAPIConnection;
}
declare module $D.Framework.ServiceLayer.Services.PeerCache {
    interface ClearCacheItems extends $D.Framework._DBO {
        Name: string;
        Ids: string[];
    }
    function ClearCacheItems(): ClearCacheItems;
    interface SyncCssDocument extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        DocumentId: string;
    }
    function SyncCssDocument(): SyncCssDocument;
    interface SyncJSControl extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        ComponentRegistrationId: string;
    }
    function SyncJSControl(): SyncJSControl;
    interface RestartInstanceEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
    }
    function RestartInstanceEvent(): RestartInstanceEvent;
    interface InstallModule extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        ModuleName: string;
    }
    function InstallModule(): InstallModule;
    interface ResetConfigurationActionCache extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
    }
    function ResetConfigurationActionCache(): ResetConfigurationActionCache;
    interface SyncResourcesServerEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        SyncCodeBucketAssembly: boolean;
        SyncLessStyles: boolean;
        SyncLocalModule: boolean;
        SyncOtherModules: boolean;
    }
    function SyncResourcesServerEvent(): SyncResourcesServerEvent;
    interface ResetConstantsEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
    }
    function ResetConstantsEvent(): ResetConstantsEvent;
    interface NewEncryptionKeyEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        NewKey: number[];
        KeyName: string;
    }
    function NewEncryptionKeyEvent(): NewEncryptionKeyEvent;
    interface CommitNewEncryptionKeyEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
    }
    function CommitNewEncryptionKeyEvent(): CommitNewEncryptionKeyEvent;
    interface PeerCacheData extends $D.Framework._DBO {
        CacheName: string;
        CacheId: string;
        AssumeRemove: boolean;
        TypeName: string;
        FolderId: string;
        ObjectContents: number[];
    }
    function PeerCacheData(): PeerCacheData;
    interface ClearPeerCacheData extends $D.Framework._DBO {
        CacheName: string;
        TypeName: string;
    }
    function ClearPeerCacheData(): ClearPeerCacheData;
}
declare module $D.Framework.ServiceLayer.Services.Statistics {
    interface BusinessMetricData extends $D.Framework._DBO {
        Count: number;
        Percentage: number;
        CurrentCount: number;
        MinTime: string;
        MaxTime: string;
        AvgTime: string;
        HasData: boolean;
    }
    function BusinessMetricData(): BusinessMetricData;
    interface FlowExecutionMetricActionDefinition extends $D.Framework._DBO {
        Name: string;
        Category: string;
        FlowId: string;
    }
    function FlowExecutionMetricActionDefinition(): FlowExecutionMetricActionDefinition;
}
declare module $D.Framework.ServiceLayer.Services.ClientEvents {
    interface SessionParameters extends $D.Framework._DBO {
        Name: string;
        Value: string;
    }
    function SessionParameters(): SessionParameters;
    interface InstanceAwareEventData extends $D.Framework._DBO {
        InstanceName: string;
        Value: any;
        UserId: string;
    }
    function InstanceAwareEventData(): InstanceAwareEventData;
    interface UserCultureChangedEvent extends $D.Framework._DBO {
        CultureName: string;
        AccountId: string;
    }
    function UserCultureChangedEvent(): UserCultureChangedEvent;
}
declare module $D.ServiceHost {
    interface ModuleResourceDependency extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        FromEntityId: string;
        FromEntityType: string;
        FromEntityName: string;
        ToEntityId: string;
        ToEntityType: string;
        ToEntityName: string;
        AsOfDateTime: Date;
    }
    function ModuleResourceDependency(): ModuleResourceDependency;
    interface ModuleResource extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        Type: $D.ServiceHost.ResourceType;
        ModuleName: string;
        FileName: string;
        OverrideFileName: string;
        ModifiedDate: Date;
        LastImportOn: any;
        FileSize: number;
        TypeName: string;
        EntityId: string;
        EntityLogicalTypeName: string;
        EntityName: string;
        FilePath: string;
        CheckSum: string;
        RevisionId: string;
        LastDateUpload: any;
        LastDateDownload: any;
    }
    function ModuleResource(): ModuleResource;
}
declare module $D.Silverlight.UI.Utilities {
    interface DesignerColor extends $D.Framework._DBO {
        Opacity: number;
        ColorName: string;
        ThemeBrushKey: string;
        GradientDirection: $D.Silverlight.UI.Utilities.DesignerGradientDirection;
        GradientDefinition: $D.Silverlight.UI.Utilities.DesignerGradient[];
        Type: $D.Framework.ServiceLayer.Services.Theme.ThemeGradientType;
    }
    function DesignerColor(): DesignerColor;
}
declare module $D.Utilities.Data.DataStore {
    interface DataStoreKey extends $D.Framework._DBO {
        Key: string;
        Indexes: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        NextStateTime: any;
        NextState: $D.Utilities.Data.DataStore.StorageState;
    }
    function DataStoreKey(): DataStoreKey;
}
declare module $D.Framework.ServiceLayer.Actions.Handlers {
    interface WebFormActionHandler extends $D.Framework.ServiceLayer.Actions.Handlers.ActionHandler {
        Size: $D.Framework.Data.DataTypes.UISize;
        ShowChrome: boolean;
        VirtualWindow: boolean;
        Url: string;
        ClassName: string;
    }
    function WebFormActionHandler(): WebFormActionHandler;
}
declare module $D.Framework.Data.ORMapper {
    interface BaseORMEntityWithLogicalDelete extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Deleted: boolean;
        DeletedBy: string;
        DeletedOn: Date;
    }
    function BaseORMEntityWithLogicalDelete(): BaseORMEntityWithLogicalDelete;
    interface BaseDateConverter extends $D.Framework.Data.ORMapper.BaseDateTimeConverter {
    }
    function BaseDateConverter(): BaseDateConverter;
    interface MSSQLDateTimeRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseDateTimeConverter {
    }
    function MSSQLDateTimeRelationalMappingFieldConverter(): MSSQLDateTimeRelationalMappingFieldConverter;
    interface MYSQLDateTimeRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseDateTimeConverter {
    }
    function MYSQLDateTimeRelationalMappingFieldConverter(): MYSQLDateTimeRelationalMappingFieldConverter;
    interface AndWhereSet extends $D.Framework.Data.ORMapper.AbstractWhereSet {
    }
    function AndWhereSet(): AndWhereSet;
    interface OperatiorWhereSet extends $D.Framework.Data.ORMapper.AbstractWhereSet {
    }
    function OperatiorWhereSet(): OperatiorWhereSet;
    interface OrWhereSet extends $D.Framework.Data.ORMapper.AbstractWhereSet {
    }
    function OrWhereSet(): OrWhereSet;
    interface FieldSetExpression extends $D.Framework.Data.ORMapper.FieldSetValue {
        ValueExpression: string;
    }
    function FieldSetExpression(): FieldSetExpression;
    interface CommandParam extends $D.Framework._DBO {
        Name: string;
        Value: any;
        DecisionsType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        TypeConverter: $D.Framework.Data.ORMapper.IORMFieldConverter;
        IsQuoted: boolean;
    }
    function CommandParam(): CommandParam;
    interface SqlStatementCommand extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        Statement: string;
        MaxResultSetSize: number;
    }
    function SqlStatementCommand(): SqlStatementCommand;
    interface SqlCommandWithParams extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        CommandStatement: string;
        CommandParams: any;
    }
    function SqlCommandWithParams(): SqlCommandWithParams;
    interface InsertStatement extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        TableName: string;
        SchemaName: string;
        IsTableNameQuoted: boolean;
        Values: any;
    }
    function InsertStatement(): InsertStatement;
    interface InsertOnConflictStatement extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        TableName: string;
        SchemaName: string;
        IsTableNameQuoted: boolean;
        KeyFieldValues: any;
        Values: any;
    }
    function InsertOnConflictStatement(): InsertOnConflictStatement;
    interface UpdateStatement extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        TableName: string;
        SchemaName: string;
        Values: any;
        IsTableNameQuoted: boolean;
        WhereConditions: any;
        TableHints: string[];
    }
    function UpdateStatement(): UpdateStatement;
    interface UpsertStatement extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        TableName: string;
        SchemaName: string;
        Values: any;
        IdentityColumn: string;
        PrimaryKeyValues: any;
        IsTableNameQuoted: boolean;
    }
    function UpsertStatement(): UpsertStatement;
    interface DeleteStatement extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        TableName: string;
        SchemaName: string;
        WhereSets: any;
        IsTableNameQuoted: boolean;
    }
    function DeleteStatement(): DeleteStatement;
    interface ExecuteStoredProcedureNoReturn extends $D.Framework.Data.ORMapper.BaseNoReturnSql {
        SchemaName: string;
        ProcedureParams: any;
        ProcedureName: string;
        IsQuoted: boolean;
    }
    function ExecuteStoredProcedureNoReturn(): ExecuteStoredProcedureNoReturn;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface RepositoryServerSSOUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        AuthenticationData: string;
    }
    function RepositoryServerSSOUserContext(): RepositoryServerSSOUserContext;
    interface RepositoryClientSSOUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        AuthenticationData: string;
    }
    function RepositoryClientSSOUserContext(): RepositoryClientSSOUserContext;
    interface GuestUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
    }
    function GuestUserContext(): GuestUserContext;
    interface ImpersonateUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        Type: $D.Framework.ServiceLayer.Utilities.UserIdentifierType;
        Identifier: string;
        RealUserContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext;
    }
    function ImpersonateUserContext(): ImpersonateUserContext;
    interface SessionUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        SessionValue: string;
    }
    function SessionUserContext(): SessionUserContext;
    interface PasswordCredentialsUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        UserID: string;
        Password: string;
    }
    function PasswordCredentialsUserContext(): PasswordCredentialsUserContext;
    interface SecuredUserContext extends $D.Framework.ServiceLayer.Utilities.AbstractUserContext {
        SecuredKey: string;
    }
    function SecuredUserContext(): SecuredUserContext;
    interface FolderMissingForEntityIssue extends $D.Framework.ServiceLayer.Utilities.ImportValidationIssue {
    }
    function FolderMissingForEntityIssue(): FolderMissingForEntityIssue;
    interface FolderMissingForFolderIssue extends $D.Framework.ServiceLayer.Utilities.ImportValidationIssue {
    }
    function FolderMissingForFolderIssue(): FolderMissingForFolderIssue;
    interface CommonImportValidationIssue extends $D.Framework.ServiceLayer.Utilities.ImportValidationIssue {
    }
    function CommonImportValidationIssue(): CommonImportValidationIssue;
    interface FolderMissingResolution extends $D.Framework.ServiceLayer.Utilities.ParentMissingForFolderResolution {
        NewFolderId: string;
        FolderName: string;
    }
    function FolderMissingResolution(): FolderMissingResolution;
    interface MakeRootFolderResolution extends $D.Framework.ServiceLayer.Utilities.ParentMissingForFolderResolution {
    }
    function MakeRootFolderResolution(): MakeRootFolderResolution;
    interface WarningImportValidationIssue extends $D.Framework.ServiceLayer.Utilities.ImportValidationIssue {
    }
    function WarningImportValidationIssue(): WarningImportValidationIssue;
}
declare module $D.DesignerRepository {
    interface ModuleInfo extends $D.Framework._DBO {
        ModuleName: string;
        LastRevisionId: string;
        LastRevisionDate: any;
        LastRevisionBy: string;
        State: $D.DesignerRepository.RepositoryState;
        Files: $D.DesignerRepository.ModuleInfoFile[];
        ModuleInfoItemSummary: $D.DesignerRepository.ModuleInfoItemSummary;
    }
    function ModuleInfo(): ModuleInfo;
    interface ModuleFileSummary extends $D.Framework._DBO {
        Files: $D.DesignerRepository.ModuleInfoFile[];
        ModuleInfoItemSummary: $D.DesignerRepository.ModuleInfoItemSummary;
    }
    function ModuleFileSummary(): ModuleFileSummary;
    interface FileCheckinInfo extends $D.DesignerRepository.ModuleInfoFile {
        Note: string;
    }
    function FileCheckinInfo(): FileCheckinInfo;
    interface ResourceCheckinInfo extends $D.DesignerRepository.ModuleInfoFile {
        Action: string;
    }
    function ResourceCheckinInfo(): ResourceCheckinInfo;
    interface ServerFileData extends $D.Framework.Data.DataTypes.FileData {
        FilePath: string;
        ServerFileTime: Date;
    }
    function ServerFileData(): ServerFileData;
}
declare module $D.Framework.Design.Properties {
    interface AbstractDefinedData extends $D.Framework._DBO {
        Name: string;
        Category: string;
        DecisionsType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsList: boolean;
    }
    function AbstractDefinedData(): AbstractDefinedData;
    interface ResultWithEvents extends $D.Framework._DBO {
        Value: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
        Events: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ResultWithEvents(): ResultWithEvents;
    interface ObjectEditorInformation extends $D.Framework._DBO {
        Editors: $D.Framework.Design.Properties.EditorInformation[];
    }
    function ObjectEditorInformation(): ObjectEditorInformation;
    interface ContextProviderNode extends $D.Framework._DBO {
        Node: $D.Framework.Design.Properties.ContextNode;
        Value: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
        Children: $D.Framework.Design.Properties.ContextProviderNode[];
        ValidationIssues: $D.Framework.ValidationIssue[];
        EditorConfigurationValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        EditingContextId: string;
    }
    function ContextProviderNode(): ContextProviderNode;
    interface ContextCategoryNode extends $D.Framework.Design.Properties.ContextNode {
        InitiallyCollapsed: boolean;
        UsePopupEditor: boolean;
    }
    function ContextCategoryNode(): ContextCategoryNode;
    interface ContextRootNode extends $D.Framework.Design.Properties.ContextNode {
        CanCancel: boolean;
    }
    function ContextRootNode(): ContextRootNode;
}
declare module $D.Framework.Design.Flow.Mapping {
    interface DecisionsDefinedType extends $D.Framework.Design.Flow.Mapping.DecisionsType {
        DefinitionId: string;
    }
    function DecisionsDefinedType(): DecisionsDefinedType;
    interface DecisionsNativeType extends $D.Framework.Design.Flow.Mapping.DecisionsType {
        FullName: string;
    }
    function DecisionsNativeType(): DecisionsNativeType;
    interface DataDescription extends $D.Framework._DBO {
        TagValue: string;
        Categories: string[];
        SortIndex: number;
        Type: $D.Framework.Design.Flow.Mapping.DecisionsType;
        FullTypeName: string;
        FormattedTypeName: string;
        Name: string;
        DisplayName: string;
        ExcludeNameInTitle: boolean;
        Title: string;
        IsList: boolean;
        CanBeNull: boolean;
        IsReadOnly: boolean;
        IsSealed: boolean;
        NestedVariableName: string;
        DesignerSelectable: boolean;
        IsHiddenForMapping: boolean;
        IsHiddenForMerge: boolean;
        HasReadableSubElements: boolean;
        HasWritableSubElements: boolean;
    }
    function DataDescription(): DataDescription;
}
declare module $D.DesignerRepository.Client.Service {
    interface CheckoutRepositoryResourcesStats extends $D.Framework._DBO {
        ToImport: number;
        Imported: number;
        ImportedStatus: $D.DesignerRepository.Client.Service.ResourceDownloadStatus[];
        Error: number;
    }
    function CheckoutRepositoryResourcesStats(): CheckoutRepositoryResourcesStats;
    interface CheckinTypeStats extends $D.Framework._DBO {
        Total: number;
        TypeStats: $D.DesignerRepository.Client.Service.CheckinTypeStatistic[];
    }
    function CheckinTypeStats(): CheckinTypeStats;
    interface CheckinRepositoryResourcesStats extends $D.Framework._DBO {
        ToCheckin: number;
        CheckingIn: number;
        CheckedIn: number;
        CheckinStatus: $D.DesignerRepository.Client.Service.ResourceDownloadStatus[];
        Error: number;
        TotalCount: number;
    }
    function CheckinRepositoryResourcesStats(): CheckinRepositoryResourcesStats;
    interface DiffResourceClientInfo extends $D.DesignerRepository.ModuleInfoFile {
        OnlyOnClient: boolean;
        OnlyOnServer: boolean;
        OnBothSides: boolean;
        DeletedOnClient: boolean;
        Status: string;
        RevisionIdOnClient: string;
        NameOnClient: string;
        PathOnClient: string;
        ModifiedByOnClient: string;
        ModifiedDateOnClient: any;
        UploadDateOnClient: any;
        DownloadDateOnClient: any;
        Side: string;
    }
    function DiffResourceClientInfo(): DiffResourceClientInfo;
    interface CheckoutSession extends $D.Framework.Data.ORMapper.BaseORMEntity {
        checkoutId: string;
        importSessionId: string;
        revisionId: string;
        asOfDate: any;
        destinationDirectory: string;
        moduleName: string;
        branchName: string;
    }
    function CheckoutSession(): CheckoutSession;
}
declare module $D.Silverlight.UI.Forms {
    interface FormTriggerSourceData extends $D.Silverlight.UI.Forms.FormTriggerData {
        DefaultImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        Description: string;
        ControlTypeName: string;
    }
    function FormTriggerSourceData(): FormTriggerSourceData;
}
declare module $D.FlowSets {
    interface AbstractFlowSetReturn extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        Name: string;
        RuleType: $D.FlowSets.RulesSetRuleType;
        ExecutionTime: string;
        Path: string;
        EndedInException: boolean;
        ExceptionDetails: string;
        ExecutionDetails: string;
        Attributes: string[];
        ResultPath: string;
        RuleResult: any;
        NotRun: boolean;
    }
    function AbstractFlowSetReturn(): AbstractFlowSetReturn;
    interface RuleSetElementToRun extends $D.Framework._DBO {
        ExecutionItemId: string;
        ExecutionType: $D.FlowSets.RuleSetExecutionType;
        Tags: string[];
        Path: string;
        FlowConstantParameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuleSetElementToRun(): RuleSetElementToRun;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Samples {
    interface SampleCategory extends $D.Framework._DBO {
        Id: string;
        Title: string;
        CanBeEdit: boolean;
        CanBeRemoved: boolean;
        CanBeExecuted: boolean;
        LimitNodesCount: number;
        Settings: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function SampleCategory(): SampleCategory;
    interface SampleSetStatistics extends $D.Framework._DBO {
        Size: number;
        PerItemTime: string;
        AutoRerun: boolean;
        TotalTime: string;
        ErrorNumber: number;
        Errors: $D.Framework.ValidationIssue[];
    }
    function SampleSetStatistics(): SampleSetStatistics;
}
declare module $D.Framework.ProjectConversion {
    interface ConvertedDatatype extends $D.Framework._DBO {
        TypeId: string;
        DataTypeName: string;
        DataTypeShortTypeName: string;
        BaseClasses: string[];
        Properties: $D.Framework.ProjectConversion.DataDefinition[];
    }
    function ConvertedDatatype(): ConvertedDatatype;
    interface OutcomeDefinition extends $D.Framework._DBO {
        OutcomeName: string;
        OutcomeData: $D.Framework.ProjectConversion.DataDefinition[];
    }
    function OutcomeDefinition(): OutcomeDefinition;
    interface StepOutcome extends $D.Framework._DBO {
        PathName: string;
        OutcomeData: $D.Framework.ProjectConversion.DataDefinition[];
    }
    function StepOutcome(): StepOutcome;
}
declare module $D.Framework.ProjectConversion.RuleImport {
    interface ConvertedStatementData extends $D.Framework._DBO {
        AnchorName: string;
        Verb: string;
        RuleVerbNot: boolean;
        Value: $D.Framework.ProjectConversion.RuleImport.ConvertedStatementDataValue;
        Values: $D.Framework.ProjectConversion.RuleImport.ConvertedStatementDataValue[];
    }
    function ConvertedStatementData(): ConvertedStatementData;
    interface ConvertedRuleAction extends $D.Framework._DBO {
        FlowId: string;
        OnTrue: boolean;
        FlowInputs: $D.Framework.ProjectConversion.RuleImport.ConvertedActionInputMapping[];
    }
    function ConvertedRuleAction(): ConvertedRuleAction;
}
declare module $D.Framework {
    interface SimpleTreeNode extends $D.Framework.AbstractTreeNode {
        Children: $D.Framework.AbstractTreeNode[];
        Parent: $D.Framework.AbstractTreeNode;
    }
    function SimpleTreeNode(): SimpleTreeNode;
    interface FileLogCategortySetting extends $D.Framework.LogCategorySetting {
        LogToOwnFileName: boolean;
    }
    function FileLogCategortySetting(): FileLogCategortySetting;
}
declare module $D.Framework.Utilities.Profiler {
    interface ProfileTimeSummary extends $D.Framework._DBO {
        Details: $D.Framework.Utilities.Profiler.ProfilerDetail[];
        CreatedTypes: $D.Framework.Utilities.Profiler.ProfileTypeData[];
        UserTimes: $D.Framework.Utilities.Profiler.ProfileUserData[];
        MillisecondsWithChildren: number;
        Count: number;
        MinTime: number;
        MaxTime: number;
    }
    function ProfileTimeSummary(): ProfileTimeSummary;
}
declare module $D.Framework.Utilities.Messaging {
    interface ActionMessage extends $D.Framework._DBO {
        FolderID: string;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        ActionName: string;
        ActionTypeName: string;
        RequiresLeaseCheck: boolean;
        ActionUniqueName: string;
        Entities: $D.Framework.Utilities.Messaging.EntityActionInfo[];
        SenderSessionId: string;
    }
    function ActionMessage(): ActionMessage;
}
declare module $D.Framework.Utilities.Logging {
    interface ClientSideLogEntry extends $D.Framework.Utilities.Logging.ClientSideMonitoringEntry {
        Severity: $D.Framework.LogSeverity;
        Message: string;
    }
    function ClientSideLogEntry(): ClientSideLogEntry;
    interface ClientSideProfilingEntry extends $D.Framework.Utilities.Logging.ClientSideMonitoringEntry {
        MethodCallId: string;
        Action: $D.Framework.Utilities.Logging.ClientSideProfilingEntryType;
        Duration: number;
    }
    function ClientSideProfilingEntry(): ClientSideProfilingEntry;
    interface AbstractSinkSetting extends $D.Framework._DBO {
        UseGlobalSetting: boolean;
        Levels: any[];
        LogCategorySettings: $D.Framework.LogCategorySetting[];
    }
    function AbstractSinkSetting(): AbstractSinkSetting;
}
declare module $D.Framework.Utilities.FrameworkUnitTests {
    interface RunningTestsInfo extends $D.Framework._DBO {
        UnitTestsAreStillRunning: boolean;
        RecentlyRunTests: $D.Framework.Utilities.FrameworkUnitTests.RunningTestInfo[];
    }
    function RunningTestsInfo(): RunningTestsInfo;
    interface JSUnitTestResult extends $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestResult {
        UnitTestType: $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestType;
    }
    function JSUnitTestResult(): JSUnitTestResult;
}
declare module $D.Framework.Data.ORMapper.Encryption {
    interface EncryptionKeyChangeAuditHistory extends $D.Framework.Data.ORMapper.BaseORMEntity {
    }
    function EncryptionKeyChangeAuditHistory(): EncryptionKeyChangeAuditHistory;
    interface EncryptionKeyChangeIssue extends $D.Framework.Data.ORMapper.BaseORMEntity {
    }
    function EncryptionKeyChangeIssue(): EncryptionKeyChangeIssue;
}
declare module $D.Framework.Data.DataTypes {
    interface DBFullProcedureInfo extends $D.Framework.Data.DataTypes.DBProcedureInfo {
        Parameters: $D.Framework.Data.DataTypes.DBParameterInfo[];
    }
    function DBFullProcedureInfo(): DBFullProcedureInfo;
    interface DBFullTableInfo extends $D.Framework.Data.DataTypes.DBTableInfo {
        PrimaryKeys: string[];
        ColumnInfo: $D.Framework.Data.DataTypes.DBColumnInfo[];
        IdentityColumn: string;
    }
    function DBFullTableInfo(): DBFullTableInfo;
    interface FlowReference extends $D.Framework.Data.DataTypes.AbstractElementReference {
    }
    function FlowReference(): FlowReference;
    interface RuleReference extends $D.Framework.Data.DataTypes.AbstractElementReference {
    }
    function RuleReference(): RuleReference;
    interface FormReference extends $D.Framework.Data.DataTypes.AbstractElementReference {
    }
    function FormReference(): FormReference;
    interface TruthTableReference extends $D.Framework.Data.DataTypes.AbstractElementReference {
    }
    function TruthTableReference(): TruthTableReference;
    interface ReportReference extends $D.Framework.Data.DataTypes.AbstractElementReference {
    }
    function ReportReference(): ReportReference;
    interface RowInfo extends $D.Framework._DBO {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RowInfo(): RowInfo;
    interface CSVEditorRow extends $D.Framework._DBO {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function CSVEditorRow(): CSVEditorRow;
    interface FileDataWithReferencePath extends $D.Framework.Data.DataTypes.FileData {
        FilePath: string;
        ContentLength: number;
    }
    function FileDataWithReferencePath(): FileDataWithReferencePath;
}
declare module $D.Framework.Design {
    interface NewType extends $D.Framework.Data.ORMapper.BaseORMEntity {
        PropValue: string;
    }
    function NewType(): NewType;
    interface RunFlowMessage extends $D.Framework._DBO {
        FlowId: string;
        InputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RunFlowMessage(): RunFlowMessage;
}
declare module $D.Framework.ServiceLayer.Services.EntityDetails {
    interface EntityHeaderDto extends $D.Framework._DBO {
        Name: string;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        EntityId: string;
        TypeName: string;
    }
    function EntityHeaderDto(): EntityHeaderDto;
    interface PlatformEntityDetails extends $D.Framework._DBO {
        EntityName: string;
        EntityDescription: string;
        EntityProperties: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function PlatformEntityDetails(): PlatformEntityDetails;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface FolderForTree extends $D.Framework._DBO {
        FolderID: string;
        FolderName: string;
        Alias: string;
        FolderBehaviorType: string;
        FolderTypeName: string;
        CreatedBy: string;
        CreatedOnDate: Date;
        ModifiedBy: string;
        ModifiedDate: Date;
        State: string;
        Hidden: boolean;
        FullPath: string;
        EntityFolderID: string;
        ShowInTree: boolean;
        SubMenuBehavior: $D.Framework.ServiceLayer.Services.Folder.SubMenuBehavior;
        SubMenuGroupName: string;
        EntityDescription: string;
        NestingLevel: number;
        HasSubFolders: boolean;
        CanBeExpanded: boolean;
        IsFavorite: boolean;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        OrderNum: number;
        Color: string;
        IconUrl: string;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        AvailableForDisplayType: boolean;
        FolderCountResult: $D.Framework.ServiceLayer.Services.Folder.FolderCountResults;
    }
    function FolderForTree(): FolderForTree;
    interface FolderLookAndFeelContext extends $D.Framework._DBO {
        Color: string;
        Thumbnail: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        HideCreateOtherActions: boolean;
    }
    function FolderLookAndFeelContext(): FolderLookAndFeelContext;
    interface FolderStateSummary extends $D.Framework.ServiceLayer.Services.Folder.FolderSummary {
        StateName: string;
    }
    function FolderStateSummary(): FolderStateSummary;
    interface SubFolderData extends $D.Framework._DBO {
        FolderId: string;
        FolderOrder: number;
        FolderDisplayName: string;
        TranslateFolderName: boolean;
        TranslatePageNames: boolean;
        IsFavorite: boolean;
        FolderCountResults: $D.Framework.ServiceLayer.Services.Folder.FolderCountResults;
    }
    function SubFolderData(): SubFolderData;
    interface SilverlightPortalPage extends $D.Framework.ServiceLayer.Services.Folder.ViewPageData {
        ViewPageID: string;
        ConfigurationStorageID: string;
        TimeStamp: number;
    }
    function SilverlightPortalPage(): SilverlightPortalPage;
    interface WebPageViewData extends $D.Framework.ServiceLayer.Services.Folder.ViewPageData {
        Url: string;
        RelativeToWebHost: boolean;
        ShowBorder: boolean;
    }
    function WebPageViewData(): WebPageViewData;
    interface FlowViewPageData extends $D.Framework.ServiceLayer.Services.Folder.ViewPageData {
        FlowId: string;
    }
    function FlowViewPageData(): FlowViewPageData;
    interface FolderChangedMessage extends $D.Framework.ServiceLayer.Services.Folder.FolderMessage {
    }
    function FolderChangedMessage(): FolderChangedMessage;
    interface FolderAddedMessage extends $D.Framework.ServiceLayer.Services.Folder.FolderMessage {
        ParentFolderId: string;
    }
    function FolderAddedMessage(): FolderAddedMessage;
    interface FolderRemovedMessage extends $D.Framework.ServiceLayer.Services.Folder.FolderMessage {
        ParentFolderId: string;
    }
    function FolderRemovedMessage(): FolderRemovedMessage;
    interface FolderEntitiesChangedMessage extends $D.Framework.ServiceLayer.Services.Folder.FolderMessage {
        EntityIds: string[];
    }
    function FolderEntitiesChangedMessage(): FolderEntitiesChangedMessage;
    interface FolderDataChangedMessage extends $D.Framework.ServiceLayer.Services.Folder.FolderMessage {
    }
    function FolderDataChangedMessage(): FolderDataChangedMessage;
    interface FavoriteEntityMessage extends $D.Framework._DBO {
        Entity: $D.Framework.ServiceLayer.Services.FavoriteReturn;
    }
    function FavoriteEntityMessage(): FavoriteEntityMessage;
    interface NavigationParametersChanged extends $D.Framework._DBO {
        Parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        IsAdded: boolean;
    }
    function NavigationParametersChanged(): NavigationParametersChanged;
}
declare module $D.Framework.Design.Flow.CoreSteps {
    interface PlaceholderData extends $D.Framework._DBO {
        DataName: string;
        DataType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsArray: boolean;
        CanBeNull: boolean;
        TagValue: string;
    }
    function PlaceholderData(): PlaceholderData;
    interface SendEmailStepCreationInfo extends $D.Framework.Design.Flow.StepCreationInfo {
        From: string;
        To: string;
        Subject: string;
        Body: string;
    }
    function SendEmailStepCreationInfo(): SendEmailStepCreationInfo;
    interface ChangeReportValuesEvent extends $D.Framework._DBO {
        FolderId: string;
        Values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ChangeReportValuesEvent(): ChangeReportValuesEvent;
}
declare module $D.Framework.Design.ToolboxFilter {
    interface FlowStepDataHolder extends $D.Framework.Design.ToolboxFilter.FlowDataHolder {
    }
    function FlowStepDataHolder(): FlowStepDataHolder;
    interface ToolboxHelp extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ToolboxHelpId: string;
        HelpText: string;
        IsEdited: boolean;
        Url: string;
        WaitingOnData: boolean;
    }
    function ToolboxHelp(): ToolboxHelp;
}
declare module $D.Framework.Design.Properties.Help {
    interface Outcome extends $D.Framework._DBO {
        Name: string;
        Outputs: $D.Framework.Design.Properties.Help.PropertyDefinition[];
    }
    function Outcome(): Outcome;
}
declare module $D.Framework.Design.Page {
    interface HtmlExportContainer extends $D.Framework._DBO {
        Images: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        CssStyles: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        ContentLines: string[];
    }
    function HtmlExportContainer(): HtmlExportContainer;
    interface PrintExportJobResult extends $D.Framework._DBO {
        FolderId: string;
        FileName: string;
        FileExtension: string;
        FileSize: number;
        FileData: $D.Framework.Data.DataTypes.FileData;
    }
    function PrintExportJobResult(): PrintExportJobResult;
}
declare module $D.Framework.Design.Page.Layouts {
    interface ExportElement extends $D.Framework._DBO {
        Id: string;
        ComponentId: string;
        Width: $D.Framework.Design.Page.Layouts.ExportDimension;
        Height: $D.Framework.Design.Page.Layouts.ExportDimension;
    }
    function ExportElement(): ExportElement;
    interface ExportLayoutGridColumn extends $D.Framework._DBO {
        RequestedWidth: $D.Framework.Design.Page.Layouts.ExportDimension;
    }
    function ExportLayoutGridColumn(): ExportLayoutGridColumn;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface SimpleEmail extends $D.Framework._DBO {
        To: string;
        Subject: string;
        TextBody: string;
        HtmlBody: string;
        Attachments: $D.Framework.Data.DataTypes.FileData[];
    }
    function SimpleEmail(): SimpleEmail;
    interface TitleDescriptionAndFile extends $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription {
        File: $D.Framework.Data.DataTypes.FileData;
    }
    function TitleDescriptionAndFile(): TitleDescriptionAndFile;
}
declare module $D.Framework.Design.Page.Personalization {
    interface PagePersonalizationModel extends $D.Framework._DBO {
        Page: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Parts: any;
    }
    function PagePersonalizationModel(): PagePersonalizationModel;
    interface Personalization extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Scope: $D.Framework.Design.Page.Personalization.PersonalizationScope;
        UserScope: $D.Framework.Design.Page.Personalization.PersonalizationUserScope;
        Id: string;
        AccountId: string;
        CreatedOn: Date;
        SavedByAccountId: string;
        LastAccess: Date;
        Name: string;
        FolderId: string;
        PageId: string;
        PartId: string;
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function Personalization(): Personalization;
}
declare module $D.Framework.Design.Page.Filters {
    interface BooleanMatch extends $D.Framework._DBO {
        IncludeTrues: boolean;
        IncludeFalses: boolean;
        IncludeNulls: boolean;
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function BooleanMatch(): BooleanMatch;
    interface CountFilterValue extends $D.Framework._DBO {
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        Value: any;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function CountFilterValue(): CountFilterValue;
    interface FilterDateRange extends $D.Framework._DBO {
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        DateRange: $D.Framework.Design.Flow.CoreSteps.Metro.ReportDateRange;
        Stored: boolean;
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
    }
    function FilterDateRange(): FilterDateRange;
    interface PickStringFilterValue extends $D.Framework._DBO {
        Options: string[];
        Value: string;
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function PickStringFilterValue(): PickStringFilterValue;
    interface NumericField extends $D.Framework._DBO {
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        MatchType: $D.Framework.Design.Page.Filters.NumericRangeType;
        Value: number;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function NumericField(): NumericField;
    interface NumericFields extends $D.Framework._DBO {
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        MatchType: $D.Framework.Design.Page.Filters.NumericRangeType;
        Above: number;
        Below: number;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function NumericFields(): NumericFields;
    interface NumericRange extends $D.Framework._DBO {
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        MatchType: $D.Framework.Design.Page.Filters.NumericRangeType;
        Value: number;
        Above: number;
        Below: number;
        MinAllowed: number;
        MaxAllowed: number;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function NumericRange(): NumericRange;
    interface StringMatch extends $D.Framework._DBO {
        MatchType: $D.Framework.Design.Report.Service.FilterFactory.StringMatchType;
        SearchString: string;
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
    }
    function StringMatch(): StringMatch;
}
declare module $D.Framework.Design.Flow {
    interface FlowInputDataDescription extends $D.Framework._DBO {
        Name: string;
        Type: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsList: boolean;
        CanBeNull: boolean;
    }
    function FlowInputDataDescription(): FlowInputDataDescription;
    interface FlowStepEditorInformation extends $D.Framework.Design.Properties.EditorInformation {
        FlowSessionId: string;
        FlowId: string;
        FlowStepId: string;
        IsFlow: boolean;
    }
    function FlowStepEditorInformation(): FlowStepEditorInformation;
    interface HttpPostData extends $D.Framework._DBO {
        UserHostName: string;
        UserHostAddress: string;
        RawUrl: string;
        WasPost: boolean;
        QueryString: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        PayloadData: string;
        RequestHeaders: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function HttpPostData(): HttpPostData;
    interface ExternalDataRuleExecutionData extends $D.Framework._DBO {
        Id: string;
        RowData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ExternalDataRuleExecutionData(): ExternalDataRuleExecutionData;
    interface DisplayFilter extends $D.Framework._DBO {
        TruthTableSearch: $D.Framework.Design.Flow.TruthTableSearch;
        TruthTableSort: $D.Framework.Design.Flow.TruthTableSort[];
    }
    function DisplayFilter(): DisplayFilter;
    interface FlowEditSession extends $D.Framework._DBO {
        FlowSessionId: string;
        ShowInitialScreen: boolean;
        UserMessage: string;
        VisibleFeatures: string[];
        DesignerHeaderDisplayData: $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
    }
    function FlowEditSession(): FlowEditSession;
    interface StepConnectionData extends $D.Framework._DBO {
        ConnectionId: string;
        FromId: string;
        ToId: string;
        PathName: string;
        FromPortNumber: number;
        ToPortNumber: number;
        Waypoints: $D.Framework.Design.Flow.StepConnectionWaypointData[];
        HWaypoints: $D.Framework.Design.Flow.StepConnectionWaypointData[];
        ConnectClosestPorts: boolean;
        OverrideLabel: boolean;
        Label: string;
        OverrideColor: boolean;
        StrokeColor: string;
        OverrideWidth: boolean;
        StrokeWidth: number;
        SolidLine: boolean;
        StrokeDashArray: number[];
        OverrideFont: boolean;
        Font: string;
        FontColor: string;
    }
    function StepConnectionData(): StepConnectionData;
    interface QuickAddTreeNode extends $D.Framework._DBO {
        NodeId: string;
        NodePath: string;
        Label: string;
        Information: string;
        NodeType: $D.Framework.Design.Flow.QuickAddTreeNodeType;
        CanCreate: boolean;
        CreationInfo: $D.Framework.Design.Flow.StepCreationInfo;
        CanBeFavorite: boolean;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        ExpandWhenLoaded: boolean;
        ItemType: $D.Framework.Design.Flow.FlowStepToolboxItemType;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function QuickAddTreeNode(): QuickAddTreeNode;
}
declare module $D.Framework.Design.Report {
    interface ReplaceDateColumnEditorInformation extends $D.Framework.Design.Properties.EditorInformation {
        CalculatedColumnTypeName: string;
        SourceColumnId: string;
    }
    function ReplaceDateColumnEditorInformation(): ReplaceDateColumnEditorInformation;
}
declare module $D.Framework.Design.Form {
    interface FormComponentEditorInformation extends $D.Framework.Design.Properties.EditorInformation {
        FormId: string;
        ComponentId: string;
    }
    function FormComponentEditorInformation(): FormComponentEditorInformation;
    interface EventsReturn extends $D.Framework._DBO {
        Events: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function EventsReturn(): EventsReturn;
    interface FormToolboxInformation extends $D.Framework._DBO {
        Label: string;
        ClassName: string;
        Data: number[];
        RegistrationId: string;
        Path: string;
        ConfigurationData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        CanBeFavorite: boolean;
        IsFavorite: boolean;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        HoveredImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        InstanceInfo: $D.Framework.Design.Form.FormComponentInstanceInfo;
    }
    function FormToolboxInformation(): FormToolboxInformation;
    interface FormComponentMoveInfo extends $D.Framework.Design.Form.FormComponentInfo {
        NewParentId: string;
    }
    function FormComponentMoveInfo(): FormComponentMoveInfo;
    interface ResponsiveFormComponentInfo extends $D.Framework.Design.Form.FormComponentInfo {
        SectionMinWidth: number;
        SectionHeight: number;
        IsFullWidth: boolean;
    }
    function ResponsiveFormComponentInfo(): ResponsiveFormComponentInfo;
    interface ElementInteractionInfo extends $D.Framework._DBO {
        ResizeDirection: $D.Framework.Design.Form.ResizeDirection;
        ResizeInfo: $D.Framework.Design.Form.ResizeInfo[];
        ResizeType: $D.Framework.Design.Form.ResizeType;
        UseCorners: boolean;
    }
    function ElementInteractionInfo(): ElementInteractionInfo;
    interface FormInputChangedMessage extends $D.Framework._DBO {
        InputDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    }
    function FormInputChangedMessage(): FormInputChangedMessage;
    interface RuleOrFlowReturn extends $D.Framework._DBO {
        Id: string;
        HandlerId: string;
        Results: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        EndedInException: boolean;
        ExceptionMessage: string;
    }
    function RuleOrFlowReturn(): RuleOrFlowReturn;
    interface RuleRunInfo extends $D.Framework._DBO {
        Id: string;
        HandlerId: string;
        InputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuleRunInfo(): RuleRunInfo;
    interface FormSessionInfoData extends $D.Framework._DBO {
        FormSessionInfoID: string;
        FormId: string;
        FlowTrackingId: string;
        StepTrackingId: string;
        ControlData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function FormSessionInfoData(): FormSessionInfoData;
    interface OfflineFormSubmission extends $D.Framework._DBO {
        ControlsData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        RuleSessionInfos: any[];
        OutcomeName: string;
    }
    function OfflineFormSubmission(): OfflineFormSubmission;
    interface DecisionsServerControlEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        ComponentID: string;
    }
    function DecisionsServerControlEvent(): DecisionsServerControlEvent;
    interface FormInfoValidationIssue extends $D.Framework._DBO {
        ComponentID: string;
        ValidationIssues: $D.Framework.Design.Form.DecisionsValidationIssue[];
    }
    function FormInfoValidationIssue(): FormInfoValidationIssue;
    interface NextFormInstructionEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        FlowTrackingId: string;
        StepTrackingId: string;
    }
    function NextFormInstructionEvent(): NextFormInstructionEvent;
    interface OutcomeRuleEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        OutcomeName: string;
    }
    function OutcomeRuleEvent(): OutcomeRuleEvent;
    interface NewFormDataEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function NewFormDataEvent(): NewFormDataEvent;
    interface DecisionsServerControlEventsHolder extends $D.Framework._DBO {
        Events: $D.Framework.Design.Form.DecisionsFormInfoServerEvent[];
    }
    function DecisionsServerControlEventsHolder(): DecisionsServerControlEventsHolder;
    interface FormValidationIssue extends $D.Framework.ValidationIssue {
        Level: $D.Framework.BreakLevel;
        Reason: string;
        ReferenceProperty: string;
    }
    function FormValidationIssue(): FormValidationIssue;
}
declare module $D.Framework.Design.Flow.StepImplementations {
    interface InvokeMethodStepCreationInfo extends $D.Framework.Design.Flow.StepCreationInfo {
        Params: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function InvokeMethodStepCreationInfo(): InvokeMethodStepCreationInfo;
}
declare module $D.Framework.Design.Flow.RuleTable {
    interface RuleTableHeaderDisplayData extends $D.Framework._DBO {
        Id: string;
        AnchorInfo: string;
        HasConverterFlow: boolean;
        ValidationIssues: $D.Framework.ValidationIssue[];
        ResolvedAnchorValue: string;
    }
    function RuleTableHeaderDisplayData(): RuleTableHeaderDisplayData;
}
declare module $D.Framework.Design.Flow.ExternalForm {
    interface ExternalFormReferenceDataParameter extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        Name: string;
        Type: string;
        IsList: boolean;
        AllowNull: boolean;
    }
    function ExternalFormReferenceDataParameter(): ExternalFormReferenceDataParameter;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface FlowExecutionStateInstruction extends $D.Framework._DBO {
        InstructionDateTime: Date;
        BeingProcessed: boolean;
        InstructionForUser: string;
        TopFlowTrackingId: string;
        FlowTrackingId: string;
        SetupInfo: $D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo;
        FlowOutputs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function FlowExecutionStateInstruction(): FlowExecutionStateInstruction;
    interface ExceptionResult extends $D.Framework.Design.Flow.Service.Execution.AbstractResultState {
        ExceptionTime: Date;
        ExceptionType: string;
        ExceptionMessage: string;
        ExceptionText: string;
        ExceptionCode: number;
    }
    function ExceptionResult(): ExceptionResult;
    interface BranchResult extends $D.Framework._DBO {
        ResultPath: string;
        ResultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function BranchResult(): BranchResult;
    interface StoppedResult extends $D.Framework.Design.Flow.Service.Execution.AbstractResultState {
        StoppedTime: Date;
    }
    function StoppedResult(): StoppedResult;
    interface FlowProfileParameters extends $D.Framework._DBO {
        TrackingId: string;
        FlowId: string;
        InputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        ContextId: string;
        UnitTestId: string;
        SampleId: string;
        RememberToRecents: boolean;
        ForSession: boolean;
    }
    function FlowProfileParameters(): FlowProfileParameters;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface AbstractTileReturn extends $D.Framework._DBO {
        ShowImage: boolean;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ImageLocation: $D.Framework.Design.Flow.CoreSteps.Metro.TileImageLocation;
        ShowImageInBackground: boolean;
        FitImageToTile: boolean;
        ImageSize: $D.Framework.Data.DataTypes.UISize;
        TileImageVerticalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileImageVerticalAlign;
        TileImageHorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileImageHorizontalAlign;
    }
    function AbstractTileReturn(): AbstractTileReturn;
}
declare module $D.Framework.Design.Flow.CoreSteps.EMail {
    interface Email extends $D.Framework._DBO {
        Header: $D.Framework.Design.Flow.CoreSteps.EMail.EmailHeader;
        BodyText: string;
        BodyHtml: string;
        Attachments: $D.Framework.Data.DataTypes.FileData[];
    }
    function Email(): Email;
}
declare module $D.Framework.Design.DataStructure {
    interface DefinedDataTypeDataMember extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        UseJoinTable: boolean;
        RelationshipName: string;
        RelatedToDataType: string;
        IsList: boolean;
        AllowNull: boolean;
        ContainsPII: boolean;
        IncludePropertyInEntityDetails: boolean;
        EncryptData: boolean;
        IsLookupKeyField: boolean;
        IncludeInDescription: boolean;
        TextLength: $D.Framework.Design.DataStructure.TextLength;
        Size: any;
        StringSelectionValues: string[];
        ClassificationCategories: string[];
        ClassificationCategoriesString: string;
        DisplayLabelName: string;
        DisplayOrder: number;
        DatabaseFieldNameOverride: string;
        CreateDatabaseIndex: boolean;
        CreateUniqueDatabaseIndex: boolean;
    }
    function DefinedDataTypeDataMember(): DefinedDataTypeDataMember;
    interface EnumValue extends $D.Framework.Data.ORMapper.BaseORMEntity {
        EnumValueID: string;
        ValueName: string;
        IncludeNumbers: boolean;
        EnumOrder: number;
    }
    function EnumValue(): EnumValue;
    interface AbstractDefinedEntity extends $D.Framework.Data.ORMapper.BaseORMEntity {
    }
    function AbstractDefinedEntity(): AbstractDefinedEntity;
    interface CsvDataStructureEditObject extends $D.Framework._DBO {
        OriginalFullName: string;
        IsCreateAction: boolean;
        EntityFolderID: string;
        StructureName: string;
        DataTypeNameSpace: string;
        UseCsvFile: boolean;
        Csv: string;
        CsvFile: $D.Framework.Data.DataTypes.FileData;
        FileType: $D.Framework.Design.Flow.CoreSteps.StandardSteps.CsvFileType;
        FirstRowIsFieldNames: boolean;
        IgnoreEmptyRows: boolean;
        Separator: $D.Framework.Design.Flow.CoreSteps.CSV.CSVSeparator;
        WorksheetIndex: any;
        DatabaseStored: boolean;
    }
    function CsvDataStructureEditObject(): CsvDataStructureEditObject;
    interface XmlDataStructureEditObject extends $D.Framework._DBO {
        XmlDataStructureId: string;
        EntityFolderID: string;
        StructureName: string;
        UseXmlFile: boolean;
        XmlCode: string;
        XmlFile: $D.Framework.Data.DataTypes.FileData;
        ClassListForFactoryGeneration: string[];
    }
    function XmlDataStructureEditObject(): XmlDataStructureEditObject;
    interface XSDDataStructureEditObject extends $D.Framework._DBO {
        XSDDataStructureId: string;
        EntityFolderID: string;
        StructureName: string;
        UseXSDFile: boolean;
        XSDCode: string;
        XSDFiles: $D.Framework.Data.DataTypes.FileData[];
        ClassListForFactoryGeneration: string[];
    }
    function XSDDataStructureEditObject(): XSDDataStructureEditObject;
}
declare module $D.Framework.Design.Flow.CoreSteps.StandardSteps {
    interface DynamicDataRow extends $D.Framework._DBO {
        FileData: $D.Framework.Data.DataTypes.FileData;
        FileType: $D.Framework.Design.Flow.CoreSteps.StandardSteps.CsvFileType;
        Row: number;
    }
    function DynamicDataRow(): DynamicDataRow;
    interface RegexMatch extends $D.Framework.Design.Flow.CoreSteps.StandardSteps.RegexCapture {
        Success: boolean;
    }
    function RegexMatch(): RegexMatch;
    interface RegexGroup extends $D.Framework.Design.Flow.CoreSteps.StandardSteps.RegexCapture {
        Captures: $D.Framework.Design.Flow.CoreSteps.StandardSteps.RegexCapture[];
    }
    function RegexGroup(): RegexGroup;
}
declare module $D.Framework.Design.Flow.Annotations {
    interface ArrowAnnotation extends $D.Framework.Design.Flow.Annotations.FlowAnnotation {
        ArrowColor: string;
        StartX: number;
        StartY: number;
        EndX: number;
        EndY: number;
    }
    function ArrowAnnotation(): ArrowAnnotation;
    interface RectangleAnnotation extends $D.Framework.Design.Flow.Annotations.FlowAnnotation {
        IsTransparent: boolean;
        BackgroundBrush: string;
        HasBorder: boolean;
        BorderBrush: string;
        BorderWidth: number;
        DisplayX: number;
        DisplayY: number;
        DisplayWidth: number;
        DisplayHeight: number;
        CornerRadius: number;
        HasShadow: boolean;
        ShadowColor: string;
        ShadowDepth: number;
        MinDisplayWidth: number;
        MinDisplayHeight: number;
    }
    function RectangleAnnotation(): RectangleAnnotation;
    interface ImageAnnotation extends $D.Framework.Design.Flow.Annotations.FlowAnnotation {
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        KeepAspectRatio: boolean;
        DisplayX: number;
        DisplayY: number;
        DisplayWidth: number;
        DisplayHeight: number;
        MinDisplayWidth: number;
        MinDisplayHeight: number;
    }
    function ImageAnnotation(): ImageAnnotation;
    interface LabelAnnotation extends $D.Framework.Design.Flow.Annotations.FlowAnnotation {
        TextAttributesString: string;
        TextAttributesColor: string;
        LocationX: number;
        LocationY: number;
        Text: string;
    }
    function LabelAnnotation(): LabelAnnotation;
}
declare module $D.Framework.Design.Flow.Service {
    interface FlowServiceNotification extends $D.Framework._DBO {
        FlowId: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
        NotificationType: $D.Framework.Design.Flow.Service.FlowServiceNotificationType;
    }
    function FlowServiceNotification(): FlowServiceNotification;
    interface PointRestoredNotification extends $D.Framework._DBO {
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
    }
    function PointRestoredNotification(): PointRestoredNotification;
    interface RuleServiceDesignerNotification extends $D.Framework.Design.Flow.Service.RuleServiceNotification {
        UserMessage: string;
    }
    function RuleServiceDesignerNotification(): RuleServiceDesignerNotification;
    interface RuleActionDisplayData extends $D.Framework._DBO {
        DisplayName: string;
        RuleActionId: string;
        RuleStepId: string;
        HandlerName: string;
        ActionTypeName: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
        CanChange: boolean;
        CanEdit: boolean;
        ClientData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuleActionDisplayData(): RuleActionDisplayData;
}
declare module $D.Framework.Design.Flow.Service.Debugging.DebugData {
    interface RuleProgressDataHolder extends $D.Framework._DBO {
        RuleId: string;
        Progress: $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData[];
        IsTruthTable: boolean;
        RuleDesignerSurface: $D.Framework.Design.Flow.Service.RuleDesignerSurface;
    }
    function RuleProgressDataHolder(): RuleProgressDataHolder;
    interface RuleExceptionProgressData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData {
        ExceptionMessage: string;
        ExceptionStack: string;
    }
    function RuleExceptionProgressData(): RuleExceptionProgressData;
    interface RuleExecutionCompletedProgressData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData {
        Result: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
        End: Date;
        Duration: string;
        LastRuleStepId: string;
    }
    function RuleExecutionCompletedProgressData(): RuleExecutionCompletedProgressData;
    interface RuleStepExceptionProgressData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData {
        StepId: string;
        ExceptionMessage: string;
        ExceptionStack: string;
    }
    function RuleStepExceptionProgressData(): RuleStepExceptionProgressData;
    interface RuleStepExecutingProgressData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData {
        StepId: string;
        StepName: string;
        InputData: string;
    }
    function RuleStepExecutingProgressData(): RuleStepExecutingProgressData;
    interface RuleStepExecutedProgressData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData {
        StepId: string;
        Result: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
        End: Date;
        Evaluation: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleStepEvaluation;
    }
    function RuleStepExecutedProgressData(): RuleStepExecutedProgressData;
    interface FlowProgressData extends $D.Framework._DBO {
        FlowId: string;
        FlowTrackingId: string;
        Progress: $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData[];
    }
    function FlowProgressData(): FlowProgressData;
    interface FlowStepStartedData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData {
        Start: Date;
    }
    function FlowStepStartedData(): FlowStepStartedData;
    interface UpdateFlowStepVisuals extends $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData {
        Highlight: any;
        BorderColor: string;
        BorderWidth: any;
        BackgroundColor: string;
    }
    function UpdateFlowStepVisuals(): UpdateFlowStepVisuals;
    interface UpdateFlowStepMessage extends $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepProgressData {
        Message: string;
    }
    function UpdateFlowStepMessage(): UpdateFlowStepMessage;
    interface DebugStepAggregationDataItem extends $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugAggregationDataItem {
        StepName: string;
    }
    function DebugStepAggregationDataItem(): DebugStepAggregationDataItem;
    interface DebugTreeEvent extends $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeUpdateEvent {
        ParentId: string;
        ChildLabel: string;
        ChildType: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeNodeType;
        Start: Date;
        IsGroup: boolean;
        FirstChildId: string;
    }
    function DebugTreeEvent(): DebugTreeEvent;
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    interface RuleEditStructure extends $D.Framework._DBO {
        ColumnId: string;
        Values: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuleEditStructure(): RuleEditStructure;
    interface RuleReturnStructure extends $D.Framework._DBO {
        RuleDataId: string;
        RuleData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuleReturnStructure(): RuleReturnStructure;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface DataDefinitionForEdit extends $D.Framework._DBO {
        DataName: string;
        DataType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsArray: boolean;
        CanBeNull: boolean;
        InlineMapping: $D.Framework.Design.Flow.InlineMapping;
    }
    function DataDefinitionForEdit(): DataDefinitionForEdit;
    interface MatrixRuleEditSession extends $D.Framework.Design.Flow.Service.Edit.MatrixRuleInformation {
        SessionId: string;
        LeftFlowSessionId: string;
        TopFlowSessionId: string;
        ActionTypes: $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[];
    }
    function MatrixRuleEditSession(): MatrixRuleEditSession;
}
declare module $D.Framework.Design.Flow.Service.Edit.DataDefinitions {
    interface DataDefinitionContext extends $D.Framework._DBO {
        MappingContext: $D.Framework.Design.Flow.Service.MappingContext;
        EditingContext: $D.Framework.Design.Flow.Service.Edit.ArrayEditingContext;
        ItemContextId: string;
        EditInputs: $D.Framework.Design.Properties.EditInputsType;
    }
    function DataDefinitionContext(): DataDefinitionContext;
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    interface DebugParameters extends $D.Framework._DBO {
        FlowOrRuleId: string;
        InputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        InputsContextId: string;
        UnitTestId: string;
        SampleId: string;
        TopTrackingId: string;
        DebuggingId: string;
        RememberToRecents: boolean;
        SendExceptionEvent: boolean;
        SendFlowMessageEvent: boolean;
        SendFlowStoppedWithInstructionsEvent: boolean;
        SendFlowPausedEvent: boolean;
        SendLinkedFlowRunEvent: boolean;
        SendOutcomeFollowedEvent: boolean;
        SendStepRunEvent: boolean;
        SendFlowPersistenceFolderEvent: boolean;
        SendFlowDataUpdateEvent: boolean;
        SendRuleExceptionEvent: boolean;
        SendRuleCompletedEvent: boolean;
        SendRuleStepExecutedEvent: boolean;
        SendRuleStepExecutingEvent: boolean;
        SendFlowExecutionStateInstruction: boolean;
        SendShortInstructionEvents: boolean;
        FlowDebugType: $D.Framework.Design.Flow.Service.Debugging.FlowDebugType;
    }
    function DebugParameters(): DebugParameters;
    interface ExceptionEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        ExceptionName: string;
        ExceptionType: string;
        ExceptionStackTrace: string;
        StepId: string;
        StepTrackingId: string;
    }
    function ExceptionEvent(): ExceptionEvent;
    interface FlowMessageEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        Message: string;
    }
    function FlowMessageEvent(): FlowMessageEvent;
    interface FlowPausedEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        StepTrackingID: string;
        ContextId: string;
    }
    function FlowPausedEvent(): FlowPausedEvent;
    interface LinkedFlowRunEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        SubFlowSessionId: string;
        SubFlowTrackingId: string;
    }
    function LinkedFlowRunEvent(): LinkedFlowRunEvent;
    interface OutcomeFollowedEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        HighlightStep: boolean;
        Outcomes: $D.Framework.Design.Flow.Service.Debugging.Events.Outcome[];
        FlowStepId: string;
    }
    function OutcomeFollowedEvent(): OutcomeFollowedEvent;
    interface StepRunEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        StepTrackingId: string;
        StepId: string;
        StepName: string;
        StepType: string;
        InputData: string;
    }
    function StepRunEvent(): StepRunEvent;
    interface FlowShortInstructionEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        StepTrackingId: string;
        InstructionTypeName: string;
    }
    function FlowShortInstructionEvent(): FlowShortInstructionEvent;
    interface FlowBreakpoint extends $D.Framework.Data.ORMapper.BaseORMEntity {
        FlowBreakpointID: string;
        FlowID: string;
        FlowStepID: string;
        AccountID: string;
        Enabled: boolean;
    }
    function FlowBreakpoint(): FlowBreakpoint;
}
declare module $D.Framework.Design.Flow.Service.Edit.Mapping {
    interface AddInputParams extends $D.Framework._DBO {
        MappingContext: $D.Framework.Design.Flow.Service.MappingContext;
        EditingContext: string;
        EditorPath: string[];
        StepInputName: string;
        NewInputName: string;
    }
    function AddInputParams(): AddInputParams;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData {
    interface DataDiagram extends $D.Framework._DBO {
        Id: string;
        Left: number;
        Top: number;
        Width: number;
        Height: number;
        ZIndex: number;
        IsSimpleType: boolean;
        DataName: string;
        DataType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsList: boolean;
        CanBeNull: boolean;
    }
    function DataDiagram(): DataDiagram;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData.DisplayData {
    interface AddDiagramDisplayData extends $D.Framework._DBO {
        Name: string;
        FullTypeName: string;
        IsList: boolean;
        View: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramView;
    }
    function AddDiagramDisplayData(): AddDiagramDisplayData;
    interface DiagramUpdateData extends $D.Framework._DBO {
        Name: string;
        IsList: boolean;
        Type: $D.Framework.Design.Flow.Mapping.DecisionsType;
    }
    function DiagramUpdateData(): DiagramUpdateData;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData.ContextProviders {
    interface DesignPatternEditProperties extends $D.Framework._DBO {
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function DesignPatternEditProperties(): DesignPatternEditProperties;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Events {
    interface FlowPersistenceFolderEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        FolderId: string;
    }
    function FlowPersistenceFolderEvent(): FlowPersistenceFolderEvent;
    interface FlowDataUpdateEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        InitiatingUserEmail: string;
        InitiatingUserId: string;
        InitiatingUserHomeFolder: string;
        CurrentUserEmail: string;
        CurrentUserId: string;
        IsStudio: boolean;
        CurrentUserHomeFolder: string;
        BaseUrlToPortal: string;
        UrlToFolder: string;
        FolderId: string;
        State: string;
        PercentComplete: number;
        StartTime: any;
        EndTime: any;
    }
    function FlowDataUpdateEvent(): FlowDataUpdateEvent;
    interface RuleExceptionEvent extends $D.Framework.Design.Flow.Service.Debugging.Events.RuleDebugEvent {
        ExceptionName: string;
        ExceptionType: string;
        ExceptionStackTrace: string;
    }
    function RuleExceptionEvent(): RuleExceptionEvent;
    interface RuleStepExecutedEvent extends $D.Framework.Design.Flow.Service.Debugging.Events.RuleDebugEvent {
        RuleStepId: string;
        Result: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
        RuleStepName: string;
        Evaluation: $D.Framework.Design.Flow.Service.Debugging.DebugData.RuleStepEvaluation;
    }
    function RuleStepExecutedEvent(): RuleStepExecutedEvent;
    interface RuleExecutionCompletedEvent extends $D.Framework.Design.Flow.Service.Debugging.Events.RuleDebugEvent {
        Result: $D.Framework.Design.Flow.Service.Debugging.Events.RuleExecutionResult;
        OutputValueInfo: string;
        LastRuleStepId: string;
        EndEventTime: Date;
    }
    function RuleExecutionCompletedEvent(): RuleExecutionCompletedEvent;
    interface RuleStepExecutingEvent extends $D.Framework.Design.Flow.Service.Debugging.Events.RuleDebugEvent {
        RuleStepId: string;
        RuleStepName: string;
        InputData: string;
    }
    function RuleStepExecutingEvent(): RuleStepExecutingEvent;
}
declare module $D.Framework.Design.DataStructure.CaseEditor {
    interface DefinedDataStructureDto extends $D.Framework._DBO {
        Id: string;
        OrmTypeName: string;
        Properties: $D.Framework.Design.DataStructure.CaseEditor.PropertyDto[];
    }
    function DefinedDataStructureDto(): DefinedDataStructureDto;
    interface ElementRegistrationDto extends $D.Framework._DBO {
        Id: string;
        Name: string;
        BehaviorType: string;
        OrmTypeName: string;
        EntityFolderID: string;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function ElementRegistrationDto(): ElementRegistrationDto;
}
declare module $D.Framework.Design.Charts {
    interface ChartHeaderConfig extends $D.Framework._DBO {
        visible: boolean;
        text: string;
        textStyle: $D.Framework.Design.Charts.ChartTextStyle;
    }
    function ChartHeaderConfig(): ChartHeaderConfig;
    interface AxisLabels extends $D.Framework._DBO {
        textStyle: $D.Framework.Design.Charts.ChartTextStyle;
        textVisible: boolean;
        className: string;
    }
    function AxisLabels(): AxisLabels;
    interface ChartEntryMetadataSet extends $D.Framework._DBO {
        MetadataBehavior: $D.Framework.Design.Charts.ChartMetadataBehavior;
        Data: $D.Framework.Design.Charts.ChartEntryMetadata[];
        Raw: $D.Framework.Design.Charts.ChartEntryMetadata[];
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
        HasEdits: boolean;
        CanConfigureColors: boolean;
    }
    function ChartEntryMetadataSet(): ChartEntryMetadataSet;
    interface ChartRenderData extends $D.Framework._DBO {
        Key: string;
        Color: string;
        Value: $D.Framework.Design.Charts.ChartDatum[];
    }
    function ChartRenderData(): ChartRenderData;
    interface ChartRuntimeConfig extends $D.Framework._DBO {
        ChartId: string;
        ChartType: $D.Framework.Design.Report.ChartType;
        ShowTitle: boolean;
        ShowTooltip: boolean;
        TooltipType: $D.Framework.Design.Report.ChartLabelType;
        ChartLegendPosition: $D.Framework.Design.Report.ChartLegendPosition;
        MaxAxisLabelLength: number;
        RotateLabelsAngle: number;
        Area: $D.Framework.Design.Page.Personalization.PersonalizationArea;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
        DisplayStacked: boolean;
        SetYMinimum: boolean;
        YAxisMin: number;
        SetYMaximum: boolean;
        YAxisMax: number;
        ShowElementLabels: boolean;
        BulletMinimum: number;
        BulletMaximum: number;
        MinimumPointSize: number;
        MaximumPointSize: number;
        TargetValue: number;
        OkValue: number;
        GoodValue: number;
        BulletLayout: $D.Framework.Design.Report.BulletLayout;
        BulletTitlePosition: $D.Framework.Design.Report.BulletTitlePosition;
        RangeColors: string[];
        MeasureColors: string[];
        MarkerColors: string[];
        ColorPalette: string[];
        LabelNumberFormat: string;
        TooltipNumberFormat: string;
    }
    function ChartRuntimeConfig(): ChartRuntimeConfig;
}
declare module $D.Framework.Design.Report.Tiles {
    interface TileRow extends $D.Framework._DBO {
        Id: string;
        Heading: string;
        SubHeading: string;
        EntityActions: $D.Framework.Design.Report.EntityReportAction[];
        RowImageInfo: $D.Framework.Design.Report.Tiles.TileIconImageInfo;
    }
    function TileRow(): TileRow;
    interface DesignTileData extends $D.Framework._DBO {
        Tiles: $D.Framework.Design.Report.Tiles.Tile[];
        SortBy: string;
        GroupBy: string;
        StackColumns: boolean;
    }
    function DesignTileData(): DesignTileData;
    interface DateAgeTileData extends $D.Framework.Design.Report.Tiles.TileData {
        HasImage: boolean;
    }
    function DateAgeTileData(): DateAgeTileData;
}
declare module $D.Framework.Design.Report.Matrix.Dimensions {
    interface AllDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        DimensionName: string;
    }
    function AllDimension(): AllDimension;
    interface LabelDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        DimensionName: string;
    }
    function LabelDimension(): LabelDimension;
    interface ByDateValueDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        FieldTitle: string;
        NullValueBehavior: $D.Framework.Design.Report.Matrix.Dimensions.UnspecifiedValueBehavior;
        NullFieldName: string;
        CalculationType: $D.Framework.Design.Report.Matrix.Dimensions.DateCalculationType;
        DateFormatString: string;
        ShowAdvancedOptions: boolean;
        IncludeAverageCountPerDay: boolean;
        AverageCountPerDay: string;
    }
    function ByDateValueDimension(): ByDateValueDimension;
    interface AgingDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        FieldTitle: string;
        AgingSummaries: $D.Framework.Design.Report.Matrix.Dimensions.AgingSummary[];
        BeforeSummariesAction: $D.Framework.Design.Report.Matrix.Dimensions.SummaryOverflowType;
        BeforeSummariesLabel: string;
        AfterSummariesAction: $D.Framework.Design.Report.Matrix.Dimensions.SummaryOverflowType;
        AfterSummariesLabel: string;
        SortOrder: $D.Framework.Design.Report.Matrix.Dimensions.AgingSummarySortOrder;
        ReferencePointType: $D.Framework.Design.Report.Matrix.Dimensions.AgingDimensionReferencePointType;
    }
    function AgingDimension(): AgingDimension;
    interface NumericRangeDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        FieldTitle: string;
        Start: number;
        NumericRangeSummaries: $D.Framework.Design.Report.Matrix.Dimensions.NumericRangeSummary[];
        BeforeSummariesAction: $D.Framework.Design.Report.Matrix.Dimensions.SummaryOverflowType;
        BeforeSummariesLabel: string;
        AfterSummariesAction: $D.Framework.Design.Report.Matrix.Dimensions.SummaryOverflowType;
        AfterSummariesLabel: string;
    }
    function NumericRangeDimension(): NumericRangeDimension;
    interface ByValueDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        FieldTitle: string;
        NullValueBehavior: $D.Framework.Design.Report.Matrix.Dimensions.UnspecifiedValueBehavior;
        NullFieldName: string;
        ByValueSorting: string;
        CustomSorting: string[];
        CustomDateFormat: string;
        DimensionFormat: string;
    }
    function ByValueDimension(): ByValueDimension;
    interface CalculatedFieldDefinition extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        FieldTitle: string;
        TypeOfField: $D.Framework.Design.Report.CalculationType;
    }
    function CalculatedFieldDefinition(): CalculatedFieldDefinition;
    interface SummarizedValueDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        AlwaysShowSummaries: boolean;
        ValuesToSummarize: $D.Framework.Design.Report.Matrix.Dimensions.SummarizedValueData[];
        OtherHandling: $D.Framework.Design.Report.Matrix.Dimensions.SummarizedDataOtherHandling;
        OtherLabel: string;
    }
    function SummarizedValueDimension(): SummarizedValueDimension;
}
declare module $D.Framework.Design.Report.Matrix {
    interface IntersectionDisplayData extends $D.Framework._DBO {
        Text: string;
        SummaryText: string;
        FolderId: string;
        Actions: $D.Framework.Design.Report.EntityReportAction[];
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function IntersectionDisplayData(): IntersectionDisplayData;
}
declare module $D.Framework.Design.Report.InlineFields {
    interface OneNumberInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
        Constant: number;
    }
    function OneNumberInlineField(): OneNumberInlineField;
    interface TwoNumbersInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        Column1Name: string;
        Column2Name: string;
    }
    function TwoNumbersInlineField(): TwoNumbersInlineField;
    interface CombineTextFields extends $D.Framework.Design.Report.InlineFields.InlineField {
        Column1Name: string;
        Column2Name: string;
    }
    function CombineTextFields(): CombineTextFields;
    interface EncryptedOrPIIDataField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
    }
    function EncryptedOrPIIDataField(): EncryptedOrPIIDataField;
    interface AbstractTextInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
    }
    function AbstractTextInlineField(): AbstractTextInlineField;
    interface SingleDateInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        DateFieldDisplayName: string;
    }
    function SingleDateInlineField(): SingleDateInlineField;
    interface AbstractTimeBetween extends $D.Framework.Design.Report.InlineFields.InlineField {
        DateColumn1: string;
        DateColumn2: string;
    }
    function AbstractTimeBetween(): AbstractTimeBetween;
    interface GetTimesBetween extends $D.Framework.Design.Report.InlineFields.InlineField {
        DateColumn1: string;
        DateColumn2: string;
        SpecifyAdvancedFormat: $D.Framework.Design.Report.InlineFields.TimeSpanFormat;
        Format: string;
    }
    function GetTimesBetween(): GetTimesBetween;
    interface AbstractImageInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
    }
    function AbstractImageInlineField(): AbstractImageInlineField;
    interface OpenURLInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        URLText: string;
        DisplayText: string;
        UseExistingWindow: boolean;
        WindowName: string;
    }
    function OpenURLInlineField(): OpenURLInlineField;
    interface RunFlowInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        Flow: string;
        ShowUI: boolean;
        DisplayText: string;
    }
    function RunFlowInlineField(): RunFlowInlineField;
    interface AbstractTimespanInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
    }
    function AbstractTimespanInlineField(): AbstractTimespanInlineField;
    interface YesNoInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        ColumnName: string;
    }
    function YesNoInlineField(): YesNoInlineField;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface GridViewRowsData extends $D.Framework.Design.Report.Service.Comunication.BaseReportViewReultData {
        JsonRows: string[];
        GridColumnColoring: $D.Framework.Design.Report.Service.Comunication.ReportViewerCellColorInfo[];
        GridRowColoring: $D.Framework.Design.Report.Service.Comunication.ReportViewerCellColorInfo[];
        SelectedRowIndex: any;
        TypeColumnName: string;
    }
    function GridViewRowsData(): GridViewRowsData;
    interface ReportDesignerFolderInfo extends $D.Framework._DBO {
        FolderID: string;
        Name: string;
        ElementsCount: number;
        Elements: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[];
        Subfolders: $D.Framework.Design.Report.Service.Comunication.ReportDesignerFolderInfo[];
    }
    function ReportDesignerFolderInfo(): ReportDesignerFolderInfo;
    interface ReportElementAdded extends $D.Framework._DBO {
        ReportContextId: string;
        ReportElementInfo: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo;
    }
    function ReportElementAdded(): ReportElementAdded;
    interface ReportServiceSettingsChanged extends $D.Framework._DBO {
        DisplayData: $D.Framework.Design.Report.Service.Comunication.ReportDisplayData;
    }
    function ReportServiceSettingsChanged(): ReportServiceSettingsChanged;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface ElementTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        Attributes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[];
    }
    function ElementTypeFilter(): ElementTypeFilter;
    interface BehaviorTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        BehaviorTypeNames: string[];
    }
    function BehaviorTypeFilter(): BehaviorTypeFilter;
    interface SubElementTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        SubElementType: string;
    }
    function SubElementTypeFilter(): SubElementTypeFilter;
    interface NoSubElementTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
    }
    function NoSubElementTypeFilter(): NoSubElementTypeFilter;
    interface ElementDataQueryDefinition extends $D.Framework._DBO {
        DataType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        IsArray: boolean;
        AllowCompatibleType: boolean;
    }
    function ElementDataQueryDefinition(): ElementDataQueryDefinition;
    interface OutcomesCountFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        Count: number;
        TestForAtLeastOneData: boolean;
    }
    function OutcomesCountFilter(): OutcomesCountFilter;
    interface ParentFolderFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        TypeOfSearch: $D.Framework.ServiceLayer.Services.ConfigurationStorage.FolderSearchType;
        ParentFolderId: string;
    }
    function ParentFolderFilter(): ParentFolderFilter;
    interface TextFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        TextToSearch: string;
    }
    function TextFilter(): TextFilter;
    interface ClassNameFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        ClassName: string;
    }
    function ClassNameFilter(): ClassNameFilter;
    interface ClassNameIsNullOrEmptyFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
    }
    function ClassNameIsNullOrEmptyFilter(): ClassNameIsNullOrEmptyFilter;
    interface HasMatrixFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
    }
    function HasMatrixFilter(): HasMatrixFilter;
    interface HasSubtotalsOrGroupingsFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
    }
    function HasSubtotalsOrGroupingsFilter(): HasSubtotalsOrGroupingsFilter;
    interface DataDeclaration extends $D.Framework.Data.ORMapper.BaseORMEntity {
        DataDeclarationId: string;
        Name: string;
        DataType: string;
        IsList: boolean;
        IsRequired: boolean;
        Index: number;
    }
    function DataDeclaration(): DataDeclaration;
    interface ElementConfigurationData extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ComponentConfigDataID: string;
        Data: number[];
    }
    function ElementConfigurationData(): ElementConfigurationData;
    interface ExportedAsServiceFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        IncludeOnlyJsonServices: boolean;
    }
    function ExportedAsServiceFilter(): ExportedAsServiceFilter;
    interface ParentFolderIsRootFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
    }
    function ParentFolderIsRootFilter(): ParentFolderIsRootFilter;
    interface NewRegistrationItem extends $D.Framework._DBO {
        Id: string;
        Kind: string;
        Name: string;
        SuggestedName: string;
        ElementType: any;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        Action: $D.Framework.ServiceLayer.Actions.ActionHeader;
        IsFavorite: boolean;
        Description: string;
        CategoryName: string;
        FactoryName: string;
        Order: number;
    }
    function NewRegistrationItem(): NewRegistrationItem;
    interface DesignerFolderFilterAbilities extends $D.Framework._DBO {
        TypeAndNumberPairs: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Tags: string[];
    }
    function DesignerFolderFilterAbilities(): DesignerFolderFilterAbilities;
}
declare module $D.Framework.Design.Form.ComponentData.CompositeControls {
    interface RuntimeChildrenProviderChildClientInfo extends $D.Framework._DBO {
        Id: string;
        ClientData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function RuntimeChildrenProviderChildClientInfo(): RuntimeChildrenProviderChildClientInfo;
}
declare module $D.Framework.Design.Properties.Attributes {
    interface EntityPickerSettings extends $D.Framework._DBO {
        Types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[];
        FilterNames: string[];
        HasSearch: boolean;
        ShowFolders: $D.Framework.Design.Properties.Attributes.PickerFolders;
        ExpandFolders: $D.Framework.Design.Properties.Attributes.PickerFolders;
        Actions: $D.Framework.Design.Properties.Attributes.PickerActions;
        ActionsText: string;
        CurrentFolderId: string;
        RootFolderId: string;
        UseSystemFolderAsRoot: boolean;
        RootSystemFolder: $D.Framework.ServiceLayer.Services.Folder.SystemFolder;
        Title: string;
        CreateEntityFolderId: string;
        PickedEntityId: string;
        EntityVisibility: $D.Framework.Design.Properties.Attributes.PickerEntityVisibility;
        FolderVisibility: $D.Framework.Design.Properties.Attributes.PickerFolderVisibility;
    }
    function EntityPickerSettings(): EntityPickerSettings;
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    interface TagData extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        Tag: string;
        ObjectId: string;
        ObjectType: string;
        ObjectShortType: string;
        TagNote: string;
    }
    function TagData(): TagData;
}
declare module $D.Framework.ServiceLayer.Agent {
    interface AgentInstructionsResult extends $D.Framework._DBO {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function AgentInstructionsResult(): AgentInstructionsResult;
}
declare module $D.Framework.ServiceLayer.Actions {
    interface NavigateActionHeader extends $D.Framework.ServiceLayer.Actions.ActionHeader {
        Ni: string;
        PageParameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Url: string;
    }
    function NavigateActionHeader(): NavigateActionHeader;
}
declare module $D.Framework.ServiceLayer.Services {
    interface EntityPickerItem extends $D.Framework._DBO {
        Id: string;
        EntityName: string;
        FolderId: string;
        Hidden: boolean;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        Thumbnail: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
    }
    function EntityPickerItem(): EntityPickerItem;
    interface RecentPickedEntityServiceEvent extends $D.Framework._DBO {
        EntityId: string;
        EntityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo;
        ElementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[];
    }
    function RecentPickedEntityServiceEvent(): RecentPickedEntityServiceEvent;
}
declare module $D.Framework.ServiceLayer.Services.Twitter {
    interface Tweet extends $D.Framework._DBO {
        annotations: any;
        contributors: $D.Framework.ServiceLayer.Services.Twitter.TweetContributor[];
        coordinates: $D.Framework.ServiceLayer.Services.Twitter.TweetCoordinates[];
        created_at: string;
        favorite_count: number;
        favorited: boolean;
        filter_level: string;
        id: number;
        id_str: string;
        in_reply_to_screen_name: string;
        in_reply_to_status_id: any;
        in_reply_to_status_id_str: string;
        in_reply_to_user_id: any;
        in_reply_to_user_id_str: string;
        lang: string;
        place: $D.Framework.ServiceLayer.Services.Twitter.TweetPlace[];
        possibly_sensitive: boolean;
        retweet_count: number;
        retweeted: boolean;
        retweeted_status: $D.Framework.ServiceLayer.Services.Twitter.Tweet;
        source: string;
        text: string;
        truncated: boolean;
        user: $D.Framework.ServiceLayer.Services.Twitter.TweetUser;
        withheld_copyright: boolean;
        withheld_in_countries: string[];
        withheld_scope: string;
    }
    function Tweet(): Tweet;
}
declare module $D.Framework.ServiceLayer.Services.Translation {
    interface LanguageTranslationData extends $D.Framework.ServiceLayer.Services.Translation.TranslationData {
        Language: string;
    }
    function LanguageTranslationData(): LanguageTranslationData;
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    interface ThemeGradient extends $D.Framework._DBO {
        Name: string;
        GradientType: $D.Framework.ServiceLayer.Services.Theme.ThemeGradientType;
        Color: string;
        StartPoint: string;
        EndPoint: string;
        Gradients: $D.Framework.ServiceLayer.Services.Theme.ThemeGradientBreak[];
    }
    function ThemeGradient(): ThemeGradient;
    interface ThemeDeviceProfile extends $D.Framework._DBO {
        PortalSize: $D.Framework.Data.DataTypes.UISize;
        UsePortalSizeDefault: boolean;
        ShowFolderTreeAtStartup: boolean;
        UseShowFolderTreeAtStartupDefault: boolean;
        HeaderView: string;
        TreeView: string;
        MenuSize: number;
        UseMenuSizeDefault: boolean;
        ShowMenuOnHover: boolean;
        UseShowMenuOnHoverDefault: boolean;
        ShowFolderByDefault: $D.Framework.ServiceLayer.Services.Theme.ThemeDefaultAction;
        UseShowFolderByDefaultDefault: boolean;
        ContextMenuItemMinHeight: number;
        ContextMenuItemMaxHeight: number;
        ContextMenuItemLabelScale: number;
        ContextMenuItemIconScale: number;
        ContextMenuItemIconTranslateX: number;
        ContextMenuItemIconTranslateY: number;
        ContextMenuItemArrowTranslateY: number;
        ContextMenuItemOpacity: number;
        GridRowMinHeight: number;
        HasContextMenuItemMinHeight: boolean;
        HasContextMenuItemMaxHeight: boolean;
        HasContextMenuItemLabelScale: boolean;
        HasContextMenuItemIconScale: boolean;
        HasContextMenuItemIconTranslateX: boolean;
        HasContextMenuItemIconTranslateY: boolean;
        HasContextMenuItemArrowTranslateY: boolean;
        HasContextMenuItemOpacity: boolean;
        HasGridRowMinHeight: boolean;
    }
    function ThemeDeviceProfile(): ThemeDeviceProfile;
    interface ThemeLabel extends $D.Framework.ServiceLayer.Services.Theme.ThemeFont {
        Width: number;
        Height: number;
        Visibility: string;
        Opacity: number;
        Cursor: string;
        Foreground: string;
        LineHeight: number;
        Text: string;
        Underlined: boolean;
        TextWrapping: string;
        TextAlignment: string;
        TextTrimming: string;
        VerticalAlignment: string;
        HorizontalAlignment: string;
    }
    function ThemeLabel(): ThemeLabel;
}
declare module $D.Framework.ServiceLayer.Services.Theme.ThemeEdit {
    interface ThemeTreeCategory extends $D.Framework._DBO {
        Categories: string[];
        ThemeVariables: $D.Framework.ServiceLayer.Services.Theme.ThemeEdit.ThemeVariableNode[];
    }
    function ThemeTreeCategory(): ThemeTreeCategory;
}
declare module $D.Framework.ServiceLayer.Services.Support {
    interface DatabaseHealthCheckData extends $D.Framework._DBO {
        TableData: $D.Framework.ServiceLayer.Services.Support.DatabaseHealthTableData[];
    }
    function DatabaseHealthCheckData(): DatabaseHealthCheckData;
    interface FSHealthCheckData extends $D.Framework._DBO {
        FSHealth: $D.Framework.ServiceLayer.Services.Support.FSUnitHealth[];
    }
    function FSHealthCheckData(): FSHealthCheckData;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    interface BasicHttpBindingDefinition extends $D.Framework.ServiceLayer.Services.ServiceManagement.BindingDefinition {
        SecurityMode: $D.Framework.ServiceLayer.Services.ServiceManagement.BasicHttpSecurityType;
    }
    function BasicHttpBindingDefinition(): BasicHttpBindingDefinition;
    interface NetNamedBindingDefinition extends $D.Framework.ServiceLayer.Services.ServiceManagement.BindingDefinition {
        SecurityMode: $D.Framework.ServiceLayer.Services.ServiceManagement.NetNamedPipeSecurityType;
    }
    function NetNamedBindingDefinition(): NetNamedBindingDefinition;
    interface WSHttpBindingDefinition extends $D.Framework.ServiceLayer.Services.ServiceManagement.BindingDefinition {
        SecurityMode: $D.Framework.ServiceLayer.Services.ServiceManagement.SecurityType;
    }
    function WSHttpBindingDefinition(): WSHttpBindingDefinition;
    interface NetTcpBindingDefinition extends $D.Framework.ServiceLayer.Services.ServiceManagement.BindingDefinition {
        SecurityMode: $D.Framework.ServiceLayer.Services.ServiceManagement.SecurityType;
    }
    function NetTcpBindingDefinition(): NetTcpBindingDefinition;
    interface ProxyInfo extends $D.Framework._DBO {
        BaseUrl: string;
        BindingDefintion: $D.Framework.ServiceLayer.Services.ServiceManagement.BindingDefinition;
    }
    function ProxyInfo(): ProxyInfo;
    interface ServiceIntegrationModel extends $D.Framework.ServiceLayer.Services.ServiceManagement.IntegrationModel {
        ServiceName: string;
        MethodName: string;
    }
    function ServiceIntegrationModel(): ServiceIntegrationModel;
    interface ElementRegistrationIntegrationModel extends $D.Framework.ServiceLayer.Services.ServiceManagement.IntegrationModel {
        ElementRegistrationID: string;
    }
    function ElementRegistrationIntegrationModel(): ElementRegistrationIntegrationModel;
}
declare module $D.Framework.ServiceLayer.Services.ServiceInformation {
    interface ServiceMethodInformation extends $D.Framework._DBO {
        Name: string;
        Parameters: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceParameterInformation[];
    }
    function ServiceMethodInformation(): ServiceMethodInformation;
}
declare module $D.Framework.ServiceLayer.Services.Statistics {
    interface ClientStatistic extends $D.Framework.Data.ORMapper.BaseORMEntity {
        EntityId: string;
        SessionId: string;
        AlternateId: string;
        DateTime: Date;
        EndDateTime: any;
        UserId: string;
        ApplicationName: string;
        SectionName: string;
        SubSectionName: string;
        ActionName: string;
        TimeTakenInSeconds: number;
        EmailAddress: string;
        PlatformEntityTypeName: string;
        PlatformEntityId: string;
        FlowTrackingId: string;
    }
    function ClientStatistic(): ClientStatistic;
    interface ExecutionStatistics extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        Category: string;
        SubCategory: string;
        Parameter1: string;
        Parameter2: string;
        Parameter3: string;
        Parameter4: string;
        Parameter5: string;
        OutcomeName: string;
        ExecutionTime: number;
        ReferenceId: string;
        ReferenceName: string;
        ReferenceType: $D.Framework.ServiceLayer.Services.Statistics.ExecutionStatisticType;
        Result: string;
        ExecutionDateTime: Date;
        ExecutedByUser: string;
    }
    function ExecutionStatistics(): ExecutionStatistics;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface ServerIPInfo extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ServerIP: string;
        IpAddrId: string;
    }
    function ServerIPInfo(): ServerIPInfo;
}
declare module $D.Framework.ServiceLayer.Services.Scheduling {
    interface CalculationResultWithFolder extends $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult {
        FolderId: string;
        FolderName: string;
        FolderPath: string;
    }
    function CalculationResultWithFolder(): CalculationResultWithFolder;
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob {
    interface JobScheduleCalendar extends $D.Framework.Data.ORMapper.BaseORMEntity {
        JobScheduleCalendarId: string;
    }
    function JobScheduleCalendar(): JobScheduleCalendar;
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    interface RelationSearchReturn extends $D.Framework._DBO {
        TotalCount: number;
        RelationIdentifiers: $D.Framework.ServiceLayer.Services.Relations.RelationIdentifier[];
    }
    function RelationSearchReturn(): RelationSearchReturn;
}
declare module $D.Framework.ServiceLayer.Services.PopularEntities {
    interface PopularEntities extends $D.Framework.Data.ORMapper.BaseORMEntity {
        PopularEntityID: string;
        EntityType: string;
        EntityId: string;
        AccessedBy: string;
        AccessedDate: Date;
    }
    function PopularEntities(): PopularEntities;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface AbstractContactEntity extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ContactPriorityID: string;
        ContactPriorityName: string;
        ContactPriorityOrder: number;
        IsSecured: boolean;
        Members: string[];
        OwnerID: string;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
        ContactPreferenceOrder: number;
    }
    function AbstractContactEntity(): AbstractContactEntity;
}
declare module $D.Framework.ServiceLayer.Services.ObjectLockService {
    interface LockDetails extends $D.Framework.Data.ORMapper.BaseORMEntity {
        LockedByUserId: string;
        LockedByClientId: string;
        LockedByEmail: string;
        LockedUntil: Date;
        LockedEntityName: string;
        LockedEntityId: string;
    }
    function LockDetails(): LockDetails;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface NotificationMessage extends $D.Framework._DBO {
        From: string;
        FolderPath: string;
        FolderId: string;
        Subject: string;
        ResponseUrl: string;
        ResponseUrlName: string;
        Text: string;
        Attachments: $D.Framework.Data.DataTypes.FileData[];
        ActionEntities: $D.Framework.Design.Report.EntityReportAction[];
        NotificationMessageType: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessageType;
        IncludeMachineName: boolean;
        PopupLocation: $D.Framework.Design.Flow.CoreSteps.PopupLocation;
    }
    function NotificationMessage(): NotificationMessage;
    interface NotifyTo extends $D.Framework.Data.ORMapper.BaseORMEntity {
        NotifyToID: string;
    }
    function NotifyTo(): NotifyTo;
}
declare module $D.Framework.ServiceLayer.Services.NativeMobilePortal {
    interface NativePortalFolder extends $D.Framework._DBO {
        ParentFolders: $D.Framework.ServiceLayer.Services.NativeMobilePortal.NativePortalFolder[];
        FolderId: string;
        FolderName: string;
        Pages: $D.Framework.ServiceLayer.Services.NativeMobilePortal.NativePortalPage[];
        HasSubPages: boolean;
    }
    function NativePortalFolder(): NativePortalFolder;
    interface WorkflowCatalogCategory extends $D.Framework._DBO {
        IsDefault: boolean;
        Name: string;
        CatalogItems: $D.Framework.ServiceLayer.Services.NativeMobilePortal.WorkflowCatalogItem[];
    }
    function WorkflowCatalogCategory(): WorkflowCatalogCategory;
}
declare module $D.Framework.ServiceLayer.Services.Groups {
    interface GroupSearchReturn extends $D.Framework._DBO {
        TotalCountAvailable: number;
        GroupIdentifiers: $D.Framework.ServiceLayer.Services.Groups.GroupIdentifier[];
    }
    function GroupSearchReturn(): GroupSearchReturn;
}
declare module $D.Framework.ServiceLayer.Services.DBQuery {
    interface Table extends $D.Framework._DBO {
        Name: string;
        FullName: string;
        Fields: $D.Framework.ServiceLayer.Services.DBQuery.Field[];
        SchemaName: string;
    }
    function Table(): Table;
    interface SqlQueryDto extends $D.Framework._DBO {
        Id: string;
        SqlText: string;
        QueryStatus: $D.Framework.ServiceLayer.Services.DBQuery.Status;
        Stats: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Columns: string[];
        Error: string;
    }
    function SqlQueryDto(): SqlQueryDto;
    interface Page extends $D.Framework._DBO {
        QueryId: string;
        Items: any[][];
        PageInfo: $D.Framework.ServiceLayer.Services.DBQuery.PageInfo;
    }
    function Page(): Page;
    interface RunQueryResults extends $D.Framework._DBO {
        Error: string;
        Queries: $D.Framework.ServiceLayer.Services.DBQuery.SqlQuery[];
    }
    function RunQueryResults(): RunQueryResults;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions {
    interface QueryParameterDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions.ParameterDefinition {
        MaximumSize: number;
        DefaultValue: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    }
    function QueryParameterDefinition(): QueryParameterDefinition;
    interface ProcedureParameterDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions.ParameterDefinition {
        Direction: any;
        DefaultValue: string;
    }
    function ProcedureParameterDefinition(): ProcedureParameterDefinition;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface QueryContextInfo extends $D.Framework._DBO {
        Name: string;
        Query: string;
        Timeout: any;
        Parameters: $D.Framework.ServiceLayer.Services.DatabaseIntegration.QueryParameterEditor[];
        ReturnData: boolean;
        OutputCount: boolean;
        ReturnDataOption: $D.Framework.ServiceLayer.Services.DatabaseIntegration.OutputQueryOption;
        OutputType: $D.Framework.Design.Flow.Mapping.DecisionsType;
        Delimiter: $D.Framework.Design.Flow.CoreSteps.CSV.CSVSeparator;
        OutputHeaderRow: boolean;
    }
    function QueryContextInfo(): QueryContextInfo;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.DefinitionServices {
    interface QueryResultsForPreview extends $D.Framework._DBO {
        Columns: $D.Framework.Data.DataTypes.ColumnInfo[];
        Message: string;
        Data: $D.Framework.Data.DataTypes.FileData;
    }
    function QueryResultsForPreview(): QueryResultsForPreview;
}
declare module $D.Framework.ServiceLayer.Services.CodeBucket {
    interface CodeFileData extends $D.Framework.Data.DataTypes.FileData {
        TypeName: string;
        Id: string;
        DependsOn: string[];
    }
    function CodeFileData(): CodeFileData;
}
declare module $D.Framework.ServiceLayer.Services.Chat {
    interface Invitation extends $D.Framework.Data.ORMapper.BaseORMEntity {
        InvitationId: string;
        InvitedTo: string;
    }
    function Invitation(): Invitation;
    interface ChatMessage extends $D.Framework.ServiceLayer.Services.Chat.ChatServiceNotification {
        Message: string;
    }
    function ChatMessage(): ChatMessage;
    interface PostedDocument extends $D.Framework.ServiceLayer.Services.Chat.ChatServiceNotification {
        Id: string;
        Title: string;
    }
    function PostedDocument(): PostedDocument;
    interface UserJoinedNotification extends $D.Framework.ServiceLayer.Services.Chat.ChatServiceNotification {
        IsInvited: boolean;
    }
    function UserJoinedNotification(): UserJoinedNotification;
    interface UserLeftNotification extends $D.Framework.ServiceLayer.Services.Chat.ChatServiceNotification {
    }
    function UserLeftNotification(): UserLeftNotification;
    interface UserOfflineNotification extends $D.Framework.ServiceLayer.Services.Chat.ChatServiceNotification {
    }
    function UserOfflineNotification(): UserOfflineNotification;
}
declare module $D.Framework.ServiceLayer.Services.AuditService {
    interface AuditSettingsType extends $D.Framework.Data.ORMapper.BaseORMEntity {
    }
    function AuditSettingsType(): AuditSettingsType;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface AssigneeDto extends $D.Framework._DBO {
        Id: string;
        PrimaryText: string;
        SecondaryText: string;
        Type: $D.Framework.ServiceLayer.Services.Assignments.AssigneeType;
        AdditionalData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        State: $D.Framework.ServiceLayer.Services.Assignments.State;
    }
    function AssigneeDto(): AssigneeDto;
    interface AssignmentNotificationHandler extends $D.Framework.ServiceLayer.Services.Assignments.BaseAssignmentEscalationHandler {
        NotifyFor: $D.Framework.ServiceLayer.Services.Assignments.AssignmentStateNotifyType;
    }
    function AssignmentNotificationHandler(): AssignmentNotificationHandler;
    interface ExcludeAssignTo extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ID: string;
        AssignmentID: string;
    }
    function ExcludeAssignTo(): ExcludeAssignTo;
}
declare module $D.Framework.ServiceLayer.Services.Approvals {
    interface ApprovalData extends $D.Framework._DBO {
        RuleId: string;
        ApprovalDataId: string;
        Approvers: $D.Framework.ServiceLayer.Services.Approvals.ApproverInfo[];
        TimeToApprove: any;
        CreatedOnDate: Date;
    }
    function ApprovalData(): ApprovalData;
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    interface AccountGroupJoin extends $D.Framework.Data.ORMapper.BaseORMEntity {
        AccountGroupJoinId: string;
        AccountGroupJoinID: string;
        AccountID: string;
        GroupID: string;
    }
    function AccountGroupJoin(): AccountGroupJoin;
    interface AccountSearchReturn extends $D.Framework._DBO {
        TotalCountAvailable: number;
        AccountIdentifiers: $D.Framework.ServiceLayer.Services.Accounts.AccountIdentifier[];
    }
    function AccountSearchReturn(): AccountSearchReturn;
    interface AllowedAccountImpersonations extends $D.Framework.Data.ORMapper.BaseORMEntity {
    }
    function AllowedAccountImpersonations(): AllowedAccountImpersonations;
    interface LoginHistory extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        AccountId: string;
        LoginDate: Date;
        LogoutDate: any;
        AccountEmailAddress: string;
        SessionId: string;
        AccountUserIdentifier: string;
        InstanceId: string;
        IPAddress: string;
    }
    function LoginHistory(): LoginHistory;
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory {
    interface ActiveDirectoryServerRegistation extends $D.Framework.Data.ORMapper.BaseORMEntity {
        Id: string;
        LDAPSchema: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.LDAPSchema;
        Server: string;
        ActiveDirectorySettingsId: string;
        BaseDN: string;
        DomainName: string;
        UseAgent: boolean;
        AgentId: string;
        DomainLoginPrefix: string;
        UseNoLoginPrefix: boolean;
        DefaultEmailDomain: string;
        ElevatedUserName: string;
        ElevatedUserPassword: string;
        LogonBy: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.LogonBy;
        AutoCreateUsersOnInitialLogin: boolean;
        SyncOnlyUsers: boolean;
        IgnoreManagersOutOfGroup: boolean;
        SyncManagersForUser: boolean;
        SyncManagersMessage: string;
        SyncOnlyGroupsFromLoggedInUsers: boolean;
        IncludeUserGroupsNotInGroupList: boolean;
        CreateNewUsersEvenIfDisabledInAD: boolean;
        SyncOption: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectorySyncOption;
        DefaultGroups: string[];
        SelectedOrgUnits: string[];
        SelectedGroups: string[];
        SelectedGroupIds: string[];
        LastGroupUSN: number;
        LastUserUSN: number;
    }
    function ActiveDirectoryServerRegistation(): ActiveDirectoryServerRegistation;
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ADSearchDataTypes {
    interface ADGroupSearchResult extends $D.Framework._DBO {
        InternalGroups: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryMember[];
        HasMore: boolean;
        Index: number;
    }
    function ADGroupSearchResult(): ADGroupSearchResult;
    interface ADUserSearchResult extends $D.Framework._DBO {
        InternalUsers: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryMember[];
        Index: number;
        HasMore: boolean;
    }
    function ADUserSearchResult(): ADUserSearchResult;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService {
    interface MultiPartFormDataPart extends $D.Framework._DBO {
        Name: string;
        PartType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.MultiPartFormDataPartType;
        File: $D.Framework.Data.DataTypes.FileData;
        PartValue: string;
        ContentType: string;
        OverrideFilename: boolean;
        Filename: string;
        AdditionalHeaders: $D.Framework.Data.DataTypes.SimpleKeyValuePair[];
    }
    function MultiPartFormDataPart(): MultiPartFormDataPart;
    interface RestHeaders extends $D.Framework.Data.ORMapper.BaseORMEntity {
        RestHeaderId: string;
        HeaderKey: string;
        Name: string;
    }
    function RestHeaders(): RestHeaders;
    interface RestValueOutput extends $D.Framework.Data.ORMapper.BaseORMEntity {
        RestValueOutputId: string;
        Path: string;
        Name: string;
    }
    function RestValueOutput(): RestValueOutput;
}
declare module $D.Framework.ServiceLayer.Services.ClientEvents {
    interface EventData extends $D.Framework._DBO {
        UserId: string;
        ClientEventSessionId: string;
        EventId: string;
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    }
    function EventData(): EventData;
    interface SetEvents extends $D.Framework._DBO {
        Events: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function SetEvents(): SetEvents;
}
declare module $D.Framework.Design.Report.SubcalcFields {
    interface SubCalcFieldDefinition extends $D.Framework._DBO {
        FieldName: string;
        DataSource: string;
        OutputName: string;
        CalculationType: $D.Framework.Design.Report.CalculationType;
        TypeOfCalc: $D.Framework.Design.Report.CalculationType;
        Format: string;
        IsFromRowDimension: boolean;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function SubCalcFieldDefinition(): SubCalcFieldDefinition;
}
declare module $D.Framework.ServiceLayer.Actions {
    interface BaseActionType extends $D.Framework.ServiceLayer.Actions.ActionHeader {
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
    }
    function BaseActionType(): BaseActionType;
}
declare module $D.Framework.ServiceLayer {
    interface AbstractEntity extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        AllTagsData: string;
        EntityName: string;
        EntityDescription: string;
        State: string;
        CreatedOnDate: Date;
        ModifiedDate: Date;
        CreatedBy: string;
        ModifiedBy: string;
        Archived: boolean;
        ArchivedBy: string;
        ArchivedDate: Date;
    }
    function AbstractEntity(): AbstractEntity;
    interface AbstractEntityExtensionData extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        ExtensionId: string;
        EntityId: string;
        EntityTypeName: string;
    }
    function AbstractEntityExtensionData(): AbstractEntityExtensionData;
}
declare module $D.Framework.Design.Properties {
    interface DefinedData extends $D.Framework.Design.Properties.AbstractDefinedData {
    }
    function DefinedData(): DefinedData;
    interface ToolboxHelpDisplayData extends $D.Framework._DBO {
        IsEmpty: boolean;
        ShortHelp: string;
        LongHelp: string;
        UrlToExternalHelp: string;
        LinkName: string;
        ToolboxHelpId: string;
        Outcomes: $D.Framework.Design.Properties.Help.Outcome[];
        Inputs: $D.Framework.Design.Properties.Help.PropertyDefinition[];
    }
    function ToolboxHelpDisplayData(): ToolboxHelpDisplayData;
    interface ContextProviderNodeChangedNotification extends $D.Framework._DBO {
        ContextId: string;
        Path: string[];
        PropertyValue: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
        ValidationIssues: $D.Framework.ValidationIssue[];
        NotificationType: $D.Framework.Design.Properties.ContextProviderEventType;
        Node: $D.Framework.Design.Properties.ContextNode;
        ProviderNode: $D.Framework.Design.Properties.ContextProviderNode;
    }
    function ContextProviderNodeChangedNotification(): ContextProviderNodeChangedNotification;
}
declare module $D.Framework.Design.Flow.Mapping {
    interface DecisionsEnumType extends $D.Framework.Design.Flow.Mapping.DecisionsDefinedType {
    }
    function DecisionsEnumType(): DecisionsEnumType;
    interface DynamicObject extends $D.Framework._DBO {
        Type: $D.Framework.Design.Flow.Mapping.DecisionsDefinedType;
        NativeTypeName: string;
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function DynamicObject(): DynamicObject;
    interface OutcomeScenarioData extends $D.Framework._DBO {
        ExitPointName: string;
        OutputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function OutcomeScenarioData(): OutcomeScenarioData;
}
declare module $D.DesignerRepository.Client {
    interface CheckinResult extends $D.Framework._DBO {
        RevisionId: string;
        Resources: $D.DesignerRepository.ResourceCheckinInfo[];
        Errors: string[];
    }
    function CheckinResult(): CheckinResult;
}
declare module $D.DesignerRepository.Client.Service {
    interface CheckinResultStats extends $D.Framework._DBO {
        RevisionId: string;
        Statistics: $D.DesignerRepository.Client.Service.CheckinTypeStats;
        Errors: string[];
    }
    function CheckinResultStats(): CheckinResultStats;
    interface DiffModuleClientInfo extends $D.Framework._DBO {
        ModuleName: string;
        BranchName: string;
        RevisionIdOnClient: string;
        RevisionIdOnServer: string;
        LastCheckinDateOnServer: any;
        LastCheckinByOnServer: string;
        LastCheckinDate: any;
        LastCheckoutDate: any;
        CalculatedDate: any;
        ResourcesDifferences: $D.DesignerRepository.Client.Service.DiffResourceClientInfo[];
    }
    function DiffModuleClientInfo(): DiffModuleClientInfo;
    interface CheckinSession extends $D.Framework._DBO {
        revisionId: string;
        exportDirectory: string;
        moduleName: string;
        branchName: string;
        infos: $D.DesignerRepository.ResourceCheckinInfo[];
        notes: string;
        forceCheckin: boolean;
        errors: any;
    }
    function CheckinSession(): CheckinSession;
}
declare module $D.Silverlight.UI.Utilities {
    interface LabelAttributes extends $D.Framework._DBO {
        FontFamily: string;
        FontSize: number;
        LabelColor: $D.Silverlight.UI.Utilities.DesignerColor;
        IsBold: boolean;
        IsItalic: boolean;
        IsUnderlined: boolean;
    }
    function LabelAttributes(): LabelAttributes;
}
declare module $D.Silverlight.UI.Core.FormDesignerModel {
    interface BaseFormValidationSetting extends $D.Framework._DBO {
        OverrideValidationsSettings: boolean;
        DisplayType: $D.Framework.Design.ValidationDisplayType;
        OutlineType: $D.Framework.Design.ValidationOutlineType;
        BreakBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BreakBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        WarningBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        WarningBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DisplayNoIssueValidation: boolean;
        NoIssueBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        NoIssueBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        IsValidMessage: string;
        OnlyShowValidMessageWhenFilledIn: boolean;
    }
    function BaseFormValidationSetting(): BaseFormValidationSetting;
}
declare module $D.FlowSets {
    interface RuleSetDto extends $D.Framework._DBO {
        RunFlowId: string;
        Id: string;
        Name: string;
        BehaviorType: string;
        CreatedBy: string;
        ModifiedDate: Date;
        ModifiedBy: string;
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        RuleSetsInSet: any;
        TileData: any;
        FlowSetType: $D.FlowSets.FlowSetTemplateType;
        DefaultCategory: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
        Instances: $D.FlowSets.DropDownItem[];
        IntegrationType: $D.Framework.Design.IntegrationType;
        ServiceDataFormat: $D.Framework.Design.ServiceDataFormat;
        ServiceReferenceType: $D.Framework.Design.ServiceReferenceType;
    }
    function RuleSetDto(): RuleSetDto;
    interface RuleSetSubsetData extends $D.Framework._DBO {
        ElementToRunData: $D.FlowSets.RuleSetElementToRun[];
        SubsetId: string;
        Name: string;
        ChildrenData: $D.FlowSets.RuleSetSubsetData[];
        FolderOrder: number;
        InclusionRule: string;
        DataAugmentationFlow: string;
    }
    function RuleSetSubsetData(): RuleSetSubsetData;
    interface RuleSetSampleSetEvaluation extends $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetStatistics {
        RuleSetId: string;
        RuleFlowSetId: string;
        Result: any;
    }
    function RuleSetSampleSetEvaluation(): RuleSetSampleSetEvaluation;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Samples {
    interface RuleSampleSetEvaluation extends $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetStatistics {
        TrueNumber: number;
        FalseNumber: any;
        MissingNumber: any;
    }
    function RuleSampleSetEvaluation(): RuleSampleSetEvaluation;
    interface SampleSetDataCoverage extends $D.Framework.Design.Flow.Service.Debugging.Samples.SampleSetStatistics {
        OutputDataNames: string[];
        Coverage: $D.Framework.Design.Flow.Service.Debugging.Samples.OutputDataCoverage[];
    }
    function SampleSetDataCoverage(): SampleSetDataCoverage;
    interface SampleForTree extends $D.Framework._DBO {
        Id: string;
        Name: string;
        Category: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
        CreatedOnDate: any;
        IsEntity: boolean;
    }
    function SampleForTree(): SampleForTree;
}
declare module $D.Framework.ProjectConversion {
    interface ConvertedStep extends $D.Framework._DBO {
        UniqueStepIdForConnections: string;
        StepName: string;
        FullTypeName: string;
        InputData: $D.Framework.ProjectConversion.StepInput[];
        OutcomeData: $D.Framework.ProjectConversion.OutcomeDefinition[];
        StepProperties: $D.Framework.ProjectConversion.StepInput[];
        X: number;
        Y: number;
    }
    function ConvertedStep(): ConvertedStep;
    interface ConvertedForm extends $D.Framework._DBO {
        FormId: string;
        FormName: string;
        FormDescription: string;
        FormImage: number[];
        FormData: number[];
        InputData: $D.Framework.ProjectConversion.DataDefinition[];
        OutputData: $D.Framework.ProjectConversion.OutcomeDefinition[];
        FormBehavior: string;
        Tags: string[];
    }
    function ConvertedForm(): ConvertedForm;
    interface BaseConvertedRule extends $D.Framework._DBO {
        RuleName: string;
        Description: string;
        BeginDate: any;
        EndDate: any;
        RuleId: string;
        FolderId: string;
        InputData: $D.Framework.ProjectConversion.DataDefinition[];
        OutputData: $D.Framework.ProjectConversion.OutcomeDefinition[];
        RuleType: $D.Framework.Design.Flow.RuleType;
        RuleBehavior: string;
    }
    function BaseConvertedRule(): BaseConvertedRule;
}
declare module $D.Framework.ProjectConversion.RuleImport {
    interface ConvertedRuleStatement extends $D.Framework._DBO {
        GroupType: $D.Framework.ProjectConversion.RuleImport.GroupType;
        GroupStatements: $D.Framework.ProjectConversion.RuleImport.ConvertedStatementData[];
    }
    function ConvertedRuleStatement(): ConvertedRuleStatement;
}
declare module $D.Framework.ServiceLayer.Services.ProjectConversion {
    interface ConvertedMatrixRule extends $D.Framework._DBO {
        ImageData: number[];
        RuleId: string;
        RuleName: string;
        Description: string;
        InputData: $D.Framework.ProjectConversion.DataDefinition[];
        OutputData: $D.Framework.ProjectConversion.OutcomeDefinition[];
        RuleBehavior: string;
        BeginDate: any;
        EndDate: any;
    }
    function ConvertedMatrixRule(): ConvertedMatrixRule;
}
declare module $D.Framework.Utilities.Profiler {
    interface ProfileResult extends $D.Framework._DBO {
        Id: string;
        ParentId: string;
        NestingLevel: number;
        Type: $D.Framework.Utilities.Profiler.ProfilerType;
        ProfileName: string;
        Times: $D.Framework.Utilities.Profiler.ProfileTime[];
        CreatedTypes: $D.Framework.Utilities.Profiler.ProfileTypeData[];
        Details: $D.Framework.Utilities.Profiler.ProfilerDetail[];
        SummaryRecords: $D.Framework.Utilities.Profiler.ProfileTimeSummary[];
    }
    function ProfileResult(): ProfileResult;
}
declare module $D.Framework.Utilities.Messaging {
    interface RefreshTreeMessage extends $D.Framework.Utilities.Messaging.ActionMessage {
    }
    function RefreshTreeMessage(): RefreshTreeMessage;
}
declare module $D.Framework.Utilities.Logging {
    interface FileLoggerSinkSettings extends $D.Framework.Utilities.Logging.AbstractSinkSetting {
        LogCategorySettings: $D.Framework.FileLogCategortySetting[];
        LogFileMaxSize: number;
        LogMaxBackups: number;
    }
    function FileLoggerSinkSettings(): FileLoggerSinkSettings;
}
declare module $D.Framework.Data.ORMapper {
    interface EntityHeaderData extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        AllTagsData: string;
        Id: string;
        ShortTypeName: string;
        EntityName: string;
        EntityDescription: string;
        SearchContents: string;
        FolderID: string;
        CreatedBy: string;
        ModifiedBy: string;
        CreatedOnDate: Date;
        ModifiedDate: Date;
        TypeName: string;
        TableName: string;
        ExcludedFromSearch: boolean;
        Hidden: boolean;
        State: string;
        Archived: boolean;
        ArchivedDate: Date;
        ArchivedBy: string;
        AdministratorViewOnly: boolean;
        ExtensionTypeName: string;
    }
    function EntityHeaderData(): EntityHeaderData;
    interface MSSQLDateRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseDateConverter {
    }
    function MSSQLDateRelationalMappingFieldConverter(): MSSQLDateRelationalMappingFieldConverter;
    interface MYSQLDateRelationalMappingFieldConverter extends $D.Framework.Data.ORMapper.BaseDateConverter {
    }
    function MYSQLDateRelationalMappingFieldConverter(): MYSQLDateRelationalMappingFieldConverter;
    interface OracleDateConverter extends $D.Framework.Data.ORMapper.BaseDateConverter {
    }
    function OracleDateConverter(): OracleDateConverter;
    interface ProcedureParam extends $D.Framework.Data.ORMapper.CommandParam {
        Direction: any;
    }
    function ProcedureParam(): ProcedureParam;
    interface InsertAndGetIdentityStatement extends $D.Framework.Data.ORMapper.InsertStatement {
    }
    function InsertAndGetIdentityStatement(): InsertAndGetIdentityStatement;
    interface InsertOrUpdateStatement extends $D.Framework.Data.ORMapper.UpsertStatement {
    }
    function InsertOrUpdateStatement(): InsertOrUpdateStatement;
    interface UpsertMergeStatement extends $D.Framework.Data.ORMapper.UpsertStatement {
    }
    function UpsertMergeStatement(): UpsertMergeStatement;
}
declare module $D.Framework.Data.ORMapper.Encryption {
    interface EncryptionKeyRotationStatusResult extends $D.Framework._DBO {
        IsRunning: boolean;
        Messages: $D.Framework.Data.ORMapper.Encryption.EncryptionKeyChangeAuditHistory[];
        Issues: $D.Framework.Data.ORMapper.Encryption.EncryptionKeyChangeIssue[];
        TotalToProcess: number;
        ProcessedCount: number;
    }
    function EncryptionKeyRotationStatusResult(): EncryptionKeyRotationStatusResult;
}
declare module $D.Framework.Data.DataTypes {
    interface QueryPreview extends $D.Framework._DBO {
        Columns: $D.Framework.Data.DataTypes.ColumnInfo[];
        Rows: $D.Framework.Data.DataTypes.RowInfo[];
    }
    function QueryPreview(): QueryPreview;
}
declare module $D.Framework.Design {
    interface DataDescriptionWithIssue extends $D.Framework.Design.Flow.Mapping.DataDescription {
        Issue: $D.Framework.ValidationIssue;
    }
    function DataDescriptionWithIssue(): DataDescriptionWithIssue;
    interface SaveDesignerInfo extends $D.Framework._DBO {
        HasDependencyThresholdExceeded: boolean;
        DependenciesNumber: number;
        BrokenDependencies: $D.Framework.ServiceLayer.Services.EntityDetails.EntityHeaderDto[];
        NumberOfDependenciesToFix: number;
    }
    function SaveDesignerInfo(): SaveDesignerInfo;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface FolderEntitySummaryData extends $D.Framework._DBO {
        EntityFullTypeName: string;
        EntityShortTypeName: string;
        EntityData: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
        AssignedTo: string;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        AccountInitials: string;
        Actions: $D.Framework.ServiceLayer.Actions.ActionHeader[];
    }
    function FolderEntitySummaryData(): FolderEntitySummaryData;
    interface ParentFolderData extends $D.Framework.ServiceLayer.Services.Folder.SubFolderData {
        ShowInTree: boolean;
    }
    function ParentFolderData(): ParentFolderData;
    interface SubFolderViewData extends $D.Framework.ServiceLayer.Services.Folder.SubFolderData {
        HasSubFolders: boolean;
        SubMenuBehavior: $D.Framework.ServiceLayer.Services.Folder.SubMenuBehavior;
        SubMenuGroupName: string;
        AvailableForDisplayType: boolean;
        IconUrl: string;
        Color: string;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function SubFolderViewData(): SubFolderViewData;
    interface FavoriteEntityAdded extends $D.Framework.ServiceLayer.Services.Folder.FavoriteEntityMessage {
    }
    function FavoriteEntityAdded(): FavoriteEntityAdded;
    interface FavoriteEntityRemoved extends $D.Framework.ServiceLayer.Services.Folder.FavoriteEntityMessage {
    }
    function FavoriteEntityRemoved(): FavoriteEntityRemoved;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface TableTemplateStyle extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.TemplateStyle {
        HasBorder: boolean;
        Border: $D.Silverlight.UI.Utilities.DesignerColor;
        BorderThickness: number;
        HasLeftBorder: boolean;
        HasTopBorder: boolean;
        HasRightBorder: boolean;
        HasBottomBorder: boolean;
        HasBackground: boolean;
        Background: $D.Silverlight.UI.Utilities.DesignerColor;
        Columns: number;
        UseCellsAlternatedBackground: boolean;
        CellsNormalBackground: $D.Silverlight.UI.Utilities.DesignerColor;
        CellsAlternateBackground: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function TableTemplateStyle(): TableTemplateStyle;
}
declare module $D.Framework.Design.Page {
    interface PDFSettings extends $D.Framework._DBO {
        PageOrientation: any;
        PageSize: any;
        PrintTemplate: $D.Framework.Design.Page.Layouts.ExportElement;
    }
    function PDFSettings(): PDFSettings;
    interface PrintContextEx extends $D.Framework._DBO {
        ContextId: string;
        FolderId: string;
        RegistrationId: string;
        ComponentId: string;
        TemplateId: string;
        ReportContextId: string;
        ViewToExport: string;
        Views: $D.Framework.Design.Report.ReportView[];
        OutputHandlers: $D.Framework.Data.DataTypes.FlowReference[];
        RuntimeData: any;
        Format: $D.Framework.Design.Page.ReportExportFormat;
        ReportDistributionType: string;
        ReportDistributionTypeID: string;
        IsPrintOrDownloadDistribution: boolean;
    }
    function PrintContextEx(): PrintContextEx;
}
declare module $D.Framework.Design.Page.Layouts {
    interface ExportLayout extends $D.Framework.Design.Page.Layouts.ExportElement {
        BackgroundColor: $D.Framework.Design.Page.Layouts.ExportColor;
        BorderColor: $D.Framework.Design.Page.Layouts.ExportColor;
        BorderThickness: number;
    }
    function ExportLayout(): ExportLayout;
    interface ExportLayoutCanvasChild extends $D.Framework._DBO {
        Left: number;
        Top: number;
        Content: $D.Framework.Design.Page.Layouts.ExportElement;
    }
    function ExportLayoutCanvasChild(): ExportLayoutCanvasChild;
    interface ExportLayoutGridCell extends $D.Framework._DBO {
        ColumnSpan: number;
        RowSpan: number;
        BackgroundColor: $D.Framework.Design.Page.Layouts.ExportColor;
        BorderColor: $D.Framework.Design.Page.Layouts.ExportColor;
        BorderLeftThickness: number;
        BorderRightThickness: number;
        BorderTopThickness: number;
        BorderBottomThickness: number;
        PaddingLeft: number;
        PaddingRight: number;
        PaddingTop: number;
        PaddingBottom: number;
        Content: $D.Framework.Design.Page.Layouts.ExportElement;
    }
    function ExportLayoutGridCell(): ExportLayoutGridCell;
    interface ExportImage extends $D.Framework.Design.Page.Layouts.ExportElement {
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        PixelWidth: number;
        PixelHeight: number;
    }
    function ExportImage(): ExportImage;
    interface ExportText extends $D.Framework.Design.Page.Layouts.ExportElement {
        Text: string;
        Font: $D.Framework.Design.Page.Layouts.ExportFont;
        FontColor: $D.Framework.Design.Page.Layouts.ExportColor;
        Direction: $D.Framework.Design.Page.Layouts.ExportTextDirection;
        HorizontalAlignment: $D.Framework.Design.Page.Layouts.ExportTextAlignment;
        VerticalAlignment: $D.Framework.Design.Page.Layouts.ExportTextAlignment;
    }
    function ExportText(): ExportText;
    interface ExportHtmlText extends $D.Framework.Design.Page.Layouts.ExportElement {
        HtmlText: string;
    }
    function ExportHtmlText(): ExportHtmlText;
    interface ExportMatrixView extends $D.Framework.Design.Page.Layouts.ExportElement {
        ReportId: string;
        FolderId: string;
        ReportContextId: string;
        UseSettings: boolean;
        UseSettingsForAnyFolder: boolean;
    }
    function ExportMatrixView(): ExportMatrixView;
    interface ExportReportView extends $D.Framework.Design.Page.Layouts.ExportElement {
        ReportId: string;
        FolderId: string;
        ReportContextId: string;
        OutputType: $D.Framework.Design.Page.Layouts.ExportReportViewType;
        UseSettings: boolean;
        UseSettingsForAnyFolder: boolean;
    }
    function ExportReportView(): ExportReportView;
    interface ExportTemplateContent extends $D.Framework.Design.Page.Layouts.ExportElement {
        Content: $D.Framework.Design.Page.Layouts.ExportElement;
    }
    function ExportTemplateContent(): ExportTemplateContent;
    interface ExportPageBreak extends $D.Framework.Design.Page.Layouts.ExportElement {
    }
    function ExportPageBreak(): ExportPageBreak;
    interface ExportChartLegend extends $D.Framework.Design.Page.Layouts.ExportElement {
        ChartPartId: string;
    }
    function ExportChartLegend(): ExportChartLegend;
}
declare module $D.Framework.Design.Page.Personalization {
    interface PersonalizationChangeEvent extends $D.Framework._DBO {
        Personalizations: $D.Framework.Design.Page.Personalization.Personalization[];
    }
    function PersonalizationChangeEvent(): PersonalizationChangeEvent;
    interface PersonalizationClearedEvent extends $D.Framework._DBO {
        Personalization: $D.Framework.Design.Page.Personalization.Personalization;
    }
    function PersonalizationClearedEvent(): PersonalizationClearedEvent;
}
declare module $D.Framework.Design.Page.Filters {
    interface EnumMatch extends $D.Framework.Design.Page.Filters.PickStringFilterValue {
    }
    function EnumMatch(): EnumMatch;
    interface PickStringDataFilter extends $D.Framework.Design.Page.Filters.AbstractDataFilter {
        FilterValue: $D.Framework.Design.Page.Filters.PickStringFilterValue;
    }
    function PickStringDataFilter(): PickStringDataFilter;
}
declare module $D.Framework.Design.Flow {
    interface FlowLabelAttributes extends $D.Framework._DBO {
        LabelColor: $D.Silverlight.UI.Utilities.DesignerColor;
        FontFamily: string;
        FontSize: number;
        IsBold: boolean;
        IsItalic: boolean;
        IsSmallCaps: boolean;
    }
    function FlowLabelAttributes(): FlowLabelAttributes;
    interface StandardShapeSettings extends $D.Framework._DBO {
        BorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BorderWidth: number;
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function StandardShapeSettings(): StandardShapeSettings;
    interface ElementRegistrationEditorInformation extends $D.Framework.Design.Flow.FlowStepEditorInformation {
        RegistrationId: string;
        RegistrationType: string;
    }
    function ElementRegistrationEditorInformation(): ElementRegistrationEditorInformation;
    interface FlowStepMappingEditorInformation extends $D.Framework.Design.Flow.FlowStepEditorInformation {
        FlowStepName: string;
        ForInput: boolean;
    }
    function FlowStepMappingEditorInformation(): FlowStepMappingEditorInformation;
    interface ExternalDataRuleDataSet extends $D.Framework._DBO {
        Data: $D.Framework.Design.Flow.ExternalDataRuleExecutionData[];
        RuleId: string;
        TotalRows: number;
    }
    function ExternalDataRuleDataSet(): ExternalDataRuleDataSet;
    interface FlowDisplayData extends $D.Framework._DBO {
        LinksLineType: $D.Framework.Design.Flow.FlowLinkLineType;
        LinksJumpLines: $D.Framework.Design.Flow.FlowBooleanSetting;
        LinksAvoidNodes: $D.Framework.Design.Flow.FlowBooleanSetting;
        LinksColor: string;
        FlowDesignerBackground: $D.Silverlight.UI.Utilities.DesignerColor;
        FlowDesignerLinkTextColor: string;
        FlowDesignerNodeTextColor: string;
        FlowDesignerNodeFont: string;
        FlowDesignerLinkFont: string;
        Swimlanes: $D.Framework.Design.Flow.FlowSwimlaneInfo[];
        SwimlanesType: $D.Framework.Design.Flow.FlowSwimlanesType;
        DesignerType: $D.Framework.Design.Flow.FlowDesignerType;
        DesiredWidth: number;
        DesiredHeight: number;
        CustomCss: string;
        StepCatalogTitle: string;
        StepCatalogSearchWatermark: string;
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        ValidationIssues: $D.Framework.ValidationIssue[];
    }
    function FlowDisplayData(): FlowDisplayData;
    interface FlowStepToolboxInformation extends $D.Framework._DBO {
        Label: string;
        IconURI: string;
        StepNode: string[];
        StepId: string;
        AdditionalData: $D.Framework.Design.Flow.StepCreationInfo;
        CanBeFavorite: boolean;
        IsFavorite: boolean;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        ItemType: $D.Framework.Design.Flow.FlowStepToolboxItemType;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ShowHelpLayer: boolean;
    }
    function FlowStepToolboxInformation(): FlowStepToolboxInformation;
    interface FlowEditServiceEventsReturn extends $D.Framework.Design.Properties.ResultWithEvents {
    }
    function FlowEditServiceEventsReturn(): FlowEditServiceEventsReturn;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface OpenUrlEditorInformation extends $D.Framework.Design.Flow.FlowStepEditorInformation {
        URL: string;
        InNewWindow: boolean;
    }
    function OpenUrlEditorInformation(): OpenUrlEditorInformation;
    interface DataDescriptionWithValue extends $D.Framework._DBO {
        DataDescription: $D.Framework.Design.Flow.Mapping.DataDescription;
        TextedValue: string;
    }
    function DataDescriptionWithValue(): DataDescriptionWithValue;
    interface EditDataDefinitionContext extends $D.Framework._DBO {
        DataDef: $D.Framework.Design.Flow.Service.Edit.DataDefinitionForEdit;
        ContextId: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
        EditTypeActionNm: string;
        EditTypeActionId: string;
        EntityTypeName: string;
    }
    function EditDataDefinitionContext(): EditDataDefinitionContext;
    interface MatrixIntersectionInfo extends $D.Framework._DBO {
        LeftNodeId: string;
        TopNodeId: string;
        DisplayValue: string;
        MappingType: string;
        Actions: $D.Framework.Design.Flow.Service.RuleActionDisplayData[];
        ValidationIssues: $D.Framework.ValidationIssue[];
        AllowActions: boolean;
    }
    function MatrixIntersectionInfo(): MatrixIntersectionInfo;
    interface MatrixRuleEditServiceEvent extends $D.Framework._DBO {
        EditSessionInfo: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSession;
    }
    function MatrixRuleEditServiceEvent(): MatrixRuleEditServiceEvent;
    interface MatrixRuleEventData extends $D.Framework._DBO {
        DimensionId: string;
        DisplayValue: string;
        MappingType: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
        Actions: $D.Framework.Design.Flow.Service.RuleActionDisplayData[];
        AllowActions: boolean;
    }
    function MatrixRuleEventData(): MatrixRuleEventData;
}
declare module $D.Framework.Design.Flow.Mapping.SelectValue {
    interface SelectValuePiece extends $D.Framework._DBO {
        OriginalDataDescription: $D.Framework.Design.Flow.Mapping.DataDescription;
        PropertyName: string;
        NextPiece: $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePiece;
        ListSelectionType: $D.Framework.Design.Flow.Mapping.SelectValue.SelectionType;
        ChangeType: boolean;
        SetDefaultIfNull: boolean;
    }
    function SelectValuePiece(): SelectValuePiece;
    interface SelectValuePieceDto extends $D.Framework._DBO {
        Id: string;
        IsDynamic: boolean;
        RuleId: string;
        ChangeType: boolean;
        AsType: string;
        ConverterName: string;
        OriginalDataDescription: $D.Framework.Design.Flow.Mapping.DataDescription;
        ShowRule: boolean;
        ListSelectionType: $D.Framework.Design.Flow.Mapping.SelectValue.SelectionType;
        ListSelectionTypeName: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
        IsEnum: boolean;
        Converters: $D.Framework.Design.Flow.Mapping.SelectValue.ConverterDto[];
        ResolvedValue: string;
    }
    function SelectValuePieceDto(): SelectValuePieceDto;
}
declare module $D.Framework.Design.Flow.ExternalForm {
    interface ExternalFormReferenceOutcome extends $D.Framework.Data.ORMapper.BaseORMEntity {
        ExternalFormReferenceOutcomeId: string;
        Name: string;
        Parameters: $D.Framework.Design.Flow.ExternalForm.ExternalFormReferenceDataParameter[];
    }
    function ExternalFormReferenceOutcome(): ExternalFormReferenceOutcome;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface BaseInstructionWithHandlerURL extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        HandlerUrl: string;
    }
    function BaseInstructionWithHandlerURL(): BaseInstructionWithHandlerURL;
    interface FlowRunningAsyncInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
    }
    function FlowRunningAsyncInstruction(): FlowRunningAsyncInstruction;
    interface ExceptionResultInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        ExceptionMessage: string;
        ExceptionText: string;
        Title: string;
        RichName: string;
        RichDescription: string;
        PlatformEntityTypeName: string;
        PlatformEntityId: string;
    }
    function ExceptionResultInstruction(): ExceptionResultInstruction;
    interface CloseFormSessionInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        CloseMessage: string;
        NavigateToFolderId: string;
        Url: string;
        OpenInNewWindow: boolean;
        NavigateInSubWindow: boolean;
        PageName: string;
        ReportId: string;
        Parameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        UpdateNavigationParameters: boolean;
    }
    function CloseFormSessionInstruction(): CloseFormSessionInstruction;
    interface FlowPausedInstructions extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
    }
    function FlowPausedInstructions(): FlowPausedInstructions;
    interface DuplicateFormRunInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        Message: string;
    }
    function DuplicateFormRunInstruction(): DuplicateFormRunInstruction;
    interface FlowParametersRequiredInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        InputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function FlowParametersRequiredInstruction(): FlowParametersRequiredInstruction;
    interface AbstractFlowExecutionExtensionData extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        Id: string;
        ExtensionId: string;
    }
    function AbstractFlowExecutionExtensionData(): AbstractFlowExecutionExtensionData;
    interface CompletedResult extends $D.Framework.Design.Flow.Service.Execution.AbstractResultState {
        FlowOutputValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Results: $D.Framework.Design.Flow.Service.Execution.BranchResult[];
    }
    function CompletedResult(): CompletedResult;
}
declare module $D.Framework.Design.Flow.CoreSteps {
    interface PlaceholderOutcome extends $D.Framework._DBO {
        Path: string;
        OutputData: $D.Framework.Design.Flow.CoreSteps.PlaceholderData[];
    }
    function PlaceholderOutcome(): PlaceholderOutcome;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface TileReturn extends $D.Framework._DBO {
        ActionType: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturnActionType;
        EntityTypeName: string;
        EntityId: string;
        Url: string;
        FolderId: string;
        PageName: string;
        FlowId: string;
        DataBusName: string;
        DataBusValue: string;
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        TileDetails: $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn;
    }
    function TileReturn(): TileReturn;
    interface AbstractTitledTile extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        TitleFontSize: number;
        TitleFontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        TitleFontFamily: string;
        TitleHorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
        TitleText: string;
    }
    function AbstractTitledTile(): AbstractTitledTile;
    interface TileHTMLText extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        HtmlText: string;
    }
    function TileHTMLText(): TileHTMLText;
    interface TextSettings extends $D.Framework._DBO {
        FontSize: number;
        FontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        FontFamily: string;
        VerticalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileVerticalAlign;
        HorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
    }
    function TextSettings(): TextSettings;
    interface TileMetricRange extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        RangeLabel: string;
        PrimaryRange: number[];
        ComparisonRange: number[];
        Difference: any;
        DifferencePercentage: any;
        IncreaseIsGood: boolean;
        RangeFromDate: string;
        RangeToDate: string;
    }
    function TileMetricRange(): TileMetricRange;
    interface TileMetricSLA extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        SlaLabel: string;
        Difference: any;
        DifferencePercentage: any;
        IncreaseIsGood: boolean;
        Value: number;
        ExpectedValue: any;
        RangeFromDate: string;
        RangeToDate: string;
    }
    function TileMetricSLA(): TileMetricSLA;
    interface TileLabel extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Text: string;
        FontSize: number;
        FontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        FontFamily: string;
        VerticalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileVerticalAlign;
        HorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
    }
    function TileLabel(): TileLabel;
    interface TileSimpleText extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Text: string;
    }
    function TileSimpleText(): TileSimpleText;
    interface TileSimpleHTMLText extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Text: string;
    }
    function TileSimpleHTMLText(): TileSimpleHTMLText;
    interface TileShapeReturn extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        MetricId: string;
        TileName: string;
        Metrics: $D.Framework.Design.Flow.CoreSteps.Metro.TileMetricReturn[];
        Indicator: $D.Framework.Design.Flow.CoreSteps.Metro.IndicatorType;
        Highlighted: boolean;
    }
    function TileShapeReturn(): TileShapeReturn;
    interface TileStepReturn extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        StepId: string;
        Highlighted: boolean;
    }
    function TileStepReturn(): TileStepReturn;
    interface TileLineReturn extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Highlighted: boolean;
        FromMetricId: string;
        ToMetricId: string;
        FromStepId: string;
        ToStepId: string;
        LineWidth: any;
        LineColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DashPattern: number[];
        LineBubbleText: string;
        LineBubbleColor: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function TileLineReturn(): TileLineReturn;
    interface TileFlowStepReturn extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Highlighted: boolean;
        StepId: string;
    }
    function TileFlowStepReturn(): TileFlowStepReturn;
}
declare module $D.Framework.Design.Flow.Annotations {
    interface SimpleAnnotation extends $D.Framework.Design.Flow.Annotations.RectangleAnnotation {
        Text: string;
        HorizontalTextAlignment: $D.Framework.Design.Flow.Annotations.AnnotationHorizontalAlignment;
        VerticalTextAlignment: $D.Framework.Design.Flow.Annotations.AnnotationVerticalAlignment;
    }
    function SimpleAnnotation(): SimpleAnnotation;
    interface RichTextAnnotation extends $D.Framework.Design.Flow.Annotations.RectangleAnnotation {
        RichText: string;
        HorizontalTextAlignment: $D.Framework.Design.Flow.Annotations.AnnotationHorizontalAlignment;
        VerticalTextAlignment: $D.Framework.Design.Flow.Annotations.AnnotationVerticalAlignment;
        MinDisplayWidth: number;
        MinDisplayHeight: number;
    }
    function RichTextAnnotation(): RichTextAnnotation;
    interface LegendData extends $D.Framework._DBO {
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        Label: string;
    }
    function LegendData(): LegendData;
    interface SegmentDataWithColor extends $D.Framework.Design.Flow.Annotations.SegmentData {
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function SegmentDataWithColor(): SegmentDataWithColor;
    interface LineDefinition extends $D.Framework._DBO {
        SegmentData: $D.Framework.Design.Flow.Annotations.SegmentData[];
        LineLabel: string;
        LineColor: $D.Silverlight.UI.Utilities.DesignerColor;
        LineWidth: number;
    }
    function LineDefinition(): LineDefinition;
    interface GanttChartData extends $D.Framework._DBO {
        Name: string;
        Order: number;
        CompletePercentage: any;
        StartDate: Date;
        EndDate: Date;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        StartValue: number;
        Duration: number;
    }
    function GanttChartData(): GanttChartData;
}
declare module $D.Framework.Design.Flow.Service {
    interface FlowServiceDesignerNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        UserMessage: string;
    }
    function FlowServiceDesignerNotification(): FlowServiceDesignerNotification;
    interface FlowPropertyChangedNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        ChangedPropertyName: string;
    }
    function FlowPropertyChangedNotification(): FlowPropertyChangedNotification;
    interface FlowServiceConnectionNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        FlowStepConnectionId: string;
        DisplayData: $D.Framework.Design.Flow.StepConnectionData;
    }
    function FlowServiceConnectionNotification(): FlowServiceConnectionNotification;
    interface FlowServiceAnnotationNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        Annotations: $D.Framework.Design.Flow.Annotations.FlowAnnotation[];
    }
    function FlowServiceAnnotationNotification(): FlowServiceAnnotationNotification;
    interface FlowServiceCopyPasteDataNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        HasCopyPasteData: boolean;
    }
    function FlowServiceCopyPasteDataNotification(): FlowServiceCopyPasteDataNotification;
    interface FlowServiceToolboxNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        ToolboxPath: string[];
    }
    function FlowServiceToolboxNotification(): FlowServiceToolboxNotification;
    interface FlowServiceRunFlowValidationNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
    }
    function FlowServiceRunFlowValidationNotification(): FlowServiceRunFlowValidationNotification;
    interface FlowServiceReloadDesignerNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
    }
    function FlowServiceReloadDesignerNotification(): FlowServiceReloadDesignerNotification;
    interface SampleDisplayData extends $D.Framework._DBO {
        MissingInputData: string[];
        MissingSampleData: string[];
        DefaultSampleCategory: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
        CanLoadSampleSet: boolean;
        SampleId: string;
        SampleCategory: $D.Framework.Design.Flow.Service.Debugging.Samples.SampleCategory;
    }
    function SampleDisplayData(): SampleDisplayData;
    interface RuleTableHeaderNotification extends $D.Framework.Design.Flow.Service.RuleServiceNotification {
        HeaderId: string;
        DisplayData: $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData;
    }
    function RuleTableHeaderNotification(): RuleTableHeaderNotification;
    interface RuleActionChangeNotification extends $D.Framework._DBO {
        RuleStepId: string;
        ActionData: $D.Framework.Design.Flow.Service.RuleActionDisplayData;
    }
    function RuleActionChangeNotification(): RuleActionChangeNotification;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface TypeDescription extends $D.Framework._DBO {
        NodeInfo: $D.Framework.Design.Flow.Mapping.DataDescription;
        ChildNodes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.TypeDescription[];
        IsComplexType: boolean;
        DefaultValue: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    }
    function TypeDescription(): TypeDescription;
    interface InputDataTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        InputData: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[];
    }
    function InputDataTypeFilter(): InputDataTypeFilter;
    interface OutputDataTypeFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        Queries: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[];
        MatchType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.OutcomesMatch;
    }
    function OutputDataTypeFilter(): OutputDataTypeFilter;
    interface InputsFilter extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseIterationFilter {
        Inputs: $D.Framework.Design.Flow.Mapping.DataDescription[];
        SearchBy: $D.Framework.ServiceLayer.Services.ConfigurationStorage.InputField[];
    }
    function InputsFilter(): InputsFilter;
    interface OutputScenario extends $D.Framework.Data.ORMapper.BaseORMEntity {
        OutputScenarioId: string;
        Name: string;
        DataOutputs: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DataDeclaration[];
    }
    function OutputScenario(): OutputScenario;
    interface IntegrationParameter extends $D.Framework._DBO {
        SchemaType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.IntegrationSchemaType;
        SchemaForType: $D.Framework.Design.Flow.Mapping.DataDescription;
        SchemaString: string;
    }
    function IntegrationParameter(): IntegrationParameter;
    interface ElementDataOutputQueryDefinition extends $D.Framework._DBO {
        Queries: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementDataQueryDefinition[];
        MatchType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.OutcomesMatch;
    }
    function ElementDataOutputQueryDefinition(): ElementDataOutputQueryDefinition;
    interface DeclaredInterfaceDto extends $D.Framework._DBO {
        Id: string;
        Name: string;
        Description: string;
        InputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
        IsDefaultForFolder: boolean;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function DeclaredInterfaceDto(): DeclaredInterfaceDto;
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    interface RuleEditStructureList extends $D.Framework._DBO {
        RowOrder: number;
        ColumnData: $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure[];
    }
    function RuleEditStructureList(): RuleEditStructureList;
    interface RuleExtension extends $D.Framework._DBO {
        RuleName: string;
        RuleId: string;
        AnchorData: $D.Framework.Design.Flow.Mapping.DataDescription;
    }
    function RuleExtension(): RuleExtension;
    interface RuleStructure extends $D.Framework.Design.Flow.Service.TruthTable.RuleEditStructure {
        ColumnIndex: number;
        AnchorDataName: string;
        VerbInfo: string;
    }
    function RuleStructure(): RuleStructure;
}
declare module $D.Framework.Design.Form {
    interface EventsAndDataReturn extends $D.Framework.Design.Form.EventsReturn {
        Value: $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    }
    function EventsAndDataReturn(): EventsAndDataReturn;
    interface FormComponentCreationInfo extends $D.Framework.Design.Form.FormComponentInfo {
        ToolboxInformation: $D.Framework.Design.Form.FormToolboxInformation;
    }
    function FormComponentCreationInfo(): FormComponentCreationInfo;
    interface ControlReplacementInfo extends $D.Framework._DBO {
        DataDescription: $D.Framework.Design.Flow.Mapping.DataDescription;
        Name: string;
        CanGenerateLabel: boolean;
    }
    function ControlReplacementInfo(): ControlReplacementInfo;
    interface FormElementInfo extends $D.Framework._DBO {
        Id: string;
        ParentId: string;
        Name: string;
        TypeName: string;
        IsRootContainer: boolean;
        DesignerWidth: number;
        DesignerHeight: number;
        HasChildren: boolean;
        Children: $D.Framework.Design.Form.FormElementInfo[];
        HasValidationWarnings: boolean;
        HasValidationErrors: boolean;
        InteractionInfo: $D.Framework.Design.Form.ElementInteractionInfo;
        TabOrder: number;
        IsNonRemovable: boolean;
        IsCanvas: boolean;
        IsContainer: boolean;
        RespectTabbing: boolean;
        ConfigurationData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        ValidationIssues: $D.Framework.ValidationIssue[];
    }
    function FormElementInfo(): FormElementInfo;
    interface ValidationChangedEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        CurrentValidations: $D.Framework.Design.Form.FormInfoValidationIssue[];
    }
    function ValidationChangedEvent(): ValidationChangedEvent;
    interface ClearValidationIssuesEvent extends $D.Framework.Design.Form.DecisionsServerControlEvent {
        RuleID: string;
    }
    function ClearValidationIssuesEvent(): ClearValidationIssuesEvent;
    interface NextInstructionEvent extends $D.Framework.Design.Form.DecisionsFormInfoServerEvent {
        NextInstruction: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction;
    }
    function NextInstructionEvent(): NextInstructionEvent;
    interface NewFormDataWithHideLoadingIndicatorEvent extends $D.Framework.Design.Form.NewFormDataEvent {
    }
    function NewFormDataWithHideLoadingIndicatorEvent(): NewFormDataWithHideLoadingIndicatorEvent;
    interface VisibiltyEvent extends $D.Framework.Design.Form.DecisionsServerControlEvent {
        IsVisible: boolean;
    }
    function VisibiltyEvent(): VisibiltyEvent;
    interface EnabledEvent extends $D.Framework.Design.Form.DecisionsServerControlEvent {
        IsEnabled: boolean;
        HideControlValue: boolean;
    }
    function EnabledEvent(): EnabledEvent;
    interface RefreshEvent extends $D.Framework.Design.Form.DecisionsServerControlEvent {
    }
    function RefreshEvent(): RefreshEvent;
    interface FormValidationIssues extends $D.Framework._DBO {
        ValidationIssues: $D.Framework.Design.Form.FormValidationIssue[];
    }
    function FormValidationIssues(): FormValidationIssues;
}
declare module $D.Framework.Design.Flow.Service.Debugging.DebugData {
    interface FlowStepCompleteData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepStartedData {
        End: Date;
        OutcomePaths: string[];
    }
    function FlowStepCompleteData(): FlowStepCompleteData;
    interface FlowStepExceptionData extends $D.Framework.Design.Flow.Service.Debugging.DebugData.FlowStepStartedData {
        ExceptionMessage: string;
        ExceptionStack: string;
    }
    function FlowStepExceptionData(): FlowStepExceptionData;
    interface DebugTreeFormEvent extends $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent {
        FlowTrackingId: string;
        StepTrackingId: string;
    }
    function DebugTreeFormEvent(): DebugTreeFormEvent;
    interface DebugTreeFlowEvent extends $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeEvent {
        FlowSessionId: string;
        FlowDebugType: $D.Framework.Design.Flow.Service.Debugging.FlowDebugType;
        StartedBy: string;
    }
    function DebugTreeFlowEvent(): DebugTreeFlowEvent;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData {
    interface DataDesignerSurface extends $D.Framework._DBO {
        Diagrams: $D.Framework.Design.Flow.Service.Edit.InputData.DataDiagram[];
    }
    function DataDesignerSurface(): DataDesignerSurface;
    interface DiagramDisplayData extends $D.Framework._DBO {
        Id: string;
        DataDescription: $D.Framework.Design.Flow.Mapping.DataDescription;
        SubDataDesriptions: $D.Framework.Design.Flow.Mapping.DataDescription[];
        View: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramView;
        InlineMapping: $D.Framework.Design.Flow.InlineMapping;
        ValidationIssues: $D.Framework.ValidationIssue[];
        IsSimpleType: boolean;
    }
    function DiagramDisplayData(): DiagramDisplayData;
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    interface FlowStoppedWithInstructionsEvent extends $D.Framework.Design.Flow.Service.Debugging.FlowDebugEvent {
        Instruction: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction;
    }
    function FlowStoppedWithInstructionsEvent(): FlowStoppedWithInstructionsEvent;
    interface FlowDebugInfo extends $D.Framework._DBO {
        BreakpointsIgnored: $D.Framework.Design.Flow.Service.Debugging.FlowBreakpoint[];
        PauseInfo: $D.Framework.Design.Flow.Service.Debugging.FlowPauseInfo[];
        Options: $D.Framework.Design.Flow.Service.Debugging.FlowDebugOptions[];
        AllBreakpointsDisabled: boolean;
        FlowsWithBreakpointsIgnored: string[];
        Parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters;
    }
    function FlowDebugInfo(): FlowDebugInfo;
    interface UnitTestResult extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        State: string;
        Result: $D.Framework.Design.Flow.Service.Debugging.TestResult;
        ErrorMessage: string;
        BreakMessage: $D.Framework.Design.Flow.Service.Debugging.UnitTestBreak;
    }
    function UnitTestResult(): UnitTestResult;
}
declare module $D.Framework.Design.Flow.Service.Debugging.Events {
    interface RuleStepExceptionEvent extends $D.Framework.Design.Flow.Service.Debugging.Events.RuleExceptionEvent {
        RuleStepId: string;
    }
    function RuleStepExceptionEvent(): RuleStepExceptionEvent;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface GetStringAction extends $D.Framework._DBO {
        ShowCopyText: boolean;
        TextType: $D.Framework.ServiceLayer.Actions.Common.GetTextType;
        EnforceNotEmptyRule: boolean;
        DialogHeight: any;
        DialogWidth: any;
        CurrentAnswer: string;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetStringAction(): GetStringAction;
    interface GetDateTimeAction extends $D.Framework._DBO {
        CurrentAnswer: Date;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetDateTimeAction(): GetDateTimeAction;
    interface GetTimeSpanAction extends $D.Framework._DBO {
        CurrentAnswer: string;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetTimeSpanAction(): GetTimeSpanAction;
    interface GetIntAction extends $D.Framework._DBO {
        MinValue: number;
        MaxValue: number;
        CurrentAnswer: number;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetIntAction(): GetIntAction;
    interface GetDecimalAction extends $D.Framework._DBO {
        CurrentAnswer: number;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetDecimalAction(): GetDecimalAction;
    interface GetNullableDecimalAction extends $D.Framework._DBO {
        CurrentAnswer: any;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetNullableDecimalAction(): GetNullableDecimalAction;
    interface GetBoolAction extends $D.Framework._DBO {
        CurrentAnswer: boolean;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetBoolAction(): GetBoolAction;
    interface ConfirmWithBoolAnswerAction extends $D.Framework._DBO {
        AnswerLabel: string;
        CurrentAnswer: boolean;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function ConfirmWithBoolAnswerAction(): ConfirmWithBoolAnswerAction;
    interface GetFileAction extends $D.Framework._DBO {
        IsDragDropTarget: boolean;
        Filter: $D.Framework.ServiceLayer.Actions.Common.FileFilter;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetFileAction(): GetFileAction;
    interface GetTitleAndDescriptionAction extends $D.Framework._DBO {
        TextType: $D.Framework.ServiceLayer.Actions.Common.TextType;
        EnsureTitleNotEmpty: boolean;
        EnsureDescriptionNotEmpty: boolean;
        CurrentAnswer: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetTitleAndDescriptionAction(): GetTitleAndDescriptionAction;
    interface GetTitleDescriptionAndFileAction extends $D.Framework._DBO {
        CurrentAnswer: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription;
        TextType: $D.Framework.ServiceLayer.Actions.Common.TextType;
        EnsureTitleNotEmpty: boolean;
        EnsureDescriptionNotEmpty: boolean;
        EnsureFileNotEmpty: boolean;
        Title: string;
        Label: string;
        OkActionName: string;
        CancelActionName: string;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function GetTitleDescriptionAndFileAction(): GetTitleDescriptionAndFileAction;
    interface MakeMultiObjectSelectionAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeMultiObjectSelectionAction(): MakeMultiObjectSelectionAction;
    interface MakeMultiStringSelectionAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeMultiStringSelectionAction(): MakeMultiStringSelectionAction;
    interface MakeMultiEnumSelectionAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeMultiEnumSelectionAction(): MakeMultiEnumSelectionAction;
    interface MakeObjectSelectionAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        CurrentSelection: string;
        ProcessButtonText: string;
        CancelActionName: string;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeSelectionType;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeObjectSelectionAction(): MakeObjectSelectionAction;
    interface MakeStringSelectionAction extends $D.Framework._DBO {
        AllowOther: boolean;
        Title: string;
        Label: string;
        CurrentSelection: string;
        ProcessButtonText: string;
        CancelActionName: string;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeSelectionType;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeStringSelectionAction(): MakeStringSelectionAction;
    interface MakeEnumSelectionAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        CurrentSelection: string;
        ProcessButtonText: string;
        CancelActionName: string;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeSelectionType;
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function MakeEnumSelectionAction(): MakeEnumSelectionAction;
}
declare module $D.Framework.Design.DataStructure {
    interface CaseState extends $D.Framework._DBO {
        StateName: string;
        Order: number;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ClosedState: boolean;
        AccountIds: string[];
        GroupIds: string[];
    }
    function CaseState(): CaseState;
    interface DefinedTypeInfo extends $D.Framework._DBO {
        BaseClasses: string[];
        Properties: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function DefinedTypeInfo(): DefinedTypeInfo;
    interface DefinedMemberEditor extends $D.Framework._DBO {
        FieldType: $D.Framework.Design.DataStructure.DefinedFieldType;
        RelationshipName: string;
        Advanced: $D.Framework.Design.DataStructure.DefinedDataTypeDataMember;
        RelatedToDataType: string;
        StringChoices: string[];
    }
    function DefinedMemberEditor(): DefinedMemberEditor;
}
declare module $D.Framework.Design.DataStructure.CaseEditor {
    interface ExpectedFolderStateDto extends $D.Framework._DBO {
        Id: string;
        StateName: string;
        Order: number;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        OrmTypeName: string;
        HasColor: boolean;
        EntityFolderID: string;
        Steps: $D.Framework.Design.DataStructure.CaseEditor.StateStepDto[];
    }
    function ExpectedFolderStateDto(): ExpectedFolderStateDto;
    interface SharedFlowDto extends $D.Framework.Design.DataStructure.CaseEditor.ElementRegistrationDto {
        SetupFlowId: string;
    }
    function SharedFlowDto(): SharedFlowDto;
}
declare module $D.Framework.Design.Report {
    interface ReportGroup extends $D.Framework._DBO {
        Name: string;
        ColumnTitle: string;
        SubTotals: $D.Framework.Design.Flow.CoreSteps.StandardSteps.DynamicDataRow[];
        DataRows: $D.Framework.Design.Flow.CoreSteps.StandardSteps.DynamicDataRow[];
        SubGroups: $D.Framework.Design.Report.ReportGroup[];
        GroupLevel: number;
    }
    function ReportGroup(): ReportGroup;
    interface FilterData extends $D.Framework._DBO {
        Name: string;
        IsRuntimeFilter: boolean;
        IsSharingValue: boolean;
        Values: $D.Framework.Design.Flow.CoreSteps.StandardSteps.DynamicDataRow;
    }
    function FilterData(): FilterData;
}
declare module $D.Framework.Design.Report.Matrix.Dimensions {
    interface CalculatedDimension extends $D.Framework.Design.Report.Matrix.AbstractDimension {
        Fields: $D.Framework.Design.Report.Matrix.Dimensions.CalculatedFieldDefinition[];
    }
    function CalculatedDimension(): CalculatedDimension;
}
declare module $D.Framework.Design.Report.Matrix {
    interface IntersectionData extends $D.Framework._DBO {
        Row: $D.Framework.Design.Report.Matrix.DataDimension;
        Column: $D.Framework.Design.Report.Matrix.DataDimension;
        ComputedValue: any;
        DataRowCount: number;
        DisplayData: $D.Framework.Design.Report.Matrix.IntersectionDisplayData[];
    }
    function IntersectionData(): IntersectionData;
}
declare module $D.Framework.Design.Report.InlineFields {
    interface AddFieldByValue extends $D.Framework.Design.Report.InlineFields.OneNumberInlineField {
    }
    function AddFieldByValue(): AddFieldByValue;
    interface DivideFieldByValue extends $D.Framework.Design.Report.InlineFields.OneNumberInlineField {
    }
    function DivideFieldByValue(): DivideFieldByValue;
    interface MultiplyFieldByValue extends $D.Framework.Design.Report.InlineFields.OneNumberInlineField {
    }
    function MultiplyFieldByValue(): MultiplyFieldByValue;
    interface SubtractFieldByValue extends $D.Framework.Design.Report.InlineFields.OneNumberInlineField {
    }
    function SubtractFieldByValue(): SubtractFieldByValue;
    interface AddFields extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function AddFields(): AddFields;
    interface DivideFields extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function DivideFields(): DivideFields;
    interface GetRemainderFromFields extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function GetRemainderFromFields(): GetRemainderFromFields;
    interface MultiplyFields extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function MultiplyFields(): MultiplyFields;
    interface PercentField extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function PercentField(): PercentField;
    interface SubtractFields extends $D.Framework.Design.Report.InlineFields.TwoNumbersInlineField {
    }
    function SubtractFields(): SubtractFields;
    interface FlowInlineField extends $D.Framework.Design.Report.InlineFields.AbstractTextInlineField {
        Flow: string;
    }
    function FlowInlineField(): FlowInlineField;
    interface TruncateTextInlineField extends $D.Framework.Design.Report.InlineFields.AbstractTextInlineField {
        CharacterLimit: number;
    }
    function TruncateTextInlineField(): TruncateTextInlineField;
    interface SplitCamelCaseInlineField extends $D.Framework.Design.Report.InlineFields.AbstractTextInlineField {
    }
    function SplitCamelCaseInlineField(): SplitCamelCaseInlineField;
    interface MatchInlineField extends $D.Framework.Design.Report.InlineFields.AbstractTextInlineField {
        DefaultValue: string;
        Matches: $D.Framework.Design.Report.InlineFields.MatchData[];
    }
    function MatchInlineField(): MatchInlineField;
    interface GetDateAge extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
        UseHours: boolean;
        SpecifyIntervals: boolean;
        Intervals: $D.Framework.Design.Report.InlineFields.IntervalDescription[];
    }
    function GetDateAge(): GetDateAge;
    interface HideOldDates extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
        Constant: Date;
    }
    function HideOldDates(): HideOldDates;
    interface GetMonth extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
        ShowMonthNameAsText: boolean;
    }
    function GetMonth(): GetMonth;
    interface GetYear extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
    }
    function GetYear(): GetYear;
    interface GetDate extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
        SpecifyAdvancedFormat: boolean;
        Format: string;
    }
    function GetDate(): GetDate;
    interface GetDayOfWeek extends $D.Framework.Design.Report.InlineFields.SingleDateInlineField {
    }
    function GetDayOfWeek(): GetDayOfWeek;
    interface GetDaysBetween extends $D.Framework.Design.Report.InlineFields.AbstractTimeBetween {
    }
    function GetDaysBetween(): GetDaysBetween;
    interface GetHoursBetween extends $D.Framework.Design.Report.InlineFields.AbstractTimeBetween {
    }
    function GetHoursBetween(): GetHoursBetween;
    interface GetMilliSecondsBetween extends $D.Framework.Design.Report.InlineFields.AbstractTimeBetween {
    }
    function GetMilliSecondsBetween(): GetMilliSecondsBetween;
    interface GetMinutesBetween extends $D.Framework.Design.Report.InlineFields.AbstractTimeBetween {
    }
    function GetMinutesBetween(): GetMinutesBetween;
    interface GetSecondsBetween extends $D.Framework.Design.Report.InlineFields.AbstractTimeBetween {
    }
    function GetSecondsBetween(): GetSecondsBetween;
    interface ImageDocumentInlineField extends $D.Framework.Design.Report.InlineFields.AbstractImageInlineField {
        ColumnName: string;
    }
    function ImageDocumentInlineField(): ImageDocumentInlineField;
    interface ImageUrlInlineField extends $D.Framework.Design.Report.InlineFields.AbstractImageInlineField {
        ColumnName: string;
    }
    function ImageUrlInlineField(): ImageUrlInlineField;
    interface MatchRegex extends $D.Framework.Design.Report.InlineFields.AbstractTextInlineField {
        RegexPattern: string;
    }
    function MatchRegex(): MatchRegex;
    interface MergeTextInlineField extends $D.Framework.Design.Report.InlineFields.InlineField {
        MergeText: string;
        InputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function MergeTextInlineField(): MergeTextInlineField;
    interface TimespanTotalSecondsField extends $D.Framework.Design.Report.InlineFields.AbstractTimespanInlineField {
    }
    function TimespanTotalSecondsField(): TimespanTotalSecondsField;
    interface TimespanTotalMinutesField extends $D.Framework.Design.Report.InlineFields.AbstractTimespanInlineField {
    }
    function TimespanTotalMinutesField(): TimespanTotalMinutesField;
    interface TimespanCustomFormatField extends $D.Framework.Design.Report.InlineFields.AbstractTimespanInlineField {
        FormatText: string;
        Example: string;
    }
    function TimespanCustomFormatField(): TimespanCustomFormatField;
    interface TimespanConstantFormatField extends $D.Framework.Design.Report.InlineFields.AbstractTimespanInlineField {
    }
    function TimespanConstantFormatField(): TimespanConstantFormatField;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ReportFieldInfo extends $D.Framework._DBO {
        FieldName: string;
        DisplayName: string;
        FieldCategory: string;
        DecisionsType: $D.Framework.Design.Flow.Mapping.DecisionsNativeType;
        IsUsed: boolean;
        DataSource: string;
    }
    function ReportFieldInfo(): ReportFieldInfo;
    interface AggregatedDataItemInfo extends $D.Framework._DBO {
        Label: string;
        Value: any;
        Navigable: boolean;
        Format: string;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        UseCustomColor: boolean;
        FormattedValue: string;
    }
    function AggregatedDataItemInfo(): AggregatedDataItemInfo;
    interface LiveUpdateColumnInfo extends $D.Framework._DBO {
        NegativeValueBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        NegativeValueForegroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        PositiveValueBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        PositiveValueForegroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DisplayFormat: $D.Framework.Design.Report.InlineFields.LiveColumnDisplayFormat;
    }
    function LiveUpdateColumnInfo(): LiveUpdateColumnInfo;
    interface ReportViewInfo extends $D.Framework._DBO {
        UserId: string;
        DateTimeCreated: Date;
        ReportId: string;
        ReportName: string;
        IsSnapshot: boolean;
        HasColumns: boolean;
        HasRuntimeFilters: boolean;
        HasSubTotals: boolean;
        HasMatrix: boolean;
        HasHierarchicalView: boolean;
        HasColumnsView: boolean;
        HasCharts: boolean;
        ChartNames: string[];
        HasPaging: boolean;
        HasGroups: boolean;
        HasTiles: boolean;
        HasCalendar: boolean;
        CanTakeSnapshots: boolean;
        HasBlurbSummary: boolean;
        HasTextSummary: boolean;
        CanEditReport: boolean;
        DefaultTextViewGroupName: string;
        ShowCellsTemplate: boolean;
        OutputFlowReferences: $D.Framework.Data.DataTypes.FlowReference[];
        HideDefaultOutputHandling: boolean;
        DefaultColumnGroupName: string;
        DefaultColumnSort: string;
        StackedColumns: boolean;
        SelectRowFromParameter: boolean;
        SelectRowParamterName: string;
        SelectionBusMappingColumnFieldName: string;
    }
    function ReportViewInfo(): ReportViewInfo;
}
declare module $D.Framework.Design.Form.ComponentData.CompositeControls {
    interface UserControlListContainerClientInfo extends $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildClientInfo {
        RuleInfoJson: string;
        SurfaceKeyTriggersJson: string;
    }
    function UserControlListContainerClientInfo(): UserControlListContainerClientInfo;
}
declare module $D.Framework.Design.Properties.Attributes {
    interface ColorPickerFacadeForColorPickerArray extends $D.Framework._DBO {
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function ColorPickerFacadeForColorPickerArray(): ColorPickerFacadeForColorPickerArray;
    interface UserDefinedColorsEditorFacade extends $D.Framework._DBO {
        Name: string;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function UserDefinedColorsEditorFacade(): UserDefinedColorsEditorFacade;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface ExportDescription extends $D.Framework._DBO {
        Name: string;
        ParentFolderId: string;
        ParentFolderPath: string;
        TypeName: string;
        ShortTypeName: string;
        Id: string;
        ExportedBy: string;
        ExportedOn: Date;
        PlatformVersion: string;
        DependsOn: $D.Framework.ServiceLayer.Utilities.ExportDependency[];
        DependsOnAssemblies: $D.Framework.ServiceLayer.Utilities.ExportAssemblyDependency[];
        StructureImport: boolean;
        DependsOnStructures: boolean;
        Size: number;
        RequiresApproval: boolean;
        OverridingImport: boolean;
        ModuleName: string;
        ImportOrder: number;
        ModifiedOn: any;
        BehaviorTypeName: string;
        ValidationData: $D.Framework.ServiceLayer.Utilities.ExportValidationData[];
        AllTagsData: string;
        RelatedIds: string;
        TagData: $D.Framework.ServiceLayer.Services.Tagging.TagData[];
    }
    function ExportDescription(): ExportDescription;
    interface ImportAbstractEntityValidationIssue extends $D.Framework.ServiceLayer.Utilities.CommonImportValidationIssue {
    }
    function ImportAbstractEntityValidationIssue(): ImportAbstractEntityValidationIssue;
    interface ChangeFolderResolution extends $D.Framework.ServiceLayer.Utilities.FolderMissingResolution {
    }
    function ChangeFolderResolution(): ChangeFolderResolution;
    interface MoveToCurrentFolderResolution extends $D.Framework.ServiceLayer.Utilities.FolderMissingResolution {
    }
    function MoveToCurrentFolderResolution(): MoveToCurrentFolderResolution;
    interface RemoveEntityValidationIssue extends $D.Framework.ServiceLayer.Utilities.CommonImportValidationIssue {
    }
    function RemoveEntityValidationIssue(): RemoveEntityValidationIssue;
    interface MissingReiquiredModuleIssue extends $D.Framework.ServiceLayer.Utilities.CommonImportValidationIssue {
        MissingItemTypeName: string;
        MissingItemShortTypeName: string;
        MissingItemId: string;
    }
    function MissingReiquiredModuleIssue(): MissingReiquiredModuleIssue;
}
declare module $D.Framework.ServiceLayer.Services {
    interface EntityPickerFolder extends $D.Framework.ServiceLayer.Services.EntityPickerItem {
        HasSubFolders: boolean;
    }
    function EntityPickerFolder(): EntityPickerFolder;
    interface EnitytPickerItemsResult extends $D.Framework._DBO {
        Items: $D.Framework.ServiceLayer.Services.EntityPickerItem[];
        HasNext: boolean;
    }
    function EnitytPickerItemsResult(): EnitytPickerItemsResult;
    interface DecisionsTypePickerSettings extends $D.Framework.Design.Properties.Attributes.EntityPickerSettings {
        TypeNodesInfo: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function DecisionsTypePickerSettings(): DecisionsTypePickerSettings;
    interface ElementRegistrationPickerSettings extends $D.Framework.Design.Properties.Attributes.EntityPickerSettings {
        Types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[];
        FilterNames: string[];
    }
    function ElementRegistrationPickerSettings(): ElementRegistrationPickerSettings;
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    interface ThemeData extends $D.Framework._DBO {
        Brushes: $D.Framework.ServiceLayer.Services.Theme.ThemeBrush[];
        Colors: $D.Framework.ServiceLayer.Services.Theme.ThemeColor[];
        Gradients: $D.Framework.ServiceLayer.Services.Theme.ThemeGradient[];
        Fonts: $D.Framework.ServiceLayer.Services.Theme.ThemeFont[];
        Images: $D.Framework.ServiceLayer.Services.Theme.ThemeImage[];
        Defaults: $D.Framework.ServiceLayer.Services.Theme.ThemeDefault[];
        DesktopDefaults: $D.Framework.ServiceLayer.Services.Theme.ThemeDeviceProfile;
        MobileDefaults: $D.Framework.ServiceLayer.Services.Theme.ThemeDeviceProfile;
        SlateDefaults: $D.Framework.ServiceLayer.Services.Theme.ThemeDeviceProfile;
        Timestamp: Date;
    }
    function ThemeData(): ThemeData;
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    interface TagDataWrapper extends $D.Framework._DBO {
        EntityId: string;
        TagDatas: $D.Framework.ServiceLayer.Services.Tagging.TagData[];
    }
    function TagDataWrapper(): TagDataWrapper;
}
declare module $D.Framework.ServiceLayer.Services.ServiceInformation {
    interface ServiceUsedDataType extends $D.Framework._DBO {
        Name: string;
        Namespace: string;
        Properties: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function ServiceUsedDataType(): ServiceUsedDataType;
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    interface CatalogItemDto extends $D.Framework._DBO {
        Id: string;
        Title: string;
        Description: string;
        ReportFolderId: string;
        Type: $D.Framework.ServiceLayer.Services.ServiceCatalog.CatalogItemType;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ImageInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function CatalogItemDto(): CatalogItemDto;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Servers {
    interface HostingConfigurationServerAssignment extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        AssignmentName: string;
    }
    function HostingConfigurationServerAssignment(): HostingConfigurationServerAssignment;
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob {
    interface DailySchedule extends $D.Framework.ServiceLayer.Services.ScheduledJob.JobScheduleCalendar {
        Hour: number;
        Minute: number;
        RunOnBusinessDays: boolean;
        RunMonday: boolean;
        RunTuesday: boolean;
        RunWednesday: boolean;
        RunThursday: boolean;
        RunFriday: boolean;
        RunSaturday: boolean;
        RunSunday: boolean;
    }
    function DailySchedule(): DailySchedule;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface Address extends $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity {
        AddressId: string;
        AddressLine1: string;
        AddressLine2: string;
        AddressLine3: string;
        City: string;
        CityInfoID: string;
        County: string;
        CountyInfoID: string;
        State: string;
        StateInfoID: string;
        Country: string;
        CountryInfoID: string;
        PostalCode: string;
        TimeZone: string;
        IsPrimary: boolean;
        TypeOfAddress: $D.Framework.ServiceLayer.Services.Organization.AddressType;
        Latitude: number;
        Longitude: number;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
    }
    function Address(): Address;
    interface Phone extends $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity {
        PhoneId: string;
        PhoneNumber: string;
        TypeOfPhone: $D.Framework.ServiceLayer.Services.Organization.PhoneType;
        IsPrimary: boolean;
        AcceptSMS: boolean;
        SmsCarrier: string;
        HasExtension: boolean;
        Extension: string;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
    }
    function Phone(): Phone;
    interface EmailAddress extends $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity {
        EmailId: string;
        Address: string;
        IsPrimary: boolean;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
    }
    function EmailAddress(): EmailAddress;
    interface InstantMessengerAddress extends $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity {
        InstantMessengerId: string;
        InstantMessengerUserName: string;
        Network: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerNetwork;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
    }
    function InstantMessengerAddress(): InstantMessengerAddress;
    interface OtherContact extends $D.Framework.ServiceLayer.Services.Organization.AbstractContactEntity {
        OtherContactId: string;
        OtherContactTypeId: string;
        OtherContactTypeName: string;
        Account: string;
        Password: string;
        ContactInfoType: $D.Framework.ServiceLayer.Services.Organization.ContactInfoType;
    }
    function OtherContact(): OtherContact;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface NotifyToAssignmentRole extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToAssignmentRole(): NotifyToAssignmentRole;
    interface NotifyToAccount extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
        AccountID: string;
    }
    function NotifyToAccount(): NotifyToAccount;
    interface NotifyToAssigned extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
        CurrentlyAssigned: boolean;
        PendingAssigned: boolean;
        CompletedAssigned: boolean;
    }
    function NotifyToAssigned(): NotifyToAssigned;
    interface NotifyToGroup extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
        GroupID: string;
        GroupName: string;
    }
    function NotifyToGroup(): NotifyToGroup;
    interface NotifyToCommentor extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToCommentor(): NotifyToCommentor;
    interface NotifyToFolderPermission extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
        CanAdd: boolean;
        CanView: boolean;
        CanEdit: boolean;
        CanDelete: boolean;
        CanOpen: boolean;
        CanUse: boolean;
    }
    function NotifyToFolderPermission(): NotifyToFolderPermission;
    interface NotifyToCreatedBy extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToCreatedBy(): NotifyToCreatedBy;
    interface NotifyToOwner extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToOwner(): NotifyToOwner;
    interface NotifyToFolderShared extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToFolderShared(): NotifyToFolderShared;
    interface NotifyToProcessViewPermissionAssigned extends $D.Framework.ServiceLayer.Services.Notifications.NotifyTo {
    }
    function NotifyToProcessViewPermissionAssigned(): NotifyToProcessViewPermissionAssigned;
}
declare module $D.Framework.ServiceLayer.Services.EntityDetails {
    interface AbstractFolderEntityDetails extends $D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails {
        History: $D.Framework.ServiceLayer.Services.EntityDetails.DetailsHistory[];
    }
    function AbstractFolderEntityDetails(): AbstractFolderEntityDetails;
    interface EntityDetailsDto extends $D.Framework._DBO {
        EntityId: string;
        TypeName: string;
        ShortTypeName: string;
        Actions: $D.Framework.ServiceLayer.Actions.ActionHeader[];
        Thumbnail: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        LoadValidationIssues: boolean;
        DependencyFrom: $D.Framework.ServiceLayer.Services.EntityDetails.EntityHeaderDto[];
        DependencyTo: $D.Framework.ServiceLayer.Services.EntityDetails.EntityHeaderDto[];
        Data: $D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails;
        CustomViewData: $D.Framework.ServiceLayer.Services.EntityDetails.EntityDetailsViewData;
    }
    function EntityDetailsDto(): EntityDetailsDto;
}
declare module $D.Framework.ServiceLayer.Services.DBQuery {
    interface RunQueryResultsDto extends $D.Framework._DBO {
        Error: string;
        Queries: $D.Framework.ServiceLayer.Services.DBQuery.SqlQueryDto[];
    }
    function RunQueryResultsDto(): RunQueryResultsDto;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface DatabaseDefinitionType extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        Id: string;
        DefinitionId: string;
        DefinitionTypeFullName: string;
    }
    function DatabaseDefinitionType(): DatabaseDefinitionType;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface AssignToFolderPermissionsAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function AssignToFolderPermissionsAction(): AssignToFolderPermissionsAction;
    interface ExcludeAssignToAccount extends $D.Framework.ServiceLayer.Services.Assignments.ExcludeAssignTo {
        AccountID: string;
    }
    function ExcludeAssignToAccount(): ExcludeAssignToAccount;
    interface ExcludeAssignToGroup extends $D.Framework.ServiceLayer.Services.Assignments.ExcludeAssignTo {
        GroupID: string;
    }
    function ExcludeAssignToGroup(): ExcludeAssignToGroup;
}
declare module $D.Framework.ServiceLayer.Services.Approvals {
    interface ApprovalChainEntityDto extends $D.Framework._DBO {
        HideName: boolean;
        HideDataDesctiptions: boolean;
        HideAllowRules: boolean;
        HideAllowExpiration: boolean;
        ApprovalChainEntityID: string;
        EntityDescription: string;
        EntityName: string;
        Levels: $D.Framework.ServiceLayer.Services.Approvals.ApprovalData[];
        AllowRules: boolean;
        AllowExpiration: boolean;
        IsHiddenLevel: boolean;
        IsExistsInDb: boolean;
        DataDescriptions: $D.Framework.Design.Flow.FlowInputDataDescription[];
        EntityFolderID: string;
    }
    function ApprovalChainEntityDto(): ApprovalChainEntityDto;
    interface ApprovalLevelDto extends $D.Framework._DBO {
        ApprovalDataId: string;
        Approvers: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[];
        TimeToApprove: any;
        RuleId: string;
        RuleText: string;
        CreatedOnDate: Date;
    }
    function ApprovalLevelDto(): ApprovalLevelDto;
    interface ApprovalLevelsHolder extends $D.Framework._DBO {
        Levels: $D.Framework.ServiceLayer.Services.Approvals.ApprovalData[];
    }
    function ApprovalLevelsHolder(): ApprovalLevelsHolder;
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    interface AddRemoveGroupsAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function AddRemoveGroupsAction(): AddRemoveGroupsAction;
    interface AccountPopupNotificationSetting extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        AccountId: string;
        SessionId: string;
        ExpireDate: Date;
        DoNotShowNotificationType: $D.Framework.ServiceLayer.Services.Accounts.DoNotShowNotificationType;
    }
    function AccountPopupNotificationSetting(): AccountPopupNotificationSetting;
    interface AccountImpersonations extends $D.Framework._DBO {
        AllowedImpersonations: $D.Framework.ServiceLayer.Services.Accounts.AllowedAccountImpersonations[];
    }
    function AccountImpersonations(): AccountImpersonations;
    interface AddRemoveAccountsAction extends $D.Framework._DBO {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
        ClientActionId: string;
        Description: string;
        TranslateName: boolean;
        AllowGroupActions: boolean;
        AllowSingleActions: boolean;
        ActionGroupName: string;
        InvokeEntityId: string;
        InvokeEntityType: string;
        SilverLightActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.SilverLightActionHandler;
        CLIActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.CLIActionHandler;
        WebFormActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.WebFormActionHandler;
        MvcActionHandler: $D.Framework.ServiceLayer.Actions.Handlers.MvcActionHandler;
        RefreshScope: $D.Framework.ServiceLayer.Actions.ActionRefreshScope;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        MobileSupportedAction: boolean;
        IsDefaultGridAction: boolean;
        RequiresLeaseCheck: boolean;
        PersistWindowSizeKey: string;
        Filtered: boolean;
        Id: string;
        Tp: string;
        Nm: string;
        Ca: string;
        SCa: string;
        Or: number;
        Fv: string;
        Tr: boolean;
        Pa: boolean;
        HT: string;
        NTNM: string;
        Flg: string;
    }
    function AddRemoveAccountsAction(): AddRemoveAccountsAction;
}
declare module $D.Framework.ServiceLayer.Services.PeerCache {
    interface NotifyEvent extends $D.Framework.ServiceLayer.Services.ClientEvents.EventData {
        Broadcast: boolean;
    }
    function NotifyEvent(): NotifyEvent;
    interface AgentResultEvent extends $D.Framework.ServiceLayer.Services.PeerCache.NotifyServerEvent {
        InstructionId: string;
        ResultData: $D.Framework.ServiceLayer.Agent.AgentInstructionsResult;
        PeerAgentId: string;
    }
    function AgentResultEvent(): AgentResultEvent;
}
declare module $D.Framework.ServiceLayer.Services.APIService {
    interface RunApiResult extends $D.Framework._DBO {
        PrintJobResult: $D.Framework.Design.Page.PrintExportJobResult;
        OutputDataString: string;
    }
    function RunApiResult(): RunApiResult;
}
declare module $D.OAuth {
    interface CreateOAuthTokenAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function CreateOAuthTokenAction(): CreateOAuthTokenAction;
}
declare module $D.Framework.ServiceLayer {
    interface AbstractFolderEntity extends $D.Framework.ServiceLayer.AbstractEntity {
        Hidden: boolean;
        AdministratorViewOnly: boolean;
        EntityFolderID: string;
        HistoryFolderID: string;
    }
    function AbstractFolderEntity(): AbstractFolderEntity;
}
declare module $D.DesignerRepository {
    interface ModuleDetails extends $D.Framework._DBO {
        ModuleName: string;
        ShortName: string;
        CreatedBy: string;
        CreatedOn: any;
        DescriptionURL: string;
        Description: string;
        RequiredProjects: string[];
        ForceCopy: boolean;
        RootFolderId: string;
        ResourcesCount: number;
        Category: boolean;
        Tags: string[];
        Color: string;
        Thumbnail: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        AppSupportedOnVersion: string;
        DisclaimerText: string;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        StoreId: string;
        ApplicationState: $D.DesignerRepository.ApplicationState;
        VideoLink: string;
        PreviewImageURL: string[];
        Types: string[];
        FlowParameters: $D.Framework.Design.Properties.DefinedData[];
        ModuleInfoItemSummary: $D.DesignerRepository.ModuleInfoItemSummary;
        Installed: boolean;
    }
    function ModuleDetails(): ModuleDetails;
}
declare module $D.Silverlight.UI.Core.FormDesignerModel {
    interface ControlValidationSetting extends $D.Silverlight.UI.Core.FormDesignerModel.BaseFormValidationSetting {
    }
    function ControlValidationSetting(): ControlValidationSetting;
    interface FormValidationSetting extends $D.Silverlight.UI.Core.FormDesignerModel.BaseFormValidationSetting {
        BreakImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        WarningImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ValidImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function FormValidationSetting(): FormValidationSetting;
}
declare module $D.Framework.ProjectConversion {
    interface ConvertedFlow extends $D.Framework._DBO {
        FlowId: string;
        FlowName: string;
        Description: string;
        Tags: string[];
        Steps: $D.Framework.ProjectConversion.ConvertedStep[];
        Connections: $D.Framework.ProjectConversion.ConvertedConnection[];
        InputData: $D.Framework.ProjectConversion.DataDefinition[];
        OutputData: $D.Framework.ProjectConversion.OutcomeDefinition[];
    }
    function ConvertedFlow(): ConvertedFlow;
    interface ConvertedRule extends $D.Framework.ProjectConversion.BaseConvertedRule {
        Statements: $D.Framework.ProjectConversion.RuleImport.ConvertedRuleStatement[];
        StatementsGroupsType: $D.Framework.ProjectConversion.RuleImport.GroupType;
        Actions: $D.Framework.ProjectConversion.RuleImport.ConvertedRuleAction[];
        ImageData: number[];
    }
    function ConvertedRule(): ConvertedRule;
    interface ConvertedRuleTable extends $D.Framework.ProjectConversion.BaseConvertedRule {
    }
    function ConvertedRuleTable(): ConvertedRuleTable;
}
declare module $D.Framework.Utilities.Profiler {
    interface ProfileSession extends $D.Framework._DBO {
        EndBehavior: $D.Framework.Utilities.Profiler.ThreadProfileEndBehavior;
        IgnoreBelow: number;
        Processor: any;
        Name: string;
        SessionId: string;
        Results: $D.Framework.Utilities.Profiler.ProfileResult[];
        StartedOn: Date;
        ComputerName: string;
        IpAddress: string;
        CaptureMemoryDetails: boolean;
    }
    function ProfileSession(): ProfileSession;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface EditObjectAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        OkActionName: string;
        CancelActionName: string;
        Title: string;
        IsReadOnly: boolean;
        EditorType: $D.Framework.ServiceLayer.Actions.Common.PropertyEditorType;
        ForTypeName: string;
        MinEditorWidth: number;
        MinEditorHeight: number;
    }
    function EditObjectAction(): EditObjectAction;
    interface EditEntityAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ForTypeName: string;
        EditorType: $D.Framework.ServiceLayer.Actions.Common.PropertyEditorType;
        IsReadOnly: boolean;
        OkActionName: string;
        CancelActionName: string;
        MinEditorWidth: number;
        MinEditorHeight: number;
    }
    function EditEntityAction(): EditEntityAction;
    interface EditProviderAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        EditorType: $D.Framework.ServiceLayer.Actions.Common.PropertyEditorType;
        MinEditorWidth: number;
        MinEditorHeight: number;
        OkActionName: string;
        CancelActionName: string;
    }
    function EditProviderAction(): EditProviderAction;
    interface GetStringGoToFolderAction extends $D.Framework.ServiceLayer.Actions.Common.GetStringAction {
    }
    function GetStringGoToFolderAction(): GetStringGoToFolderAction;
    interface DownloadFileAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FileInfo: $D.Framework.Data.DataTypes.FileInfoData;
        SuggestFileName: boolean;
    }
    function DownloadFileAction(): DownloadFileAction;
    interface ApproveRejectAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
        Label: string;
        ApproveButtonLabel: string;
        RejectButtonLabel: string;
        RequireRejectNotes: boolean;
        RequireApproveNotes: boolean;
        AskForNotes: boolean;
    }
    function ApproveRejectAction(): ApproveRejectAction;
    interface ConfirmAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ConfirmButtonLabel: string;
        NonConfirmButtonLabel: string;
        Title: string;
        Label: string;
        OkOnly: boolean;
        GroupActionConfirmationMessage: string;
    }
    function ConfirmAction(): ConfirmAction;
    interface ConfirmGoToFolderAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        InNewWindow: boolean;
        ShowAlternativeView: boolean;
        PageName: string;
        ConfirmButtonLabel: string;
        NonConfirmButtonLabel: string;
        Title: string;
        Label: string;
        FolderId: string;
    }
    function ConfirmGoToFolderAction(): ConfirmGoToFolderAction;
    interface CopyTextAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        TextToCopy: string;
    }
    function CopyTextAction(): CopyTextAction;
    interface DeleteEntityAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function DeleteEntityAction(): DeleteEntityAction;
    interface DisplayStringAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Text: string;
        ShowCopyText: boolean;
        CanMaximize: boolean;
    }
    function DisplayStringAction(): DisplayStringAction;
    interface DisplayMethodReturnAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function DisplayMethodReturnAction(): DisplayMethodReturnAction;
    interface DisplayHtmlTextAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function DisplayHtmlTextAction(): DisplayHtmlTextAction;
    interface EditContactAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function EditContactAction(): EditContactAction;
    interface EditListAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
        Label: string;
        CurrentList: string[];
    }
    function EditListAction(): EditListAction;
    interface FolderBrowseSearchAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FolderBehaviorTypeName: string;
    }
    function FolderBrowseSearchAction(): FolderBrowseSearchAction;
    interface FolderEntityBrowseSearchAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        EntityData: $D.Framework.ServiceLayer.Actions.Common.FolderEntityData;
    }
    function FolderEntityBrowseSearchAction(): FolderEntityBrowseSearchAction;
    interface UploadFileAction extends $D.Framework.ServiceLayer.Actions.Common.GetTitleDescriptionAndFileAction {
    }
    function UploadFileAction(): UploadFileAction;
    interface GoToFolderPageAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FolderId: string;
        PageName: string;
        InNewWindow: boolean;
    }
    function GoToFolderPageAction(): GoToFolderPageAction;
    interface InstallModuleAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ModuleName: string;
    }
    function InstallModuleAction(): InstallModuleAction;
    interface InstallServiceAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        AllowServiceDLL: boolean;
        AllowWebDLL: boolean;
        AllowSilverLightDLL: boolean;
        AllowWebPages: boolean;
        IsDragDropTarget: boolean;
    }
    function InstallServiceAction(): InstallServiceAction;
    interface AddObjectMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiObjectSelectionAction {
    }
    function AddObjectMultiSelectionAction(): AddObjectMultiSelectionAction;
    interface RemoveObjectMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiObjectSelectionAction {
    }
    function RemoveObjectMultiSelectionAction(): RemoveObjectMultiSelectionAction;
    interface AddStringMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiStringSelectionAction {
    }
    function AddStringMultiSelectionAction(): AddStringMultiSelectionAction;
    interface RemoveStringMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiStringSelectionAction {
    }
    function RemoveStringMultiSelectionAction(): RemoveStringMultiSelectionAction;
    interface AddEnumMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiEnumSelectionAction {
    }
    function AddEnumMultiSelectionAction(): AddEnumMultiSelectionAction;
    interface RemoveEnumMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeMultiEnumSelectionAction {
    }
    function RemoveEnumMultiSelectionAction(): RemoveEnumMultiSelectionAction;
    interface MakeMultiSelectionAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
        Label: string;
        ProcessButtonText: string;
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeMultiSelectionType;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        CurrentSelection: string[];
    }
    function MakeMultiSelectionAction(): MakeMultiSelectionAction;
    interface AddObjectSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeObjectSelectionAction {
    }
    function AddObjectSelectionAction(): AddObjectSelectionAction;
    interface RemoveObjectSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeObjectSelectionAction {
    }
    function RemoveObjectSelectionAction(): RemoveObjectSelectionAction;
    interface AddStringSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeStringSelectionAction {
    }
    function AddStringSelectionAction(): AddStringSelectionAction;
    interface RemoveStringSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeStringSelectionAction {
    }
    function RemoveStringSelectionAction(): RemoveStringSelectionAction;
    interface AddEnumSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeEnumSelectionAction {
    }
    function AddEnumSelectionAction(): AddEnumSelectionAction;
    interface RemoveEnumSelectionAction extends $D.Framework.ServiceLayer.Actions.Common.MakeEnumSelectionAction {
    }
    function RemoveEnumSelectionAction(): RemoveEnumSelectionAction;
    interface MakeSelectionAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
        Label: string;
        CurrentSelection: string;
        ProcessButtonText: string;
        CancelActionName: string;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        SelectionType: $D.Framework.ServiceLayer.Actions.Common.MakeSelectionType;
    }
    function MakeSelectionAction(): MakeSelectionAction;
    interface MakeSelectionSearchAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
        Label: string;
        CurrentSelection: string;
        Choices: $D.Framework.ServiceLayer.Actions.Common.ActionSelectionItem[];
        ProcessButtonText: string;
    }
    function MakeSelectionSearchAction(): MakeSelectionSearchAction;
    interface ManageTagsAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        RestrictedTagsOnly: boolean;
    }
    function ManageTagsAction(): ManageTagsAction;
    interface MergeEditorAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        MinEditorWidth: number;
        MinEditorHeight: number;
    }
    function MergeEditorAction(): MergeEditorAction;
    interface NavigateToFolderAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Url: string;
        FolderId: string;
        PageName: string;
        NavigationType: $D.Framework.ServiceLayer.Actions.NavigateType;
        PageParameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function NavigateToFolderAction(): NavigateToFolderAction;
    interface OpenUrlAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        IsRelative: boolean;
        IncludeSession: boolean;
        Url: string;
        Height: number;
        Width: number;
        HasChrome: boolean;
    }
    function OpenUrlAction(): OpenUrlAction;
    interface DisplayPage extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function DisplayPage(): DisplayPage;
    interface CreatePrivatePage extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function CreatePrivatePage(): CreatePrivatePage;
    interface CreatePublicPage extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function CreatePublicPage(): CreatePublicPage;
    interface PortalUrlAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        RelativeUrl: string;
    }
    function PortalUrlAction(): PortalUrlAction;
    interface LogoutAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function LogoutAction(): LogoutAction;
    interface ReorderItemAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ReorderItemData: $D.Framework.ServiceLayer.Services.ServiceCatalog.ReorderItemKeyValuePair[];
    }
    function ReorderItemAction(): ReorderItemAction;
    interface RunFlowFromInstructionAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function RunFlowFromInstructionAction(): RunFlowFromInstructionAction;
    interface BaseSelectEntityAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        TypeNames: string[];
        RootFolderID: string;
        EntityTypeInfos: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[];
        Title: string;
        Filters: string[];
        ShowFolders: $D.Framework.Design.Properties.Attributes.PickerFolders;
        ExpandFolders: $D.Framework.Design.Properties.Attributes.PickerFolders;
        Actions: $D.Framework.Design.Properties.Attributes.PickerActions;
        EntityVisibility: $D.Framework.Design.Properties.Attributes.PickerEntityVisibility;
        FolderVisibility: $D.Framework.Design.Properties.Attributes.PickerFolderVisibility;
        OkActionName: string;
        CancelActionName: string;
        ValidationIssues: $D.Framework.ValidationIssue[];
    }
    function BaseSelectEntityAction(): BaseSelectEntityAction;
    interface SendEmailAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        To: string;
        Subject: string;
        Body: string;
        Attachment: $D.Framework.Data.DataTypes.FileData;
    }
    function SendEmailAction(): SendEmailAction;
    interface SetFormsTitleAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Title: string;
    }
    function SetFormsTitleAction(): SetFormsTitleAction;
    interface ShowConversionMappingsEditorAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ShowConversionMappingsEditorAction(): ShowConversionMappingsEditorAction;
    interface SimpleAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Message: string;
    }
    function SimpleAction(): SimpleAction;
    interface UninstallServiceAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function UninstallServiceAction(): UninstallServiceAction;
    interface ViewTwoFilesAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        LeftFile: $D.Framework.Data.DataTypes.FileData;
        RightFile: $D.Framework.Data.DataTypes.FileData;
        LeftHeaderText: string;
        RightHeaderText: string;
    }
    function ViewTwoFilesAction(): ViewTwoFilesAction;
    interface CreateFolderAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ShowAddAtRoot: boolean;
        CanCreateDesignerProject: boolean;
        OnlyAtRoot: any;
    }
    function CreateFolderAction(): CreateFolderAction;
}
declare module $D.Framework.Design {
    interface OutcomeScenarioWithIssue extends $D.Framework._DBO {
        ExitPointName: string;
        Issue: $D.Framework.ValidationIssue;
        OutputData: $D.Framework.Design.DataDescriptionWithIssue[];
    }
    function OutcomeScenarioWithIssue(): OutcomeScenarioWithIssue;
    interface RuleSaveDesignerInfo extends $D.Framework.Design.SaveDesignerInfo {
        SimilarRules: $D.Framework.ServiceLayer.Services.EntityDetails.EntityHeaderDto[];
    }
    function RuleSaveDesignerInfo(): RuleSaveDesignerInfo;
    interface ShowGlobalDebuggerAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ShowGlobalDebuggerAction(): ShowGlobalDebuggerAction;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface GroupAction extends $D.Framework._DBO {
        Action: $D.Framework.ServiceLayer.Actions.BaseActionType;
        Entities: $D.Framework.ServiceLayer.Services.Folder.EntityAction[];
        Name: string;
    }
    function GroupAction(): GroupAction;
    interface FolderViewData extends $D.Framework._DBO {
        AvailableForDisplayType: boolean;
        Pages: $D.Framework.ServiceLayer.Services.Folder.ViewPageData[];
        DefaultReports: $D.Framework.ServiceLayer.Services.Folder.DefaultFolderReport[];
        CurrentUserPermissions: $D.Framework.ServiceLayer.Services.Folder.FolderPermission;
        ReadOnlyEditControls: boolean;
        SubFolders: $D.Framework.ServiceLayer.Services.Folder.SubFolderViewData[];
        Parents: $D.Framework.ServiceLayer.Services.Folder.ParentFolderData[];
        FolderActions: $D.Framework.ServiceLayer.Actions.BaseActionType[];
        ActionHeaders: $D.Framework.ServiceLayer.Actions.ActionHeader[];
        FolderDescription: string;
        NavigationPanel: $D.Framework.ServiceLayer.Services.Folder.FolderNavigationPanel;
        FolderName: string;
        FolderID: string;
        FolderData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        AlwaysOpenInNewWindow: boolean;
        ShowAlternateViews: boolean;
        ShowBrowseView: boolean;
        DefaultPageName: string;
        CanSeeHidden: boolean;
        HeaderDisplay: string;
        ShowInTree: boolean;
        AutoLockTimeout: any;
        SendEventsOnFolderSave: boolean;
        SendEventsOnFolderOwnedDataSave: boolean;
        SendEventsOnAddingToFolder: boolean;
        TranslateFolderName: boolean;
        TranslatePageNames: boolean;
        FolderPath: string;
        FolderOrder: number;
        IsFavorite: boolean;
        FavoriteType: $D.Framework.ServiceLayer.Services.Folder.FavoriteType;
        Alias: string;
        OrderNum: number;
        ContextProviderID: string;
        FolderCountResults: $D.Framework.ServiceLayer.Services.Folder.FolderCountResults;
        DefaultActionsVisibility: $D.Framework.ServiceLayer.Services.Folder.PortalActionsBarVisibility;
        AllowUserPinActions: boolean;
        IconUrl: string;
        Color: string;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        FolderBehaviorType: string;
        AliasFolderId: string;
    }
    function FolderViewData(): FolderViewData;
    interface EntityDescriptionAndActions extends $D.Framework._DBO {
        Name: string;
        Description: string;
        Actions: $D.Framework.ServiceLayer.Actions.BaseActionType[];
        ActionHeaders: $D.Framework.ServiceLayer.Actions.ActionHeader[];
        IsImageProvider: boolean;
    }
    function EntityDescriptionAndActions(): EntityDescriptionAndActions;
    interface AddSubFolderWithBehavior extends $D.Framework.ServiceLayer.Actions.Common.GetStringAction {
    }
    function AddSubFolderWithBehavior(): AddSubFolderWithBehavior;
    interface CallRestApi extends $D.Framework.ServiceLayer.Actions.Common.GetStringAction {
        RestBaseUri: string;
    }
    function CallRestApi(): CallRestApi;
    interface ShowInlineDesignerAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ShowInlineDesignerAction(): ShowInlineDesignerAction;
    interface AliasFolderData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        TargetFolderId: string;
        OverrideFolderName: boolean;
    }
    function AliasFolderData(): AliasFolderData;
    interface FolderStateChange extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        OldState: string;
        NewState: string;
        TimeElapsed: string;
    }
    function FolderStateChange(): FolderStateChange;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface CellTemplateStyle extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplateStyle {
        TextAttributes: $D.Silverlight.UI.Utilities.LabelAttributes;
        HorizontalAlignment: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TemplateHorizontalAlignment;
        VerticalAlignment: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TemplateVerticalAlignment;
        Width: any;
        WidthLengthType: $D.Framework.Design.Report.Matrix.IntersectionTemplate.LengthType;
        MinWidth: any;
        Height: any;
        TextMaxChars: any;
        TextWrapping: $D.Framework.Design.Report.TextWrapping;
    }
    function CellTemplateStyle(): CellTemplateStyle;
}
declare module $D.Framework.Design.Page.Layouts {
    interface ExportLayoutCanvas extends $D.Framework.Design.Page.Layouts.ExportLayout {
        Children: $D.Framework.Design.Page.Layouts.ExportLayoutCanvasChild[];
    }
    function ExportLayoutCanvas(): ExportLayoutCanvas;
    interface ExportLayoutGridRow extends $D.Framework._DBO {
        Cells: $D.Framework.Design.Page.Layouts.ExportLayoutGridCell[];
        RequestedHeight: $D.Framework.Design.Page.Layouts.ExportDimension;
    }
    function ExportLayoutGridRow(): ExportLayoutGridRow;
    interface ExportLayoutStack extends $D.Framework.Design.Page.Layouts.ExportLayout {
        Children: $D.Framework.Design.Page.Layouts.ExportElement[];
    }
    function ExportLayoutStack(): ExportLayoutStack;
    interface ExportLayoutBorder extends $D.Framework.Design.Page.Layouts.ExportLayout {
        Content: $D.Framework.Design.Page.Layouts.ExportElement;
        HasLeftBorder: boolean;
        HasRightBorder: boolean;
        HasTopBorder: boolean;
        HasBottomBorder: boolean;
        MarginLeft: number;
        MarginRight: number;
        MarginTop: number;
        MarginBottom: number;
        PaddingLeft: number;
        PaddingRight: number;
        PaddingTop: number;
        PaddingBottom: number;
        CanBeSplit: boolean;
    }
    function ExportLayoutBorder(): ExportLayoutBorder;
    interface ExportTemplateData extends $D.Framework.Design.Page.Layouts.ExportText {
        ExportData: $D.Framework.Design.Page.Layouts.PrintPageTemplateDataType;
    }
    function ExportTemplateData(): ExportTemplateData;
}
declare module $D.Framework.Design.Report {
    interface ChartInfo extends $D.Framework.Design.Report.Service.Comunication.RemoteEditableObject {
        Id: string;
        ChartType: $D.Framework.Design.Report.ChartType;
        DisplayStacked: boolean;
        ShowDataTable: boolean;
        ShowTooltip: boolean;
        TooltipType: $D.Framework.Design.Report.ChartLabelType;
        LabelNumberFormat: string;
        TooltipNumberFormat: string;
        IsMultiSeriesType: boolean;
        MinimumPointSize: number;
        MaximumPointSize: number;
        PieLabelPosition: $D.Framework.Design.Report.PieLabelPosition;
        ElementsHaveBorder: boolean;
        ElementsBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        AnimatePieOnHover: boolean;
        PieIsDonut: boolean;
        ChartLegendPosition: $D.Framework.Design.Report.ChartLegendPosition;
        ChartLegendType: $D.Framework.Design.Report.ChartLabelType;
        SetMinimum: boolean;
        MinimumBarsValue: number;
        SetMaximum: boolean;
        MaximumBarsValue: number;
        RotateLabels: boolean;
        RotateLabelsAngle: number;
        ValuesAxisLegend: string;
        EntriesAxisLegend: string;
        ShowElementLabels: boolean;
        Sorting: $D.Framework.Design.Charts.ChartSorting;
        TakeFirstCount: any;
        ShortenLongLabels: boolean;
        MaxLabelLength: number;
        UseMatrixAsSource: boolean;
        EditChartSeries: boolean;
        AvailableSeries: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        FieldsDefinition: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        HideChartProperties: boolean;
        Title: string;
        ShowTitle: boolean;
        ChartLabelType: $D.Framework.Design.Report.ChartLabelType;
        AllowDataBrowsing: boolean;
        PutAnyGroupOverXIntoOtherCategory: boolean;
        GroupsOverXCount: number;
        SpecifyStepValue: boolean;
        StepValue: number;
        LegendName: string;
        UseTotals: boolean;
        CanUseCustomColors: boolean;
        BaseColors: string[];
        UseUserDefinedColors: boolean;
        UserDefinedColors: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        LineSeriesName: string;
        AreaSeriesName: string;
        IsUserDefined: boolean;
    }
    function ChartInfo(): ChartInfo;
    interface ColorDetails extends $D.Framework._DBO {
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ForegroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        SelectedBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        SelectedForegroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        OverrideFont: boolean;
        CssClassName: string;
        FontAttributes: $D.Silverlight.UI.Utilities.LabelAttributes;
    }
    function ColorDetails(): ColorDetails;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface RegistrationElementAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ElementId: string;
    }
    function RegistrationElementAction(): RegistrationElementAction;
    interface FormTitleSettings extends $D.Framework._DBO {
        Height: number;
        Font: $D.Silverlight.UI.Utilities.LabelAttributes;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ButtonsColor: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function FormTitleSettings(): FormTitleSettings;
    interface ElementOutputTypeDescription extends $D.Framework._DBO {
        TypeDescriptions: $D.Framework.ServiceLayer.Services.ConfigurationStorage.TypeDescription[];
        PathName: string;
        SerializedOutputString: string;
    }
    function ElementOutputTypeDescription(): ElementOutputTypeDescription;
    interface ElementInputTypeDescription extends $D.Framework._DBO {
        TypeDescription: $D.Framework.ServiceLayer.Services.ConfigurationStorage.TypeDescription[];
    }
    function ElementInputTypeDescription(): ElementInputTypeDescription;
    interface ElementRegistrationUsage extends $D.Framework.Data.ORMapper.BaseORMEntityWithLogicalDelete {
        Id: string;
        UsedById: string;
        UsedByName: string;
        UsedByType: string;
        UsedByFolderId: string;
        UsedByFolderName: string;
        UsesName: string;
        UsesId: string;
        UsesFolderId: string;
        UsesFolderName: string;
        UsageRole: $D.Framework.Design.ElementUsageRole;
        UsesTypeName: string;
        UsesTypeDescription: string;
        CreatedDateTime: Date;
        CreatedBy: string;
        IsCurrent: boolean;
        ToInputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
        ToOutcomeScenarios: $D.Framework.Design.Flow.Mapping.OutcomeScenarioData[];
    }
    function ElementRegistrationUsage(): ElementRegistrationUsage;
    interface OpenFlowInNewWindowAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Alias: string;
        Width: number;
        Height: number;
    }
    function OpenFlowInNewWindowAction(): OpenFlowInNewWindowAction;
    interface CopyRunFlowUrlToClipboardAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Alias: string;
        HasInputData: boolean;
    }
    function CopyRunFlowUrlToClipboardAction(): CopyRunFlowUrlToClipboardAction;
    interface ViewElementPreviewAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ViewElementPreviewAction(): ViewElementPreviewAction;
    interface DesignerFolderItem extends $D.Framework._DBO {
        EntityId: string;
        EntityTypeName: string;
        EntityShortTypeName: string;
        EntityFolderId: string;
        Name: string;
        CreatedOn: Date;
        ModifiedBy: string;
        ModifiedOn: Date;
        ElementType: string[];
        HasThumbnail: boolean;
        Tags: string[];
        ElementOrder: number;
        Enabled: boolean;
        BeginDate: any;
        EndDate: any;
        ProjectName: string;
        EditAction: $D.Framework.ServiceLayer.Actions.BaseActionType;
        ElementTypeDetails: string;
        ElementTypeInfo: string;
        AllTagsData: string;
        ShortTypeName: string;
    }
    function DesignerFolderItem(): DesignerFolderItem;
    interface IntegrationSchemaStructure extends $D.Framework._DBO {
        WrappedParameters: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationParameter;
        IntegrationParameters: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationParameter[];
    }
    function IntegrationSchemaStructure(): IntegrationSchemaStructure;
    interface CreateElementAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        CreateDialogTitle: string;
        FolderId: string;
        PreselectedTemplateId: string;
        BaseName: string;
    }
    function CreateElementAction(): CreateElementAction;
    interface MakeDesignPatternAction extends $D.Framework.ServiceLayer.Actions.Common.GetStringAction {
    }
    function MakeDesignPatternAction(): MakeDesignPatternAction;
    interface OpenDBQueryEditorAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        EntityId: string;
    }
    function OpenDBQueryEditorAction(): OpenDBQueryEditorAction;
    interface ThemeEditorAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        EntityId: string;
    }
    function ThemeEditorAction(): ThemeEditorAction;
}
declare module $D.Framework.ServiceLayer.Services.Folder.FolderUserActions {
    interface RunFolderFlowAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FlowId: string;
        TestForFlowInputs: boolean;
        RunInNewWindow: boolean;
    }
    function RunFolderFlowAction(): RunFolderFlowAction;
    interface RunFolderFlowGroupAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FlowId: string;
        TestForFlowInputs: boolean;
    }
    function RunFolderFlowGroupAction(): RunFolderFlowGroupAction;
}
declare module $D.Framework.Design.DataStructure {
    interface AbstractDefinedFolderExtention extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
    }
    function AbstractDefinedFolderExtention(): AbstractDefinedFolderExtention;
    interface EditDataStructureAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        DefinedTypeName: string;
    }
    function EditDataStructureAction(): EditDataStructureAction;
}
declare module $D.Framework.Design.EntityActions {
    interface ActionClassificationExtension extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        ValidInStates: string[];
        CanAddRequired: boolean;
        CanDeleteRequired: boolean;
        CanViewRequired: boolean;
        CanEditRequired: boolean;
        CanAdministrateRequired: boolean;
        CanSeeHiddenRequired: boolean;
        CanSeeArchivedRequired: boolean;
        CanViewBrowsePageRequired: boolean;
        CanOpenRequired: boolean;
        CanUseRequired: boolean;
        ActionName: string;
        CategoryName: string;
        Order: number;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        IsDefaultGridAction: boolean;
        ShowLoadingIndicatorOutsideDialog: boolean;
    }
    function ActionClassificationExtension(): ActionClassificationExtension;
}
declare module $D.Framework.Design.Flow {
    interface FlowStepCustomShapeSettings extends $D.Framework.Design.Flow.StandardShapeSettings {
        OverrideBackgroundColor: boolean;
        OverrideBorderColor: boolean;
        OverrideBorderWidth: boolean;
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BorderWidth: number;
    }
    function FlowStepCustomShapeSettings(): FlowStepCustomShapeSettings;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface CustomFormInstruction extends $D.Framework.Design.Flow.Service.Execution.BaseInstructionWithHandlerURL {
        StepTrackingId: string;
        FormData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        OpenUrlInNewWindow: boolean;
    }
    function CustomFormInstruction(): CustomFormInstruction;
    interface FlowCompletedInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowRunningAsyncInstruction {
        ResultName: string;
        ResultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function FlowCompletedInstruction(): FlowCompletedInstruction;
    interface FlowTrackingFolderData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        ExtensionData: $D.Framework.Design.Flow.Service.Execution.AbstractFlowExecutionExtensionData;
        PercentComplete: number;
        IsComplete: boolean;
        FlowId: string;
        FlowTrackingId: string;
        ViewPageId: string;
        ViewPageName: string;
        FlowName: string;
        ProcessTypeName: string;
        SubProcessTypeName: string;
        CurrentAssignedUser: string;
        CurrentAssignedDate: any;
        NextAssignmentMilestoneDate: any;
        CurrentAssignmentName: string;
        StatusReason: string;
        FlowRunId: string;
        UniqueProcessId: string;
        AnticipatedFlowEndTime: any;
        EndTime: any;
    }
    function FlowTrackingFolderData(): FlowTrackingFolderData;
    interface FlowStoppedInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowRunningAsyncInstruction {
    }
    function FlowStoppedInstruction(): FlowStoppedInstruction;
}
declare module $D.Framework.Design.Flow.CoreSteps.Tile {
    interface TileLineInfo extends $D.Framework._DBO {
        Text: string;
        TextFont: $D.Silverlight.UI.Utilities.LabelAttributes;
        TextAlignment: $D.Framework.Design.Flow.CoreSteps.Tile.HorizontalAlignment;
        TextBehaviour: $D.Framework.Design.Flow.CoreSteps.Tile.TileTextBehaviour;
        IconInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        IconSize: $D.Framework.Data.DataTypes.UISize;
    }
    function TileLineInfo(): TileLineInfo;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface AbstractTitleAndContentTile extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTitledTile {
        ContentFontSize: number;
        ContentFontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ContentFontFamily: string;
        ContentHorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
        ContentText: string;
    }
    function AbstractTitleAndContentTile(): AbstractTitleAndContentTile;
    interface BaseTileLine extends $D.Framework._DBO {
        TextSettings: $D.Framework.Design.Flow.CoreSteps.Metro.TextSettings;
    }
    function BaseTileLine(): BaseTileLine;
    interface TileDoubleList extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTitledTile {
        LeftList: string[];
        RightList: string[];
        BulletStyle: $D.Framework.Design.Flow.CoreSteps.Metro.TileBulletStyle;
        ListFontSize: number;
        ListFontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ListFontFamily: string;
    }
    function TileDoubleList(): TileDoubleList;
}
declare module $D.Framework.Design.Flow.CoreSteps.Excel {
    interface ExcelTextAttributes extends $D.Silverlight.UI.Utilities.LabelAttributes {
        Justification: $D.Framework.Design.Flow.CoreSteps.Excel.ExcelTextJustification;
    }
    function ExcelTextAttributes(): ExcelTextAttributes;
}
declare module $D.Framework.Design.Flow.Annotations {
    interface GanttChartInfo extends $D.Framework._DBO {
        StartDate: Date;
        EndDate: Date;
        Labels: string[];
        TotalDuration: number;
        Data: $D.Framework.Design.Flow.Annotations.GanttChartData[];
    }
    function GanttChartInfo(): GanttChartInfo;
}
declare module $D.Framework.Design.Flow.Service {
    interface FlowServiceSettingsNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        DisplayData: $D.Framework.Design.Flow.FlowDisplayData;
    }
    function FlowServiceSettingsNotification(): FlowServiceSettingsNotification;
    interface RulePropertyChangedNotification extends $D.Framework.Design.Flow.Service.RuleServiceNotification {
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        SampleDisplayData: $D.Framework.Design.Flow.Service.SampleDisplayData;
        ChangedPropertyName: string;
        EditInputsType: $D.Framework.Design.Properties.EditInputsType;
        IsInputDataRelated: boolean;
        ActionTypes: $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo[];
    }
    function RulePropertyChangedNotification(): RulePropertyChangedNotification;
    interface RuleStepDisplayData extends $D.Framework._DBO {
        ExecutionNumber: number;
        Order: number;
        Id: string;
        ParentGroupId: string;
        StepType: $D.Framework.Design.Flow.Service.RuleStepType;
        AnchorInfo: string;
        ResolvedAnchorData: string;
        HasAnchor: boolean;
        HasConverterFlow: boolean;
        VerbInfo: string;
        HasVerb: boolean;
        ValueInfo: string;
        HasValue: boolean;
        ValidationIssues: $D.Framework.ValidationIssue[];
        HasActions: boolean;
        TrueActions: $D.Framework.Design.Flow.Service.RuleActionDisplayData[];
        FalseActions: $D.Framework.Design.Flow.Service.RuleActionDisplayData[];
        MissingDataActions: $D.Framework.Design.Flow.Service.RuleActionDisplayData[];
        CanSetRuleResultInfo: boolean;
        HasRuleResultInfo: boolean;
        RuleResultInfo: string;
        RuleFalseResultInfo: string;
        RuleFalseResult: $D.Framework.Design.Flow.Service.RuleOutputDisplayData[];
        RuleTrueResult: $D.Framework.Design.Flow.Service.RuleOutputDisplayData[];
        RuleMissingDataResult: $D.Framework.Design.Flow.Service.RuleOutputDisplayData[];
        HasMultipleResultData: boolean;
        StepResults: $D.Framework.Design.Flow.Service.RuleOutputDisplayData[];
        DefaultResults: $D.Framework.Design.Flow.Service.RuleOutputDisplayData[];
        HasNoMatchOutcome: boolean;
        IsIgnored: boolean;
        EvaluateWithNot: boolean;
        IsListStep: boolean;
        ListAllGroupId: string;
        IsEnumeratorChild: boolean;
        EditableDataType: string;
        EditableMappingType: string;
        EditableDataValue: string;
        RuleType: $D.Framework.Design.Flow.RuleType;
        OutputVisibility: $D.Framework.Design.Flow.RuleOutputVisibility;
        ExternalDataSet: $D.Framework.Design.Flow.ExternalDataRuleDataSet;
        CanChangeOutputData: boolean;
    }
    function RuleStepDisplayData(): RuleStepDisplayData;
    interface RuleEditSession extends $D.Framework._DBO {
        RuleSessionId: string;
        UserMessage: string;
        ShowTestActions: boolean;
        VisibleFeatures: string[];
        ExternalDataSourceId: string;
        HeaderDisplayData: $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        SampleDisplayData: $D.Framework.Design.Flow.Service.SampleDisplayData;
        IsFilterApplied: boolean;
        RuleDesignerSurface: $D.Framework.Design.Flow.Service.RuleDesignerSurface;
    }
    function RuleEditSession(): RuleEditSession;
}
declare module $D.Framework.Design.Flow.Service.Edit.Mapping {
    interface SequentialEditSession extends $D.Framework._DBO {
        SessionId: string;
        PropertyGridSessionId: string;
        Sequence: $D.Framework.Design.Flow.Mapping.SelectValue.SelectValuePieceDto[];
        NextItems: $D.Framework.Design.Flow.Mapping.SelectValue.SubProperty[];
        SelectedPath: string;
        ForInput: string;
        ExpectedInputType: string;
        IsEditableAsString: boolean;
    }
    function SequentialEditSession(): SequentialEditSession;
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    interface RuleRowStructure extends $D.Framework._DBO {
        RuleDataId: string;
        RuleData: $D.Framework.Design.Flow.Service.TruthTable.RuleStructure[];
    }
    function RuleRowStructure(): RuleRowStructure;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface MatrixRuleEditSessionCreated extends $D.Framework.Design.Flow.Service.Edit.MatrixRuleEditSession {
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        SampleDisplayData: $D.Framework.Design.Flow.Service.SampleDisplayData;
        HeaderDisplayData: $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
        LeftFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        TopFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Intersections: $D.Framework.Design.Flow.Service.Edit.MatrixIntersectionInfo[];
        VisibleFeatures: $D.Framework.Design.Flow.MatrixRuleDesignerFeature[];
        CanLoadSampleSet: boolean;
    }
    function MatrixRuleEditSessionCreated(): MatrixRuleEditSessionCreated;
    interface MatrixRuleSessionData extends $D.Framework._DBO {
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        SampleDisplayData: $D.Framework.Design.Flow.Service.SampleDisplayData;
        LeftFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        TopFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Intersections: $D.Framework.Design.Flow.Service.Edit.MatrixIntersectionInfo[];
    }
    function MatrixRuleSessionData(): MatrixRuleSessionData;
    interface MatrixRuleEvent extends $D.Framework._DBO {
        EventType: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEventType;
        EntityType: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEventEntityType;
        DimensionId: string;
        Data: $D.Framework.Design.Flow.Service.Edit.MatrixRuleEventData[];
    }
    function MatrixRuleEvent(): MatrixRuleEvent;
}
declare module $D.Framework.Design.Flow.Service.Edit.InputData {
    interface DataDesignSession extends $D.Framework._DBO {
        ShowInputColumn: boolean;
        CanPickSampleSet: boolean;
        SampleSetId: string;
        ForRegistrationId: string;
        SessionId: string;
        Title: string;
        Path: string[];
        CanEditOutputData: boolean;
        InputDiagrams: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[];
        OutputDiagrams: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData[];
    }
    function DataDesignSession(): DataDesignSession;
    interface DataDiagramChangedNotification extends $D.Framework._DBO {
        Diagram: $D.Framework.Design.Flow.Service.Edit.InputData.DiagramDisplayData;
        SurfaceType: $D.Framework.Design.Flow.Service.Edit.InputData.DataDesignerSurfaceType;
    }
    function DataDiagramChangedNotification(): DataDiagramChangedNotification;
}
declare module $D.Framework.Design.Properties {
    interface ContextPropertyNode extends $D.Framework.Design.Properties.ContextNode {
        EditorClassName: string;
        MvcEditorName: string;
        DisplayLabel: string;
        DisplayLabelPosition: $D.Framework.Design.Properties.ContextPropertyNodeLabelPosition;
        HelpData: $D.Framework.Design.Properties.ToolboxHelpDisplayData;
        HelpKey: string;
        Height: number;
        SetFocus: boolean;
        SupportsMultiEdit: boolean;
    }
    function ContextPropertyNode(): ContextPropertyNode;
    interface EntityInformation extends $D.Framework._DBO {
        Label: string;
        Action: $D.Framework.ServiceLayer.Actions.BaseActionType;
    }
    function EntityInformation(): EntityInformation;
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    interface MatrixRuleDebugEntities extends $D.Framework._DBO {
        LeftFlowId: string;
        TopFlowId: string;
        MatrixRuleType: $D.Framework.Design.Flow.Service.Edit.MatrixRuleType;
        LeftFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        TopFlowEntities: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        Intersections: $D.Framework.Design.Flow.Service.Edit.MatrixIntersectionInfo[];
    }
    function MatrixRuleDebugEntities(): MatrixRuleDebugEntities;
}
declare module $D.Framework.Design.Flow.Service.Debugging.DebugData {
    interface DebugTreeFormClosedEvent extends $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugTreeFormEvent {
    }
    function DebugTreeFormClosedEvent(): DebugTreeFormClosedEvent;
}
declare module $D.Framework.Design.DesignPattern {
    interface CreateDesignPatternAction extends $D.Framework.ServiceLayer.Actions.Common.GetStringAction {
        SuggestionName: string;
    }
    function CreateDesignPatternAction(): CreateDesignPatternAction;
    interface CreateFromDesignPatternAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        SuggestionName: string;
        EntityName: string;
    }
    function CreateFromDesignPatternAction(): CreateFromDesignPatternAction;
    interface EditDeclaredInterfaceAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        DeclaredInterfaceName: string;
    }
    function EditDeclaredInterfaceAction(): EditDeclaredInterfaceAction;
}
declare module $D.Framework.Design.Charts {
    interface ChartConfiguration extends $D.Framework._DBO {
        ChartId: string;
        FolderId: string;
        FlowId: string;
        DataSourceMode: any;
        ChartType: $D.Framework.Design.Report.ChartType;
        FieldsDefinition: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        ChartTitle: string;
        PutAnyGroupOverXIntoOtherCategory: boolean;
        GroupsOverXCount: number;
        ShortenLabelsAt: number;
        ShowTooltip: boolean;
        TooltipType: $D.Framework.Design.Report.ChartLabelType;
        ElementsHaveBorder: boolean;
        UseUserDefinedColors: boolean;
        BaseColors: string[];
        ColorsForLabels: any;
        ComponentId: string;
        ReportId: string;
        ReportContextId: string;
        ShowElementLabels: boolean;
        DesignerRequestedHeight: number;
        DesignerRequestedWidth: number;
        Series: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        RequestedHeight: number;
        RequestedWidth: number;
        AvailableSeries: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        IsTransparent: boolean;
        HasDarkTheme: boolean;
        ShowShadow: boolean;
        IsCollapsed: boolean;
        AutoRefresh: boolean;
        AutoRefreshInterval: string;
        ConfigureMinRefreshInterval: boolean;
        IntervalBetweenEvents: number;
        RefreshOnCurrentFolderChange: boolean;
        RefreshOnAnyFolderChange: boolean;
        RefreshOnContainedEntityChange: boolean;
        UpdateDatafromSelectionBus: boolean;
        SelectionBusName: string;
        SilverPartType: $D.Silverlight.UI.Controls.SilverPartType;
        IsSilverPartClosable: boolean;
        IsSilverPartCollapsable: boolean;
        BusyIndicatorText: string;
        ShowBusyIndicator: boolean;
        DataDrillMode: string;
        GroupingField: any;
        Total: any;
        Color: string;
        ChartCssClass: string;
        ShowDataButtonCssClass: string;
        TitleCssClass: string;
        IsInDesignMode: boolean;
        DisableDrillDown: boolean;
        ReportInstanceId: string;
        OverrideDrillDownTitle: boolean;
        DrillDownTitle: string;
        DefaultColors: string[];
        ChartLabelType: $D.Framework.Design.Report.ChartLabelType;
        ChartLegendPosition: $D.Framework.Design.Report.ChartLegendPosition;
        ChartLegendType: $D.Framework.Design.Report.ChartLabelType;
        ShowLegend: boolean;
        RotateLabels: boolean;
        RotateLabelsAngle: number;
        ChartHeader: $D.Framework.Design.Charts.ChartHeaderConfig;
        PageId: string;
        IsEventAutoRefresh: boolean;
        IsConfigureMinRefreshInterval: boolean;
        RefreshTime: number;
        IsAutoRefresh: boolean;
        AllowDataBrowsing: boolean;
        YAxisOptions: $D.Framework.Design.Charts.AxisOptions;
        PieIsDonut: boolean;
        AxisLabels: $D.Framework.Design.Charts.AxisLabels;
        PieLabelPosition: $D.Framework.Design.Report.PieLabelPosition;
        LimitInRows: number;
        Personalization: $D.Framework.Design.Page.Personalization.Personalization[];
        UseMatrixAsSource: boolean;
        ElementBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DisplayStacked: boolean;
        TargetValue: number;
        BulletLayout: $D.Framework.Design.Report.BulletLayout;
        BulletTitlePosition: $D.Framework.Design.Report.BulletTitlePosition;
        MinimumPointSize: number;
        MaximumPointSize: number;
        OkValue: number;
        GoodValue: number;
        BulletMinimum: number;
        BulletMaximum: number;
        SpecifyStepValue: boolean;
        StepValue: number;
        LabelNumberFormat: string;
        TooltipNumberFormat: string;
        Threshold: number;
        WinLabel: string;
        LossLabel: string;
        RangeColors: string[];
        MeasureColors: string[];
        MarkerColors: string[];
        MixedBarProps: $D.Framework.Design.Charts.MixedBarProps;
        ValuesAxisLegend: string;
        EntriesAxisLegend: string;
        Sorting: $D.Framework.Design.Charts.ChartSorting;
        TakeFirstCount: number;
        ResetOptions: $D.Framework.Design.Page.Personalization.ChartResetOptions[];
        OverrideDrillDownReportTitle: boolean;
        DrillDownReportTitle: string;
    }
    function ChartConfiguration(): ChartConfiguration;
    interface ChartRuntimeFilters extends $D.Framework._DBO {
        LabelMetadata: $D.Framework.Design.Charts.ChartEntryMetadataSet;
        SeriesMetadata: $D.Framework.Design.Charts.ChartEntryMetadataSet;
        SortingPicker: $D.Framework.Design.Page.Filters.EnumMatch;
        TakeFirst: $D.Framework.Design.Page.Filters.CountFilterValue;
        PersonalizationScope: $D.Framework.Design.Page.Personalization.PersonalizationScopeDef;
        Stored: boolean;
        SortingHasEdits: boolean;
        TakeFirstHasEdits: boolean;
    }
    function ChartRuntimeFilters(): ChartRuntimeFilters;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ReportColors extends $D.Framework._DBO {
        Background: $D.Silverlight.UI.Utilities.DesignerColor;
        Foreground: $D.Silverlight.UI.Utilities.DesignerColor;
        SelectedForeground: $D.Silverlight.UI.Utilities.DesignerColor;
        SelectedBackground: $D.Silverlight.UI.Utilities.DesignerColor;
        ImageInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        OverrideFont: boolean;
        FontAttributes: $D.Silverlight.UI.Utilities.LabelAttributes;
        CssClassName: string;
    }
    function ReportColors(): ReportColors;
    interface AggregationDataGroup extends $D.Framework._DBO {
        Name: string;
        AggregationDataItem: $D.Framework.Design.Report.Service.Comunication.AggregatedDataItemInfo[];
    }
    function AggregationDataGroup(): AggregationDataGroup;
    interface ReportColumnInfo extends $D.Framework.Design.Report.Service.Comunication.RemoteEditableObject {
        Id: string;
        CanEdit: boolean;
        SpecifyCustomValidationMessage: boolean;
        CustomValidationMessage: string;
        CustomReportColumnRenderer: string;
        Title: string;
        DisplayName: string;
        DateTimeDispalyFormat: string;
        IsNullable: boolean;
        FieldName: string;
        ActualFieldName: string;
        AllowSort: boolean;
        AllowLineBreaks: boolean;
        IsDefaultActionLink: boolean;
        AllowEdit: boolean;
        AllowGroup: boolean;
        AllowFilter: boolean;
        FilterText: string;
        RuntimeFiltersValues: $D.Framework.Design.Report.Service.Comunication.RuntimeFilterInfo[];
        Width: number;
        IsHidden: boolean;
        IsVisible: boolean;
        IncludeInPrint: boolean;
        Alignment: $D.Framework.Design.Report.TextAlignment;
        OverrideFont: boolean;
        CssClassName: string;
        FontAttributes: $D.Silverlight.UI.Utilities.LabelAttributes;
        Wrapping: $D.Framework.Design.Report.TextWrapping;
        SortingOrder: $D.Framework.Design.Report.SortOrder;
        GroupingOrder: number;
        FullTypeName: string;
        DataTypeName: string;
        IsLink: boolean;
        IsRichText: boolean;
        IsMergeTextInlineField: boolean;
        DateTimeFormat: $D.Framework.Utilities.Data.DateTimeFormat;
        NumberFormat: $D.Framework.Utilities.Data.NumberFormat;
        StringFormat: string;
        FormatOptions: $D.Framework.Utilities.Data.NumberFormatOptions;
        Decimals: number;
        UseNumberGroupSeparator: boolean;
        NumberGroupSeparator: string;
        SendDataAsFilterChangeSource: boolean;
        FilterChangeSourceName: string;
        IsAdjustedColumnProperties: boolean;
        ShowPercentBar: boolean;
        DefaultBarcolor: $D.Silverlight.UI.Utilities.DesignerColor;
        BottomBound: number;
        TopBound: number;
        LiveUpdateColumnInfo: $D.Framework.Design.Report.Service.Comunication.LiveUpdateColumnInfo;
        IsRuntimeFilter: boolean;
        IsInvalidColumn: boolean;
        IsResponsive: boolean;
        ValidationIssues: $D.Framework.ValidationIssue[];
    }
    function ReportColumnInfo(): ReportColumnInfo;
    interface ChartSourceForTree extends $D.Framework.Design.Report.Service.Comunication.ReportForTree {
        Series: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        UseMatrix: boolean;
    }
    function ChartSourceForTree(): ChartSourceForTree;
}
declare module $D.Framework.Design.Form {
    interface FormDesignInfo extends $D.Framework._DBO {
        SessionId: string;
        FormElements: $D.Framework.Design.Form.FormElementInfo[];
        PromptDisplayData: $D.Framework.Design.Flow.Service.DesignerPromptDisplayData;
        HeaderDisplayData: $D.Framework.Design.Flow.Service.DesignerHeaderDisplayData;
        HasFlowData: boolean;
        FormSessionInfoId: string;
        ControlData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function FormDesignInfo(): FormDesignInfo;
    interface CustomValidationChangedEvent extends $D.Framework.Design.Form.ValidationChangedEvent {
        RuleID: string;
    }
    function CustomValidationChangedEvent(): CustomValidationChangedEvent;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface ExportDescriptionInfo extends $D.Framework._DBO {
        FileName: string;
        FileLength: number;
        ExportDescription: $D.Framework.ServiceLayer.Utilities.ExportDescription;
    }
    function ExportDescriptionInfo(): ExportDescriptionInfo;
    interface DeletionSideEffectIssue extends $D.Framework.ServiceLayer.Utilities.RemoveEntityValidationIssue {
    }
    function DeletionSideEffectIssue(): DeletionSideEffectIssue;
}
declare module $D.Framework.ServiceLayer.Actions {
    interface CLIAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function CLIAction(): CLIAction;
    interface InvokeActionMessage extends $D.Framework._DBO {
        Action: $D.Framework.ServiceLayer.Actions.BaseActionType;
        EntityClassName: string;
        EntityId: string;
        FolderId: string;
    }
    function InvokeActionMessage(): InvokeActionMessage;
    interface MvcAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function MvcAction(): MvcAction;
    interface SilverlightAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function SilverlightAction(): SilverlightAction;
    interface WebFormAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function WebFormAction(): WebFormAction;
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    interface CreateThemeAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        FolderID: string;
    }
    function CreateThemeAction(): CreateThemeAction;
    interface EditThemeAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ThemeName: string;
    }
    function EditThemeAction(): EditThemeAction;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    interface MethodParameter extends $D.Framework._DBO {
        TypeInfo: $D.Framework.ServiceLayer.Services.ConfigurationStorage.TypeDescription;
        Order: number;
        Name: string;
    }
    function MethodParameter(): MethodParameter;
}
declare module $D.Framework.ServiceLayer.Services.ServiceInformation {
    interface ServiceInformation extends $D.Framework._DBO {
        Name: string;
        UsedDataTypes: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceUsedDataType[];
        Methods: string[];
        Url: string;
        WsdlUrl: string;
        MethodsInformation: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceMethodInformation[];
    }
    function ServiceInformation(): ServiceInformation;
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    interface CreateServiceCatalogFlowItemAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function CreateServiceCatalogFlowItemAction(): CreateServiceCatalogFlowItemAction;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface InstanceCommentExtension extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        Status: $D.Framework.ServiceLayer.InstanceStatus;
        TimeElapsed: string;
        InitiatedBy: string;
    }
    function InstanceCommentExtension(): InstanceCommentExtension;
    interface InstanceData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        InstanceName: string;
        AutoStart: boolean;
        EnableClustering: any;
        EnableStatisticalTracking: boolean;
        IgnoreAllCertificateErrors: boolean;
        DatabaseName: string;
        DatabaseServerName: string;
        DatabaseSizeMb: number;
        NumberOfServers: number;
        NumberOfUsers: number;
        LastLoginDate: any;
        WorkQueueWorker: string;
        InstanceBaseUrl: string;
    }
    function InstanceData(): InstanceData;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Servers {
    interface StandAloneServerConfigurationAssignment extends $D.Framework.ServiceLayer.Services.ServerManagement.Servers.HostingConfigurationServerAssignment {
        ServerId: string;
    }
    function StandAloneServerConfigurationAssignment(): StandAloneServerConfigurationAssignment;
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    interface ViewRelationsAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        SourceType: $D.Framework.ServiceLayer.Services.Relations.ViewRelationsActionSourceType;
        SourceId: string;
    }
    function ViewRelationsAction(): ViewRelationsAction;
}
declare module $D.Framework.ServiceLayer.Services.Portal {
    interface PlatformServer extends $D.Framework.ServiceLayer.AbstractEntity {
        PlatformServerId: string;
        LastCheckinTime: Date;
        Name: string;
        IpAddress: string;
        Version: string;
        BaseUrlToPortal: string;
        CanBeJobServer: boolean;
        JobDelay: number;
        JobServerOrder: number;
        IsActiveOnWorkQueues: boolean;
        Offline: boolean;
        ClusterPortalBaseUrl: string;
    }
    function PlatformServer(): PlatformServer;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface ContactInfoOwner extends $D.Framework._DBO {
        OwnerID: string;
        Addresses: $D.Framework.ServiceLayer.Services.Organization.Address[];
        Phones: $D.Framework.ServiceLayer.Services.Organization.Phone[];
        EmailAddresses: $D.Framework.ServiceLayer.Services.Organization.EmailAddress[];
        InstantMessengerAddresses: $D.Framework.ServiceLayer.Services.Organization.InstantMessengerAddress[];
        OtherContacts: $D.Framework.ServiceLayer.Services.Organization.OtherContact[];
    }
    function ContactInfoOwner(): ContactInfoOwner;
    interface PersonData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        FirstName: string;
        MiddleInitial: string;
        LastName: string;
        JobTitle: string;
    }
    function PersonData(): PersonData;
}
declare module $D.Framework.ServiceLayer.Services.Modules {
    interface ModuleInstallation extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        IsInstalled: boolean;
        IsImported: boolean;
        ModuleName: string;
        ModuleDesc: string;
        PackageLastModified: Date;
        PackageSize: number;
        Version: string;
        ModuleCompiledOnDate: Date;
        ModuleCompiledOnServer: string;
        ModuleUrl: string;
        ModuleImageUrl: string;
    }
    function ModuleInstallation(): ModuleInstallation;
}
declare module $D.Framework.ServiceLayer.Services.Module {
    interface BrowseDependenciesAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        EntityType: string;
        EntityId: string;
    }
    function BrowseDependenciesAction(): BrowseDependenciesAction;
}
declare module $D.Framework.ServiceLayer.Services.Logging {
    interface ClearClientLogAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ClearClientLogAction(): ClearClientLogAction;
    interface SetClientLogCategoriesAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        SetType: $D.Framework.ServiceLayer.Services.Logging.ClientLogCategoriesSetType;
    }
    function SetClientLogCategoriesAction(): SetClientLogCategoriesAction;
    interface SetClientLogLevelAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function SetClientLogLevelAction(): SetClientLogLevelAction;
    interface SaveClientLogAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function SaveClientLogAction(): SaveClientLogAction;
    interface ManageClientProfilerAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function ManageClientProfilerAction(): ManageClientProfilerAction;
    interface SaveClientPerformanceDataAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function SaveClientPerformanceDataAction(): SaveClientPerformanceDataAction;
}
declare module $D.Framework.ServiceLayer.Services.Location {
    interface Location extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        LocationName: string;
        Timezone: string;
        IsWorkingMonday: boolean;
        StartTimeMonday: Date;
        EndTimeMonday: Date;
        IsWorkingTuesday: boolean;
        StartTimeTuesday: Date;
        EndTimeTuesday: Date;
        IsWorkingWednesday: boolean;
        StartTimeWednesday: Date;
        EndTimeWednesday: Date;
        IsWorkingThursday: boolean;
        StartTimeThursday: Date;
        EndTimeThursday: Date;
        IsWorkingFriday: boolean;
        StartTimeFriday: Date;
        EndTimeFriday: Date;
        IsWorkingSaturday: boolean;
        StartTimeSaturday: Date;
        EndTimeSaturday: Date;
        IsWorkingSunday: boolean;
        StartTimeSunday: Date;
        EndTimeSunday: Date;
        IsBusinessTimeCommon: boolean;
        CommonStartTime: Date;
        CommonEndTime: Date;
        IsDefault: boolean;
    }
    function Location(): Location;
}
declare module $D.Framework.ServiceLayer.Services.ImportExport {
    interface ExportEntitiesAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        DefaultServerFolderPath: string;
        DefaultZipFileName: string;
        ModuleName: string;
    }
    function ExportEntitiesAction(): ExportEntitiesAction;
    interface ImportEntitiesAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ImportZip: boolean;
    }
    function ImportEntitiesAction(): ImportEntitiesAction;
}
declare module $D.Framework.ServiceLayer.Services.Image {
    interface ImageFolderExtensionData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        ImageFolderPath: string;
    }
    function ImageFolderExtensionData(): ImageFolderExtensionData;
}
declare module $D.Framework.ServiceLayer.Services.EntityDetails {
    interface ElementRegistrationDetails extends $D.Framework.ServiceLayer.Services.EntityDetails.AbstractFolderEntityDetails {
    }
    function ElementRegistrationDetails(): ElementRegistrationDetails;
    interface DocumentDetails extends $D.Framework.ServiceLayer.Services.EntityDetails.AbstractFolderEntityDetails {
        CanEdit: boolean;
        CanOpen: boolean;
        DocumentType: string;
    }
    function DocumentDetails(): DocumentDetails;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface DatabaseData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        UseCurrentDatabase: boolean;
        ConnectionString: string;
        DBType: $D.Framework.ServiceLayer.DataBaseTypeEnum;
        AgentId: string;
        FlowId: string;
        ODBCSupportsTOP: boolean;
        ConnectionName: string;
    }
    function DatabaseData(): DatabaseData;
    interface TableActionsExtension extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        ObjectId: string;
    }
    function TableActionsExtension(): TableActionsExtension;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.Actions {
    interface DeleteDatabaseAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
    }
    function DeleteDatabaseAction(): DeleteDatabaseAction;
}
declare module $D.Framework.ServiceLayer.Services.Chat {
    interface ChatData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        ChatTitle: string;
        ChatType: $D.Framework.ServiceLayer.Services.Chat.ChatType;
        CloseOption: $D.Framework.ServiceLayer.Services.Chat.ChatClosingOptions;
        EntityId: string;
        ExtensionId: string;
        EntityTypeName: string;
        Invitations: $D.Framework.ServiceLayer.Services.Chat.Invitation[];
        Closed: boolean;
        InactivityPeriod: string;
    }
    function ChatData(): ChatData;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface ChangeAssignmentAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        CurrentPriority: number;
    }
    function ChangeAssignmentAction(): ChangeAssignmentAction;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService {
    interface RESTService extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        RestServiceUrl: string;
        VarsFromUrl: string;
        PingResult: string;
        TokenEncodingType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.TokenEncodingType;
        AuthType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestServiceAuthType;
        IgnoreCertificateErrors: boolean;
        SslMutualAuthentication: boolean;
        PfxCertificate: $D.Framework.Data.DataTypes.FileData;
        MutualAuthPfxPassword: string;
        PreAuthenticateRequest: boolean;
        UseStaticBasicCreds: boolean;
        Username: string;
        Password: string;
        UseCustomTagInAuthorizationHeader: boolean;
        CustomTagForAuthorizationHeader: string;
        UseStaticTokenId: boolean;
        TokenId: string;
        UseSignedOAuth1: boolean;
        ConsumerKey: string;
        InitialTokenData: string;
        PfxFilename: string;
        PfxPassword: string;
        ShowAdvanced: boolean;
        AdditionalHeaders: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestHttpHeader[];
    }
    function RESTService(): RESTService;
}
declare module $D.OAuth {
    interface OAuthProvider extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityDescription: string;
        OAuthVersion: $D.OAuth.OAuthVersion;
        UseDynamicBaseUrl: boolean;
        DynamicBaseUrlFieldName: string;
        TokenRequestRelativeUrl: string;
        TokenRefreshRelativeUrl: string;
        TokenRequestURL: string;
        TokenRefreshURL: string;
        AuthorizeURL: string;
        AccessTokenURL: string;
        OAuth2CallbackURL: string;
        DefaultConsumerKey: string;
        DefaultConsumerSecretKey: string;
        UsePkce: boolean;
        UrlEncodeRefreshData: boolean;
        ProviderId: string;
    }
    function OAuthProvider(): OAuthProvider;
    interface OAuthToken extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        TokenData: string;
        TokenSecretData: string;
        VerifierText: string;
        ConsumerKey: string;
        ConsumerSecret: string;
        ProviderId: string;
        OAuthVersion: $D.OAuth.OAuthVersion;
        AuthorizationURL: string;
        TokenId: string;
        RefreshData: string;
        Signature: string;
        InstanceUrl: string;
        IssuedAt: string;
        FullAuthorizationResponse: string;
        FullAccessTokenResponse: string;
    }
    function OAuthToken(): OAuthToken;
}
declare module $D.DesignerRepository {
    interface AbstractRepositoryActivity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
    }
    function AbstractRepositoryActivity(): AbstractRepositoryActivity;
}
declare module $D.Framework.ServiceLayer.Services.DesignerRepository {
    interface AppStoreConfiguration extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        EntityName: string;
    }
    function AppStoreConfiguration(): AppStoreConfiguration;
}
declare module $D.Framework.ProjectConversion {
    interface ConvertedProject extends $D.Framework._DBO {
        ProjectName: string;
        Description: string;
        Datatypes: $D.Framework.ProjectConversion.ConvertedDatatype[];
        Enums: $D.Framework.ProjectConversion.ConvertedEnum[];
        Flows: $D.Framework.ProjectConversion.ConvertedFlow[];
        Forms: $D.Framework.ProjectConversion.ConvertedForm[];
        StatementRules: $D.Framework.ProjectConversion.ConvertedRule[];
        MatrixRules: $D.Framework.ServiceLayer.Services.ProjectConversion.ConvertedMatrixRule[];
        TruthTableRules: $D.Framework.ProjectConversion.ConvertedRule[];
    }
    function ConvertedProject(): ConvertedProject;
}
declare module $D.Framework.Utilities.Profiler.Control {
    interface ProfileResults extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        SessionId: string;
        ProfileSession: $D.Framework.Utilities.Profiler.ProfileSession;
    }
    function ProfileResults(): ProfileResults;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface AddEntityAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddEntityAction(): AddEntityAction;
    interface AddEntityActionFolderAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddEntityActionFolderAction(): AddEntityActionFolderAction;
    interface YesNoAction extends $D.Framework.ServiceLayer.Actions.Common.ConfirmAction {
    }
    function YesNoAction(): YesNoAction;
    interface OkCancelAction extends $D.Framework.ServiceLayer.Actions.Common.ConfirmAction {
    }
    function OkCancelAction(): OkCancelAction;
    interface OkAction extends $D.Framework.ServiceLayer.Actions.Common.ConfirmAction {
    }
    function OkAction(): OkAction;
    interface MakeStringSelectionSearchAction extends $D.Framework.ServiceLayer.Actions.Common.MakeSelectionSearchAction {
        AllowOther: boolean;
    }
    function MakeStringSelectionSearchAction(): MakeStringSelectionSearchAction;
    interface AddObjectSearchAction extends $D.Framework.ServiceLayer.Actions.Common.MakeSelectionSearchAction {
    }
    function AddObjectSearchAction(): AddObjectSearchAction;
    interface RemoveObjectSearchAction extends $D.Framework.ServiceLayer.Actions.Common.MakeSelectionSearchAction {
    }
    function RemoveObjectSearchAction(): RemoveObjectSearchAction;
    interface OpenFileAction extends $D.Framework.ServiceLayer.Actions.Common.DownloadFileAction {
    }
    function OpenFileAction(): OpenFileAction;
    interface ViewProfileDataAction extends $D.Framework.ServiceLayer.Actions.Common.OpenUrlAction {
    }
    function ViewProfileDataAction(): ViewProfileDataAction;
    interface CopyPortalUrlToClipboardAction extends $D.Framework.ServiceLayer.Actions.Common.PortalUrlAction {
    }
    function CopyPortalUrlToClipboardAction(): CopyPortalUrlToClipboardAction;
    interface OpenPortalUrlAction extends $D.Framework.ServiceLayer.Actions.Common.PortalUrlAction {
        OpenInNewWindow: boolean;
        Height: number;
        Width: number;
        HasChrome: boolean;
    }
    function OpenPortalUrlAction(): OpenPortalUrlAction;
    interface SendPortalUrlAction extends $D.Framework.ServiceLayer.Actions.Common.PortalUrlAction {
        IsRelative: boolean;
        LinkName: string;
    }
    function SendPortalUrlAction(): SendPortalUrlAction;
    interface SelectEntityAction extends $D.Framework.ServiceLayer.Actions.Common.BaseSelectEntityAction {
        SelectedEntityID: string;
    }
    function SelectEntityAction(): SelectEntityAction;
    interface SelectMultipleEntityAction extends $D.Framework.ServiceLayer.Actions.Common.BaseSelectEntityAction {
        SelectedEntityIDs: string[];
    }
    function SelectMultipleEntityAction(): SelectMultipleEntityAction;
    interface WarningBeforeDeleteAction extends $D.Framework.ServiceLayer.Actions.Common.ConfirmAction {
    }
    function WarningBeforeDeleteAction(): WarningBeforeDeleteAction;
    interface CreateRootFolderAction extends $D.Framework.ServiceLayer.Actions.Common.CreateFolderAction {
    }
    function CreateRootFolderAction(): CreateRootFolderAction;
}
declare module $D.Framework.Design {
    interface EditDefinedDataStructureAction extends $D.Framework.ServiceLayer.Actions.Common.EditEntityAction {
    }
    function EditDefinedDataStructureAction(): EditDefinedDataStructureAction;
    interface EditEnumDataTypeAction extends $D.Framework.ServiceLayer.Actions.Common.EditEntityAction {
    }
    function EditEnumDataTypeAction(): EditEnumDataTypeAction;
    interface ElementUsageDto extends $D.Framework._DBO {
        ToEntityId: string;
        Role: string;
        ToInputData: $D.Framework.Design.DataDescriptionWithIssue[];
        ToOutcomeScenarios: $D.Framework.Design.OutcomeScenarioWithIssue[];
    }
    function ElementUsageDto(): ElementUsageDto;
}
declare module $D.Framework.ServiceLayer {
    interface AbstractModuleSettings extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
    }
    function AbstractModuleSettings(): AbstractModuleSettings;
    interface AbstractModuleRights extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        UserRightsID: string;
    }
    function AbstractModuleRights(): AbstractModuleRights;
}
declare module $D.Framework.Design.WebHooks {
    interface WebHookAction extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityName: string;
        Url: string;
        WebhookRequestType: $D.Framework.Design.WebHooks.RequestType;
        Headers: $D.Framework.Design.WebHooks.HttpDataPair[];
        Body: $D.Framework.Design.WebHooks.HttpDataPair[];
    }
    function WebHookAction(): WebHookAction;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface Folder extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        FolderID: string;
        EntityName: string;
        FolderBehaviorType: string;
        ShowInTree: boolean;
        ShowInUserPortal: any;
        SubMenuBehavior: $D.Framework.ServiceLayer.Services.Folder.SubMenuBehavior;
        SubMenuGroupName: string;
        CanBeRoot: boolean;
        HasSpecifiedView: any;
        DefaultPageName: string;
        FolderOrder: number;
        FullPath: string;
        NestingLevel: number;
        IsSystemFolder: boolean;
        FolderTypeName: string;
        SecurityFolderId: string;
        IsSecurityFolder: boolean;
        HasSubFolders: boolean;
        CanBeExpanded: boolean;
    }
    function Folder(): Folder;
    interface FolderState extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        FolderStateId: string;
        EntityName: string;
        EntityDescription: string;
        Order: number;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ParentStateName: string;
        Completed: boolean;
        CompletedDateTime: any;
        StartedDateTime: any;
        FromState: string;
        ToState: string;
        StartedFromNonSequentialStatePath: boolean;
        CompletedFromNonSequentialStatePath: boolean;
        TimeSpentInSeconds: any;
        Current: boolean;
    }
    function FolderState(): FolderState;
    interface ExpectedFolderState extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ExpectedFolderStateId: string;
        StateName: string;
        Order: number;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ClosedState: boolean;
        ShouldCreateAssignment: boolean;
        AccountIds: string[];
        GroupIds: string[];
    }
    function ExpectedFolderState(): ExpectedFolderState;
    interface AddNewFolderAccountPermission extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddNewFolderAccountPermission(): AddNewFolderAccountPermission;
    interface EditFolderAccountPermission extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function EditFolderAccountPermission(): EditFolderAccountPermission;
    interface AddNewFolderGroupPermission extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddNewFolderGroupPermission(): AddNewFolderGroupPermission;
    interface EditFolderGroupPermission extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function EditFolderGroupPermission(): EditFolderGroupPermission;
    interface AddToFavorites extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddToFavorites(): AddToFavorites;
    interface EditFavorite extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function EditFavorite(): EditFavorite;
    interface AbstractFolderAccessRight extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CanView: boolean;
        CanEdit: boolean;
        CanAdd: boolean;
        CanDelete: boolean;
        CanAdministrate: boolean;
        CanSeeHidden: boolean;
        CanViewBrowsePage: boolean;
        CanSeeArchived: boolean;
        CanOpen: boolean;
        CanUse: boolean;
        CustomPermission1: boolean;
        CustomPermission2: boolean;
        CustomPermission3: boolean;
        CustomPermission4: boolean;
        CustomPermission5: boolean;
        CustomPermission6: boolean;
        CustomPermission7: boolean;
        CustomPermission8: boolean;
        CustomPermission9: boolean;
        CustomPermission10: boolean;
        CustomPermission11: boolean;
        CustomPermission12: boolean;
        CustomPermission13: boolean;
        CustomPermission14: boolean;
        CustomPermission15: boolean;
        CustomPermission16: boolean;
        CustomPermission17: boolean;
        CustomPermission18: boolean;
        CustomPermission19: boolean;
        CustomPermission20: boolean;
    }
    function AbstractFolderAccessRight(): AbstractFolderAccessRight;
    interface AbstractPageData extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Order: number;
        DisplayIfResolutionGreaterThan: number;
        DisplayIfResolutionLessThan: number;
        EntityName: string;
        EntityDescription: string;
        DisplayPlatforms: string[];
    }
    function AbstractPageData(): AbstractPageData;
    interface PageReport extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        PageReportId: string;
    }
    function PageReport(): PageReport;
}
declare module $D.Framework.ServiceLayer.Services.RootNodes {
    interface AbstractRootNode extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        IsEnabled: boolean;
        OverrideName: string;
        EntityDescription: string;
        EntityName: string;
        FolderIndex: number;
        FolderPosition: $D.Framework.ServiceLayer.Services.RootNodes.FolderPosition;
    }
    function AbstractRootNode(): AbstractRootNode;
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    interface Account extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        LanguageName: string;
        FirstName: string;
        MiddleInitial: string;
        LastName: string;
        Initials: string;
        NickName: string;
        UserCulture: string;
        JobTitle: string;
        SecurityQuestion: string;
        SecurityAnswer: string;
        SecurityQuestion2: string;
        SecurityAnswer2: string;
        SecurityQuestion3: string;
        SecurityAnswer3: string;
        TimezoneName: string;
        AccountPictureID: string;
        NumberOfAttempts: number;
        LastPasswordResetDate: Date;
        AccountID: string;
        EmployeeID: string;
        Department: string;
        DepartmentNumber: string;
        Company: string;
        IsActive: boolean;
        IsConfirmed: boolean;
        NeverExpires: boolean;
        CanUsePortal: boolean;
        IsTwoFactorAuthenticationEnabled: boolean;
        EmailAddress: string;
        UserType: $D.Framework.ServiceLayer.Services.Accounts.AccountType;
        AuthenticationType: $D.Framework.ServiceLayer.Services.Accounts.UserAuthenticationType;
        DefaultFolderId: string;
        HomeFolderID: string;
        SourceSystemId: string;
        LastUSN: number;
        DistinguishedName: string;
        SID: string;
        UserIdentifier: string;
        PermittedIPAddresses: string[];
        LocationId: string;
        MustChangePasswordOnNextLogin: boolean;
        Theme: string;
        LastLoginDate: any;
        FirstLoginDate: any;
        IdentityProviderID: string;
    }
    function Account(): Account;
    interface Group extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        LDAPSourceServerId: string;
        LDAPObjectId: string;
        IsDeletedOnLDAPServer: boolean;
        EntityName: string;
        EntityDescription: string;
        GroupId: string;
        DefaultFolderId: string;
        LastUSN: number;
        DistinguishedName: string;
        SpecifySyncGroup: boolean;
        SpecifyLinkedGroups: boolean;
        BaseGroupId: string;
        DefaultUrlParameters: string;
        AddingToBaseGroupAddsToSubGroup: boolean;
        RemovingFromBaseGroupRemovesFromSubGroup: boolean;
        RemoveBaseGroupAccountsOnUnhook: boolean;
        AddingAccountToSubGroupAddsToBaseGroup: boolean;
        AddingAccountsOnlyInSubGroupIsAllowed: boolean;
        RemovingAccountInSubGroupRemovesFromBaseGroup: boolean;
        BrowserBehavior: $D.Framework.ServiceLayer.Services.Portal.GroupBrowserSilverlightBehavior;
    }
    function Group(): Group;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface CellDataTemplate extends $D.Framework._DBO {
        IsHidden: boolean;
        Style: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
        ReportContextId: string;
    }
    function CellDataTemplate(): CellDataTemplate;
}
declare module $D.Framework.Design.Page.Layouts {
    interface ExportLayoutGrid extends $D.Framework.Design.Page.Layouts.ExportLayout {
        Columns: $D.Framework.Design.Page.Layouts.ExportLayoutGridColumn[];
        Rows: $D.Framework.Design.Page.Layouts.ExportLayoutGridRow[];
    }
    function ExportLayoutGrid(): ExportLayoutGrid;
    interface ExportLayoutStackHorizontal extends $D.Framework.Design.Page.Layouts.ExportLayoutStack {
    }
    function ExportLayoutStackHorizontal(): ExportLayoutStackHorizontal;
    interface ExportLayoutStackVertical extends $D.Framework.Design.Page.Layouts.ExportLayoutStack {
    }
    function ExportLayoutStackVertical(): ExportLayoutStackVertical;
    interface ExportLayoutResponsiveStackVertical extends $D.Framework.Design.Page.Layouts.ExportLayoutStack {
    }
    function ExportLayoutResponsiveStackVertical(): ExportLayoutResponsiveStackVertical;
    interface ExportChart extends $D.Framework.Design.Page.Layouts.ExportElement {
        ReportId: string;
        FolderId: string;
        ReportContextId: string;
        Chart: $D.Framework.Design.Report.ChartInfo;
        ChartKey: string;
        Path: string;
        UseSettings: boolean;
        UseSettingsForAnyFolder: boolean;
    }
    function ExportChart(): ExportChart;
}
declare module $D.Framework.Design.Report {
    interface CounterInfo extends $D.Framework.Design.Report.ChartInfo {
        LowValue: number;
        NormalValue: number;
        HighValue: number;
        ReverseLowAndHighStyles: boolean;
        LabelBehavior: $D.Framework.Design.Report.CounterChartLabelBehavior;
    }
    function CounterInfo(): CounterInfo;
    interface GaugeChartInfo extends $D.Framework.Design.Report.ChartInfo {
        MaximumValue: number;
        ReverseLowAndHighStyles: boolean;
    }
    function GaugeChartInfo(): GaugeChartInfo;
    interface WinLooseChartInfo extends $D.Framework.Design.Report.ChartInfo {
        ThresholdValue: number;
        WinLabel: string;
        LossLabel: string;
    }
    function WinLooseChartInfo(): WinLooseChartInfo;
    interface BulletsChartInfo extends $D.Framework.Design.Report.ChartInfo {
        TargetValue: number;
        OkValue: number;
        GoodValue: number;
        BulletsType: $D.Framework.Design.Report.BulletType;
        BulletsLabelFormat: $D.Framework.Design.Report.BulletLabelFormat;
        Minimum: number;
        Maximum: number;
        BulletLayout: $D.Framework.Design.Report.BulletLayout;
        BulletTitlePosition: $D.Framework.Design.Report.BulletTitlePosition;
        RangeColors: string[];
        MeasureColors: string[];
        MarkerColors: string[];
    }
    function BulletsChartInfo(): BulletsChartInfo;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface RunFlowWithDataAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        UsePositionalData: boolean;
    }
    function RunFlowWithDataAction(): RunFlowWithDataAction;
    interface SimpleCreateElementAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function SimpleCreateElementAction(): SimpleCreateElementAction;
    interface StepInfo extends $D.Framework._DBO {
        StepID: string;
        Name: string;
        FlowID: string;
        StepOutputs: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementOutputTypeDescription[];
        StepInputs: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementInputTypeDescription;
    }
    function StepInfo(): StepInfo;
    interface ElementRegistration extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        FromTemplateId: string;
        OwnerEmail: string;
        ComponentRegistrationDataId: string;
        DoNotIndexContent: boolean;
        EntityFolderID: string;
        NeverExport: boolean;
        BehaviorType: string;
        Complexity: number;
        Enabled: boolean;
        ElementOrder: number;
        CreatedInVersion: string;
        ModifiedInVersion: string;
        ShouldGenerateService: boolean;
        GeneratedServiceName: string;
        GeneratedServiceMethod: string;
        AnchorDataName: string;
        AnchorDataType: string;
        AnchorDataIsList: boolean;
        ComponentRegistrationId: string;
        Name: string;
        ClassName: string;
        MethodName: string;
        HeaderClassName: string;
        AllowRESTAPICalls: boolean;
        IntegrationType: $D.Framework.Design.IntegrationType;
        ServiceDataFormat: $D.Framework.Design.ServiceDataFormat;
        ServiceReferenceType: $D.Framework.Design.ServiceReferenceType;
        OverrideServiceUrl: boolean;
        ServiceUrl: string;
        ConfigureHttpMethods: boolean;
        AllowedHttpMethods: string[];
        AllowedHttpMethodsString: string;
        HasConfiguratonData: boolean;
        BackgroundElementID: string;
        ElementAttribute: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[];
        SubElementType: string;
        OutcomeData: $D.Framework.Design.Flow.Mapping.OutcomeScenarioData[];
        InputData: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function ElementRegistration(): ElementRegistration;
    interface RegisterComponentAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function RegisterComponentAction(): RegisterComponentAction;
    interface RegisterMethodInvokeStepAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function RegisterMethodInvokeStepAction(): RegisterMethodInvokeStepAction;
    interface ElementRegistrationIntegrationStructure extends $D.Framework._DBO {
        XmlOrJsonSerializedString: string;
        SchemaStructure: $D.Framework.ServiceLayer.Services.ConfigurationStorage.IntegrationSchemaStructure;
    }
    function ElementRegistrationIntegrationStructure(): ElementRegistrationIntegrationStructure;
    interface CreateFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
    }
    function CreateFormAction(): CreateFormAction;
    interface CreateElementWithBehaviorAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
        BehaviorType: string;
    }
    function CreateElementWithBehaviorAction(): CreateElementWithBehaviorAction;
    interface CreatePageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
    }
    function CreatePageAction(): CreatePageAction;
    interface CreatePrintPageTemplateAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
    }
    function CreatePrintPageTemplateAction(): CreatePrintPageTemplateAction;
    interface CreateReportAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
    }
    function CreateReportAction(): CreateReportAction;
    interface CreateReportPageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
    }
    function CreateReportPageAction(): CreateReportPageAction;
    interface CreateNewRegistrationAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction {
        ActionKey: string;
    }
    function CreateNewRegistrationAction(): CreateNewRegistrationAction;
    interface OpenDesignerInNewWindowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        ElementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
        IsKnownEditedType: boolean;
    }
    function OpenDesignerInNewWindowAction(): OpenDesignerInNewWindowAction;
    interface EditFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditFormAction(): EditFormAction;
    interface PreviewFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function PreviewFormAction(): PreviewFormAction;
    interface EditEndFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditEndFormAction(): EditEndFormAction;
    interface PreviewEndFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function PreviewEndFormAction(): PreviewEndFormAction;
    interface EditFormBackgroundAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditFormBackgroundAction(): EditFormBackgroundAction;
    interface CreateFormWithBackgroundAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function CreateFormWithBackgroundAction(): CreateFormWithBackgroundAction;
    interface EditPageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditPageAction(): EditPageAction;
    interface PreviewPageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function PreviewPageAction(): PreviewPageAction;
    interface ShowPageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function ShowPageAction(): ShowPageAction;
    interface ExportPageAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        OverridenFolderId: string;
    }
    function ExportPageAction(): ExportPageAction;
    interface EditReportAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditReportAction(): EditReportAction;
    interface EditReportViaWizardAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        ElementName: string;
    }
    function EditReportViaWizardAction(): EditReportViaWizardAction;
    interface PreviewReportAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        PassInFolderIdAsParam: boolean;
        ReportName: string;
    }
    function PreviewReportAction(): PreviewReportAction;
    interface DownloadReportDataAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        PrintFormat: string;
    }
    function DownloadReportDataAction(): DownloadReportDataAction;
    interface RegistrationWithSampleElementAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        SampleId: string;
    }
    function RegistrationWithSampleElementAction(): RegistrationWithSampleElementAction;
    interface EditAgentFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditAgentFlowAction(): EditAgentFlowAction;
    interface DebugFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function DebugFlowAction(): DebugFlowAction;
    interface DebugFlowFromSampleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        SampleId: string;
    }
    function DebugFlowFromSampleAction(): DebugFlowFromSampleAction;
    interface DirectDebugFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function DirectDebugFlowAction(): DirectDebugFlowAction;
    interface RunFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        RunInSidePanel: boolean;
        RunInNewWindow: boolean;
        RunInNewWindowMobile: boolean;
        PassEntityIdAsInput: boolean;
        TestForFlowInputs: boolean;
    }
    function RunFlowAction(): RunFlowAction;
    interface RunFormWithDataAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function RunFormWithDataAction(): RunFormWithDataAction;
    interface RunAgentFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function RunAgentFlowAction(): RunAgentFlowAction;
    interface AddFlowUnitTest extends $D.Framework.ServiceLayer.Actions.Common.EditProviderAction {
    }
    function AddFlowUnitTest(): AddFlowUnitTest;
    interface CompareFlowsHistoryAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        Title: string;
        Path: string[];
    }
    function CompareFlowsHistoryAction(): CompareFlowsHistoryAction;
    interface DebugRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function DebugRuleAction(): DebugRuleAction;
    interface DebugMatrixRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function DebugMatrixRuleAction(): DebugMatrixRuleAction;
    interface AddRuleUnitTest extends $D.Framework.ServiceLayer.Actions.Common.EditProviderAction {
    }
    function AddRuleUnitTest(): AddRuleUnitTest;
    interface AddMatrixRuleUnitTest extends $D.Framework.ServiceLayer.Actions.Common.EditProviderAction {
    }
    function AddMatrixRuleUnitTest(): AddMatrixRuleUnitTest;
    interface EditTextMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
    }
    function EditTextMergeAction(): EditTextMergeAction;
    interface PreviewTextMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationElementAction {
        SubElementType: string;
        ViewCellsInMVC: boolean;
    }
    function PreviewTextMergeAction(): PreviewTextMergeAction;
    interface FlowExtensionData extends $D.Framework.Design.EntityActions.ActionClassificationExtension {
    }
    function FlowExtensionData(): FlowExtensionData;
}
declare module $D.Framework.Design.EntityActions {
    interface FlowExecutionRecord extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityId: string;
        FlowId: string;
    }
    function FlowExecutionRecord(): FlowExecutionRecord;
    interface RunUserFolderFlowAction extends $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.RunFolderFlowAction {
    }
    function RunUserFolderFlowAction(): RunUserFolderFlowAction;
    interface EditUserProviderAction extends $D.Framework.ServiceLayer.Actions.Common.EditProviderAction {
    }
    function EditUserProviderAction(): EditUserProviderAction;
    interface RunUserFolderFlowGroupAction extends $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.RunFolderFlowGroupAction {
    }
    function RunUserFolderFlowGroupAction(): RunUserFolderFlowGroupAction;
    interface EntityActionsFolderExtention extends $D.Framework.Design.DataStructure.AbstractDefinedFolderExtention {
        TypeName: string;
    }
    function EntityActionsFolderExtention(): EntityActionsFolderExtention;
    interface FlowExecutionExtensionActionsFolderExtention extends $D.Framework.Design.DataStructure.AbstractDefinedFolderExtention {
        TypeName: string;
    }
    function FlowExecutionExtensionActionsFolderExtention(): FlowExecutionExtensionActionsFolderExtention;
    interface FolderBehaviorActionsFolderExtention extends $D.Framework.Design.DataStructure.AbstractDefinedFolderExtention {
        TypeName: string;
    }
    function FolderBehaviorActionsFolderExtention(): FolderBehaviorActionsFolderExtention;
}
declare module $D.Framework.Design.Flow {
    interface DeclaredInterface extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        EntityName: string;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function DeclaredInterface(): DeclaredInterface;
    interface FlowStepShapeSettings extends $D.Framework._DBO {
        ShapeType: $D.Framework.Design.Flow.FlowStepShapeType;
        WaypointType: $D.Framework.Design.Flow.FlowStepWaypointType;
        ShapeSettings: $D.Framework.Design.Flow.FlowStepCustomShapeSettings;
        HasImage: boolean;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ImageOpacity: number;
        ImageWidth: number;
        ImageHeight: number;
        Width: any;
        Height: any;
        OverrideFont: boolean;
        FontAttributes: $D.Framework.Design.Flow.FlowLabelAttributes;
        FontAttributesInfo: string;
        FontColorInfo: string;
    }
    function FlowStepShapeSettings(): FlowStepShapeSettings;
}
declare module $D.Framework.Design.Flow.SystemConstants {
    interface SuggestedValueList extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        SuggestedValues: string[];
        PropertyMatches: string[];
    }
    function SuggestedValueList(): SuggestedValueList;
}
declare module $D.Framework.Design.Flow.ExternalForm {
    interface ExternalFormReference extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ExternalFormReferenceId: string;
        EntityName: string;
        EntityDescription: string;
        UrlSource: $D.Framework.Design.Flow.ExternalForm.UrlSource;
        Url: string;
        Outcomes: $D.Framework.Design.Flow.ExternalForm.ExternalFormReferenceOutcome[];
        ServiceName: string;
        Data: $D.Framework.Design.Flow.ExternalForm.ExternalFormReferenceDataParameter[];
        ReturnUrlType: $D.Framework.Design.Flow.CoreSteps.ReturnUrlType;
        SetCustomCallbackParamName: boolean;
        CallbackParameterName: string;
    }
    function ExternalFormReference(): ExternalFormReference;
}
declare module $D.Framework.Design.Flow.CoreSteps {
    interface DefinedCustomFormStepDefinition extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Outcomes: $D.Framework.Design.Flow.CoreSteps.DefaultCustomFormStepOutcome[];
        ServiceName: string;
        InitialInputData: $D.Framework.Design.Flow.FlowInputDataDescription[];
        AdditionalInputDataAllowed: boolean;
        Id: string;
        FormUrl: string;
        UrlAdjustableAtRuntime: boolean;
        EntityName: string;
    }
    function DefinedCustomFormStepDefinition(): DefinedCustomFormStepDefinition;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface BaseFormInSessionInstruction extends $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction {
        FormID: string;
        FlowId: string;
        StepId: string;
        StepName: string;
        OverrideFormTitle: boolean;
        FormTitle: string;
        TitleSettings: $D.Framework.ServiceLayer.Services.ConfigurationStorage.FormTitleSettings;
        SizeTypeInSubDialog: $D.Framework.Design.Flow.Service.Execution.SizeType;
        SizeTypeInOwnWindow: $D.Framework.Design.Flow.Service.Execution.SizeType;
        OwnWindowSetSizeOnlyIfNotSpecified: boolean;
        OwnWindowSetBackgroundColorOnlyIfNotSpecified: boolean;
        OwnWindowBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        OwnWindowWidth: number;
        OwnWindowHeight: number;
        SubDialogSetSizeOnlyIfNotSpecified: boolean;
        SubDialogWidth: number;
        SubDialogHeight: number;
        StepTrackingId: string;
        DoNotAllowResize: boolean;
        MessageIfFormOrFlowIsNotCurrent: string;
        SubDialogPositionType: $D.Framework.Design.Flow.Service.Execution.FormPositionType;
        PreloadFormList: $D.Framework.Design.Flow.Service.Execution.PreloadFormInformation[];
        SubDialogUseHideTiltleBarFromHost: boolean;
        HideTitleBar: boolean;
        TimeStamp: number;
        BackgroundFormTimeStamp: number;
        FormSessionId: string;
    }
    function BaseFormInSessionInstruction(): BaseFormInSessionInstruction;
}
declare module $D.Framework.Design.Flow.CoreSteps.Tile {
    interface TileData extends $D.Framework._DBO {
        Lines: $D.Framework.Design.Flow.CoreSteps.Tile.TileLineInfo[];
        BackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BorderWidth: number;
        CornerRadius: number;
        BorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ContentVerticalAlignment: $D.Framework.Design.Flow.CoreSteps.Tile.VerticalAlignment;
        ContentHorizontalAlignment: $D.Framework.Design.Flow.CoreSteps.Tile.HorizontalAlignment;
        ActionType: $D.Framework.Design.Flow.CoreSteps.Metro.TileReturnActionType;
        EntityTypeName: string;
        EntityId: string;
        Url: string;
        FolderId: string;
        PageName: string;
        FlowId: string;
        DataBusName: string;
        DataBusValue: string;
        IconSize: $D.Framework.Data.DataTypes.UISize;
        CssClass: string;
        CssDocumentsInfo: $D.Framework.Design.Flow.CoreSteps.Tile.CssDocumentInfo[];
        AdvancedStyling: boolean;
    }
    function TileData(): TileData;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface TileCounter extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTitleAndContentTile {
        CounterFontSize: number;
        CounterFontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        CounterFontFamily: string;
        CounterHorizontalAlign: $D.Framework.Design.Flow.CoreSteps.Metro.TileHorizontalAlign;
        CounterText: string;
    }
    function TileCounter(): TileCounter;
    interface TextTileLine extends $D.Framework.Design.Flow.CoreSteps.Metro.BaseTileLine {
        Text: string;
    }
    function TextTileLine(): TextTileLine;
    interface TextWithIconLine extends $D.Framework.Design.Flow.CoreSteps.Metro.BaseTileLine {
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        IconSettings: $D.Framework.Design.Flow.CoreSteps.Metro.IconSettings;
    }
    function TextWithIconLine(): TextWithIconLine;
    interface ProgressBarTileLine extends $D.Framework.Design.Flow.CoreSteps.Metro.BaseTileLine {
        Label: string;
        Percent: number;
        ProgressBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ProgressColor: $D.Silverlight.UI.Utilities.DesignerColor;
    }
    function ProgressBarTileLine(): ProgressBarTileLine;
    interface TileLineHolder extends $D.Framework._DBO {
        Type: $D.Framework.Design.Flow.CoreSteps.Metro.TileLineType;
        Line: $D.Framework.Design.Flow.CoreSteps.Metro.BaseTileLine;
    }
    function TileLineHolder(): TileLineHolder;
    interface TileList extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTitleAndContentTile {
        List: string[];
        BulletStyle: $D.Framework.Design.Flow.CoreSteps.Metro.TileBulletStyle;
        ListFontSize: number;
        ListFontColor: $D.Silverlight.UI.Utilities.DesignerColor;
        ListFontFamily: string;
    }
    function TileList(): TileList;
}
declare module $D.Framework.Design.DataStructure {
    interface AbstractDataType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        State: string;
        DataTypeNameSpace: string;
        DataTypeName: string;
    }
    function AbstractDataType(): AbstractDataType;
    interface AbstractDefinedCase extends $D.Framework.Design.DataStructure.AbstractDefinedFolderExtention {
    }
    function AbstractDefinedCase(): AbstractDefinedCase;
    interface XmlDataStructure extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        XmlDataStructureId: string;
        XmlData: number[];
        DataStructuresFolderId: string;
        ClassesToGenerateFactories: string[];
    }
    function XmlDataStructure(): XmlDataStructure;
    interface XSDDataStructure extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        XsdDataStructureId: string;
        XsdData: $D.Framework.Data.DataTypes.FileData[];
        DataStructuresFolderId: string;
        ClassesToGenerateFactories: string[];
    }
    function XSDDataStructure(): XSDDataStructure;
    interface JsonDataStructure extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        JsonDataStructureId: string;
        JsonData: number[];
        DataStructuresFolderId: string;
        ClassesToGenerateFactories: string[];
        DefinedDataStructureIds: string[];
        DataTypeNamespace: string;
        AllowNullableValues: boolean;
    }
    function JsonDataStructure(): JsonDataStructure;
    interface DefinedDataAccessPattern extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        DataTypeName: string;
        AccessStepName: string;
        FieldNames: string[];
        DefinedDataAccessPatternId: string;
    }
    function DefinedDataAccessPattern(): DefinedDataAccessPattern;
    interface JsonSchemaDataStructure extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        JsonSchemaDataStructureId: string;
        JsonSchemaData: number[];
        DataTypeNamespace: string;
        DefinedDataStructureIDs: string[];
    }
    function JsonSchemaDataStructure(): JsonSchemaDataStructure;
}
declare module $D.Framework.ServiceLayer.Services.Comment {
    interface Comment extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CommentId: string;
        CommentName: string;
        CommentDescription: string;
        Type: $D.Framework.ServiceLayer.Services.Comment.CommentType;
        DoNotIndexContent: boolean;
        NeverExport: boolean;
    }
    function Comment(): Comment;
}
declare module $D.Framework.ServiceLayer.Services.Document {
    interface Document extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        HasThumbnail: boolean;
        IsPublic: boolean;
        DocumentID: string;
        DocumentType: string;
        DocumentName: string;
        DocumentFileName: string;
        DocumentSize: number;
        ForceDatabaseStorage: boolean;
    }
    function Document(): Document;
    interface DocumentType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        OpenInInternalViewer: boolean;
        DocumentTypeID: string;
        Extension: string;
        MIMEType: string;
    }
    function DocumentType(): DocumentType;
    interface File extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        FileId: string;
        Contents: number[];
        Name: string;
        UpdateDate: Date;
    }
    function File(): File;
}
declare module $D.Framework.Design.Flow.Service {
    interface RuleServiceStepNotification extends $D.Framework.Design.Flow.Service.RuleServiceNotification {
        RuleStepId: string;
        ChangedPropertyName: string;
        DisplayData: $D.Framework.Design.Flow.Service.RuleStepDisplayData;
        RuleStepIds: string[];
    }
    function RuleServiceStepNotification(): RuleServiceStepNotification;
}
declare module $D.Framework.Design.Flow.Service.TruthTable {
    interface TruthTableStructure extends $D.Framework._DBO {
        RuleReturns: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[];
        RuleParameters: $D.Framework.Design.Flow.Service.TruthTable.RuleParameter[];
        FirstRowData: $D.Framework.Design.Flow.Service.TruthTable.RuleRowStructure;
    }
    function TruthTableStructure(): TruthTableStructure;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface CreateStepTemplateAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateStepTemplateAction(): CreateStepTemplateAction;
}
declare module $D.Framework.Design.Properties {
    interface ContextListPropertyNode extends $D.Framework.Design.Properties.ContextPropertyNode {
        ItemLabels: string[];
        ItemIDs: string[];
    }
    function ContextListPropertyNode(): ContextListPropertyNode;
}
declare module $D.Framework.Design.Flow.Service.Debugging {
    interface UnitTest extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        DisplayName: string;
        ForElementRegistrationId: string;
        TestResult: $D.Framework.Design.Flow.Service.Debugging.UnitTestResult;
    }
    function UnitTest(): UnitTest;
}
declare module $D.Framework.Design.DesignPattern {
    interface ManageDefaultDesignPatternsAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function ManageDefaultDesignPatternsAction(): ManageDefaultDesignPatternsAction;
}
declare module $D.Framework.Design.Charts {
    interface ChartModel extends $D.Framework._DBO {
        Configuration: $D.Framework.Design.Charts.ChartConfiguration;
        CurrentData: $D.Framework.Design.Charts.ChartRenderData[];
        Personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ChartModel(): ChartModel;
    interface ChartUpdateEvent extends $D.Framework._DBO {
        ChartId: string;
        Configuration: $D.Framework.Design.Charts.ChartConfiguration;
        CurrentData: $D.Framework.Design.Charts.ChartRenderData[];
        Personalization: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ChartUpdateEvent(): ChartUpdateEvent;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ReportCustomOutput extends $D.Framework._DBO {
        FolderId: string;
        Actions: $D.Framework.Design.Report.EntityReportAction[];
        RowColors: $D.Framework.Design.Report.Service.Comunication.ReportColors;
        GroupData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        RowId: number;
        SelectionParameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ReportCustomOutput(): ReportCustomOutput;
    interface AggregationGroupInfo extends $D.Framework._DBO {
        PathInfo: string;
        AggregationDataGroup: $D.Framework.Design.Report.Service.Comunication.AggregationDataGroup[];
    }
    function AggregationGroupInfo(): AggregationGroupInfo;
    interface ReportRow extends $D.Framework._DBO {
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        PreviewText: string;
        EntityActions: $D.Framework.Design.Report.EntityReportAction[];
        RowColors: $D.Framework.Design.Report.Service.Comunication.ReportColors;
        CellColors: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        RowId: number;
        SelectionParameters: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        RowIdKey: string;
    }
    function ReportRow(): ReportRow;
    interface ReportViewConfiguration extends $D.Framework._DBO {
        CultureName: string;
        Columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
        Groups: string[];
        Sorts: string[];
        RowsPerPage: any;
        UsePaging: any;
        FilterValues: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        CanAddColumns: any;
        CanAddMultipleColumns: boolean;
        AddColumnsOption: any;
        TextFilter: string;
        UsePercentageForColumnWidth: any;
        ResetTextFilter: boolean;
        FilterMode: $D.Framework.Design.Report.FilterMode;
        LimitMatrixRowsAndColumns: any;
        MatrixMaxRows: any;
        MatrixMaxColumns: any;
        MaxReportRows: any;
        SaveGridSettings: boolean;
        SaveGridSettingsForAnyFolder: boolean;
        ComponentId: string;
        PageId: string;
        UserCharts: $D.Framework.Design.Report.ChartInfo[];
        PreviewWidth: any;
        PreviewHeight: any;
        ActionHeight: any;
        PageContextId: string;
        ClearContextBasedOnFolderVisiblity: boolean;
        ShowActionsOnRightClick: boolean;
        ColumnFlow: string;
        IsDraggable: boolean;
    }
    function ReportViewConfiguration(): ReportViewConfiguration;
    interface ReportFieldsAdded extends $D.Framework._DBO {
        ReportContextId: string;
        Columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
    }
    function ReportFieldsAdded(): ReportFieldsAdded;
    interface ReportFiltersDeleted extends $D.Framework._DBO {
        ReportContextId: string;
        ReportFilters: string[];
        Columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
        Filters: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[];
        SqlText: string;
    }
    function ReportFiltersDeleted(): ReportFiltersDeleted;
    interface ChartPropertyChanged extends $D.Framework._DBO {
        ReportContextId: string;
        NewChartInfo: $D.Framework.Design.Report.ChartInfo;
    }
    function ChartPropertyChanged(): ChartPropertyChanged;
    interface ChartAdded extends $D.Framework._DBO {
        ReportContextId: string;
        ChartInfo: $D.Framework.Design.Report.ChartInfo;
    }
    function ChartAdded(): ChartAdded;
    interface ReportColumnsChanged extends $D.Framework._DBO {
        ReportContextId: string;
        Columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
    }
    function ReportColumnsChanged(): ReportColumnsChanged;
}
declare module $D.Framework.Design.Report.Calendar {
    interface CalendarItem extends $D.Framework._DBO {
        EntityId: string;
        EntityType: string;
        EntityName: string;
        EntityActions: $D.Framework.Design.Report.EntityReportAction[];
        Colors: $D.Framework.Design.Report.Service.Comunication.ReportColors;
        StartDate: Date;
        EndDate: Date;
    }
    function CalendarItem(): CalendarItem;
}
declare module $D.Framework.Design.Form {
    interface CreateComponentTemplateAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateComponentTemplateAction(): CreateComponentTemplateAction;
}
declare module $D.Framework.Design.Form.ComponentData.CompositeControls {
    interface RuntimeChildrenProviderChildInfo extends $D.Framework._DBO {
        Id: string;
        ClientData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        RootContainerJson: string;
        FormFont: $D.Silverlight.UI.Utilities.LabelAttributes;
        FormValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.FormValidationSetting;
    }
    function RuntimeChildrenProviderChildInfo(): RuntimeChildrenProviderChildInfo;
}
declare module $D.Framework.Design.Form.JavaScriptControls {
    interface CreateJSControlAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateJSControlAction(): CreateJSControlAction;
    interface DownloadJSControlAction extends $D.Framework.ServiceLayer.Actions.Common.DownloadFileAction {
    }
    function DownloadJSControlAction(): DownloadJSControlAction;
    interface UpdateJSControlAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function UpdateJSControlAction(): UpdateJSControlAction;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface NamedSession extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        ForAccountId: string;
        SessionName: string;
    }
    function NamedSession(): NamedSession;
    interface ImportSessionEntity extends $D.Framework._DBO {
        Issues: $D.Framework.ServiceLayer.Utilities.ImportValidationIssue[];
        HasIssues: boolean;
        HasNotResolvedIssues: boolean;
        Name: string;
        ShortTypeName: string;
        Insrtuction: string;
        IsSkipped: boolean;
        DescriptionInfo: $D.Framework.ServiceLayer.Utilities.ExportDescriptionInfo;
        IssuesDescription: string;
        ImportEntityId: string;
    }
    function ImportSessionEntity(): ImportSessionEntity;
}
declare module $D.Framework.ServiceLayer.Containers {
    interface AddFlowMessageObjectAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddFlowMessageObjectAction(): AddFlowMessageObjectAction;
}
declare module $D.Framework.ServiceLayer.Agent {
    interface AgentInstructions extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        MustBeCompletedBy: any;
        Priority: number;
        ClientIdSentResult: string;
        AgentInstructionHanlderType: string;
        AgentResultsHandlerType: string;
        OnlyForAgentId: string;
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        ResultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function AgentInstructions(): AgentInstructions;
    interface ClientIdentity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        LastRequest: $D.Framework.ServiceLayer.Agent.AgentInstructionsRequest;
        Id: string;
        IPAddress: string;
        UUID: string;
        MACAddress: string;
        PublicKeyString: string;
        LastIdentified: any;
    }
    function ClientIdentity(): ClientIdentity;
}
declare module $D.Framework.ServiceLayer.Services.Translation {
    interface FillMissingTranslationsAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function FillMissingTranslationsAction(): FillMissingTranslationsAction;
    interface LanguageTranslation extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        LanguageTranslationId: string;
        ForString: string;
        TranslatedString: string;
        IsHelpMessage: boolean;
        EntityShortName: string;
        IgnoreCase: boolean;
        DoNotIndexContent: boolean;
        NeverExport: boolean;
    }
    function LanguageTranslation(): LanguageTranslation;
    interface TranslationEntity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        StringToTranslate: string;
        IsHelpText: boolean;
        EntityShortName: string;
        IgnoreCase: boolean;
        DefaultTranslation: string;
        DoNotTranslate: boolean;
        DoNotIndexContent: boolean;
        NeverExport: boolean;
    }
    function TranslationEntity(): TranslationEntity;
}
declare module $D.Framework.ServiceLayer.Services.Theme {
    interface ThemeEntity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ThemeDataID: string;
        ThemeName: string;
        ThemeData: $D.Framework.ServiceLayer.Services.Theme.ThemeData;
    }
    function ThemeEntity(): ThemeEntity;
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    interface TagList extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ID: string;
        EntityName: string;
        EntityDescription: string;
        Category: string;
    }
    function TagList(): TagList;
    interface TagTypeRestrictions extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        TagRestrictionId: string;
        TypeName: string;
        FullTypeName: string;
    }
    function TagTypeRestrictions(): TagTypeRestrictions;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    interface ServiceMethodInfo extends $D.Framework._DBO {
        ServiceName: string;
        ServiceFullName: string;
        MethodName: string;
        MethodParameters: $D.Framework.ServiceLayer.Services.ServiceManagement.MethodParameter[];
        ReturnType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.TypeDescription;
    }
    function ServiceMethodInfo(): ServiceMethodInfo;
    interface ServiceRegistration extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ServiceName: string;
        ServiceInterfaceName: string;
        ServiceImplementationName: string;
        ModuleName: string;
        StartPolicy: $D.Framework.ServiceLayer.Utilities.StartPolicy;
        EntityId: string;
    }
    function ServiceRegistration(): ServiceRegistration;
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    interface AbstractServiceCatalogItem extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ServiceCatalogId: string;
        ServiceCost: number;
        IsCostAproximate: boolean;
        ChargeModel: $D.Framework.ServiceLayer.Services.ServiceCatalog.ChargeModel;
        ExpectedDaysToComplete: number;
    }
    function AbstractServiceCatalogItem(): AbstractServiceCatalogItem;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface HostingAccountReference extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        AccountId: string;
    }
    function HostingAccountReference(): HostingAccountReference;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Servers {
    interface HostingHostDefinition extends $D.Framework.ServiceLayer.AbstractFolderEntity {
    }
    function HostingHostDefinition(): HostingHostDefinition;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.Instances {
    interface HostingDatabase extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        DatabaseId: string;
        DatabaseConfigurationName: string;
        DatabaseConnectionString: string;
        EntityDescription: string;
        EntityName: string;
    }
    function HostingDatabase(): HostingDatabase;
    interface HostingConfiguration extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        HostingConfigurationId: string;
        DatabaseConnection: string;
        DatabaseConnectionString: string;
        DatabaseConnectionId: string;
        Parameters: $D.Framework.ServiceLayer.Services.ServerManagement.Instances.HostingEnvironmentParameter[];
        EncryptionKey: number[];
        BaseURLToPortal: string;
    }
    function HostingConfiguration(): HostingConfiguration;
}
declare module $D.Framework.ServiceLayer.Services.ScheduledJob {
    interface JobSchedule extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        JobScheduleID: string;
        LastRunDate: any;
        LastRunDuration: any;
        LastRunEndDate: any;
        LastRunOnServer: string;
        ScheduledItemData: number[];
        ScheduleBaseDate: Date;
        Active: boolean;
        ActionOnInactive: $D.Framework.ServiceLayer.Services.ScheduledJob.NoAdditionalScheduleAction;
        RequeueFailedActions: boolean;
        RunOnScheduleAfterFailure: boolean;
        RequeueFailedAttemptCount: number;
        CurrentFailedCount: number;
        CreateTaskOnJobFailure: boolean;
        AssignFailureToUser: string;
        RequeueDelayInMins: number;
        RunWhen: any;
        UseEndBoundary: boolean;
        EndBoundary: any;
        RunJobOnStartup: boolean;
        OverrideJobQueueName: string;
    }
    function JobSchedule(): JobSchedule;
}
declare module $D.Framework.ServiceLayer.Services.Events {
    interface EventSchedule extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EventScheduleId: string;
        ScheduledItemData: number[];
        ScheduleBaseDate: Date;
        Active: boolean;
        ActionOnInactive: $D.Framework.ServiceLayer.Services.ScheduledJob.NoAdditionalScheduleAction;
        RequeueFailedActions: boolean;
        CreateTaskOnEventFailure: boolean;
        RequeueDelayInMins: number;
        RunWhen: any;
        UseEndBoundary: boolean;
        EndBoundary: any;
        IsEnabled: boolean;
        FlowId: string;
    }
    function EventSchedule(): EventSchedule;
}
declare module $D.Framework.ServiceLayer.Services.Replay {
    interface ReplayStep extends $D.Framework.ServiceLayer.AbstractFolderEntity {
    }
    function ReplayStep(): ReplayStep;
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    interface Relation extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        RelationId: string;
        RelationType: $D.Framework.ServiceLayer.Services.Relations.RelationType;
        ToAccountId: string;
        ToGroupId: string;
        RelationInfoId: string;
    }
    function Relation(): Relation;
    interface RelationInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityName: string;
        EntityDescription: string;
        RelationInfoId: string;
    }
    function RelationInfo(): RelationInfo;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface CountryInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CountryID: string;
        EntityName: string;
        CountryCode: string;
        EntityDescription: string;
    }
    function CountryInfo(): CountryInfo;
    interface ContactInfoEntity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ContactInfoEntityId: string;
        OwnerId: string;
    }
    function ContactInfoEntity(): ContactInfoEntity;
    interface ContactOrderPreference extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ContactOrderPreferenceID: string;
        EntityName: string;
        PreferenceOrder: number;
        EntityDescription: string;
    }
    function ContactOrderPreference(): ContactOrderPreference;
    interface ContactPriority extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ID: string;
        EntityName: string;
        EntityDescription: string;
        PriorityOrder: number;
        Color: string;
    }
    function ContactPriority(): ContactPriority;
    interface OtherContactType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        OtherContactTypeId: string;
        RequiresPassword: boolean;
    }
    function OtherContactType(): OtherContactType;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface Notification extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        DoNotNotify: string[];
        NotificationID: string;
        NotificationTypeID: string;
        Enabled: boolean;
        NotifyToList: $D.Framework.ServiceLayer.Services.Notifications.NotifyTo[];
        EntityName: string;
        EntityDescription: string;
        NotificationTypeName: string;
        NotificationModes: string[];
        FlowId: string;
    }
    function Notification(): Notification;
    interface NotificationType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        NotificationTypeID: string;
        Enabled: boolean;
        ProcessNotification: boolean;
        ProcessingFlowID: string;
        SendViaFlowNotification: boolean;
        SendingFlowID: string;
    }
    function NotificationType(): NotificationType;
    interface SMSCarrier extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CarrierId: string;
    }
    function SMSCarrier(): SMSCarrier;
}
declare module $D.Framework.ServiceLayer.Services.Location {
    interface Holiday extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        HolidayId: string;
        EntityName: string;
        EntityDescription: string;
        HolidayDate: Date;
    }
    function Holiday(): Holiday;
}
declare module $D.Framework.ServiceLayer.Services.KnowledgeBase {
    interface KnowledgeBaseItem extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Hidden: boolean;
        KnowledgeBaseItemID: string;
    }
    function KnowledgeBaseItem(): KnowledgeBaseItem;
}
declare module $D.Framework.ServiceLayer.Services.FileReference {
    interface FileReferenceEntity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        IsExternal: boolean;
        ExternalURL: string;
        DocumentTypeID: string;
        FileReferenceId: string;
        ReferenceId: string;
        Size: number;
        FileDateTime: Date;
        FileReference: $D.Framework.ServiceLayer.Services.FileReference.FileReference;
    }
    function FileReferenceEntity(): FileReferenceEntity;
}
declare module $D.Framework.ServiceLayer.Services.EntityID {
    interface EntityIDData extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        PrefixId: string;
        CurrentID: number;
    }
    function EntityIDData(): EntityIDData;
}
declare module $D.Framework.ServiceLayer.Services.EntityDetails {
    interface OpenEntityDetailsAction extends $D.Framework.ServiceLayer.Actions.Common.OpenUrlAction {
    }
    function OpenEntityDetailsAction(): OpenEntityDetailsAction;
}
declare module $D.Framework.ServiceLayer.Services.DeploymentImage {
    interface DeploymentImage extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        FileName: string;
        IsBuilding: boolean;
    }
    function DeploymentImage(): DeploymentImage;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface AbstractDatabaseDefinition extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        OutputTypeName: string;
        DefinitionId: string;
        OverrideActionContext: boolean;
        OverrideActionContextType: string;
        OverrideActionContextID: string;
    }
    function AbstractDatabaseDefinition(): AbstractDatabaseDefinition;
    interface DatabaseTableAccess extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityName: string;
        EntityDescription: string;
        FieldNames: string[];
    }
    function DatabaseTableAccess(): DatabaseTableAccess;
}
declare module $D.Framework.ServiceLayer.Services.Chat {
    interface ChatCannedMessagesData extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CannedMessageId: string;
        EntityName: string;
    }
    function ChatCannedMessagesData(): ChatCannedMessagesData;
}
declare module $D.Framework.ServiceLayer.Services.Association {
    interface AddFolderEntityAssociation extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function AddFolderEntityAssociation(): AddFolderEntityAssociation;
    interface AssociationType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityName: string;
        EntityDescription: string;
        AssociationTypeID: string;
        RoleName: string;
        RelatedToRole: string;
        RelatedAssociationType: $D.Framework.ServiceLayer.Services.Association.AssociationType;
        FromTypeName: string;
        LookFromTypeSubclasses: boolean;
        FromExtensionTypeName: string;
        LookFromExtensionSubclasses: boolean;
        ToTypeName: string;
        LookForTypeSubclasses: boolean;
        ToExtensionTypeName: string;
        LookForExtensionSubclasses: boolean;
    }
    function AssociationType(): AssociationType;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface Assignment extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        AssignmentId: string;
        ReferenceId: string;
        ValidOnlyInFolderState: string;
        Completed: boolean;
        IsAssigned: boolean;
        BringUpOnLogin: boolean;
        UrlTokens: string;
        NextCheckTime: any;
        NextCheckType: $D.Framework.ServiceLayer.Services.Assignments.AssignmentHandlerEscalationType;
        NextCheckId: string;
        StateChangedDate: any;
        WarnDate: any;
        LateDate: any;
        EscalateDate: any;
        ExpirationDate: any;
        StartDate: any;
        AssignmentInteractionStarted: any;
        AssignmentStarted: any;
        Priority: string;
        Notes: string;
        HandlerData: number[];
        FlowTrackingId: string;
        StepTrackingId: string;
        PrimaryFlowId: string;
        PrimaryFlowName: string;
        FlowId: string;
        FlowName: string;
        StepId: string;
        StepName: string;
        CompletedDateTime: any;
        AssignmentTimeInSeconds: number;
        AssignmentInteractionTimeInSeconds: number;
        CompletedResult: string;
        CompletedBy: string;
        CompletedNotes: string;
        AssignmentType: string;
        JobScheduleId: string;
        HasStateChanged: any;
        StateChangedBy: string;
        AllAssignments: string;
        AssignmentStartFlowId: string;
        AssignmentWarnFlowId: string;
        AssignmentLateFlowId: string;
        AssignmentEscalteFlowId: string;
        AssignedUsers: string[];
        AssignedGroups: string[];
        NotificationSubject: string;
        NotificationMessage: string;
        DoNotSendDefaultNotification: boolean;
        State: string;
        FolderState: string;
    }
    function Assignment(): Assignment;
    interface AssignmentPriority extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        PriorityID: string;
        PriorityOrder: number;
    }
    function AssignmentPriority(): AssignmentPriority;
    interface AssignmentRoleType extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        AssignmentRoleTypeId: string;
    }
    function AssignmentRoleType(): AssignmentRoleType;
}
declare module $D.Framework.ServiceLayer.Services.Approvals {
    interface ApprovalChainEntity extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        HideName: boolean;
        HideDataDesctiptions: boolean;
        ApprovalChainEntityID: string;
        EntityDescription: string;
        EntityName: string;
        Levels: $D.Framework.ServiceLayer.Services.Approvals.ApprovalData[];
        AllowRules: boolean;
        AllowExpiration: boolean;
        IsHiddenLevel: boolean;
        DataDescriptions: $D.Framework.Design.Flow.FlowInputDataDescription[];
    }
    function ApprovalChainEntity(): ApprovalChainEntity;
}
declare module $D.Framework.ServiceLayer.Services.Aliases {
    interface EntityAlias extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        EntityAliasId: string;
        Alias: string;
        EntityId: string;
    }
    function EntityAlias(): EntityAlias;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference {
    interface CreateExternalWebServiceReferenceAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateExternalWebServiceReferenceAction(): CreateExternalWebServiceReferenceAction;
    interface EditExternalWebServiceReferenceAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function EditExternalWebServiceReferenceAction(): EditExternalWebServiceReferenceAction;
    interface CreateExternalODataServiceReferenceAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateExternalODataServiceReferenceAction(): CreateExternalODataServiceReferenceAction;
    interface EditExternalODataServiceReferenceAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function EditExternalODataServiceReferenceAction(): EditExternalODataServiceReferenceAction;
    interface CreateOpenApiServiceReferenceAction extends $D.Framework.ServiceLayer.Actions.Common.EditObjectAction {
    }
    function CreateOpenApiServiceReferenceAction(): CreateOpenApiServiceReferenceAction;
    interface ExternalWebServiceReference extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        DefaultCredentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials;
        Id: string;
    }
    function ExternalWebServiceReference(): ExternalWebServiceReference;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService {
    interface RESTMethod extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        RestMethodId: string;
        Name: string;
        EntityDescription: string;
        UrlSegment: string;
        VarsFromUrl: string;
        TokenEncodingType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.TokenEncodingType;
        Method: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestInputMethod2;
        CustomMethod: string;
        ContentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType2;
        CustomContentType: string;
        SerializeToQueryString: boolean;
        QueryStringSerializeType: string;
        RequestBodyFormat: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestRequestBodyFormat;
        RequestBodyDataTypeName: string;
        RequestBody: string;
        VarsFromBody: string;
        OverrideSerializationFormat: boolean;
        SerializationFormat: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestSerializationFormat;
        InputIsArray: boolean;
        OutputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestOutputType2;
        ResultDataTypeName: string;
        ResultDeserializationFormat: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestDeserializationFormat;
        ResultIsArray: boolean;
        OutputFilename: string;
        ShowAdvanced: boolean;
        OverrideBaseUrl: boolean;
        BaseUrlSource: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestMethodBaseUrlOverride;
        StaticBaseUrl: string;
        Accept: string;
        AdditionalHeaders: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestHttpHeader[];
        Expect100Continue: boolean;
        OverrideAuthentication: boolean;
        AuthType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestServiceAuthType;
        IgnoreCertificateErrors: boolean;
        SslMutualAuthentication: boolean;
        PfxCertificate: $D.Framework.Data.DataTypes.FileData;
        MutualAuthPfxPassword: string;
        PreAuthenticateRequest: boolean;
        UseStaticBasicCreds: boolean;
        Username: string;
        Password: string;
        UseCustomTagInAuthorizationHeader: boolean;
        CustomTagForAuthorizationHeader: string;
        UseStaticTokenId: boolean;
        TokenId: string;
        UseSignedOAuth1: boolean;
        ConsumerKey: string;
        InitialTokenData: string;
        PfxFilename: string;
        PfxPassword: string;
    }
    function RESTMethod(): RESTMethod;
    interface RESTServiceReference extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        RestServiceId: string;
        RestServiceUrl: string;
        TokenEncodingType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.TokenEncodingType;
        OutputRawResult: boolean;
        OutputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestOutputType;
        InputMethod: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestInputMethod;
        ContentType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType;
        PropertyClassification: string[];
        OutputValues: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestValueOutput[];
        FileName: string;
        PostData: string;
        ShowAdvanced: boolean;
        CustomInputMethodText: string;
        CustomContentTypeText: string;
        RestHeaders: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestHeaders[];
        AcceptValue: string;
        IgnoreCertificateErrors: boolean;
        UseBasicAuthentication: boolean;
        UseWindowsAuthentication: boolean;
        PreAuthenticateRequest: boolean;
        UseOAuth: boolean;
        UseCustomTagInAuthorizationHeader: boolean;
        CustomTagForAuthorizationHeader: string;
        UseDirectSignedOauth1: boolean;
        ConsumerKey: string;
        InitialTokenData: string;
        PfxFilename: string;
        PfxPassword: string;
    }
    function RESTServiceReference(): RESTServiceReference;
}
declare module $D.Framework.ServiceLayer.Services.ExternalServiceReference.OpenAPI {
    interface OpenAPIMethodInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        OpenAPIMethodId: string;
        OpenAPIIntegrationId: string;
        StepName: string;
        OriginalMethod: string;
        Category: string;
        ReturnType: string;
        NewReturnType: string;
        ReturnIsArray: boolean;
        ReturnIsNullable: boolean;
        OriginalReturnType: string;
        OriginalNamespace: string;
        NewNamespace: string;
        GetNameFromFactoryMethodName: string;
        OverrideUrlPropertyName: string;
        HasUserId: boolean;
        Inputs: $D.Framework.ServiceLayer.Services.ConfigurationStorage.DataDeclaration[];
        InputDataForMethod: $D.Framework.Design.Flow.Mapping.DataDescription[];
        OutputDataForMethod: $D.Framework.Design.Flow.Mapping.DataDescription[];
    }
    function OpenAPIMethodInfo(): OpenAPIMethodInfo;
}
declare module $D.Framework.ServiceLayer.Services.Statistics {
    interface MetricDefinition extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        EntityName: string;
        EntityDescription: string;
        CategoryName: string;
        SubCategoryName: string;
        MetricName: string;
        ShowLinkToImplementationModels: boolean;
        OnlyComputedMetric: boolean;
    }
    function MetricDefinition(): MetricDefinition;
}
declare module $D.Framework.ServiceLayer.Services.Folder.FolderUserActions {
    interface FolderUserAction extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        Id: string;
        ActionName: string;
        DisplayType: $D.Framework.ServiceLayer.Actions.ActionDisplayType;
        Order: number;
        FlowId: string;
        FolderId: string;
        PageName: string;
        ActionType: $D.Framework.ServiceLayer.Services.Folder.FolderUserActions.UserActionType;
    }
    function FolderUserAction(): FolderUserAction;
}
declare module $D.DesignerRepository {
    interface RepositoryCheckin extends $D.DesignerRepository.AbstractRepositoryActivity {
        RevisionId: string;
        IsTag: boolean;
        Notes: string;
    }
    function RepositoryCheckin(): RepositoryCheckin;
    interface RepositoryCheckoutHistory extends $D.DesignerRepository.AbstractRepositoryActivity {
        CheckoutRevisionId: string;
        ErrorMessage: string;
    }
    function RepositoryCheckoutHistory(): RepositoryCheckoutHistory;
}
declare module $D.Framework.Design {
    interface AddDefinedDataStructureAction extends $D.Framework.ServiceLayer.Actions.Common.AddEntityAction {
    }
    function AddDefinedDataStructureAction(): AddDefinedDataStructureAction;
    interface AddEnumDataTypeAction extends $D.Framework.ServiceLayer.Actions.Common.AddEntityAction {
    }
    function AddEnumDataTypeAction(): AddEnumDataTypeAction;
    interface RegiserNetTypeAction extends $D.Framework.ServiceLayer.Actions.Common.AddEntityAction {
    }
    function RegiserNetTypeAction(): RegiserNetTypeAction;
    interface DesignerSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        ListRuleConstantValuesOver: number;
        ExportHistoryFolder: boolean;
        ExportComments: boolean;
        ExportDocuments: boolean;
        ExportBackups: boolean;
        ExportAssigments: boolean;
        ExportUnitTests: boolean;
        HideModificationCommentsInHistory: boolean;
        MaxLookupListSize: number;
        TemplateFolder: string;
        ApproveImport: boolean;
        ImportAssignmentGroup: string;
        DefaultTaskCreateFlow: string;
        DefaultFlowTemplate: string;
        DefaultAgentFlowTemplate: string;
        DefaultRuleTemplate: string;
        DefaultTruthTableTemplate: string;
        DefaultRuleTableTemplate: string;
        DefaultFormTemplate: string;
        DefaultFormBackgroundTemplate: string;
        DefaultDataRepeaterTemplate: string;
        DefaultUserControlTemplate: string;
        DefaultEndFormTemplate: string;
        DefaultPageTemplate: string;
        DefaultReportTemplate: string;
        DefaultTextMergeTemplate: string;
        DefaultCellsMergeTemplate: string;
        AutoAddEntitiesToParentFolderModule: boolean;
        ShowWarningIfItemIsRelatedToMoreThanXOtherRulesandFlows: number;
        MinimizeLogsPanel: boolean;
        MinimizeExplorerPanel: boolean;
        DefaultDesignFolder: string;
        DoNotFilterAdmin: boolean;
        AutoSaveBackups: boolean;
        AutoSaveBackupsInterval: string;
        MaximumPreviewSize: number;
        ShowParentFolderInPickers: boolean;
        ShowRootFolderInPickers: boolean;
        ShowCurrentFolderInPickers: boolean;
        ExpandCurrentFolderInPickers: boolean;
        RuleCategoryDisplayType: $D.Framework.Design.RuleTreeCategoryDisplayType;
        ShowTypesInRuleTree: boolean;
        ShowTypesInFlowTree: boolean;
        ClearFlowDataOnException: boolean;
        AutoShowQuickAdd: boolean;
        ShowQuickAddOnNewFlows: boolean;
        ShowFlowQuickAddMaxStepsCount: number;
        FlowDesignerLinkType: $D.Framework.Design.FlowDesignerLinkType;
        DefaultStepShape: $D.Framework.Design.DefaultStepShape;
        FlowDesignerLinkJumpLines: boolean;
        FlowDesignerLinkAvoidNodes: boolean;
        RememberToRecent: boolean;
        AutoShowRightClickMenu: boolean;
        ShowDefaultFolderViewPage: boolean;
        DefaultPageType: $D.Framework.Design.DesignerProjectDefaultPageType;
        UsePagingInDesignerFolderView: boolean;
        AutoSizePagesInDesignerFolderView: boolean;
        DesignerFolderViewPageSize: number;
        RequireCommentOnSave: boolean;
        ProductNameToShowInDesigners: string;
        RequirePermissionsForUnrestrictedReporting: boolean;
        GroupsWithUnrestrictedReportingPermissions: string[];
        InMemoryDataPaging: boolean;
        GroupsWithUnrestricedPermissions: string[];
        RestrictInlinePageEditing: boolean;
        InlinePageEditingRestrictedGroups: string[];
        GroupsCanCreateConnection: string[];
        GroupsCanCreateConnectionProperty: string[];
        GroupsCanSeeConnectionString: string[];
        GroupsCanSeeConnectionStringProperty: string[];
        DisplayType: $D.Framework.Design.ValidationDisplayType;
        OutlineType: $D.Framework.Design.ValidationOutlineType;
        BreakBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        BreakBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        WarningBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        WarningBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DisplayNoIssueValidation: boolean;
        NoIssueBackgroundColor: $D.Silverlight.UI.Utilities.DesignerColor;
        NoIssueBorderColor: $D.Silverlight.UI.Utilities.DesignerColor;
        IsValidMessage: string;
        OnlyShowValidMessageWhenFilledIn: boolean;
        BreakImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        WarningImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ValidImage: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ValidationBreakSymbol: string;
        ShowCaseIndicatorsInRuleText: boolean;
        UserDefinedTypeAddMenuCategory: string;
        StudioSlogan: string;
        StudioWebPageTitle: string;
        StudioLogo: number[];
        SystemFolder: $D.Framework.Design.StudioVisibilityPolicy;
        ExportActions: $D.Framework.Design.StudioVisibilityPolicy;
        PermissionActions: $D.Framework.Design.StudioVisibilityPolicy;
        AuditActions: $D.Framework.Design.StudioVisibilityPolicy;
        GetIDActions: $D.Framework.Design.StudioVisibilityPolicy;
        IntegrationActions: $D.Framework.Design.StudioVisibilityPolicy;
        AssignmentRolesActions: $D.Framework.Design.StudioVisibilityPolicy;
        ProjectDocTemplateFile: number[];
        HideMyAppsFolder: boolean;
        SubmitHelpRequestAutomatically: boolean;
        CanAddColumns: boolean;
        ShowGroupTitle: any;
        ReportGridType: any;
        GridIconType: any;
        IsAlternateRowsBackground: boolean;
        SelectedRowsStyle: any;
        RowLeftClickActionType: any;
        RowRightClickActionType: any;
        RightIndicatorDisplay: any;
        NewGridActionType: any;
        ActionButtonName: string;
        IsRowNumerationEnable: boolean;
        IsGroupingEnable: boolean;
        IsSortingEnable: boolean;
        IsGridStretchModeEnable: boolean;
        ShowSelectedRowIndicator: boolean;
        ReportRowNumbering: any;
        RuntimeFiltersDisplayMode: any;
        ShowReportHeaderConfigurationButton: boolean;
    }
    function DesignerSettings(): DesignerSettings;
}
declare module $D.Framework.ServiceLayer.Services.RootNodes {
    interface RootNodeFolder extends $D.Framework.ServiceLayer.Services.RootNodes.AbstractRootNode {
        FolderID: string;
    }
    function RootNodeFolder(): RootNodeFolder;
    interface SpecialRootNodeFolder extends $D.Framework.ServiceLayer.Services.RootNodes.AbstractRootNode {
        SpecialFolderID: string;
    }
    function SpecialRootNodeFolder(): SpecialRootNodeFolder;
}
declare module $D.Framework.ServiceLayer.Services.Administration {
    interface PortalAdministratorModuleRight extends $D.Framework.ServiceLayer.AbstractModuleRights {
        CanAddUsers: boolean;
        CanAddGroups: boolean;
        CanDeleteUsers: boolean;
        CanDeleteGroups: boolean;
        CanAssignModuleRights: boolean;
        CanImpersonateAnyUser: boolean;
        CanAskForSessions: boolean;
        CanSetPasswords: boolean;
        CanManageDefaultPages: boolean;
        CanSeeBrowseView: boolean;
        CanManageInstances: boolean;
    }
    function PortalAdministratorModuleRight(): PortalAdministratorModuleRight;
    interface CanSeeAuditHistory extends $D.Framework.ServiceLayer.AbstractModuleRights {
    }
    function CanSeeAuditHistory(): CanSeeAuditHistory;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface CellTemplate extends $D.Framework._DBO {
        Items: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellDataTemplate[];
        Row: number;
        Column: number;
        SpanDirection: $D.Framework.Design.Report.Matrix.IntersectionTemplate.SpanDirection;
        RowSpanBehavior: $D.Framework.Design.Report.Matrix.IntersectionTemplate.SpanBehavior;
        ColumnSpanBehavior: $D.Framework.Design.Report.Matrix.IntersectionTemplate.SpanBehavior;
        RowSpan: number;
        ColumnSpan: number;
        NullValueBehavior: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellBehavior;
        Orientation: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellOrientation;
        Style: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
    }
    function CellTemplate(): CellTemplate;
    interface CellSpacerTemplate extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellDataTemplate {
    }
    function CellSpacerTemplate(): CellSpacerTemplate;
    interface CellTextTemplate extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellDataTemplate {
        Text: string;
    }
    function CellTextTemplate(): CellTextTemplate;
    interface CellFieldDataTemplate extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellDataTemplate {
        FieldName: string;
    }
    function CellFieldDataTemplate(): CellFieldDataTemplate;
}
declare module $D.Framework.Design.Report {
    interface CountersChartInfo extends $D.Framework.Design.Report.CounterInfo {
        HistoricalValueMode: $D.Framework.Design.Report.HistoricalValueMode;
        UseHistoricalValue: boolean;
        HistoricalValue: number;
    }
    function CountersChartInfo(): CountersChartInfo;
    interface CounterChartInfo extends $D.Framework.Design.Report.CounterInfo {
        HistoricalValueMode: $D.Framework.Design.Report.HistoricalValueMode;
        HistoricalValue: number;
        HistoricalValueSource: string;
    }
    function CounterChartInfo(): CounterChartInfo;
}
declare module $D.Framework.Design.EntityActions {
    interface UserRunFlowWithDataAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowWithDataAction {
    }
    function UserRunFlowWithDataAction(): UserRunFlowWithDataAction;
    interface RunUserFlowWithDataAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowWithDataAction {
    }
    function RunUserFlowWithDataAction(): RunUserFlowWithDataAction;
    interface AddUserEntityAction extends $D.Framework.ServiceLayer.Actions.Common.AddEntityAction {
    }
    function AddUserEntityAction(): AddUserEntityAction;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface SimpleCreateFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateElementAction {
    }
    function SimpleCreateFlowAction(): SimpleCreateFlowAction;
    interface SimpleCreateRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateElementAction {
    }
    function SimpleCreateRuleAction(): SimpleCreateRuleAction;
    interface SimpleCreateTextMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateElementAction {
    }
    function SimpleCreateTextMergeAction(): SimpleCreateTextMergeAction;
    interface ExternalFormStepInfo extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.StepInfo {
        ReturnUrlType: $D.Framework.Design.Flow.CoreSteps.ReturnUrlType;
        GenerateServiceForStep: boolean;
        ServiceName: string;
        StepType: string;
        IsAbstractFormScriptStep: boolean;
    }
    function ExternalFormStepInfo(): ExternalFormStepInfo;
    interface CreateFormBackgroundAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
    }
    function CreateFormBackgroundAction(): CreateFormBackgroundAction;
    interface CreateEndFormAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
    }
    function CreateEndFormAction(): CreateEndFormAction;
    interface CreateUserControl extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
    }
    function CreateUserControl(): CreateUserControl;
    interface CreateDataRepeaterControl extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
    }
    function CreateDataRepeaterControl(): CreateDataRepeaterControl;
    interface CreateFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
        FlowBehaviourType: string;
    }
    function CreateFlowAction(): CreateFlowAction;
    interface CreateAgentFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateElementAction {
    }
    function CreateAgentFlowAction(): CreateAgentFlowAction;
    interface CreateMatrixRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
    }
    function CreateMatrixRuleAction(): CreateMatrixRuleAction;
    interface CreateTreeRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateElementAction {
    }
    function CreateTreeRuleAction(): CreateTreeRuleAction;
    interface CreateRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
        RuleBehaviourType: string;
        SampleId: string;
    }
    function CreateRuleAction(): CreateRuleAction;
    interface CreateTableAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
        IsRuleTable: boolean;
    }
    function CreateTableAction(): CreateTableAction;
    interface CreateTextMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
        TextMergeBehaviourType: string;
    }
    function CreateTextMergeAction(): CreateTextMergeAction;
    interface CreateCellsMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementWithBehaviorAction {
        CellsMergeBehaviourType: string;
    }
    function CreateCellsMergeAction(): CreateCellsMergeAction;
    interface EditFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationWithSampleElementAction {
    }
    function EditFlowAction(): EditFlowAction;
    interface ProfileFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowAction {
    }
    function ProfileFlowAction(): ProfileFlowAction;
    interface RunFlowWithFileAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowWithDataAction {
    }
    function RunFlowWithFileAction(): RunFlowWithFileAction;
    interface RunFlowFromInputAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowAction {
    }
    function RunFlowFromInputAction(): RunFlowFromInputAction;
    interface RunFlowWithFolderIdAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RunFlowAction {
    }
    function RunFlowWithFolderIdAction(): RunFlowWithFolderIdAction;
    interface EditTruthTableAsRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationWithSampleElementAction {
    }
    function EditTruthTableAsRuleAction(): EditTruthTableAsRuleAction;
    interface BaseEditRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationWithSampleElementAction {
    }
    function BaseEditRuleAction(): BaseEditRuleAction;
    interface EditMatrixRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.RegistrationWithSampleElementAction {
    }
    function EditMatrixRuleAction(): EditMatrixRuleAction;
    interface ViewServiceCallAPIAction extends $D.Framework.ServiceLayer.Actions.Common.OpenPortalUrlAction {
        ComponentRegistrationId: string;
        InstanceName: string;
        ElementType: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
    }
    function ViewServiceCallAPIAction(): ViewServiceCallAPIAction;
}
declare module $D.Framework.Design.Flow {
    interface StepDisplayData extends $D.Framework._DBO {
        StepID: string;
        StepName: string;
        StepType: string;
        StepDescription: string;
        X: number;
        Y: number;
        Width: number;
        Height: number;
        Angle: number;
        OutputPaths: string[];
        LoosePathsVisibble: boolean;
        IsAsync: boolean;
        ShapeType: string;
        CustomColor: $D.Silverlight.UI.Utilities.DesignerColor;
        DefaultEditorClass: string;
        DefaultHtmlEditorClass: string;
        AdditionalData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        DisableIncomingLinks: boolean;
        IsAnnotation: boolean;
        ZOrder: number;
        HasDynamicPaths: boolean;
        HidePropertyGrid: boolean;
        DefaultConfigurationFlowWidth: any;
        ConfigurationFlowId: string;
        DeleteConfirmation: string;
        GroupId: string;
        SwimlaneId: string;
        HasSimulatedBehavior: boolean;
        ShapeSettings: $D.Framework.Design.Flow.FlowStepShapeSettings;
    }
    function StepDisplayData(): StepDisplayData;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface NextFormInSessionInstruction extends $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction {
        StartupEvents: $D.Framework.Design.Form.EventsReturn;
        UseCompositeControls: boolean;
    }
    function NextFormInSessionInstruction(): NextFormInSessionInstruction;
    interface SuggestNextFormInSessionInstruction extends $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction {
        FormName: string;
        FormForAssignmentId: string;
    }
    function SuggestNextFormInSessionInstruction(): SuggestNextFormInSessionInstruction;
    interface EndFormInstruction extends $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction {
        StartupEvents: $D.Framework.Design.Form.EventsReturn;
        UseCompositeControls: boolean;
    }
    function EndFormInstruction(): EndFormInstruction;
}
declare module $D.Framework.Design.Form {
    interface RunFlowWithFormInstruction extends $D.Framework.Design.Flow.Service.Execution.BaseFormInSessionInstruction {
        MobileId: string;
        TabletId: string;
        FormForAssignmentId: string;
    }
    function RunFlowWithFormInstruction(): RunFlowWithFormInstruction;
}
declare module $D.Framework.Design.Flow.CoreSteps.Metro {
    interface NormalTile extends $D.Framework.Design.Flow.CoreSteps.Metro.AbstractTileReturn {
        Line1: $D.Framework.Design.Flow.CoreSteps.Metro.TileLineHolder;
        Line2: $D.Framework.Design.Flow.CoreSteps.Metro.TileLineHolder;
        Line3: $D.Framework.Design.Flow.CoreSteps.Metro.TileLineHolder;
        Line4: $D.Framework.Design.Flow.CoreSteps.Metro.TileLineHolder;
    }
    function NormalTile(): NormalTile;
}
declare module $D.Framework.Design.DataStructure {
    interface DefinedDataStructure extends $D.Framework.Design.DataStructure.AbstractDataType {
        IncludeDatabaseMarkups: boolean;
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
        TableNameOverride: string;
        CanChangeTableNameOverride: boolean;
        Cache: boolean;
        IncludeIdInCacheKey: boolean;
        GenerateEntityServiceFor: boolean;
        AddAction: boolean;
        DeleteAction: boolean;
        EditAction: boolean;
        AuditChanges: boolean;
        EnableBatchLoad: boolean;
        TemplateForType: string;
        TemplateForService: string;
        CanBeBaseType: boolean;
        IsLookupList: boolean;
        LookupListCategory: string;
        Children: $D.Framework.Design.DataStructure.DefinedDataTypeDataMember[];
        DefinedSuperClass: string;
        SuperClass: string;
        CanChangeName: boolean;
        CanChangeSuperClass: boolean;
        CanChangeStorageOption: boolean;
        CanChangeServiceGeneration: boolean;
        CanChangeDefaultActions: boolean;
        CanDeleteStructure: boolean;
        CanEditStructure: boolean;
        IsDynamicType: boolean;
        IsBackEndOnly: boolean;
        GenerateDataType: boolean;
        ExtensionFolderId: string;
    }
    function DefinedDataStructure(): DefinedDataStructure;
    interface NativeDataType extends $D.Framework.Design.DataStructure.AbstractDataType {
    }
    function NativeDataType(): NativeDataType;
    interface EnumDataType extends $D.Framework.Design.DataStructure.AbstractDataType {
        Values: $D.Framework.Design.DataStructure.EnumValue[];
        IsDynamicType: boolean;
        GenerateDataType: boolean;
    }
    function EnumDataType(): EnumDataType;
    interface JsonSchemaDataStructureEditObject extends $D.Framework._DBO {
        JsonSchemaDataStructureId: string;
        EntityFolderID: string;
        StructureName: string;
        DataTypeNameSpace: string;
        UseJsonFile: boolean;
        JsonCode: string;
        JsonFile: $D.Framework.Data.DataTypes.FileData;
        DataStructures: $D.Framework.Design.DataStructure.AbstractDataType[];
    }
    function JsonSchemaDataStructureEditObject(): JsonSchemaDataStructureEditObject;
}
declare module $D.Framework.Design.Flow.Service.Edit {
    interface DesignerInfo extends $D.Framework.Design.Flow.Service.Edit.SessionDesignerInfo {
        EntityDescription: string;
        Tags: string[];
        Comments: $D.Framework.ServiceLayer.Services.Comment.Comment[];
        Documents: $D.Framework.ServiceLayer.Services.Document.Document[];
        HistoryFolderId: string;
        EntityProperties: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function DesignerInfo(): DesignerInfo;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ReportCellOutput extends $D.Framework.Design.Report.Service.Comunication.ReportCustomOutput {
        CellData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function ReportCellOutput(): ReportCellOutput;
    interface ReportTextOutput extends $D.Framework.Design.Report.Service.Comunication.ReportCustomOutput {
        ItemText: string;
        TileDataList: any;
    }
    function ReportTextOutput(): ReportTextOutput;
    interface GridViewResultData extends $D.Framework.Design.Report.Service.Comunication.GridViewRowsData {
        Total: number;
        Records: number;
        AggregationData: $D.Framework.Design.Report.Service.Comunication.AggregationGroupInfo[];
        AggregationSeries: string[];
        TotalAggregationData: $D.Framework.Design.Report.Service.Comunication.AggregationViewInfo[];
        ReloadGrid: boolean;
        SearchLabel: string;
        SortByLabel: string;
        GroupByLabel: string;
        MultiSelectLabel: string;
        ColumnsLabel: string;
        RowsLabel: string;
        CloseLabel: string;
        ApplyLabel: string;
        ResetSettingsLabel: string;
        WidthUnitLabel: string;
    }
    function GridViewResultData(): GridViewResultData;
    interface DeltaReportRow extends $D.Framework._DBO {
        Type: $D.Framework.Design.Report.Service.Comunication.DeltaReportRowType;
        ChangedRow: $D.Framework.Design.Report.Service.Comunication.ReportRow;
        ReferencePosition: $D.Framework.Design.Report.EntityReportAction;
        PositionType: $D.Framework.Design.Report.Service.Comunication.DeltaReportRowPositionType;
    }
    function DeltaReportRow(): DeltaReportRow;
    interface AggregationDataInfo extends $D.Framework._DBO {
        TotalAggregation: $D.Framework.Design.Report.Service.Comunication.AggregationViewInfo[];
        Series: string[];
        GroupAggregations: $D.Framework.Design.Report.Service.Comunication.AggregationGroupInfo[];
    }
    function AggregationDataInfo(): AggregationDataInfo;
    interface PagedResultData extends $D.Framework._DBO {
        Rows: $D.Framework.Design.Report.Service.Comunication.ReportRow[];
        RowsPerPage: number;
        TotalRows: number;
        PageIndex: number;
        PageCount: number;
    }
    function PagedResultData(): PagedResultData;
    interface SharedReportViewContext extends $D.Framework._DBO {
        FolderId: string;
        ReportId: string;
        ReportName: string;
        ContextId: string;
        Configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration;
    }
    function SharedReportViewContext(): SharedReportViewContext;
    interface JsonReportRow extends $D.Framework.Design.Report.Service.Comunication.ReportRow {
        Values: any;
    }
    function JsonReportRow(): JsonReportRow;
    interface HierarchicalViewRow extends $D.Framework.Design.Report.Service.Comunication.ReportRow {
        IsLeaf: boolean;
        IsExpanded: boolean;
    }
    function HierarchicalViewRow(): HierarchicalViewRow;
}
declare module $D.Framework.Design.Form.ComponentData.CompositeControls {
    interface RuntimeChildrenProviderChildInfoWrapper extends $D.Framework._DBO {
        ChildInfos: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfo[];
        Parent: number[];
    }
    function RuntimeChildrenProviderChildInfoWrapper(): RuntimeChildrenProviderChildInfoWrapper;
    interface UserControlListContainerChildInfo extends $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfo {
        RuleInfoJson: string;
        SurfaceKeyTriggersJson: string;
    }
    function UserControlListContainerChildInfo(): UserControlListContainerChildInfo;
}
declare module $D.Framework.ServiceLayer {
    interface CustomPermissionsSetting extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        CustomPermission1: string;
        CustomPermission2: string;
        CustomPermission3: string;
        CustomPermission4: string;
        CustomPermission5: string;
        CustomPermission6: string;
        CustomPermission7: string;
        CustomPermission8: string;
        CustomPermission9: string;
        CustomPermission10: string;
        CustomPermission11: string;
        CustomPermission12: string;
        CustomPermission13: string;
        CustomPermission14: string;
        CustomPermission15: string;
        CustomPermission16: string;
        CustomPermission17: string;
        CustomPermission18: string;
        CustomPermission19: string;
        CustomPermission20: string;
    }
    function CustomPermissionsSetting(): CustomPermissionsSetting;
}
declare module $D.Framework.ServiceLayer.Utilities {
    interface RemovedSessionEntity extends $D.Framework.ServiceLayer.Utilities.ImportSessionEntity {
    }
    function RemovedSessionEntity(): RemovedSessionEntity;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface AddStringSearchAction extends $D.Framework.ServiceLayer.Actions.Common.MakeStringSelectionSearchAction {
    }
    function AddStringSearchAction(): AddStringSearchAction;
    interface RemoveStringSearchAction extends $D.Framework.ServiceLayer.Actions.Common.MakeStringSelectionSearchAction {
    }
    function RemoveStringSearchAction(): RemoveStringSearchAction;
    interface SelectAccountAction extends $D.Framework.ServiceLayer.Actions.Common.SelectEntityAction {
    }
    function SelectAccountAction(): SelectAccountAction;
    interface SelectAccountsAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[];
        GroupID: string;
        GroupAccountLimit: number;
    }
    function SelectAccountsAction(): SelectAccountsAction;
    interface SelectAssignmentRoleTypeAction extends $D.Framework.ServiceLayer.Actions.Common.SelectEntityAction {
    }
    function SelectAssignmentRoleTypeAction(): SelectAssignmentRoleTypeAction;
    interface SelectFolderAction extends $D.Framework.ServiceLayer.Actions.Common.SelectEntityAction {
    }
    function SelectFolderAction(): SelectFolderAction;
    interface SelectGroupAction extends $D.Framework.ServiceLayer.Actions.Common.SelectEntityAction {
    }
    function SelectGroupAction(): SelectGroupAction;
    interface SelectGroupsAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        Groups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
        Filters: string[];
    }
    function SelectGroupsAction(): SelectGroupsAction;
    interface SelectHostingAccountAction extends $D.Framework.ServiceLayer.Actions.Common.SelectEntityAction {
    }
    function SelectHostingAccountAction(): SelectHostingAccountAction;
}
declare module $D.Framework.ServiceLayer.Services.Tagging {
    interface TagModuleRight extends $D.Framework.ServiceLayer.AbstractModuleRights {
    }
    function TagModuleRight(): TagModuleRight;
    interface TagSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        MustHaveRightsToCreateTags: boolean;
        TagEditorHintText: string;
    }
    function TagSettings(): TagSettings;
}
declare module $D.Framework.ServiceLayer.Services.ServiceManagement {
    interface DecisionsServiceInfo extends $D.Framework._DBO {
        ServiceName: string;
        ServiceFullName: string;
        Methods: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceMethodInfo[];
    }
    function DecisionsServiceInfo(): DecisionsServiceInfo;
}
declare module $D.Framework.ServiceLayer.Services.ServiceCatalog {
    interface ServiceCatalogItem extends $D.Framework.ServiceLayer.Services.ServiceCatalog.AbstractServiceCatalogItem {
        ImageInfo: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        ShowOnMobile: boolean;
        CanRunOffline: boolean;
        PublishFormHost: $D.Framework.Design.Form.FormHost.PublishFormHostEnum;
        CanSuggestToUser: boolean;
        HandlerData: number[];
        IconName: string;
        CatalogItemOrder: number;
        Color: $D.Silverlight.UI.Utilities.DesignerColor;
        ReportFolderId: string;
    }
    function ServiceCatalogItem(): ServiceCatalogItem;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface InstanceUserJoin extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        InstanceUserId: string;
        AccountEmail: string;
        InstanceName: string;
        IsAdmin: boolean;
        CanUsePortal: boolean;
        Account: $D.Framework.ServiceLayer.Services.Accounts.Account;
        Instance: $D.Framework.ServiceLayer.Services.Folder.Folder;
    }
    function InstanceUserJoin(): InstanceUserJoin;
    interface Server extends $D.Framework.ServiceLayer.Services.ServerManagement.Servers.HostingHostDefinition {
        ServerName: string;
        LastCheckinTime: any;
        DefaultAddress: string;
        GroupUrl: string;
        NumberOfInstances: number;
        FullMemorySize: number;
        FreeMemorySize: number;
        FullDiskSize: number;
        FreeDiskSize: number;
    }
    function Server(): Server;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement.AmazonHostingDataTypes {
    interface EC2ServerImage extends $D.Framework.ServiceLayer.Services.ServerManagement.Servers.HostingHostDefinition {
        EC2ServerImageId: string;
    }
    function EC2ServerImage(): EC2ServerImage;
}
declare module $D.Framework.ServiceLayer.Services.Replay {
    interface PlayBackStepInfo extends $D.Framework._DBO {
        Number: number;
        ServiceName: string;
        MethodName: string;
        TimeIntoSessionWhenCalled: number;
        TimeCallTook: number;
        Step: $D.Framework.ServiceLayer.Services.Replay.ReplayStep;
    }
    function PlayBackStepInfo(): PlayBackStepInfo;
}
declare module $D.Framework.ServiceLayer.Services.Relations {
    interface AccountRelation extends $D.Framework.ServiceLayer.Services.Relations.Relation {
        AccountId: string;
    }
    function AccountRelation(): AccountRelation;
    interface GroupRelation extends $D.Framework.ServiceLayer.Services.Relations.Relation {
        GroupId: string;
    }
    function GroupRelation(): GroupRelation;
}
declare module $D.Framework.ServiceLayer.Services.Portal {
    interface ClusteringSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
    }
    function ClusteringSettings(): ClusteringSettings;
    interface IntegrationSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        WarningText: string;
        SecurityOption: $D.Framework.ServiceLayer.Services.Portal.WebClientSecurityOptions;
        ServicePointSettings: $D.Framework.ServiceLayer.Services.Portal.ServicePointManagerSettings;
        ThreadPoolSettings: $D.Framework.ServiceLayer.Services.Portal.ThreadPoolSettings;
        JwtSecretKey: string;
    }
    function IntegrationSettings(): IntegrationSettings;
    interface PortalSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        LogToConsoleLevel: $D.Framework.ServiceLayer.Services.Portal.ClientLogLevel;
        LogToServerLevel: $D.Framework.ServiceLayer.Services.Portal.ClientLogLevel;
        HelpDocumenationPage: string;
        ProcessViewPage: string;
        ProcessViewPageName: string;
        SubProcessViewPage: string;
        ProcessViewPageWithParentProcessLink: string;
        SubProcessViewPageWithParentProcessLink: string;
        MinPortalWidth: number;
        MinPortalHeight: number;
        ActionLocation: $D.Framework.ServiceLayer.Services.Portal.MainActionLocation;
        ShowFoldersInSubMenu: boolean;
        DefaultLanguage: string;
        Translation: $D.Framework.ServiceLayer.Services.Portal.TranslateStrings;
        ShowSettingsInHeader: boolean;
        ShowAccountInHeader: boolean;
        ShowAboutInHeader: boolean;
        ShowLockInHeader: boolean;
        ShowLogoutInHeader: boolean;
        UserSessionLength: string;
        EnableGuestAccount: boolean;
        LockPortalShortcut: $D.Framework.Design.ShortcutInfo;
        ConfirmPortalLeaving: boolean;
        PortalSize: $D.Framework.Data.DataTypes.UISize;
        Theme: string;
        RememberUserUiSetup: boolean;
        UseBrowserZoom: boolean;
        FolderSearchResultLimit: number;
        InlineSearchResultLimit: number;
        DisableTextSearch: boolean;
        ShowDevelopmentActions: boolean;
        Logo: number[];
        ShowLogoInHeader: boolean;
        DifferentLoginLogo: boolean;
        LoginLogo: number[];
        SloganText: string;
        ShowCurrentFolderNameInHeader: boolean;
        ShowInstanceName: $D.Framework.ServiceLayer.Services.Portal.InstanceNameVisibility;
        MaxRecentItems: number;
        ShowServiceCatalogNode: boolean;
        ShowAcctImpersonationAction: boolean;
        ShowLockPortalAction: boolean;
        ShowSubmitFeedback: boolean;
        SubmitFeedbackAddress: string;
        CollapsedTreeOnStartStudio: boolean;
        CollapsedTreeOnStartUserPortal: boolean;
        ServiceCatalogNodeName: string;
        ShowMyDesignsNode: boolean;
        MyDesignsNodeName: string;
        ShowDashboardsNode: boolean;
        ShowDetailLinkOnErrorDialog: boolean;
        ShowDeveloperLevelErrors: boolean;
        ShowKnowledgeBaseNode: boolean;
        KnowledgeBaseNodeName: string;
        ShowHomeFolder: boolean;
        MyTasksNodeName: string;
        ShowFavoritesNode: boolean;
        ShowRecentNode: boolean;
        DefaultEmailAddress: string;
        NewUserDefaultGroups: string[];
        ShowNewUserWelcomeWizard: any;
        DoNotAutoGenerateThemeCss: boolean;
        SecurityQuestionForAccount: string[];
        DefaultWebPageTitle: string;
        InferWebPageTitleFromUrl: boolean;
        StorePasswordInRecoverableWay: boolean;
        HideRememberMe: boolean;
        TermsOfServices: string;
        InstanceDefaultTimeZone: string;
        DefaultExportSubEntitiesOption: $D.Framework.ServiceLayer.Services.ImportExport.ExportSubEntitiesOptions;
        AssignTaskWhenImportingMissingFolder: boolean;
        SecureContactsInReadonlyMode: boolean;
        SecureContactsInEditMode: boolean;
        AllowAutoAdd: boolean;
        ShowContactOrder: boolean;
        IncludeAddressesInContactView: boolean;
        AllowSelfRegisterUsers: boolean;
        CustomSelfRegistrationURL: string;
        RegisteredUsersMustConfirm: boolean;
        EmailConfirmationFlowId: string;
        ConfirmationPageLocation: string;
        ShowInviteAction: boolean;
        SendNotificationsFromSystemAccount: boolean;
        AllowUsersToOptOutOfNotifications: boolean;
        TurnOffNotifyToMe: boolean;
        NotifyReportStructureChange: boolean;
        NotificationTimeout: string;
        NotificationItemsTimeout: string;
        HelpURL: string;
        ContactUsURL: string;
        NewsFeed: string;
        HideForgotPasswordLink: boolean;
        HandlePasswordResetCommunicationViaFlow: boolean;
        PasswordResetCommunicationFlowId: string;
        DefaultFolderId: string;
        ShowDefaultPage: boolean;
        NavigateDefaultPageId: string;
        NavigateDefaultHTMLPageId: string;
        NavigateDefaultPageName: string;
        ShowBrowseView: boolean;
        BrowsePageName: string;
        ShowBrowsePageToAdministrators: boolean;
        ShowDefaultPageIfUserPageSpecified: boolean;
        ShowDefaultPageIfSystemPageSpecified: boolean;
        DefaultGroups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
        GroupAccountLimit: number;
        ShowCreateRootFolder: boolean;
        AnyUserCreateRootFolder: boolean;
        GroupsAllowedToCreateRootFolder: string[];
        InstanceDefaultCulture: string;
        TimeFormat: $D.Framework.ServiceLayer.Services.Portal.TimeFormats;
        DateFormat: $D.Framework.ServiceLayer.Services.Portal.DateFormats;
        NumberFormatSource: $D.Framework.ServiceLayer.Services.Portal.NumberFormatSource;
        DefaultNumberDecimalDigits: number;
        UseNumberGroupSeparator: boolean;
        NumberGroupSeparator: string;
        ExtensionsNotAllowed: string[];
        MinPasswordChars: number;
        IsUpperLowerCase: boolean;
        IsSymbole: boolean;
        IsNumber: boolean;
        IsAccountExpirationEnabled: boolean;
        PasswordExpiresDays: number;
        IsLockoutEnabled: boolean;
        NumberOfAttempts: number;
        ForceSessionCloseOnPasswordChange: boolean;
        CompareLastFourPasswords: boolean;
        SilverPartBaseHasDarkTheme: boolean;
        SilverPartBaseHasShadow: boolean;
        SilverPartBaseHideActionMenu: boolean;
        SilverPartBaseHideHeader: boolean;
        SilverPartBaseSmallTitle: boolean;
        SilverPartBaseShowActionsOnHeader: boolean;
        SilverPartBaseShowActionsAsIcons: boolean;
        SilverPartBaseIsClosable: boolean;
        SilverPartBaseIsCollapsable: boolean;
        SilverPartBaseHasBorder: boolean;
        SilverPartBaseIsTransparent: boolean;
        SilverPartContainerHasDarkTheme: boolean;
        SilverPartContainerHasShadow: boolean;
        SilverPartContainerHideActionMenu: boolean;
        SilverPartContainerHideHeader: boolean;
        SilverPartContainerSmallTitle: boolean;
        SilverPartContainerShowActionsOnHeader: boolean;
        SilverPartContainerShowActionsAsIcons: boolean;
        SilverPartContainerIsClosable: boolean;
        SilverPartContainerIsCollapsable: boolean;
        SilverPartContainerHasBorder: boolean;
        SilverPartContainerIsTransparent: boolean;
        SilverPartChildHasDarkTheme: boolean;
        SilverPartChildHasShadow: boolean;
        SilverPartChildHideActionMenu: boolean;
        SilverPartChildHideHeader: boolean;
        SilverPartChildSmallTitle: boolean;
        SilverPartChildShowActionsOnHeader: boolean;
        SilverPartChildShowActionsAsIcons: boolean;
        SilverPartChildIsClosable: boolean;
        SilverPartChildIsCollapsable: boolean;
        SilverPartChildHasBorder: boolean;
        SilverPartChildIsTransparent: boolean;
        SilverPartChromelessHasDarkTheme: boolean;
        SilverPartChromelessHasShadow: boolean;
        SilverPartChromelessHideActionMenu: boolean;
        SilverPartChromelessHideHeader: boolean;
        SilverPartChromelessSmallTitle: boolean;
        SilverPartChromelessShowActionsOnHeader: boolean;
        SilverPartChromelessShowActionsAsIcons: boolean;
        SilverPartChromelessIsClosable: boolean;
        SilverPartChromelessIsCollapsable: boolean;
        SilverPartChromelessHasBorder: boolean;
        SilverPartChromelessIsTransparent: boolean;
        SilverPartBaseHorizontalMarginAtBorder: number;
        SilverPartBaseVerticalMarginAtBorder: number;
        SilverPartBaseHorizontalMarginInside: number;
        SilverPartBaseVerticalMarginInside: number;
        SilverPartContainerHorizontalMarginAtBorder: number;
        SilverPartContainerVerticalMarginAtBorder: number;
        SilverPartContainerHorizontalMarginInside: number;
        SilverPartContainerVerticalMarginInside: number;
        SilverPartChildHorizontalMarginAtBorder: number;
        SilverPartChildVerticalMarginAtBorder: number;
        SilverPartChildHorizontalMarginInside: number;
        SilverPartChildVerticalMarginInside: number;
        SilverPartChromelessHorizontalMarginAtBorder: number;
        SilverPartChromelessVerticalMarginAtBorder: number;
        SilverPartChromelessHorizontalMarginInside: number;
        SilverPartChromelessVerticalMarginInside: number;
        AutoSubmitEditorValue: boolean;
        AutoSubmitEditorOnFirstType: boolean;
        AutoSubmitEditorOnClear: boolean;
        AutoSubmitInterval: number;
        DefaultEditorWidth: number;
        DefaultEditorHeight: number;
        ShowSuggestionInDateEditor: boolean;
        SsoEnabled: boolean;
        AutoLockScreen: boolean;
        AutoLockOnLogoutDelay: string;
        AutoLockTimeout: string;
        AutoLockReloginAppearance: $D.Framework.ServiceLayer.Services.Portal.AutoLockReloginAppearance;
        ShowSpinnerForFlowRuntime: boolean;
        ProductTitle: string;
        ShowConfirmationDialog: boolean;
        ShowReportHeaderAsToolbar: boolean;
        ReportAutoPagingThreshold: number;
        DefaultPrintTemplateId: string;
        NewWindowStyle: $D.Framework.Design.Flow.CoreSteps.ChromeSetting;
        ShowFavorites: boolean;
        ShowFoldersCatalog: boolean;
        ShowRecentFolder: boolean;
        HideTopBarSearch: boolean;
        PortalSideBarDefaultPanel: $D.Framework.ServiceLayer.Services.Portal.PortalSideBarDefaultPanel;
        HideWorkflowCatalog: boolean;
        StartWorkflowTitle: string;
        RootWorkflowCatalogItems: string;
        LoginUserFlowId: string;
        RestrictSimultaneousLogins: boolean;
        LoginUserUIFlowId: string;
        UseMobilePortalonTablet: boolean;
        LockSessionToIPAddress: boolean;
        IsTwoFactorAuthenticationEnabled: boolean;
        TwoFactorAuthenticationTokenType: $D.Framework.ServiceLayer.Services.Portal.TwoFactorAuthenticationType;
        TwoFactorAuthenticationTokenLength: number;
        TwoFactorAuthenticationTimeout: number;
        FolderTimelineMaxStatesBeforeForcedExpand: number;
        UserBackAccountKey: string;
        ResetPasswordLinkLifeSpan: number;
    }
    function PortalSettings(): PortalSettings;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface StateInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        StateID: string;
        EntityName: string;
        StateCode: string;
        EntityDescription: string;
        CountryInfo: $D.Framework.ServiceLayer.Services.Organization.CountryInfo;
        CountryName: string;
    }
    function StateInfo(): StateInfo;
    interface ContactInfoSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        DefaultCity: string;
        DefaultCounty: string;
        DefaultState: string;
        DefaultCountry: string;
    }
    function ContactInfoSettings(): ContactInfoSettings;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface FlowNotificationMessage extends $D.Framework._DBO {
        Groups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
        Users: $D.Framework.ServiceLayer.Services.Accounts.Account[];
        EmailAddresses: string[];
        NotificationMessage: $D.Framework.ServiceLayer.Services.Notifications.NotificationMessage;
    }
    function FlowNotificationMessage(): FlowNotificationMessage;
    interface Notify extends $D.Framework._DBO {
        Notification: $D.Framework.ServiceLayer.Services.Notifications.Notification;
        isnotDefault: boolean;
    }
    function Notify(): Notify;
    interface FlowNotificationHandler extends $D.Framework.ServiceLayer.Services.Notifications.BaseNotificationHandler {
        EmailAddresses: string[];
        Users: $D.Framework.ServiceLayer.Services.Accounts.Account[];
        Groups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
        FlowId: string;
    }
    function FlowNotificationHandler(): FlowNotificationHandler;
}
declare module $D.Framework.ServiceLayer.Services.Module {
    interface ModuleResourceNode extends $D.Framework._DBO {
        ModuleName: string;
        EntityId: string;
        EntityName: string;
        EntityType: string;
        Icon: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
        EntitySubType: string;
        ElementUsage: $D.Framework.Design.ElementUsageDto;
        NodeType: $D.Framework.ServiceLayer.Services.Module.ModuleResourceNodeType;
        Children: $D.Framework.ServiceLayer.Services.Module.ModuleResourceNode[];
    }
    function ModuleResourceNode(): ModuleResourceNode;
}
declare module $D.Framework.ServiceLayer.Services.KnowledgeBase {
    interface ExternalLink extends $D.Framework.ServiceLayer.Services.KnowledgeBase.KnowledgeBaseItem {
        Url: string;
    }
    function ExternalLink(): ExternalLink;
}
declare module $D.Framework.ServiceLayer.Services.Document {
    interface DocumentModuleSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        AuditDocumentInteractions: boolean;
        MaxVersionsToKeep: number;
        StoreIn: $D.Framework.ServiceLayer.Services.Document.StorageType;
        BaseDirectory: string;
        IsWarn: boolean;
        WarnMB: number;
        IsDontAllow: boolean;
        DontAllowMB: number;
        UseUrlDocumentCache: boolean;
    }
    function DocumentModuleSettings(): DocumentModuleSettings;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface DatabaseQueryDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.AbstractDatabaseDefinition {
        Query: string;
        ReturnsData: boolean;
        OutputCount: boolean;
        QueryTimeout: any;
        Keys: $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions.QueryParameterDefinition[];
        OutputOption: $D.Framework.ServiceLayer.Services.DatabaseIntegration.OutputQueryOption;
        CSVDelimiter: $D.Framework.Design.Flow.CoreSteps.CSV.CSVSeparator;
        OutputHeaderRow: boolean;
    }
    function DatabaseQueryDefinition(): DatabaseQueryDefinition;
    interface DatabaseStoredProcedureDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.AbstractDatabaseDefinition {
        Keys: $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions.ProcedureParameterDefinition[];
        StoredProcName: string;
        SchemaName: string;
        SpecificName: string;
        ReturnsData: boolean;
        OutputCount: boolean;
        FullName: string;
        IsProcedureNameQuoted: boolean;
    }
    function DatabaseStoredProcedureDefinition(): DatabaseStoredProcedureDefinition;
    interface BaseDatabaseTableDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.AbstractDatabaseDefinition {
        Keys: string[];
        Fields: $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions.ParameterDefinition[];
        AccessDefinitions: $D.Framework.ServiceLayer.Services.DatabaseIntegration.DatabaseTableAccessDefinition[];
        TableName: string;
        GetAll: boolean;
        GetById: boolean;
        Exists: boolean;
        Count: boolean;
        SchemaName: string;
        FullName: string;
        IdentityColumn: string;
        IsTableNameQuoted: boolean;
    }
    function BaseDatabaseTableDefinition(): BaseDatabaseTableDefinition;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration.IntegrationDefinitions {
    interface TableRelationshipDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.AbstractDatabaseDefinition {
        FromTableName: string;
        ToTableName: string;
        FromField: string;
        FromField1: string;
        FromField2: string;
        ToTableId: string;
        ToField: string;
        ToField1: string;
        ToField2: string;
    }
    function TableRelationshipDefinition(): TableRelationshipDefinition;
}
declare module $D.Framework.ServiceLayer.Services.Comment {
    interface CommentModuleSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        ShowCommentAction: boolean;
        ShowQuickCommentAction: boolean;
        ShowDocumentAction: boolean;
    }
    function CommentModuleSettings(): CommentModuleSettings;
}
declare module $D.Framework.ServiceLayer.Services.CMDB {
    interface CMDBSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        AgentIdentityCreationPassword: string;
    }
    function CMDBSettings(): CMDBSettings;
}
declare module $D.Framework.ServiceLayer.Services.AuditService {
    interface DefaultAuditSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        EnableAuditing: boolean;
        TypesToAudit: $D.Framework.ServiceLayer.Services.AuditService.AuditSettingsType[];
        ReportExcecution: boolean;
        UserLogin: boolean;
        SessionAuditEnabled: boolean;
        LogSettings: boolean;
        EnableAuditForQueryEditor: boolean;
        FeatureInstallation: boolean;
        ImportEntities: boolean;
        ExportEntities: boolean;
        Process: $D.Framework.ServiceLayer.Services.AuditService.AuditingProcess;
        AutoArchiveSessionHistoryAfterDays: number;
    }
    function DefaultAuditSettings(): DefaultAuditSettings;
}
declare module $D.Framework.ServiceLayer.Services.Association {
    interface Association extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        AssociationFromType: string;
        AssociationFromExtensionType: string;
        AssociationToID: string;
        AssociationToType: string;
        AssociationToExtensionType: string;
        AssociationFromID: string;
        AssociationID: string;
        TypeofAssociation: $D.Framework.ServiceLayer.Services.Association.AssociationType;
        TypeRoleName: string;
        Notes: string;
        RelationshipTo: string;
    }
    function Association(): Association;
}
declare module $D.Framework.ServiceLayer.Services.Assignments {
    interface AccountAndGroupList extends $D.Framework._DBO {
        AccountIds: string[];
        GroupIds: string[];
        AccountEmails: string[];
        GroupNames: string[];
        AllIds: string[];
        Accounts: $D.Framework.ServiceLayer.Services.Accounts.Account[];
        Groups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
    }
    function AccountAndGroupList(): AccountAndGroupList;
    interface AssignmentSettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        LeaseTimeLimit: string;
        InitialLeaseTime: string;
    }
    function AssignmentSettings(): AssignmentSettings;
}
declare module $D.Framework.ServiceLayer.Services.Accounts {
    interface InviteUser extends $D.Framework._DBO {
        Email: string;
        FirstName: string;
        LastName: string;
        Phone: $D.Framework.ServiceLayer.Services.Organization.Phone;
        GeneratePassword: boolean;
        Password: string;
        Member: string[];
        Groups: $D.Framework.ServiceLayer.Services.Accounts.Group[];
    }
    function InviteUser(): InviteUser;
}
declare module $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory {
    interface ActiveDirectorySettings extends $D.Framework.ServiceLayer.AbstractModuleSettings {
        AutoSignIn: boolean;
        USEChromeSSO: boolean;
        ActiveDirectoryServers: $D.Framework.ServiceLayer.Services.Accounts.ActiveDirectory.ActiveDirectoryServerRegistation[];
    }
    function ActiveDirectorySettings(): ActiveDirectorySettings;
}
declare module $D.Framework.ServiceLayer.Services.Agent {
    interface AgentData extends $D.Framework.ServiceLayer.AbstractEntityExtensionData {
        IsPrimary: boolean;
        Id: any;
        DataPayload: number[];
        Instructions: $D.Framework.ServiceLayer.Agent.AgentInstructions[];
        CurrentSessionValue: string;
    }
    function AgentData(): AgentData;
}
declare module $D.Framework.ServiceLayer.Services.Folder {
    interface RemoveFromFavorites extends $D.Framework.ServiceLayer.Actions.Common.YesNoAction {
    }
    function RemoveFromFavorites(): RemoveFromFavorites;
    interface AccountFolderAccessRight extends $D.Framework.ServiceLayer.Services.Folder.AbstractFolderAccessRight {
        Account: $D.Framework.ServiceLayer.Services.Accounts.Account;
        UserAccessRightsId: string;
    }
    function AccountFolderAccessRight(): AccountFolderAccessRight;
    interface GroupFolderAccessRight extends $D.Framework.ServiceLayer.Services.Folder.AbstractFolderAccessRight {
        GroupValue: $D.Framework.ServiceLayer.Services.Accounts.Group;
        GroupAccessRightsId: string;
    }
    function GroupFolderAccessRight(): GroupFolderAccessRight;
    interface PageData extends $D.Framework.ServiceLayer.Services.Folder.AbstractPageData {
        EntityName: string;
        PageDataID: string;
        ConfigurationStorageID: string;
    }
    function PageData(): PageData;
    interface WebPageData extends $D.Framework.ServiceLayer.Services.Folder.AbstractPageData {
        PageDataID: string;
        Url: string;
        IsRelativeToWebHost: boolean;
        ShowBorder: boolean;
        PassSessionID: boolean;
        PassFolderID: boolean;
        PassUserID: boolean;
        PassUserEmailAddress: boolean;
        SessionIDName: string;
        FolderIDName: string;
        UserEmailAddressName: string;
        UserIDName: string;
    }
    function WebPageData(): WebPageData;
    interface FlowPageData extends $D.Framework.ServiceLayer.Services.Folder.AbstractPageData {
        PageDataID: string;
        ConfigurationStorageID: string;
    }
    function FlowPageData(): FlowPageData;
}
declare module $D.Framework.Design.Report.Matrix.IntersectionTemplate {
    interface TableTemplate extends $D.Framework._DBO {
        Cells: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplate[];
        ConfiguredRows: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableSlotInfo[];
        ConfiguredColumns: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableSlotInfo[];
        PaddingLeft: number;
        PaddingRight: number;
        PaddingTop: number;
        PaddingBottom: number;
        Style: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplateStyle;
        CellDefaultStyle: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
        TextDefaultStyle: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
        FieldDefaultStyle: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
        ImageDefaultStyle: $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellTemplateStyle;
    }
    function TableTemplate(): TableTemplate;
    interface CellFieldTemplate extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellFieldDataTemplate {
        FieldTitle: string;
        StringFormat: string;
        NullString: string;
    }
    function CellFieldTemplate(): CellFieldTemplate;
    interface CellImageTemplate extends $D.Framework.Design.Report.Matrix.IntersectionTemplate.CellFieldDataTemplate {
        DefaultWidth: number;
        DefaultHeight: number;
        Image: $D.Framework.ServiceLayer.Services.Image.ImageInfo;
    }
    function CellImageTemplate(): CellImageTemplate;
}
declare module $D.Framework.Design.EntityActions {
    interface CreateFlowExecutionActionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateFlowExecutionActionFlowAction(): CreateFlowExecutionActionFlowAction;
    interface CreateFolderBehaviorActionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateFolderBehaviorActionFlowAction(): CreateFolderBehaviorActionFlowAction;
    interface CreateEntityActionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityActionFlowAction(): CreateEntityActionFlowAction;
    interface CreateFolderTransitionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateFolderTransitionFlowAction(): CreateFolderTransitionFlowAction;
    interface CreateFlowExectionTransitionAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateFlowExectionTransitionAction(): CreateFlowExectionTransitionAction;
    interface CreateValidationEntityActionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateValidationEntityActionFlowAction(): CreateValidationEntityActionFlowAction;
    interface CreateEntityValidationSimpleRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateRuleAction {
    }
    function CreateEntityValidationSimpleRuleAction(): CreateEntityValidationSimpleRuleAction;
    interface CreateEntityValidationAdvanceRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateRuleAction {
    }
    function CreateEntityValidationAdvanceRuleAction(): CreateEntityValidationAdvanceRuleAction;
    interface CreateActionRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateRuleAction {
    }
    function CreateActionRuleAction(): CreateActionRuleAction;
    interface CreatePageVisibiltyRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateRuleAction {
    }
    function CreatePageVisibiltyRuleAction(): CreatePageVisibiltyRuleAction;
    interface CreateEntityGroupActionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityGroupActionFlowAction(): CreateEntityGroupActionFlowAction;
    interface CreateEntityBeforeSaveFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityBeforeSaveFlowAction(): CreateEntityBeforeSaveFlowAction;
    interface CreateEntityAfterSaveFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityAfterSaveFlowAction(): CreateEntityAfterSaveFlowAction;
    interface CreateEntityBeforeDeleteFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityBeforeDeleteFlowAction(): CreateEntityBeforeDeleteFlowAction;
    interface CreateEntityAfterDeleteFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateEntityAfterDeleteFlowAction(): CreateEntityAfterDeleteFlowAction;
    interface CreateGenerateDescriptionFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateGenerateDescriptionFlowAction(): CreateGenerateDescriptionFlowAction;
    interface CreateGenerateDescriptionTextMergeAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateTextMergeAction {
    }
    function CreateGenerateDescriptionTextMergeAction(): CreateGenerateDescriptionTextMergeAction;
}
declare module $D.Framework.Design.Flow {
    interface NewFlowEntityInfo extends $D.Framework._DBO {
        EntityType: $D.Framework.Design.Flow.NewFlowEntityType;
        EntityId: string;
        StepDisplayData: $D.Framework.Design.Flow.StepDisplayData;
        ConnectionData: $D.Framework.Design.Flow.StepConnectionData;
    }
    function NewFlowEntityInfo(): NewFlowEntityInfo;
}
declare module $D.Framework.Design.Flow.Service.Execution {
    interface ViewOnlyFormInstruction extends $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction {
        OutcomeName: string;
        CompletedDateTime: Date;
        CompletedByUserId: string;
        CompletedByUser: string;
        CompletedBySystem: boolean;
        AssignmentID: string;
    }
    function ViewOnlyFormInstruction(): ViewOnlyFormInstruction;
    interface StandAloneFormInstruction extends $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction {
        ExecutionData: $D.Framework.Design.Form.FormExecutionData;
    }
    function StandAloneFormInstruction(): StandAloneFormInstruction;
    interface ReadOnlyFormInstruction extends $D.Framework.Design.Flow.Service.Execution.NextFormInSessionInstruction {
    }
    function ReadOnlyFormInstruction(): ReadOnlyFormInstruction;
}
declare module $D.Framework.Design.Flow.CoreSteps.DataForm {
    interface DataFormStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
    }
    function DataFormStructure(): DataFormStructure;
}
declare module $D.Framework.Design.DataStructure {
    interface SimpleDataStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
        EnableActions: boolean;
        AddCategoryName: string;
        AddSubCategoryName: string;
    }
    function SimpleDataStructure(): SimpleDataStructure;
    interface LeasedDataStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
        EnableActions: boolean;
        AddCategoryName: string;
        AddSubCategoryName: string;
    }
    function LeasedDataStructure(): LeasedDataStructure;
    interface SimpleFlowStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
    }
    function SimpleFlowStructure(): SimpleFlowStructure;
    interface DefinedExternalEntity extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        AddCategoryName: string;
        AddSubCategoryName: string;
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
        ShowEditAction: boolean;
        ShowDeleteAction: boolean;
        DefaultEditCategoryLabel: string;
    }
    function DefinedExternalEntity(): DefinedExternalEntity;
    interface EntityExtensionDataStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        ExtensionForType: string;
        AddCategoryName: string;
        AddSubCategoryName: string;
        AvailableEntityTypes: string[];
        StorageOption: $D.Framework.Design.DataStructure.StorageOption;
    }
    function EntityExtensionDataStructure(): EntityExtensionDataStructure;
    interface CsvDatabaseStoredDataStructure extends $D.Framework.Design.DataStructure.DefinedDataStructure {
        CsvData: number[];
        FileType: $D.Framework.Design.Flow.CoreSteps.StandardSteps.CsvFileType;
        Separator: $D.Framework.Design.Flow.CoreSteps.CSV.CSVSeparator;
        WorksheetIndex: any;
        HasTitles: boolean;
        OriginalFieldNames: $D.Framework.Design.DataStructure.OriginalNamePair[];
        IgnoreEmptyRows: boolean;
    }
    function CsvDatabaseStoredDataStructure(): CsvDatabaseStoredDataStructure;
    interface JsonDataStructureEditObject extends $D.Framework._DBO {
        JsonDataStructureId: string;
        EntityFolderID: string;
        StructureName: string;
        DataTypeNameSpace: string;
        AllowNullableValues: boolean;
        UseJsonFile: boolean;
        JsonCode: string;
        JsonFile: $D.Framework.Data.DataTypes.FileData;
        ClassListForFactoryGeneration: string[];
        DataStructures: $D.Framework.Design.DataStructure.DefinedDataStructure[];
    }
    function JsonDataStructureEditObject(): JsonDataStructureEditObject;
}
declare module $D.Framework.Design.Flow.Service {
    interface FlowServiceStepNotification extends $D.Framework.Design.Flow.Service.FlowServiceNotification {
        FlowStepId: string;
        ChangedPropertyName: string;
        DisplayData: $D.Framework.Design.Flow.StepDisplayData;
    }
    function FlowServiceStepNotification(): FlowServiceStepNotification;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface DeltaReportTextOutput extends $D.Framework._DBO {
        Type: $D.Framework.Design.Report.Service.Comunication.DeltaReportRowType;
        ChangedRow: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput;
        ReferencePosition: $D.Framework.Design.Report.EntityReportAction;
        PositionType: $D.Framework.Design.Report.Service.Comunication.DeltaReportRowPositionType;
    }
    function DeltaReportTextOutput(): DeltaReportTextOutput;
    interface TextViewResultData extends $D.Framework.Design.Report.Service.Comunication.BaseReportViewReultData {
        RowsPerPage: any;
        UseMainGroupingInTextViews: boolean;
        DefaultTextViewGroupName: string;
        TextOutput: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[];
    }
    function TextViewResultData(): TextViewResultData;
}
declare module $D.Framework.Design.Form {
    interface RunFlowWithFormAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        RunInSidePanel: boolean;
        RunInNewWindow: boolean;
        Intruction: $D.Framework.Design.Form.RunFlowWithFormInstruction;
        DebuggingId: string;
    }
    function RunFlowWithFormAction(): RunFlowWithFormAction;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface MoveEntityToFolderAction extends $D.Framework.ServiceLayer.Actions.Common.SelectFolderAction {
    }
    function MoveEntityToFolderAction(): MoveEntityToFolderAction;
}
declare module $D.Framework.ServiceLayer.Services.ServerManagement {
    interface ServerInstance extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        ServerInstanceId: string;
        Status: $D.Framework.ServiceLayer.InstanceStatus;
        ServerName: string;
        InstanceName: string;
        Url: string;
        Server: $D.Framework.ServiceLayer.Services.ServerManagement.Server;
        Instance: $D.Framework.ServiceLayer.Services.Folder.Folder;
    }
    function ServerInstance(): ServerInstance;
}
declare module $D.Framework.ServiceLayer.Services.Portal {
    interface UserPortalSetupInfo extends $D.Framework._DBO {
        UserAccount: $D.Framework.ServiceLayer.Services.Accounts.Account;
        Settings: $D.Framework.ServiceLayer.Services.Portal.PortalSettings;
        DesignerSettings: $D.Framework.Design.DesignerSettings;
        BasicSetupInfo: $D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo;
        UserDisplayName: string;
        AccountsCanImpersonate: $D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[];
        Initializers: string[];
        ShowApplicationStore: boolean;
        ShowApplicationStoreInRoot: boolean;
        DefaultFolderID: string;
        DefaultFolderViewData: $D.Framework.ServiceLayer.Services.Folder.FolderViewData;
        GlobalActions: $D.Framework.ServiceLayer.Actions.BaseActionType[];
        GlobalActionHeaders: $D.Framework.ServiceLayer.Actions.ActionHeader[];
        RootFolders: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[];
        FavoritesFolders: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[];
        RecentFolders: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[];
        ApplicationStoreFolder: $D.Framework.ServiceLayer.Services.Folder.FolderForTree;
        HomeFolder: $D.Framework.ServiceLayer.Services.Folder.FolderForTree;
        ServiceCatalogFolder: $D.Framework.ServiceLayer.Services.Folder.FolderForTree;
        DashboardsFolder: $D.Framework.ServiceLayer.Services.Folder.FolderForTree;
        ApplicationStoreFolderHasChildren: boolean;
        HomeFolderHasChildren: boolean;
        ServiceCatalogFolderHasChildren: boolean;
        DashboardsFolderHasChildren: boolean;
        SocketPort: number;
        StartupPopUpPage: $D.Framework.ServiceLayer.Services.Portal.PopUpFolderPage;
        TimeZoneInformation: string;
        UseTimeZoneTranslation: boolean;
        CanUseInlinePageDesigner: boolean;
        InstanceName: string;
        StartupFormInstruction: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction;
        ThemeName: string;
        Slogan: string;
        Logo: number[];
        BrowserWebPageName: string;
        DefaultFolderName: string;
    }
    function UserPortalSetupInfo(): UserPortalSetupInfo;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface CountyInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CountyID: string;
        EntityName: string;
        CountyCode: string;
        EntityDescription: string;
        StateInfo: $D.Framework.ServiceLayer.Services.Organization.StateInfo;
        CountryInfo: $D.Framework.ServiceLayer.Services.Organization.CountryInfo;
        StateName: string;
        CountryName: string;
    }
    function CountyInfo(): CountyInfo;
}
declare module $D.Framework.ServiceLayer.Services.Notifications {
    interface CreateNotificationFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateNotificationFlowAction(): CreateNotificationFlowAction;
}
declare module $D.Framework.ServiceLayer.Services.DatabaseIntegration {
    interface DatabaseViewDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.BaseDatabaseTableDefinition {
    }
    function DatabaseViewDefinition(): DatabaseViewDefinition;
    interface DatabaseTableDefinition extends $D.Framework.ServiceLayer.Services.DatabaseIntegration.BaseDatabaseTableDefinition {
        Insert: boolean;
        Update: boolean;
        InsertOrUpdate: boolean;
        Delete: boolean;
    }
    function DatabaseTableDefinition(): DatabaseTableDefinition;
}
declare module $D.Framework.ServiceLayer.Services.ConfigurationStorage {
    interface CreateFolderFlowAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.SimpleCreateFlowAction {
    }
    function CreateFolderFlowAction(): CreateFolderFlowAction;
    interface EditFlowActionWithSession extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.EditFlowAction {
        SessionId: string;
    }
    function EditFlowActionWithSession(): EditFlowActionWithSession;
    interface EditRuleAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseEditRuleAction {
    }
    function EditRuleAction(): EditRuleAction;
    interface EditTruthTableAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseEditRuleAction {
    }
    function EditTruthTableAction(): EditTruthTableAction;
    interface EditRuleTableAction extends $D.Framework.ServiceLayer.Services.ConfigurationStorage.BaseEditRuleAction {
    }
    function EditRuleTableAction(): EditRuleTableAction;
}
declare module $D.Framework.Design.Text.Cells {
    interface CellsMergeResult extends $D.Framework._DBO {
        Template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        Data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
    }
    function CellsMergeResult(): CellsMergeResult;
}
declare module $D.Framework.Design.DataStructure {
    interface EntityDataStructure extends $D.Framework.Design.DataStructure.SimpleDataStructure {
        ShowAddAction: boolean;
        OverrideCreateActionName: boolean;
        CreateActionName: string;
        ShowDescriptionOnAdd: boolean;
        ShowDeleteAction: boolean;
        ShowEditAction: boolean;
    }
    function EntityDataStructure(): EntityDataStructure;
    interface FlowExecutionExtensionDataStructure extends $D.Framework.Design.DataStructure.SimpleDataStructure {
    }
    function FlowExecutionExtensionDataStructure(): FlowExecutionExtensionDataStructure;
    interface CsvDataStructure extends $D.Framework.Design.DataStructure.SimpleFlowStructure {
        CsvData: number[];
        FileType: $D.Framework.Design.Flow.CoreSteps.StandardSteps.CsvFileType;
        Separator: $D.Framework.Design.Flow.CoreSteps.CSV.CSVSeparator;
        WorksheetIndex: any;
        HasTitles: boolean;
        OriginalFieldNames: $D.Framework.Design.DataStructure.OriginalNamePair[];
        IgnoreEmptyRows: boolean;
    }
    function CsvDataStructure(): CsvDataStructure;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ReportCells extends $D.Framework._DBO {
        Template: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        Cells: $D.Framework.Design.Report.Service.Comunication.ReportCellOutput[];
    }
    function ReportCells(): ReportCells;
}
declare module $D.Framework.Design.Report.Matrix {
    interface MatrixDefinition extends $D.Framework.Design.Report.Service.Comunication.RemoteEditableObject {
        RowDefinitions: $D.Framework.Design.Report.Matrix.AbstractDimension[];
        ColDefinitions: $D.Framework.Design.Report.Matrix.AbstractDimension[];
        HiddenRows: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        HiddenColumns: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        OutputBlankAsNull: boolean;
        PrioritizeRowFormatting: boolean;
        GrandTotalRows: boolean;
        GrandTotalColumns: boolean;
        ShowIntersectionData: boolean;
        LimitItemsPerIntersection: boolean;
        MaxIntersectionData: number;
        MaxTotalIntersectionData: number;
        AllowEditIntersectionData: boolean;
        IntersectionText: string;
        IntersectionSummaryText: string;
        IntersectionTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        SummaryTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        LimitRowsAndColumns: boolean;
        MaxRows: number;
        MaxColumns: number;
    }
    function MatrixDefinition(): MatrixDefinition;
    interface Output extends $D.Framework._DBO {
        Error: string;
        Rows: any;
        Columns: any;
        IntersectionData: any;
        HiddenRows: any;
        HiddenColumns: any;
        ShowIntersectionData: boolean;
        IntersectionTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        SummaryTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        DataLimitExceed: boolean;
    }
    function Output(): Output;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface MoveDatabaseDefinitionToFolderAction extends $D.Framework.ServiceLayer.Actions.Common.MoveEntityToFolderAction {
    }
    function MoveDatabaseDefinitionToFolderAction(): MoveDatabaseDefinitionToFolderAction;
    interface ViewReadOnlyFormAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ViewOnlyFormInstruction: $D.Framework.Design.Flow.Service.Execution.ViewOnlyFormInstruction;
        AssignmentID: string;
    }
    function ViewReadOnlyFormAction(): ViewReadOnlyFormAction;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface CityInfo extends $D.Framework.ServiceLayer.AbstractFolderEntity {
        CityID: string;
        EntityName: string;
        CityCode: string;
        EntityDescription: string;
        CountyInfo: $D.Framework.ServiceLayer.Services.Organization.CountyInfo;
        StateInfo: $D.Framework.ServiceLayer.Services.Organization.StateInfo;
        CountryInfo: $D.Framework.ServiceLayer.Services.Organization.CountryInfo;
        CountyName: string;
        StateName: string;
        CountryName: string;
    }
    function CityInfo(): CityInfo;
}
declare module $D.Framework.Design.DataStructure {
    interface FolderExtensionDataStructure extends $D.Framework.Design.DataStructure.EntityDataStructure {
        ShowAddAction: boolean;
        CanBeSetByUser: boolean;
        AddCommentAction: boolean;
        AddDocumentAction: boolean;
        ManagePermissions: boolean;
        MoveAction: boolean;
        AddSubFolder: boolean;
        AddToDo: boolean;
        ChangeNameAction: boolean;
        LockScreenOnTimeout: boolean;
        DefaultActionBarVisibility: $D.Framework.ServiceLayer.Services.Folder.PortalActionsBarVisibility;
        ShowInTree: boolean;
        ShowDefaultFolderPages: boolean;
        DefineDefaultPageName: boolean;
        DefaultPageName: string;
    }
    function FolderExtensionDataStructure(): FolderExtensionDataStructure;
}
declare module $D.Framework.Design.Report {
    interface ReportOutputData extends $D.Framework._DBO {
        Columns: $D.Framework.Design.Report.ColumnData[];
        ReportGroups: $D.Framework.Design.Report.ReportGroup[];
        GroupBy: string[];
        Filters: $D.Framework.Design.Report.FilterData[];
        AllData: $D.Framework.Design.Flow.CoreSteps.StandardSteps.DynamicDataRow[];
        Cells: $D.Framework.Design.Report.Service.Comunication.ReportCells;
    }
    function ReportOutputData(): ReportOutputData;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ResultData extends $D.Framework._DBO {
        Rows: $D.Framework.Design.Report.Service.Comunication.ReportRow[];
        Columns: $D.Framework.Design.Report.Service.Comunication.ReportColumnInfo[];
        UsePaging: boolean;
        RowsPerPage: number;
        TotalRows: number;
        SubTotals: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        Order: $D.Framework.Data.ORMapper.ORMResultOrder;
        OrderByField: string;
        ReportAggregationData: $D.Framework.Design.Report.Matrix.Output;
        PagesCount: number;
    }
    function ResultData(): ResultData;
    interface ReportViewResult extends $D.Framework._DBO {
        Rows: $D.Framework.Design.Report.Service.Comunication.ReportRow[];
        ChangedRows: $D.Framework.Design.Report.Service.Comunication.DeltaReportRow[];
        RowDeltasComputed: boolean;
        JsonRows: any;
        TextOutput: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[];
        TextChanges: $D.Framework.Design.Report.Service.Comunication.DeltaReportTextOutput[];
        TextDeltasComputed: boolean;
        BlurbOutput: $D.Framework.Design.Report.Service.Comunication.ReportTextOutput[];
        ReportCells: $D.Framework.Design.Report.Service.Comunication.ReportCells;
        RowCount: number;
    }
    function ReportViewResult(): ReportViewResult;
}
declare module $D.Framework.ServiceLayer.Services.Organization {
    interface AddressDetailOwner extends $D.Framework._DBO {
        CountryInfos: $D.Framework.ServiceLayer.Services.Organization.CountryInfo[];
        StateInfos: $D.Framework.ServiceLayer.Services.Organization.StateInfo[];
        CityInfos: $D.Framework.ServiceLayer.Services.Organization.CityInfo[];
        CountyInfos: $D.Framework.ServiceLayer.Services.Organization.CountyInfo[];
    }
    function AddressDetailOwner(): AddressDetailOwner;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface ViewReportResultData extends $D.Framework.Design.Report.Service.Comunication.ResultData {
        ClientGroupBy: string[];
        Charts: $D.Framework.Design.Report.ChartInfo[];
        EnableSnapshot: boolean;
        TakeSnapshotOnSchedule: boolean;
        SnapshotScheduleStartImmediately: boolean;
        SnapshotScheduleStartOn: Date;
        SnapshotScheduleHours: number;
        SnapshotScheduleMinutes: number;
        SnapshotScheduleDays: number;
        ErrorMessage: string;
    }
    function ViewReportResultData(): ViewReportResultData;
    interface ReportViewContext extends $D.Framework.Design.Report.Service.Comunication.ReportViewInfo {
        FolderId: string;
        ContextId: string;
        IsFavorite: boolean;
        Configuration: $D.Framework.Design.Report.Service.Comunication.ReportViewConfiguration;
        HasChangesInConfiguration: boolean;
        ReportViewResult: $D.Framework.Design.Report.Service.Comunication.ReportViewResult;
        ReportAggregationData: $D.Framework.Design.Report.Matrix.Output;
        SubTotals: $D.Framework.Design.Report.SubcalcFields.SubCalcFieldDefinition[];
        Charts: $D.Framework.Design.Report.ChartInfo[];
        MatrixOutput: $D.Framework.Design.Report.Matrix.Output;
        HiddenDimensions: $D.Framework.ServiceLayer.Services.ContextData.DataPair[];
        ShowMatrixIntersectionData: boolean;
        RuntimeFiltersCount: number;
        Tiles: $D.Framework.Design.Report.Tiles.Tile[];
        CalendarItems: $D.Framework.Design.Report.Calendar.CalendarItem[];
        DataViewRowCount: number;
        InMemoryRowCount: number;
        CreatedByUser: string;
        GroupLevelInfo: $D.Framework.Design.Report.ReportGroupLevelInfo[];
        UseMainGroupingInTextViews: boolean;
        UseAggregationsInTextViews: boolean;
        AutoPaging: boolean;
        PageIndex: number;
        PageCount: number;
        UnknownPageCount: boolean;
        RuntimeFilters: string[];
        SharedFilters: string[];
        DefaultView: $D.Framework.Design.Report.ReportView;
        GroupActionBehavior: $D.Framework.Design.Report.ReportGroupActionBehavior;
        FlowGroupActions: $D.Framework.Design.Report.FlowGroupAction[];
        ReportGridType: any;
        GridIconType: any;
        IsAlternateRowsBackground: boolean;
        SelectedRowsStyle: any;
        NewGridActionType: any;
        ActionButtonName: string;
        IsRowNumerationEnable: boolean;
        ShowSelectedRowIndicator: boolean;
        RowRightClickActionType: any;
        RowLeftClickActionType: any;
        IsGroupingEnable: boolean;
        IsSortingEnable: boolean;
        IsGridStretchModeEnable: boolean;
        RightIndicatorDisplay: any;
        ShowGroupTitle: any;
        AddColumnsOption: any;
        CanAddMultipleColumns: boolean;
        RuntimeFiltersDisplayMode: any;
        IsEditable: boolean;
        OverrideDrillDownTitle: boolean;
        DrillDownTitle: string;
        OverrideDrillDownReportTitle: boolean;
        MaxNumberOfEventsInCell: number;
        DrillDownReportTitle: string;
        AggregationData: $D.Framework.Design.Report.Service.Comunication.AggregationDataInfo;
        ParentField: string;
        ChildField: string;
        OverrideRunTimeFilterDialogTitle: boolean;
        RunTimeFilterDialogTitle: string;
        IsLastPage: boolean;
        OverrideDisplayOfNullValues: boolean;
    }
    function ReportViewContext(): ReportViewContext;
    interface ReportSnapshotContext extends $D.Framework.Design.Report.Service.Comunication.ResultData {
        ReportId: string;
        SnapshotName: string;
    }
    function ReportSnapshotContext(): ReportSnapshotContext;
}
declare module $D.Framework.ServiceLayer.Actions.Common {
    interface EntityBrowseAction extends $D.Framework.ServiceLayer.Actions.BaseActionType {
        ResultData: $D.Framework.Design.Report.Service.Comunication.ResultData;
    }
    function EntityBrowseAction(): EntityBrowseAction;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface DesignReportResultData extends $D.Framework.Design.Report.Service.Comunication.ViewReportResultData {
        SQLText: string;
        Validation: $D.Framework.Design.Report.Service.Comunication.ReportValidationInfo;
        Name: string;
        Description: string;
        GenerateRunApi: boolean;
        GeneratedReportApiName: string;
        GenerateRunStep: boolean;
        SpecifyOutputTypeName: boolean;
        GeneratedDataTypeName: string;
        InlineFields: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[];
        MatrixDefinition: $D.Framework.Design.Report.Matrix.MatrixDefinition;
        CellTemplate: $D.Framework.Design.Report.Matrix.IntersectionTemplate.TableTemplate;
        GroupLevelInfo: $D.Framework.Design.Report.ReportGroupLevelInfo[];
        UseMainGroupingInTextViews: boolean;
        UseAggregationsInTextViews: boolean;
    }
    function DesignReportResultData(): DesignReportResultData;
    interface ViewReportContext extends $D.Framework.Design.Report.Service.Comunication.BaseReportContext {
        IsReportFavorite: boolean;
        RTEFiltersContextId: string;
        Preview: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData;
        ReportName: string;
        HasMatrix: boolean;
        OutputFlowReferences: $D.Framework.Data.DataTypes.FlowReference[];
        HideDefaultOutputHandling: boolean;
    }
    function ViewReportContext(): ViewReportContext;
    interface OutputReportResultData extends $D.Framework._DBO {
        ReportName: string;
        ReportDescription: string;
        Folder: string;
        ViewResultData: $D.Framework.Design.Report.Service.Comunication.ViewReportResultData;
    }
    function OutputReportResultData(): OutputReportResultData;
}
declare module $D.Framework.Design.Report.Service.Comunication {
    interface DesignReportContext extends $D.Framework.Design.Report.Service.Comunication.BaseReportContext {
        Filters: $D.Framework.Design.Report.Service.Comunication.ReportElementInfo[];
        AvailableFields: $D.Framework.Design.Report.Service.Comunication.ReportFieldInfo[];
        Preview: $D.Framework.Design.Report.Service.Comunication.DesignReportResultData;
        Summary: string;
        BlurbSummary: string;
        TextSummary: string;
        CalendarSummary: string;
        IsRecoveredContext: boolean;
        FolderId: string;
        NotLoadedFilters: string[];
        ShowDataView: boolean;
        ShowMatrixView: boolean;
        ShowRowSummaryView: boolean;
        ShowBlurbSummaryView: boolean;
        ShowTextSummaryView: boolean;
        ShowCellSummaryView: boolean;
        ShowCalendarSummaryView: boolean;
        CanUseCalendar: boolean;
        ShowTileView: boolean;
        CanAddMatrixView: boolean;
        CanAddRowSummaryView: boolean;
        CanAddBlurbSummaryView: boolean;
        CanAddTextSummaryView: boolean;
        CanAddCellSummaryView: boolean;
        CanAddCalendarSummaryView: boolean;
        CanAddTileView: boolean;
        CanAddChartView: boolean;
        CanUseTiles: boolean;
        CanAddDataSource: boolean;
        CanRemoveDataSource: boolean;
        ShowHierarchicalView: boolean;
        ShowColumnsView: boolean;
        AutoRefreshPreview: boolean;
    }
    function DesignReportContext(): DesignReportContext;
}
