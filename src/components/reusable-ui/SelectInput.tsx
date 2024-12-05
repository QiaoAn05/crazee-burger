import styled from "styled-components";
import { theme } from "../../theme";
import { ReactNode } from "react";

type SelectInputProps = {
  value?: string | number | readonly string[];
  options: {
    value: string | number;
    label: string;
}[]
  name?: string;
  Icon: ReactNode;
  className?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLSelectElement> ;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

export default function SelectInput({
  value,
  options,
  name,
  Icon,
  className,
  id,
  onChange,
  onFocus,
  onBlur,
}: SelectInputProps) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.sizes.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex;
  }

  select {
    background-color: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.sizes.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;
