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

