import React from "react";
import useDarkMode from "use-dark-mode";

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <React.Fragment>
      {darkMode.value ? (
        <a
          className="theme-switch"
          role="button"
          type="button"
          onClick={darkMode.disable}
          style={{ marginLeft: "auto" }}
        >
          ☀ Light
        </a>
      ) : (
        <a
          className="theme-switch"
          role="button"
          type="button"
          onClick={darkMode.enable}
          style={{ marginLeft: "auto" }}
        >
          ☾ Dark
        </a>
      )}
    </React.Fragment>
  );
}

export default DarkModeToggle;
