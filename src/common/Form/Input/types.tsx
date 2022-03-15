import { BaseTextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";
import { Control } from "react-hook-form";

export default interface RInputFieldTypes extends Partial<BaseTextFieldProps> {
  control: Control<any>;
  multiline?: boolean;
  errorMessage?: string;
  label?: string;
  className?: string;
  variant?: "filled" | "outlined" | "standard";
  shrink?: boolean;
  name: string;
  defaultValue?: string;
  onChange?: (v: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  fullWidth?: boolean;
}
