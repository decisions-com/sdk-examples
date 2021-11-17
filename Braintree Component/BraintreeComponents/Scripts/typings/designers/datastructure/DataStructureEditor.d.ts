/**
 * Author:akash.singh@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.DataStructure {
    interface comboOptions {
        row: JQuery;
        onSelected: (type: any) => void;
        selectedType?: string;
        onCreateNew?: () => void;
        onCreateValueList?: () => void;
    }
    function showDataStructureEditorInDialog({ entityId, entityTypeName }: {
        entityId: any;
        entityTypeName: any;
    }, onclose?: any): void;
    function showDataStructureCreatorInDialog({ entityId, entityTypeName }: {
        entityId: any;
        entityTypeName: any;
    }, onclose?: any): void;
}
declare class SessionHelper {
    static SESSIONID_SEPARATOR: string;
    static activeElementStyleClass: string;
    static validationClass: string;
    static VALIDATION_HOLDER: string;
    static typeColumnMinWidth: number;
    static queue: JQueryDeferred<any>[];
    static propertyGrid: $DP.PropertyGrid.PropertyGrid;
    static setValidationClass(element: any, hasValidationIssues: any): void;
    static updateQueue(): void;
    static clearDataMembersValidationStyle(): void;
    static defaultDelay: number;
    static delay: (callback: any, ms: any, id: any) => void;
    static clearActiveElement(rootSessionId: any): void;
    static isActiveElement(element: JQuery): boolean;
    static makeActive(element: JQuery): void;
    static updatePropertyGrid(contextId: string, sessionId: string): Promise<void>;
    static updateValidationsStyleOnElement(issues: $D.Framework.ValidationIssue[]): void;
    static createTypeComboPicker(options: $DP.DataStructure.comboOptions): $DP.EntityPicker.ComboPicker;
    static selectedDataMember: DataMemberEditor;
    static selectedDataStructure: DataStructureEditor;
    static deleteBtn: JQuery;
    static propertyGridContainer: JQuery;
    static DSQuickAdd: JQuery;
    static dataMembersContainer: JQuery;
    static mainEditor: DataStructureEditor;
    static fieldTypes: any[];
    static dSSorting: JQuery;
    static escapeStr(string: any): any;
    static endSession(): void;
    static editingSessions: {};
    static complexTypeEditorTemplate: (model: any) => string;
    static valueListEditorTemplate: (model: any) => string;
    static valueListValueEditorTemplate: (model: any) => string;
    static searchTemplate: () => string;
    static dataMemberRowTemplate: (model: any) => string;
    static newDataMemberRowTemplate: (sessionId: string) => string;
    static dataStructureEditor: (model: any) => string;
    static defaultTypesTemplate: () => string;
}
interface RefereshDataMemberOptions {
    sessionId?: string;
    dataMemberId?: string;
}
declare class DataMemberEditor {
    model: DataMemberSessionValue;
    private comboBox;
    element: JQuery;
    private parentDsEditor;
    private childDsEditor;
    private complexTypeEditor;
    private complexTypeCaret;
    private nameInput;
    dataTypeInput: JQuery;
    private isListInput;
    private relationshipNameNode;
    hasDefaultName: boolean;
    level: number;
    get sessionId(): string;
    get rootSessionId(): string;
    set relationshipName(value: string);
    get relationshipName(): string;
    set typeName(value: string);
    get parentDSEditor(): DataStructureEditor;
    get childDSEditor(): DataStructureEditor;
    get typeName(): string;
    set isList(value: boolean);
    get isList(): boolean;
    get dataMemberId(): string;
    set isComplexType(value: boolean);
    get isComplexType(): boolean;
    get memberTypeSessionId(): string;
    changed(pName: any, value: any): void;
    constructor(element: JQuery, model: DataMemberSessionValue, level: number, parentDsEditor: DataStructureEditor);
    private getInputElement;
    private getElement;
    _loadingComplexType: boolean;
    loadingElement: JQuery;
    set loadingComplexType(value: boolean);
    get loadingComplexType(): boolean;
    set isEditingComplexType(value: boolean);
    get isEditingComplexType(): boolean;
    get childDSDefaultName(): string;
    getComplexTypeEditor(): JQueryDeferred<any>;
    getNewComplexTypeEditor(isEnumList?: boolean): JQueryDeferred<any>;
    addValueListEditor(dsSessionValue: any): void;
    addDsEditor(dsSessionValue: any): void;
    removeElement(): void;
    removeDsEditor(): void;
    setDataMemberRowEvents(): void;
    private makeActive;
    private hideCaret;
    private updateChildDataStructureName;
    private setValueListDataType;
    simpleTypes(): {
        name: string;
        id: string;
    }[];
    updateDsEditor(): void;
    setDataMemberType: (type: string) => void;
    setDataMemberValue(fieldName: any, value: any, isCreatingNewType?: boolean): JQueryDeferred<any>;
    getDuplicateDataMembers(): DataMemberEditor[];
    editDataMember(): void;
    refreshDataMember(options?: RefereshDataMemberOptions): Promise<any>;
    deleteDataMember(): void;
}
declare class DataStructureEditor {
    model: DataStructureSessionValue;
    dataMembers: DataMemberEditor[];
    parent: DataMemberEditor;
    private dataStructure;
    dataStructureNameEditor: JQuery;
    dataStructureNameInput: JQuery;
    dataMembersEditors: JQuery;
    private tbody;
    private _level;
    private enumDataTypeNameInput;
    private enumListValueHolderTextarea;
    private enumDataTypeHolder;
    promise: JQueryDeferred<any>;
    private typingTimer;
    hasDefaultName: boolean;
    private eventToken;
    get enumDataTypeInput(): JQuery;
    get enumListValueHolder(): JQuery;
    get enumDataTypeEditor(): JQuery;
    private get nameSpace();
    private get name();
    private set name(value);
    private set level(value);
    private get level();
    get sessionId(): string;
    get rootSessionId(): string;
    get isActive(): boolean;
    get selectedDataMemberSessionId(): string;
    get dataStructureWithSelectedMember(): DataStructureEditor;
    constructor(element: JQuery, model: DataStructureSessionValue, parent: DataMemberEditor, level: number, refreshMembers?: boolean);
    private addDataMembersRow;
    private makeActive;
    private selectRow;
    private attachDataStructureEvents;
    setDataStructureName(name: string): JQueryDeferred<any>;
    changed(pName: string, value: any, editor: DataStructureEditor): void;
    simpleTypes(): {
        name: string;
        id: string;
    }[];
    editDataStructure(): Promise<any>;
    setNewDataMemberEditorEvents(editor: JQuery): void;
    attachDataMemberEvents(editor: JQuery): void;
    private getRelationshipNameInputBox;
    private getDatatypeInputBox;
    private createMemberWithRelationshipName;
    private createMember;
    private createMemberWithType;
    private validateMember;
    private checkIfNeedToAddNewRow;
    private doSorting;
    private updateEnumMembers;
    postDataMember(name: any): JQueryDeferred<any>;
    setNewDataMemberEditor(dataStructure?: DataStructureEditor): void;
    removeNewDataMemberEditor(dataStructure: DataStructureEditor): void;
    deleteDataMember(dataMember: DataMemberEditor): void;
    removeDataMemberEditor(dataMember: DataMemberEditor): void;
}
declare class DataMemberSessionValue {
    Id: string;
    private ContextId;
    private FieldType;
    RelationshipName: string;
    private IsList;
    HasValidationIssues: boolean;
    TypeName: string;
    MemberNewTypeSessionId: string;
    QuickAddSessionId: string;
    IsComplexType: boolean;
    HasValidTypeName: boolean;
    IsNewType: boolean;
    TypeId: string;
    private editors;
    get memberNewTypeSessionId(): string;
    set memberNewTypeSessionId(value: string);
    constructor(data: any);
    addEditor(editor: any): void;
    getRelationshipName(): string;
    setRelationshipName(value: any, sender: DataMemberEditor): void;
    getTypeName(): string;
    setTypeName(value: any, sender: DataMemberEditor): void;
    getIsList(): boolean;
    setIsList(value: any, sender: DataMemberEditor): void;
    getIsComplexType(): boolean;
    setIsComplexType(value: boolean, sender: DataMemberEditor): void;
    private notifyChange;
}
declare class DataStructureSessionValue {
    static DataStructureType: string;
    ContextId: string;
    SessionId: string;
    Name: string;
    NameSpace: string;
    CanChangeName: boolean;
    HasValidationIssues: boolean;
    DataMembers: DataMemberSessionValue[];
    private editors;
    isValueList: boolean;
    getEditorsCount(): number;
    constructor(data: any);
    private notifyChange;
    setName(value: string, dsEditor: DataStructureEditor): void;
    static setType(value: string, dsEditor: DataStructureEditor): void;
    addDataMember(dataMember: DataMemberSessionValue, dsEditor: DataStructureEditor): void;
    addEditor(editor: any): void;
    removeDataMember(dataMember: DataMemberSessionValue): void;
    removeEditor(editor: any): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
