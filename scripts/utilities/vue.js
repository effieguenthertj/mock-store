// This file defines a custom HTML element for creating and managing Vue.js instances

import { createApp } from 'vue';

/** @constant {object} configCache - Vue instance options cache */
const configCache = {};

/**
 * Initialize Vue instance
 * @param {object} options - Instance options
 * @param {object} rootProps - Props to be passed to the root component
 * @returns {object} app - Copy of main Vue instance
 */
const init = (options = {}, rootProps = {}) => {
  const app = createApp(options, rootProps)
  return app;
};

/**
 * Load element config
 * @param {string} alias - Root element alias
 * @returns {Promise<object>} Promise to Vue instance
 */

const loadConfig = (alias) => {
  if (!(alias in configCache)) {
    configCache[alias] = import(`@instances/${alias}`)
      .then(({ default: Instance }) => Instance)
      .catch((error) => {
        window.console.warn(error);
        return {};
      });
  }
  return configCache[alias];
};

class VueApp extends HTMLElement {
  async connectedCallback() {
    const { uid, vue: alias, ...dataset } = this.dataset; // extracts <vue-app> attributes
    if (!uid) {
      const config = await loadConfig(alias); // prevents duplicate instances
      config.name = alias;
      const app = init(config, dataset); // initializes a vue instances
      const { _uid: instanceId } = app; 
      this.dataset.uid = instanceId;
      app.mount(this); // mounts the vue instance to the <vue-app> element
    }
  }

  disconnectedCallback() { 
    const { __vue_app__: vm } = this;
    if (vm) {
      vm.unmount(); // unmounts the vue instance when the element is removed from the DOM
    }
  }
}

customElements.define('vue-app', VueApp);