"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Crypto Hunter",
      description: "Cryptocurrency Tracker with react and materialUI",
      image: "/images/projects/1.png",
      tag: ["All", "React"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description: "React based admin dashboard",
      image: "/images/projects/2.png",
      tag: ["All", "React"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Shopito",
      description: "E-commerce Application, Authentication and Wallet",
      image: "/images/projects/3.png",
      tag: ["All", "MERN"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Homzy",
      description: "Real-estate mern stack website",
      image: "/images/projects/4.png",
      tag: ["All", "MERN"],
      gitUrl: "https://github.com/rutu-cyber/Real-Estate-Homyzz",
      previewUrl: "https://real-estate-homyzz.vercel.app/",
    },
    {
      id: 5,
      title: "Pokedex",
      description: "Pokemon website with react and firebase",
      image: "/images/projects/5.png",
      tag: ["All", "React"],
      gitUrl: "/",
      previewUrl: "/",
    }, 
    {
      id: 6,
      title: "Blog",
      description: "Blog App",
      image: "/images/projects/6.png",
      tag: ["All", "React"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 7,
      title: "Hotel Website",
      description: "Next and React based website used stripe",
      image: "/images/projects/7.png",
      tag: ["All", "React", "Next"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 8,
      title: "AI prompt Selling",
      description: "Next and React based website used typescript",
      image: "/images/projects/3.png",
      tag: ["All", "MERN"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="MERN"
            isSelected={tag === "MERN"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Next"
            isSelected={tag === "Next"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };

export default ProjectsSection