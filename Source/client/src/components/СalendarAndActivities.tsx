import { Activities } from "./ui/Activities"
import { DefaultCalendar } from "./ui/Calendar"

export const СalendarAndActivities = () => {
    return (
        <div className="flex flex-col gap-6 w-full h-full p-2 overflow-auto">
            <DefaultCalendar/>
            <Activities/>
        </div>
    )
}