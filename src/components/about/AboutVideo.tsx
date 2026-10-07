import YoutubeLightbox from "@/components/ui/YoutubeLightbox";

export default function AboutVideo() {
  return (
    <section className="about-video-section section-gap-bottom fix">
      <div className="container">
        <YoutubeLightbox
          youtubeUrl="https://www.youtube.com/watch?v=MLpWrANjFbI"
          poster="/images/about/video-img.webp"
          posterAlt="About Edunex"
        />
      </div>
    </section>
  );
}
