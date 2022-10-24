const existingUserLogin = 'the_best_user'
const existingUserPassword = '12345678'

let message = 'Логин или пароль введен неверно '

// Страница запрашивает пароль пока не будет введен верно
for (let i = 1; i < 4; i++) {
  let userLogin = prompt('Введите логин').trim()
  let userPassword = prompt('Введите пароль').trim()

  if (
    userLogin === existingUserLogin &&
    userPassword === existingUserPassword
  ) {
    alert('Вход пользователя...')
    break
  } else {
    if (i === 3) {
      message += `${i} раз`
      alert(message)
      break
    }

    alert(message)
  }
}
