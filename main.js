/* exported app */

const DICES = [
  "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM352 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
  "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM352 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
  "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM224 176a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM224 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64z",
  "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM224 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM224 320a32 32 0 1 0 0 64 32 32 0 1 0 0-64z",
];

let app = {
  data() {
    return {
      debug: true,
      debugData:
        "Gambling time\n<h2>Have a <a href='https://orteil.dashnet.org/cookieclicker/'>cookie</a> !</h2>\nYou fail !\n2d6\n6",
      readonly: false,
      header: "",
      successText: "",
      failureText: "",
      alreadyRolledText: "<h2>You already rolled today</h2>",
      diceCount: 1,
      diceSides: 6,
      targetScore: 0,
      dices: [],
      rolling: false,
    };
  },
  computed: {
    debugUrl() {
      return window.location.pathname + "?z=" + this.encodeData(this.debugData);
    },
    score() {
      return this.dices.reduce((s, v) => s + v, 0);
    },
    success() {
      return this.score >= this.targetScore;
    },
    savedData() {
      const url = new URL(window.location);
      return this.getCookie(url.searchParams.get("z"), null);
    },
    alreadyRolled() {
      return !this.debug && this.savedData !== null;
    },
  },
  watch: {
    debugData(value) {
      this.readZData(value);
    },
  },
  methods: {
    showApp() {
      document.getElementById("app").setAttribute("style", "");
    },
    roll() {
      this.rolling = true;
      setTimeout(() => {
        this.rolling = false;
        if (!this.debug) {
          this.readonly = true;
          const url = new URL(window.location);
          this.setCookie(url.searchParams.get("z"), this.dices.join(","), 1);
        }
      }, 1000);
    },
    updateDices() {
      this.dices = this.dices.map(() => this.randRange(1, this.diceSides + 1));
    },
    randRange(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    base64URLTobase64(str) {
      const base64Encoded = str.replace(/-/g, "+").replace(/_/g, "/");
      const padding =
        str.length % 4 === 0 ? "" : "=".repeat(4 - (str.length % 4));
      return base64Encoded + padding;
    },
    base64tobase64URL(str) {
      return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    },
    decodeData(str) {
      return LZString.decompressFromBase64(
        this.base64URLTobase64(str.split("").reverse().join(""))
      );
    },
    encodeData(str) {
      return this.base64tobase64URL(LZString.compressToBase64(str))
        .split("")
        .reverse()
        .join("");
    },
    normalize(str) {
      return str
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    },
    getDiceSvg(value) {
      return DICES[Math.min(value, DICES.length) - 1];
    },
    readZData(str) {
      this.debugData = str;
      const parts = str.trim().split("\n");
      if (parts.length < 5) {
        return true;
      }
      this.header = parts.shift();
      if (!/<[^>]*>/.test(this.header)) {
        this.header = `<h1>${this.header}</h1>`;
      }
      this.successText = parts.shift();
      if (!/<[^>]*>/.test(this.successText)) {
        this.successText = `<h2>${this.successText}</h2>`;
      }
      this.failureText = parts.shift();
      if (!/<[^>]*>/.test(this.failureText)) {
        this.failureText = `<h2>${this.failureText}</h2>`;
      }
      const rawDice = parts.shift();
      if (!/^\d+d\d$/.test(rawDice)) {
        this.diceCount = 1;
        this.diceSides = 6;
      } else {
        this.diceCount = parseInt(rawDice.split("d")[0]);
        this.diceSides = parseInt(rawDice.split("d")[1]);
      }
      this.dices = new Array(this.diceCount).fill(this.diceSides);
      const rawTarget = parts.shift();
      if (!/^\d+$/.test(rawTarget)) {
        this.targetScore = 0;
      } else {
        this.targetScore = parseInt(rawTarget);
      }
      if (parts.length) {
        this.alreadyRolledText = parts.shift();
        if (!/<[^>]*>/.test(this.alreadyRolledText)) {
          this.alreadyRolledText = `<h2>${this.alreadyRolledText}</h2>`;
        }
      }
      return false;
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      console.log(cname + "=" + cvalue + "; path=/; " + expires);
      document.cookie = cname + "=" + cvalue + "; path=/; " + expires;
    },
    getCookie(cname, defaultValue) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return defaultValue;
    },
    initApp() {
      const url = new URL(window.location);
      if (url.searchParams.get("z") !== null) {
        this.debug = this.readZData(this.decodeData(url.searchParams.get("z")));
      }
      if (this.debug) {
        this.readZData(this.debugData);
      }
      if (this.alreadyRolled) {
        this.dices = this.savedData.split(",").map((v) => parseInt(v));
      }
    },
  },
  beforeMount: function () {
    this.initApp();
  },
  mounted: function () {
    console.log("app mounted");
    setTimeout(this.showApp);
    setInterval(() => {
      if (this.rolling) {
        this.updateDices();
      }
    }, 50);
  },
};

window.onload = () => {
  app = Vue.createApp(app);
  app.mount("#app");
};
