/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="../typings/core/generated/objectlockservice.d.ts" />
declare namespace $DP.UI.Locking {
    interface lockingOptions {
        lockId: string;
        elementIdToLock?: string;
        title?: string;
        onLoad: () => void;
        onNoAction?: () => void;
        showSpinner?: boolean;
        useAddDisposeListener?: boolean;
        checkIfLockedByMe: boolean;
        breakLock: boolean;
    }
    function checkLockObject({ lockId, title, elementIdToLock, onLoad: _onLoad, onNoAction, showSpinner, useAddDisposeListener, checkIfLockedByMe, breakLock }: lockingOptions): Promise<void>;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
