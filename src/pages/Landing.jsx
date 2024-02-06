import React from "react";
import { useAuth } from "../utils/AuthContext";

const Landing = () => {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <section className="relative bg-[url(https://cdn.mos.cms.futurecdn.net/9gQsUZJsBkyjnsiFNZdthc.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Save your work and memories with us.
                <strong className="block font-extrabold text-rose-600">
                  {" "}
                  Share your work and get idead for more.{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                PhotoMoto: Where we all get an opportiunity to share ou best
                work and get ideas from other creators on our platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/dashboard"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  View publishers
                </a>

                <a
                  href="/albums"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  View your albums
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative bg-[url(https://cdn.mos.cms.futurecdn.net/9gQsUZJsBkyjnsiFNZdthc.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Save your work and memories with us.
                <strong className="block font-extrabold text-rose-600">
                  {" "}
                  Share your work and get ideas for more.{" "}
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                PhotoMoto: Where we all get an opportiunity to share ou best
                work and get ideas from other creators on our platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="/register"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Register
                </a>

                <a
                  href="/login"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Landing;
