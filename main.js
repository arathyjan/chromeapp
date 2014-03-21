chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('helloWorld.html', {
    id: 'HelloWorld',
    bounds: {
      height: 450,
      width: 300
    },
    minHeight: 450,
    minWidth: 300,
    maxHeight: 450,
    maxWidth: 300,
  });
});
