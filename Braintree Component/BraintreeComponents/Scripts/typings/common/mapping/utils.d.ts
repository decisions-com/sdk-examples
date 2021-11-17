declare namespace $DP.Common {
    interface ParsedMappingAction {
        actionName: string;
        category: string;
        mappingValue: string;
        mappingType: string;
    }
    function parseMappingType(mappingAction: string, isInputMapping?: boolean): ParsedMappingAction;
    function createMappingActions(mappingActions: string[], actionFunc: (action: ParsedMappingAction, e: any) => void): any[];
}
