import React from 'react';

interface Props {
    items: any[];
}



const VerticalItems = (props: Props) => {
    return (
        <ul className="sm:mt-[4rem] mt-6 pl-[3rem] sm:pl-[1.1rem]">
            {props.items.map((item, index) => {
                return (
                    <li key={index} className="relative flex items-baseline gap-2 pb-5">
                        <div className={`before:absolute 
                            before:left-[5.5px] before:h-full 
                            before:w-[1px] 
                            timeline2 ${props.items.length - 1 === index ? 'before:bg-gray-40' : 'before:bg-gray-400'}`}>
                            <div className="icon">
                                <div>
                                    {item?.icon ?? index +1}
                                    {/* {index + 1} */}
                                </div>
                            </div>
                        </div>
                        <div style={{alignSelf: "center"}}>
                            {item?.title && <h4 className='pb-2 font-bold text-lg '>{item.title}</h4>}
                            <p className="mt-0 mb-5 text-gray-600 text-md pr-5"
                                dangerouslySetInnerHTML={{ __html: item.content}}
                            >
                            </p>
                        </div>
                    </li>
                )
            })}
        </ul>
  );
};

export default VerticalItems;
