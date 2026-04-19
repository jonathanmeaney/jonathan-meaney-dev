import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const legacyDateSchema = z.union([z.date(), z.string()]).optional();

function parseLegacyDate(value: Date | string | undefined): Date | undefined {
  if (!value) {
    return undefined;
  }

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
}

function resolveCreatedAt(
  createdAt: Date | string | undefined,
  pubDate: Date | string | undefined,
  updatedAt: Date | string | undefined,
  updatedDate: Date | string | undefined,
): Date {
  return (
    parseLegacyDate(createdAt) ??
    parseLegacyDate(pubDate) ??
    parseLegacyDate(updatedAt) ??
    parseLegacyDate(updatedDate) ??
    new Date("1970-01-01T00:00:00.000Z")
  );
}

function resolveUpdatedAt(
  updatedAt: Date | string | undefined,
  updatedDate: Date | string | undefined,
): Date | undefined {
  return parseLegacyDate(updatedAt) ?? parseLegacyDate(updatedDate);
}

const other = defineCollection({
  loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
  type: z.literal("lucide"),
  name: z.string(),
});

const simpleIconSchema = z.object({
  type: z.literal("simple-icons"),
  name: z.string(),
});

const quickInfo = defineCollection({
  loader: file("src/content/info.json"),
  schema: z.object({
    id: z.number(),
    icon: z.union([lucideIconSchema, simpleIconSchema]),
    text: z.string(),
  }),
});

const socials = defineCollection({
  loader: file("src/content/socials.json"),
  schema: z.object({
    id: z.number(),
    icon: z.union([lucideIconSchema, simpleIconSchema]),
    text: z.string(),
    link: z.string().url(),
  }),
});

const workExperience = defineCollection({
  loader: file("src/content/work.json"),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    company: z.string(),
    duration: z.string(),
    description: z.string(),
  }),
});

const tags = defineCollection({
  loader: file("src/content/tags.json"),
  schema: z.object({
    id: z.string(),
  }),
});

const posts = defineCollection({
  loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        createdAt: legacyDateSchema,
        updatedAt: legacyDateSchema,
        pubDate: legacyDateSchema,
        updatedDate: legacyDateSchema,
        description: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().optional().default(false),
        image: image().optional(),
      })
      .transform(({ createdAt, updatedAt, pubDate, updatedDate, ...post }) => ({
        ...post,
        createdAt: resolveCreatedAt(createdAt, pubDate, updatedAt, updatedDate),
        updatedAt: resolveUpdatedAt(updatedAt, updatedDate),
      })),
});

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      link: z.string().url().optional(),
      info: z.array(
        z.object({
          text: z.string(),
          icon: z.union([lucideIconSchema, simpleIconSchema]),
          link: z.string().url().optional(),
        }),
      ),
    }),
});

export const collections = {
  tags,
  posts,
  projects,
  other,
  quickInfo,
  socials,
  workExperience,
};
