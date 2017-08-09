import { Component, Input } from '@angular/core';

@Component({
  selector: 'ze-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message = { body: '', type: '', header: '' };

  /**
   * setMessage shows a message of given type for the given milliseconds
   *
   * @param {string} body
   * @param {string} [type='info'] can be either 'success', 'info', 'warning' or 'danger',
   * @param {string} [header=''] Header of the message. If empty, 'Message:' will be used as header
   * @param {number} [time=5000]
   * @memberof AlertComponent
   */
  setMessage(body: string, type: string = 'info', header: string = '', time = 5000) {
    this.message.header = (header === '' ? 'Message:' : header);
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => { this.message.body = ''; }, time);
  }
}
