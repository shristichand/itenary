import { AllCountries } from "@/components/allcountries/AllCountries";
import { getPackages } from "@/api/package";

export const revalidate = 60;
export const runtime = 'edge';

export default async function Packages() {
    let packages = [];
    try {
        const res = await getPackages();
        packages = res?.data || [];
    } catch (error) {
        console.error("Failed to fetch packages:", error);
    }

    return (
        <AllCountries packages={packages} />
    )
}