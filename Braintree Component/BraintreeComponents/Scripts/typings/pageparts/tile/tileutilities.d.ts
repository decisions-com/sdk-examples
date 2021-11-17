/**
* Author:akash.singh@waveinfotech.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Components.Page.Tiles {
    interface TileActionExecutionOptions {
        entityId?: string;
        entityTypeName?: string;
        url?: string;
        folderId?: string;
        pageName?: string;
        flowId?: string;
        dataBusName?: string;
        dataBusValue?: any;
        element?: JQuery;
        points?: {
            Left: number;
            Top: number;
        };
    }
    interface IEventOptions {
        holder: JQuery;
        flowId: string;
        refreshOnTreeChange: boolean;
        refreshOnCurrentFolderChange: boolean;
        refreshOnAnyFolderChange: boolean;
        refreshOnContainedEntityChange: boolean;
        updateDatafromSelectionBus: boolean;
        selectionBusName: string;
        componentId: string;
        instanceId: string;
        isDesingTime: boolean;
    }
    interface IEventListenerOptions extends IEventOptions {
        onRefresh: () => Promise<void>;
        onNavigationParameterChanged: (value: any) => void;
    }
    enum TilesFillMode {
        Fit = 0,
        Grow = 1
    }
    function executeTileAction(options: TileActionExecutionOptions): Promise<void>;
    function attachClientEventListener(options: IEventListenerOptions): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
