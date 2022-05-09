import React, { useState } from 'react'

function ExpertTalkEntry() {
    const [orgDept, setOrgDept] = useState("")
    const [date,setDate] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='container p-5'>
            <form onSubmit={handleSubmit}>
                <div className='p-4 '>
                    
                <label className="label">{"Organised details"}</label>
                <div className="field ">
                    {/* <label className="label">{"Depart name"}</label> */}
                    <div className="control">
                        <input
                            className="input"
                            value={orgDept}
                            onChange={(e) => setOrgDept(e.target.value)}
                            type="text"
                            placeholder="Organised by which department?"
                        />
                    </div>
                </div>
                <div className="field">
                    {/* <label className="label">Date</label> */}
                    <div className="control">
                        <input

                            name="date"
                            className="input"
                            type="date"
                            placeholder="Select Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    {/* <p className="help">This is a help text</p> */}
                </div>
                <div className="field">
                    {/* <label className="label">Time</label> */}
                    <div className="control">
                        <input

                            name="time"
                            className="input"
                            type="time"
                            placeholder="Select Time"
                            // value={date}
                            // onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    {/* <p className="help">This is a help text</p> */}
                </div>
                </div>
            </form>
        </div>
    )
}

export default ExpertTalkEntry