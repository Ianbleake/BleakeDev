import React from "react";
import FeatureCard from "./components/featureCard";

type FeaturesProps = {
  project: Project;
}

export default function Features({
  project,
}: FeaturesProps ): React.ReactElement {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {project.pageContent.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}