const SecHeader = ({ lTitle, rTitle, children }) => {
    return (
        <div className="flex justify-between flex-wrap gap-10 my-10 text-primary">
            <div className="flex gap-2">
                {children}
                <h5 className="text-base-content">{lTitle}</h5>
            </div>

            <div>
                <button>{rTitle}</button>
            </div>
        </div>
    )
}

export default SecHeader