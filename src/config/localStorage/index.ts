class LocalStorage {
  static nameToken: string = 'access_token'
  static getToken: string = localStorage.getItem(this.nameToken) as string;
  static clear(): void {
    localStorage.clear()
  }
  static setToken(isToken: string):void {
    localStorage.setItem(this.nameToken, isToken);
  }
}

export default LocalStorage;