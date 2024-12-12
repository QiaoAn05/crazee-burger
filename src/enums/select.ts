type OptionType = {
  value: boolean,
  label: string,
}

export const isAvailableOptions:OptionType[] = [
  { value: true, label: "En stock" },
  { value: false, label: "En rupture" },
];
export const isPublicisedOptions: OptionType[] = [
  { value: false, label: "Sans pub" },
  { value: true, label: "Avec pub" },
];
