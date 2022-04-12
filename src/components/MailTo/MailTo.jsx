import React from 'react'
import { Link } from 'react-router-dom';

const dept = "MCA";
const date = "11/1/22";
const nameTo = "yash";
const subject = "CPP";
const topic = "topic is here"
const HOD = "yahs"
const prince = "arjun"
let message =
    `
Department of ${dept}
K. K. Wagh Institute of Engineering Education and Research
Nashik-422003

Date: ${date}

To,
${nameTo}

Subject: ${subject}

Respected Sir,
I   hope   this   message   finds   you   well. Department   of  ${dept},
 K. K. Wagh Institute of Engineering Education and Research, Nashik offers expert
lecture sessions for undergraduate students as a part of quality technical education.
It is our great honor to invite you to guide our students by sharing your experiences
on topic  “${topic}”. 
This will definitely add insight to students on current trends
and cutting edge technology Kindly accept and acknowledge our request and 
let us know your convenient date and timing.

Please share following details to the coordinator:
Your Resume, Abstract, Pre-requisites, learning outcomes and Bank details
 (Bank name, Branch Account No, IFSC code, MICR code, PAN number). 
Please feel free to contact our event coordinator (Name, email and mobile number of
coordinator) for further support.

Thanking you,                                                                          
Yours Sincerely, 
            
        ${HOD}                                      ${prince}
         HOD                                        Principal
        ${dept}                         


`
const MailTo = (props) => {
    const { to, subject, body,label,className } = props;

    return (
        // <a
        //     className='button'
        //     href={`mailto:${to}?subject=${subject || ""}&body=${body || ""}`}>
        //     {props.children}{"click"}
        // </a>

        <Link
            className={className}
            to='#'
            onClick={(e) => {
                window.location.href = to || `mailto:no-reply@example.com?subject='asdfasdf'&body=<pre>${message}</pre>`;
                e.preventDefault();
            }}
        >
            {label || "submit"}
        </Link>
    )
}

export default MailTo

