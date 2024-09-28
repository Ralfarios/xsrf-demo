import './style.css';

import Csrf from 'csrf';

const tokens = new Csrf();
const secret = 'S3Cre3Tz_bw4ngh1t_lh0h!'; // .envにおいて！

const token = tokens.create(secret);

const input = document.createElement('input');
input.type = 'hidden';
input.name = 'token';
input.value = token;

// document.getElementById('form').prepend(input);
