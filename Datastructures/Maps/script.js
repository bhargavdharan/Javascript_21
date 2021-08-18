// Maps

// --> Focused on data storage and access
// --> can simply and improve data access compared to objects.

 const resultData = new Map();

 console.log(resultData.set('average',1.53));
 console.log(resultData.get('average'));
 console.log(resultData.set('lastResult',null));
 console.log(resultData.get('lastResult'));

 const country = {
     name: 'Germany',
     population: 82
 };

 console.log(resultData.set(country,0.89));

 for (const el of resultData) {
     console.log(el);
 }

 console.log(resultData.set('average',33.89));
 console.log(resultData.get('average'));
 console.log(resultData);

 console.log(resultData.get('average'));

 console.log(resultData.delete(country));

 console.log(resultData);

 console.log(resultData.delete('lastResult'));

 console.log(resultData);