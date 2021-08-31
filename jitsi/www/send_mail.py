import frappe
import json
@frappe.whitelist()
def send_notifications(user=None, link=None):
    from frappe.core.doctype.communication.email import make

    doc = json.loads(user)
    success = 0
    unsuccess = 0
    for i in doc:
        msg= f"Meeting Link {link}" 
        try:
            make(subject = "Email Subject", content=msg, recipients= i['users'],
                send_email=True, sender="deepak@korecent.com")
            success += 1
        
        except:
            unsuccess = 1
    
    if success:
        msg = """Email send successfully to Employee"""
        frappe.msgprint(msg)
    if unsuccess:
        frappe.msgprint("Could not Send")


    