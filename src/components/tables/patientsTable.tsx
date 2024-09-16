'use client'
import { useState } from "react"

interface dataProps { [key: string] : string; id: string, name: string, age: string, sex: string, "ward no": string, priority: string, "start date": string, "end date": string}


export function PatientsTable({ data, fields }: { data: dataProps[], fields: string[] }) {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [, setActive] = useState({})

    const handleOpenModal = (item: dataProps) => {
        setOpenModal(!openModal) 
        setActive(item)
    }

    return (
        <div className="w-[100%] py-2 overflow-x-auto">
            <table className="table-auto rounded-lg sm:text-[10px] text-[8px] overflow-hidden text-left w-full min-w-[250px]">
                <thead className="border border-gray/[0.6] dark:border-gray/[0.08] ">
                    <tr className="bg-primary/[0.08]">
                    {
                        fields.map((header: string, i:number) => (
                            <th key={i} className="p-2 py-3 font-medium">{header === "Biller" ? "Transaction" : header}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody className="">
                    {
                    data.map((item: dataProps, i: number) => (
                        <tr key={item.id}  tabIndex={1} className={i%2 === 0 ? "border border-primary/[0.08]" : "bg-primary/[0.04] border border-primary/[0.1]"} onKeyUp={(e) => {e.key === "Enter" ? handleOpenModal(item) : {}}} onClick={() => handleOpenModal(item)}>
                            {
                                fields.map((header: string, i:number) => (
                                    <td key={i} className="p-2 cursor-pointer">{
                                        header === "Name" ? 
                                        <div className="flex items-center gap-2 p-2">
                                            <p className="p-2 bg-primary/[0.09] rounded-full uppercase sm:block hidden">{item.name.charAt(0) + item.name.charAt(1)}</p>
                                            <p className="flex flex-col gap-1">
                                                <span className="font-semibold">{item.name}</span>
                                                <span>{item.sex}, {item.age} Years</span>
                                            </p>
                                        </div>
                                        :
                                        header === "Priority" ? <span  className={`${item.priority === "High" ? "bg-emerald-500/[0.3]" : item.priority === "Medium" ? "bg-fuchsia-500/[0.3]" : "bg-red/[0.3]"} py-1 px-2 rounded-lg text-[8px]`}>{item?.priority}</span>
                                        :
                                        (item)[header.toLowerCase()]
                                    }</td>
                                ))
                            }
                        </tr>
                    ))
                    }
                </tbody>
            </table>

            {/* {
                openModal &&
                <HistoryModal setShow={setOpenModal} show={openModal} transaction={active} />
            } */}
        </div>
    )
}