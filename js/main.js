import {renderGallery} from './gallery.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';
import {debounce} from './debounce.js';
import {loadLocalFile} from './local-picture.js';
import {init, getFilter} from './filter.js';
import {formSubmit} from './form.js';

loadLocalFile();
formSubmit();

getData()
  .then((data) => {
    const debouncedRenderGallery = debounce(renderGallery);
    init (data, debouncedRenderGallery);
    renderGallery(getFilter());
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );


