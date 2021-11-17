/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.ClientListener {
    enum ListenerFor {
        Control = 0,
        Other = 1
    }
    class Listener {
        static LISTENER_TYPE: string;
        ListenerName: string;
        ComponentId: string;
        CallbackFunction: any;
        ListenerFor: ListenerFor;
        _type: string;
        constructor(listenerName: any, componentId: any, callbackFunction: any, listenerFor?: any);
    }
    class EventListener {
        static Listeners: Listener[];
        static Add(listener: Listener): boolean;
        static IsListenerPresent(listener: any): boolean;
        static Remove(listener: any): boolean;
        static RemoveByComponentId(componentId: any): boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
