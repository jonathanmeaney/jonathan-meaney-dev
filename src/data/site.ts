export interface OpenGraphInfo {
  title: string;
  description?: string;
}

export interface OpenGraph {
  home: OpenGraphInfo;
  blog: OpenGraphInfo;
  projects: OpenGraphInfo;
}

export interface GiscusOptions {
  repository: string;
  repositoryId: string;
  category: string;
  categoryId: string;
  mapping: string;
  strict: boolean;
  reactionsEnabled: boolean;
  emitMetadata: boolean;
  theme: string;
  lang: string;
  commentsInput: "bottom" | "top";
}

export const name = "jonathan-meaney.dev";

export const themeColor = "#8c5cf5";

export const twitterHandle = "";

export const openGraph: OpenGraph = {
  home: {
    title: "Jonathan Meaney",
    description:
      "Personal developer site focused on Rails, React, payroll systems, AI demos, and practical tooling.",
  },
  blog: {
    title: "Blog",
    description:
      "Notes on dependable product engineering, internal tooling, and software that needs to hold up in practice.",
  },
  projects: {
    title: "Projects",
    description:
      "Selected work across payroll systems, internal tooling, and practical engineering experiments.",
  },
};

export const giscus: false | GiscusOptions = false;
