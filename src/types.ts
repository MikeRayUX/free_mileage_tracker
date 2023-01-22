export type TripClassification = "Business" | "Medical/Moving" | "Charitable";

export type Trip = {
  id: string;
  date: Date;
  formattedDate: string;
  classification: string;
  miles: number;
};

export type FormStep = 1 | 2 | 3 | 4;
