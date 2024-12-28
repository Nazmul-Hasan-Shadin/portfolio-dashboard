"use client";
import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const PInput = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className="my-3">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item layout="vertical" label={label}>
            <Input {...field} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PInput;
