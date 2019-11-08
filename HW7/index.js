var slimerHtmlPdf = require('slimer-html-pdf');

//max parallel instances
process.env.XVFB_DISPLAY_LIMIT = 10

const options = {
    paperSize: {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
    },
    debug: true
}

function init() {
    //generate static html
    const hcHtml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p> we have html file, insert cream filling here </p>
</body>
</html>
`;
    //convert that html to a pdf 
    slimerHtmlPdf.convert('http://github.com/bogdana07', './github.pdf', options)
        .then(msg => {
            console.log('Successful', msg)
        })
        .catch(err => {
            //(err == 2) No set XVFB_DISPLAY_LIMIT variable
            //(err == 3) Busy (XVFB_DISPLAY_LIMIT limit reached)
            console.log('Error!', err)
        })

    //save that pdf to the folder
};




//initial state
init();