import { alert } from 'notie';

const notify = (type, text) => alert({
  type,
  text,
  position: 'bottom',
  time: 5,
});

const success = text => notify('success', text);
const warning = text => notify('warning', text);
const error = text => notify('error', text);
const info = text => notify('info', text);
const neutral = text => notify('neutral', text);

export default {
  success,
  warning,
  error,
  info,
  neutral,
};
