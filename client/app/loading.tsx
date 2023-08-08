import Sidebar from "./components/sidebar"

export const dynamic = 'auto',
dynamicParams = true,
revalidate = Infinity,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'

export default function Loading() {
    return(
        <div className="bg-gradient-to-t  from-mainPurple to-mainDarkPurple dark:from-mainDarkPurple dark:to-mainPurple h-[100vh] fixed top-0 left-0 w-20 shadow-lg z-[200]">
            
        </div>
    )
}