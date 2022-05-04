import './Modal.svelte.css.proxy.js';
/* src/Components/Modal.svelte generated by Svelte v3.48.0 */
import {
	SvelteComponent,
	append,
	attr,
	create_slot,
	detach,
	element,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	listen,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out,
	update_slot_base
} from "../../snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div1;
	let div0;
	let span;
	let t1;
	let header;
	let t2;
	let t3;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			span = element("span");
			span.textContent = "×";
			t1 = space();
			header = element("header");
			t2 = text(/*modal_title*/ ctx[0]);
			t3 = space();
			if (default_slot) default_slot.c();
			attr(span, "class", "close svelte-rbzz9b");
			attr(header, "class", "svelte-rbzz9b");
			attr(div0, "class", "modal-content svelte-rbzz9b");
			attr(div1, "id", /*id*/ ctx[1]);
			attr(div1, "class", "modal svelte-rbzz9b");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, span);
			append(div0, t1);
			append(div0, header);
			append(header, t2);
			append(div0, t3);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(span, "click", /*close*/ ctx[2]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*modal_title*/ 1) set_data(t2, /*modal_title*/ ctx[0]);

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*id*/ 2) {
				attr(div1, "id", /*id*/ ctx[1]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { modal_title, id } = $$props;

	function close() {
		var modal = document.getElementById(id);
		modal.style.opacity = 0;

		modal.addEventListener("transitionend", function (e) {
			modal.style.display = "none";
		});
	}

	$$self.$$set = $$props => {
		if ('modal_title' in $$props) $$invalidate(0, modal_title = $$props.modal_title);
		if ('id' in $$props) $$invalidate(1, id = $$props.id);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [modal_title, id, close, $$scope, slots];
}

class Modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { modal_title: 0, id: 1 });
	}
}

export default Modal;