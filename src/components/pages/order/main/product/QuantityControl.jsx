import React from "react";
import Button from "../../../../reusable-ui/Button";

export default function QuantityControl({
  onLeftClick,
  onRightClick,
  disabled,
  quantity,
}) {
  return (
    <div>
      <Button
        Label="-"
        version="primary"
        OnClick={onLeftClick}
        disabled={disabled}
        className="decrease"
      />
      <span className="quantity">{quantity}</span>
      <Button
        Label="+"
        version="primary"
        OnClick={onRightClick}
        disabled={disabled}
      />
    </div>
  );
}
