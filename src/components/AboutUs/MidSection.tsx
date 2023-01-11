import React from "react";
import HeroImg from "../../assets/rewards/hero.png";
import Button from "../Button";
import bg from '../../assets/rewards/light-curve.png'
import Phone from '../../assets/contact-us/home_2.png'

type Props = {};

const MidSection = (props: Props) => {
  return (
<main>
    <section className="bg-gray-900 py-15 sm:py-10">
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                <h2 className="text-3xl font-medium tracking-tight text-white">Every feature you need to win. Try it for yourself.</h2>
                <p className="mt-2 text-lg text-gray-400">Pocket was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Pocket has it.</p>
            </div>
        </div> */}
        <div className="mt-16 md:hidden">
            <div className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden">
                <div className="w-full flex-none snap-center px-4 sm:px-6">
                    <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 558 558" width={558} height={558} fill="none" aria-hidden="true"><defs><linearGradient id=":rp:" x1={79} y1={16} x2={105} y2={237} gradientUnits="userSpaceOnUse"><stop stopColor="#13B5C8" /><stop offset={1} stopColor="#13B5C8" stopOpacity={0} /></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" /><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:rp:)" strokeLinecap="round" /></svg></div>
                        <div className="relative relative  aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                            <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
                          <svg viewBox="0 0 366 750" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"><path fill="#F2F2F2" fillRule="evenodd" clipRule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z" /><rect x={154} y={29} width={56} height={5} rx="2.5" fill="#D4D4D4" /></svg><img
                                alt="" src={Phone} width={366} height={200} decoding="async" data-nimg={1} className="pointer-events-none absolute inset-0 h-full w-full" loading="lazy" style={{color: 'transparent'}}
                            /></div>
                        <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-10 w-10">
                       
                       <circle cx={12} cy={12} r={12} fill="#A3A3A3" fillOpacity="0.2" />
                       <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                   <rect x="0" y="0" width={30} height={30}/>
                   <path d="M19,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L19,13 C18.4477153,13 18,12.5522847 18,12 C18,11.4477153 18.4477153,11 19,11 Z M3,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 Z M12,2 C12.5522847,2 13,2.44771525 13,3 L13,5 C13,5.55228475 12.5522847,6 12,6 C11.4477153,6 11,5.55228475 11,5 L11,3 C11,2.44771525 11.4477153,2 12,2 Z M12,18 C12.5522847,18 13,18.4477153 13,19 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11,19 C11,18.4477153 11.4477153,18 12,18 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                   <circle fill="#737373" cx="12" cy="12" r="3"/>
               </g>
               </svg>                            <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">Our Mission</h3>
                            <p className="mt-2 text-sm text-gray-400">We're on a mission to help Africans get access to financial services wth no stress.
At Payscribe, we strongly believe that your money should come with your own rules, enabling insant and true financial freedom not just for business owners but for everyone</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-none snap-center px-4 sm:px-6">
                    <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 558 558" width={558} height={558} fill="none" aria-hidden="true" className="rotate-180"><defs><linearGradient id=":rq:" x1={79} y1={16} x2={105} y2={237} gradientUnits="userSpaceOnUse"><stop stopColor="#13B5C8" /><stop offset={1} stopColor="#13B5C8" stopOpacity={0} /></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" /><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:rq:)" strokeLinecap="round" /></svg></div>
                        <div className="relative relative  aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                            <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
                          <svg viewBox="0 0 366 750" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"><path fill="#F2F2F2" fillRule="evenodd" clipRule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z" /><rect x={154} y={29} width={56} height={5} rx="2.5" fill="#D4D4D4" /></svg><img
                                alt="" src={Phone} width={366} height={200} decoding="async" data-nimg={1} className="pointer-events-none absolute inset-0 h-full w-full" loading="lazy" style={{color: 'transparent'}}
                            /></div>
                        <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                                <circle cx={11} cy={11} r={10} fill="#A3A3A3" fillOpacity="0.2" />
                                {/* <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#A3A3A3" /> */}
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="35" height="35"/>
                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#737373" fill-rule="nonzero" opacity="0.3"/>
                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#737373" fill-rule="nonzero"/>
                                    <path d="M10.5,10.5 L10.5,9.5 C10.5,9.22385763 10.7238576,9 11,9 C11.2761424,9 11.5,9.22385763 11.5,9.5 L11.5,10.5 L12.5,10.5 C12.7761424,10.5 13,10.7238576 13,11 C13,11.2761424 12.7761424,11.5 12.5,11.5 L11.5,11.5 L11.5,12.5 C11.5,12.7761424 11.2761424,13 11,13 C10.7238576,13 10.5,12.7761424 10.5,12.5 L10.5,11.5 L9.5,11.5 C9.22385763,11.5 9,11.2761424 9,11 C9,10.7238576 9.22385763,10.5 9.5,10.5 L10.5,10.5 Z" fill="#737373" opacity="0.3"/>
                                </g>
                                {/* <path d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z" fill="#737373" /> */}
                                </svg>                            <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">Our Vision</h3>
                            <p className="mt-2 text-sm text-gray-400">Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-none snap-center px-4 sm:px-6">
                    <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 558 558" width={558} height={558} fill="none" aria-hidden="true"><defs><linearGradient id=":rr:" x1={79} y1={16} x2={105} y2={237} gradientUnits="userSpaceOnUse"><stop stopColor="#13B5C8" /><stop offset={1} stopColor="#13B5C8" stopOpacity={0} /></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" /><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:rr:)" strokeLinecap="round" /></svg></div>
                        <div className="relative relative  aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                            <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
                          <svg viewBox="0 0 366 750" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"><path fill="#F2F2F2" fillRule="evenodd" clipRule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z" /><rect x={154} y={29} width={56} height={5} rx="2.5" fill="#D4D4D4" /></svg><img
                                alt="" src={Phone} width={366} height={200} decoding="async" data-nimg={1} className="pointer-events-none absolute inset-0 h-full w-full" loading="lazy" style={{color: 'transparent'}}
                            /></div>
                        <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><defs><linearGradient id=":rs:-gradient" x1={14} y1="14.5" x2={7} y2={17} gradientUnits="userSpaceOnUse"><stop stopColor="#737373" /><stop offset={1} stopColor="#D4D4D4" stopOpacity={0} /></linearGradient></defs><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /><path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z" fill="#A3A3A3" /><path d="M7 22c0-4.694 3.5-8 8-8" stroke="url(#:rs:-gradient)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z" fill="#A3A3A3" /></svg>
                            <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">Why We Do This</h3>
                            <p className="mt-2 text-sm text-gray-400">We believe that financial empowerment is a key factor in improving people's lives and enabling them to achieve their full potential. By providing access to financial services and helping people to manage their money effectively, we hope to empower individuals in Africa to take control of their financial future and build a better life for themselves and their familie</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center gap-3"><button type="button" className="relative h-0.5 w-4 rounded-full bg-gray-500" aria-label="Go to slide 1"><span className="absolute -inset-x-1.5 -inset-y-3" /></button><button type="button" className="relative h-0.5 w-4 rounded-full bg-gray-500"
                    aria-label="Go to slide 2"><span className="absolute -inset-x-1.5 -inset-y-3" /></button><button type="button" className="relative h-0.5 w-4 rounded-full bg-gray-500" aria-label="Go to slide 3"><span className="absolute -inset-x-1.5 -inset-y-3" /></button></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-0 md:block">
            <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
                <div className="relative z-10 order-last col-span-6 space-y-6" role="tablist" aria-orientation="vertical">
                    <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                        <div className="absolute inset-0 bg-gray800" data-projection-id={12} style={{borderRadius: '16px', opacity: 1}} />
                        <div className="relative z-10 p-8">
                            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-10 w-10">
                       
                                <circle cx={12} cy={12} r={12} fill="#A3A3A3" fillOpacity="0.2" />
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width={30} height={30}/>
                            <path d="M19,11 L21,11 C21.5522847,11 22,11.4477153 22,12 C22,12.5522847 21.5522847,13 21,13 L19,13 C18.4477153,13 18,12.5522847 18,12 C18,11.4477153 18.4477153,11 19,11 Z M3,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L3,13 C2.44771525,13 2,12.5522847 2,12 C2,11.4477153 2.44771525,11 3,11 Z M12,2 C12.5522847,2 13,2.44771525 13,3 L13,5 C13,5.55228475 12.5522847,6 12,6 C11.4477153,6 11,5.55228475 11,5 L11,3 C11,2.44771525 11.4477153,2 12,2 Z M12,18 C12.5522847,18 13,18.4477153 13,19 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11,19 C11,18.4477153 11.4477153,18 12,18 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                            <circle fill="#737373" cx="12" cy="12" r="3"/>
                        </g>
                        </svg>
                            <h3 className="mt-6 text-lg font-semibold text-white"><button className="text-left [&:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:rt:" role="tab" type="button" aria-selected="true" tabIndex={0} data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:r12:"><span className="absolute inset-0 rounded-2xl" />Our Mission</button></h3>
                            <p className="mt-2 text-sm text-gray-400">We're on a mission to help Africans get access to financial services wth no stress.
At Payscribe, we strongly believe that your money should come with your own rules, enabling insant and true financial freedom not just for business owners but for everyone</p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                        <div className="relative z-10 p-8">
                            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                                <circle cx={11} cy={11} r={10} fill="#A3A3A3" fillOpacity="0.2" />
                                {/* <path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#A3A3A3" /> */}
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="35" height="35"/>
                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#737373" fill-rule="nonzero" opacity="0.3"/>
                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#737373" fill-rule="nonzero"/>
                                    <path d="M10.5,10.5 L10.5,9.5 C10.5,9.22385763 10.7238576,9 11,9 C11.2761424,9 11.5,9.22385763 11.5,9.5 L11.5,10.5 L12.5,10.5 C12.7761424,10.5 13,10.7238576 13,11 C13,11.2761424 12.7761424,11.5 12.5,11.5 L11.5,11.5 L11.5,12.5 C11.5,12.7761424 11.2761424,13 11,13 C10.7238576,13 10.5,12.7761424 10.5,12.5 L10.5,11.5 L9.5,11.5 C9.22385763,11.5 9,11.2761424 9,11 C9,10.7238576 9.22385763,10.5 9.5,10.5 L10.5,10.5 Z" fill="#737373" opacity="0.3"/>
                                </g>
                                {/* <path d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z" fill="#737373" /> */}
                                </svg>
                            <h3 className="mt-6 text-lg font-semibold text-white"><button className="text-left [&:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:ru:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state><span className="absolute inset-0 rounded-2xl" />Our Vision</button></h3>
                            <p className="mt-2 text-sm text-gray-400">Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.</p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                        <div className="relative z-10 p-8"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><defs><linearGradient id=":rv:-gradient" x1={14} y1="14.5" x2={7} y2={17} gradientUnits="userSpaceOnUse"><stop stopColor="#737373" /><stop offset={1} stopColor="#D4D4D4" stopOpacity={0} /></linearGradient></defs><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /><path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z" fill="#A3A3A3" /><path d="M7 22c0-4.694 3.5-8 8-8" stroke="url(#:rv:-gradient)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z" fill="#A3A3A3" /></svg>
                            <h3 className="mt-6 text-lg font-semibold text-white"><button className="text-left [&:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:r10:" role="tab" type="button" aria-selected="false" tabIndex={-1} data-headlessui-state><span className="absolute inset-0 rounded-2xl" />Why we do this</button></h3>
                            <p className="mt-2 text-sm text-gray-400">We believe that financial empowerment is a key factor in improving people's lives and enabling them to achieve their full potential. By providing access to financial services and helping people to manage their money effectively, we hope to empower individuals in Africa to take control of their financial future and build a better life for themselves and their families.</p>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-6">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><svg viewBox="0 0 558 558" width={558} height={558} fill="none" aria-hidden="true" className="animate-spin-slower"><defs><linearGradient id=":r11:" x1={79} y1={16} x2={105} y2={237} gradientUnits="userSpaceOnUse"><stop stopColor="#13B5C8" /><stop offset={1} stopColor="#13B5C8" stopOpacity={0} /></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#13B5C8" /><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:r11:)" strokeLinecap="round" /></svg></div>
                    <div className="relative aspect-[366/729] z-10 mx-auto w-full max-w-[366px]">
                        <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
                        <svg viewBox="0 0 366 750" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"><path fill="#F2F2F2" fillRule="evenodd" clipRule="evenodd" d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z" /><rect x={154} y={29} width={56} height={5} rx="2.5" fill="#D4D4D4" /></svg><img
                            alt="" src={Phone} width={366} height={729} decoding="async" data-nimg={1} className="pointer-events-none absolute inset-0 h-full w-full" loading="lazy" style={{color: 'transparent'}} /></div>
                </div>
            </div>
        </div>
    </section>
    <section className="pt-[4rem] sm:pt-[5rem]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-medium tracking-tight text-gray-900">Our Core Values</h2>
                {/* <p className="mt-2 text-lg text-gray-600">With typical market returns, you have to start young to secure your future. With Pocket, it’s never too late to build your nest egg.</p> */}
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><path d="M12 25l8-8m0 0h-6m6 0v6" stroke="#171717" strokeWidth={2} strokeLinecap="round" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Inclusivity</h3>
                    <p className="mt-2 text-gray-700">We believe that everyone should have access to financial services and the ability to manage their money effectively, regardless of their background or circumstances. We are committed to building technology that is accessible and easy to use for everyone.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z" fill="url(#:r13:-gradient)" /><rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /><defs><linearGradient id=":r13:-gradient" x1={16} y1={12} x2={16} y2={28} gradientUnits="userSpaceOnUse"><stop stopColor="#737373" /><stop offset={1} stopColor="#737373" stopOpacity={0} /></linearGradient></defs></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Customer focus</h3>
                    <p className="mt-2 text-gray-700">Our customers are at the heart of everything we do, and we are dedicated to delivering the best possible products and services to meet their needs and exceed their expectations.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /><path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z" fill="#171717" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Collaboration</h3>
                    <p className="mt-2 text-gray-700">We believe that great things can be achieved through teamwork and collaboration, and we encourage open communication and mutual support within our organization and with our partners.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><circle cx={11} cy={14} r={2} fill="#171717" /><circle cx={11} cy={20} r={2} fill="#171717" /><circle cx={11} cy={26} r={2} fill="#171717" /><path d="M16 14h6M16 20h6M16 26h6" stroke="#737373" strokeWidth={2} strokeLinecap="square" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Excellence</h3>
                    <p className="mt-2 text-gray-700">We strive for excellence in everything we do, from the quality of our products and services to the way we conduct ourselves as an organization. We are committed to continuous learning and improvement, and we aim to be the best in our field.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8"><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /><path fillRule="evenodd" clipRule="evenodd" d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z" fill="#171717" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Empowerment</h3>
                    <p className="mt-2 text-gray-700">We believe that financial empowerment is a key factor in improving people's lives and enabling them to achieve their full potential. We are committed to providing individuals with the tools and resources they need to take control of their financial future and build a better life for themselves and their families.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z" fill="#171717" /><path d="M10 12h12" stroke="#737373" strokeWidth={2} strokeLinecap="square" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Innovation</h3>
                    <p className="mt-2 text-gray-700">We are committed to continuously pushing the boundaries of what is possible and finding new and innovative ways to solve problems and meet the needs of our customers.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8 mx-auto"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z" fill="#171717" /><path d="M10 12h12" stroke="#737373" strokeWidth={2} strokeLinecap="square" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Responsibility</h3>
                    <p className="mt-2 text-gray-700">We recognize that our work has the potential to make a positive impact on the lives of people in Africa, and we are committed to operating in a responsible and ethical manner.</p>
                </li>
                <li className="rounded-2xl border border-gray-200 p-8 mx-auto"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8"><path fillRule="evenodd" clipRule="evenodd" d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z" fill="#737373" /><path fillRule="evenodd" clipRule="evenodd" d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z" fill="#171717" /><path d="M10 12h12" stroke="#737373" strokeWidth={2} strokeLinecap="square" /><circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity="0.2" /></svg>
                    <h3 className="mt-6 font-semibold text-gray-900">Social Responsibility</h3>
                    <p className="mt-2 text-gray-700">We recognize that our work has the potential to make a positive impact on the lives of people in Africa, and we are committed to operating in a responsible and ethical manner.</p>
                </li>
            </ul>
        </div>
    </section>
   

</main>
  );
};

export default MidSection;
