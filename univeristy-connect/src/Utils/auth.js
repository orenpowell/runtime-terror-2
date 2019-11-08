const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {
    /**
     * Remove an item from the used storage
     * @param  {String} key [description]
     */
    clear(key) {
      if (localStorage && localStorage.getItem(key)) {
        return localStorage.removeItem(key);
      }
  
      if (sessionStorage && sessionStorage.getItem(key)) {
        return sessionStorage.removeItem(key);
      }
  
      return null;
    },

    clearAppStorage() {
        if (localStorage) {
          localStorage.clear();
        }
    
        if (sessionStorage) {
          sessionStorage.clear();
        }
      },

      clearToken(tokenKey) {
        return auth.clear(tokenKey);
      },

      get(key) {
        if (localStorage && localStorage.getItem(key)) {
          return parse(localStorage.getItem(key)) || null;
        }
    
        if (sessionStorage && sessionStorage.getItem(key)) {
          return parse(sessionStorage.getItem(key)) || null;
        }
    
        return null;
      },


      getToken(tokenKey ) {
        return auth.get(tokenKey);
      },

      getUserInfo(userInfo) {
        return auth.get(userInfo);
      },

      /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
   */
  set(value, key, isLocalStorage) {
    if (value === '') {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;/*return sessionStorage.setItem(key, stringify(value));*/
  },

  setToken(value = '',  tokenKey, isLocalStorage = true) {
    return auth.set(value, tokenKey, isLocalStorage);
  }
}

export default auth;