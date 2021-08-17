import frappe
import os
@frappe.whitelist()
def create_page(roomname=None):
    text = """ <html>
        <head>
            <style>
                .container {{
                    position: relative;
                    border: 5px blue solid;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }}
            </style>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src='https://meet.jit.si/external_api.js'></script>

        </head>
        <body>
            <div class="container">
                <div id="meet"></div>
            </div>
        </body>
        <script>
            const domain = 'meet.jit.si';
                const options = {{
                    roomName: "{roomname}",
                    width: 1000,
                    height: 500,
                    parentNode: document.querySelector('#meet') ,
                    configOverwrite: {{
                        enableClosePage: true,
                    }},
                    interfaceConfigOverwrite: {{
                        TOOLBAR_BUTTONS: ['hangup', 'camera']
                    }}
                }};
                var api = new JitsiMeetExternalAPI(domain, options); 
        </script>
    </html> 
""" 
    data = text.format(roomname=roomname)
    save_path = os.path.dirname(__file__) # absolute dir the script is in
    # html file name unique
    count = 1
    while os.path.isfile(save_path+"/"+"meeting"+str(count)+".html"):
        count +=1
    name_of_file = "meeting"+str(count)
    completeName = os.path.join(save_path, name_of_file+".html")
    file1 = open(completeName, "w")
    file1.write(data)
    file1.close()
    return name_of_file