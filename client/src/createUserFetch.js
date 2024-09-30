export class CreateUserFetch {
  constructor(form) {
    this.element = form;
    this.addEventListeners();
  }

  addEventListeners() {
    this.element?.addEventListener('submit', this.createUser.bind(this));
  }

  async createUser(event) {
    event.preventDefault();

    const username = document.getElementById('username_').value;
    const password = document.getElementById('password_').value;
    const is_premium = document.getElementById('is_premium_').checked;

    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);
    formData.append('is_premium', is_premium);

    try {
      const response = await fetch('http://localhost:8000/users/safe', {
        body: formData,
        method: 'POST',
      });

      const json = await response.json();

      if (!response.ok) throw json;

      console.log(json);

      this.element?.reset();

      document.getElementById('getAllUsersFetchButton').click();
    } catch (error) {
      console.log(error);
    }
  }
}
