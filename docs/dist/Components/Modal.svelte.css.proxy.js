// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes svelte-a3xboq-fadein{from{opacity:0}to{opacity:1}}.modal.svelte-a3xboq{display:none;position:fixed;font-family:\"Radio Canada\", sans-serif;z-index:1001;padding-top:100px;animation-name:svelte-a3xboq-fadein;animation-duration:0.5s;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4);opacity:0;transition:opacity 0.5s ease}.modal-content.svelte-a3xboq{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%;border-radius:20px}header.svelte-a3xboq{margin-bottom:1rem}.close.svelte-a3xboq{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close.svelte-a3xboq:hover,.close.svelte-a3xboq:focus{color:#000;text-decoration:none;cursor:pointer}header.svelte-a3xboq{font-size:xx-large;text-decoration:underline}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}