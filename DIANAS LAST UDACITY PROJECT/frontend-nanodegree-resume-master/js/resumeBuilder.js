/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // here is the variable with my bio information
 var bio = {
  "name": "Diana Martinez",
  "role": "Front End Developer",
  "contacts": {
  "location": "El Monte, CA, US",
  "mobile": "626-297-4871",
  "email": "friday822@sbcglobal.net",
  "twitter": "@friday",
  "github": "friday822"
},
  "skills": ["HTML", " CSS", " Python ", " Javascript ", " Dev Ops ", " System Automation ", " Technical Leader "],
  "welcomeMessage": "I can finally code ~ Welcome to my resume!",
  "bioPic": "images/me2.jpg",

};

// here is the variable with my work experience information
var work = {
  "jobs": [
  {
  "employer": "AT&T",
  "title": "NPMG Manager",
  "location": "El Monte, CA, US",
  "dates": "October 1997 - Present",
  "description": "Provide inventory of 320 central offices in Southern California."
  },
  {
    "employer": "San Gabriel Human Society",
   "title": "Front desk ",
   "location": "San Gabriel, CA, US",
   "dates": "Jan 1991 - May 1993",
   "description": "Front desk support including phones, appointment and scheduling."
  }
  ]
};

// here is the variable for my projects and included images
var projects = {
  "projects": [
  {
  "title": "SFID LABELING",
  "dates": "Dec 2011 - Dec 2017",
  "description": "21 State SFID labeling for spare cabinet locations.",
  "images": ["images/sfid.jpg"]
  },
  {
  "title": "Madison building spares reconfiguration",
  "dates": "Jan 2017 - Present",
  "description": "Reconfiguring the Madison building spares to ensure accuracy and reduce mean time to restore.",
  "images": ["images/madison.jpg"]
  },
  {
  "title": "Webpage with HTML and CSS",
  "dates": "April 2017",
  "description": "Notes webpage with picture",
  "images": ["images/webpage.jpg"]
  },
  {
  "title": "Fill in the blanks quiz with Python",
  "dates": "May 2017",
  "description": "Interactive 3 level 4 question fill in the blank Notebook quiz!",
  "images": ["images/notebook.jpg"]
  },
  {
  "title": "Movie trailer website with Python",
  "dates": "June 2017",
  "description": "Website with 6 movie posters, when prompted the movie trailer played!",
  "images": ["images/trailer.jpg"]
  }
  ]
};

// here is the variable of my education including online courses
var education = {
  "schools": [
  {
  "name": "Mark Keppel",
  "location": "Montery Park , CA, US",
  "degree": "Diploma",
  "major": ["High School"],
  "dates": 1991
  }
  ],
  "onlineCourses": [
  {
  "title": "Introduction to Programming",
  "school": "Udacity",
  "dates": 2017,
  "url": "http://www.udacity.com"
  },
  {
  "title": "Harvard university online classes",
  "school": "AT&T University",
  "dates": "2014 - 2017",
  "url": "http://www.att.com"
  }
  ]
};
// below are functions to format and display my bio, work, projects and education.
// The functions below are to display my bio info with variables associated and appending or prepending the data
// as needed to format my resume using files referenced above.
bio.display = function () {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);

  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

  var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);

  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts, #footerContacts").append(formattedLocation);
  $("#topContacts, #footerContacts").append(formattedMobile);
  $("#topContacts, #footerContacts").append(formattedEmail);
  $("#topContacts, #footerContacts").append(formattedTwitter);
  $("#topContacts, #footerContacts").append(formattedGithub);
  $("#header").prepend(formattedPicture);
  $("#header").append(formattedWelcomeMessage);
  $("#main").append(internationalizeButton);

  //var to display skills in header of the resume and uses variables associated to files ref above
  $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills:last").append(formattedSkill);
  }
};

// this function is to display work experience, it includes variables to replace data
// in the associated files referenced above
work.display = function() {

  for (var i = 0; i < work.jobs.length; i++) {

  $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription);
    }
  };
// this function displays my project info, it includes variables to replace data
// in the associated files referenced above
projects.display = function() {

  for (i = 0; i < projects.projects.length; i++) {

  $("#projects").append(HTMLprojectStart);

    var formattedTitle=HTMLprojectTitle.replace("%data%", projects.projects[i].title);

    var formattedDates=HTMLprojectDates.replace("%data%", projects.projects[i].dates);

    var formattedDescription=HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    if (projects.projects[i].images.length>0) {
      for (image=0; image<projects.projects[i].images.length; image++) {

        var formattedImages=HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
      }
    }
        var projectAttributes=formattedTitle + formattedDates + formattedDescription + formattedImages;
    $(".project-entry:last").append(projectAttributes);
  }
};
// this function is to display my education, it includes variables to replace data
// in the associatef files referenced above
education.display = function() {

  for (var i = 0; i < education.schools.length; i++) {

    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedschoolName, formattedschoolLocation, formattedschoolDegree, formattedschoolMajor, formattedschoolDates);
  }

  $("#education").append(HTMLonlineClasses);
  //online.display = function() {
  for (var onlineClasses in education.onlineCourses) {
    //for (var i = 0; i < education.onlineClasses.length; i++) {

    $("#education").append(HTMLschoolStart);

      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClasses].school);

      var formattedonlineTitle = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClasses].title);

      var formattedonlineDates = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClasses].dates);

      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClasses].url);

    $(".education-entry:last").append(formattedonlineSchool);
    $(".education-entry:last").append(formattedonlineTitle);
    $(".education-entry:last").append(formattedonlineDates);
    $(".education-entry:last").append(formattedonlineURL);
    //$(".education-entry:last").append(formattedonlineSchool, formattedonlineTitle, formattedonlineDates, formattedonlineURL);
  }
};
$("#mapDiv").append(googleMap);

// this is to call the functions for each section in my code
bio.display();
work.display();
projects.display();
education.display();
