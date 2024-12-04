// Componente genérico para ítems del menú usando slots
const MenuItem = {
    template: `
      <li>
          <a href="#">
              <slot></slot>
          </a>
      </li>
    `,
  };
  
  // Componentes específicos para cada ítem del menú
  const MacItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const IpadItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const IphoneItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const WatchItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const AirpodsItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const TvHomeItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const EntertainmentItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const SupportItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  const WhereToBuyItem = {
    template: `
      <menu-item>
          <slot></slot>
      </menu-item>
    `,
    components: { 'menu-item': MenuItem },
  };
  
  // Crear la aplicación y registrar los componentes
  const app = Vue.createApp({});
  app.component('mac-item', MacItem);
  app.component('ipad-item', IpadItem);
  app.component('iphone-item', IphoneItem);
  app.component('watch-item', WatchItem);
  app.component('airpods-item', AirpodsItem);
  app.component('tv-home-item', TvHomeItem);
  app.component('entertainment-item', EntertainmentItem);
  app.component('support-item', SupportItem);
  app.component('where-to-buy-item', WhereToBuyItem);
  app.mount('#app');
  