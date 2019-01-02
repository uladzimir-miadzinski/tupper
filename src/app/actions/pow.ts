import { divide } from './divide';
import { subtractByModule } from './subtract';
import { multiply } from './multiply';

const isOdd = (number: string): boolean => {
  return +number[number.length - 1] % 2 === 1;
}

const powMemoized = () => {
  const cache = {};

  return (a: string, n: string) => {
    const hash = `${a}^${n}`;

    if (hash in cache) {
      return cache[hash];
    } else {
      let result: string = '1';

      while (n !== '0') {
        if (isOdd(n)) {
          result = multiply(a, result);
          n = subtractByModule(n, '1');
        } else {
          a = multiply(a, a);
          n = divide(n, '2');
        }
      }

      cache[hash] = result;
      return result;
    }
  }
}

export const pow = powMemoized();

export const oldpow = (a: string, n: string) => {
  let result: string = '1';

  while (n !== '0') {
    if (isOdd(n)) {
      result = multiply(a, result);
      n = subtractByModule(n, '1');
    } else {
      a = multiply(a, a);
      n = divide(n, '2');
    }
  }

  return result;
}