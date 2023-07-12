import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


export const required = value => {
    if (!value){
        return 'Field is required';
    }
    return undefined;
}

export const maxLengthCreator = (maxLength) => (value) => {

    if(value !== undefined){
        if (value.length > maxLength){
            return `Max length is ${maxLength} symbols`;
        }else{
            return undefined;
        }
    }else{
        return undefined;
    }
}

export const minLengthCreator = (minLength) => (value) => {

    if(value !== undefined){
        if (value.length < minLength){
            return `Min length is ${minLength} symbols`;
        }else{
            return undefined;
        }
    }else{
        return undefined;
    }
}

export const validateEmail = value => {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(value)){
        return undefined;
    }else{
        return 'Invalid email'
    }
  }
  