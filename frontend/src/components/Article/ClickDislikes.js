import React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UPDATE_DISLIKES } from './../../utils/mutations';


export const ClickDislikes = (props) => {
    const [value, setValue] = useState(props.value);
    const [changeDislikes, { data, loading, error }] = useMutation(UPDATE_DISLIKES, {
        variables: {
          dislikes: value,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <button onClick={()=>{setValue(props.value + 1); changeDislikes( { variables: { id: props.id, dislike: props.value + 1 }}) }}><FontAwesomeIcon icon={props.icon} /> {value}</button>
    );
}