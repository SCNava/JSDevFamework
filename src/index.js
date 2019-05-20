import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0,00');
//debugger; //this is a breakpoint
console.log(`Is this course worth ${courseValue}?`);
