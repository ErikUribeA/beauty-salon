import React from 'react'
import TemplateService from '@/UI/template/templateService'
import { ClientsService } from '@/app/infrastructure/services/client.service'

const useClientsService = new ClientsService()

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

    const data = await useClientsService.findAll(page, size)

    return (
        <TemplateService data={data} title='Clients' />
    )
}
