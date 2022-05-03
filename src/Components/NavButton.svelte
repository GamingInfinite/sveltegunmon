<script>
  export let icon_link, nav_title, modal_id;

  function handleclick() {
      var modal = document.getElementById(modal_id);
      modal.style.display = "block";
      modal.style.opacity = 0.1;
      modal.style.opacity = 1;
  }
</script>

<div class="navitem" on:click={handleclick}>
  <img src={icon_link} alt="bruh" class="navimage" />
  <br />
  {nav_title}
</div>

<style>
  .navimage {
    width: 75%;
  }

  .navitem {
    font-family: "Radio Canada", sans-serif;
    margin-top: 5%;
    margin-bottom: 5%;
  }
</style>
