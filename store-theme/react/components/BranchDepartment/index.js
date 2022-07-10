import React, { useEffect, useState } from "react";
import $ from "jquery";

const BranchDepartment = () => {
  const [allBranchDepartment, setallBranchDepartment] = useState([]);

  useEffect(() => {
    appendItems();
  }, []);

  const appendItems = () => {
    var array = $(".vtex-search-result-3-x-filter__container--category-1 .vtex-search-result-3-x-filterContent .vtex-search-result-3-x-filterItem").map(function (i, item) {
      return $(this)[0].title.replace(" ", "-");
    });

    setallBranchDepartment(array);
  };

  return (
    <>
      <div className="branchDepartment">
        <ul className="branchDepartment__items">
          {allBranchDepartment.map((index, department) => (
            <li className="branchDepartment__items-item">
              <a className="branchDepartment__items-item--link" href={`/${department}`}>
                <div className="branchDepartment__items-item--img">
                  <img src={`/arquivos/icon-branch-${department}.svg?v=1`} alt={department} />
                </div>

                <span className="branchDepartment__items-item--text">
                  {department}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BranchDepartment;
