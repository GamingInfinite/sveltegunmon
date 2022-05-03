<script>
  export let modal_title, id;

  function close() {
    var modal = document.getElementById(id);
    modal.style.opacity = 0;

    modal.addEventListener("transitionend", function (e) {
      modal.style.display = "none";
    });
  }
</script>

<div {id} class="modal">
  <div class="modal-content">
    <span class="close" on:click={close}>&times;</span>
    <header>{modal_title}</header>
    <slot />
  </div>
</div>

<style>
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    font-family: "Radio Canada", sans-serif;
    z-index: 1001; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    opacity: 0;
    transition: opacity 1s ease;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 20px;
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  header {
    font-size: xx-large;
    text-decoration: underline;
  }
</style>
