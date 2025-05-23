export const kazakhstanCities = [
  { value: 'ALA', label: 'Almaty' },
  { value: 'NQZ', label: 'Nur-Sultan (Astana)' },
  { value: 'CIT', label: 'Shymkent' },
  { value: 'KOV', label: 'Karaganda' },
  { value: 'AKT', label: 'Aktobe' },
  { value: 'KZO', label: 'Kyzylorda' }, // Added Kyzylorda
  { value: 'PWQ', label: 'Pavlodar' },
  { value: 'UKK', label: 'Oskemen (Ust-Kamenogorsk)' },
  { value: 'SEM', label: 'Semey (Semipalatinsk)' },
  { value: 'URA', label: 'Oral (Uralsk)' },
  { value: 'KOA', label: 'Kokshetau' },
];

export const fetchMockCourierServices = (requestPayload) => {
  console.log("fetchMockCourierServices received payload:", requestPayload);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Error condition: Delivery to Kyzylorda
      if (requestPayload.deliveryCity === 'Kyzylorda') {
        reject({ message: "Сервис временно недоступен для доставки в Кызылорду из этого мок-API." });
        return;
      }

      // No results condition: Pickup city is the same as delivery city
      if (requestPayload.pickupCity && requestPayload.pickupCity === requestPayload.deliveryCity) {
        resolve({
          results: [],
          metadata: {
            requestId: `mock_req_${Date.now()}`,
            timestamp: new Date().toISOString(),
            warnings: ["Pickup and delivery cities are the same."]
          }
        });
        return;
      }

      // Standard successful response
      let baseResults = [
        {
          id: "courier_001",
          companyName: "Speedy KZ Mock Courier",
          logoUrl: "/img/placeholder-logo1.png",
          priceKZT: 1500,
          estimatedDeliveryDays: 2,
          description: "Fastest delivery to major cities.",
          rating: 4.5,
          features: ["Tracked", "Express"]
        },
        {
          id: "courier_002",
          companyName: "EcoTrans Mock Logistics",
          logoUrl: "/img/placeholder-logo2.png",
          priceKZT: 1200,
          estimatedDeliveryDays: 4,
          description: "Most economical option.",
          rating: 4.0,
          features: ["Tracked"]
        },
        {
          id: "courier_003",
          companyName: "KazPost Mock Express",
          logoUrl: "/img/placeholder-logo3.png",
          priceKZT: 1800,
          estimatedDeliveryDays: 3, // Corrected typo if any was here before
          description: "Reliable nation-wide coverage.",
          rating: 4.2, // Corrected typo if any was here before
          features: ["Tracked", "Wide Coverage"]
        },
        {
          id: "courier_004",
          companyName: "Jet Mock Service",
          logoUrl: "/img/placeholder-logo4.png",
          priceKZT: 1350,
          estimatedDeliveryDays: 3,
          description: "Balanced speed and cost.",
          rating: 4.1, // Corrected typo if any was here before
          features: ["Tracked"]
        }
      ];

      let finalResults = baseResults.map(service => ({ ...service })); // Create a deep copy to modify

      // Apply surcharge if isDoorToDoor is true (either boolean or string "true")
      if (requestPayload.isDoorToDoor === true || String(requestPayload.isDoorToDoor).toLowerCase() === 'true') {
        finalResults = finalResults.map(service => ({
          ...service,
          priceKZT: service.priceKZT + 500, // Add surcharge
          description: service.description + " (Включая доставку до двери)", // Optionally update description
          features: service.features ? [...service.features, "Доставка до двери"] : ["Доставка до двери"] // Optionally update features
        }));
      }

      resolve({
        results: finalResults,
        metadata: {
          requestId: `mock_req_${Date.now()}`,
          timestamp: new Date().toISOString(),
          warnings: requestPayload.isDoorToDoor === true || String(requestPayload.isDoorToDoor).toLowerCase() === 'true' ? ["Door-to-door surcharge applied."] : []
        }
      });
    }, Math.random() * 400 + 300);
  });
};
