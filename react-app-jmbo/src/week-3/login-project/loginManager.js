import React from 'react';
import firebase from 'firebase';

export async function loginWithSocialAccount(accountType){
    if(accountType === 'google'){
        const provider = new firebase.auth.GoogleAuthProvider();
        return await firebase.auth().signInWithPopup(provider);

    }
}