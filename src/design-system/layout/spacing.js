import { rem } from '../utils/size';

const unit = 8;

function units(mult) {
  return rem(unit * mult);
}

const spacing01 = units(0.25);
const spacing02 = units(0.5);
const spacing03 = units(1);
const spacing04 = units(1.5);
const spacing05 = units(2);
const spacing06 = units(3);
const spacing07 = units(4);
const spacing08 = units(5);
const spacing09 = units(6);
const spacing10 = units(8);
const spacing11 = units(10);
const spacing12 = units(12);
export const spacing = [
  spacing01,
  spacing02,
  spacing03,
  spacing04,
  spacing05,
  spacing06,
  spacing07,
  spacing08,
  spacing09,
  spacing10,
  spacing11,
  spacing12,
];
