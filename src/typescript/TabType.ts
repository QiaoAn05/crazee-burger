import { ReactNode } from "react";

export type TabType = {
    label: string;
    Icon: ReactNode;
    onClick: () => void;
    className: string;
  }