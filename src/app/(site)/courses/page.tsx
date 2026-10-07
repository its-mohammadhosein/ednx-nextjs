import type { Metadata } from "next";
import CoursesPageHeader from "@/components/courses/CoursesPageHeader";
import CoursesGrid from "@/components/courses/CoursesGrid";

export const metadata: Metadata = {
  title: "Our Courses - Edunex",
  description: "Education LMS and Online course template",
};

export default function CoursesPage() {
  return (
    <>
      <CoursesPageHeader />
      <CoursesGrid />
    </>
  );
}
