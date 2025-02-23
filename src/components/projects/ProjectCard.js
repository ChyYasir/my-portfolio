import React from "react";
import { Sparkles, AlertTriangle, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
  const renderDecorationCorners = () => (
    <>
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-500/50 z-30" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-blue-500/50 z-30" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 z-30" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-500/50 z-30" />
    </>
  );

  const renderHeader = () => (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 border-b border-green-500/20 pb-6">
      <div className="flex items-center gap-4">
        <div className="bg-green-500/10 p-2 rounded-lg">
          <Sparkles className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-2xl font-mono text-green-400 mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-500/10 rounded-full text-green-400 text-sm font-mono">
              {project.status}
            </span>
            <span className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm font-mono">
              {project.type}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-purple-500/10 rounded-full text-purple-400 text-sm font-mono border border-purple-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const renderCarousel = () => (
    <div className="relative rounded-lg overflow-hidden mb-6">
      {renderDecorationCorners()}
      <Carousel
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {project.images.map((image, idx) => (
            <CarouselItem key={idx}>
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="w-full rounded-lg"
                  //   style={{ height: "auto", width: "100%" }}
                  height={0}
                  width={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-20">
          <CarouselPrevious className="h-8 w-8 bg-black/50 hover:bg-black/70 border-none" />
          <CarouselNext className="h-8 w-8 bg-black/50 hover:bg-black/70 border-none" />
        </div>
      </Carousel>
    </div>
  );

  const renderLeftColumn = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg p-5 border border-green-500/20">
        <h4 className="text-lg font-mono text-green-400 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          Overview
        </h4>
        <p className="text-gray-300 leading-relaxed">{project.overview}</p>
      </div>

      <div className="bg-gradient-to-r from-purple-500/5 to-green-500/5 rounded-lg p-5 border border-green-500/20">
        <h4 className="text-lg font-mono text-green-400 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          Key Features
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-green-500/5 p-3 rounded-lg border border-green-500/10"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg p-5 border border-blue-500/20">
        <h4 className="text-lg font-mono text-blue-400 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full" />
          Tools & Deployment
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.deployment.tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-blue-500/10 rounded-full text-blue-400 text-sm font-mono border border-blue-500/30"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRightColumn = () => (
    <div className="space-y-6">
      {renderCarousel()}

      <div className="space-y-4">
        <h4 className="text-lg font-mono text-yellow-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full" />
          Challenges & Solutions
        </h4>
        {project.challenges.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg p-4 border border-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
                <h6 className="font-mono text-yellow-500">
                  Challenge {idx + 1}
                </h6>
              </div>
              <p className="text-gray-300 text-sm">{item.challenge}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <h6 className="font-mono text-green-500">Solution</h6>
              </div>
              <p className="text-gray-300 text-sm">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="bg-black/90 border border-green-500/30 rounded-lg overflow-hidden">
        <div className="p-6">
          {renderHeader()}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">{renderLeftColumn()}</div>
            <div className="lg:col-span-2">{renderRightColumn()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
