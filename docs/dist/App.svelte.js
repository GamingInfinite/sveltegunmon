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
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../snowpack/pkg/svelte/internal.js";

import NavButton from "./Components/NavButton.svelte.js";
import Modal from "./Components/Modal.svelte.js";

function create_default_slot_1(ctx) {
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

// (32:2) <Modal modal_title="Bag" id="bag">
function create_default_slot(ctx) {
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

function create_fragment(ctx) {
	let body;
	let div0;
	let navbutton0;
	let t0;
	let navbutton1;
	let t1;
	let navbutton2;
	let t2;
	let div1;
	let t4;
	let modal0;
	let t5;
	let modal1;
	let t6;
	let canvas;
	let t7;
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

	modal0 = new Modal({
			props: {
				modal_title: "Party",
				id: "party",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	modal1 = new Modal({
			props: {
				modal_title: "Bag",
				id: "bag",
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
			div1 = element("div");
			div1.textContent = "1.0.2";
			t4 = space();
			create_component(modal0.$$.fragment);
			t5 = space();
			create_component(modal1.$$.fragment);
			t6 = space();
			canvas = element("canvas");
			t7 = space();
			link0 = element("link");
			link1 = element("link");
			link2 = element("link");
			attr(div0, "id", "navbar");
			attr(div0, "class", "svelte-182fq6j");
			attr(div1, "id", "version");
			attr(div1, "class", "svelte-182fq6j");
			attr(canvas, "id", "overworld");
			attr(canvas, "class", "svelte-182fq6j");
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
			append(body, t2);
			append(body, div1);
			append(body, t4);
			mount_component(modal0, body, null);
			append(body, t5);
			mount_component(modal1, body, null);
			append(body, t6);
			append(body, canvas);
			insert(target, t7, anchor);
			append(document.head, link0);
			append(document.head, link1);
			append(document.head, link2);
			current = true;
		},
		p(ctx, [dirty]) {
			const modal0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				modal0_changes.$$scope = { dirty, ctx };
			}

			modal0.$set(modal0_changes);
			const modal1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				modal1_changes.$$scope = { dirty, ctx };
			}

			modal1.$set(modal1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(navbutton0.$$.fragment, local);
			transition_in(navbutton1.$$.fragment, local);
			transition_in(navbutton2.$$.fragment, local);
			transition_in(modal0.$$.fragment, local);
			transition_in(modal1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(navbutton0.$$.fragment, local);
			transition_out(navbutton1.$$.fragment, local);
			transition_out(navbutton2.$$.fragment, local);
			transition_out(modal0.$$.fragment, local);
			transition_out(modal1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(body);
			destroy_component(navbutton0);
			destroy_component(navbutton1);
			destroy_component(navbutton2);
			destroy_component(modal0);
			destroy_component(modal1);
			if (detaching) detach(t7);
			detach(link0);
			detach(link1);
			detach(link2);
		}
	};
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;