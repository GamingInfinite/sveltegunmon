// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".partyslot.svelte-hsyajj{display:flex;flex-direction:row;width:100%;height:100%;align-items:center;border-color:black;border-style:solid;border-radius:40px;margin-top:0.5rem;margin-bottom:0.5rem}.avatarwrapper.svelte-hsyajj{flex-direction:column;margin-left:1rem;margin-top:0.25rem;width:5%;margin-right:0.5rem}.avatar.svelte-hsyajj{width:80%}.data.svelte-hsyajj{flex-direction:column}.name.svelte-hsyajj{flex-direction:row}.stats.svelte-hsyajj{flex-direction:row}.gender.svelte-hsyajj{height:1em}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}