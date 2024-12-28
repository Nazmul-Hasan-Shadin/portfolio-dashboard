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

    try {
      const response = await axios.post(
        "https://portfolio-backend-with-prisma.vercel.app/api/v1/skill/add-skill",
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

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <PForm onSubmit={onSubmit}>
      <div className="h-[50vh] ">
        <div className="space-y-5 bg-white h-full p-2 ">
          <Row gutter={[18, 24]}>
            <Col span={24}>
              <PInput name="name" label="Skill Name" />
            </Col>

            <Col span={24}>
              <PImage label="Upload Image " name="image" />
            </Col>
          </Row>
        </div>
      </div>
      <Button className="w-full block" htmlType="submit" color="default">
        Add Skill
      </Button>
    </PForm>
  );
};

export default AddProjectPage;
