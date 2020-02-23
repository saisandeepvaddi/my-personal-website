import React from "react";
import useDarkMode from "use-dark-mode";

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      {darkMode.value ? (
        <button className="theme-switch" onClick={darkMode.disable}>
          ☀ Light
        </button>
      ) : (
        <button className="theme-switch" onClick={darkMode.enable}>
          ☾ Dark
        </button>
      )}
    </React.Fragment>
  );
}

export default DarkModeToggle;
