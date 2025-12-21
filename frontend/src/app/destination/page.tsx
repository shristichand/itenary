import { getPackages } from "@/api/package";
import { Region } from "@/components/region/Region";
import { TopExperience } from "@/components/topexperience/TopExperience";

export const revalidate = 60;

export default async function Destination() {
    let packages =  [];    
      try {
        const packagesRes = await getPackages();
        packages = packagesRes?.data || [];
       
      } catch (error) {
        console.error("Failed to fetch home page data:", error);
      }
    return (
        <div >
            <Region packages={packages} />
            <TopExperience />
        </div>
    )
}