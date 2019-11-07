const contacts = (state = [], action) => {
    switch (action.type) {
        case 'DATA_API':
            return {
                ...state, contacts: action.payload, contactKey: 0
            }
        case 'ADD_CONTACT':
            return {
                ...state, contacts: [...state.contacts, action.payload]
            }
        case 'DELETE_CONTACT':
            return {
                ...state, contacts: state.contacts.filter(contact => contact.login.uuid !== action.payload)
            }
        case 'EDIT_CONTACT':
            return {
                ...state, contacts: state.contacts.map((contact) => (
                    contact.login.uuid === action.payload.login.uuid ? action.payload : contact
                ))
            }
        case 'SORT_CONTACTS':
            return {
                ...state, contacts: state.contacts.slice().sort(function (a, b) {
                    var nameA = a.name.first.toLowerCase(),
                        nameB = b.name.first.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
            }
        case 'UPDATE_CONTACT_KEY':
            state.contactKey++
            return {
                ...state, contactKey: state.contactKey
            }
    }
    return state
}

export default contacts