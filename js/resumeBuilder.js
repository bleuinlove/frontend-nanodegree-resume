var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");
$("#header").append(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Kerri Alison");
$("#header").prepend(formattedName);


var bio = {
	"name" : "Kerri Alison"	,
	"role" : "Front End Web Developer",
	"contacts" : {
		"email" : "kerrivarner@gmail.com",
		"mobile" : "323-555-6654"
		"github" : "@kerrialison",
		"location" : "New York City"
	},
	"welcome" : "Welcome to my Front End Web Design Portfolio!",
	"skills": ["HTML", "CSS", "JS", "jQuery", "Digital Photography & Editing", "Adobe Creative Suite", "Sketch"],
}
	
$("#main").append(bio.skills);

var contact = HTMLcontactGeneric.replace("%contact%", "contact:");
var email = HTMLcontactGeneric.replace("%data%", "kerrivarner@gmail.com");

$("#topContacts").prepend(contact);

//$("#header").prepend(bio.role);
//$("#header").prepend(bio.contact.length);
//$("#header").prepend(bio.welcome);
//$("#header").prepend(bio.skills.length);
