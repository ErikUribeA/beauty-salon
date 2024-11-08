'use client'
import { IPostService, IServices } from "@/app/core/application/dto";
import CardS from "../molecules/common/CardS";
import Pagination from "../molecules/common/Pagination";
import { useState } from "react";
import { PostServiceModal } from "../molecules/common/newServiceForm";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from '@mui/joy/Button';

interface IResponse {
    data: IServices;
    onEdit: (data: IPostService, id: number) => void;
    onDelete: (id: number) => void;
    onSubmit: (data: IPostService) => Promise<void>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContainerS: React.FC<IResponse> = ({ data, onEdit, onDelete, onSubmit, isModalOpen, setIsModalOpen }) => {
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [selectedService, setSelectedService] = useState<IPostService | null>(null); // Para almacenar el servicio seleccionado

    const handleOpenModal = (mode: 'add' | 'edit', id?: number) => {
        setModalMode(mode);
        if (id) {
            const service = data.content.find(item => item.id === id); // Busca el servicio con ese id
            if (service) {
                setSelectedService(service); // Almacena el servicio seleccionado
            }
            setSelectedId(id);
        } else {
            setSelectedService(null); // Si es el modo 'add', no hay servicio seleccionado
        }
        setIsModalOpen(true); // Abre el modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Cierra el modal
        setSelectedId(null);
        setSelectedService(null); // Limpia el servicio seleccionado
    };

    const handleSubmit = (data: IPostService) => {
        if (modalMode === 'add') {
            onSubmit(data); // Llama a onSubmit cuando se agrega el servicio
        } else if (modalMode === 'edit' && selectedId !== null) {
            onEdit(data, selectedId); // Llama a onEdit cuando se edita un servicio
        }
    }

    return (
        <div className="flex flex-col m-5">
            <div className="flex justify-end mb-3">
                <Button
                    color="primary"
                    onClick={() => handleOpenModal('add')}
                    size="lg"
                    variant="outlined"
                >
                    <IoIosAddCircleOutline className="text-[1.4em] mr-2" />
                    Add Service
                </Button>

                {/* Modal para agregar/editar servicio */}
                <PostServiceModal 
                    isOpen={isModalOpen} 
                    onClose={handleCloseModal} 
                    onSubmit={handleSubmit} 
                    initialData={selectedService} // Pasamos el servicio seleccionado si existe
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.content.map((item) => (
                    <CardS key={item.id} data={item} onEdit={() => handleOpenModal('edit', item.id)}  onDelete={onDelete} />
                ))}
            </div>

            <Pagination data={data} />
        </div>
    );
};


export default ContainerS;
