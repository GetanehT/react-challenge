
import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';

export class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={CSS.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={CSS.SearchResults}>
                    
                               <PostItem savedPosts={savedPosts} />
                            </div>
                
            </div>
        )
    
}
}

export default Content;
