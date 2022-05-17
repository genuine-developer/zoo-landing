import React, { useState } from "react";
import CreatedList from "./created-list";
import Selling from "./selling";

const CreatePage = () => {
  const [sellingPage, setSellingPage] = useState(false);
  const [sellingNft, setSellingNft] = useState(null);

  return (
    <div className="created">
      {sellingPage && <Selling {...sellingNft} />}

      {!sellingPage && (
        <CreatedList
          setSellingPage={setSellingPage}
          setSellingNft={setSellingNft}
        />
      )}
    </div>
  );
};

export default CreatePage;
