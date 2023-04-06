import {renderGallery} from './gallery.js';
import {formSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert, debounce} from './universal.js';
import {loadLocalFile} from './local-picture.js';
import {init, getFilter} from './filter.js';

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


