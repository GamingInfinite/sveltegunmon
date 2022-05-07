<script>
  import Pokemon from "./Pokemon.svelte";

  import { party } from "../stores.js";

  let localparty;

  party.subscribe((value) => {
    localparty = value.party;
  });

  //Failsafe for if the Party Data is corrupted in some way
  if (typeof localparty == "undefined") {
    localparty = [
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
      {
        id: 0,
        gender: 0,
        item: 0,
        nick: "",
      },
    ];
  }
</script>

<div class="partywrapper">
  <Pokemon
    number={localparty[0].id}
    gender={localparty[0].gender}
    item={localparty[0].item}
    nick={localparty[0].nick}
  />
  <Pokemon
    number={localparty[1].id}
    gender={localparty[1].gender}
    item={localparty[1].item}
    nick={localparty[1].nick}
  />
  <Pokemon
    number={localparty[2].id}
    gender={localparty[2].gender}
    item={localparty[2].item}
    nick={localparty[2].nick}
  />
  <Pokemon
    number={localparty[3].id}
    gender={localparty[3].gender}
    item={localparty[3].item}
    nick={localparty[3].nick}
  />
  <Pokemon
    number={localparty[4].id}
    gender={localparty[4].gender}
    item={localparty[4].item}
    nick={localparty[4].nick}
  />
  <Pokemon
    number={localparty[5].id}
    gender={localparty[5].gender}
    item={localparty[5].item}
    nick={localparty[5].nick}
  />
</div>

<style>
  .partywrapper {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
