export class GetAllUsersFetch {
  constructor(btn) {
    this.element = btn;
    this.addEventListeners();
  }

  addEventListeners() {
    this.element?.addEventListener('click', this.fetchData.bind(this));
  }

  async fetchData() {
    try {
      const response = await fetch('http://localhost:8000/users');
      const json = await response.json();

      if (Array.isArray(json?.data)) {
        const container = document.getElementById('fetchUsersData');
        container.innerHTML = '';

        const limit = json.data.length - (json.data.length % 3);

        json.data.forEach((user, idx) => {
          const card = document.createElement('div');
          card.className = 'fetch-users__data__card';
          if (idx < limit && json.data.length > 3)
            card.classList.add('border-bottom');

          const usernameElement = document.createElement('h5');
          usernameElement.textContent = user.username;
          card.appendChild(usernameElement);

          const idElement = document.createElement('p');
          idElement.textContent = user.id;
          card.appendChild(idElement);

          let badgeElement;
          if (user.is_premium) {
            badgeElement = document.createElement('div');
            badgeElement.textContent = 'PREMIUM USER';
            badgeElement.classList = 'fetch-users__data__card__badge';
          } else {
            badgeElement = document.createElement('button');
            badgeElement.textContent = 'GET PREMIUM';
            badgeElement.classList = 'fetch-users__data__card__button';
          }
          card.appendChild(badgeElement);

          container.appendChild(card);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
