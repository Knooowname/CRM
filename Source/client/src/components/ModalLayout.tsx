import type { FC } from "react";
import type React from "react";

interface ModalLayoutProps {
  children: React.ReactNode;
}

export const ModalLayout: FC<ModalLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="absolute w-[100vw] h-[100vh] bg-black opacity-[0.3]"></div>
      <div className="absolute w-full h-full flex items-center justify-center">
        {children}
      </div>
    </>
  );
};
