declare namespace $DP.Portal {
    interface SlackMessage {
        userId: string;
        text: string;
        name?: string;
        createdOn: Date;
        channelId?: string;
    }
    interface SupportChatData {
        chatRoomName: string;
        chatChannelId: string;
        chatUserId: string;
        userEmail: string;
    }
    enum UserPermission {
        Allow = 0,
        Deny = 1,
        AllowAlways = 2
    }
    export class SupportChat {
        container: JQuery;
        connected: boolean;
        isConnecting: boolean;
        isVisible: boolean;
        canShowNotAvailableMessage: boolean;
        notAvailableTimer: number;
        idleTimer: number;
        showDisclaimer: boolean;
        unreadMessageCount: number;
        socket: any;
        lastMessage: string;
        get apiUrl(): string;
        static readonly PERMISSION_KEY = "SUPPORT_CHAT_RUN_COMMAND_PERMISSION";
        static readonly storageKey = "supportChatInfo";
        get info(): SupportChatData;
        _emailValidationProcessor: $DP.PropertyGrid.Validation.BaseFormValidationProcessor;
        get emailValidationProcessor(): $DP.PropertyGrid.Validation.BaseFormValidationProcessor;
        get emailTextBox(): JQuery;
        set info(value: SupportChatData);
        get unreadMessageContainer(): JQuery;
        get groupChatIcon(): JQuery;
        get messagesContainer(): JQuery;
        get input(): JQuery;
        get endChatElement(): JQuery;
        get activeChatIconClass(): string;
        get chatRoom(): JQuery;
        get submitTicketElem(): JQuery;
        get confirmationMessageElem(): JQuery;
        get chatBody(): JQuery;
        static initialize(): SupportChat;
        activateChatIcon(): void;
        deactivateChatIcon(): void;
        askForPermission(command: string, isSQLQuery: boolean): Promise<UserPermission>;
        runCommand(data: SlackMessage): Promise<void>;
        onChatMessageRecieved(data: SlackMessage): Promise<void>;
        attachMessageListener(): void;
        initializeChatRoom(): Promise<void>;
        updateUnreadMessageCount(count: number): void;
        showNotAvailableMessage(): void;
        showIdleTimeMessage(): void;
        showErrorMessage(): void;
        fetchMessages(): Promise<SlackMessage[]>;
        showChatRoom(forceShow?: boolean): Promise<void>;
        hideChatWindow(): void;
        disconnect(): void;
        endChat(hideChatWindow?: boolean): void;
        clearLocalStorage(): void;
        updateScrollPosition(): void;
        render(): JQuery;
        addNewMessage(message: SlackMessage): JQuery;
        saveMessage(message: string, userId: string): Promise<void>;
        sendMessage(message: string, addMessage?: boolean): Promise<void>;
        hideSupportTicketForm(): void;
        showSupportTicketForm(): Promise<void>;
        showLoadingIndicator(): void;
        hideLoadingIndicator(): void;
        submitSupportTicket(): Promise<void>;
        startTimer(): void;
        stopTimer(): void;
        sendMessageFromInput(): void;
        startChat(): void;
        uploadFile(file: File | Blob, fileName?: string): Promise<void>;
        sendScreenshot(): Promise<void>;
        attachEvents(): void;
    }
    export {};
}
