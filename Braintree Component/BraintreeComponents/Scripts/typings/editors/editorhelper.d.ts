declare namespace $DP.UI.Controls {
    class EditorHelper {
        static GetValue<T>(nodeInfo: NodeInfo, convertFromDynamicEnum?: boolean): T;
        static GetConfigurationValue<T>(dataHolder: DataPair[] | NodeInfo, key: string): T;
    }
}
