import { Outlet } from "react-router-dom";


const Blog = () => {
    return (
        <>
            <section className="row">
                <article className="col">
                    This is Blog
                </article>
            </section>
            <Outlet />
        </>

    );
}

export default Blog