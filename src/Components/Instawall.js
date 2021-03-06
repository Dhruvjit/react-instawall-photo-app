import React from 'react';
import Photos from "./Photos";
import style from './ComponentCss.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Instawall = (props) => {
        return (
            // we cannot create multiple elements in return method so wrap everything in one div
            <div>

                {/* to make use of 'Link' component from react-router module replace 'a' tag with Link component */}
                <Link className={style.addIcon} onClick={props.onNavigate} to="AddPhoto"/>

                {/*<a className={style.addIcon} onClick={props.onNavigate} href="#AddPhoto"/>*/}

                {/*<button onClick={props.onNavigate} className={style.addIcon}/>*/}

                {/*we need assign css class to this div as it holds our photos (this component is referenced in main.js)*/}
                <div className={style["photo-grid"]}>
                    {props.posts.map((posts, index) =>
                    {
                        return <Photos key={index}
                                       post={posts}
                                       onRemovePhoto={props.onRemovePhoto}
                        />;
                    })}
                </div>

            </div>
        );
};

Instawall.propTypes = {
    // array here corresponds to prop type that post posses in Main.js
    posts: PropTypes.array.isRequired,
    // func here corresponds to function prop type that onRemovePhoto posses in Main.js
    onRemovePhoto: PropTypes.func.isRequired
};

export default Instawall;
