import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'

type Props = {};

const MidSection = (props: Props) => {
  return (
      <>
<div className="py-16">
  <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div className="md:5/12 lg:w-1/2">
        <img src="https://tailus.io/sources/blocks/right-illustration/preview/images/pie.svg" alt="image" loading="lazy" />
      </div>
      <div className="md:7/12 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
        Utilize our comprehensive APIs to design unique payment experiences.
        </h2>
        <p className="my-8 text-gray-600 dark:text-gray-300">
        Leverage on our well documented open APIs to build scalable financial products that can serve your customers anytime of the day.
        </p>
        <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
          <div className="mt-8 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
              </svg>         */}
                  <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" className="w-6 h-6 m-auto text-pink-600 dark:text-pink-400"><rect width={24} height={24} stroke="none" opacity={0} className="text-pink-600 dark:text-pink-400" fill="currentcolor"/>
            <g transform="matrix(1 0 0 1 12 12)">
                <g style={{}}>
                <g transform="matrix(1 0 0 1 0 0)">
                    <path style={{stroke: 'none', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 0 0 L 24 0 L 24 24 L 0 24 z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.24 -0.24)">
                    <path style={{stroke: '#6366f2', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12.01, -12.01)" d="M 5 7.2 C 5 5.9849735503722545 5.9849735503722545 5 7.2 5 L 8.2 5 C 8.780898749018245 4.999667853652249 9.338090005592829 4.769601786421453 9.75 4.360000000000001 L 10.45 3.66 C 10.86292975954684 3.2447430859710815 11.424381275087423 3.011257554373225 12.01 3.011257554373225 C 12.595618724912576 3.011257554373225 13.157070240453159 3.2447430859710824 13.57 3.660000000000001 L 14.27 4.36 C 14.682 4.7700000000000005 15.24 5 15.82 5 L 16.82 5 C 18.035026449627747 5 19.02 5.9849735503722545 19.02 7.199999999999999 L 19.02 8.2 C 19.02 8.78 19.25 9.338 19.66 9.75 L 20.36 10.45 C 20.77525691402892 10.86292975954684 21.008742445626773 11.424381275087422 21.008742445626773 12.01 C 21.008742445626776 12.595618724912576 20.77525691402892 13.157070240453159 20.36 13.57 L 19.66 14.27 C 19.250398213578546 14.68190999440717 19.02033214634775 15.239101250981754 19.02 15.82 L 19.02 16.82 C 19.02 18.035026449627747 18.035026449627743 19.02 16.82 19.02 L 15.82 19.02 C 15.239101250981753 19.02033214634775 14.68190999440717 19.250398213578546 14.27 19.66 L 13.57 20.36 C 13.157070240453159 20.77525691402892 12.595618724912576 21.008742445626773 12.01 21.008742445626773 C 11.424381275087423 21.008742445626773 10.86292975954684 20.77525691402892 10.45 20.36 L 9.75 19.66 C 9.33809000559283 19.250398213578546 8.780898749018245 19.02033214634775 8.199999999999998 19.02 L 7.199999999999999 19.02 C 5.9849735503722545 19.02 5 18.035026449627747 4.999999999999999 16.82 L 4.999999999999999 15.82 C 4.999667853652247 15.239101250981754 4.769601786421452 14.68190999440717 4.359999999999999 14.27 L 3.6599999999999993 13.57 C 3.244743085971081 13.157070240453159 3.0112575543732243 12.595618724912576 3.0112575543732243 12.01 C 3.0112575543732243 11.424381275087423 3.2447430859710806 10.86292975954684 3.6599999999999984 10.45 L 4.359999999999999 9.75 C 4.769601786421452 9.33809000559283 4.999667853652247 8.780898749018247 4.999999999999999 8.2 L 4.999999999999999 7.199999999999999" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path style={{stroke: '#6366f2', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 9 12 L 11 14 L 15 10" strokeLinecap="round" />
                </g>
                </g>
            </g>
            </svg>
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Make instant utilities payment</h4>
              {/* <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p> */}
            </div> 
          </div> 
          <div className="pt-4 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>                                       */}
                  <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" className="w-6 h-6 m-auto text-pink-600 dark:text-pink-400"><rect width={24} height={24} stroke="none" opacity={0} className="text-pink-600 dark:text-pink-400" fill="currentcolor"/>
            <g transform="matrix(1 0 0 1 12 12)">
                <g style={{}}>
                <g transform="matrix(1 0 0 1 0 0)">
                    <path style={{stroke: 'none', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 0 0 L 24 0 L 24 24 L 0 24 z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.24 -0.24)">
                    <path style={{stroke: '#0e9488', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12.01, -12.01)" d="M 5 7.2 C 5 5.9849735503722545 5.9849735503722545 5 7.2 5 L 8.2 5 C 8.780898749018245 4.999667853652249 9.338090005592829 4.769601786421453 9.75 4.360000000000001 L 10.45 3.66 C 10.86292975954684 3.2447430859710815 11.424381275087423 3.011257554373225 12.01 3.011257554373225 C 12.595618724912576 3.011257554373225 13.157070240453159 3.2447430859710824 13.57 3.660000000000001 L 14.27 4.36 C 14.682 4.7700000000000005 15.24 5 15.82 5 L 16.82 5 C 18.035026449627747 5 19.02 5.9849735503722545 19.02 7.199999999999999 L 19.02 8.2 C 19.02 8.78 19.25 9.338 19.66 9.75 L 20.36 10.45 C 20.77525691402892 10.86292975954684 21.008742445626773 11.424381275087422 21.008742445626773 12.01 C 21.008742445626776 12.595618724912576 20.77525691402892 13.157070240453159 20.36 13.57 L 19.66 14.27 C 19.250398213578546 14.68190999440717 19.02033214634775 15.239101250981754 19.02 15.82 L 19.02 16.82 C 19.02 18.035026449627747 18.035026449627743 19.02 16.82 19.02 L 15.82 19.02 C 15.239101250981753 19.02033214634775 14.68190999440717 19.250398213578546 14.27 19.66 L 13.57 20.36 C 13.157070240453159 20.77525691402892 12.595618724912576 21.008742445626773 12.01 21.008742445626773 C 11.424381275087423 21.008742445626773 10.86292975954684 20.77525691402892 10.45 20.36 L 9.75 19.66 C 9.33809000559283 19.250398213578546 8.780898749018245 19.02033214634775 8.199999999999998 19.02 L 7.199999999999999 19.02 C 5.9849735503722545 19.02 5 18.035026449627747 4.999999999999999 16.82 L 4.999999999999999 15.82 C 4.999667853652247 15.239101250981754 4.769601786421452 14.68190999440717 4.359999999999999 14.27 L 3.6599999999999993 13.57 C 3.244743085971081 13.157070240453159 3.0112575543732243 12.595618724912576 3.0112575543732243 12.01 C 3.0112575543732243 11.424381275087423 3.2447430859710806 10.86292975954684 3.6599999999999984 10.45 L 4.359999999999999 9.75 C 4.769601786421452 9.33809000559283 4.999667853652247 8.780898749018247 4.999999999999999 8.2 L 4.999999999999999 7.199999999999999" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path style={{stroke: '#0e9488', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 9 12 L 11 14 L 15 10" strokeLinecap="round" />
                </g>
                </g>
            </g>
            </svg>
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Send and receive money</h4>
              {/* <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p> */}
            </div> 
          </div> 
          <div className="pt-4 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full bg-pink-100 dark:bg-pink-900/20">  
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-pink-600 dark:text-pink-400">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>                                       */}
               <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" className="w-6 h-6 m-auto text-pink-600 dark:text-pink-400"><rect width={24} height={24} stroke="none" opacity={0} className="text-pink-600 dark:text-pink-400" fill="currentcolor"/>
            <g transform="matrix(1 0 0 1 12 12)">
                <g style={{}}>
                <g transform="matrix(1 0 0 1 0 0)">
                    <path style={{stroke: 'none', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 0 0 L 24 0 L 24 24 L 0 24 z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.24 -0.24)">
                    <path style={{stroke: '#db2778', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12.01, -12.01)" d="M 5 7.2 C 5 5.9849735503722545 5.9849735503722545 5 7.2 5 L 8.2 5 C 8.780898749018245 4.999667853652249 9.338090005592829 4.769601786421453 9.75 4.360000000000001 L 10.45 3.66 C 10.86292975954684 3.2447430859710815 11.424381275087423 3.011257554373225 12.01 3.011257554373225 C 12.595618724912576 3.011257554373225 13.157070240453159 3.2447430859710824 13.57 3.660000000000001 L 14.27 4.36 C 14.682 4.7700000000000005 15.24 5 15.82 5 L 16.82 5 C 18.035026449627747 5 19.02 5.9849735503722545 19.02 7.199999999999999 L 19.02 8.2 C 19.02 8.78 19.25 9.338 19.66 9.75 L 20.36 10.45 C 20.77525691402892 10.86292975954684 21.008742445626773 11.424381275087422 21.008742445626773 12.01 C 21.008742445626776 12.595618724912576 20.77525691402892 13.157070240453159 20.36 13.57 L 19.66 14.27 C 19.250398213578546 14.68190999440717 19.02033214634775 15.239101250981754 19.02 15.82 L 19.02 16.82 C 19.02 18.035026449627747 18.035026449627743 19.02 16.82 19.02 L 15.82 19.02 C 15.239101250981753 19.02033214634775 14.68190999440717 19.250398213578546 14.27 19.66 L 13.57 20.36 C 13.157070240453159 20.77525691402892 12.595618724912576 21.008742445626773 12.01 21.008742445626773 C 11.424381275087423 21.008742445626773 10.86292975954684 20.77525691402892 10.45 20.36 L 9.75 19.66 C 9.33809000559283 19.250398213578546 8.780898749018245 19.02033214634775 8.199999999999998 19.02 L 7.199999999999999 19.02 C 5.9849735503722545 19.02 5 18.035026449627747 4.999999999999999 16.82 L 4.999999999999999 15.82 C 4.999667853652247 15.239101250981754 4.769601786421452 14.68190999440717 4.359999999999999 14.27 L 3.6599999999999993 13.57 C 3.244743085971081 13.157070240453159 3.0112575543732243 12.595618724912576 3.0112575543732243 12.01 C 3.0112575543732243 11.424381275087423 3.2447430859710806 10.86292975954684 3.6599999999999984 10.45 L 4.359999999999999 9.75 C 4.769601786421452 9.33809000559283 4.999667853652247 8.780898749018247 4.999999999999999 8.2 L 4.999999999999999 7.199999999999999" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path style={{stroke: '#db2778', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 9 12 L 11 14 L 15 10" strokeLinecap="round" />
                </g>
                </g>
            </g>
            </svg>
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Pay one-time and recurring payments from your app or website</h4>
              {/* <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p> */}
            </div> 
          </div> 
          <div className="pt-4 flex gap-4 md:items-center">
            <div className="w-12 h-12 flex gap-4 rounded-full items-center justify-center bg-gray-100 dark:bg-gray-900/20">  
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto text-gray-600 dark:text-gray-400">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>                                       */}
              <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" className="w-6 h-6 m-auto text-gray-600 dark:text-gray-400"><rect width={24} height={24} stroke="none" opacity={0} />
            <g transform="matrix(1 0 0 1 12 12)">
                <g style={{}}>
                <g transform="matrix(1 0 0 1 0 0)">
                    <path style={{stroke: 'none', strokeWidth: 2, strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 0 0 L 24 0 L 24 24 L 0 24 z" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.24 -0.24)">
                    <path style={{stroke: 'rgb(0,0,0)', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12.01, -12.01)" d="M 5 7.2 C 5 5.9849735503722545 5.9849735503722545 5 7.2 5 L 8.2 5 C 8.780898749018245 4.999667853652249 9.338090005592829 4.769601786421453 9.75 4.360000000000001 L 10.45 3.66 C 10.86292975954684 3.2447430859710815 11.424381275087423 3.011257554373225 12.01 3.011257554373225 C 12.595618724912576 3.011257554373225 13.157070240453159 3.2447430859710824 13.57 3.660000000000001 L 14.27 4.36 C 14.682 4.7700000000000005 15.24 5 15.82 5 L 16.82 5 C 18.035026449627747 5 19.02 5.9849735503722545 19.02 7.199999999999999 L 19.02 8.2 C 19.02 8.78 19.25 9.338 19.66 9.75 L 20.36 10.45 C 20.77525691402892 10.86292975954684 21.008742445626773 11.424381275087422 21.008742445626773 12.01 C 21.008742445626776 12.595618724912576 20.77525691402892 13.157070240453159 20.36 13.57 L 19.66 14.27 C 19.250398213578546 14.68190999440717 19.02033214634775 15.239101250981754 19.02 15.82 L 19.02 16.82 C 19.02 18.035026449627747 18.035026449627743 19.02 16.82 19.02 L 15.82 19.02 C 15.239101250981753 19.02033214634775 14.68190999440717 19.250398213578546 14.27 19.66 L 13.57 20.36 C 13.157070240453159 20.77525691402892 12.595618724912576 21.008742445626773 12.01 21.008742445626773 C 11.424381275087423 21.008742445626773 10.86292975954684 20.77525691402892 10.45 20.36 L 9.75 19.66 C 9.33809000559283 19.250398213578546 8.780898749018245 19.02033214634775 8.199999999999998 19.02 L 7.199999999999999 19.02 C 5.9849735503722545 19.02 5 18.035026449627747 4.999999999999999 16.82 L 4.999999999999999 15.82 C 4.999667853652247 15.239101250981754 4.769601786421452 14.68190999440717 4.359999999999999 14.27 L 3.6599999999999993 13.57 C 3.244743085971081 13.157070240453159 3.0112575543732243 12.595618724912576 3.0112575543732243 12.01 C 3.0112575543732243 11.424381275087423 3.2447430859710806 10.86292975954684 3.6599999999999984 10.45 L 4.359999999999999 9.75 C 4.769601786421452 9.33809000559283 4.999667853652247 8.780898749018247 4.999999999999999 8.2 L 4.999999999999999 7.199999999999999" strokeLinecap="round" />
                </g>
                <g transform="matrix(1 0 0 1 -0.25 -0.25)">
                    <path style={{stroke: 'rgb(0,0,0)', strokeWidth: '1.5', strokeDasharray: 'none', strokeLinecap: 'round', strokeDashoffset: 0, strokeLinejoin: 'round', strokeMiterlimit: 4, fill: 'none', fillRule: 'nonzero', opacity: 1}} transform=" translate(-12, -12)" d="M 9 12 L 11 14 L 15 10" strokeLinecap="round" />
                </g>
                </g>
            </g>
            </svg>
            </div>
            <div className="w-5/6">
              <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Retrieve all your transactions and data</h4>
              {/* <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p> */}
            </div> 
          </div> 
        </div>
      </div>
    </div>
  </div>
</div>


<section className="p-6 bg-gray-800 text-gray-100" style={{marginBottom: "-80px"}}>
  <div className="container mx-auto">
    <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-primary2">Payscribe powers growth for amazing businesses</span>
    <h2 className="text-5xl font-bold text-center text-gray-50">Payscribe powers growth for amazing businesses</h2>
    <div className="grid gap-6 my-16 lg:grid-cols-3">
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">1</div>
        <p className="text-2xl font-semibold">
          <b>Savings: </b><br /><span className="text-sm">Integrate savings and credit into your product without hassles.</span>
        </p>
      </div>
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">2</div>
        <p className="text-2xl font-semibold">
          <b>Pay Utilities Bills: </b><br /><span className="text-sm">Power your product with our array of bills payment.</span>
        </p>
      </div>
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">3</div>
        <p className="text-2xl font-semibold">
          <b>Receive Payment: </b><br /><span className="text-sm">Receive payment via multiple channels in different currencies.</span>
        </p>
      </div>
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">4</div>
        <p className="text-2xl font-semibold">
          <b>Subscriptions: </b><br /><span className="text-sm">Set up recurring payments and debit your customers automatically at preferred intervals.</span>
        </p>
      </div>
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">5</div>
        <p className="text-2xl font-semibold">
          <b>Make Transfer: </b><br /><span className="text-sm">Automatically transfer money to  bank accounts with one API call.</span>
        </p>
      </div>
      <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-primary2 text-white">6</div>
        <p className="text-2xl font-semibold">
          <b>Check Authorization: </b><br /><span className="text-sm">Make certain authorization, and validations before vending.</span>
        </p>
      </div>
    </div>
  </div>
</section>

</>
  );
};

export default MidSection;
