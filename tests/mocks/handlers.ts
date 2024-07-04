import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://gist.githubusercontent.com/wilson-wego/f7381fcead7a47a7df257a97a033456a/raw/aaffe99bfa0f5d46d17b3715a3c16a1d83527db1/categories.json',
    () => {
      return HttpResponse.json([
        {
          id: '6288a89f1f0152b8c2cd512b',
          name: 'Shushi',
        },
        {
          id: '6288a89f7338764f2071a8a8',
          name: 'Pizza',
        },
        {
          id: '6288a89f70dc8cf93b71609b',
          name: 'Hot Meals',
        },
        {
          id: '6288a89fe6c2fe0b758360fe',
          name: 'Deserts',
        },
        {
          id: '6288a89fac9e970731bfaa7b',
          name: 'Drinks',
        },
      ]);
    },
  ),
  http.get(
    'https://gist.githubusercontent.com/wilson-wego/8311b463cd331099e34a1f251dad4cbf/raw/ef4e1b48002e5017dd78bbb48a2adf8a97419529/food.json',
    () => {
      return HttpResponse.json({
        foods: [
          {
            id: '628b5decc94a27754f30e6f1',
            index: 0,
            rating: 3.9508,
            promotion: 'gift',
            isNew: false,
            categoryId: '6288a89fac9e970731bfaa7b',
            minCookTime: 80,
            maxCookTime: 100,
            restaurant: 'Niquent',
            name: 'Niquent Drinks',
            imageUrl: 'https://source.unsplash.com/random/400x400?Drinks',
          },
          {
            id: '628b5decf39bcc4e982fc88a',
            index: 1,
            rating: 4.9874,
            promotion: '1+1',
            isNew: false,
            categoryId: '6288a89f1f0152b8c2cd512b',
            minCookTime: 120,
            maxCookTime: 140,
            restaurant: 'Boilicon',
            name: 'Boilicon Shushi',
            imageUrl: 'https://source.unsplash.com/random/400x400?Shushi',
          },
          {
            id: '628b5dec6678e96d75f2f7de',
            index: 2,
            rating: 3.4518,
            promotion: null,
            isNew: true,
            categoryId: '6288a89f1f0152b8c2cd512b',
            minCookTime: 100,
            maxCookTime: 120,
            restaurant: 'Quinex',
            name: 'Quinex Shushi',
            imageUrl: 'https://source.unsplash.com/random/400x400?Shushi',
          },
        ],
      });
    },
  ),
];
