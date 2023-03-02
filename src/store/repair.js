import { create } from "zustand";

const useRepairStore = create(set => ({
  process: 50,
  increaseProcess: () => set(state => ({ process: state.process + 10 })),
  resetProcess: () => set(state => ({ process: 50 })),

  repair: {},
  setRepair: input => set({ repair: input }),
  resetRepair: () => set(state => ({ repair: {} })),
}));

export default useRepairStore;
