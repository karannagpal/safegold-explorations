function FilledChevron({ custom_class, secondary_color }: { custom_class: string, secondary_color: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={custom_class}
    >
      <circle
        cx="8"
        cy="8"
        r="8"
        transform="rotate(90 8 8)"
        fill-opacity="0.8"
      />
      <path
        d="M8.00033 11L12 6.95219L11.059 6L7.99767 9.09764L4.94102 6L4 6.95219L8.00033 11Z"
        fill={secondary_color}
      />
    </svg>
  );
}

export default FilledChevron;
