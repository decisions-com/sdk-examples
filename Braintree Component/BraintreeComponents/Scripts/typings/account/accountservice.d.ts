declare namespace $DP.LocalServices {
    class AccountService {
        static Account: $D.Framework.ServiceLayer.Services.Accounts.Account;
        static AccountImpersonations: $D.Framework.ServiceLayer.Services.Folder.EntityIdentifier[];
        static IsImpersonating: boolean;
        static CanImpersonate(): boolean;
        static InitializeService(portalInfo: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo, isImpersonating: boolean): void;
        static ImpersonateUser(userName: string): void;
        static ImpersonateAccount(accountId: string): void;
        static RestartPortal(): void;
        static CancelImpersonation(): void;
        static OnActionCompleted(message: $D.Framework.Utilities.Messaging.ActionMessage): void;
        static FetchAccount(): $D.Framework.ServiceLayer.Services.Accounts.Account;
    }
}
