import { async } from '@firebase/util';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react'
import EventsService from "../../service/events.service";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';

// let a = [orgDept,date,time,venue,forClass,title,subject,
//     co,po,speakerName,designation,orgName,country,speakerState,city,
//     mobile,email,specialization,beneficiary,confirmLetter
// ]

function ExpertTalkEntry() {
    const [orgDept, setOrgDept] = useState(null)
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [venue, setVenue] = useState(null)
    const [forClass, setForClass] = useState(null)
    // 
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [co, setCo] = useState(null);
    const [po, setPo] = useState(null);

    //speaker details
    const [speakerName, setSpeakerName] = useState("")
    const [designation, setDesignation] = useState("")
    const [orgName, setOrgName] = useState("")

    //country,state,city
    const [country, setCountry] = useState("")
    const [speakerState, setSpeakerState] = useState("")
    const [city, setCity] = useState("")

    //email, mobile no, 

    const [mobile, setMobile] = useState(null)
    const [email, setEmail] = useState(null)
    const [specialization, setSpecialization] = useState(null)

    // 

    const [beneficiary, setBeneficiary] = useState(null)

    const [confirmLetter, setConfirmLetter] = useState(null)
    const [imgArr, setImgArr] = useState(null)

    const handleConfirmLetterCange = (e) => {
        console.log(e.target.files)
        setConfirmLetter(e.target.files[0])
    }

    const handleImageChange = (e) => {
        console.log(e.target.files)
        setImgArr((p) => e.target.files)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (orgDept == "" ||
            date == "" ||
            time == "" ||
            venue == "" ||
            forClass == "" ||
            title == "" ||
            subject == "" ||
            co == "" ||
            po == "" ||
            speakerName == "" ||
            designation == "" ||
            orgName == "" || country == "" || speakerState == "" || city == "" ||
            mobile == "" || email == "" || specialization == "" || beneficiary == "" || confirmLetter == "") {
            alert("Fields Emtpy")
            return;
        }
        const data = {
            orgDept, date, time, venue, forClass, title, subject,
            co, po, speakerName, designation, orgName, country, speakerState, city,
            mobile, email, specialization, beneficiary
        }
        try {
            let a = await EventsService.addEvent(data);
            console.log(a)
            alert("Inside submit")
            // resetFormFields();
            // setMessage({ error: false, msg: "successfully submitted" });

            // setLoading(false);
        } catch (e) {
            return e;
        }
        console.log(data);
    }

    const uploadToStorage = async (file) => {
        const storage = getStorage();
        const name = `posts/${uuid()}`;
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log("File uploaded : ", snapshot);
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setLoadingPercentage(progress);
            },
            (e) => {
                console.log(e);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    // setUploadedUrl(url);
                    // setLoading(false);
                    // setLoadingPercentage(null);
                });
                toast.success('Image Upload Successfull', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        );


    }

    const coData = ["CO-1", "CO-2", "CO-3", "CO-4", "CO-5", "CO-6"];
    const poData = ["PO-1", "PO-2", "PO-3", "PO-4", "PO-5", "PO-6", "PO-7", "PO-8", "PO-9", "PO-10", "PO-11", "PO-12"];

    const myFormRef = useRef();

    return (
        <div className='container p-5'>
            <form onSubmit={handleSubmit} ref={myFormRef}>
                {/* <label className=" title is-size-4">{"Organised details"}</label> */}
                <div className='container p-4'>
                    <div className="field py-1">
                        <label className="label">{"Department name"}</label>
                        <div className="control">
                            <input
                                required
                                className="input"
                                value={orgDept}
                                onChange={(e) => setOrgDept(e.target.value)}
                                type="text"
                                placeholder="Organised by which department?"
                            />
                        </div>
                    </div>

                    <div className="field py-1">
                        <label className="label">Location of the event</label>
                        <div className="control">
                            <input
                                required

                                name="venue"
                                className="input"
                                type="text"
                                placeholder="Enter the location of the event"
                                value={venue}
                                onChange={(e) => setVenue(e.target.value)}
                            />
                        </div>
                        <p className="help ">Enter the venue here</p>
                    </div>
                    <div className="field py-1">
                        <label className="label">Organized for which class?</label>
                        <div className="control">
                            <input
                                required
                                name="class"
                                className="input"
                                type="text"
                                placeholder="Enter class"
                                value={forClass}
                                onChange={(e) => setForClass(e.target.value)}
                            />
                        </div>
                        {/* <p className="help"></p> */}
                    </div>

                    <div className="field py-1">
                        <label className="label ">{"Time"}</label>
                        <div className="control">
                            <input
                                required

                                name="time"
                                className="input"
                                type="time"
                                placeholder="Select Time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <p className="help">{"Choose Time of the event"}</p>
                    </div>
                    <div className="field py-1">
                        <label className="label">Date</label>
                        <div className="control">
                            <input
                                required

                                name="date"
                                className="input"
                                type="date"
                                placeholder="Select Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <p className="help">{"  Enter the Date of the Event"}</p>
                    </div>

                    {/*  */}

                    <div className="field py-2">
                        <label className="label">{"Title"}</label>
                        <div className="control">
                            <input
                                required
                                name="class"
                                className="input"
                                type="text"
                                placeholder="Enter Title of expert talk"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <p className="help">Title of the expert talk</p>
                    </div>
                    <div className="field py-1">
                        <label className="label">{"Subject"}</label>
                        <div className="control">
                            <input
                                required
                                name="class"
                                className="input"
                                type="text"
                                placeholder="Subject of study"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <p className="help">{"mapped to which subject"}</p>
                    </div>

                    <div class="control py-1 mb-4">
                        <div class="select mr-4">
                            <select value={co} required onChange={e => setCo(e.target.value)}>
                                <option selected value={null} disabled>Select CO-Mapped</option>
                                {
                                    coData.map(item => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                            <p className="help">{"Select CO-Mapped"}</p>
                        </div>

                        <div class="select ml-4">
                            <select value={po} required onChange={e => setPo(e.target.value)}>
                                <option selected value={null} disabled>Select PO-Mapped</option>
                                {
                                    poData.map(item =>
                                        <option value={item}>{item}</option>
                                    )
                                }
                            </select>
                            <p className="help">{"Select CO-Mapped"}</p>
                        </div>
                    </div>

                    {/*  */}

                    {/* <div className="title is-size-4 mt-4 mb-0">{"Speaker Details"}</div> */}

                    <div className="field py-4 ">
                        <label className="label ">{"Speaker Name"}</label>
                        <div className="control ">
                            <input
                                required
                                name="class"
                                className="input"
                                type="text"
                                placeholder="Enter Name of the speaker here"
                                value={speakerName}
                                onChange={(e) => setSpeakerName(e.target.value)}
                            />
                        </div>
                        <p className="help">Name of Speaker</p>
                    </div>
                    <div className="field py-1">
                        <label className="label pt-4">{"Designation "}</label>
                        <div className="control ">
                            <input
                                required
                                name="designation"
                                className="input"
                                type="text"
                                placeholder="Enter Designation of the speaker here"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                            />
                        </div>
                        <p className="help">Designation of the Speaker</p>
                    </div>
                    <div className="field py-1">
                        <label className="label pt-4">{"Speaker's Organization "}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Enter Organization name"
                                value={orgName}
                                onChange={(e) => setOrgName(e.target.value)}
                            />
                        </div>
                        <p className="help">Speaker's Organization name</p>
                    </div>


                    {/*  */}
                    <div className="field py-1">
                        <label className="label pt-4">{"Speakers country"}</label>
                        <div className="control ">
                            <input
                                required
                                name="class"
                                className="input"
                                type="text"
                                placeholder="Enter Country of the speaker"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <p className="help">Country</p>
                    </div>

                    <div className="field py-1">
                        <label className="label pt-4">{"Speaker State"}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Enter State name of the speaker"
                                value={speakerState}
                                onChange={(e) => setSpeakerState(e.target.value)}
                            />
                        </div>
                        <p className="help">State</p>
                    </div>

                    <div className="field py-1">
                        <label className="label pt-4">{"Speaker City"}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Enter City name of the speaker"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <p className="help">City</p>
                    </div>


                    {/*  */}
                    <div className="field py-1">
                        <label className="label pt-4">{"Speaker Email"}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="email"
                                placeholder="Enter email of the speaker"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <p className="help">Email</p>
                    </div>

                    <div className="field py-1">
                        <label className="label pt-4">{"Speaker Mobile Number"}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="tel"
                                placeholder="Enter Phone number of the speaker"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <p className="help">Mobile number of speaker</p>
                    </div>


                    <div className="field py-1">
                        <label className="label pt-4">{"Specialization"}</label>
                        <div className="control ">
                            <input
                                required
                                className="input"
                                type="text"
                                placeholder="Enter Specialization of the speaker"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                            />
                        </div>
                        <p className="help">Specialization of the speaker</p>
                    </div>

                    <div className="field py-1">
                        <label className="label pt-4">{"Beneficiary number"}</label>
                        <div className="control ">
                            <input
                                required
                                min="0"
                                className="input"
                                type="number"
                                placeholder="Enter total number of beneficiary"
                                value={beneficiary}
                                onChange={(e) => setBeneficiary(e.target.value)}
                            />
                        </div>
                        <p className="help">Number of beneficiary</p>
                    </div>

                    {/*  */}
                    <label className="label pt-4">{"Confirmation status by expert"}</label>
                    <div class={`file is-left ${confirmLetter ? 'is-success' : "is-warning"} `}>
                        <label class="file-label">
                            <input required class="file-input" type="file" name="resume" onChange={handleConfirmLetterCange} />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    {"Upload Confirmation letter"}
                                </span>
                            </span>
                            <span class="file-name">
                                {confirmLetter ? `${confirmLetter.name}` : 'Select file'}
                            </span>
                        </label>
                    </div>

                    <label className="label pt-4">{"Confirmation status by expert"}</label>
                    <div class={`file is-left ${imgArr ? 'is-success' : "is-warning"}`}>
                        <label class="file-label">
                            <input
                                required
                                multiple
                                class="file-input"
                                type="file"
                                onInput={handleImageChange}
                                accept="image/*"
                            />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    {"Upload Confirmation letter"}
                                </span>
                            </span>
                            <span class="file-name">
                                {imgArr ? "Images Selected" : "Choose Image"}
                            </span>
                        </label>
                    </div>


                </div>

                <button class="button is-success is-medium m-4" >Submit Form</button>
            </form>
            <button type="reset" onClick={() => { myFormRef.current.reset() }}>RESET</button>
        </div>
    )
}

export default ExpertTalkEntry