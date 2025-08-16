export interface TripDate {
  startDate: string;
  endDate: string;
  availableSeats: number;
}

export interface Trip {
  id: number;
  coverImage: string;
  title: string;
  duration: string;
  days: number;
  nights: number;
  commission: number;
  tripDates: TripDate[];
}

export const trips: Trip[] = [
  {
    id: 1,
    coverImage: "https://gography-r2.tumwebsme.com/cms/42/Adobe_Stock_117124654_48d63d149e.png",
    title: "ประเทศไอซ์แลนด์",
    duration: "3 วัน 2 คืน",
    days: 3,
    nights: 2,
    commission: 3000,
    tripDates: [
      { startDate: "23 ก.ย.", endDate: "25 ก.ย.", availableSeats: 15 },
      { startDate: "7 ต.ค.", endDate: "9 ต.ค.", availableSeats: 23 },
      { startDate: "15 ต.ค.", endDate: "17 ต.ค.", availableSeats: 8 }
    ]
  },
  {
    id: 2,
    coverImage: "https://gography-r2.tumwebsme.com/cms/54/Gography_romania_287234694_7fca1d6e89.jpg", 
    title: "ประเทศนอร์เวย์",
    duration: "5 วัน 4 คืน",
    days: 5,
    nights: 4,
    commission: 3000,
    tripDates: [
      { startDate: "1 ต.ค.", endDate: "5 ต.ค.", availableSeats: 18 },
      { startDate: "12 ต.ค.", endDate: "16 ต.ค.", availableSeats: 25 }
    ]
  },
  {
    id: 3,
    coverImage: "https://gography-r2.tumwebsme.com/cms/44/Adobe_Stock_48372837_f3919f2367.jpg",
    title: "ประเทศฟินแลนด์",
    duration: "4 วัน 3 คืน", 
    days: 4,
    nights: 3,
    commission: 3000,
    tripDates: [
      { startDate: "28 ก.ย.", endDate: "1 ต.ค.", availableSeats: 32 },
      { startDate: "10 ต.ค.", endDate: "13 ต.ค.", availableSeats: 20 },
      { startDate: "20 ต.ค.", endDate: "23 ต.ค.", availableSeats: 14 }
    ]
  },
  {
    id: 4,
    coverImage: "https://gography-r2.tumwebsme.com/cms/45/Adobe_Stock_232896480_cover_042acca69b.jpg",
    title: "ประเทศสวีเดน",
    duration: "6 วัน 5 คืน",
    days: 6,
    nights: 5,
    commission: 3000,
    tripDates: [
      { startDate: "5 ต.ค.", endDate: "10 ต.ค.", availableSeats: 15 },
      { startDate: "18 ต.ค.", endDate: "23 ต.ค.", availableSeats: 22 }
    ]
  },
  {
    id: 5,
    coverImage: "https://gography-r2.tumwebsme.com/cms/26/NUT_6962_19f4ddc1ef.jpg",
    title: "แลปแลนด์",
    duration: "7 วัน 6 คืน",
    days: 7,
    nights: 6,
    commission: 3000,
    tripDates: [
      { startDate: "15 ต.ค.", endDate: "21 ต.ค.", availableSeats: 22 },
      { startDate: "25 ต.ค.", endDate: "31 ต.ค.", availableSeats: 19 }
    ]
  },
  {
    id: 6,
    coverImage: "https://gography-r2.tumwebsme.com/cms/20/Gography_egypt_1168217035_5eb302d55e.jpg",
    title: "ล่าแสงออโรรา",
    duration: "5 วัน 4 คืน",
    days: 5,
    nights: 4,
    commission: 3000,
    tripDates: [
      { startDate: "2 ต.ค.", endDate: "6 ต.ค.", availableSeats: 28 },
      { startDate: "14 ต.ค.", endDate: "18 ต.ค.", availableSeats: 16 },
      { startDate: "28 ต.ค.", endDate: "1 พ.ย.", availableSeats: 30 }
    ]
  }
];
