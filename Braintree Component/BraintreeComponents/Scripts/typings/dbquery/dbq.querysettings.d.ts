/// <reference path="../common/utils/string.utils.d.ts" />
declare namespace $DP.DBQuery {
    class SettingsManager {
        private settings;
        constructor();
        getColumnWidth(query: string, fieldName: string): number;
        setColumnWidth(query: string, fieldName: string, width: number): void;
        save(): void;
        private load;
    }
}
