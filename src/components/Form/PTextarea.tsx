import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { Controller } from "react-hook-form";

const PTextarea = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className="my-4">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item layout="vertical" label={label}>
            <TextArea
              {...field}
              rows={5}
              placeholder="Enter Description"
              maxLength={6}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PTextarea;
