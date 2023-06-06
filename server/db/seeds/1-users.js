exports.seed = async function (knex) {
  await knex('users').insert([
    {
      id: 10001,
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      first_name: 'Jared',
      last_name: 'Pinfold',
      nickname: 'DestroyOrbison',
      email: 'user@example.org',
      public: true,
    },
    {
      id: 10002,
      auth0_id: 'auth0|231',
      first_name: 'Remington',
      last_name: 'Smythe',
      nickname: 'Remmy',
      email: 'remington@example.org',
      public: true,
    },
    {
      id: 10003,
      auth0_id: 'auth0|321',
      first_name: 'Gertrude',
      last_name: 'Diamond',
      nickname: 'D1am0nd',
      email: 'gertrude@example.org',
      public: true,
    },
    {
      id: 10004,
      auth0_id: 'auth0|132',
      first_name: 'Sloane',
      last_name: 'Trousers',
      nickname: 'STrousers',
      email: 'sloane@example.org',
      public: true,
    },
    {
      id: 10005,
      auth0_id: 'auth0|231',
      first_name: 'Steve',
      last_name: 'Puce',
      nickname: 'SecretBoi2001',
      email: 'steve@example.org',
      public: true,
    },
  ])
}
