"use client";
import PForm from "@/components/Form/PForm";
import PImage from "@/components/Form/PImage";
import PInput from "@/components/Form/PInput";
import PTextarea from "@/components/Form/PTextarea";
import { Button, Col, Row } from "antd";
import axios from "axios";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

const AddProjectPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formInfo = new FormData();

    const projectData = {
      name: data.name,
      projectLink: data.projectLink,

      description: data.description,
    };

    formInfo.append("data", JSON.stringify(projectData));

    formInfo.append("file", data.image);

    // console.log(formData, "dimfirmdata");

    // for (let [key, value] of formInfo.entries()) {
    //   console.log(key, value);
    // }

    try {
      const response = await axios.post(
        "https://portfolio-backend-with-prisma.vercel.app/api/v1/create-project",
        formInfo,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success === true) {
        toast("skill has added!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <PForm onSubmit={onSubmit}>
      <div className="h-[50vh] ">
        <div className="space-y-5 bg-white h-full p-2 ">
          <Row gutter={[18, 24]}>
            <Col span={12}>
              <PInput name="name" label="Project Name" />
            </Col>
            <Col span={12}>
              <PInput name="projectLink" label="Live link" />
            </Col>

            <Col span={12}>
              <PImage label="Upload Image " name="image" />
            </Col>
            <Col span={12}>
              <PTextarea name="description" label="Description" />
            </Col>
          </Row>
        </div>
      </div>
      <Button className="w-full block" htmlType="submit" color="default">
        Submit
      </Button>
    </PForm>
  );
};

export default AddProjectPage;
