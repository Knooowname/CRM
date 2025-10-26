import type { ActivitiesData } from "../../shared/types/activitiesData.types"
import { ActivitiesCard } from "./ActivitiesCard"

const activitiesData: ActivitiesData[] = [
    {
        nameCheck: 'Test1',
        checkBoxText: 'Test1',
    },
    {
        nameCheck: 'Test2',
        checkBoxText: 'Test2',
    },
    {
        nameCheck: 'Test3',
        checkBoxText: 'Test3',
    },
    {
        nameCheck: 'Test4',
        checkBoxText: 'Test4',
    },
]

export const Activities = () => {
    return (
        <div className="h-full flex flex-col">
            <h3 className="text-gray-500 font-medium text-lg mb-4">
                Activities
            </h3>
            <div className="flex flex-col gap-2">
                <ActivitiesCard title="Test" data={activitiesData} />
                <ActivitiesCard title="Test" data={activitiesData} />
                <ActivitiesCard title="Test" data={activitiesData} />
                <ActivitiesCard title="Test" data={activitiesData} />
                <ActivitiesCard title="Test" data={activitiesData} />
            </div>
        </div>
    )
}
