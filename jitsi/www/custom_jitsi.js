var link_add=null
var room_id;
frappe.ui.form.on('Jitsi Meeting', {
	generate_link: function(frm) {
		console.log('Hello')
		frm.set_value('meeting_link', 'meet.jit.si/meetingpage?room='+makeid(10));
	},
  start: function(frm) {
    location.target = '_blank'
    location.href = cur_frm.doc.meeting_link
  }
});

// // Random Room Id
// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// frappe.ui.form.on("Jitsi Meeting", "refresh", function(frm) {
//   frm.add_custom_button(__("Send"), function() {
//       frappe.call({
//         method : "jitsi.www.custom_jitsi.send_notifications",
//         args : {
//           user : frm.doc.users,
//           link : frm.doc.meeting_link,
//         }
//       })
//   })
// });

// // Start Meeting
// function StartMeeting() {
//   const domain = 'meet.jit.si';
//   const options = {
//       roomName: 12345,
//       width: 1000,
//       height: 500,
//       parentNode: document.querySelector('#meet') ,
//       configOverwrite: {
//           enableClosePage: true,
//       },
//       interfaceConfigOverwrite: {
//           TOOLBAR_BUTTONS: ['hangup', 'camera']
//       }
//   };
//   var api = new JitsiMeetExternalAPI(domain, options);
// console.log('M',api)
// // window.link_add = api._url
//   api.on('readyToClose', () => {
//       location.href = 'https://meet.jit.si/'
//  });
// }