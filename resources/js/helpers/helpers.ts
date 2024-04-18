export const addPhotoToArray = (info: any, fileList: any) => {
    return (fileList: any) => [...fileList, info.file];
};

export const removePhotoFromArray = (file: any, fileList: any) => {
    return fileList.filter((item: any) => item !== file);
};
