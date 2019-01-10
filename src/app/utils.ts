import { random } from 'faker';
import { timeout } from 'angular-concurrency';

export async function randomStringAfter(ms: number) {
  await timeout(ms);
  return random.words(3);
}
