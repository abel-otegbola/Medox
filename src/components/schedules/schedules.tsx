import { ScheduleData, Value } from "@/interface/schedule";
import ScheduleGrid from "../scheduleGrid/scheduleGrid";

type ScheduleLayoutProps = {
    schedules: ScheduleData[],
    value: Value, 
    layout: string,
}

export default function SchedulesLayout({ schedules, value, layout }: ScheduleLayoutProps) {

    const dateValue = value?.toLocaleString().split(",")[0] || ""

    return (
        <div className="p-4 bg-white dark:bg-dark">
            {
                layout === "Calendar" ?
                <div className="pb-12 pt-0 w-full max-w-[90vw]">
                        <div className="w-full overflow-x-auto">
                            
                            <table className="table-auto w-full min-w-[700px]">
                                <thead>
                                    <tr className="text-[12px] p-4">
                                        <th className="text-center"></th>
                                        {
                                            [(+dateValue.split("/")[1])-1, dateValue.split("/")[1], (+dateValue.split("/")[1])+1, (+dateValue.split("/")[1])+2, (+dateValue.split("/")[1])+3, (+dateValue.split("/")[1])+4].map(date => (
                                            <th key={date} className={`min-w-[100px] py-2 rounded ${value?.toLocaleString().split(",")[0].split("/")[1] === date ? "bg-red text-white" : ""}`}>{date}</th> 
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-[10px]">
                                    {
                                        [...Array(24).keys()].map(date => (
                                        <tr key={date} className="h-[65px] border border-transparent border-y-gray/[0.5] dark:border-y-gray/[0.07]">
                                            <td className="px-2 flex h-full w-full">{date > 9 ? "" : "0"}{date}:00</td>
                                            
                                            {
                                                [ -1, 0, 1, 2, 3, 4].map(index => (
                                                    <td key={index} className="p-[2px] border border-gray/[0.5] dark:border-gray/[0.07] relative">
                                                        {
                                                            schedules.filter(item => (item.duration.split(":")[0] === `${date > 9 ? "" : "0"}${date}` && new Date(item.date).getDate() === new Date().getDate() + index)).map(element => (
                                                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                                                            ))
                                                        }
                                                    </td> 
                                                ))
                                            }
                                        </tr> 
                                        ))
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                :

                layout === "Grid" ?
                    <div className="md:columns-4 columns-2 py-2 pb-16 ">
                        {
                            schedules.map(element => ( 
                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                            ))
                        }
                    </div>
                :
                    <div className="py-2">
                        {
                            schedules.map(element => ( 
                                <ScheduleGrid key={element.id} element={element} layout={layout} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}