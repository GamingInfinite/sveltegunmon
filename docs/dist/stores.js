import { writable } from "../snowpack/pkg/svelte/store.js";

const storedColors = localStorage.getItem("colors");

export const viewport = writable(0);
export const colors = writable(storedColors);

colors.subscribe(value => {
    localStorage.setItem("colors", value);
})