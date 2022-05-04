import { writable } from "svelte/store";

const storedColors = localStorage.getItem("colors");

export const viewport = writable(0);
export const colors = writable(storedColors);

colors.subscribe(value => {
    localStorage.setItem("colors", value);
})