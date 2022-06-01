import React, { useState } from 'react'
import eventsService from '../../service/events.service'
import ReactJson from 'react-json-view'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const doc = new jsPDF()


const EventReport = () => {
    const [eventData, setEventData] = useState([]);

    const getAllEvents = async () => {
        const data = await eventsService.getAllEvents();
        console.log("Data : ", data.docs);
        const result = data.docs.map((item) => ({ ...item.data(), id: item.id }))
        console.log("ddd", result)
        setEventData(result)
        console.log(getHeaders())
        // printReport()
        // console.log("asdfsadf", getObjValues())
        console.log(Object.keys(eventData[0]))
    };

    const getHeaders = () => {
        const headers =  Object.keys(eventData[0]).filter((item) => {
            return item.organization,
                   item.name,
                   item.totalStud,
                   item.email;
        })
        return headers;
    }

    const getObjValues = () => {
        return eventData.map(item =>
            Object.values(item)
        )
    }

    const printReport = () => {
        autoTable(doc, { html: '#my-table' })
        autoTable(doc, {
            head: [getHeaders()],
            body: [
                // ['David', 'david@example.com', 'Sweden'],
                // ['Castille', 'castille@example.com', 'Spain'],
                // ...
                ...getObjValues()
            ],
        })

        doc.save('table.pdf')
    }

    return (
        <div>
            <button className='btn ' onClick={getAllEvents}>Get Report</button>
            {
                eventData.map(item => {
                    return (
                        <li>{item.arrangedBy}</li>
                    )
                })
            }
            <table id="my-table">

            </table>
        </div>
    )
}

export default EventReport