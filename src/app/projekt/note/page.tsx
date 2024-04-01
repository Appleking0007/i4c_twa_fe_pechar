"use client"
import {FC, useRef, useState} from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Page: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

const Note: React.FC = () => {
    const [noteData, setNoteData] = useState<null | { title: string; content: any[] }>(null);
    useEffect(() => {
        fetch('/api/notes/note')
            .then(response => response.json())
            .then(data => setNoteData(data));
    }, []);
    
    return (
        {noteData && (
                            <>
                                <div className='flex items-start gap-[10px] self-stretch pt-9 pb-2'>
                                    <p className='text-[30px] font-semibold'>{noteData.title}</p>
                                </div>
                                {noteData.content.map((item, index) => (
                                    typeof item === 'string' ? (
                                        <div key={index} className='flex items-start gap-[10px] self-stretch flex-col py-1'>
                                            <p className='text-normal font-normal leading-6'>{item}</p>
                                        </div>
                                    ) : (
                                        <div key={index} className='flex items-start gap-[10px] self-stretch flex-col'>
                                            <ul className='list-disc list-inside leading-6'>
                                            {item.items.map((listItem: string, listItemIndex: number) => (
                                                    <li key={listItemIndex}>{listItem}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                ))}
                            </>
                        )}
    
        <div className="flex flex-row">

            <div className="flex flex-col pt-[10px] pb-[10px] border-r-[2px] border-[#F5F5F4]">
                <div className="w-[82px] h-[224px] flex flex-col justify-evenly">
                    <button className="h-[64px]"> <FontAwesomeIcon className="h-[24px] w-[27px] text-[#37352F]" icon={faHouse} /></button>
                    <button className="h-[64px] bg-[#F1F1F0]"> <FontAwesomeIcon className="text-[#000000] h-[24px] w-[21px]" icon={faBook} /> </button>
                    <button className="h-[64px]"> <FontAwesomeIcon className="text-[#37352F] h-[24px] w-[22,63px]" icon={faGear} /></button>
                 </div>

                <div className="">
                    <button className="h-[64px] w-[82px]"> <FontAwesomeIcon className="text-[#37352F] h-[24px] w-[25,99px]" icon={faAnglesLeft} /> </button>
                </div>
            </div>


            <div className="bg-[#FBFBFA] border-[#EDEDF0] border-r-[3px] w-[192px]">
                <button className="pt-[24px] pb-[24px] w-[192px] h-[28px]"></button>
                <button className="pt-[24px] pb-[24px] w-[192px] h-[28px]"></button>
                <button className="pt-[24px] pb-[24px] w-[192px] h-[28px]"></button>
            </div>

            <div className="flex flex-col">
                <div className="border-b- flex flex-row border-[#F5F5F4] justify-between pt-[12px] pl-[36px] pr-[12px] pb-[36px] w-[1646px]">
                    <h1 className="font-[600] text-[14px] leading-[16,94px] text-[#191711]">I4 HS</h1>
                    <div className="justify-between">
                    <button className=""><FontAwesomeIcon className="pr-2" icon={faPrint} /></button>
                    <button className=""><FontAwesomeIcon className="" icon={faLink} /></button>
                    </div>
                </div>


                <div className="flex flex-col w-[708px] h-[911px] ">
                <h1 className="font-[700] w-[708px]  border-b-[1px] border-[#EDEDF0] pt-[12px] pb-[12px] text-[40px] leading-[48,41px] text-[#000000]">I4 HS</h1>
                <h1 className="font-[600] w-[708px]  pt-[36px] pb-[8px] text-[30px] leading-[36,31px] text-[#37352F]">Dynamický routing</h1>
                <h1 className="font-[400] w-[708px]  pt-[4px] pb-[4px] text-[16px] leading-[24px] text-[#37352F]">Dynamický routing nám zajišťuje routovací infrastrukturu, do které nemusíme zasahovat. Nemusíme psát routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen nastavit.</h1>

                <ul className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]"> Kromě funkcí routingu nám DRP poskytují:
                    <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Škálovatelnost</li>
                    <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Rychlou konvergenci</li>
                    <li className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Dostupnost</li>
                </ul>

                <h1 className="font-[600] w-[708px]  pt-[36px] pb-[8px] text-[30px] leading-[36,31px] text-[#37352F]">Charekteristika DRP</h1>
                <div>
                    <h1 className="font-[400] w-[708px]  pt-[4px] pb-[4px] leading-[24px] text-[16px] text-[#37352F]"> O každém dynamickém routovacím protokolu můžeme říct, že má minimálně:</h1>
                </div>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Algoritmus</p>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Metriku</p>
                    <p className="w-[708px] pt-[4px] pb-[4px] font-[400] leading-[24px] text-[16px] text-[#37352F]">• Zprávy daného protokolu</p>
            </div>

            </div>



        </div>
    );
}

export default Page;
