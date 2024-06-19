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
                <svg
                    className="biography-sign"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="15"
                        width="32"
                        height="2"
                        rx="1"
                        className="biography-sign-piece"
                    />
                    <rect
                        y="15"
                        width="32"
                        height="2"
                        rx="1"
                        className="biography-sign-piece inverted"
                    />
                </svg>{" "}
                <h3 className="biography-title">{title}</h3>
            </div>

            <div
                className={`biography-desc ${
                    dropdown === dropdownNum ? "--active" : ""
                }`}
            >
                <div className="biography-desc-content">{children}</div>
            </div>
        </div>
    );
}
