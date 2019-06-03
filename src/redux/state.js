let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi Yo", likesCount: 15 },
      { id: 2, message: "Hello", likesCount: 25 },
      { id: 3, message: "Welcome", likesCount: 5 }
    ]
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: "Evgeniy" },
      { id: 2, name: "Aleksey" },
      { id: 3, name: "Olya" },
      { id: 4, name: "Lena" },
      { id: 5, name: "Alecksandra" }
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "I'm fine" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" }
    ]
  }
};

export default state;
