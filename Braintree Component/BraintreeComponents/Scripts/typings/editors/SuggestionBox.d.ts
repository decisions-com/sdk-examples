/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.UI.Controls {
    class SuggestionBox {
        $Target: JQuery;
        $AutoCompleteList: JQuery;
        constructor();
        private textBox;
        get TextBox(): JQuery;
        private onSearch;
        set OnSearch(onSearch: (request: any, response: (entity: SuggestionEntity[]) => void) => void);
        get OnSearch(): (request: any, response: (entity: SuggestionEntity[]) => void) => void;
        get Text(): string;
        set Text(text: string);
        OnSelect: (event: any, item: any) => void;
        OnOpen: (event: any, ui: any) => void;
        OnClose: (event: any, ui: any) => void;
        InitializeAutocomplete(): void;
        BuildAutoCompleteList(): JQuery;
    }
    class SuggestionEntity {
        value: string;
        label: string;
        constructor(value: string, label: string);
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
