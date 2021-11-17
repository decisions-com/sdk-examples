/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/FolderService.d.ts" />
declare namespace $DP.Designers.Creation {
    import CreateElementAction = $D.Framework.ServiceLayer.Services.ConfigurationStorage.CreateElementAction;
    class CreateElementRegistration {
        static handle(action: CreateElementAction): void;
        private static getHandler;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
