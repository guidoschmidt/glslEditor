let _createObjectURL: Function | null;

export function createObjectURL(url: File | Blob | MediaSource): string {
  if (_createObjectURL === undefined) {
    _createObjectURL =
      (window.URL && window.URL.createObjectURL) ||
      (window.webkitURL && window.webkitURL.createObjectURL);
    if (typeof _createObjectURL !== "function") {
      _createObjectURL = null;
      console.error(
        "window.URL.createObjectURL (or vendor prefix) not found, unable to create local blob URLs"
      );
    }
  }
  if (_createObjectURL) {
    return _createObjectURL(url);
  } else {
    return "";
  }
}
