
import ora from 'ora';


const esSpinner = ora('ES Module Creating...').start();

setTimeout(() => {
  esSpinner.succeed('ES Module Create Success');
}, 60000);

const cmjSpinner = ora('CommonJS Module Creating...').start();

setTimeout(() => {
  cmjSpinner.succeed('CommonJS Module Create Success');
}, 12000);
