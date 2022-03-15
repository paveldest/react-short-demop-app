import React from "react";
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

import InputFieldTypes from "./types";

export default function TextInput({
  disabled,
  multiline,
  margin,
  placeholder,
  label,
  className,
  variant,
  shrink,
  name,
  control,
  fullWidth = true,
  defaultValue,
  ...props
}: InputFieldTypes) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        const isError = Boolean(error?.message);
        return (
          <FormControl fullWidth={fullWidth}>
            <TextField
              {...field}
              {...props}
              label={label}
              placeholder={placeholder}
              disabled={disabled}
              multiline={multiline}
              variant={variant}
              InputLabelProps={{ shrink }}
              error={isError}
              helperText={isError && error?.message}
              margin={margin}
            />
          </FormControl>
        );
      }}
    />
  );
}
