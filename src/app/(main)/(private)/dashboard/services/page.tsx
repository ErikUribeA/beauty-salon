import React from 'react'
import { ServicesService } from '@/app/infrastructure/services/service.service'
import ContainerS from '@/UI/organims/ContainerServices'

const useServicesService = new ServicesService()

interface IProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    }
}

export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? '1'
    return {
        title: `Services - Página ${page}`,
        description: 'Service of beauty-salon'
    }
}

export default async function ServicesPage({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page) : 1
    const size = searchParams.size ? parseInt(searchParams.size) : 9

    const data = await useServicesService.findAll(page, size)

    return (
        <div className='w-full'>
            <h1 className='font-bold text-[3em] text-center'>Services</h1>
            <ContainerS data={data} />
        </div>
    )
}
