export interface ScheduleData {
    [x: string]: string,
    id: string,
    title: string,
    duration: string,
    date: string,
    createdAt: string,
    updatedAt: string,
    status: "Completed" | "Upcoming" | "On-hold" | "Pending",
    description: string,
}

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];