/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../common/graphics.d.ts" />
/// <reference path="form.utils.d.ts" />
declare namespace $DP.Designers.Forms {
    import Point = $DP.Common.Point;
    class SurfaceInteractionTool {
        private mouseTool;
        pickMouseTool(context: MouseContext): void;
        onSurfaceMouseDown(point: Point): boolean;
        onSurfaceMouseMove(point: Point): boolean;
        onSurfaceMouseUp(point: Point): boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
