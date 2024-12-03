import { ReactNode } from "react";

export type SelectInputType = {
    value: string | number;
    options:{
      value: string | number;
      label: string;
  }[];
    name: string;
    Icon: ReactNode;
    className?: string;
    id: string;
    onChange: ()=> void;
    onFocus: ()=> void;
    onBlur: ()=> void;
  }