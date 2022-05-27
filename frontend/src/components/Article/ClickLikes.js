import React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UPDATE_LIKES } from './../../utils/mutations';


export const ClickLikes = (props) => {
    const [value, setValue] = useState(props.value);
    const [changeLikes, { data, loading, error }] = useMutation(UPDATE_LIKES, {
        variables: {
          likes: value,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <button onClick={()=>{setValue(props.value + 1); changeLikes( { variables: { id: props.id, like: props.value + 1 }}) }}><FontAwesomeIcon icon={props.icon} /> {value}</button>
    );
}