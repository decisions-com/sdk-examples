/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare var portalSetup: UserPortalSettingInformation;
declare function LoadScript(scriptName: any): void;
declare function loadResourceIfNotInDom(urlsArray: any, isScripts: any): void;
declare function lockPortal(elem: any): void;
declare var timer: any;
declare var tempTimer: any;
declare var isTempTimerSuspended: any;
declare function setResetTimer(): void;
declare function resetLockPortalTimer(): void;
declare function getLockTime(): number | false;
declare function PortalSettingChangedMessageReceive(data: any): void;
declare function setClientEventHeader(xhr: any): void;
declare function IsValidEmailAddress(emailAddress: any): boolean;
declare function StripInvalidCharectersFromVariableName(string: any): any;
/**
 * Get the max z-index on the specified element
 * @param searchElem
 */
declare function GetMaximumZIndexForElement(searchElem: JQuery): number;
declare var GenerateGuid: () => string;
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
