import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className='px-3 pb-2 m-1 font-semibold border-b-2 border-gray-300'
                style={{ color: match ? "#991B1B" : "black", borderColor: match ? "#991B1B" : "lightGray" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;