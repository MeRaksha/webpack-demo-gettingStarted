import {join} from 'lodash-es';

function component() {
  const element = document.createElement('div');

  // Lodash join is now imported by this script
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());