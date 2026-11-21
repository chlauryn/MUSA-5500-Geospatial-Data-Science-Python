import React, { useRef } from "react";

const base = import.meta.env.BASE_URL || "/";

export default function NotebookEmbed({ file, title }) {
  const iframeRef = useRef(null);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      try {
        const doc = iframe.contentWindow.document;
        const height = doc.documentElement.scrollHeight;
        if (height > 200) {
          iframe.style.height = `${height + 40}px`;
        }
      } catch {
        iframe.style.height = "900px";
      }
    }
  };

  return (
    <iframe
      ref={iframeRef}
      src={`${base}project/${file}`}
      title={title}
      onLoad={handleLoad}
      style={{
        width: "100%",
        minHeight: "750px",
        border: "none",
        background: "#ffffff",
        borderRadius: "10px",
      }}
    />
  );
}