interface City {
   name: string;
   main: {
      temp: number;
      temp_max: number;
      temp_min: number;
   };
   weather: {
      description: string;
      icon: string;
   };
}
export default City