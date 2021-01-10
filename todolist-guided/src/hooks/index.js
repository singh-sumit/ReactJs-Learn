import React from 'react';
import { useState, useEffect } from 'react';
import {firebase} from '../firebase';

export const useTasks = selectedProject =>{
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        let unsubscribe = firebase.firestore().collection('tasks').where('userId','==','jasdDFAfJ4903kfdajfk');
    },[]);
}
