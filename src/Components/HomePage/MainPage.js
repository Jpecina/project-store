import React from 'react';
import Header from '../Header/Header';

function MainPage(){
    return(
        <div className="main-page-div">
            <Header/>
            <div className="image-container">
                <div className="large">Large image</div>
                <div className="small-left">small image 1</div>
                <div className="small-right">small image 2</div>
                <div className="medium">medium image</div>
            </div>
        </div>
    )
}
export default MainPage;