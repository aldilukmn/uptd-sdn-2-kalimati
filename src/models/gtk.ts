interface GtkResponse {
  status: string;
  name: string;
  nip: string;
  class_gtk: string;
  image_url: string;
  image_id: string;
  totalStudent: {
    male: number;
    female: number;
  }
}

export type { GtkResponse };