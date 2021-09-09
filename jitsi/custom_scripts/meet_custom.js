frappe.ui.form.on('Jitsi Meeting', {
	// refresh: function(frm) {

	// }
	generate_link: function(frm) {
    // we can send other arguments in link so we can use it for dynamic customization
    let pass='';
    // Encrypt
    if (frm.doc.password) {
      pass = CryptoJS.AES.encrypt(frm.doc.password, 'kcs').toString();
    }
    let room_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7);
    console.log(room_id,'Room')
    const roomId = CryptoJS.AES.encrypt(room_id, 'kcs').toString();
    console.log(roomId,'Roomid')
		frm.set_value('meeting_link', window.location.origin+'/meetingpage/?sub='+frm.doc.subject+'&room='+roomId+'&pass='+pass);
	},
  start: function(frm) {
    window.open(frm.doc.meeting_link, "_blank")
	}
});

frappe.ui.form.on("Jitsi Meeting", "refresh", function(frm) {
  frm.add_custom_button(__("Send"), function() {
      // frappe.call({
      //   method : "jitsi.www.send_mail.send_notifications",
      //   args : {
      //     user : frm.doc.users,
      //     link : frm.doc.meeting_link,
      //   }
      // })
  })
});
