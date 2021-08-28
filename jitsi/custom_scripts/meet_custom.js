frappe.ui.form.on('Jitsi Meeting', {
	// refresh: function(frm) {

	// }
	generate_link: function(frm) {
		console.log('ello')
        var room_name = makeid(10)
        console.log(room_name,'5555')
        var audio = ""
        if (frm.doc.audio_button){
          audio = "microphone"
        }
        return frappe.call({
            method: 'jitsi.www.create_page.create_page',
            args: {
                roomname: room_name,
                audio: audio,
            },
            callback: function(r) {
                console.log(r.message)
                frm.set_value('meeting_link', window.origin+"/"+r.message);
            }
        })    
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
// Send mail to user
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
