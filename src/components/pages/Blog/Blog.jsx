import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="md:container md:mx-auto md:my-20 md:pb-5">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-[#a4c243] bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            <span className="font-semibold">Answer: </span>
            Access token and refresh token are used in authentication and
            authorization processes.Access token used to gain authorized access
            to protected resources or perform actions on behalf of a user.
            Refresh token used to obtain a new access token once the current one
            expires, eliminating the need for the user to log in again.Access
            tokens and refresh tokens can be stored on the client-side using
            in-memory storage, browser storage mechanisms like localStorage, or
            as HTTP-only cookies.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse  collapse-plus border border-[#a4c243] bg-base-100 rounded-box my-5"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
        <span className="font-semibold">Answer: </span>

          <ul>
            <li>
              1. SQL databases are relational, and NoSQL databases are
              non-relational.
            </li>
            <li>
              2. SQL databases use structured query language (SQL) and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
            </li>
            <li>
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
            </li>
            <li>
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
            </li>
            <li>
              5. SQL databases are relational, and NoSQL databases are
              non-relational.
            </li>
            <li>
              6. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-[#a4c243] bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-semibold">Answer:</span> Express.js is a free and open source web
            application framework for node.js. It is used for designing and
            building web application easily. Express.js allows developers to
            handle various HTTP requests (GET, POST, PUT,PATCH, DELETE, etc.) and
            define routes to handle different URLs.
          </p>
          <br />
          <p>
            {" "}
            Next.js is a popular React framework for building server-side
            rendered and static websites. Next.js offers efficient solution for
            creating high-performance web applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-[#a4c243] bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            <span className="font-semibold">Answer: </span>
            MongoDB's aggregate is a framework for performing advanced data
            processing and analysis tasks on collections of documents within a
            MongoDB database. It allows  to perform complex queries,
            transformations, aggregations, and computations  data. The aggregate framework in MongoDB works by defining a pipeline of stages through which the documents pass, with each stage performing a specific operation on the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
