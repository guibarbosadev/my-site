import { MainProject } from "@/types";
import Image from "next/image";
import classNames from "./CardProject.module.css";
import { useState } from "react";

type Props = {
  project: MainProject;
};

export default function CardProject({ project }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={classNames.card}>
      <div
        className={`${classNames.cardContent} ${
          isCollapsed
            ? classNames.cardContentCollapsed
            : classNames.cardContentExpanded
        }`}
      >
        <div className={classNames.wrapper}>
          <h3>{project.title}</h3>
          <br></br>

          <div>Main problem: </div>
          <p>{project.problem}</p>

          <br></br>
          <div>Solution: </div>
          <p>{project.solution}</p>

          <br></br>
          <div>Participation: </div>
          <p>{project.participation}</p>

          <br></br>
          <div>Impact: </div>
          <p>{project.impact}</p>

          <button
            className={classNames.btnCollapse}
            onClick={() => setIsCollapsed((flag) => !flag)}
          >
            {isCollapsed ? "See more..." : "See less"}
          </button>
        </div>
      </div>
      <div className={classNames.cardFooter}>
        {project.screenshots.map((imageUrl, index) => (
          <Image
            key={imageUrl}
            src={imageUrl}
            width={150}
            height={100}
            style={{ objectFit: "fill" }}
            alt={`${project.title}'s ${index + 1} image`}
          />
        ))}
      </div>
    </div>
  );
}
