var link_add;
frappe.ui.form.on('Jitsi Meeting', {
	// refresh: function(frm) {

	// }
	start: function(frm) {
		location.href = "/meetingpage"
	},
	generate_link: function(frm) {
		console.log('ello')
		StartMeeting()
		cur_frm.set_value(meeting_link, window.link_add);
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
var room_name = makeid(10)
// Start Meeting
function StartMeeting() {
    const domain = 'meet.jit.si';
    const options = {
        roomName: window.room_name,
        width: 1000,
        height: 500,
        parentNode: document.querySelector('#meet') ,
        configOverwrite: {
            enableClosePage: true,
        },
        interfaceConfigOverwrite: {
            TOOLBAR_BUTTONS: ['hangup','microphone', 'camera']
        }
    };
    const api = new JitsiMeetExternalAPI(domain, options);
	console.log(api)
	window.link_add = api._url
    api.on('readyToClose', () => {
        location.href = 'https://meet.jit.si/'
   });
}