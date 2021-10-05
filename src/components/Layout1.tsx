import Navbar from "./Navbar"

const Layout1 = (props: {children: React.ReactNode}) => {
    return (
        <div className="layout1">
            <Navbar />
            <>{props.children}</>
        </div>
    )
}

export default Layout1