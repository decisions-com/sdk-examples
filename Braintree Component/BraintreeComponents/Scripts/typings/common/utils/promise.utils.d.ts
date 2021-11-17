declare namespace $DP.PromiseUtils {
    function toPromise<T>($promise: JQueryGenericPromise<T>): Promise<T>;
}
