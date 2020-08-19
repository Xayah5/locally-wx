Component({
  data: {
    selected: 0,
    list: [
      {
        "pagePath": "pages/home/home",
        "text": "home",
        "iconPath": "/assest/tabs/home.png",
        "selectedIconPath": "/assest/tabs/home-active.png",
        "icon": "home-o"
      },
      {
        "pagePath": "pages/message/message",
        "text": "message",
        "iconPath": "/assest/tabs/message.png",
        "selectedIconPath": "/assest/tabs/message-active.png",
        "icon": "friends-o"
      },
      {
        "pagePath": "pages/profile/profile",
        "text": "profile",
        "iconPath": "/assest/tabs/profile.png",
        "selectedIconPath": "/assest/tabs/profile-active.png",
        "icon": "setting-o"
      }
    ]
  },
  methods: {
    switchTab(e) {
      wx.switchTab({ url: '/' + this.data.list[e.detail].pagePath })
    }
  }
})