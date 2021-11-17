declare namespace $DP.Utils.Cache {
    function memoize(fn: any): () => any;
    class Store {
        static values: {};
        static get<T>(key: string): T;
        static put<T>(key: string, data: T): T;
        static delete(key: string): void;
    }
}
