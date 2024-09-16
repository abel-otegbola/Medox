'use client'
import { PatientsTable } from "@/components/tables/patientsTable";
import { UserPlus } from "@phosphor-icons/react";

export default function PatientsPage() {
    const data = [
        {  "id": "0", "name": "Adam Messi", "age": "26", "sex": "Male", "ward no": "#123456", "priority": "Medium", "start date": "June, 3, 2024", "end date": "-- --"},
        {  "id": "1", "name": "Celine Alista", "age": "22", "sex": "Female", "ward no": "#123456", "priority": "Low", "start date": "May, 23, 2024", "end date": "June, 9, 2024"},
        {  "id": "2", "name": "Malachi Ardo", "age": "22", "sex": "Male", "ward no": "#123456", "priority": "High", "start date": "December, 7, 2023", "end date": "May, 4, 2024"},
        {  "id": "3", "name": "Emmanuel Williams", "age": "20", "sex": "Male", "ward no": "#123456", "priority": "High", "start date": "December, 2, 2023", "end date": "May, 21, 2024"},
        {  "id": "4", "name": "Fernando Grigs", "age": "50", "sex": "Male", "ward no": "#123456", "priority": "Low", "start date": "January, 3, 2024", "end date": "October, 30, 2024"},
        {  "id": "5", "name": "Stella Faniku", "age": "25", "sex": "Female", "ward no": "#123456", "priority": "Medium", "start date": "February, 5, 2023", "end date": "July, 8, 2024"},
    ]
    
    return (
        <div className="p-4 bg-white dark:bg-dark h-full rounded border border-gray/[0.3] dark:border-gray/[0.07]">
            <h2 className="flex items-center gap-3 font-bold md:text-[28px] text-[20px] py-4 border border-transparent border-b-gray/[0.1] dark:border-b-gray/[0.08]">
                <p className={``}><UserPlus width={24} /> </p>
                Patients
            </h2>
            <PatientsTable data={data} fields={["Name", "Ward no", "Priority", "Start date", "End date"]} />
        </div>
    )
}