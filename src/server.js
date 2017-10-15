const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('Roya is running on: ', app.get('port'));
});
