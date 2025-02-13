import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";
import moment from "moment";
import Link from "next/link";
import { notFound } from "next/navigation";

import Section from "@/components/Section.component";
import Text from "@/components/Text.component";
import BackButton from "@/components/BackButton.component";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dnaindonesia.id";

interface PostProps {
  params: Promise<{ slug: string }>;
}

interface PostFrontmatter {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  keywords?: string[];
}

interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: number;
}

const getPost = async (slug: string): Promise<PostData | null> => {
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  if (!data.title || !data.description || !data.author || !data.date) throw new Error(`Invalid frontmatter in post ${slug}. Missing required fields.`);

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const frontmatter: PostFrontmatter = {
    title: data.title,
    description: data.description,
    author: data.author,
    date: data.date,
    image: data.image,
    keywords: data.keywords,
  };

  return { slug, frontmatter, content, readingTime };
};

const getAllPosts = async (): Promise<PostData[]> => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames
      .filter(filename => filename.endsWith(".mdx"))
      .map(async filename => {
        const slug = filename.replace(".mdx", "");
        const post = await getPost(slug);
        return post;
      })
  );

  return posts
    .filter((post): post is PostData => post !== null)
    .sort((a, b) => moment(b.frontmatter.date, "YYYYMMDD").valueOf() - moment(a.frontmatter.date, "YYYYMMDD").valueOf());
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();
  const { frontmatter } = post;

  return {
    title: `${frontmatter.title} | DNA Indonesia`,
    description: frontmatter.description,
    keywords: frontmatter.keywords || [
      "Social Media", "Digital Marketing", "Social Media Ads",
      "Influencer Marketing", "Instagram Ads", "TikTok Ads",
      "Brand Marketing", "KOL Marketing", "Viral Content",
      "Content Creator", "Paid Ads", "UGC Marketing",
      "Hashtag Strategy", "Social Growth", "Online Branding"
    ],
    openGraph: {
      title: `${frontmatter.title} | DNA Indonesia`,
      description: frontmatter.description,
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
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();
  const { frontmatter, content } = post;

  const allPosts = await getAllPosts();
  const otherPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <BackButton />
      <Section header={frontmatter.title} className="-mt-8 flex flex-col gap-8">
        <Text className="-mt-6">{frontmatter.description}</Text>
        <img className="w-full aspect-video object-cover rounded-md" src={frontmatter.image} alt="Portofolio DNA Indonesia" />

        <div className="prose max-w-none">
          <MDXRemote source={content} />
        </div>

        {otherPosts.length > 0 && (
          <Section header="Other Posts" className="mt-8 group">
            <Text>Dapatkan wawasan mendalam tentang inovasi digital, taktik branding, dan panduan optimasi media sosial di artikel kami. Kami menyajikan konten berkualitas yang akan membantu bisnis Anda berkembang di era digital. Pelajari cara membangun presence online yang kuat dan mengoptimalkan strategi digital marketing Anda bersama kami!</Text>
            {otherPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="py-4 grid grid-cols-12 gap-4 md:gap-8 group-hover:opacity-50 hover:!opacity-100 transition-all duration-200">
                <p className="text-2xl md:text-4xl text-primary text-center">{index + 1}</p>
                <div className="flex flex-col gap-2 col-span-11">
                  <Text className="!text-base font-medium">{post.frontmatter.title}</Text>
                  <Text className="-mt-2 flex flex-row gap-2"><span>{moment(post.frontmatter.date, "YYYYMMDD").fromNow()}</span><span>•</span><span>{post.readingTime > 1 ? `${post.readingTime} mins read` : "1 min read"} by {post.frontmatter.author}</span></Text>
                  <Text>{post.frontmatter.description}</Text>
                </div>
              </Link>
            ))}
          </Section>
        )}
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}