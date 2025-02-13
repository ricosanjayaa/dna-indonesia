import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import moment from "moment";

import Section from "@/components/Section.component";
import Text from "@/components/Text.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

export const metadata: Metadata = {
  title: "Blog | DNA Indonesia", /** Harusnya kedua title itu sama */
  description: "DNA Indonesia adalah agensi yang fokus pada konten kreatif dan pemasaran digital di media sosial, membantu brand mengelola dan mengatasi permasalahan.",
  keywords: [
    "Social Media", "Digital Marketing", "Social Media Ads", "Influencer Marketing",
    "Instagram Ads", "TikTok Ads", "Brand Marketing", "KOL Marketing",
    "Viral Content", "Content Creator", "Paid Ads", "UGC Marketing",
    "Hashtag Strategy", "Social Growth", "Online Branding"
  ],
  openGraph: {
    title: "Blog | DNA Indonesia", /** Harusnya kedua title itu sama */
    description: "DNA Indonesia atau PT Digital Niaga Aksesindo merupakan agensi yang berfokuskan melayani pembuatan konten kreatif melalui pemasaran digital khususnya di media sosial. Kami berdedikasi dan juga fokus membantu brand dalam menangani permasalahan di media sosial.",
    url: SITE_URL,
    siteName: "DNA Indonesia",
    images: [
      {
        url: `${SITE_URL}/og_dna_logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    type: "website",
  },
};

const getPosts = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      frontmatter: { ...data },
      readingTime
    };
  });
};


export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <Section className="gap-4" header="Blog">
        <Text className="-mt-2">Temukan insight terbaru seputar tren digital, strategi pemasaran, dan tips konten kreatif di blog kami. Kami menghadirkan artikel informatif dan inspiratif untuk membantu Anda mengembangkan brand serta meningkatkan kehadiran online. Tetap update dengan strategi terbaik untuk mencapai audiens yang lebih luas!</Text>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="flex flex-col gap-2 group-hover:opacity-50 hover:!opacity-100 transition-all duration-200">
              <img className="rounded-md w-full aspect-video object-cover" src={post.frontmatter.image} alt={post.frontmatter.title} />
              <Text className="!text-lg font-semibold !text-primary">{post.frontmatter.title}</Text>
              <Text className="-mt-2 flex flex-row gap-2"><span>{moment(post.frontmatter.date, "YYYYMMDD").fromNow()}</span><span>•</span><span>{post.readingTime > 1 ? `${post.readingTime} mins read` : "1 min read"} by {post.frontmatter.author}</span></Text>
              <Text>{post.frontmatter.description}</Text>
            </Link>
          ))}
        </section>
      </Section>
    </>
  );
}
