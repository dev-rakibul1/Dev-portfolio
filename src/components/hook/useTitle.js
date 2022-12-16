import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Rakibul MERN stack developer`;
  }, [title]);
};

export default UseTitle;
