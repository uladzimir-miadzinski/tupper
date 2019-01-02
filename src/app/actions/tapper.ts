import { divide } from './divide';
import { mod } from './mod';
import { addByModule } from './add';
import { multiply } from './multiply';
import { pow } from './pow';


export const tapper = (x: string, y: string): string => {
  const divideOfY: string = divide(y, '17'); // [y/17]
  
  const modOfY: string = mod(y, '17'); // mod([y], 17)
  const powForTwo: string = addByModule(multiply('17', x), modOfY); // 17 * [x] + mod([y], 17)
  const twoInPowForTwo: string = pow('2', powForTwo); // 2 ^ (17 * [x] + mod([y], 17))
  
  const divideOnTwoInPow: string = divide(divideOfY, twoInPowForTwo); // ([y/17]) * (1 / 2 ^ (17 * [x] + mod([y], 17)))
  
  return mod(divideOnTwoInPow, '2');
};

export const halfCompareTapper = (x: string, y: string): boolean => 0.5 < parseInt(tapper(x, y), 10);
