import clsx from "clsx";

interface AutomationWireframeProps {
  videoSrc: string;
}

function VideoWireframe({ videoSrc }: AutomationWireframeProps) {
  return (
    <div
      className={clsx(
        "h-full w-full bg-white text-sm text-slate-600",
        "dark:bg-slate-900 dark:text-slate-400"
      )}
    >
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <video
          autoPlay
          id="auto-wireframe-video"
          className={clsx(
            "absolute inset-0 w-full h-full object-cover",
            "dark:object-cover"
          )}
          src={videoSrc}
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export default VideoWireframe;
