import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-3 relative inline-block">
        {title}
        <span className="absolute bottom-[-8px] left-0 right-0 mx-auto h-[3px] w-[60px] bg-ycf-accent"></span>
      </h2>
      {subtitle && (
        <p className="text-lg mt-6 text-ycf-secondary/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};