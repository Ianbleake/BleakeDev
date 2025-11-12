import React from "react";

type CategoryCardProps = {
  category: Category;
}

export default function CategoryCard({
  category,
}:CategoryCardProps ): React.ReactElement {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md border border-gray-200 shadow-md">

      <div className="">

      </div>

      <p className="">

      </p>

    </div>
  );
}