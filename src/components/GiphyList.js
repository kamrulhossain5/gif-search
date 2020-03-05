import React from "react";

const GiphyList = ({ gifs, term }) => {
  return (
    <div className="ui large horizontal divided list">
      <div>
        {gifs.length === 0 ? null : (
          <div>
            <p>
              {gifs.length} results for{" "}
              <span style={{ fontWeight: "bold" }}>"{term}"</span>
            </p>
          </div>
        )}
      </div>
      {gifs.map(item => {
        return (
          <div className="item" key={item.id} style={{ marginTop: "20px" }}>
            <a href={item.images.fixed_height.url}>
              <img
                style={{ maxWidth: "200px" }}
                src={item.images.fixed_height.url}
                alt={item.title}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default GiphyList;
