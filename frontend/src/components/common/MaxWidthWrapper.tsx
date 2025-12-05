import React from "react";

export const MaxWidthWrapper = ({
  children,
  disabled = false,
  className
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`w-full ${!disabled && "max-w-300 mx-auto px-4 md:px-8 xl:px-0"} ${className}`}
    >
      {children}
    </div>
  );
};