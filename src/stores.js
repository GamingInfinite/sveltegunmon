import { writable } from "svelte/store";

const storedColors = JSON.parse(localStorage.getItem("colors"));

export const viewport = writable(0);
export const colors = writable(storedColors);

export const party = writable({
  party: [
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
    {
      id: 0,
      gender: 0,
      item: 0,
      nick: ""
    },
  ],
});

colors.subscribe((value) => {
  localStorage.setItem("colors", JSON.stringify(value));
});
