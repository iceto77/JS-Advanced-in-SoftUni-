function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestAverageSalary =0;
      let bestRestorant ='';
      let currentAverageSalary =0;
      let totalSalary =0;
      let output = {};
      for (let line of input) {
         let info = line.split(' - ');
         let restorantName = info.shift();
         let workers = info[0].split(', ');
         for (let worker of workers) {
            let [name, salary] = worker.split(' ');
            if(!output.hasOwnProperty(restorantName)){
               output[restorantName] = {};
            }
            output[restorantName][name] = Number(salary);
         }
      }
      let entries = Object.entries(output);
      for (let entry of entries) {
         let key = entry[0];
         let values = Object.values(entry[1]);
         for(let salary of values){
            totalSalary += salary;
         }
         currentAverageSalary = totalSalary / values.length;
         if(currentAverageSalary > bestAverageSalary){
            bestAverageSalary = currentAverageSalary;
            bestRestorant = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestRestorant]).sort((a,b) => b[1] - a[1]);
      let print = '';
      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestorant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}