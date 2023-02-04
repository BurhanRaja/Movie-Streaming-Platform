import React from "react";
import Layout from "./Layout";

function UnAuthorized() {
  return (
    <Layout>
      <div className="w-[100%] h-[80vh] flex justify-center items-center">
        <h1 className="text-red-600 text-5xl font-extrabold">
          401 UnAuthorized
        </h1>
      </div>
    </Layout>
  );
}

export default UnAuthorized;
