export default function BiographyCard({
    dropdownNum,
    dropdown,
    handleDropdown,
    reference,
    title,
    children,
}) {
    return (
        <div className="biography-section" ref={reference}>
            <div
                className={`biography-btn ${
                    dropdown === dropdownNum ? "--active" : ""
                }`}
                onClick={() => {
                    if (dropdown === dropdownNum) {
                        handleDropdown(0);
                    } else {
                        handleDropdown(dropdownNum);
                    }
                }}
            >
                <h3 className="biography-title">{title}</h3>
            </div>

            <div
                className={`biography-desc ${
                    dropdown === dropdownNum ? "--active" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
}
