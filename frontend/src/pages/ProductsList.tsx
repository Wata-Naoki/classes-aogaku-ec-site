import { useParams } from 'react-router-dom';
import { Cards } from '../components/ui/cards/Cards';
import { facultyData } from '../Data/facultyData';

export const ProductsList = () => {
  const { faculty } = useParams();
  // findでfacultyIdと一致するものを探す
  const products = facultyData.find((product) => product.facultyId === faculty);

  return (
    <div>
      <div>
        <Cards products={products} />
      </div>
    </div>
  );
};
