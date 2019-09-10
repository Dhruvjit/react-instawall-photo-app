import React from 'react';
import style from './ComponentCss.css';
import PropTypes from 'prop-types'

const Photos = (props) => {
            const post = props.post;
            return (
            <figure className={style.figure}>
                <img className={style.photo} src={post.imageLink} alt={post.description}/>
                <figcaption><p>{post.description}</p></figcaption>
                <div className={style["button-container"]}>
                    <button className={style["remove-button"]} onClick={()=>{
                        props.onRemovePhoto(post);
                    }}> Remove </button>
                </div>
            </figure>
        );
};

// validation if the proptypes are not satisfied
Photos.propTypes = {
    // array here corresponds to prop type that post posses in Main.js
    posts: PropTypes.object.isRequired,
    // func here corresponds to function prop type that onRemovePhoto posses in Main.js
    onRemovePhoto: PropTypes.func.isRequired
};

export default Photos;
