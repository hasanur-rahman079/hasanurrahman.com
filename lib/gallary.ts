import { v4 as uuidv4 } from "uuid";

const wOne = "/gallery/workShop1.jpg";
const w1 = "/gallery/w1.jpg";
const w2 = "/gallery/w2.jpg";
const w3 = "/gallery/w3.JPG";
const w4 = "/gallery/w4.JPG";
const w5 = "/gallery/w5.JPG";
const w6 = "/gallery/w6.JPG";
const w7 = "/gallery/w7.JPG";
const c1 = "/gallery/c1.jpg";
const c2 = "/gallery/c2.jpg";
const c3 = "/gallery/c3.jpg";
const c4 = "/gallery/c4.jpg";
const t1 = "/gallery/t1.jpg";

const gallery = [
  {
    id: uuidv4(),
    img: wOne,
    alt: "COB Workshops",
    location: "Sylhet",
    date: "2022-01-30",
    des: "The iron-man of biotech",
    category: "Workshops",
  },
  {
    id: uuidv4(),
    img: w1,
    alt: "Genomics Workshop-COB",
    des: "Talking about data visualization",
    location: "Farmgate, Dhaka",
    date: "2019-12-21",
    category: "Workshops",
  },

  {
    id: uuidv4(),
    img: w2,
    alt: "Genomics Workshop-COB",
    des: "1st time lecture in-front this mass participants",
    location: "Farmgate, Dhaka",
    date: "2019-12-21",
    category: "Workshops",
  },
  {
    id: uuidv4(),
    img: w3,
    alt: "Genomics Workshop-COB",
    des: "With the leading lifescience enthousiast",
    location: "Farmgate, Dhaka",
    date: "2019-12-20",
    category: "Workshops",
  },

  {
    id: uuidv4(),
    img: w4,
    alt: "Genomics Workshop-COB",
    des: "Preparing for my next session with Dr. Rashedul Islam Rony bhaiya",
    location: "Farmgate, Dhaka",
    date: "2019-12-20",
    category: "Workshops",
  },
  {
    id: uuidv4(),
    img: w5,
    alt: "Genomics Workshop-COB",
    des: "Presenting the Adobe Illustrator uses in research filed to visualize data",
    location: "Farmgate, Dhaka",
    date: "2019-12-20",
    category: "Workshops",
  },
  {
    id: uuidv4(),
    img: w6,
    alt: "Genomics Workshop-COB",
    des: "Mass participants",
    location: "Farmgate, Dhaka",
    date: "2019-12-20",
    category: "Workshops",
  },

  {
    id: uuidv4(),
    img: w7,
    alt: "Genomics Workshop-COB",
    des: "The leaders of Community of Biotechnology",
    location: "Farmgate, Dhaka",
    date: "2019-12-21",
    category: "Workshops",
  },

  {
    id: uuidv4(),
    img: t1,
    alt: "Genomics and Bioinformatics Workshop-COB",
    des: "Genomics and Bioinformatics Workshop organized by Community of Biotechnology",
    location: "Farmgate, Dhaka",
    date: "2019-12-21",
    category: "Talk",
  },

  {
    id: uuidv4(),
    img: c1,
    alt: "Star lab BD seminar",
    des: "Erik Zepka talking about lobal Biofutures Art of Sustainable Science",
    location: "Banani, Dhaka",
    date: "2020-02-21",
    category: "Conferences",
  },
  {
    id: uuidv4(),
    img: c2,
    alt: "Star lab BD seminar",
    des: "Meeting again with the young scientist",
    location: "Banani, Dhaka",
    date: "2020-02-21",
    category: "Conferences",
  },
  {
    id: uuidv4(),
    img: c3,
    alt: "Star lab BD seminar",
    des: "Erik Zepka discussing the future possibilities of bioresearch in BD",
    location: "Banani, Dhaka",
    date: "2020-02-21",
    category: "Conferences",
  },
  {
    id: uuidv4(),
    img: c4,
    alt: "Star lab BD seminar",
    des: "With the great people",
    location: "Banani, Dhaka",
    date: "2020-02-21",
    category: "Conferences",
  },
];

export default gallery;
