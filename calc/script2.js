const result = document.getElementById('result');
const buttons = document.querySelectorAll(' button');
const darkModeToggle = document.getElementById('dark-mode-toggle');
let currentInput = '';
const specialChars =["%", "*", "/","-","+", "=","**"];
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
      /* if(value === "="&&value!== ""){
        currentInput=eval(currentInput.replace("%","/100"));
       }
       else */
       if (value === 'C') {
            currentInput = '';
        } 
       else if (value === 'del') {
            currentInput = currentInput.toString().slice(0, -1);
           
        }
        
     else if(currentInput === "" && specialChars.includes(value)){
        return;}
        
      /*  else if (value === '+' || value === '-' || value === '*' || value === '/'|| value === '%'||value === '**') {
            if (currentInput.endsWith('+') || currentInput.endsWith('-') || currentInput.endsWith('*') || currentInput.endsWith('/') || currentInput.endsWith('%')||currentInput.endsWith('.') || currentInput.endsWith('**') ) {
                return; // Prevent multiple consecutive operators
            }
            currentInput += value;
        }*/
         else if(value ==='.'){
            if(!currentInput.includes('.')){
                currentInput+=value;
            }
        } 
         else if (value === "=") {
            try {
                currentInput = eval(currentInput.replace("%","/100"));
            } catch (error) {
                if (error instanceof SyntaxError) {
                    alert("Syntax Error");
                    currentInput = '';
                } else if (error instanceof ReferenceError) {
                    alert("Variable Error");
                    currentInput = '';
                } else {
                    alert("Error");
                    currentInput = '';
                }
            } 
        } 
        else {
            currentInput += value;
        }
        function formatNumber(number) {
            const parts = number.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }
        
                result.value = formatNumber(currentInput);
        
        
   
    });
});

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
});