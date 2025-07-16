import { PersonSummary } from './person-summary.interface';

export interface PeopleResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: PersonSummary[];
}