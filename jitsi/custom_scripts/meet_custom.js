frappe.ui.form.on('Jitsi Meeting', {
	// refresh: function(frm) {

	// }
	generate_link: function(frm) {
		console.log('ello')
        var room_name = makeid(10)
        console.log(room_name,'5555')
        return frappe.call({
            method: 'jitsi.www.create_page.create_page',
            args: {
                roomname: room_name,
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
