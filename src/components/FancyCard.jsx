

const FancyCard = (props) => {
  return (
    <div className="sticky top-0 cardCustom max-w-screen-xl min-h-fit font-roboto-condensed p-5">
      <div className="textCustom">
        <span className="text-2xl pb-3 font-medium">{props.title}</span>
        <p className="subtitleCustom text-base">{props.sub}</p>
      </div>

      <div className="flex py-20 justify-between flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center items-center">
        <img src={props.ilus[0]} className="w-auto h-52" />
        <p className="subtitleCustom text-base px-5">{props.p[0]}</p>
        </div>
        
        <div className="flex flex-col justify-center items-center">
        <img src={props.ilus[1]} className="w-52 h-52" />
        <p className="subtitleCustom text-base px-5">{props.p[1]}</p>
        </div>
        
        <div className="flex flex-col justify-center items-center">
        <img src={props.ilus[2]} className="w-52 h-52" />
        <p className="subtitleCustom text-base px-5">{props.p[2]}</p>
        </div>
      </div>
      {/* <div className="icons">
        <a className="btn" href="#">
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className="svg-icon"
          >
            <path
              stroke-width="8"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              d="M31.8,64.5a14.5,14.5,0,0,1-3.2-28.7,17.5,17.5,0,0,1-.4-4,18.2,18.2,0,0,1,36-3.6h.3a18.2,18.2,0,0,1,3.7,36M39.1,75.4,50,86.3m0,0L60.9,75.4M50,86.3V42.7"
            ></path>
          </svg>
        </a>
        <a className="btn" href="#">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
          </svg>
        </a>
        <a className="btn" href="#">
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className="svg-icon"
          >
            <path
              stroke-width="8"
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z"
            ></path>
          </svg>
        </a>
      </div> */}
    </div>
  );
};

export default FancyCard;
