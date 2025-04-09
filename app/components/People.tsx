import React from "react";
import ceo from "../assets/people/ceo.jpg";
import cto from "../assets/people/cto.jpg";

const People = () => {
  return (
    <div>
      <section className=" dark:text-white font-poppins gradient-bg-ppl  dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p className="dark:text-white font-light text-gray-500 sm:text-xl">
              Meet our expert team, passionate about turning vision into reality
              with innovative strategies
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[10rem] h-[10rem]  rounded-full"
                src={ceo.src}
                alt="CEO"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Maher Kurdi</a>
              </h3>
              <p>CEO</p>
              {/* <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 object-cover lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[10rem] h-[10rem] rounded-full"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEBUREBAQFRUWFRUYGBcWFxUVFxIXFRUXFxUWFRcdHSggGBolGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAPFi0lHyUtKy0tLS0tLS8rLS0tKystLS0tLS0tLSstLS0tKy0tKy4tLS0tLS0rLSstKystKysrLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCBAYDB//EAD0QAAIBAgMFBgMECQQDAAAAAAABAgMRBCExBQYSQVETYXGBkbEiMqEHQsHRFCNSYnKy4fDxFRaCkjNDY//EABkBAQEAAwEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgIBAwUBAAAAAAAAAAABAhEDITEiUWEEEzJBgRL/2gAMAwEAAhEDEQA/APuAAAAAAAAAAAAEASQAAAAANg4P7Ud6v0al+j05R46kfiu3dReVklzffy8SW6WTdbe3/tEwWGk4xUqrX7Dio+refkmcwvtfmp3lg4Om9HGpLiXjeFjgqG6+Nr2qxozbel+GKt0adm0WMd0toO8ewSSWl/DR+pq+58t84fh9Y3d3+wWKn2V5UqjdlGdrSfJRlo7+R1Z8LW5+LjRc+yV4q3DxfE1qmv3k8zvPs23qni+0o1r9pTjHXWSTak33/IZY576YZ8ept3AANjUAAAAAAAAAAAAAAAAggkAZgAAAAAAAAgAAAAAAAAAD51VpUcRtGtUqQTVOyinmuJK3E++y8rn0U+cbCp3nXnfPtqkX4qTNfJ4beLyvKNuRt2OdrbyYWlK05T1txKLcfVF5SxtKVPjjK8bdPwNMdmRNnLYunDB7SpYuEeFVLxnbJSTVnf6PyN570UZVXThSrSs3eXD8PqeG+PBPB9qvuOL8m7P3LL7Mc512+joGvs53o03/APOH8qNg6XAAAAAyAJBAAAAAAAAAAAADMAAAAAIAAAAAAAAAAAADzrzahJrVRb9EcBsnDuKxMbq7q3fjOEXL6t+p39eLcZJauLXqjjVJRnJZaJvx5+/saeTe3TwSav8AHP4jYdac0nUk4tu64Y2ayyTfyvLVddL5lrszZrhQqUuOTyyfNZZ2N7/UKcF8TSb65FF/vDC0p1I1IzTtdO2VR9Idf6miSOy7Qt27Si4ufDm8mlxXvZy5tq/hkWO2cFfCSpXbUpU0762c4p/Qz2btqFSCsnG6vwytxRvpe2TNjFV78MVzauWWMc57up2SrUYK97K1/BtL6I2zW2bBqlFPvfq7mydePh52f5UBBJWIQAAAAAAAAAAAAAAAZgEASCAAAAAAAAAAAAAgAAc7vhTtTjUWSTaf/K1m/T6nRFRvTODw86b1mrLutmn6oxzm5WeF1lHB4rDQrxTU5QqJWUlaSi8rXi8mn6nphsNTUV2tVca7qKztm4/C2s7HILas6Nbhmmno1yfRovI7VwUrSqcEnZfNZ2v4nHJp6eOSzpYbgk6lSq53a4E+H9WvFJXudBulLtKrlqoxb85NpfTiPn+09vU5tQp52fL8LH0f7P8ACuGGblbilLPuSirLyT9zZxY+rbR9Rn6a6cAHU4AAAAAAAAAAAAAAAAAAgD0IAAAAAAAAAAAAAAVOI2q02opa2uwLU8q2JhD5pJe/oUdTH1HrJ+3saNWpcC5xO2VpBZ9X+RR4yq5pttt+7RMHn32MZCkurty+2di068eK2dsmcq92K3E0qk7dGr/U+q19ltRjOGcWk2umXLuNSWDz0OK45Y9PUxywzm3JbvbuRpvikrvvzPoGw8Z2d+cbq68Fr45lesPJtQis2bFLD9m3C97N3fVvN+WZt4Zd7c/1Nkx1HWUqsZK8WmZnKdo01a670WOF2tJO0s/c6XGugasNoU+d0bEJp6NPwIMgAAAAAAAACAJIAAAADMAAAAAAAAAAAQAInNRV27JHH4ut8bSsr6d/9TptqySpPq7W8bnFYpzjK8UpJ6wbt/ypvS/d7agbVGvxK+jTs10a1X99TORW0KyVW6uuNWaas1KKurrvjdX/AHUWLkkBgoKTu9YvLVWPSxhBWl4r2/yelgi82c70l3fmRWwEZZp8L+noRsr/AMa8X7m0LJZ2yxyuPceWGwkYO6zb5v8ADoU1dWlLP7z9zoEUGMX6yXiyySeEtt7rwnKblG3Dw6vr5dPEyqPMxehnNaBHsqmR74Sb4lbql/fqaEZ2Tbdkte7xNXCYyVWonFPgWaWjm3mpS6R6LV66WuHdA8sNK8IvuX9T1IoAABAAAAAAAAAAGYBAEggAAAAAAAAAU+8eUYvPmjmZ1YyVm7+OTOl3gz4Vlo3n3/4OeqRjzcfoKK3H8ajxJ8XA1LP5sndpNZPK+RYt8VO6fK55y4NLx8E17HhsuTUHB3+BuOfRfL9LEGxg8RxJN6p2fsbbZTUpWlJLxLXtBBfbKf6vzZty5mhseX6t/wAT9kbsnl5GSM+RQYt3qS/iZep5eRzuKl+sl/E/cUQ3kecazcrWy69BVlZen1aPGFeKirySvfpd/mQYbQbcFTTs5uzyT+HWWXesvM28JFRVkrL6t82+r7ytglOo53eSsnllfN29Im/QhbR2+v1Yg6nZVROFr6M3So2G4/F8V5Zc+XOxbFUAAAAAAAAAAAAAZAAgAAACABIIAAAAUe3Vedn0RTypxTyii321K1TyRU2CMeyj0Xoac48NS+imkvOOn09iwRX7ajelLPRX8LEqxWqsu1aTTXKzurPRr1LGhU+BeFigwFam6VGpGUc6UU/Fdelszdw2LWcb8+vXP3uYstOx2DP4Jd0vwRZXy8yj2EpwclJWTtbTVf5LpvXyNkYVnE5avVvKT/efudJiZ8MJvpGT9EzjO0yRKseuMrvhXjlz6v8AIq69ezjF5yl4uz6GtvBjHDhSa4uFuzz1dl7M9djU6k4Rq1o2mrqKV+byv5amrPPTfxcVzWUb0o3mneTvwxV5N2skktMkvqbeGqx4U6nwuT0vfXRN8zHBuV+G0XL703ouni+4KlPj+DRu7qOzcktVFf2jXjnla6s+LjmPf6dHsqnFTi0ra+xeHO4ObTT6HRJnU82AACgAAAAAAAAAAyIJIIAAAAAAAAAAAodur9Z5L8Ssk0tdehc7fj8su5/TM551ukG2/JATV7Z/K6a7mpP63RqYjilGUKsVFuLV4ttNW8LpnvXr1Mow7NdZSu0u6MU05PzXmZ0kpZOcpf8AVL6L8SXtZdKnB7s4NRtGikvGV/W9yxw+x6FP4lSinlm7t69Xc3Y2WUX4FZjcfVjLhqRytdNZp8jV/my9um8ksul32iIlirdSnoY7iWTubcJ3N23I2nWlZ3k2nk/BorI7KnylC3K98/HLI24z1i/Uw7SUfAKpa269SpW7SVaPCrJRUXf4c/mvpdt6F7DZ9kknHJWXcZQqXWTFWr35mN48b3WzHlzxmo1pYBcSTnZLW1/i5pN+voetKi4vim1fRW0Sv/g86tR3Tv8AMnH1Jp13Z8Wqt5p6MmOGMu4uXPnlNWrSg13HRUPlj4L2OKhXtJPvzO2p6LwXsbGlkAAoAAAIAEggASCABkACAAAAIAEggASQAUV236d6N+jRydavCCzbu+mb8EdxiqXHCUeqfryOErWUs1mm14Eo0YUbtyUFTjz/AG5eL5LuNmNd6QWS9F1Jm46ykrdDwqYniyirL3MVb1LEczWxeHc7uFSN5aqSbXk08vRnjGp6EuS1uUcvtzZe1IWq4WVNtXTpxlxcaurSSlGOmeV+eR4bD32k6kKOIozhUk+HRpRfJSi81dW9Tqp4yEfvemZW7QofpDusPNzXy1FanKPS07p2IL+GJ4lk/A2aVZSVmcFTntShJyrU6c6S6Ndq+/JWa8UWeyt4qNbKMmpK11JOL/J+RdmnU5xeWhk31NGniE18yPRVuQR7VI5eD/v3MHrfo3l1TMHWViI1/UDfwtG80utrd9ztDkt2qbnVv92Of5I60yQAAAAAAAFAAAAAGQBBAABQAAAAAAAAKPam7sas3ONRwb1yum+uqsXgA+Q7w42GEqypT4puLtdJWfPK7Kavvhh4NKarRbjCXypq04qSWT6M2ftCXFiqklfW/XqW893MNOjT7SjBy7OmnJpXyhFa68jBVBQ3xwUv/fFfxpw/mSLXDbUoSzVSDXVTi/xKDa+52CU0qcJOo5U1ZN2gqlSMFOXcnLTV2dudupqfZ09I1I2tZZMuhP8Aq2Egs3H+Z+iPF7zUpL4Lpd8ZR90W2G3FpuK46kuLnZK1+4sYbn4ZWVnZdebfNl1TcfMsXvpW42v0eaSfzNp3z1zVjzwmOqYji7NVI8KTd1Czvdfd5n1ylu1hIy4uxjmuFp5prVZde84LHbtuFPE0KdScZqrKVOacouHFPjjC6zcVGVrEsNuTxuOxNGLcZzi7xSvZrW7sndaJm1snezFSkozjSaeV/iT/AJif9u46ouGvWU4rNXbdnmtWr82emB3cqU53adl4Mg+mbv7Khiabk5TjLhg1bNWlG+nqWdDdKmnedWb7klH8zV3Hq5cH7rXpLL6XOtMtJt4YLB06UeCnGy9W31b5mwQSVAAAAQAJIAAAAASQAMkACAACgAAAAAAAAYVZ2i30TfogAPm218JFynKyu+bzM9v7SdCnCFOKlWqtQpReUeK2cpP9lLO3MkGKp2XstUoxjKXHOVSnKpN6znxxd+5K1kuSSO2QBnEecNWeiACDOO3hpKOIk1rNwv8A9vyiyQTLwsa7pJM9adHuWaYBirf3fg6daLbWbs0tM8vxOzAMkAAAAAAAAAAAIJAGIAA//9k="
                alt="CTO"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Shahbaz Khan</a>
              </h3>
              <p>CTO</p>
              {/* <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 object-cover lg:w-[15rem] lg:h-[15rem] md:w-[10rem] md:h-[10rem] w-[10rem] h-[10rem] rounded-full"
                src="data:image/jpeg;base64,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"
                alt="DR. Shab"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Dr. Wajahat Qazi</a>
              </h3>
              <p>Advisory Board</p>
              {/* <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
            {/* <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="Joseph Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Joseph Mcfall</a>
              </h3>
              <p>Sales</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                alt="Sofia Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lana Byrd</a>
              </h3>
              <p>Web Designer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                alt="Leslie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Leslie Livingston</a>
              </h3>
              <p>Graphic Designer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Michael Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Michael Gough</a>
              </h3>
              <p>React Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center text-gray-500 dark:text-white">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                alt="Neil Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Neil Sims</a>
              </h3>
              <p>Vue.js Developer</p>
              <ul className="flex justify-center mt-4 space-x-4">
                <li>
                  <a
                    href="#"
                    className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
