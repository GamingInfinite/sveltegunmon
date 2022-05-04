// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#navbar.svelte-udpev6{display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap;position:absolute;left:0px;top:0px;height:100vh;width:5vw;z-index:1000}#version.svelte-udpev6{position:absolute;right:0;top:0;z-index:1000;color:black;background-color:white;font-family:\"Radio Canada\", sans-serif}#overworld.svelte-udpev6{width:95vw;height:100vh;position:absolute;right:0;top:0;background-color:maroon}.about.svelte-udpev6{text-align:center}.aboutlogo.svelte-udpev6{height:10vh}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}