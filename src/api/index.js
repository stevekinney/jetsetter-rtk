import { createServer, Model, RestSerializer } from 'miragejs';

const items = [
  'Sweatshirt',
  'Running shoes',
  'AirPods',
  'MacBook',
  'iPad',
  'USB-C cable',
  'Lightning cable',
  'Wallet',
  'MagSafe cable',
  'Apple Watch charger',
  'Power brick',
  'Toothbrush',
  'Toothpaste',
  'Deorderant',
  'Backpack',
  'Vitamins',
  'Kindle',
  'Micro-USB cable',
  'Sleep mask',
  'Ear plugs',
  'Face masks',
  'Sony Walkman',
  'Emergency Vegan Bacon',
];

const ApplicationSerializer = RestSerializer.extend({});

export function makeServer({ environment = 'development' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer.extend(),
    },

    models: {
      item: Model,
    },

    routes() {
      this.timing = 2000;
      this.namespace = 'api';

      this.get('items');
      this.get('items/:id');
      this.put('items/:id');
      this.patch('items/:id');
      this.del('items/:id');
    },

    seeds(server) {
      for (const item of items) {
        server.create('item', {
          name: item,
          packed: !!Math.round(Math.random()),
        });
      }
      console.log(server.db.dump());
    },
  });
}
