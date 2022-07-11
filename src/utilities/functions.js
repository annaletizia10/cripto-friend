//Capitalizes the first letter of the string and transforms the rest to lower case

function capitalize(s){
        return s[0].toUpperCase() + s.slice(1).toLowerCase();
    }
    
//Validation logic for the form inputs
    
function validate(values){
        const errors = {}
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const phoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
        if(!values.firstName.trim()){
            errors.firstName = "First name is required"
        }
        if(!values.lastName.trim()){
            errors.lastName = "Last name is required"
        }
        if(!values.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email = "Email is invalid"
        }
        if(!values.phone){
            errors.phone = "Phone number is required"
        }else if(!phoneRegex.test(values.phone)){
            errors.phone = "Phone number is invalid"
        }
        
        return errors
    }
    
    
export {capitalize, validate}