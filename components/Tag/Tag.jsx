import React from "react";

const getTagColors = (tag) => {
  switch (tag?.toLowerCase()) {
    case "js":
    case "javascript": {
      return "bg-javascript text-blue-900";
    }
    case "react": {
      return "bg-react text-blue-900";
    }
    case "ts":
    case "typescript": {
      return "bg-typescript";
    }
    case "electron": {
      return "bg-electron";
    }
    case "nodejs": {
      return "bg-nodejs";
    }
    case "tip": {
      return "bg-red-500";
    }

    default:
      return "bg-purple text-white";
  }
};

function Tag({ tag, onClick }) {
  return (
    <button
      className={`text-white ${getTagColors(
        tag
      )} px-2 py-1 text-sm cursor-pointer outline-purple`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
}

export default Tag;
