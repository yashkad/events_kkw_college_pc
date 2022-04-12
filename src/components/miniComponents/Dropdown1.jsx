import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Dropdown1 = ({ className,title ,data}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const onclick = () => {
        setShowDropdown(!showDropdown);
    }
    return (
        <div >
            <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <p class="" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{ title || "Forms list" }</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </p>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                    {data.map((i, index) => {
                        console.log(i);
                            return (
                                <a  class="dropdown-item is-link" onClick={()=>{
                                    i.url && 
                                    window.open(i.url ,"_blank")
                                }}>
                                    <span>{i.name}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div></div>
    )
}

export default Dropdown1