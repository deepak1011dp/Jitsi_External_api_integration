window.addEventListener('load', function() {
    // your code here
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const subject = urlParams.get('sub')
let room = urlParams.get('room')
console.log(room,'param')
let password = urlParams.get('pass')
// Decrypt
room = CryptoJS.AES.decrypt(room.toString(), 'kcs').toString(CryptoJS.enc.Utf8);
password = CryptoJS.AES.decrypt(password.toString(), 'kcs').toString(CryptoJS.enc.Utf8);
console.log(room,'fd')
const domain = 'meet.jit.si';
const options = {
    roomName: room,
    width: 1000,
    height: 500,
    parentNode: document.querySelector('#meet') ,
    configOverwrite: {
        subject: subject,
        password: password,
        enableClosePage: true,

    },
    interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: ['hangup', 'camera', 'microphone']
    }
};
var api = new JitsiMeetExternalAPI(domain, options); 

// set new password for channel
api.addEventListener('participantRoleChanged', function(event) {
    if (event.role === "moderator") {
        api.executeCommand('password', password);
    }
});

api.on('readyToClose', () => {
   location.href = 'https://meet.jit.si/'
});

})
