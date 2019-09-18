<template>
  <div class="navigator">
    <div class="menu-item" v-for="menu in menuItems" :key="menu.id">
      {{menu.title}}
      <div class="sub-menu">
        <router-link
          v-for="childmenu in menu.children"
          :key="childmenu.id"
          :to="{ path: childmenu.link }"
        >
          <p>{{childmenu.title}}</p>
        </router-link>
      </div>
    </div>
    <select class="lang-select" @change="changeLocale()" v-model="currentLocale">
      <option v-for="entry in languages" :key="entry.title" :value="entry.language">
        <span :iso="entry.flag" v-bind:squared="false" />
        {{entry.title}}
      </option>
    </select>
    <span class="lang-select">Login</span>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  name: "Navigator",
  data() {
    return {
      currentLocale: "jp",
      menuItems: [
        {
          id: 100,
          title: "入荷",
          link: "",
          children: [
            {
              id: 101,
              title: "入庫出荷",
              link: "datafilter",
              children: []
            },
            {
              id: 102,
              title: "出庫入荷",
              link: "demo",
              children: []
            }
          ]
        },
        {
          id: 200,
          title: "入庫",
          link: "",
          children: []
        },
        {
          id: 300,
          title: "出荷",
          link: "",
          children: []
        },
        {
          id: 400,
          title: "出庫",
          link: "",
          children: []
        },
        {
          id: 500,
          title: "棚卸",
          link: "",
          children: []
        },
        {
          id: 600,
          title: "照会",
          link: "",
          children: []
        },
        {
          id: 700,
          title: "リカバリ",
          link: "",
          children: []
        },
        {
          id: 800,
          title: "メンテナンス",
          link: "",
          children: []
        },
        {
          id: 900,
          title: "通信",
          link: "",
          children: []
        },
        {
          id: 1000,
          title: "システム",
          link: "",
          children: []
        },
        {
          id: 1100,
          title: "サービス",
          link: "",
          children: []
        }
      ],
      languages: [
        { flag: "jp", language: "jp", title: "日本" },
        { flag: "us", language: "en", title: "English" },
        { flag: "cn", language: "cn", title: "中文" },
        { flag: "vn", language: "vn", title: "Tiếng Việt" },
        { flag: "es", language: "es", title: "Español" }
      ]
    };
  },
  methods: {
    changeLocale() {
      i18n.locale = this.currentLocale;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigator {
  color: white;
  display: inline-block;
  margin-top: 10px;
  width: 90%;
}
.menu-item {
  display: inline;
  padding-right: 20px;
  padding-left: 20px;
}
.menu-item:hover {
  background-color: #073565;
  cursor: pointer;
  border-radius: 6px;
}
.menu-item:hover .sub-menu {
  display: inline-block;
}
.lang-select {
  float: right;
  height: 24px;
}
.sub-menu {
  display: none;
  position: absolute;
  margin-top: 23px;
  margin-left: -40px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: black;
}
.sub-menu p {
  margin: 2px;
  cursor: pointer;
}
.sub-menu p:hover {
  background-color: bisque;
}
.testclass {
  margin-top: 20px;
}
</style>
