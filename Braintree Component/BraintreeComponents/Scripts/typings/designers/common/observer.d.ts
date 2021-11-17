/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Common {
    class Observer {
        private instance;
        private func;
        constructor(instance: any, func: (...p: any[]) => void);
        get Instance(): any;
        get Function(): (p: any) => void;
    }
    class Subject {
        private observers;
        add(observer: Observer): void;
        remove(observer: Observer, throwIfNotFound?: boolean): void;
        plus(instance: any, func: (p: any) => void): void;
        minus(instance: any, func: (p: any) => void, throwIfNotFound?: boolean): void;
        execute(parms?: any): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
