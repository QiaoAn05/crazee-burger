export type ToggleButtonType = {
    isChecked: boolean;
    onToggle: () => void;
    labelIfChecked?: string;
    labelIfUnchecked?: string;
  }