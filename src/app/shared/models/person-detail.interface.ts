export interface PersonDetail {
  uid: string;
  description: string;
  properties: PersonProperties;
}    
export interface PersonProperties {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    url: string;
}