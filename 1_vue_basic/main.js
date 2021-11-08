const app = Vue.createApp({
  data() {
    return {
      menus: [
        {
          id: 1,
          isShow: true,
          title: "Home",
        },
        {
          id: 2,
          isShow: false,
          title: "About",
        },
        {
          id: 3,
          isShow: true,
          title: "Products",
        },
      ],
    };
  },
  methods: {},
});

app.mount("#contact");
