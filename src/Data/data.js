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
    url:"https://docs.google.com/spreadsheets/d/1CXhhLLUskbC6gfHB9UAOUcT7gR_FbTlKRaK8XEUzl7U/edit?usp=sharing"
  },
  {
    name: "Gratitude",
    url:"https://docs.google.com/spreadsheets/d/1sYTLA-7BVT0isY19KyXlTO4z_Rlr1cZWH1Qd52LGmVQ/edit?usp=sharing"
  },
  { name: "Permission for seminar hall", url:"https://docs.google.com/spreadsheets/d/1Tb_vNiJKuZFRp1Z7B-khF36siNLNR2H1fvhoVS7wuzs/edit?usp=sharing"
},
  { name: "Pre-sanction of remuneration  for expert lecture", url:"https://docs.google.com/spreadsheets/d/1Ylf_j4imr8-IQasNcWgo4irHsCp2ui65ob38E1VSWMo/edit?usp=sharing"
},
  { name: "Detail of expert talk", url:"https://docs.google.com/spreadsheets/d/1i0CchRr7_jaydNQA8Afp_8MrHHZOAFcBb1a4zsfIu9g/edit?usp=sharing"
},
  { name: "Expert talk of feedback of resourse person", url:"https://docs.google.com/spreadsheets/d/125cEbJD2N3bkZiXpZMMvspRukS6ezLLqoQdNwRgK4C0/edit?usp=sharing"
 },
  { name: "Expert talk of feedback form", url:"https://docs.google.com/spreadsheets/d/1-jluDiP26z_fqxDsRRppdclyoKLlkUn2-zL1jaWP2i0/edit?usp=sharing"
 }
  , { name: "Expert talk Attendance", url:"https://docs.google.com/spreadsheets/d/1p6e-QEG_9pDfdDWlwR4kTeEEV8XgFMKkz5UA6cEGzws/edit?usp=sharing"
 }
  , { name: "Permission for accomodation and food arrangement for guest", url:"https://docs.google.com/spreadsheets/d/1_oay2vvjcEbcosE1Vzg1GT-Ipe3B14bNgJx4yD-wIz8/edit?usp=sharing"
}
]
export { instEventList, deptEventList, formsList,reportList };
