// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".navimage.svelte-1avi79e{width:75%}.navitem.svelte-1avi79e{font-family:\"Radio Canada\", sans-serif;margin-top:5%;margin-bottom:5%}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}