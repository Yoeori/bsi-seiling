import { ISpondRequest, IMember } from './types';


export class SpondAPI {
  private url: string = 'https://api.spond.com';
  private clubid: string;
  private token: string | null = null;

  constructor(clubid: string) {
    this.clubid = clubid;
  }

  async login(email: string, password: string) {
    const result = await fetch(`${this.url}/club/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!result.ok) {
      throw new Error('Failed to login');
    }

    const { loginToken } = await result.json();
    this.token = loginToken;
  }

  private async request<T>({ path, method = "GET", data }: ISpondRequest) {
    if (!this.token) {
      throw new Error('Not logged in');
    }

    const res = await fetch(`${this.url}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
        'X-Spond-Clubid': this.clubid,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.log(res.statusText);
      console.log(res.status);
      console.log(await res.text());
      throw new Error('Failed to make request');
    }

    return await res.json() as T; 
  }

  async getMembers() {
    return await this.request<IMember[]>({ path: 'club/v1/members' });
  }

}