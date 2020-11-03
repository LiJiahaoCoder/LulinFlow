declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.jpeg' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  const path: string;
  export default path;
}
