import React, { useState } from 'react'
import { formsList } from '../../Data/data';

const Dropdown = ({ className }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const onclick = () => {
        setShowDropdown(!showDropdown);
    }
    return (
        <div className={className}>
            <div class="dropdown ">
                {/* <div class="dropdown-trigger">
                <button onClick={onclick} class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Click me</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div> */}
                <h1 className="dropdown-trigger" onClick={onclick} >
                    {"forms list"}
                </h1>

                {showDropdown && (<div role="menu" style={{
                    position: "absolute",
                    top: 25,
                    left: 10,
                    border: "1px solid black",
                    width:"200px",
                    overflow:"",
                }}>
                    <div class="dropdown-content block">


                        {formsList.map((i, index) => {
                            return (
                                <a href={i.url} class="dropdown-item is-link  " target={"_blank"} style={{
                                    width:"200px",
                                    display:"flex",
                                }}>
                                    <span style={{}}>{i.name}</span>
                                </a>
                            )
                        })}

                        <hr class="dropdown-divider" />
                        <h1 className='button is-danger is-light' onClick={onclick}>
                            {"close"}
                        </h1>
                    </div>
                </div>)}
            </div></div>
    )
}

export default Dropdown