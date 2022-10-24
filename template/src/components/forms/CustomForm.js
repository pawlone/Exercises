function CustomForm() {
    return (
        <div className="mt-5 row justify-content-center">
            <div className="col-5">
                <form action="example.com" method="POST">
                    <label htmlFor="txtUsername">Username</label>
                    <input id="txtUsername" type="text" className="form-control" />
                    <label htmlFor="txtPassword">Password</label>
                    <input id="txtPassword" type="password" className="form-control" />
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default CustomForm