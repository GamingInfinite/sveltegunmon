<script>
  import { HsvPicker } from "svelte-color-picker";

  import NavButton from "./Components/NavButton.svelte";
  import Modal from "./Components/Modal.svelte";
  import Party from "./Components/Party.svelte";

  import { colors } from "./stores";

  var startColor = JSON.parse(localStorage.getItem("colors"));
  if (startColor == null) {
    startColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    };
  }
  startColor = rgbToHex(startColor.r, startColor.g, startColor.b);

  function colorCallback(rgba) {
    colors.set(rgba.detail);
  }

  colors.subscribe((value) => {
    var navbar = document.getElementById("navbar");
    if (navbar != null) {
      if (value == null) {
        navbar.style.backgroundColor =
          "rgb(" + startColor.r + "," + startColor.g + "," + startColor.b + ")";
      }
      navbar.style.backgroundColor =
        "rgb(" + value.r + "," + value.g + "," + value.b + ")";
    }
    if (value == null) {
    } else {
      startColor = rgbToHex(value.r, value.g, value.b);
    }
  });

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // return "#FFFFFF";
  }
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
      icon_link="http://cdn.onlinewebfonts.com/svg/img_537102.png"
      nav_title="Settings"
      modal_id="settings"
    />
    <NavButton
      icon_link="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_info_outline_48px-512.png"
      nav_title="About"
      modal_id="about"
    />
  </div>
  <div id="version">1.0.0</div>
  <Modal modal_title="Party" id="party">
    <div>
      <Party />
    </div>
  </Modal>
  <Modal modal_title="Bag" id="bag">
    <div>Idk how this is gonna be formatted</div>
  </Modal>
  <Modal modal_title="Trainer Card" id="trcard">
    <div>Some sort of trainer card creator.</div>
  </Modal>
  <Modal modal_title="Settings" id="settings">
    <div class="settings">
      <div class="settingscol">
        <HsvPicker on:colorChange={colorCallback} {startColor} />
      </div>
      <div class="settingscol">Sign In/Up</div>
    </div>
  </Modal>
  <Modal modal_title="About" id="about">
    <div class="about">
      <p>
        Most websites are designed much like a body is. The way it's structured
        are the bones, the way works behind the scenes are nerves, and the way
        that it looks is the skin. In most cases the way a website looks is
        completely customized to what the creator wants it to look like, as is
        the case with this one, in most large scale projects the bones and
        nerves are made up of 3rd-party packages that give HTML, Javascript, and
        CSS more power.
      </p>
      <p>
        This site is powered by Svelte for the frontend design, and it's online
        support (while not finished yet), is powered by GUN.js. Svelte is what
        is known as a React Framework, which is essentially a frontend tool that
        allows the programmer to interact with the elements more easily and
        effectively. GUN.js is a decentralized database that works via peer to
        peer networking and relay servers. It effectively creates a network of
        computers that all have different pieces of the database, but when
        they're all online it creates one massive database that could
        potentially hold a LOT of data.
      </p>
      <p>
        One other huge shoutout is PokeAPI, an API backend for any web
        application to get literally any and all data they could ever want about
        Pokemon. If this project ends up becoming large enough I will remove any
        and ALL content related to Pokemon and replace it with my own (hopefully
        user currated) data. This project would not be getting off the ground
        without PokeAPI.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
        alt="svelte"
        class="aboutlogo"
      />
      <img
        src="https://camo.githubusercontent.com/64213f411349db936a0fa36ef41741b170d4c8d34d1cc0d1c887f7d880838707/68747470733a2f2f636c6475702e636f6d2f5445793979476834356c2e737667"
        alt="gunjs"
        class="aboutlogo"
      />
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="pokeapi"
        class="aboutlogo"
      />
    </div>
  </Modal>
  <canvas id="overworld" />
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

  .settings {
    display: flex;
    flex-direction: row;
  }

  .settingscol {
    flex-direction: column;
    margin-right: 1rem;
  }

  .settingscol:last-of-type {
    flex-direction: column;
    margin-right: 0rem;
  }

  .about {
    text-align: center;
  }

  .aboutlogo {
    height: 10vh;
  }
</style>
