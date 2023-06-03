import React from 'react'


type Props = {};


const Loader = (props: Props ) => {
    return (
        <div className='mx-auto max-w-screen-xl px-8 py-6 flex flex-wrap'>
            <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                <div className="relative space-y-5 overflow-hidden rounded-2xl bg-black/5 p-4 shadow-xl shadow-white/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-black/10 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent">
                    <div className="h-24 rounded-lg bg-black/5"></div>
                    <div className="space-y-3">
                        <div className="h-3 w-3/5 rounded-lg bg-black/5"></div>
                        <div className="h-3 w-4/5 rounded-lg bg-black/10"></div>
                        <div className="h-3 w-2/5 rounded-lg bg-black/5"></div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                <div className="relative space-y-5 overflow-hidden rounded-2xl bg-black/5 p-4 shadow-xl shadow-white/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-black/10 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent">
                    <div className="h-24 rounded-lg bg-black/5"></div>
                    <div className="space-y-3">
                        <div className="h-3 w-3/5 rounded-lg bg-black/5"></div>
                        <div className="h-3 w-4/5 rounded-lg bg-black/10"></div>
                        <div className="h-3 w-2/5 rounded-lg bg-black/5"></div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                <div className="relative space-y-5 overflow-hidden rounded-2xl bg-black/5 p-4 shadow-xl shadow-white/5 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-[shimmer_2s_infinite] before:border-t before:border-black/10 before:bg-gradient-to-r before:from-transparent before:via-black/10 before:to-transparent">
                    <div className="h-24 rounded-lg bg-black/5"></div>
                    <div className="space-y-3">
                        <div className="h-3 w-3/5 rounded-lg bg-black/5"></div>
                        <div className="h-3 w-4/5 rounded-lg bg-black/10"></div>
                        <div className="h-3 w-2/5 rounded-lg bg-black/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;