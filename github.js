class Github {
  constructor() {
    this.client_id = '3121d0ba580c9769583e';
    this.client_secret = 'f3f988fbf52f795a10b4ab9205bc55a03428ac4d';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile,
    }
  }
}