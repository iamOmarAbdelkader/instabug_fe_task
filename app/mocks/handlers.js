import { rest } from 'msw';

const response = {
  page: 7,
  current_page: 1,
  employees: [
    {
      id: '61e5374571cd8c1c82d8bfe2',
      email: 'moses_mueller@zesla.com',
      performance_index: 0.12,
      profile: {
        name: 'Moses Mueller', address: '94 Dakota Place, Englevale, Connecticut', location: { lat: -24.657217, long: 171.943328 }, about: 'Minim nulla irure officia id consequat et minim aute aute veniam commodo. Laborum reprehenderit laboris voluptate culpa do minim enim do labore anim laborum do tempor.', avatar: 'https://i.pravatar.cc/64?img=24',
      },
      position: 'lead',
      start_date: '2021-02-20T17:24:55.807Z',
    }, {
      id: '61e53745e0f6fd7c7c366a65',
      email: 'durham_ross@zesla.com',
      performance_index: 0.64,
      profile: {
        name: 'Durham Ross', address: '78 Clifford Place, Riviera, Massachusetts', location: { lat: -38.686052, long: 159.370227 }, about: 'Id mollit officia nulla adipisicing nisi irure laboris nostrud. Sit sunt ullamco labore dolore est fugiat qui laboris.', avatar: 'https://i.pravatar.cc/64?img=34',
      },
      position: 'employee',
      start_date: '2020-10-05T19:07:25.016Z',
    }, {
      id: '61e537452577a768bb3b2c79',
      email: 'penny_alexander@zesla.com',
      performance_index: 0.75,
      profile: {
        name: 'Penny Alexander', address: '58 Crown Street, Northchase, New Jersey', location: { lat: -69.736447, long: -84.693873 }, about: 'Amet Lorem sunt cupidatat dolor est eu sunt ullamco id est amet nisi ex duis. Sunt aliquip eiusmod ullamco nulla velit.', avatar: 'https://i.pravatar.cc/64?img=32',
      },
      position: 'manager',
      start_date: '2020-07-30T09:58:18.943Z',
    }, {
      id: '61e5374569a8178166456eb0',
      email: 'rose_morrison@zesla.com',
      performance_index: 0.54,
      profile: {
        name: 'Rose Morrison', address: '94 Grand Street, Hiko, Louisiana', location: { lat: 48.842503, long: -91.014447 }, about: 'Sit aliqua qui nostrud consequat Lorem dolor nisi ad duis officia. Duis id do ad reprehenderit exercitation eu ex ullamco in amet.', avatar: 'https://i.pravatar.cc/64?img=55',
      },
      position: 'lead',
      start_date: '2017-10-16T10:31:40.135Z',
    },
  ],
};

const perfResponse = [{ date_ms: 1641772800000, performance: 0.2 },
  { date_ms: 1641859200000, performance: 0.33 },
  { date_ms: 1641945600000, performance: 0.83 },
  { date_ms: 1642032000000, performance: 0.31 },
  { date_ms: 1642118400000, performance: 0.65 },
  { date_ms: 1642204800000, performance: 0.88 },
  { date_ms: 1642291200000, performance: 0.9 },
];
export const handlers = [
  rest.get('https://fe-task.getsandbox.com/employees', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(response)
    );
  }),
  rest.get('https://fe-task.getsandbox.com/performance', (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(perfResponse)
    );
  }),
];
