<script>
  import NavButton from "./Components/NavButton.svelte";
  import Modal from "./Components/Modal.svelte";
</script>

<body>
  <div id="navbar">
    <NavButton
      icon_link="http://cdn.onlinewebfonts.com/svg/img_174253.png"
      nav_title="Party"
      modal_id="party"
    />
    <NavButton
      icon_link="https://freeiconshop.com/wp-content/uploads/edd/shopping-bag-outline.png"
      nav_title="Bag"
      modal_id="bag"
    />
    <NavButton 
      icon_link="https://www.shareicon.net/download/2016/08/06/807599_cards_512x512.png" 
      nav_title="Trainer Card" 
      modal_id="trcard" 
    />
    <NavButton
      icon_link="https://www.shareicon.net/download/2015/10/04/111864_gear_512x512.png"
      nav_title="Settings"
      modal_id="settings"
    />
    <NavButton
      icon_link="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_info_outline_48px-512.png"
      nav_title="About"
      modal_id="about"
    />
  </div>
  <div id="version">
    1.0.3
  </div>
  <Modal modal_title="Party" id="party">
      <div>
          Idk how this is gonna be formatted
      </div>
  </Modal>
  <Modal modal_title="Bag" id="bag">
      <div>
          Idk how this is gonna be formatted
      </div>
  </Modal>
  <Modal modal_title="Trainer Card" id="trcard">
    <div>
      Some sort of trainer card creator.
    </div>
  </Modal>
  <Modal modal_title="Settings" id="settings">
    <div>
      This will have UI customization, account stuff, and a bunch more later.
    </div>
  </Modal>
  <Modal modal_title="About" id="about">
    <div>
      This will have information about all the backend stuff like how it was made with Svelte and uses GUN.js for online functionality and uses pokeapi.co for getting information on all the existing pokemon and their regions.
    </div>
  </Modal>
  <canvas id="overworld">
</body>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<style>
  #navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 5vw;
    z-index: 1000;
    background-color: rgb(108, 54, 196);
  }

  #version {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
    color: black;
    background-color: white;
    font-family: "Radio Canada", sans-serif;
  }

  #overworld {
    width: 95vw;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: maroon;
  }
</style>
