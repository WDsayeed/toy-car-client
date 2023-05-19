import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="md:container mx-auto my-5">
      <div>
        <h1>
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p>
          {" "}
          <span>Answer: </span>
          Access token and refresh token are used in authentication and
          authorization processes.Access token used to gain authorized access to
          protected resources or perform actions on behalf of a user. Refresh
          token used to obtain a new access token once the current one expires,
          eliminating the need for the user to log in again.Access tokens and
          refresh tokens can be stored on the client-side using in-memory
          storage, browser storage mechanisms like localStorage, or as HTTP-only
          cookies.
        </p>
      </div>
      <div>
        <h1>
        Compare SQL and NoSQL databases?
        </h1>
        <ul>
                <li>1. SQL databases are relational, and NoSQL databases are non-relational.</li>
                <li>2. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                <li>5. SQL databases are relational, and NoSQL databases are non-relational.</li>
                <li>6. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
