"use client"

import React, { useRef, useEffect, useState } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, className = "", style = {} }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5 && !hasPlayed) {
            // Auto play when 50% of video is visible
            const iframeSrc = iframe.src;
            if (!iframeSrc.includes('autoplay=1')) {
              // Add autoplay parameter to the URL
              const separator = iframeSrc.includes('?') ? '&' : '?';
              iframe.src = `${iframeSrc}${separator}autoplay=1&muted=1`;
              setHasPlayed(true);
            }
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% of the video is visible
        rootMargin: '0px 0px -100px 0px' // Start trigger 100px before the video comes into view
      }
    );

    observer.observe(iframe);

    return () => {
      observer.unobserve(iframe);
    };
  }, [hasPlayed]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      className={className}
      style={style}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
    />
  );
};

export default AutoPlayVideo;
