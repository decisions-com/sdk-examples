declare namespace $DP.Helpers {
    class ClusteringHelper {
        static XPlatformServerIds: string[];
        static XPlatformServerID: any;
        static addXPlatformServerId(xhr: XMLHttpRequest): void;
        static getClientSideClusteringInfo(): string;
        static initialize(): void;
    }
}
