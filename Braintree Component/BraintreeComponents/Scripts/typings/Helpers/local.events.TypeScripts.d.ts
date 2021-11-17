/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.LocalEvents {
    class Helper {
        static RegisterControls: any[];
        static add(id: any): void;
        static TriggerResizeEvent(elementId: any, newHeight: any, newWidth: any, element: any): void;
        static showTemporaryLoading(parentElem: any): void;
        static hideTemporaryLoading(parentElem: any): void;
    }
}
declare namespace $DP.Local.DataTypes {
    class RuntimeFilterChangedMessage {
        FilterName: any;
        PropertyName: any;
        Value: any;
    }
    class RuntimeFiltersChangedMessage {
        FolderId: any;
        Messeges: any[];
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
