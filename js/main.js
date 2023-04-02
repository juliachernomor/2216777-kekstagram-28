import {renderGallery} from './gallery.js';
import {formSubmit} from './form.js';
import {onHeartButtonClick} from './heart.js';
import {getData} from './api.js';
import {showAlert} from './universal.js';

onHeartButtonClick();

getData()
  .then((data) => {
    renderGallery(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

formSubmit();
