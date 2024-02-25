import React from "react";

interface ICardProps
  extends Readonly<{
    children: React.ReactNode;
  }> {
  className?: string;
}

export function Card({ children, className, ...props }: ICardProps & any) {
  return (
    <div
      className={
        className +
        " flex justify-content-between align-items-start surface-50 p-4 border-round border-1 border-solid border-200"
      }
      {...props}
    >
      {children}
    </div>
  );
}
