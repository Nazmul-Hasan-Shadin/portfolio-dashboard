"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Skeleton } from "antd";
import axios from "axios";

const { Meta } = Card;

const ProjectsPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all projects from the backend API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-with-prisma.vercel.app/api/v1"
        );

        setProjects(response?.data?.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Render the projects in a grid layout
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">All Projects</h1>
      <Row gutter={[16, 24]}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col span={8} key={index}>
                <Skeleton active />
              </Col>
            ))
          : projects?.map((project) => (
              <Col span={8} key={project.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="w-[160px] h-[200px]"
                      alt="project"
                      src={project.images || "/default-image.jpg"}
                    />
                  }
                >
                  <Meta
                    title={project.name}
                    description={project.description}
                  />
                </Card>
              </Col>
            ))}
      </Row>
    </div>
  );
};

export default ProjectsPage;
