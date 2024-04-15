//variable scope
        // let  x = 10; // integer type
        // let y = 10.55; // float, double, decimal type
        // console.log(typeof y);
        // let x = true;
        // let y = false;
        // console.log(typeof x);
        // console.log(typeof y);

        //function declaration
        // function addition (x, y, z) //parameter or argument 
        // {
        //     let value = x + y + z;
        //     return value ;
        // }

        // let myValue = addition(20,20,30);

        // console.log(myValue)
        function reset_value()
        {
            
        }
        function resetValue()
        {
            document.getElementById('first').value = '';
            document.getElementById('second').value = '';
        }
        
        function calculator(type)
        {
            let first_number = document.getElementById('first').value;
            first_number = parseInt(first_number);
            let second_number = document.getElementById('second').value;
            second_number = parseInt(second_number);

            let result;

            if (type == '+'){
                result = first_number + second_number;
            }else if (type == '-'){
                result = first_number - second_number;
            }else if (type == '*'){
                result = first_number * second_number;
            }else if (type == '/'){
                result = first_number / second_number;
            }

            document.getElementById('result').innerHTML = result;            
            return result;
        }
