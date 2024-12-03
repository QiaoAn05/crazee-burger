import { ReactNode } from "react";

export type ButtonType = {
    Label: string;
    Icon?: ReactNode;
    OnClick?: () => void;
    version?: "primary" | "success"
    disabled?: boolean;
  }