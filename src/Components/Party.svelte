<script>
  import Pokemon from "./Pokemon.svelte";
  
</script>

<div class="partywrapper">
    <Pokemon number={889} gender={2}></Pokemon>
    <Pokemon number={3} gender={2}></Pokemon>
    <Pokemon number={678} gender={1}></Pokemon>
    <Pokemon></Pokemon>
    <Pokemon></Pokemon>
    <Pokemon></Pokemon>
</div>

<style>
  .partywrapper {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
