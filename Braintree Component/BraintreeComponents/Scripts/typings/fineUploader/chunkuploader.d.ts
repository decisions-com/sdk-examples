declare namespace $DP.Helpers {
    class ChunkUploader {
        private fileIndex;
        private file;
        private chunkSize;
        private callBacks?;
        private isPersistentFile?;
        private serviceClient;
        private chunkIterator;
        private uploaded;
        private fileId;
        private deferred;
        private isCanceled;
        private uploadInChunk;
        constructor(fileIndex: number, file: File, chunkSize: any, callBacks?: FineUploaderCallBack, isPersistentFile?: boolean);
        upload(): JQueryPromise<any>;
        get isUploaded(): boolean;
        cancelUpload(): void;
        private createFinishRequest;
        private createChunkUploadRequest;
        private onError;
        private onProgress;
        private onComplete;
        private run;
        private createChunkIterator;
        private getChunk;
        private getCountChunks;
        private toNumbersArray;
    }
}
