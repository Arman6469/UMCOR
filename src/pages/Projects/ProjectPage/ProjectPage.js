import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectPage() {
   
    return (
        <div>
            <h1>{useParams().id}</h1>
        </div>
    )
}
