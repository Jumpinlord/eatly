export function cookiesHandler() {
  const eatlyCookie = "eatly-cookie";
  const dialog = document.querySelector("#eatly-cookie");

   async function getCookie(name) {
    if (window.cookieStore) {
      return cookieStore.get(name);
    } else {
      const value = document.cookie
        .split("; ")
        .find((row) => row.startsWith(name))
        ?.split("=")[1];
      return value ? { value } : null;
    }
  }

   async function setCookie(name, value) {
    const expiration = new Date();
    expiration.setMonth(expiration.getMonth() + 6);

    if (window.cookieStore) {
      return cookieStore.set({
        name: name,
        value: value,
        expires: expiration,
      });
    } else {
      document.cookie = `${name}=${value}; expires=${expiration.toUTCString()}; samesite=strict; secure`;
    }
  }

  getCookie(eatlyCookie).then((cookie) => {
    if (cookie) {
      if (cookie.value === "accept") {

      }
    } else {
      dialog.show();
      dialog.addEventListener("close", () => {
        const value = dialog.returnValue;
        setCookie(eatlyCookie, value);

        if (value === "accept") {

        }
      });
    }
  });
}