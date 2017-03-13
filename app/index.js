import angular from "angular";
import "./styles/main.scss";
import "./styles/segoe-ui.scss";
import {emailsEditor} from "./directives/emailsEditor";
import MainController from "./controllers/MainController";
import EmailController from "./controllers/EmailController";
import emailChecker from "./services/emailChecker";
let app = angular.module('app', [])
  .service('checkerService', emailChecker)
  .directive('emailsEditor', emailsEditor)
  .controller('EmailController', ["checkerService", (checkerService) => {
    new EmailController(checkerService)
  }])
  .controller('MainController', MainController)