import { useState } from "react";


interface City {
    city: string;
    ccountry: string;
    timezone: string;
}


export const UserAddCity = React.FC = () => {
    const [userAdd, setUserAdd] = useState<City[]>([]);

}