import { addPhotoToArray, removePhotoFromArray } from "@/helpers/helpers";
import { Form, Upload } from "antd";
import { useState } from "react";

interface imageUploadProps {
    fileList: any;
    imageUploadError: string;
    setFileList: (value: any) => void;
}

const ImageUpload = ({
    fileList,
    setFileList,
    imageUploadError,
}: imageUploadProps) => {
    return (
        <Form.Item label="Photos" valuePropName="fileList">
            <Upload
                customRequest={(info) => {
                    setFileList(addPhotoToArray(info, fileList));
                }}
                fileList={fileList}
                listType="picture-card"
                onRemove={(file) =>
                    setFileList(removePhotoFromArray(file, fileList))
                }
                // beforeUpload={(file) => {
                //     const isJPG =
                //         file.type === "image/jpeg" || file.type === "image/png";
                //     if (!isJPG) {
                //         setError("You can only upload JPG or PNG file!");
                //         return false;
                //     } else {
                //         return true;
                //     }
                // }}
            >
                <button
                    style={{
                        border: 0,
                        background: "none",
                    }}
                    type="button"
                >
                    <div
                        style={{
                            marginTop: 8,
                        }}
                    >
                        Upload
                    </div>
                </button>
            </Upload>
            <span className="text-red-500">{imageUploadError}</span>
        </Form.Item>
    );
};

export default ImageUpload;
