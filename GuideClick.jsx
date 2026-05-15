import React from "react";

const guideClickStyles = `
@keyframes t-guide-click {
  0% {
    transform: scale(1, 1);
  }

  13.04% {
    transform: scale(0.878, 0.877);
  }

  30.44% {
    transform: scale(1, 1);
  }

  43.48% {
    transform: scale(0.904, 0.904);
  }

  60.87% {
    transform: scale(1, 1);
  }

  72.46% {
    transform: scale(0.941, 0.937);
  }

  100% {
    transform: scale(1, 1);
  }
}

.t-guide-click {
  animation: t-guide-click var(--guide-click-dur, 1150ms) var(--guide-click-ease, cubic-bezier(0.25, 0, 0.62, 1)) infinite;
  transform-origin: center;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .t-guide-click {
    animation: none !important;
  }
}
`;

export function GuideClick({
  as: Component = "button",
  children,
  className = "",
  duration = "1150ms",
  easing = "cubic-bezier(0.25, 0, 0.62, 1)",
  style,
  ...props
}) {
  return (
    <>
      <style>{guideClickStyles}</style>
      <Component
        className={`t-guide-click ${className}`.trim()}
        style={{
          "--guide-click-dur": duration,
          "--guide-click-ease": easing,
          ...style,
        }}
        {...props}
      >
        {children}
      </Component>
    </>
  );
}

export default GuideClick;
