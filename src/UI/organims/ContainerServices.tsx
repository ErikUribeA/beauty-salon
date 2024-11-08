'use client'
import { IServices } from "@/app/core/application/dto";
import CardS from "../molecules/common/CardS";
import Pagination from "./Pagination";
import { useState } from "react";
import { PostServiceModal } from "./newServiceForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from '@mui/joy/Button';

interface IResponse {
    data: IServices;
}

const ContainerS: React.FC<IResponse> = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col m-5 ">
            <div className="flex justify-end mb-3">
            <Button
                color="primary"
                disabled={false}
                loading={false}
                onClick={openModal}
                size="lg"
                variant="outlined"
            >
                    <IoIosAddCircleOutline className="text-[1.4em] mr-2" />
                    Add Service
                </Button>

                <PostServiceModal isOpen={isModalOpen} onClose={closeModal} />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.content.map((item) => (
                    <CardS key={item.id} data={item} />
                ))}
            </div>

            <Pagination data={data} />
        </div>
    );
};

export default ContainerS;
