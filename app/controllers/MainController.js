const possible = "abcdefghijklmnopqrstuvwxyz0123456789"

class MainController {

  constructor() {
    this.emails = []
  }

  addRandomEmail(){
    let text = ""
    for (let i = 0; i < Math.floor(Math.random() * possible.length); i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    text += "@ya.ru"
    this.emails.push(text)
  }

  getEmailsCount() {
    alert("Emails count is " + this.emails.length)
  }
}

export default MainController