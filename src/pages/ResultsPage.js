import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMockCourierServices } from '../services/mockCourierApi';
import Results from '../components/Results/Results'; // Assuming Results.js is in components folder
import Container from 'react-bootstrap/Container';

function ResultsPage() {
  const [searchParams] = useSearchParams();
  const [resultsData, setResultsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);
      setResultsData(null); // Clear previous results before fetching new ones

      try {
        // Construct payload from searchParams
        const payload = {
          pickupCity: searchParams.get('from'),
          deliveryCity: searchParams.get('to'),
          parcel: {
            weightKg: parseFloat(searchParams.get('weight')),
            quantity: parseInt(searchParams.get('quantity'), 10),
            widthCm: parseFloat(searchParams.get('width')),
            heightCm: parseFloat(searchParams.get('height')),
            lengthCm: parseFloat(searchParams.get('length')),
          },
          deliveryType: searchParams.get('deliveryType') || 'parcel', // Default if not provided
          isDoorToDoor: searchParams.get('isDoorToDoor') === 'true', // Convert string to boolean
        };

        // Basic validation: ensure required city params are present
        if (!payload.pickupCity || !payload.deliveryCity) {
            setError("Города отправления и назначения должны быть указаны.");
            setIsLoading(false);
            // setResultsData(null); // Already cleared
            return;
        }
        
        // Further validation for parcel details if deliveryType is 'parcel'
        // Ensure that if any parcel dimension/weight is provided, it's a valid number
        if (payload.deliveryType === 'parcel') {
            const p = payload.parcel;
            // Check if any of the essential parcel string params are NaN after parsing
            if (isNaN(p.weightKg) || isNaN(p.quantity) || isNaN(p.widthCm) || isNaN(p.heightCm) || isNaN(p.lengthCm)) {
                 // Check specifically if the original string values were non-empty before deciding it's an error
                 // This allows omitting them if the API can handle it (though our mock currently doesn't for parcels)
                 if (searchParams.get('weight') || searchParams.get('quantity') || searchParams.get('width') || searchParams.get('height') || searchParams.get('length')) {
                    setError("Для типа 'посылка' все параметры (вес, кол-во, размеры) должны быть корректно указаны числовыми значениями.");
                    setIsLoading(false);
                    return;
                 }
            }
        }


        const data = await fetchMockCourierServices(payload);
        setResultsData(data);
      } catch (err) {
        setError(err.message || 'Произошла ошибка при загрузке результатов.');
        // setResultsData(null); // Already cleared
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]); // Re-run effect if searchParams change

  return (
    <Container className="mt-3">
      {/* Optional: Add a title or other elements specific to the ResultsPage itself */}
      {/* e.g., <h2 className="mb-3">Результаты поиска</h2> */}
      <Results courierData={resultsData} isLoading={isLoading} error={error} />
    </Container>
  );
}

export default ResultsPage;
