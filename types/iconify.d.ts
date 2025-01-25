// types/iconify.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    "iconify-icon": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      icon: string;
      width?: string;
      height?: string;
    };
  }
}
