import { useState } from "react";

export default function useDropdown() {
    const [dropdown, setDropdown] = useState(0);

    const handleDropdown = (num) => {
        setDropdown(num);
    };

    return [dropdown, handleDropdown];
}
