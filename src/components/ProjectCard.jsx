import React from "react";

function ProjectCard({ data }) {
  const { title, subtitle, clients, start_date, end_date, photo } = data;

  return (
    <div className="text-white shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-4 hover:shadow-xl flex flex-col h-auto w-full max-w-[500px] mx-auto min-h-[500px] md:min-h-[600px] mb-8 mt-8">
      <div className="p-6 bg-[#174ADD] flex flex-col h-[40%] min-h-[250px]">
        <div className="flex-grow">
          <h2 className="text-lg md:text-xl font-medium mb-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-white text-xs  font-extralight line-clamp-4 md:line-clamp-5 mb-4">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
          <div>
            <p className="font-extralight text-xs text-[#FFDC1D] mb-1">
              Client
            </p>
            <p className="text-xs md:text-sm">{clients}</p>
          </div>
          <div>
            <p className="font-extralight text-xs text-[#FFDC1D] mb-1">
              Time Duration
            </p>
            <p className="text-xs md:text-sm font-medium">
              {start_date} {end_date && `- ${end_date}`}
            </p>
          </div>
        </div>
      </div>

      {photo && (
        <div className="relative overflow-hidden h-[60%] min-h-[300px]">
          <img
            src={photo}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
