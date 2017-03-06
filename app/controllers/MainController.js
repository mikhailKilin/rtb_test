const possible = "abcdefghijklmnopqrstuvwxyz0123456789"

class EmailString {

  constructor(name, isValid) {
    this.name = name
    this.isValid = isValid
  }
}

class MainController {

  constructor($scope) {
    this.checker = $scope.checker
    this.emails = []
  }

  addEmails(){
    let text = ""
    for (let i = 0; i < Math.floor(Math.random() * possible.length); i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    text += "@ya.ru"
    this.addEmail(text)
  }

  addEmail = (emailString) => {
    if (emailString.length > 0) {
      this.emails.push(new EmailString(emailString, this.checker(emailString)))
      this.emailString = ""
    }
  }

  deleteEmail = ($index) => {
    this.emails.splice($index, 1)
  }

  getEmailsCount() {
    alert("Emails count is " + this.emails.length)
  }
}

export default MainController