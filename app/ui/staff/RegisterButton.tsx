import Button from "@mui/joy/Button";
import { ReactNode } from "react";

type RegisterButtonProps = {
  onClick?: () => void;
  variant?: "solid" | "outlined" | "soft" | "plain";
  color?: "primary" | "neutral" | "danger" | "success" | "warning";
  startDecorator?: ReactNode;
  children?: ReactNode;
};

export default function RegisterButton({
  onClick,
  variant = "solid",
  color = "neutral",
  startDecorator,
  children,
}: RegisterButtonProps) {
  return (
    <Button
      startDecorator={startDecorator}
      color={color}
      onClick={onClick}
      variant={variant}
    >
      {children ?? "出退勤を登録"}
    </Button>
  );
}
