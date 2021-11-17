/// <reference path="../../typings/core/generated/oauthtokenservice.d.ts" />
declare namespace $DP.ActionHandlers {
    import OAuthTokenAction = $D.OAuth.CreateOAuthTokenAction;
    import OAuthProvider = $D.OAuth.OAuthProvider;
    import BaseActionType = $D.Framework.ServiceLayer.Actions.BaseActionType;
    class StartOAuthRequest {
        private oAuthTokenAction;
        private allProviders;
        private message;
        private uniqueId;
        private folderId;
        private entityId;
        private action;
        private element;
        private tokenNameTextBox;
        private resourceIdentifierTextBox;
        private scopeTextBox;
        private userNameTextBox;
        private passwordTextBox;
        private additionalValuesTextBox;
        private statusDiv;
        private manualSettingsLink;
        private defaultKeyCheckBox;
        private authorizeURLRow;
        private authorizeURLTextbox;
        private oAuthRequestButtonDiv;
        private tokenData;
        private isResponseComplete;
        private providerString;
        private oAuthFlowString;
        private responseTypeString;
        private requestTokenCompleteEventId;
        private requestTokenPendingEventId;
        private requestCompleteToken;
        private requestPendingToken;
        provider: OAuthProvider;
        constructor(oAuthTokenAction: OAuthTokenAction, allProviders: OAuthProvider[], message: string, uniqueId: string, folderId: string, entityId: string, action: BaseActionType);
        initialize(): void;
        onProviderValueChange(data: any): void;
        updateOAuth2Visibility(): void;
        updatePasswordGrantVisibility(): void;
        updateResponseTypeVisibility(): void;
        onOAuthFlowValueChange(data: any): void;
        onResponseTypeValueChange(data: any): void;
        initListener(): void;
        unregisterListener(): void;
        unregisterCompleteListener(): void;
        unregisterPendingListener(): void;
        areManualSettingSpecified(): boolean;
        areParametersSpecified(): boolean;
        attachEvants(): void;
        getConsumerKey(): string;
        getConsumerSecretKey(): string;
    }
}
