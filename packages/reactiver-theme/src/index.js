import Root from "./Root";

export default {
  name: "reactiver-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isOpen: true,
    },
  },
  actions: {
    theme: {
      open: ({ state }) => {
        state.theme.isOpen = true;
      },
      close: ({ state }) => {
        state.theme.isOpen = false;
      },
    },
  },
};
