import React, { useState, useEffect } from "react";
import { tabs } from "../../listData/homepage";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

const Section2 = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    const tab = tabs;
    let count = 0;
    setInterval(() => {
      if (count === 3) {
        count = 0;
      }
      count = count + 1;
      setSelectedTab(tab[count - 1]);
    }, 2000);
  }, []);
  return (
    <section className="my-[7rem]">
      <div className="mb-[5rem]">
        <h1 className="text-4xl xxs:text-5xl font-bold">HEADER SECTION</h1>
        <p className="text-secondary1">section sub heading</p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-[80%] mx-auto sm:w-[50%]  ">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.header : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? (
                <div className="w-full md:w-[25rem] lg:w-[30rem]">
                  {selectedTab.label}
                </div>
              ) : (
                ""
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="w-full sm:w-[50%]">
          <ul>
            {tabs.map((item, key) => (
              <li
                key={item.header}
                className={item.header === selectedTab.header ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                <div className="my-10 ">
                  <h1
                    style={{
                      color:
                        item.header === selectedTab.header
                          ? item.color
                          : "black",
                    }}
                    className="my-1 cursor-pointer font-bold text-2xl h-[30px]"
                  >
                    {item.header}
                  </h1>
                  <div
                    className="  mb-4 h-[4px] transition-all"
                    style={{
                      width: item.header === selectedTab.header ? "4rem" : "0",
                      backgroundColor: item.color,
                    }}
                  ></div>
                  <h1 className="text-secondary1">{item.body}</h1>
                </div>
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section2;
