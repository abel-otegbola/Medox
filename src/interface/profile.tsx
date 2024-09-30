export interface DoctorData {
    [x: string]: string | number | boolean | string[],
    id: string,
    img: string,
    email: string,
    fullname: string,
    bio: string,
    available: boolean,
    expertise: string[],
    address: string
}
