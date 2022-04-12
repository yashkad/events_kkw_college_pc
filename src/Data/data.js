import { keyboard } from "@testing-library/user-event/dist/keyboard";

const instEventList = [
  "Anniversary Program",
  "Expert lecture",
  "Day celebrations",
  "Blood Donation camp",
  "Tree Plantation",
  "Alumini Meet",
  "Club Activity",
  "CEO Meet",
  "SME Meet",
  "HR Meet",
  "Ganesh utsav",
  "convocation program",
  "Annual prize distribution",
  "tste activity",
  "Republic Day function",
  "yoga program",
];
const technical = [
  "Expert talk",
  "workshop",
  "seminar",
  "webinar",
  "Training program",
  "value added course",
  "FDP",
  "STTP",
  "Panel discussion",
];
const nonTechnical = [
  "Parents-Teachers Meet",
  "Engineers Day",
  "Matru bhasha Diwas",
  "Womens Day",
  "Teachers Day",
];
const deptEventList = {
  technical,
  nonTechnical,
};
// const formsList = [
//   "Invite",
//   "Gratitude",
//   "Permission for seminar hall",
//   "Pre-sanction of remuneration for expert lecture",
//   "Detail of expert talk",
//   "Expert talk of feedback of resourse person",
//   "Expert talk of feedback form"
//   ,"Expert talk Attendance"
//   ,"Permission for accomodation and food arrangement for guest"
// ]
const formsList = [
  {
    name: "Invite",
    url: "https://forms.gle/wqZnvsMM4AMzJt196"
  },
  {
    name: "Gratitude",
    url: "https://forms.gle/EiA6ubdeKQvGBedMA"
  },
  { name: "Permission for seminar hall", url: "https://forms.gle/7vuZJiTASc1WgZzZ6" },
  { name: "Pre-sanction of remuneration  for expert lecture", url: "https://forms.gle/GxAVMxNs9ZS2dyJ89" },
  { name: "Detail of expert talk", url: "https://forms.gle/JhgTNETf9SPcvX198" },
  { name: "Expert talk of feedback of resourse person", url: "https://forms.gle/86PXkGHwB68qey6XA" },
  { name: "Expert talk of feedback form", url: "https://forms.gle/G1YSDKSHDta8dfUW7" }
  , { name: "Expert talk Attendance", url: "https://forms.gle/EBjuLkb1FmkAvd9S6" }
  , { name: "Permission for accomodation and food arrangement for guest", url: "https://forms.gle/HEbJarkbHpykkYeb7" }
]

const reportList = [
  {
    name: "Invite",
    uri:""
  },
  {
    name: "Gratitude",
    uri:""
  },
  { name: "Permission for seminar hall", uri:""
},
  { name: "Pre-sanction of remuneration  for expert lecture", uri:""
},
  { name: "Detail of expert talk", uri:""
},
  { name: "Expert talk of feedback of resourse person", uri:""
 },
  { name: "Expert talk of feedback form", uri:""
 }
  , { name: "Expert talk Attendance", uri:""
 }
  , { name: "Permission for accomodation and food arrangement for guest", uri:""
}
]
export { instEventList, deptEventList, formsList,reportList };
