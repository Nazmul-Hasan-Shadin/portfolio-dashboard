"use cliet";
import { InboxOutlined } from "@ant-design/icons";
import { Form } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { UploadProps } from "antd";
const props: UploadProps = {
  name: "file",

  onChange(info) {
    console.log(info);
  },
};

const PImage = ({ label, name }: { label: string; name: string }) => {
  const { setValue } = useFormContext();
  const props: UploadProps = {
    name: "file",

    onChange(info) {
      console.log(info);
      const fileList = info.fileList;
      setValue(name, fileList.length ? fileList[0].originFileObj : null);
    },
  };

  return (
    <div className="my-3 ">
      <Controller
        name={name}
        render={() => (
          <Form.Item label={label} layout="vertical">
            <Dragger {...props}>
              <p>
                <InboxOutlined />
              </p>

              <p>Clik or Drage File</p>
              <p>
                You can upload file by <br /> click on it{" "}
              </p>
            </Dragger>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PImage;
