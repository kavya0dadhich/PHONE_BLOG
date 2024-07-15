import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { IoMdCheckmark } from "react-icons/io";

function Dashborad() {
  const [timer, settimer] = useState(new Date());
  useEffect(() => {
    setInterval(() => settimer(new Date()), 1000);
  });
  // function ChartComponent() {
  //   const data = {
  //     labels: ["January", "February", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: "First Dataset",
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         fill: false,
  //         borderColor: documentStyle.getPropertyValue("--blue-500"),
  //         tension: 0.4,
  //       },
  //       {
  //         label: "Second Dataset",
  //         data: [28, 48, 40, 19, 86, 27, 90],
  //         fill: false,
  //         borderColor: documentStyle.getPropertyValue("--pink-500"),
  //         tension: 0.4,
  //       },
  //     ],
  //   };
  //   const options = {
  //     maintainAspectRatio: false,
  //     aspectRatio: 0.6,
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: textColor,
  //         },
  //       },
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           color: textColorSecondary,
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //         },
  //       },
  //       y: {
  //         ticks: {
  //           color: textColorSecondary,
  //         },
  //         grid: {
  //           color: surfaceBorder,
  //         },
  //       },
  //     },
  //   };
  // }
  const CardD = [
    {
      name: "phone",
      isInfo: true,
      index:1
    },
    {
      name: "phone",
      isInfo: true,
      index:2
    },
    {
      name: "phone",
      isInfo: false,
      index:3
    },
    {
      name: "phone",
      isInfo: true,
      index:4
    },
    {
      name: "phone",
      isInfo: false,
      index:5
    },
    {
      name: "phone",
      isInfo: true,
      index:6
    },
    {
      name: "phone",
      isInfo: true,
      index:7
    },
    {
      name: "phone",
      isInfo: false,
      index:8
    },
    {
      name: "phone",
      isInfo: true,
      index:9
    },
    {
      name: "phone",
      isInfo: false,
      index:10
    },
  ];
  return (
    <>
      <div className="row mt-3">
        <div className="col-12 flexJsAc">
          <div className="f64 textC resW-50 w-30">{timer.toLocaleTimeString()}</div>
          <div className="w-40 textC resW-50">
            <input
              placeholder="Search for any model"
              className="searchInput form-control"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-30 textC resHide">
            <div className="dflexJse">
              <div className="navIcon"><img src="" alt="" /></div>
              <div className="navIcon"><img src="" alt="" /></div>
              <div className="navIcon"><img src="" alt="" /></div>
              <div className="navIcon"><img src="" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-md-8 col-ms-12 border border-black">hello</div>
          <div className="col-md-4 col-ms-12 p-2 border border-black">
            <div className="card p-2 dasCard" style={{ height: "500px" }}>
              <div className="dflexJs">
                <div className="heading_col w-50 fs-3 text-center">
                  <span className="fw-semibold">Company Name</span>
                  {CardD.map((e) => {
                    return (
                      <div key={e.index} className="text-center cbg mt-2 ps-3">{e.name}</div>
                    );
                  })}
                </div>
                <div className="heading_col  w-50 fs-3 text-center">
                  <span className="fw-semibold">Information</span>
                  {CardD.map((e) => {
                    return (
                      <div key={e.index} className="text-center mt-2">
                        {e.isInfo ? (
                          <IoMdCheckmark className="cGreen" />
                        ) : (
                          <GrClose className="cRed" />
                        )}{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashborad;
