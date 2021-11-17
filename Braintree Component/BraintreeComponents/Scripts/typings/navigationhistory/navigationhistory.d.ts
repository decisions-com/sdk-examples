declare namespace $DP.Navigation {
    class History {
        static lastUrl: string;
        static pushState(stateObj: any, pageTitle: string, url: string): void;
    }
}
