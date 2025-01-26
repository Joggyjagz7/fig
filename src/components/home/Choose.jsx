const Choose = () => {
  return (
    <section className="choose-bg">
      <div className="lg:h-[90vh] flex lg:justify-between py-[50px] flex-col gap-[20px] ">
        <div className="flex justify-center items-center">
          <h2 className="heading-2 text-white">Why Choose Us</h2>
        </div>
        <div className="flex flex-col gap-[20px]  lg:gap-0 lg:flex-row justify-between w-full lg:w-11/12 mx-auto  ">
          <div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
            <div className="bg-white p-[20px] w-11/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
              <h4 className="group-hover:scale-105 transition ease-in-out heading-4 ">
                Instant Funding{" "}
              </h4>
              <p className="group-hover:scale-105 transition ease-in-out text-[15px] leading-[1.5em]">
                No paperwork. Just fast, easy access to the funds you need
                without the wait.
              </p>
            </div>
          </div>
          <div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
            <div className="bg-white p-[20px] w-11/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
              <h4 className="group-hover:scale-105 transition ease-in-out font-[700] leading-[1.4em] ">
                Focus On The Art{" "}
              </h4>
              <p className="group-hover:scale-105 transition ease-in-out text-[15px] leading-[1.5em]">
                Get creative. Create your best work. And leave the financial
                stress to us.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-11/12 lg:w-[400px] md:w-8/12 mx-auto  ">
            <div className="bg-white lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%]  p-[20px] w-11/12  mx-auto lg:mx-0  rounded-[10px] flex-1 ">
              <h4 className="group-hover:scale-105 transition ease-in-out font-[700] leading-[1.4em] ">
                Flexible Repayment{" "}
              </h4>
              <p className="group-hover:scale-105 transition ease-in-out text-[15px] leading-[1.5em]">
                Take your time. Create. Deliver. When your funds start rolling
                in, pay us back on your terms
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
