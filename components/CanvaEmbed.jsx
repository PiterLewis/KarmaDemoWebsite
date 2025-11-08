import { useEffect } from "react";

export default function CanvaEmbed() {
  useEffect(() => {
    if (!document.getElementById("canva-embed-script")) {
      const s = document.createElement("script");
      s.id = "canva-embed-script";
      s.src = "https://sdk.canva.com/designembed/v1/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: "1.6em auto 0.9em" }}>
      <div
        className="canva-embed"
        data-design-id="DAG4HwK5A-g"     /* tu ID */
        data-height-ratio="0.5625"
        style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
      >
        <a
          href="https://www.canva.com/design/DAG4HwK5A-g/view"
          target="_blank" rel="noopener noreferrer"
        >
          Ver en Canva
        </a>
      </div>
    </div>
  );
}
