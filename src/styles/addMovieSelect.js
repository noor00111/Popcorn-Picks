import { useTheme } from "../ThemeController/DarkLightMode";

export const useSelectStyles = () => {

const {isDark} = useTheme();
const inputBg     = isDark ? 'rgba(255,255,255,0.05)'   : '#fafaf8';
const inputBorder = isDark ? 'rgba(255,255,255,0.10)'   : 'rgba(0,0,0,0.13)';
const divider     = isDark ? 'rgba(255,255,255,0.07)'   : 'rgba(0,0,0,0.08)';

   return {
    control: (b, { isFocused }) => ({
      ...b,
      background: inputBg,
      borderColor: isFocused ? '#f5c518' : inputBorder,
      borderWidth: '1.5px',
      boxShadow: isFocused ? '0 0 0 3px rgba(245,197,24,0.15)' : 'none',
      borderRadius: '0.625rem',
      minHeight: '48px',
      cursor: 'pointer',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      '&:hover': { borderColor: '#f5c518' },
    }),
    valueContainer: b => ({ ...b, padding: '0.2rem 0.75rem' }),
    menu: b => ({
      ...b,
      background: isDark ? '#111827' : '#ffffff',
      border: `1px solid ${divider}`,
      borderRadius: '0.75rem',
      boxShadow: isDark ? '0 20px 44px rgba(0,0,0,0.55)' : '0 12px 32px rgba(0,0,0,0.12)',
      overflow: 'hidden',
      zIndex: 50,
    }),
    menuList: b => ({ ...b, padding: '0.25rem' }),
    option: (b, { isSelected, isFocused }) => ({
      ...b,
      background: isSelected
        ? '#f5c518'
        : isFocused
          ? isDark ? 'rgba(245,197,24,0.10)' : 'rgba(245,197,24,0.09)'
          : 'transparent',
      color: isSelected ? '#09090f' : 'var(--body_color)',
      borderRadius: '0.5rem',
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      transition: 'background 0.15s',
    }),
    multiValue: b => ({
      ...b,
      background: isDark ? 'rgba(245,197,24,0.14)' : 'rgba(245,197,24,0.16)',
      border: '1px solid rgba(245,197,24,0.35)',
      borderRadius: '9999px',
    }),
    multiValueLabel: b => ({
      ...b,
      color: isDark ? '#fde68a' : '#92400e',
      fontSize: '0.74rem',
      fontWeight: 600,
      padding: '0.1rem 0.35rem',
    }),
    multiValueRemove: b => ({
      ...b,
      color: isDark ? '#fde68a' : '#92400e',
      borderRadius: '0 9999px 9999px 0',
      '&:hover': { background: 'rgba(245,197,24,0.28)', color: '#09090f' },
    }),
    input:              b => ({ ...b, color: 'var(--body_color)' }),
    singleValue:        b => ({ ...b, color: 'var(--body_color)', fontSize: '0.875rem' }),
    placeholder:        b => ({ ...b, color: isDark ? '#6b7280' : '#9ca3af', fontSize: '0.875rem' }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator:  b => ({ ...b, color: isDark ? '#6b7280' : '#9ca3af', padding: '0.375rem 0.625rem', '&:hover': { color: '#f5c518' } }),
    clearIndicator:     b => ({ ...b, color: isDark ? '#6b7280' : '#9ca3af', '&:hover': { color: '#ef4444' } }),
  }
}