import admin from 'firebase-admin'
import 'firebase/auth' // If you need it
import 'firebase/firestore' // If you need it
import 'firebase/storage' // If you need it

import serviceAccount from '../config/serverlet-637abb8e1d8e.json'

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            ...serviceAccount,
            privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
        }),
    })
}

export const db = admin.firestore()
