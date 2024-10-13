export const validateEmail =(email) => {
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    return regex.test(email);

};

// export const getInitials =(name)=>{
//     if(!name) return "";

//     const words = name.spilt(" ");
//     let initials="";
    
//     for(let i=0;i<Math.min(words.length,2);i++){
//         initials += words[i][0];
//     }
//     return initials.toUpperCase();
// }

export const getInitials = (name) => {
    const initials = name.split(' ').map((n) => n[0]).join('');
    return initials.toUpperCase();
  };
  