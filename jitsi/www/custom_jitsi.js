var link_add=null
var room_id;
frappe.ui.form.on('Jitsi Meeting', {
	generate_link: function(frm) {
		console.log('Hello')
		frm.set_value('meeting_link', 'meet.jit.si/'+makeid(10));
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

frappe.ui.form.on("Jitsi Meeting", "refresh", function(frm) {
  frm.add_custom_button(__("Send"), function() {
      frappe.call({
        method : "jitsi.www.custom_jitsi.send_notifications",
        args : {
          user : frm.doc.users,
          link : frm.doc.meeting_link,
        }
      })
  })
});
