import users from "../data/users";

export default function checkForm(email, password) {
  if (!email && !password) {
    alert("Email и пароль не введены");
  } else if (!email) {
    alert("Email не введен");
  } else if (!password) {
    alert("Пароль не введен");
  } else {
    if (
      users.some((user) => user.email === email && user.password === password)
    ) {
      alert("Вы авторизованы!");
    } else {
      alert("Вы ввели неправильный логин или пароль!");
    }
  }
}
