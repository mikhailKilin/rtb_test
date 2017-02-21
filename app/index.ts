import * as angular from 'angular'
import './styles/main.scss'
import {emailsEditor} from './directives/emailsEditor'
import EmailController from './controllers/EmailController'

let app = angular.module('app', [])
    .directive('emailsEditor', emailsEditor)
    .controller('EmailController', EmailController)