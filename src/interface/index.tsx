export interface IDoctorProps {
    id: string;
    name: string;
    img: string;
    genres: string[];
    expertise?: string[];
    biography: string;
    address: string;
    available: boolean;
    updatedAt?: string;
    createdAt?: string;
}