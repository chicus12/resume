const { render } = require('./index')
const json = require('./resume.json')
const fs = require('fs')


try {
  const output = render(json)

  fs.writeFile('Resume - Francisco Cerdas.html', output, (err) => {
    if (err) {
        console.error('Error writing to HTML file:', err);
    } else {
        console.log(`HTML file 'Resume - Francisco Cerdas.html' created successfully!`);
    }
  });
} catch (error) {
  console.error(error)
}