import './style.css';

import { GetAllUsersFetch } from './src/getAllUsersFetch';
import { ResetEverything } from './src/resetEverything';
import { CreateUserFetch } from './src/createUserFetch';
import { CreateUserAction } from './src/createUserAction';

document.addEventListener('DOMContentLoaded', () => {
  const resetEverythingButton = document.getElementById('resetEverything');
  new ResetEverything(resetEverythingButton);

  const getallUsersButton = document.getElementById('getAllUsersFetchButton');
  new GetAllUsersFetch(getallUsersButton);

  const createUserFetchForm = document.getElementById('createUserFetch');
  new CreateUserFetch(createUserFetchForm);

  new CreateUserAction();
});
