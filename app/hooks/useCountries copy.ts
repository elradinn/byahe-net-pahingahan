import countries from "world-countries";
import { philippines } from "@/app/data/philippines";

const formattedCountries = countries.map((c) => ({
    value: c.cca2,
    label: c.name.common,
    flag: c.flag,
    latlng: c.latlng,
    region: c.region,
}));

const formattedPhilippines = philippines.map((p) => ({
    value: p.Province,
    label: p.Province,
    flag: "",
    latlng: p.LatLng?.split(";").map((coord) => coord.trim()),
    region: p.City,
}));

const useCountries = () => {
    const getAll = () => formattedPhilippines;
    const getByValue = (val: string) =>
        formattedPhilippines.find((country) => country.value === val);

    return {
        getAll,
        getByValue,
    };
};

export default useCountries;
