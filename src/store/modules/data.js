import configManager from "@/models/managers/config";
import itemsManager from "@/models/managers/items";
import globalMatrixManager from "@/models/managers/matrices/globalMatrix";
import globalPatternMatrixManager from "@/models/managers/matrices/globalPatternMatrix";
import personalMatrixManager from "@/models/managers/matrices/personalMatrix";
import personalPatternMatrixManager from "@/models/managers/matrices/personalPatternMatrix";
import stagesManager from "@/models/managers/stages";
import statsManager from "@/models/managers/stats";
import trendsManager from "@/models/managers/trends";
import zonesManager from "@/models/managers/zones";
import router from "@/router";
import store from "@/store";
import strings from "@/utils/strings";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    meta: {
      // current version
      v: 2,
    },
    data: {},
  },
  mutations: {
    storeData: (state, { name, value, server }) => {
      // this server has not stored any data, thus there's no such object. create one
      if (!state.data[server]) Vue.set(state.data, server, {});

      // store data into the corresponding object, keyed by the server ID
      Vue.set(state.data[server], name, {
        /** The data object last updated at time */
        upd: Date.now(),
        /** The content of the data object */
        c: value,
      });
    },
    clearData: (state) => {
      Vue.set(state, "data", {});
    },
    clearServerData: (state, server) => {
      Vue.delete(state.data, server);
    },
  },
  actions: {
    // eslint-disable-next-line
    async fetch({ commit }, refresh = false) {
      if (refresh) commit("clearData");
      configManager.refresh(refresh);
      itemsManager.refresh(refresh);
      stagesManager.refresh(refresh);
      zonesManager.refresh(refresh);
      globalMatrixManager.refresh(refresh);
      globalPatternMatrixManager.refresh(refresh);
      // disabled refresh personal matrix on refresh: too much pressure on backend. temp hack fix.
      // to actually refresh personal matrix, switch the source toggle to trigger it
      //
      if (
        router.currentRoute.matched.find((el) => el.name === "Stats") &&
        store.getters["dataSource/source"] === "personal" &&
        refresh
      ) {
        personalMatrixManager.refresh(refresh);
        personalPatternMatrixManager.refresh(refresh);
      }
      trendsManager.refresh(refresh);
      statsManager.refresh(refresh);
    },
    async refreshPersonalMatrix() {
      await Promise.all([
        personalMatrixManager.refresh(true),
        personalPatternMatrixManager.refresh(true),
      ]);
    },
    async refreshMatrix(refresh = false) {
      globalMatrixManager.refresh(refresh);
      globalPatternMatrixManager.refresh(refresh);
      // disabled refresh personal matrix on refresh: too much pressure on backend. temp hack fix.
      // to actually refresh personal matrix, switch the source toggle to trigger it
      //
      if (
        router.currentRoute.matched.find((el) => el.name === "Stats") &&
        store.getters["dataSource/source"] === "personal" &&
        refresh
      ) {
        personalMatrixManager.refresh(refresh);
        personalPatternMatrixManager.refresh(refresh);
      }
    },
    async clean({ commit }, server) {
      commit("clearServerData", server);
    },
  },
  getters: {
    byDataId: (state) => ({
      id,
      server = store.getters["dataSource/server"],
    }) => {
      if ("_shared" in state.data && id in state.data._shared)
        return state.data._shared[id];
      if (!(server in state.data) || !(id in state.data[server])) return {};

      return state.data[server][id];
    },
    content: (_, getters) => (query) => {
      return getters.byDataId(query).c;
    },
    updated: (_, getters) => (query) => {
      return getters.byDataId(query).upd;
    },
    stats: (state) => {
      return {
        size: strings.fileSize(JSON.stringify(state.data).length, true),
        keys: Object.keys(state.data),
      };
    },
  },
};
