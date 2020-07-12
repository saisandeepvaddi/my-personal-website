import React from "react";
import useDarkMode from "use-dark-mode";

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      {darkMode.value ? (
        <button
          className="theme-switch light"
          onClick={darkMode.disable}
          aria-label="Switch to light theme"
        >
          ☀️ <span className="sr-only">light</span>
        </button>
      ) : (
        <button
          className="theme-switch dark"
          onClick={darkMode.enable}
          aria-label="Switch to dark theme"
        >
          🌙 <span className="sr-only">dark</span>
        </button>
      )}
    </React.Fragment>
  );
}

export default DarkModeToggle;
