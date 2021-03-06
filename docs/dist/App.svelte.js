import './App.svelte.css.proxy.js';
/* src/App.svelte generated by Svelte v3.48.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	globals,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../snowpack/pkg/svelte/internal.js";

const { document: document_1 } = globals;
import { HsvPicker } from "../snowpack/pkg/svelte-color-picker.js";
import NavButton from "./Components/NavButton.svelte.js";
import Modal from "./Components/Modal.svelte.js";
import Party from "./Components/Party.svelte.js";
import { colors } from "./stores.js";

function create_default_slot_4(ctx) {
	let div;
	let party;
	let current;
	party = new Party({});

	return {
		c() {
			div = element("div");
			create_component(party.$$.fragment);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(party, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(party.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(party.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(party);
		}
	};
}

// (86:2) <Modal modal_title="Bag" id="bag">
function create_default_slot_3(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "Idk how this is gonna be formatted";
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (89:2) <Modal modal_title="Trainer Card" id="trcard">
function create_default_slot_2(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.textContent = "Some sort of trainer card creator.";
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (92:2) <Modal modal_title="Settings" id="settings">
function create_default_slot_1(ctx) {
	let div2;
	let div0;
	let hsvpicker;
	let t0;
	let div1;
	let current;

	hsvpicker = new HsvPicker({
			props: { startColor: /*startColor*/ ctx[0] }
		});

	hsvpicker.$on("colorChange", /*colorCallback*/ ctx[1]);

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			create_component(hsvpicker.$$.fragment);
			t0 = space();
			div1 = element("div");
			div1.textContent = "Sign In/Up";
			attr(div0, "class", "settingscol svelte-8n3em5");
			attr(div1, "class", "settingscol svelte-8n3em5");
			attr(div2, "class", "settings svelte-8n3em5");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			mount_component(hsvpicker, div0, null);
			append(div2, t0);
			append(div2, div1);
			current = true;
		},
		p(ctx, dirty) {
			const hsvpicker_changes = {};
			if (dirty & /*startColor*/ 1) hsvpicker_changes.startColor = /*startColor*/ ctx[0];
			hsvpicker.$set(hsvpicker_changes);
		},
		i(local) {
			if (current) return;
			transition_in(hsvpicker.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(hsvpicker.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_component(hsvpicker);
		}
	};
}

// (100:2) <Modal modal_title="About" id="about">
function create_default_slot(ctx) {
	let div;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<p>Most websites are designed much like a body is. The way it&#39;s structured
        are the bones, the way works behind the scenes are nerves, and the way
        that it looks is the skin. In most cases the way a website looks is
        completely customized to what the creator wants it to look like, as is
        the case with this one, in most large scale projects the bones and
        nerves are made up of 3rd-party packages that give HTML, Javascript, and
        CSS more power.</p> 
      <p>This site is powered by Svelte for the frontend design, and it&#39;s online
        support (while not finished yet), is powered by GUN.js. Svelte is what
        is known as a React Framework, which is essentially a frontend tool that
        allows the programmer to interact with the elements more easily and
        effectively. GUN.js is a decentralized database that works via peer to
        peer networking and relay servers. It effectively creates a network of
        computers that all have different pieces of the database, but when
        they&#39;re all online it creates one massive database that could
        potentially hold a LOT of data.</p> 
      <p>One other huge shoutout is PokeAPI, an API backend for any web
        application to get literally any and all data they could ever want about
        Pokemon. If this project ends up becoming large enough I will remove any
        and ALL content related to Pokemon and replace it with my own (hopefully
        user currated) data. This project would not be getting off the ground
        without PokeAPI.</p> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" alt="svelte" class="aboutlogo svelte-8n3em5"/> 
      <img src="https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667" alt="gunjs" class="aboutlogo svelte-8n3em5"/> 
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi" class="aboutlogo svelte-8n3em5"/>`;

			attr(div, "class", "about svelte-8n3em5");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let body;
	let div0;
	let navbutton0;
	let t0;
	let navbutton1;
	let t1;
	let navbutton2;
	let t2;
	let navbutton3;
	let t3;
	let navbutton4;
	let t4;
	let div1;
	let t6;
	let modal0;
	let t7;
	let modal1;
	let t8;
	let modal2;
	let t9;
	let modal3;
	let t10;
	let modal4;
	let t11;
	let canvas;
	let t12;
	let link0;
	let link1;
	let link2;
	let current;

	navbutton0 = new NavButton({
			props: {
				icon_link: "http://cdn.onlinewebfonts.com/svg/img_174253.png",
				nav_title: "Party",
				modal_id: "party"
			}
		});

	navbutton1 = new NavButton({
			props: {
				icon_link: "https://freeiconshop.com/wp-content/uploads/edd/shopping-bag-outline.png",
				nav_title: "Bag",
				modal_id: "bag"
			}
		});

	navbutton2 = new NavButton({
			props: {
				icon_link: "https://www.shareicon.net/download/2016/08/06/807599_cards_512x512.png",
				nav_title: "Trainer Card",
				modal_id: "trcard"
			}
		});

	navbutton3 = new NavButton({
			props: {
				icon_link: "http://cdn.onlinewebfonts.com/svg/img_537102.png",
				nav_title: "Settings",
				modal_id: "settings"
			}
		});

	navbutton4 = new NavButton({
			props: {
				icon_link: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_info_outline_48px-512.png",
				nav_title: "About",
				modal_id: "about"
			}
		});

	modal0 = new Modal({
			props: {
				modal_title: "Party",
				id: "party",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	modal1 = new Modal({
			props: {
				modal_title: "Bag",
				id: "bag",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			}
		});

	modal2 = new Modal({
			props: {
				modal_title: "Trainer Card",
				id: "trcard",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	modal3 = new Modal({
			props: {
				modal_title: "Settings",
				id: "settings",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	modal4 = new Modal({
			props: {
				modal_title: "About",
				id: "about",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			body = element("body");
			div0 = element("div");
			create_component(navbutton0.$$.fragment);
			t0 = space();
			create_component(navbutton1.$$.fragment);
			t1 = space();
			create_component(navbutton2.$$.fragment);
			t2 = space();
			create_component(navbutton3.$$.fragment);
			t3 = space();
			create_component(navbutton4.$$.fragment);
			t4 = space();
			div1 = element("div");
			div1.textContent = "1.0.0";
			t6 = space();
			create_component(modal0.$$.fragment);
			t7 = space();
			create_component(modal1.$$.fragment);
			t8 = space();
			create_component(modal2.$$.fragment);
			t9 = space();
			create_component(modal3.$$.fragment);
			t10 = space();
			create_component(modal4.$$.fragment);
			t11 = space();
			canvas = element("canvas");
			t12 = space();
			link0 = element("link");
			link1 = element("link");
			link2 = element("link");
			attr(div0, "id", "navbar");
			attr(div0, "class", "svelte-8n3em5");
			attr(div1, "id", "version");
			attr(div1, "class", "svelte-8n3em5");
			attr(canvas, "id", "overworld");
			attr(canvas, "class", "svelte-8n3em5");
			attr(link0, "rel", "preconnect");
			attr(link0, "href", "https://fonts.googleapis.com");
			attr(link1, "rel", "preconnect");
			attr(link1, "href", "https://fonts.gstatic.com");
			attr(link1, "crossorigin", "");
			attr(link2, "href", "https://fonts.googleapis.com/css2?family=Radio+Canada:wght@500&display=swap");
			attr(link2, "rel", "stylesheet");
		},
		m(target, anchor) {
			insert(target, body, anchor);
			append(body, div0);
			mount_component(navbutton0, div0, null);
			append(div0, t0);
			mount_component(navbutton1, div0, null);
			append(div0, t1);
			mount_component(navbutton2, div0, null);
			append(div0, t2);
			mount_component(navbutton3, div0, null);
			append(div0, t3);
			mount_component(navbutton4, div0, null);
			append(body, t4);
			append(body, div1);
			append(body, t6);
			mount_component(modal0, body, null);
			append(body, t7);
			mount_component(modal1, body, null);
			append(body, t8);
			mount_component(modal2, body, null);
			append(body, t9);
			mount_component(modal3, body, null);
			append(body, t10);
			mount_component(modal4, body, null);
			append(body, t11);
			append(body, canvas);
			insert(target, t12, anchor);
			append(document_1.head, link0);
			append(document_1.head, link1);
			append(document_1.head, link2);
			current = true;
		},
		p(ctx, [dirty]) {
			const modal0_changes = {};

			if (dirty & /*$$scope*/ 4) {
				modal0_changes.$$scope = { dirty, ctx };
			}

			modal0.$set(modal0_changes);
			const modal1_changes = {};

			if (dirty & /*$$scope*/ 4) {
				modal1_changes.$$scope = { dirty, ctx };
			}

			modal1.$set(modal1_changes);
			const modal2_changes = {};

			if (dirty & /*$$scope*/ 4) {
				modal2_changes.$$scope = { dirty, ctx };
			}

			modal2.$set(modal2_changes);
			const modal3_changes = {};

			if (dirty & /*$$scope, startColor*/ 5) {
				modal3_changes.$$scope = { dirty, ctx };
			}

			modal3.$set(modal3_changes);
			const modal4_changes = {};

			if (dirty & /*$$scope*/ 4) {
				modal4_changes.$$scope = { dirty, ctx };
			}

			modal4.$set(modal4_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navbutton0.$$.fragment, local);
			transition_in(navbutton1.$$.fragment, local);
			transition_in(navbutton2.$$.fragment, local);
			transition_in(navbutton3.$$.fragment, local);
			transition_in(navbutton4.$$.fragment, local);
			transition_in(modal0.$$.fragment, local);
			transition_in(modal1.$$.fragment, local);
			transition_in(modal2.$$.fragment, local);
			transition_in(modal3.$$.fragment, local);
			transition_in(modal4.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbutton0.$$.fragment, local);
			transition_out(navbutton1.$$.fragment, local);
			transition_out(navbutton2.$$.fragment, local);
			transition_out(navbutton3.$$.fragment, local);
			transition_out(navbutton4.$$.fragment, local);
			transition_out(modal0.$$.fragment, local);
			transition_out(modal1.$$.fragment, local);
			transition_out(modal2.$$.fragment, local);
			transition_out(modal3.$$.fragment, local);
			transition_out(modal4.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(body);
			destroy_component(navbutton0);
			destroy_component(navbutton1);
			destroy_component(navbutton2);
			destroy_component(navbutton3);
			destroy_component(navbutton4);
			destroy_component(modal0);
			destroy_component(modal1);
			destroy_component(modal2);
			destroy_component(modal3);
			destroy_component(modal4);
			if (detaching) detach(t12);
			detach(link0);
			detach(link1);
			detach(link2);
		}
	};
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
} // return "#FFFFFF";

function instance($$self, $$props, $$invalidate) {
	var startColor = JSON.parse(localStorage.getItem("colors"));

	if (startColor == null) {
		startColor = { r: 255, g: 255, b: 255, a: 1 };
	}

	startColor = rgbToHex(startColor.r, startColor.g, startColor.b);

	function colorCallback(rgba) {
		colors.set(rgba.detail);
	}

	colors.subscribe(value => {
		var navbar = document.getElementById("navbar");

		if (navbar != null) {
			if (value == null) {
				navbar.style.backgroundColor = "rgb(" + startColor.r + "," + startColor.g + "," + startColor.b + ")";
			}

			navbar.style.backgroundColor = "rgb(" + value.r + "," + value.g + "," + value.b + ")";
		}

		if (value == null) {
			
		} else {
			$$invalidate(0, startColor = rgbToHex(value.r, value.g, value.b));
		}
	});

	return [startColor, colorCallback];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;