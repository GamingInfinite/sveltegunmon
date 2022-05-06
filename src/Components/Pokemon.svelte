<script>
  export let number = -1,
    nick = "",
    gender = 0,
    item = "";

  let mondata;
  let speciesdata;
  let avatar_link;
  let gender_link;

  const getMon = async () => {
    const species = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/" + number
    );
    const jsonspecies = await species.json();
    speciesdata = jsonspecies;

    let varieties = jsonspecies.varieties;
    let defaultvariety;
    for (let i = 0; i < varieties.length; i++) {
      const element = varieties[i];

      if (element.is_default) {
        defaultvariety = element;
      }

      //Determine Pokemon Icon Based on Gender (if any difference)
      if (
        element.pokemon.name == jsonspecies.name + "-male" ||
        element.pokemon.name == jsonspecies.name + "-female"
      ) {
        switch (gender) {
          case 0:
            const mon = await fetch(defaultvariety.pokemon.url);
            const jsonmon = await mon.json();
            mondata = jsonmon;
            break;
          case 1:
            if (element.pokemon.name == jsonspecies.name + "-female") {
              const mon = await fetch(element.pokemon.url);
              const jsonmon = await mon.json();
              mondata = jsonmon;
            }
            break;
          case 2:
            if (element.pokemon.name == jsonspecies.name + "-male") {
              const mon = await fetch(element.pokemon.url);
              const jsonmon = await mon.json();
              mondata = jsonmon;
            }
            break;
          default:
            break;
        }

        if (typeof mondata !== "undefined") {
          break;
        }
      } else {
        const mon = await fetch(defaultvariety.pokemon.url);
        const jsonmon = await mon.json();
        mondata = jsonmon;
      }

      //Determine Pokemon Icon Based on Item (Specifically like Giratina Origin Form, and Zacian or Zamazenta-Crowned.  This doesn't count for primal reversion because that occurs during battle)
      
    }
  };

  if (number > 0) {
    getMon().then(() => {
      //Pokemon Icon
      avatar_link = mondata.sprites.front_default;

      //Pokemon Name
      if (nick == "") {
        nick =
          speciesdata.name.charAt(0).toUpperCase() + speciesdata.name.slice(1);
      }

      //Pokemon Gender
      switch (gender) {
        case 0:
          break;
        case 1:
          gender_link = "https://twemoji.maxcdn.com/v/14.0.2/72x72/2640.png";
          break;
        case 2:
          gender_link = "https://twemoji.maxcdn.com/v/14.0.2/72x72/2642.png";
          break;
        default:
          break;
      }
    });
  } else {
    nick = "<Empty Slot>";
  }

  if (avatar_link == null) {
    avatar_link = "http://cdn.onlinewebfonts.com/svg/img_174253.png";
  }
</script>

<svelte:head>
  <script
    src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
    crossorigin="anonymous"></script>
</svelte:head>

<div class="partyslot">
  <div class="avatarwrapper">
    <img src={avatar_link} alt="pokemonimg" class="avatar" />
  </div>
  <div class="data">
    <div class="name">
      {nick}
      <img alt="" src={gender_link} class="gender" />
    </div>
    <div class="stats">HP ATK DEF SPATK SPDEF SPEED</div>
  </div>
</div>

<style>
  .partyslot {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    border-color: black;
    border-style: solid;
    border-radius: 40px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .avatarwrapper {
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 0.25rem;
    width: 5%;
    margin-right: 0.5rem;
  }

  .avatar {
    width: 80%;
  }

  .data {
    flex-direction: column;
  }

  .name {
    flex-direction: row;
  }

  .stats {
    flex-direction: row;
  }

  .gender {
    height: 1em;
  }
</style>
