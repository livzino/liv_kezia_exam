const { create } = require("zustand");

export const useChoicesStore = create((set) => ({
  allChoices: {},
  updateChoices: (choice) =>
    set((state) => {
      const newChoices = { ...state.allChoices }; // Create a copy of the state
      newChoices[choice.id] = choice; // Update the copy with the new choice
      return { allChoices: newChoices }; // Return the updated state
    }),
}));
