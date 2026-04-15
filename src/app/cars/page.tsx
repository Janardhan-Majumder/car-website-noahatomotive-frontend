import { Car } from '../../types';

const cars: Car[] = [
  { id: '1', name: 'Tesla Model S', price: 79999, description: 'Electric luxury sedan', image: '/tesla.jpg' },
  { id: '2', name: 'BMW X5', price: 60000, description: 'SUV with premium features', image: '/bmw.jpg' },
  // Add more cars as needed
];

export default function CarsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map(car => (
          <div key={car.id} className="border p-4 rounded shadow">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p className="text-gray-600">{car.description}</p>
            <p className="text-lg font-bold">${car.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}