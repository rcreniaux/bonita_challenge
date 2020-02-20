(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('customJsonViewerText', function() {
    return {
      template: '<jv-json-viewer data="properties.text" editor="false"></jv-json-viewer>'
    };
  });
