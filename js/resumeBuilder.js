// this object contains my biography info
var bio = {
	"name": "Dion Lewis",
	"role": "Web Developer",
	"contacts": {
		"mobile": "612-888-3466",
		"email": "diondlewis@gmail.com",
		"github": "diondlewis",
		"twitter": "@diondlewis",
		"location": "Chicago, Illinois"
	},
	"welcomeMessage": "Greetings, you have definitely reached the page of a tech geek!",
	"skills": ["Computer Networking", "HTML", "CSS", "Javascript", "Python", "Adobe Photoshop",
	"Adobe Illustrator", "Logo Design"],
	"bioPic": "images/me.jpg"
}

// this object contains info for the work experience section of my resume
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Premises Technician",
			"location": "Mokena, Illinois",
			"dates": "January 2009 - Present",
			"description": "Install and repair VoIP, Internet and IPTV services for business and residential customers."
		},
		{
			"employer": "AT&T",
			"title": "Cable Splicing Technician",
			"location": "Addison, Illinois",
			"dates": "February 2008 - January 2009",
			"description": "Install, repair and splice outside copper wiring for data, telephone and internet services."
		},
		{
			"employer": "DirecTV",
			"title": "Satellite Technician",
			"location": "Bedford Park, Illinois",
			"dates": "July 2006 - February 2008",
			"description": "Installed and repaired Satellite TV services for business and residential customers."
		},
		{
			"employer": "Dish Network",
			"title": "Satellite Technician",
			"location": "Tinley Park, Illinois",
			"dates": "October 2005 - July 2006",
			"description": "Installed and repaired Satellite TV services for residential customers."
		},
		{
			"employer": "Chicagoland Early Intervention",
			"title": "Assistive Technology Coordinator",
			"location": "Oak Forest, Illinois",
			"dates": "July 2003 - October 2005",
			"description": "Wrote several computer programs and scripts that helped coordinate services" +
			"for children with disabilites."
		},
		{
			"employer": "StreetWise Newspaper",
			"title": "Graphic Designer",
			"location": "Chicago, Illinois",
			"dates": "July 2002 - July 2003",
			"description": "Designed the layout of the newspaper and all advertisements inside." +
			" Also designed Chicago's first parking garage map."
		}
	]
}


// this object contains info for the projects section of my resume
var projects = {
	"projects": [
		{
			"title": "AT&T's Safety SPOC Program",
			"dates": 2012,
			"description":"At AT&T, I was asked to create this logo to help inspire excitement" +
			"for AT&T's new saftey initiative.",
			"images": ["images/safety.jpg"]
		},
		{
			"title": "Lady Hurricanes Basketball Team Jersey Design",
			"dates": 2011,
			"description":"I designed the logo and jersey design for this girls basketball team. Go Hurricanes!",
			"images": ["images/lady.jpg"]
		}
	]
}

// this object contains info for the education section  of the resume
var education = {
	"schools": [
		{
			"name": "The American Academy of Art",
			"city": "Chicago, Illinois",
			"major": ["Graphic Design"],
			"dates": "2000 - 2002",
			"url": "www.aaart.edu",
			"location": "Chicago, IL"
		},

	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"name": "Udacity",
			"dates": 2016,
			"url": "www.udacity.com"
		}
	]
}


// This function uses info from the bio object and
// pins my name, role, picture and welcome message to the header of the webpage
function header() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(bioPic);

	var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(message);
}

header();


// the variables below use the strings in the helper.js file to input my info into the index.html file
// displays my picyture on the page
function contactInfo() {
	var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(contactsMobile);
	$("#footerContacts").append(contactsMobile);

	var emailAddress = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(emailAddress);
	$("#footerContacts").append(emailAddress);

	var githubAccount = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(githubAccount);
	$("#footerContacts").append(githubAccount);

	var twitterAccount = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(twitterAccount);
	$("#footerContacts").append(twitterAccount);

	var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(myLocation);
	$("#footerContacts").append(myLocation);
}

contactInfo();

// this function pins a skills list to the top of the resume under the section skills at a glance
function skills(){
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
		$("#header").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
		$("#header").append(formattedSkill);
	}
}

skills();

// $("#main").append(work["position"]);

// this function uses the info from the work object and pins my work info
// to the work experience section of the webpage
work.display = function() {
// function displayWork() {
	for (job in work.jobs){
		// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concatenate employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

//displayWork();
work.display();
// this function uses the info from the project object and pins it to
// the projects section of the webpage
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}

}

projects.display();

// this function uses the info from the education object and
// pins the college I attended to the education section of the webpage
education.display = function() {
	for (school in education.schools){
		// create new div for education
		$("#education").append(HTMLschoolStart);
		// formats school, dates and major
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchool);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry").append(formattedMajor);
	}
}

education.display();

// this function uses info from the online part of the education object
// and pins my udacity online class to the webpage
function displayOnlineClass() {
	for (school in education.onlineCourses){
		var formattedClasses = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].name);
		// This line concantenates the online classes line with the school and course so that it formats
		// correctly on the webpage
		var formattedClassesSchool = HTMLonlineClasses + formattedClasses + formattedSchool;
		$(".education-entry:last").append(formattedClassesSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
}

displayOnlineClass();

// this function tracks the user clicks on the site by collecting the cursor locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y)
});

// this function formats my name to an international format
// so that the Last name will appear in all caps
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);