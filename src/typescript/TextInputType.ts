import { ReactNode } from "react";

export type TextInputType = {
    value: string | number; 
    onChange: () => void; 
    Icon: ReactNode; 
    className: string; 
    version?: "normal" | "minimalist";
  }