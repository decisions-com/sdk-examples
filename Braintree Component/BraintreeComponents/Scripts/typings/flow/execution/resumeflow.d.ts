/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Controls.Flow.Execution {
    class ResumeFlow {
        static resume(flowTrackingId: string, instanceId: string): JQueryPromise<string>;
        static resumeOnDialog(flowTrackingId: string, instanceId?: string): JQueryPromise<string>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
