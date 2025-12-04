export default {
  routes: [
    {
      method: "POST",
      path: "/chat",
      handler: "chat.handle",
      config: {
        auth: false,
      },
    },
  ],
};
