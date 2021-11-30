import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

import {
    API_KEY,
    APP_ID,
    AUTH_DOMAIN,
    MEASUREMENT_ID,
    MESSAGING_SENDER_ID,
    PROJECT_ID,
    STORAGE_BUCKET,
} from '../config/variables'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
}

const app = firebase.initializeApp(firebaseConfig)
export const db = getFirestore(app)
