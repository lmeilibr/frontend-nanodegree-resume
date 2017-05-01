// this code is divided in three parts:
// 1 - var (object creations)
// 2 - add display functions to objects
// 3 - call display functions

///////////////////////////
// 1 - Object creations //
//////////////////////////

var bio = {
  "name": "Leandro",
  "role": "Data Scientist",
  "contacts": {
    "mobile":"+55 11 9.9504.5787",
    "email":"leandro.meili@gmail.com",
    "github":"lmeilibr",
    "location":"Sao Paulo - Brazil",
  },
  "welcomeMessage":"Welcome to my resume!",
  "skills": [
    "analytics",
    "focus oriented",
    "learning new skills"
  ],
  "biopic":"images/lmeilibr.jpeg"
};

var education = {
  "schools": [
    {
      "name": "Escola Politécnica da USP",
      "location": "Sao Paulo - SP - Brazil",
      "degree" : "Masters",
      "majors": ["Engineering"],
      "dates": "to be concluded",
    },
    {
      "name": "Fundação Getúlio Vargas",
      "location": "Manaus - AM - Brazil",
      "degree" : "MBA",
      "majors": ["Project Management"],
      "dates": 2013,
    },
    {
      "name": "Escola Politécnica da USP",
      "location": "Sao Paulo - SP - Brazil",
      "degree" : "BA",
      "majors": ["Naval Architecture and Marine Engineering"],
      "dates": 2008,
    }
  ],
  "onlineCourses": [
    {
      "title": "Supply-Chain Management",
      "school": "edx",
      "dates": 2016,
      "url": "https://credentials.edx.org/credentials/a31e8ccbf1a440a9a07caad91cc3f428/"
    },
    {
      "title": "Data Warehousing for Business Intelligence",
      "school": "Coursera",
      "dates": 2016,
      "url": "https://www.coursera.org/account/accomplishments/specialization/F3F7TVXZNL8T"
    },
    {
      "title": "The Analytics Edge",
      "school": "edx",
      "dates": 2015,
      "url": "https://s3.amazonaws.com/verify.edx.org/downloads/b7e6a850aaa24eac919902fb5846febc/Certificate.pdf"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Adobe",
      "title": "Regional Program Manager - Piracy Conversion Latam",
      "location": "Sao Paulo - SP - Brazil",
      "dates": "Mar 2017 - Present",
      "description": "Implement strategies for piracy conversion using data science, and managing a call center operation"
    },
    {
      "employer": "Femsa Logística / Atlas Transportes",
      "title": "Project Manager",
      "location": "Sao Paulo - SP - Brazil",
      "dates": "Apr 2015 - Feb 2017",
      "description": "Implement innovation projects for sales and operations, including LeadGen, Network Optimization, Customer Service and Cargo Tracking. In December/15 Atlas was acquired by Femsa Logística"
    },
    {
      "employer": "XL Catlin",
      "title": "Marine Risk Engineer",
      "location": "Sao Paulo - SP - Brazil",
      "dates": "Sep 2014 - Mar 2015",
      "description": "Risk Analysis for transport and port operations, development of risk management plans and portfolio performance reports"
    },
    {
      "employer": "Gelehrter Consultoria",
      "title": "Naval Architect",
      "location": "Sao Paulo - SP - Brazil",
      "dates": "Jan 2013 - Aug 2014",
      "description": "Design of ports and inland navigation systems, technical and economical feasibilities studies"
    },
    {
      "employer": "Netuno Engenharia Naval",
      "title": "Co-Founder",
      "location": "Manaus - AM - Brazil",
      "dates": "Nov 2010 - Sep 2012",
      "description": "Design of river vessels projects for amazon rivers"
    },
    {
      "employer": "Hermasa Navegação da Amazônia",
      "title": "Trainee",
      "location": "Itacoatiara - AM - Brazil",
      "dates": "Jun 2009 - Oct 2010",
      "description": "Survey of the construction of ships and barges, fleet maintenance management, fleet performance analytics"
    },
    {
      "employer": "Numerical Offshore Tank (TPN)",
      "title": "Intern",
      "location": "Sao Paulo - SP - Brazil",
      "dates": "Jan 2006 - Sep 2008",
      "description": "Digital midia projects, including 3D Modeling and video editing"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Vessels",
      "dates": "2013",
      "description": "Waterway vessels for Amazon rivers",
      "images":[
        "http://www.netunoeng.com.br/ohs/data/images/4/DONA_EMLIA_I___Lancha.jpg",
        "http://www.netunoeng.com.br/ohs/data/images/4/Projeto_de_Deus___Expresso.jpg"
      ]
    }
  ]
};



//////////////////////////////
// display functions declarations ///
/////////////////////////////

bio.display = function(){
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").append(formattedName);
  $("#header").append(formattedRole);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGitHub);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);

  $("#header").append(HTMLskillsStart);

  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
};

work.display = function(){
  for (var i = 0; i < work.jobs.length; i++) {
    // create a new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
};

education.display = function(){
  // loop for schools
  for (i = 0; i < education.schools.length; i++) {
    // create div for schools
    $("#education").append(HTMLschoolStart);
    // Concat name and degree
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    $(".education-entry:last").append(formattedMajor);
  }

  // loop for online Courses
  $("#education").append(HTMLonlineClasses);

  for (i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLschoolStart);
    //contat title and school
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var formattedTitleSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedTitleSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(formattedURL);
  }
};

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    // concat title and dates
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedTitleDates = formattedTitle + formattedDates;
    $(".project-entry").append(formattedTitleDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry").append(formattedDescription);
    // loop project images
    for(var j = 0; j < projects.projects[i].images.length; j ++){
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
    $(".project-entry").append(formattedImage);
    }
  }
};


//////////////////
//call functions//
/////////////////
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
