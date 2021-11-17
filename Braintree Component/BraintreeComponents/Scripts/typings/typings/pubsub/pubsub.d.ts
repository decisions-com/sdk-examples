interface PubSubStatic {

    GetRegisterMessegeeNames();

    publish(message, data);

    publishSync(message, data);

    subscribe(message: string, func: (message: string, data: any) => any): string;

    unsubscribe(token: string): string | boolean;

}

declare module "ClientEvents" {
    export = PubSub;
}

declare var PubSub: PubSubStatic;