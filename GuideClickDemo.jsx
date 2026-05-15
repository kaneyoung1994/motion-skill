import React from "react";
import GuideClick from "./GuideClick";

export default function GuideClickDemo() {
  return (
    <main style={styles.page}>
      <GuideClick
        className="avatarButton"
        type="button"
        aria-label="Guide click demo"
        style={styles.avatarButton}
      >
        <img
          src="./assets/avatar.svg"
          alt=""
          style={styles.avatarImage}
        />
      </GuideClick>
      <p style={styles.caption}>
        按钮正在使用 React 组件版的重复点击提示动效。
      </p>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    display: "grid",
    placeItems: "center",
    background: "#111",
    color: "#fff",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    textAlign: "center",
  },
  avatarButton: {
    width: "min(78vw, 260px)",
    aspectRatio: "1",
    padding: 0,
    border: 0,
    borderRadius: "28px",
    overflow: "hidden",
    background: "#d71918",
    boxShadow: "0 24px 80px rgba(0, 0, 0, 0.42)",
    cursor: "pointer",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
  },
  caption: {
    margin: "24px 0 0",
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: "15px",
    lineHeight: 1.6,
  },
};
