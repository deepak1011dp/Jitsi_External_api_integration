frappe.ui.form.on('Jitsi Meeting', {
	// refresh: function(frm) {

	// }
	generate_link: function(frm) {
    let id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7);
		frm.set_value('meeting_link', 'http://localhost:8000/meetingpage?room='+id);
	},
  start: function(frm) {
    window.open(frm.doc.meeting_link, "_blank")
	}
});

// Random Room Id
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
