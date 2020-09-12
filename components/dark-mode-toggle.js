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
          ☀️
        </button>
      ) : (
        <button
          className="theme-switch dark"
          onClick={darkMode.enable}
          aria-label="Switch to dark theme"
        >
          🌙
        </button>
      )}
    </React.Fragment>
  );
}

export default DarkModeToggle;
