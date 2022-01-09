import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.scss"

const SideBar = ({ path }) => {
    return (
        <div class="side">

            <div className={`hunco ${path=='/account' ? 'oke' : ''}`} >
                <Link style={{fontWeight:'400'}} className={'bb'} to={`/account`} activeClassName="active">
                    My Profile

                </Link>
            </div>

            <div className={`hunco ${path=='/select' ? 'oke' : ''}`}>
                <Link style={{fontWeight:'400'}} className={'bb'} to={`/select`} activeClassName="active">
                    Orders

                </Link>
            </div> <div className={`hunco ${path=='/saved-items' ? 'oke' : ''}`}>
                <Link style={{fontWeight:'400'}} className={'bb'} to={`/saved-items`} activeClassName="active">
                    Saved Items

                </Link>
            </div>

        </div>
    );
}


export default SideBar