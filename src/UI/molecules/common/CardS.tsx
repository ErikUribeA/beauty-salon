import { IResponseService } from "@/app/core/application/dto";
import { Edit, Scissors, Trash2 } from "lucide-react";
import Button from '@mui/joy/Button';

interface CardProps {
    data: IResponseService;
    onEdit: () => void;
    onDelete: () => void;
}

const CardS: React.FC<CardProps> = ({ data, onEdit, onDelete }) => (
    <div className="bg-white border border-blue-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="p-6">
            <h1 className="font-bold text-2xl flex items-center gap-2 mb-3 ">
                <Scissors className="text-blue-500" /> {data.name}
            </h1>
            <p className="text-gray-600 mb-4">{data.description}</p>
            <p className="text-xl font-semibold ">${data.price.toFixed(2)}</p>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end items-center gap-3 border-t border-blue-100">
            <Button
                color="primary"
                disabled={false}
                loading={false}
                onClick={onEdit}
                size="md"
                variant="outlined"
            >
                <Edit className="w-4 h-4 mr-2" />
                Edit
            </Button>
            <Button
                color="danger"
                disabled={false}
                loading={false}
                onClick={onDelete}
                size="md"
                variant="outlined"
            >
                <Trash2 className="w-4 h-4 mr-2" />
                Edit
            </Button>
        </div>
    </div>
);

export default CardS;