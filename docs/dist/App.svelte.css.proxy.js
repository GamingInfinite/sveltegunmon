// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#navbar.svelte-182fq6j{display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;position:absolute;left:0px;top:0px;height:100vh;width:5vw;z-index:1000;background-color:rgb(108, 54, 196)}#version.svelte-182fq6j{position:absolute;right:0;top:0;z-index:1000;color:black;background-color:white;font-family:\"Radio Canada\", sans-serif}#overworld.svelte-182fq6j{width:95vh;height:100vh;position:absolute;right:0;top:0;background-color:maroon}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}