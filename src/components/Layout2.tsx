import Navbar from "./Navbar"

const Layout2 = (props: {children: React.ReactNode}) => {
    return (
        <div className="layout2">
            <Navbar />
            <>{props.children}</>
        </div>
    )
}

export default Layout2