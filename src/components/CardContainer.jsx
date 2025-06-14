import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";

function CardContainer() {
  const projects = useSelector((state) => state.projects.data);
  const [highlightes, setHighlightes] = useState([]);

  useEffect(() => {
    if (projects?.length) {
      const result = projects.filter((item) => item.is_key_highlight === true);
      setHighlightes(result);
    }
  }, [projects]);

  return (
    <div className="max-w-7xl bg-white relative pb-60 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlightes.length > 0 ? (
          highlightes.map((item) => <ProjectCard key={item.id} data={item} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No data found
          </p>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
