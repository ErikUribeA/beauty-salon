import { IServices } from "@/app/core/application/dto";
import CardS from "../molecules/common/CardS";
import Pagination from "./Pagination";

interface IResponse {
    data: IServices;
}

const ContainerS: React.FC<IResponse> = ({ data }) => {
    return (
        <div className="flex flex-col m-5 ">
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
