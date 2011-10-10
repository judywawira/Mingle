function(newDoc, oldDoc, userCtx) {
    if (userCtx.roles.indexOf('_admin') !== -1) {
        return; // Remember: with great power etc.
    }

    if (!userCtx.name) {
        throw({forbidden: "You're not logged in"});
    }

    if (newDoc._deleted === true) {
        // type-specific delete permissions
        if (oldDoc.type === 'message') {
            if (userCtx.name !== oldDoc.profile.name) {
                throw({forbidden: "Can't delete somene else's messages"});
            } else {
                return;
            }
        } else {
            throw({forbidden: "Only admin can delete unknown document type: " + oldDoc.type});
        }
    }

    if (oldDoc && (oldDoc.type !== newDoc.type)) {
        throw({forbidden : "Can't mutate a document's type"});
    }

    // type-specific add/edit permissions
    if (newDoc.type === 'message') {
        if (oldDoc) {
                throw({forbidden: "Can't edit an existing message. You can only delete it"});
        }
        if (userCtx.name !== newDoc.profile.name) {
                throw({forbidden: "Can't send a message from somene else"});
        }
        return;
    } else {
        throw({forbidden: "Can't add unknown document type: " + newDoc.type});
    }
}
