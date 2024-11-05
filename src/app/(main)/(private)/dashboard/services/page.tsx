import React from 'react'
import { ServicesService } from '@/app/infrastructure/services/service.service'
import Link from 'next/link'

const useServicesService = new ServicesService

export default async function ServicesPage() {
    const data = await useServicesService.findAll(1, 10)

    return (
        <div>Data
            {data.content.map((service) => (
                <div key={service.id}>
                    <h1>{service.name}</h1>
                    <h3> {service.description} </h3>
                    <h3> {service.price} </h3>
                </div>

            ))}
        <Link href="../createService" ></Link>
        </div>

    )
}