import React from "react";
import useDarkMode from "use-dark-mode";

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      {darkMode.value ? (
        <button className="theme-switch light" onClick={darkMode.disable}>
          ☀️ <span className="theme-btn-label">light</span>
        </button>
      ) : (
        <button className="theme-switch dark" onClick={darkMode.enable}>
          🌙 <span className="theme-btn-label">dark</span>
        </button>
      )}
    </React.Fragment>
  );
}

export default DarkModeToggle;
