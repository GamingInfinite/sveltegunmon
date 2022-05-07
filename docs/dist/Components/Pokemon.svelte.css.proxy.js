// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".partyslot.svelte-fp3p9h{display:flex;flex-direction:row;width:100%;height:100%;align-items:center;border-color:black;border-style:solid;border-radius:40px;margin-top:0.5rem;margin-bottom:0.5rem}.hidden.svelte-fp3p9h{display:none}.avatarwrapper.svelte-fp3p9h{flex-direction:column;margin-left:1rem;margin-top:0.25rem;width:5%;margin-right:0.5rem}.avatar.svelte-fp3p9h{width:80%}.data.svelte-fp3p9h{flex-direction:column;margin-right:1rem}.stat-wrapper.svelte-fp3p9h{flex-direction:column}.name.svelte-fp3p9h{flex-direction:row}.stats.svelte-fp3p9h{flex-direction:row}.gender.svelte-fp3p9h{height:1em}#hpbar.svelte-fp3p9h{background:green}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}