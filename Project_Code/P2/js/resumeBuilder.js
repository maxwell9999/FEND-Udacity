/*
Resume Info
*/

var fullName = "Maxwell K C Taylor";
var role = "Front End Web Developer";
var phone = "(650)833-9780";
var email = "maxwell9999@gmail.com";
var github = "maxwell9999";
var HTMLlinkedin = HTMLcontactGeneric.replace("%contact%", "LinkedIn")
var linkedin = "/in/maxwellkctaylor";
var picture = "profile_pic.JPG";
var skills = ["programming", "java", "javascript", "python",
               "HTML/CSS", "Bootstrap", "jQuery", "technical writing", "c"];

var bio = {
   "name" : HTMLheaderName.replace("%data%", fullName),
   "role" : HTMLheaderRole.replace("%data%", role),
   "contacts" : {
      "phone" : HTMLmobile.replace("%data%", phone),
      "email" : HTMLemail.replace("%data%", email),
      "github" : HTMLgithub.replace("%data%", github),
      "linkedin" : HTMLlinkedin.replace("%data%", linkedin),
   },
   "pic" : HTMLbioPic.replace("%data", picture),
   "welcome" : HTMLwelcomeMsg.replace("%data%", "Check out my resume!"),
   "skills" : skills
};

$("#header").prepend(bio.name, bio.role);

$("#header").append(bio.contacts.phone, bio.contacts.email,
                     bio.contacts.github, bio.contacts.linkedin);

//$("#header").append(bio.pic, bio.welcome, bio.skills);


var work = {
   "companies" : [
      {
      "name" : "NCLab, Inc.",
      "position" : "Front-End Web Developer",
      "time" : "July 2015-Present",
      }
   ],
};

work.companies.city = "Reno, NV, USA";

var education = {
   "undergrad" : [
   {
      "school" : "Califoria Polytechnic State University",
      "major" : "Software Engineering",
      "Grad Year" :"2018",
   },
   ]
};

education.undergrad[0]["city"] = "San Luis Obispo";

console.log(education.undergrad[0].school)

$("#workExperience").append(HTMLworkTitle.replace("%data%", work["companies"[0]["position"]]));
$("#education").append(HTMLschoolName.replace("%data%", education.undergrad[0].school));