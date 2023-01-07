module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'sqlite_db.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
