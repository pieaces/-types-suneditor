declare class Suneditor {
    static create: (textAreaId: string, option: any) => editor;
}
type UploadState = 'delete' | 'create' | 'update'
interface editor {
    setContents: (text: string) => void;
    getContents: () => string;
    onImageUpload?: (targetImgElement:HTMLElement, index: number, state: UploadState, imageInfo:Suneditor.ImageInfo, remainingFilesCount:number) => void;
    getImagesInfo: () => any;
    insertImage: (fileList: FileList) => void;
}

declare namespace Suneditor {
    interface ImageInfo {
        element: HTMLElement;
        name: string;
        src: string;
        size: number;
        index: number;
    }
}

export = Suneditor;