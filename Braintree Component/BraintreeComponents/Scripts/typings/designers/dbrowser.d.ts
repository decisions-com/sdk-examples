/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/goJS/gojs.d.ts" />
/// <reference path="../typings/core/generated/ModuleResourceService.d.ts" />
/// <reference path="../dialog/dialog.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../actions/actionExecuter.d.ts" />
declare module $DP {
    class DependencyBrowser {
        static show(host: JQuery, entityId: string, action: $D.Framework.ServiceLayer.Services.Module.BrowseDependenciesAction): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
