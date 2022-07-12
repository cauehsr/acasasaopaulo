import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import $ from "jquery";
import { Helmet } from 'vtex.render-runtime'

const BranchDepartment = () => {
  const [allBranchDepartment, setallBranchDepartment] = useState([]);
  const [linkAtual, setlinkAtual] = useState([]);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    appendItems();
    link();
    resolution();
  }, []);

  const link = () => {
    setlinkAtual(window.location.pathname);
  };
  const resolution = () => {
    if (window.screen.width > 1024) {
      setIsDesktop(true);
    } else if (window.screen.width <= 1024) {
      setIsMobile(true);
    }
  };

  const appendItems = () => {
    var array = $(".vtex-search-result-3-x-filter__container--category-1 .vtex-search-result-3-x-filterContent .vtex-search-result-3-x-filterItem").map(function (i, item) {
      return $(this)[0].title.replace(" ", "-");
    });

    setallBranchDepartment(array);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  return (
    <>
      <Helmet>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      {isDesktop && (
        <div className="branchDepartment">
          <ul className="branchDepartment__items">
            <Slider {...settings}>
            {allBranchDepartment.map((index, department) => (
                <li className="branchDepartment__items-item">
                  <a className="branchDepartment__items-item--link" href={`${linkAtual}/${department}`}>
                    <div className="branchDepartment__items-item--img">
                      <img src={`/arquivos/icon-branch-${department}.svg?v=1`} alt={department} />
                    </div>

                    <span className="branchDepartment__items-item--text">
                      {department}
                    </span>
                  </a>
                </li>
            ))}
            </Slider>
          </ul>
        </div>
      )}
      {isMobile && (
        <div className="branchDepartment">
          <ul className="branchDepartment__items">
            {allBranchDepartment.map((index, department) => (
              <li className="branchDepartment__items-item">
                <a
                  className="branchDepartment__items-item--link"
                  href={`${linkAtual}/${department}`}
                >
                  <div className="branchDepartment__items-item--img">
                    <img
                      src={`/arquivos/icon-branch-${department}.svg?v=1`}
                      alt={department}
                    />
                  </div>

                  <span className="branchDepartment__items-item--text">
                    {department}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BranchDepartment;
