import { useTheme } from "../ThemeController/DarkLightMode";

export const useUpdateSelectStyles = () => {
  const { isDark } = useTheme();

  const inputBg = isDark ? "rgba(255,255,255,0.05)" : "#fafaf8";
  const inputBorder = isDark ? "rgba(255,255,255,0.10)": "rgba(0,0,0,0.13)";
  const inputColor = isDark ? "#e5e7eb" : "#1a1a1a";
  const inputPh = isDark ? "#6b7280" : "#9ca3af";
  const focusBorder = "#f5c518";
  const focusShadow = "rgba(245,197,24,0.18)";

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: inputBg,
      borderRadius: "0.6rem",
      border: `1.5px solid ${
        state.isFocused ? focusBorder : inputBorder
      }`,
      boxShadow: state.isFocused
        ? `0 0 0 3px ${focusShadow}`
        : "none",
      color: inputColor,
      minHeight: "42px",
      "&:hover": {
        borderColor: focusBorder,
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: isDark ? "#0d0d1a" : "#ffffff",
      border: `1px solid ${inputBorder}`,
      borderRadius: "0.6rem",
      overflow: "hidden",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#f5c518"
        : state.isFocused
        ? isDark
          ? "rgba(245,197,24,0.12)"
          : "rgba(245,197,24,0.09)"
        : "transparent",
      color: state.isSelected ? "#09090f" : inputColor,
      fontSize: "0.875rem",
      cursor: "pointer",
    }),

    singleValue: (base) => ({
      ...base,
      color: inputColor,
    }),

    multiValue: (base) => ({
      ...base,
      backgroundColor: isDark
        ? "rgba(245,197,24,0.15)"
        : "rgba(245,197,24,0.12)",
      borderRadius: "0.4rem",
    }),

    multiValueLabel: (base) => ({
      ...base,
      color: isDark ? "#f5c518" : "#d97706",
      fontSize: "0.8rem",
      fontWeight: 600,
    }),

    multiValueRemove: (base) => ({
      ...base,
      color: isDark ? "#f5c518" : "#d97706",
      "&:hover": {
        backgroundColor: "rgba(245,197,24,0.30)",
        color: "#09090f",
      },
    }),

    placeholder: (base) => ({
      ...base,
      color: inputPh,
      fontSize: "0.875rem",
    }),

    input: (base) => ({
      ...base,
      color: inputColor,
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: isDark ? "#6b7280" : "#9ca3af",
      "&:hover": {
        color: "#f5c518",
      },
    }),

    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: inputBorder,
    }),
  };

  return { selectStyles };
};