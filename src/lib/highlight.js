import hljs from "highlight.js"; // 引入highlight.js

// import 'highlight.js/styles/googlecode.css'
import "highlight.js/styles/stackoverflow-light.css";

hljs.highlightCode = function() {
  document.querySelectorAll("pre code").forEach(el => {
    hljs.highlightElement(el);
  });
};

export default hljs;
