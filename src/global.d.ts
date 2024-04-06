declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  const svg: string;
  export default svg;
}
