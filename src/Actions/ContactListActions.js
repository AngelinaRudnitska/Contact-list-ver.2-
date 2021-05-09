
export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList
    }
}

export const addNewContact = (contactList) => {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contactList
    }
}

export const deleteContact = (Id) => {
    return {
        type: "DELETE_CONTACT",
        payload: Id
    }
}

export const updateStatus = (contactList) => {
    return {
        type: "UPDATE_STATUS",
        payload: contactList
    }
}

export const searchContact = (name) => {
    return {
        type: "SEARCH_CONTACT",
        payload: name
    }
}

export const EditContact = (contact) => {
    console.log("contactID -> ", contact);
    return {
        type: "EDIT_CONTACT",
        payload: contact
    }
}