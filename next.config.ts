import createMDX from "@next/mdx";

// Use only serializable options
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Avoid passing non-serializable plugins directly here
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);