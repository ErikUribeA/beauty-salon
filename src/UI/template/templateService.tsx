'use client'
import React, { useState } from 'react'
import ContainerS from '../organims/ContainerServices'
import { IPostService, IServices } from '@/app/core/application/dto'
import { toast } from 'react-toastify'
import { ServicesService } from '@/app/infrastructure/services/service.service'
import { useRouter } from 'next/navigation'

export interface Data {
    data: IServices,
    title: string
}

const TemplateService: React.FC<Data> = ({ data, title }) => {
    const useService = new ServicesService()
    const [, setIsLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
    const router = useRouter()

    const handlePostService = async (serviceData: IPostService) => {
        setIsLoading(true)
        try {
            await useService.create(serviceData)
            toast.success("The service was added successfully")
            setIsModalOpen(false); // Cierra el modal después de agregar el servicio
            router.refresh() // Recarga los datos desde el servidor
        } catch (error) {
            console.error(error)
            toast.error("An error occurred while adding the service")
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        setIsLoading(true)
        try {
            await useService.destroy(id)
            toast.success("The service was successfully deleted")
            router.refresh() // Recarga los datos desde el servidor
        } catch (error) {
            console.error(error)
            toast.error("An error occurred while deleting the service")
        } finally {
            setIsLoading(false)
        }
    }

    const handleEdit = async (serviceData: IPostService, id: number) => {
        setIsLoading(true)
        try {
            await useService.save(serviceData, id)
            toast.success("The service was added successfully")
            setIsModalOpen(false); 
            router.refresh() 
        } catch (error) {
            console.error(error)
            toast.error("An error occurred while adding the service")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full'>
            <h1 className='font-bold text-[3em] text-center'>{title}</h1>
            <ContainerS
                data={data}
                onSubmit={handlePostService}
                onDelete={handleDelete}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onEdit={handleEdit}
            />

        </div>
    )
}

export default TemplateService
