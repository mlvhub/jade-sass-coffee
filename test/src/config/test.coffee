tests = []

console.log window.__karma__.files
for file of window.__karma__.files
  if  /Spec\.js$/.test(file)
    console.log file
    tests.push file

console.log tests

requirejs.config
  baseUrl: '/base/app/dist/scripts'

  deps: tests

  callback: window.__karma__.start
