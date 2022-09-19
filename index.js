const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs')

// app.get('/', function (request, response) {
//   console.log('Home page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html');
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }



//     data = data.replace(
//       "<title>React App</title>",
//       `<title>git hub</title>`
//     )
//       .replace('__META_OG_TITLE__', "github")
//       .replace('__META_OG_DESCRIPTION__', "version controling")
//       .replace('__META_DESCRIPTION__', "version controling")
//       .replace('__META_OG_IMAGE__', "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80")


//     response.send(data);
//   });
// });





// app.get('/about', function (request, response) {
//   console.log('About page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'About Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });

// app.get('/contact', function (request, response) {
//   console.log('Contact page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html')
//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     data = data.replace(/\$OG_TITLE/g, 'Contact Page');
//     data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
//     result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
//     response.send(result);
//   });
// });

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function (request, response) {


 
  
  const filePath = path.resolve(__dirname, './build', 'index.html');

  fs.readFile(filePath, 'utf8', function (err, data) {

    if(request.path.startsWith('/detailpage')){

      const coursename = request.path.split('/')[3]
      const topicname = request.path.split('/')[4]
      data = data.replace(
        "<title>React App</title>",
        `<title>git hub</title>`
      )
        .replace('__META_OG_TITLE__', topicname)
        .replace('__META_OG_DESCRIPTION__', coursename)
        .replace('__META_DESCRIPTION__', topicname)
        .replace('__META_OG_IMAGE__', "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80")
  
  
        response.send(data);
    }

    else{

      response.send(data);

    }
   

  });


});

app.listen(port, () => console.log(`Listening on port ${port}`));