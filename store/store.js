import create from "zustand";

export const useStore = create((set) => ({
  //cart
  cart: {
    pizzas: [],
  },

  //add Pizza in cart
  addPizza: (data) =>
    set((state) => ({
      cart: {
        pizzas: [...state.cart.pizzas, data],
      },
    })),

  //Remove Pizza

  removePizza: (index) =>
    set((state) => ({
      cart: {
        pizzas: state.cart.pizzas.filter((_, i) => i != index),
      },
    })),

  //Reset Cart

  resetCart: () =>
    set(() => ({
      cart: {
        pizzas: [],
      },
    })),
}));
