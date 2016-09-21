import { times } from 'lodash';
import faker from 'faker';

export function fetchTodos(count = 40) {
  return new Promise(resolve => {
    const data = times(count).map(id => ({
      completed: false,
      description: faker.lorem.sentence(),
      id
    }));
    return resolve(data);
  });
}