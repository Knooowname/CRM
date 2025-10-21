import { AnalyticsCard } from "../components/ui/AnalyticsCard"
import { PageTitle } from "../components/ui/PageTitle"

export const AnalyticsPage = () => {
    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            <PageTitle title="Analytics" />
            <div className="grid grid-cols-3 gap-4 w-full h-full">
                <div className="col-span-2 h-full">
                    <div className="grid grid-cols-2 gap-4">
                        <AnalyticsCard icon="src/assets/money.svg" title="Total Sales" value="$612.917" descr="Products vs last month"/>
                        <AnalyticsCard icon="src/assets/money.svg" title="Total Sales" value="$612.917" descr="Products vs last month"/>
                        <AnalyticsCard icon="src/assets/money.svg" title="Total Sales" value="$612.917" descr="Products vs last month"/>
                        <AnalyticsCard icon="src/assets/money.svg" title="Total Sales" value="$612.917" descr="Products vs last month"/>
                    </div>
                </div>
                <div className="col-span-1 h-full">

                </div>
            </div>
        </div>
    )
}