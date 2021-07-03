// Create Post Class
class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
}

// Add Actions to onclick to Logout
$("#lnkLogout").on('click', function() {
    // Set AUTHENTICATED Session Variable to false
    sessionStorage.setItem("AUTHENTICATED", 0);
    window.location.reload();
    return false;
});

window.addEventListener('load', () => {
    // Declare & Assign Values to Variables, Objects, Arrays
    let post = new Post();
    let posts = new Array();
    const authenticated = Number(sessionStorage.getItem("AUTHENTICATED"));
    const title = localStorage.getItem("TITLE");
    const content = localStorage.getItem("CONTENT");

    posts = [
        {title: 'The Simple Guide to Creating an HTML Email', content: 'When you create an email using a drag-and-drop or module-based tool, you are actually generating an HTML email. There are two main types of email you can send and receive: plain text emails (these are exactly what they sound like — any email that contains just plain old text with no formatting) and HTML emails, which are formatted and styled using HTML and inline CSS. HTML emails are easy to spot — most of the styled, multimedia marketing emails in your inbox are HTML emails.'},
        {title: 'HTML Frames', content: 'HTML frames are used to divide your browser window into multiple sections where each section can load a separate HTML document. A collection of frames in the browser window is known as a frameset. The window is divided into frames in a similar way the tables are organized: into rows and columns.'},
        {title: 'HTML Embed Multimedia', content: 'Sometimes you need to add music or video into your web page. The easiest way to add video or sound to your web site is to include the special HTML tag called <embed>. This tag causes the browser itself to include controls for the multimedia automatically provided browser supports <embed> tag and given media type.'},
    ]

    if (title && content) {
        post.title = title;
        post.content = content;
        posts.push(post);
    }

    // Manage navbar Buttons
    if (authenticated === 1) {
        document.getElementById('lnkAddContent').style.display = "block";
        document.getElementById('lnkLogin').style.display = "none";
        document.getElementById('lnkLogout').style.display = "block";
    } else {
        document.getElementById('lnkAddContent').style.display = "none";
        document.getElementById('lnkLogin').style.display = "block";
        document.getElementById('lnkLogout').style.display = "none";
    }

    // Fetch Posts into Page Body
    posts.forEach(element => {
        let card = document.createElement("div");
        card.className = "card mt-3";
        
        let row = document.createElement("div");
        row.className = "row no-gutters";	
            let col1 = document.createElement("div");
            col1.className = "col-md-2 text-center";
                let icon = document.createElement("img");
                icon.src = "/img/newsletter-icon.png";
                icon.className = "card-icon";
                icon.alt = "Newsletter Icon";
                col1.appendChild(icon);
            row.appendChild(col1);
        
            let col2 = document.createElement("div");
            col2.className = "col-md-10 text-center text-md-left";
                let cardBody = document.createElement("div");
                cardBody.className = "card-body";
                col2.appendChild(cardBody);
                
                let cardTitle = document.createElement("h5");
                cardTitle.className = "card-title card-h5";
                let fname = document.createTextNode(element.title);
                cardTitle.appendChild(fname);
                col2.appendChild(cardTitle);
            
                let cardText = document.createElement("p");
                cardText.className = "card-text text-justify m-2";
                let description = document.createTextNode(element.content);
                cardText.appendChild(description);
                col2.appendChild(cardText);
                
                let readMore = document.createElement("a");
                readMore.className = "read-more float-right m-2";
                readMore.href = "#";
                readMore.text = "Read More";
                col2.appendChild(readMore);
            row.appendChild(col2);
        card.appendChild(row);
        let container = document.querySelector(".container");
        container.appendChild(card);
    });
});