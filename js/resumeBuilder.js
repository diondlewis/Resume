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
	"biopic": "images/me.jpg"
};

// this object contains info for the work experience section of my resume
var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Telecommunications Technician",
			"location": "Mokena, Illinois",
			"dates": "May 2008 - Present",
			"description": "Won AT&T's Customer Appreciation Award for outstanding customer service while installing and repairing VoIP, Internet and IPTV services for business and residential customers each quarter.<br>Exceeded all company expectations by helping to bring our location's quality and efficiency average up to over 95%, resulting in receiving AT&T’s Employee Five Star Award multiple times.<br>Received a Safety Award for going accident free and being appointed as the very first Safety SPOC (Single Point of Contact) to lead over 50 technicians with a new safety initiative including designing the logo to be used for AT&T's Safety SPOC Program.<br>Honored with the President’s Volunteer Service Award multiple times for volunteer work with AT&T’s Employee Resource Groups. Volunteer experience includes graphic design, web development and teaching computer programming."
		},
		{
			"employer": "DirecTV",
			"title": "Satellite Technician",
			"location": "Bedford Park, Illinois",
			"dates": "July 2006 - May 2008",
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
};


// this object contains info for the projects section of my resume
var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2016",
			"description":"Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images": ["images/portfolio.jpg"]
		},
		{
			"title": "Favorite Movies",
			"dates": "2016",
			"description":"Created a simple movie website with images and trailers, this project demonstrates knowledge of Object Oriented Programming.",
			"images": ["images/movie.jpg"]
		},
		{
			"title": "Classic Arcade Game",
			"dates": "2016",
			"description":"An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
			"images": ["images/game.jpg"]
		}
	]
};

// this object contains info for the education section  of the resume
var education = {
	"schools": [
		{
			"name": "The American Academy of Art",
			"city": "Chicago, Illinois",
			"majors": ["Graphic Design"],
			"dates": "2000 - 2002",
			"degree": "None",
			"url": "www.aaart.edu",
			"location": "Chicago, IL"
		},

	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"date": "2016",
			"url": "www.udacity.com"
		},
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"date": "2016",
			"url": "www.udacity.com"
		}
	]
};


// This function uses info from the bio object and pins my name, role, picture,
// contact info, skills and welcome message to the header of the webpage
bio.display = function(){
// pins my name, role and picture to the header
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(bioPic);

	var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(message);

// pins my contact info to the top and bottom of the page
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
// pins a skills list to the top of the resume under the section skills at a glance
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
    }
    for (var i = 0; i < bio.skills.length; i ++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


// this function uses the info from the work object and pins my work info
// to the work experience section of the webpage
work.display = function() {
	for (job in work.jobs){
		if (!work.jobs.hasOwnProperty(job)) continue;
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

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
};

work.display();

// this function uses the info from the project object and pins it to
// the projects section of the webpage
projects.display = function() {
	for (project in projects.projects) {
		if (!projects.projects.hasOwnProperty(project)) continue;
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				if (!projects.projects[project].images.hasOwnProperty(image)) continue;
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}

};

projects.display();

// this function uses the info from the education object and
// pins the college I attended to the education section of the webpage
education.display = function() {
	for (school in education.schools){
		if (!education.schools.hasOwnProperty(school)) continue;
		// create new div for education
		$("#education").append(HTMLschoolStart);
		$("#education").append(HTMLonlineClasses);
		// formats school, dates and major
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchool);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry").append(formattedMajor);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedLocation);
	}

	// pins online classes to the education section of webpage
	for (school in education.onlineCourses){
		if (!education.onlineCourses.hasOwnProperty(school)) continue;
		// create new div for education
		$("#education").append(HTMLschoolStart);

		var formattedClasses = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		// This line concantenates the school and course so that it formats correctly on the webpage
		var formattedClassesSchool = formattedClasses + formattedOnlineSchool;
		$(".education-entry:last").append(formattedClassesSchool);

		var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
		$(".education-entry:last").append(formattedDate);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
};

education.display();


// this function tracks the user clicks on the site by collecting the cursor locations
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

/*
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
*/

$("#mapDiv").append(googleMap);
