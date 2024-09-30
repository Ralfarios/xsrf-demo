import Csrf from 'csrf';

export class CreateUserAction {
  constructor() {
    this.init();
  }

  tokenGenerate() {
    const tokens = new Csrf();
    const secret = 'S3Cre3Tz_bw4ngh1t_lh0h!'; // .envにおいて！

    return tokens.create(secret);
  }

  inputCreate(token) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'token';
    input.value = token;
    return input;
  }

  init() {
    const createUserActionForm = document.getElementById('createUserAction');
    const input = this.inputCreate(this.tokenGenerate());

    createUserActionForm.prepend(input);
  }
}
