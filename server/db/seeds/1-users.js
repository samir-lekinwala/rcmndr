exports.seed = async function (knex) {
  await knex('users').insert([
    {
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      first_name: 'Jared',
      last_name: 'Pinfold',
      nickname: 'DestroyOrbison',
      public: true,
    },
    {
      auth0_id: 'auth0|648fd33d73375442becf2c84',
      first_name: 'Remington',
      last_name: 'Smythe',
      nickname: 'Remmy',
      public: true,
    },
    {
      auth0_id: 'auth0|649024f773375442becf3102',
      first_name: 'Gertrude',
      last_name: 'Diamond',
      nickname: 'D1am0nd',
      public: true,
    },
    {
      auth0_id: 'auth0|6490255b0c2119ef3db1e4aa',
      first_name: 'Sloane',
      last_name: 'Trousers',
      nickname: 'STrousers',
      public: true,
    },
    {
      auth0_id: 'auth0|649025b96ef896963ad50b3f',
      first_name: 'Steve',
      last_name: 'Puce',
      nickname: 'SecretBoi2001',
      public: true,
    },
  ])
}
