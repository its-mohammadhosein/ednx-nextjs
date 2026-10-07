"use client";

import { useState } from "react";
import Image from "next/image";

function getYoutubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return match?.[1];
}

/**
 * yet-another-react-lightbox's video plugin expects direct <video> file
 * sources, not YouTube embeds, so this specific case (a single YouTube
 * popup) gets a minimal custom modal instead rather than forcing the
 * library's API to do something it isn't built for.
 */
export default function YoutubeLightbox({
  youtubeUrl,
  poster,
  posterAlt,
}: {
  youtubeUrl: string;
  poster: string;
  posterAlt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = getYoutubeId(youtubeUrl);

  return (
    <>
      <div className="about-video-img">
        <Image src={poster} alt={posterAlt} width={1200} height={600} />
        <button type="button" className="video-btn" onClick={() => setIsOpen(true)} aria-label="Play video">
          <span><i className="tji-play" /></span>
        </button>
      </div>

      {isOpen && videoId && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              type="button"
              className="absolute -top-10 right-0 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              <i className="tji-close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
