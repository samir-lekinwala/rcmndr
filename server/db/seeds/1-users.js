exports.seed = async function(knex) {
  await knex('users').insert([
    {
      auth0_id: 'auth0|100',
      nickname: 'andrew',
      first_name: 'Andrew',
      last_name: 'Carter',
    },
    {
      auth0_id: 'auth0|101',
      nickname: 'bob',
      first_name: 'Bob',
      last_name: 'Smith',
    },
    {
      auth0_id: 'auth0|102',
      nickname: 'charlie',
      first_name: 'Charlie',
      last_name: 'Brown',
    },
    {
      auth0_id: 'auth0|103',
      nickname: 'david',
      first_name: 'David',
      last_name: 'Jones',
    },
    {
      auth0_id: 'auth0|104',
      nickname: 'edward',
      first_name: 'Edward',
      last_name: 'Johnson',
    },
  ])
}
