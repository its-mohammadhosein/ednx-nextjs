import type { Metadata } from "next";
import BlogPageHeader from "@/components/blog/BlogPageHeader";
import BlogFilterGrid from "@/components/blog/BlogFilterGrid";

export const metadata: Metadata = {
  title: "Blog - Edunex",
  description: "Education LMS and Online course template",
};

export default function BlogPage() {
  return (
    <>
      <BlogPageHeader />
      <BlogFilterGrid />
    </>
  );
}
