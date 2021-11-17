/// <reference path="../../typings/core/generated/ConfigurationStorageService.d.ts" />
/// <reference path="../designer.loaders.d.ts" />
declare namespace $DP.Designers.Creation {
    interface IShowCreateRegistrationDialogProps {
        actionKey: string;
        folderId: string;
        dialogTitle: string;
    }
    export function showCreateRegistrationDialog({ actionKey, folderId, dialogTitle }: IShowCreateRegistrationDialogProps): Promise<void>;
    export {};
}
