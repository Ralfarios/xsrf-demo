export class ResetEverything {
  constructor(btn) {
    this.element = btn;
    this.addEventListeners();
  }

  addEventListeners() {
    this.element?.addEventListener('click', this.reset.bind(this));
  }

  resetFetchSection() {
    const container = document.getElementById('fetchUsersData');
    container.innerHTML = '';
  }

  reset() {
    this.resetFetchSection()
  }
}
