const Dashboardlayout = ({children} : { children: any}) => {
    return (
        <div className="flex flex-col gap-y-3">
            <nav className="bg-black text-white" > This is a shared dashboard </nav>
            {children}
        </div>
    )
}

export default Dashboardlayout; 