/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $MobilePortal.Commmon.Validations {
    class ValidationBox {
        private static __instance;
        constructor();
        static get instance(): ValidationBox;
        private issues;
        private $box;
        private $items;
        private $title;
        initialize(): JQuery;
        addIssue(item: ValidationModel): void;
        removeIssue(id: string): void;
        private attachEvents;
        private onIssueAdded;
        private onIssueRemoved;
        private onIssuesUpdated;
        private updateHeight;
        private updateCount;
        private expand;
        private collapse;
        private toggle;
        private initializeValidationBox;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
