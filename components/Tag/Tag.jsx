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

    default:
      return "bg-gray text-white";
  }
};

function Tag({ tag, onClick }) {
  return (
    <span
      className={`text-white ${getTagColors(tag)} p-1 text-sm cursor-pointer`}
      aria-role="button"
      onClick={() => onClick(tag)}
    >
      {tag}
    </span>
  );
}

export default Tag;
