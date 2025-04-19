import './Error.css'; // Import the CSS file

const Error = () => {
    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">The page you are looking for does not exist.</p>
        </div>
    );
};

export default Error;
