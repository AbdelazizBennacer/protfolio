import projects from "./projects.js";

// open side header when clicked on burger BTN
let burgerBTN = document.getElementById('burgerBTN');
let sideHeader = document.getElementById('side-header');
let testLayOut = document.getElementById('testLayOut');

burgerBTN.addEventListener('click',function(){ 

    if(sideHeader.classList == 'on'){
        sideHeader.className = 'off';
        testLayOut.style.display = 'none';
    } else {
        sideHeader.className = 'on';
        testLayOut.style.display = 'block';
    }

});

// close side header when clicked out side it
testLayOut.addEventListener('click',function(){
    if(sideHeader.classList == 'on'){
        sideHeader.className = 'off';
        testLayOut.style.display = 'none';
    } else {
        console.log("ma2fol");
    }
});

// ////////////////////////////////////////////////////////////////
// add active class when click on links
let allLinks = document.querySelectorAll('.my-links ul li');

allLinks.forEach((Link)=>{
    Link.addEventListener("click",function(){
        
        allLinks.forEach((otherLink)=>{
            otherLink.classList.remove('active');
        })

        Link.classList.add('active');

    })
})

// ////////////////////////////////////////////////////////////////
// add display block to the section when click on links
let allSections = document.querySelectorAll('body section');
let allLinksHref = document.querySelectorAll('.my-links ul li a');
let allLinksIcon = document.querySelectorAll('#side-header .my-links ul li a i');

allLinksHref.forEach((LinkHref)=>{

    LinkHref.addEventListener('click',function(e){

        // check if clicked on anchor or icon
        if(e.target == LinkHref.childNodes[1]) {
            // get href form clicked icon's parent
            var theSectionName = e.target.parentNode.getAttribute('href');
        } else {
            // get href form clicked Anchor
            var theSectionName = e.target.getAttribute('href');
        }

        // for each on all sections and remove active class
        allSections.forEach((Section)=>{
            Section.style.display = 'none';
        });

        // add active class to the selected section only
        let sectionSelected = document.querySelector(`${theSectionName}`);
        sectionSelected.style.display = 'flex';

    })

})

// ////////////////////////////////////////////////////////////////
// change title with animation
let box = document.querySelector('#Home .title .title-changer #box');

let content = 'Front End Developer';
let letterNum = 1;

function writeText(text){
    box.innerText = text.slice(0,letterNum);
    letterNum++;

    if(letterNum > text.length){
        letterNum = 1;
        
        if(content === 'Front End Developer'){
            content = 'Back End Developer';
        } else {
            content = 'Front End Developer';
        }
    }
}
setInterval(()=>{writeText(content)},200);

// ////////////////////////////////////////////////////////////////
// plugin
$(document).ready(function() {
    $('#particles').particleground({
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 10000, // How many particles will be generated: one particle every n pixels
      dotColor: '#fff',
      lineColor: '#fff',
      particleRadius: 8, // Dot size
      lineWidth: 1,
      curvedLines: false,
      proximity: 110, // How close two dots need to be before they join
      parallax: true,
      parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
      onInit: function() {},
      onDestroy: function() {}
    });
});

// ////////////////////////////////////////////////////////////////
// when page loading disappear loading-page
let loading_page = document.getElementById('loading-page');

setTimeout( function(){
    loading_page.classList.add('loading-page-disappear');
}, 300)


// import projects from projects.js file  and append it in projects div
let projectsDiv = document.getElementById('projects');

projects.forEach((project)=>{
    projectsDiv.innerHTML += `
    <div class="col-md-4 col-sm-6 ${project['class']}">
        <div id="project">
            <div class="top-box">
                <div class="spans">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p class="site-title">${project['name']}</p>
                <div class="link">
                    <a target="_blank" href=${project['project-url']}>
                        <i class="fa-solid fa-eye"></i>
                        Live
                    </a>
                </div>
            </div>
            <div class="web-pic">
                <img src="./img/${project['project-pic-url']}" alt=${project['project-name']}>
            </div>
        </div>
    </div> `
})

// ////////////////////////////////////////////////////////////////
// get number of projects and put it in html
let proNumDiv = document.getElementById('proNum');
proNumDiv.innerHTML =  `<p>All Projects: <span>${projects.length}</span></p>`;

// ////////////////////////////////////////////////////////////////
// count department only
let departArr = [];

function collectNumber(depart){
    for(var i=0 ; i < projects.length ; i++) {
        if(projects[i]['class'] == depart) {
            departArr.push(projects[i]);
        }
    }
    return departArr.length;
}

// ////////////////////////////////////////////////////////////////
// appear spacific projects when click on tabs
let tabs = document.querySelectorAll('#Portfolio .tabs ul li a');

let all = document.querySelectorAll('.col-md-4');
let frontend = document.querySelectorAll('.Frontend');
let javaScript = document.querySelectorAll('.Js');
let oop = document.querySelectorAll('.OOP');
let react = document.querySelectorAll('.React');
let Vue = document.querySelectorAll('.Vue');
let backend = document.querySelectorAll('.Backend');
let fullStack = document.querySelectorAll('.Full');

// add clicked class to clicked tabs
tabs.forEach((tab)=>{

    tab.addEventListener('click',function(e){
        
        // for each on all tabs and remove clicked class
        tabs.forEach((tab)=>{
            tab.classList.remove('clicked');
        })

        // add clicked class to clicked tabs
        e.target.classList.add('clicked')

        // get data-tabs name from clicked tab
        var selectedTabVal = e.target.getAttribute('data-tabs');
        // console.log(selectedTabVal);

        // hide all projects
        all.forEach((ele)=>{
            ele.style.display = 'none';
        }) 

        // appear projects by selected tab
        switch (selectedTabVal) {
            case 'All':
                all.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                proNumDiv.innerHTML =  `<p>All Projects: <span>${projects.length}</span></p>`;
                break;

            case 'Frontend':
                frontend.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;

            case 'Js':
                javaScript.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;

            case 'OOP':
                oop.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;
                
            case 'React':
                react.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;

            case 'Vue':
                Vue.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;

            case 'Backend':
                backend.forEach((ele)=>{
                    ele.style.display = 'block';
                })
            collectNumber(selectedTabVal);
            departArr = [];
            proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;

            case 'Full':
                fullStack.forEach((ele)=>{
                    ele.style.display = 'block';
                })
                collectNumber(selectedTabVal);
                departArr = [];
                proNumDiv.innerHTML =  `<p>All Projects: <span>${collectNumber(selectedTabVal)}</span></p>`;
                break;
        }
    })
})

// ////////////////////////////////////////////////////////////////
// create color boxes
let colors = ['#00A3E1','#008FB2','#009B9E','#00A77D','#00B247','#5AB027','#A0B61E'];
let colorBox = document.querySelector('.colors');

for(var i = 0 ; i < colors.length ; i++) {
    colorBox.innerHTML += `<span style="background-color: ${colors[i]};"></span>`;
}

// ////////////////////////////////////////////////////////////////
// when click on color change root --changerColor property by this color
let colorSpans = document.querySelectorAll('.colors span');
let root = document.documentElement;

colorSpans.forEach((colorSpan)=>{

    colorSpan.addEventListener('click',function(e){
        let colorSelected = e.target.style.backgroundColor;
        root.style.setProperty('--changerColor', colorSelected);
    })

})

// ////////////////////////////////////////////////////////////////
// show & hide setting box

let gear = document.querySelector('.setting-icon i')
let setting_box = document.querySelector('.setting')

gear.addEventListener('click',function(){
    if(setting_box.classList[1] == 'off'){
        setting_box.classList.remove('off');
        setting_box.classList.add('on');
    } else {
        setting_box.classList.remove('on');
        setting_box.classList.add('off');
    }
});

// ////////////////////////////////////////////////////////////////
// hide setting box after 4s
let hide_setting_box = setInterval(()=>{setting_box.classList.add('off')},4000)
setTimeout(()=>{clearInterval(hide_setting_box)},4000);

// ////////////////////////////////////////////////////////////////
// send data from contact form to my Email
let form = document.getElementById("contact-form");

form.onsubmit = function(e){
    e.preventDefault();
    validate();
}

// validate on form
function validate(){
    let visitorName = document.getElementById("Name");
    let visitorEmail = document.getElementById("Email");
    let visitorMSG = document.getElementById("MSG");
    
    if(visitorName.value == '' || visitorEmail.value == '' || visitorMSG.value == ''){
        inputsEmpty();
    } else {
        sendEmail(visitorName.value, visitorEmail.value, visitorMSG.value);
        successPopUp();
    }
};


function sendEmail(visitorName, visitorEmail, visitorMSG){
    // use emailJs
    emailjs.send("service_9kijyjw","template_d664m7r",{
        user_subject: "AzizSite...",
        user_name: visitorName,
        user_email: visitorEmail,
        user_message: visitorMSG,
    });
}

// swal func for popup Msgs
function successPopUp(){
    swal({
        title: "Thank You",
        text: "Succesfully sent message",
        icon: "success",
        button: "Ok",
    });
}

function inputsEmpty(){
    swal({
        title: "Oops...!!",
        text: "All inputs are required!",
        icon: "error",
        button: "Try again",
    });
}

// ////////////////////////////////////////////////////////////////
// accordion
const panel_heading_icon = document.querySelectorAll('.panel-heading i');
const panel_content = document.querySelectorAll('.panel-content');

panel_heading_icon.forEach((icon)=>{
    icon.addEventListener('click',function(e){
        let icon = e.target;
        let parentElement = icon.parentElement;
        let parentElement_nextElementSibling = parentElement.nextElementSibling

        panel_content.forEach((content)=>{
            content.classList.remove('active');
        })

        parentElement_nextElementSibling.classList.add("active");
    })
})

