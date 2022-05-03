// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".modal.svelte-1li61zx{display:none;position:fixed;font-family:\"Radio Canada\", sans-serif;z-index:1001;padding-top:100px;animation:fadein 1s forwards;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4);opacity:0;transition:opacity 1s ease}.modal-content.svelte-1li61zx{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%;border-radius:20px}.close.svelte-1li61zx{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close.svelte-1li61zx:hover,.close.svelte-1li61zx:focus{color:#000;text-decoration:none;cursor:pointer}header.svelte-1li61zx{font-size:xx-large;text-decoration:underline}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}