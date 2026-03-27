export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  shortDescription: string;
  fullDescription: string;
  speaker: {
    name: string;
    designation: string;
    image: string;
  };
}

export interface Registration {
  name: string;
  reg_id: string;
  email: string;
  branch_section: string;
  missed_classes: string;
  faculty_names: string;
}
