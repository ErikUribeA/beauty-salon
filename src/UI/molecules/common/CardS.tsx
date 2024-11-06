import { IResponseService } from "@/app/core/application/dto";
import { Scissors } from "lucide-react"; 

interface CardProps {
    data: IResponseService;
}

const CardS: React.FC<CardProps> = ({ data }) => (
    <div className="border-[1px] border-blue-500 p-4 rounded-xl">
        <h1 className="font-bold text-[1.5em] flex items-center gap-2">
            <Scissors className="text-blue-500" /> {data.name}
        </h1>
        <p className="text-[1.2em]">{data.description}</p>
        <p className="flex font-bold text-[1.1em]" >${data.price}</p>
    </div>
);

export default CardS;
