
/**
 * Use this class to ensure Google Maps API javascript is loaded before running any google map specific code.
 */
export class GoogleMapsApi {
  /**
   * Constructor set up config.
   */
  constructor() {
    // api key for google maps
    this.apiKey = 'AIzaSyAaszUlZPo6U9RVD01ikA1FoLhE0W6oT6A';

    // set a globally scoped callback if it doesn't already exist
    if (!window._GoogleMapsApi) {
      this.callbackName = '_GoogleMapsApi.mapLoaded';
      window._GoogleMapsApi = this;
      window._GoogleMapsApi.mapLoaded = this.mapLoaded.bind(this);
    }
  }

  /**
   * Load the Google Maps API javascript
   */
  load() {
    console.log('load func');
    if (!this.promise) {
      this.promise = new Promise(resolve => {
        this.resolve = resolve;
        if (typeof window.google === 'undefined') {
          const script = document.createElement('script');
          script.src = `//maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places&callback=${this.callbackName}`;
          script.async = true;
          document.body.append(script);
        } else {
          this.resolve();
        }
      });
    }

    return this.promise;
  }

  /**
   * Globally scoped callback for the map loaded
   */
  mapLoaded() {
    if (this.resolve) {

      this.resolve();
    }
  }
}
